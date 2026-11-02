import { NextResponse } from "next/server";
import { getAdminSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { verifyAdminSession } from "@/lib/adminAuth";

export interface GermanCourse {
  id: string;
  badge: string;
  name: string;
  image: string;
  href: string;
  is_active: boolean;
  order_index?: number;
}

const defaultGermanCourses: GermanCourse[] = [
  { id: "a1", badge: "A1 Level", name: "A1 – Beginner Level", image: "/greenbg.jpg", href: "/german/a1", is_active: true, order_index: 1 },
  { id: "a2", badge: "A2 Level", name: "A2 – Elementary Level", image: "/greenbg.jpg", href: "/german/a2", is_active: true, order_index: 2 },
  { id: "b1", badge: "B1 Level", name: "B1 – Intermediate Level", image: "/greenbg.jpg", href: "/german/b1", is_active: true, order_index: 3 },
  { id: "b2", badge: "B2 Level", name: "B2 – Upper-Intermediate Level", image: "/greenbg.jpg", href: "/german/b2", is_active: true, order_index: 4 },
  { id: "c1", badge: "C1 Level", name: "C1 – Advanced Level", image: "/greenbg.jpg", href: "/german/c1", is_active: true, order_index: 5 },
  { id: "c2", badge: "C2 Level", name: "C2 – Proficiency Level", image: "/greenbg.jpg", href: "/german/c2", is_active: true, order_index: 6 },
];

let memoryCourses: GermanCourse[] = [...defaultGermanCourses];

export async function GET() {
  if (isSupabaseConfigured) {
    const supabase = getAdminSupabase();
    if (supabase) {
      const { data, error } = await supabase
        .from("german_courses")
        .select("*")
        .order("order_index", { ascending: true });
      if (!error && data && data.length > 0) {
        return NextResponse.json({ success: true, data, source: "supabase" });
      }
    }
  }

  return NextResponse.json({
    success: true,
    data: memoryCourses,
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
    const { badge, name, image, href, is_active } = body;

    if (!badge || !name || !href) {
      return NextResponse.json({ success: false, message: "Badge, Name and Link are required" }, { status: 400 });
    }

    const newCourse: GermanCourse = {
      id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      badge,
      name,
      image: image || "/greenbg.jpg",
      href,
      is_active: is_active !== false,
      order_index: memoryCourses.length + 1,
    };

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const { data, error } = await supabase.from("german_courses").insert([newCourse]).select().single();
        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    memoryCourses.push(newCourse);
    return NextResponse.json({ success: true, data: newCourse, source: "local_database" });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error creating course" },
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
    const { id, badge, name, image, href, is_active } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "Course id is required" }, { status: 400 });
    }

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const updatePayload: any = {};
        if (badge !== undefined) updatePayload.badge = badge;
        if (name !== undefined) updatePayload.name = name;
        if (image !== undefined) updatePayload.image = image;
        if (href !== undefined) updatePayload.href = href;
        if (is_active !== undefined) updatePayload.is_active = is_active;

        const { data, error } = await supabase
          .from("german_courses")
          .update(updatePayload)
          .eq("id", id)
          .select()
          .single();

        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    const index = memoryCourses.findIndex((c) => c.id === id);
    if (index !== -1) {
      memoryCourses[index] = {
        ...memoryCourses[index],
        ...(badge !== undefined && { badge }),
        ...(name !== undefined && { name }),
        ...(image !== undefined && { image }),
        ...(href !== undefined && { href }),
        ...(is_active !== undefined && { is_active }),
      };
      return NextResponse.json({ success: true, data: memoryCourses[index], source: "local_database" });
    }

    return NextResponse.json({ success: false, message: "Course not found" }, { status: 404 });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error updating course" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ success: false, message: "Course id required" }, { status: 400 });
  }

  if (isSupabaseConfigured) {
    const supabase = getAdminSupabase();
    if (supabase) {
      await supabase.from("german_courses").delete().eq("id", id);
    }
  }

  memoryCourses = memoryCourses.filter((c) => c.id !== id);
  return NextResponse.json({ success: true, message: "Course deleted" });
}
