import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/adminAuth";
import { getNavbarCMS, updateNavbarCMS } from "@/lib/cmsService";

export async function GET() {
  const data = await getNavbarCMS();
  return NextResponse.json({ success: true, data });
}

export async function PUT(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { items, cta } = await request.json();
    if (!items || !Array.isArray(items)) {
      return NextResponse.json({ success: false, message: "Items array is required" }, { status: 400 });
    }

    const result = await updateNavbarCMS(items, cta);
    return NextResponse.json(result);
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error updating navbar" },
      { status: 500 }
    );
  }
}
