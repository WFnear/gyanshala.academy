import { NextResponse } from "next/server";
import { getAdminSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { verifyAdminSession } from "@/lib/adminAuth";
import { EnquiryLead } from "@/lib/databaseSeedData";
import { getMemoryLeads, addMemoryLead, updateMemoryLead, deleteMemoryLead } from "@/lib/leadsStore";

export async function GET(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const statusFilter = searchParams.get("status");
  const courseFilter = searchParams.get("course");
  const searchQuery = searchParams.get("search")?.toLowerCase();
  const format = searchParams.get("format");

  let leads: EnquiryLead[] = [];
  let source = "local_database";

  if (isSupabaseConfigured) {
    const supabase = getAdminSupabase();
    if (supabase) {
      let query = supabase.from("enquiries").select("*").order("created_at", { ascending: false });

      if (statusFilter && statusFilter !== "all") {
        query = query.eq("status", statusFilter);
      }
      if (courseFilter && courseFilter !== "all") {
        query = query.eq("course", courseFilter);
      }

      const { data, error } = await query;
      if (!error && data) {
        leads = data as EnquiryLead[];
        source = "supabase";
      }
    }
  }

  // Fallback to populated real leads if Supabase not configured or query empty
  if (leads.length === 0 && source !== "supabase") {
    leads = [...getMemoryLeads()];
    if (statusFilter && statusFilter !== "all") {
      leads = leads.filter((l) => l.status === statusFilter);
    }
    if (courseFilter && courseFilter !== "all") {
      leads = leads.filter((l) => l.course === courseFilter);
    }
  }

  if (searchQuery) {
    leads = leads.filter(
      (l) =>
        l.name?.toLowerCase().includes(searchQuery) ||
        l.email?.toLowerCase().includes(searchQuery) ||
        l.phone?.includes(searchQuery) ||
        l.course?.toLowerCase().includes(searchQuery) ||
        l.message?.toLowerCase().includes(searchQuery)
    );
  }

  // Handle CSV format export
  if (format === "csv") {
    const headers = "ID,Name,Email,Phone,Course,Message,Status,Date\n";
    const rows = leads
      .map(
        (l) =>
          `"${l.id}","${(l.name || "").replace(/"/g, '""')}","${l.email}","${l.phone}","${(l.course || "").replace(/"/g, '""')}","${(l.message || "").replace(/"/g, '""')}","${l.status}","${l.created_at}"`
      )
      .join("\n");

    return new Response(headers + rows, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="gyanshala-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  }

  return NextResponse.json({
    success: true,
    data: leads,
    source,
  });
}

export async function POST(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { name, email, phone, course, message, notes, status } = body;

    if (!name || !phone) {
      return NextResponse.json({ success: false, message: "Name and Phone are required" }, { status: 400 });
    }

    const newLead: EnquiryLead = {
      id: "lead-" + Date.now(),
      name,
      email: email || "no-email@gyanshala.in",
      phone,
      course: course || "General Enquiry",
      message: message || "Directly added by admin",
      status: status || "new",
      notes: notes || "",
      created_at: new Date().toISOString(),
    };

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const { data, error } = await supabase.from("enquiries").insert([newLead]).select().single();
        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    // In-memory add
    addMemoryLead(newLead);
    return NextResponse.json({ success: true, data: newLead, source: "local_database" });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error creating lead" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, status, notes } = await request.json();
    if (!id) {
      return NextResponse.json({ success: false, message: "Missing lead id" }, { status: 400 });
    }

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const updateData: any = { updated_at: new Date().toISOString() };
        if (status) updateData.status = status;
        if (notes !== undefined) updateData.notes = notes;

        const { data, error } = await supabase.from("enquiries").update(updateData).eq("id", id).select().single();
        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    // In-memory update
    const updated = updateMemoryLead(id, { status, notes });
    if (updated) {
      return NextResponse.json({ success: true, data: updated, source: "local_database" });
    }

    return NextResponse.json({ success: false, message: "Lead not found" }, { status: 404 });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error updating lead" },
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

    if (!id) {
      return NextResponse.json({ success: false, message: "Missing lead id" }, { status: 400 });
    }

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const { error } = await supabase.from("enquiries").delete().eq("id", id);
        if (!error) {
          return NextResponse.json({ success: true, message: "Lead deleted from Supabase" });
        }
      }
    }

    // In-memory delete
    deleteMemoryLead(id);
    return NextResponse.json({ success: true, message: "Lead removed" });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error deleting lead" },
      { status: 500 }
    );
  }
}
