import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/adminAuth";
import { getFooterCMS, updateFooterCMS } from "@/lib/cmsService";

export async function GET() {
  const footer = await getFooterCMS();
  return NextResponse.json({ success: true, data: footer });
}

export async function PUT(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const result = await updateFooterCMS(body);
    return NextResponse.json(result);
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error updating footer" },
      { status: 500 }
    );
  }
}
