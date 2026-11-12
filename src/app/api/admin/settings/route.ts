import { NextResponse, connection } from "next/server";
import { getAdminSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { verifyAdminSession } from "@/lib/adminAuth";
import { initialSiteSettings } from "@/lib/databaseSeedData";

let memorySettings: Record<string, string> = { ...initialSiteSettings };

export async function GET() {
  await connection();

  if (isSupabaseConfigured) {
    const supabase = getAdminSupabase();
    if (supabase) {
      const { data, error } = await supabase.from("site_settings").select("key, value");
      if (!error && data && data.length > 0) {
        const settingsMap: Record<string, string> = { ...initialSiteSettings };
        data.forEach((item) => {
          if (item.key && !item.key.startsWith("cms_") && item.key !== "settings") {
            settingsMap[item.key] = item.value;
          }
        });
        return NextResponse.json(
          { success: true, data: settingsMap, source: "supabase" },
          { headers: { "Cache-Control": "no-store, max-age=0" } }
        );
      }
    }
  }

  return NextResponse.json(
    {
      success: true,
      data: memorySettings,
      source: "local_database",
    },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
  );
}

export async function POST(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const rawSettings =
      body?.settings && typeof body.settings === "object" && !Array.isArray(body.settings)
        ? body.settings
        : body;

    const payload: Record<string, string> = {};
    for (const [key, value] of Object.entries(rawSettings || {})) {
      if (value !== undefined && value !== null && typeof value !== "object") {
        payload[key] = String(value);
      }
    }

    if (Object.keys(payload).length === 0) {
      return NextResponse.json(
        { success: false, message: "No valid settings provided" },
        { status: 400 }
      );
    }

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (!supabase) {
        return NextResponse.json(
          { success: false, message: "Database client unavailable" },
          { status: 500 }
        );
      }

      const rows = Object.entries(payload).map(([key, value]) => ({
        key,
        value,
        updated_at: new Date().toISOString(),
      }));

      const { error } = await supabase
        .from("site_settings")
        .upsert(rows, { onConflict: "key" });

      if (error) {
        return NextResponse.json(
          { success: false, message: error.message || "Failed to save settings to database" },
          { status: 500 }
        );
      }
    }

    memorySettings = { ...memorySettings, ...payload };

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
