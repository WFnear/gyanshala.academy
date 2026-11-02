import { NextResponse } from "next/server";
import { getAdminSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { verifyAdminSession } from "@/lib/adminAuth";
import { initialHeroSlides, HeroSlide } from "@/lib/databaseSeedData";

let memorySlides: HeroSlide[] = [...initialHeroSlides];

export async function GET() {
  if (isSupabaseConfigured) {
    const supabase = getAdminSupabase();
    if (supabase) {
      const { data, error } = await supabase
        .from("hero_slides")
        .select("*")
        .order("order_index", { ascending: true });
      if (!error && data && data.length > 0) {
        return NextResponse.json({ success: true, data, source: "supabase" });
      }
    }
  }

  return NextResponse.json({ success: true, data: memorySlides, source: "local_database" });
}

export async function POST(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const newSlide: HeroSlide = {
      id: Date.now(),
      image: body.image || "/Hero/IMG_20250806_170204918_HDR.jpg",
      badge: body.badge || "🇩🇪 Gyanshala Academy",
      title: body.title || "New Slide Title",
      highlight: body.highlight || "",
      description: body.description || "",
      primaryBtn: body.primaryBtn || { text: "Learn More", href: "/german" },
      secondaryBtn: body.secondaryBtn || { text: "Enquiry", href: "/enquiry" },
      is_active: true,
      order_index: memorySlides.length + 1,
    };

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const { data, error } = await supabase.from("hero_slides").insert([newSlide]).select().single();
        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    memorySlides.push(newSlide);
    return NextResponse.json({ success: true, data: newSlide, source: "local_database" });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error creating slide" },
      { status: 500 }
    );
  }
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
      return NextResponse.json({ success: false, message: "Slide id is required" }, { status: 400 });
    }

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const { data, error } = await supabase
          .from("hero_slides")
          .update({ ...body, updated_at: new Date().toISOString() })
          .eq("id", id)
          .select()
          .single();
        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    const index = memorySlides.findIndex((s) => s.id === id);
    if (index !== -1) {
      memorySlides[index] = { ...memorySlides[index], ...body };
      return NextResponse.json({ success: true, data: memorySlides[index], source: "local_database" });
    }

    return NextResponse.json({ success: false, message: "Slide not found" }, { status: 404 });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error updating slide" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get("id"));

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        await supabase.from("hero_slides").delete().eq("id", id);
      }
    }

    memorySlides = memorySlides.filter((s) => s.id !== id);
    return NextResponse.json({ success: true, message: "Slide removed" });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error deleting slide" },
      { status: 500 }
    );
  }
}
