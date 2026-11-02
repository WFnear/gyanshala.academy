import { NextResponse } from "next/server";
import { getAdminSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { verifyAdminSession } from "@/lib/adminAuth";
import { initialStudentsInGermany, StudentInGermany } from "@/lib/databaseSeedData";

let memoryStudents: StudentInGermany[] = [...initialStudentsInGermany];

export async function GET() {
  if (isSupabaseConfigured) {
    const supabase = getAdminSupabase();
    if (supabase) {
      const { data, error } = await supabase
        .from("students_in_germany")
        .select("*")
        .order("order_index", { ascending: true });
      if (!error && data && data.length > 0) {
        return NextResponse.json({ success: true, data, source: "supabase" });
      }
    }
  }

  return NextResponse.json({ success: true, data: memoryStudents, source: "local_database" });
}

export async function POST(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { name, image, destination, course_cleared, degree, university, year } = body;

    if (!name) {
      return NextResponse.json({ success: false, message: "Student name is required" }, { status: 400 });
    }

    const newStudent: StudentInGermany = {
      id: "sig-" + Date.now(),
      name,
      image: image || "/studentsingermany/AKSHAT PANDEY.png",
      degree: degree || course_cleared || "",
      university: university || destination || "",
      destination: university || destination || "Germany",
      course_cleared: degree || course_cleared || "",
      year: year || "2024",
      is_active: true,
      order_index: memoryStudents.length + 1,
    };

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const { data, error } = await supabase.from("students_in_germany").insert([newStudent]).select().single();
        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    memoryStudents.push(newStudent);
    return NextResponse.json({ success: true, data: newStudent, source: "local_database" });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error adding student" },
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
      return NextResponse.json({ success: false, message: "Student id is required" }, { status: 400 });
    }

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const { data, error } = await supabase
          .from("students_in_germany")
          .update({ ...body, updated_at: new Date().toISOString() })
          .eq("id", id)
          .select()
          .single();
        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    const index = memoryStudents.findIndex((s) => s.id === id);
    if (index !== -1) {
      memoryStudents[index] = { ...memoryStudents[index], ...body };
      return NextResponse.json({ success: true, data: memoryStudents[index], source: "local_database" });
    }

    return NextResponse.json({ success: false, message: "Student not found" }, { status: 404 });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error updating student" },
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
        await supabase.from("students_in_germany").delete().eq("id", id);
      }
    }

    memoryStudents = memoryStudents.filter((s) => s.id !== id);
    return NextResponse.json({ success: true, message: "Student removed" });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error deleting student" },
      { status: 500 }
    );
  }
}
