import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/adminAuth";
import { getHomepageSectionsCMS, updateHomepageSectionsCMS } from "@/lib/cmsService";

export async function GET() {
  const sections = await getHomepageSectionsCMS();
  return NextResponse.json({ success: true, data: sections });
}

export async function PUT(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { sections } = await request.json();
    if (!sections || !Array.isArray(sections)) {
      return NextResponse.json({ success: false, message: "Sections array required" }, { status: 400 });
    }

    const result = await updateHomepageSectionsCMS(sections);
    return NextResponse.json(result);
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error updating homepage" },
      { status: 500 }
    );
  }
}
