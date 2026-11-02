import { NextResponse } from "next/server";
import { getAdminSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { verifyAdminSession } from "@/lib/adminAuth";
import { initialSiteSettings } from "@/lib/databaseSeedData";

let memorySettings: Record<string, string> = { ...initialSiteSettings };

export async function GET() {
  if (isSupabaseConfigured) {
    const supabase = getAdminSupabase();
    if (supabase) {
      const { data, error } = await supabase.from("site_settings").select("*");
      if (!error && data && data.length > 0) {
        const settingsMap: Record<string, string> = {};
        data.forEach((item) => {
          settingsMap[item.key] = item.value;
        });
        return NextResponse.json({ success: true, data: settingsMap, source: "supabase" });
      }
    }
  }

  return NextResponse.json({
    success: true,
    data: memorySettings,
    source: "local_database",
  });
}

export async function POST(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const upsertPromises = Object.entries(body).map(([key, value]) =>
          supabase.from("site_settings").upsert({
            key,
            value: String(value),
            updated_at: new Date().toISOString(),
          })
        );
        await Promise.all(upsertPromises);
      }
    }

    memorySettings = { ...memorySettings, ...body };

    return NextResponse.json({
      success: true,
      message: "Settings updated successfully",
      data: memorySettings,
    });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error saving settings" },
      { status: 500 }
    );
  }
}
