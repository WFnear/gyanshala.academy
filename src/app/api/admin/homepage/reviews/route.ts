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
        .from("student_reviews")
        .select("*")
        .order("order_index", { ascending: true });
      if (!error && data && data.length > 0) {
        return NextResponse.json({ success: true, data, source: "supabase" });
      }
    }
  }

  return NextResponse.json({ success: true, data: memoryReviews, source: "local_database" });
}

export async function POST(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { name, review, rating, image, source } = body;

    if (!name || !review) {
      return NextResponse.json({ success: false, message: "Reviewer name and review text required" }, { status: 400 });
    }

    const newReview: StudentReview = {
      id: "rev-" + Date.now(),
      name,
      image: image || "/Review/KaranPareek.png",
      rating: Number(rating) || 5,
      review,
      source: source || "Google Review",
      is_active: true,
      order_index: memoryReviews.length + 1,
    };

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const { data, error } = await supabase.from("student_reviews").insert([newReview]).select().single();
        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    memoryReviews.push(newReview);
    return NextResponse.json({ success: true, data: newReview, source: "local_database" });
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
    const { id } = body;
    if (!id) {
      return NextResponse.json({ success: false, message: "Review ID required" }, { status: 400 });
    }

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const { data, error } = await supabase
          .from("student_reviews")
          .update({ ...body, updated_at: new Date().toISOString() })
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
      memoryReviews[index] = { ...memoryReviews[index], ...body };
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

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        await supabase.from("student_reviews").delete().eq("id", id);
      }
    }

    memoryReviews = memoryReviews.filter((r) => r.id !== id);
    return NextResponse.json({ success: true, message: "Review removed" });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error deleting review" },
      { status: 500 }
    );
  }
}
