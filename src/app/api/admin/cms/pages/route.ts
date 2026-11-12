import { NextResponse } from "next/server";
import { connection } from "next/server";
import { verifyAdminSession } from "@/lib/adminAuth";
import { getPagesCMS, updatePagesCMS } from "@/lib/cmsService";

export async function GET() {
  await connection();
  const pages = await getPagesCMS();
  return NextResponse.json(
    { success: true, data: pages },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
  );
}

export async function PUT(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { pages } = await request.json();
    if (!pages || !Array.isArray(pages)) {
      return NextResponse.json({ success: false, message: "Pages array required" }, { status: 400 });
    }

    const result = await updatePagesCMS(pages);
    return NextResponse.json(result, { status: result.success ? 200 : 500 });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error updating pages" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { slug, title, meta_title, meta_description } = body;
    if (!slug || !title) {
      return NextResponse.json({ success: false, message: "Slug and Title required" }, { status: 400 });
    }

    const pages = await getPagesCMS();
    const newPage = {
      id: "page-" + Date.now(),
      slug: slug.startsWith("/") ? slug : "/" + slug,
      title,
      meta_title: meta_title || title + " | Gyanshala Academy",
      meta_description: meta_description || "",
      is_published: true,
    };

    pages.push(newPage);
    const result = await updatePagesCMS(pages);
    if (!result.success) {
      return NextResponse.json(result, { status: 500 });
    }
    return NextResponse.json({ success: true, data: newPage });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error creating page" },
      { status: 500 }
    );
  }
}
