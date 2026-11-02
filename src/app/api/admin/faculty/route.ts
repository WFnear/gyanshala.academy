import { NextResponse } from "next/server";
import { getAdminSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { verifyAdminSession } from "@/lib/adminAuth";
import { initialFacultyMembers, FacultyMember } from "@/lib/databaseSeedData";

let memoryFaculty: FacultyMember[] = [...initialFacultyMembers];

export async function GET() {
  if (isSupabaseConfigured) {
    const supabase = getAdminSupabase();
    if (supabase) {
      const { data, error } = await supabase
        .from("faculty_members")
        .select("*")
        .order("order_index", { ascending: true });
      if (!error && data && data.length > 0) {
        return NextResponse.json({ success: true, data, source: "supabase" });
      }
    }
  }

  return NextResponse.json({ success: true, data: memoryFaculty, source: "local_database" });
}

export async function POST(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { name, role, image, bio } = body;

    if (!name || !role) {
      return NextResponse.json({ success: false, message: "Name and role required" }, { status: 400 });
    }

    const newFaculty: FacultyMember = {
      id: "fac-" + Date.now(),
      name,
      role,
      image: image || "/teammembers/Dilip Sinsinwar Sir German Language Expert.png",
      bio: bio || "",
      is_active: true,
      order_index: memoryFaculty.length + 1,
    };

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const { data, error } = await supabase.from("faculty_members").insert([newFaculty]).select().single();
        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    memoryFaculty.push(newFaculty);
    return NextResponse.json({ success: true, data: newFaculty, source: "local_database" });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error creating faculty" },
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
      return NextResponse.json({ success: false, message: "Faculty ID required" }, { status: 400 });
    }

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const { data, error } = await supabase
          .from("faculty_members")
          .update({ ...body, updated_at: new Date().toISOString() })
          .eq("id", id)
          .select()
          .single();
        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    const index = memoryFaculty.findIndex((f) => f.id === id);
    if (index !== -1) {
      memoryFaculty[index] = { ...memoryFaculty[index], ...body };
      return NextResponse.json({ success: true, data: memoryFaculty[index], source: "local_database" });
    }

    return NextResponse.json({ success: false, message: "Faculty not found" }, { status: 404 });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error updating faculty" },
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
        await supabase.from("faculty_members").delete().eq("id", id);
      }
    }

    memoryFaculty = memoryFaculty.filter((f) => f.id !== id);
    return NextResponse.json({ success: true, message: "Faculty removed" });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error deleting faculty" },
      { status: 500 }
    );
  }
}
