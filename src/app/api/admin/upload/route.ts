import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getAdminSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { verifyAdminSession } from "@/lib/adminAuth";

export async function POST(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file was selected for upload." },
        { status: 400 }
      );
    }

    const validMimes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/svg+xml",
      "image/avif",
    ];

    if (!validMimes.includes(file.type.toLowerCase())) {
      return NextResponse.json(
        {
          success: false,
          message: "Please upload an image file (JPG, PNG, WebP, GIF, or SVG).",
        },
        { status: 400 }
      );
    }

    if (file.size > 15 * 1024 * 1024) {
      return NextResponse.json(
        {
          success: false,
          message: "Image file is too large. Maximum allowed size is 15 MB.",
        },
        { status: 400 }
      );
    }

    const ext = path.extname(file.name) || `.${file.type.split("/")[1] || "png"}`;
    const cleanBase = path
      .basename(file.name, ext)
      .replace(/[^a-zA-Z0-9_-]/g, "_")
      .slice(0, 35);
    const uniqueFileName = `${Date.now()}_${cleanBase}${ext}`;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 1. Try Supabase Storage first when configured (persists across live serverless deployments)
    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        try {
          const { error: uploadErr } = await supabase.storage
            .from("uploads")
            .upload(uniqueFileName, buffer, {
              contentType: file.type,
              upsert: true,
            });
          if (!uploadErr) {
            const { data: pub } = supabase.storage.from("uploads").getPublicUrl(uniqueFileName);
            if (pub?.publicUrl) {
              return NextResponse.json({
                success: true,
                url: pub.publicUrl,
                filename: uniqueFileName,
                message: "Image uploaded successfully",
              });
            }
          }
        } catch {
          // Fall back below if storage bucket is not configured
        }
      }
    }

    // 2. Try local public/uploads directory (works in local dev / writable servers)
    try {
      const uploadsDir = path.join(process.cwd(), "public", "uploads");
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }
      const targetFilePath = path.join(uploadsDir, uniqueFileName);
      fs.writeFileSync(targetFilePath, buffer);

      return NextResponse.json({
        success: true,
        url: `/uploads/${uniqueFileName}`,
        filename: uniqueFileName,
        message: "Image uploaded successfully",
      });
    } catch {
      // Read-only serverless filesystem fallback: inline data URL for images <= 2 MB
      if (buffer.length <= 2 * 1024 * 1024) {
        const dataUrl = `data:${file.type};base64,${buffer.toString("base64")}`;
        return NextResponse.json({
          success: true,
          url: dataUrl,
          filename: uniqueFileName,
          message: "Image encoded successfully",
        });
      }
      return NextResponse.json(
        {
          success: false,
          message: "Server filesystem is read-only. Create a public 'uploads' bucket in Supabase Storage or upload an image under 2 MB.",
        },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error("Admin image upload error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to upload image. Please try again.",
      },
      { status: 500 }
    );
  }
}
