import { NextResponse } from "next/server";
import { getAdminSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { verifyAdminSession } from "@/lib/adminAuth";
import { initialStudentReviews, StudentReview } from "@/lib/databaseSeedData";

let memoryReviews: StudentReview[] = [...initialStudentReviews];

export async function GET() {
  if (isSupabaseConfigured) {
    const supabase = getAdminSupabase();
    if (supabase) {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("order_index", { ascending: true });
      if (!error && data && data.length > 0) {
        return NextResponse.json({
          success: true,
          data,
          source: "supabase",
        });
      }
    }
  }

  return NextResponse.json({
    success: true,
    data: memoryReviews,
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
    const { name, image, rating, review, is_active } = body;

    if (!name || !review) {
      return NextResponse.json({ success: false, message: "Name and review text are required" }, { status: 400 });
    }

    const newRev: StudentReview = {
      id: "rev-" + Date.now(),
      name,
      image: image || "/Review/KaranPareek.png",
      rating: Number(rating) || 5,
      review,
      source: "Google Review",
      is_active: is_active !== false,
      order_index: memoryReviews.length + 1,
    };

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const { data, error } = await supabase.from("testimonials").insert([newRev]).select().single();
        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    memoryReviews.unshift(newRev);
    return NextResponse.json({ success: true, data: newRev, source: "local_database" });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error creating review" },
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
    const { id, name, image, rating, review, is_active } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "Review id is required" }, { status: 400 });
    }

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const updatePayload: any = {};
        if (name !== undefined) updatePayload.name = name;
        if (image !== undefined) updatePayload.image = image;
        if (rating !== undefined) updatePayload.rating = Number(rating);
        if (review !== undefined) updatePayload.review = review;
        if (is_active !== undefined) updatePayload.is_active = is_active;

        const { data, error } = await supabase
          .from("testimonials")
          .update(updatePayload)
          .eq("id", id)
          .select()
          .single();

        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    const index = memoryReviews.findIndex((r) => r.id === id);
    if (index !== -1) {
      memoryReviews[index] = {
        ...memoryReviews[index],
        ...(name !== undefined && { name }),
        ...(image !== undefined && { image }),
        ...(rating !== undefined && { rating: Number(rating) }),
        ...(review !== undefined && { review }),
        ...(is_active !== undefined && { is_active }),
      };
      return NextResponse.json({ success: true, data: memoryReviews[index], source: "local_database" });
    }

    return NextResponse.json({ success: false, message: "Review not found" }, { status: 404 });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error updating review" },
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
    return NextResponse.json({ success: false, message: "Review id is required" }, { status: 400 });
  }

  if (isSupabaseConfigured) {
    const supabase = getAdminSupabase();
    if (supabase) {
      await supabase.from("testimonials").delete().eq("id", id);
    }
  }

  memoryReviews = memoryReviews.filter((r) => r.id !== id);
  return NextResponse.json({ success: true, message: "Review deleted" });
}
