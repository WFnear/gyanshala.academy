import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file was selected for upload." },
        { status: 400 }
      );
    }

    // Validate image format
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

    // Limit size to 15MB
    if (file.size > 15 * 1024 * 1024) {
      return NextResponse.json(
        {
          success: false,
          message: "Image file is too large. Maximum allowed size is 15 MB.",
        },
        { status: 400 }
      );
    }

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Create safe unique filename
    const ext = path.extname(file.name) || `.${file.type.split("/")[1] || "png"}`;
    const cleanBase = path
      .basename(file.name, ext)
      .replace(/[^a-zA-Z0-9_-]/g, "_")
      .slice(0, 35);
    const uniqueFileName = `${Date.now()}_${cleanBase}${ext}`;
    const targetFilePath = path.join(uploadsDir, uniqueFileName);

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    fs.writeFileSync(targetFilePath, buffer);

    const publicUrl = `/uploads/${uniqueFileName}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      filename: uniqueFileName,
      message: "Image uploaded successfully",
    });
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
