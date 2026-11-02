import { NextResponse } from "next/server";
import { getAdminSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { verifyAdminSession } from "@/lib/adminAuth";
import { initialWhyChoose, WhyChoosePoint } from "@/lib/databaseSeedData";

let memoryWhyChoose: WhyChoosePoint[] = [...initialWhyChoose];

export async function GET() {
  if (isSupabaseConfigured) {
    const supabase = getAdminSupabase();
    if (supabase) {
      const { data, error } = await supabase
        .from("why_choose")
        .select("*")
        .order("order_index", { ascending: true });
      if (!error && data && data.length > 0) {
        return NextResponse.json({ success: true, data, source: "supabase" });
      }
    }
  }

  return NextResponse.json({ success: true, data: memoryWhyChoose, source: "local_database" });
}

export async function PUT(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id } = body;
    if (!id) {
      return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
    }

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const { data, error } = await supabase
          .from("why_choose")
          .update({ ...body, updated_at: new Date().toISOString() })
          .eq("id", id)
          .select()
          .single();
        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    const index = memoryWhyChoose.findIndex((p) => p.id === id);
    if (index !== -1) {
      memoryWhyChoose[index] = { ...memoryWhyChoose[index], ...body };
      return NextResponse.json({ success: true, data: memoryWhyChoose[index], source: "local_database" });
    }

    return NextResponse.json({ success: false, message: "Point not found" }, { status: 404 });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error updating" },
      { status: 500 }
    );
  }
}
