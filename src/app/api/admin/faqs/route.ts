import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getAdminSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { verifyAdminSession } from "@/lib/adminAuth";

const FAQS_FILE_PATH = path.join(process.cwd(), "src", "data", "faqsData.json");

function getLocalFaqs(): any[] {
  try {
    const raw = fs.readFileSync(FAQS_FILE_PATH, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading faqsData.json:", err);
    return [];
  }
}

function saveLocalFaqs(data: any[]): boolean {
  try {
    fs.writeFileSync(FAQS_FILE_PATH, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Error writing faqsData.json:", err);
    return false;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  let faqs = getLocalFaqs();

  // Try fetching from Supabase if configured
  if (isSupabaseConfigured) {
    try {
      const supabase = getAdminSupabase();
      if (supabase) {
        let query = supabase.from("faqs").select("*").order("order_index", { ascending: true });
        if (category && category !== "all") {
          query = query.eq("category", category);
        }
        const { data, error } = await query;
        if (!error && data && data.length > 0) {
          return NextResponse.json({ success: true, data, count: data.length, source: "supabase" });
        }
      }
    } catch (e) {
      // quiet fallback
    }
  }

  if (category && category !== "all") {
    faqs = faqs.filter((f) => f.category === category);
  }

  return NextResponse.json({ success: true, data: faqs, count: faqs.length, source: "local_database" });
}

export async function POST(request: Request) {
  const isAuth = await verifyAdminSession(request);
  if (!isAuth) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { question, answers, answer, category, categoryLabel, list, postList } = body;

    if (!question || (!answers && !answer)) {
      return NextResponse.json(
        { success: false, message: "Question and Answer are required" },
        { status: 400 }
      );
    }

    const faqs = getLocalFaqs();
    const newFaq = {
      id: Date.now(),
      category: category || "general",
      categoryLabel: categoryLabel || "General",
      question,
      answers: answers || (answer ? [answer] : []),
      list: list || undefined,
      postList: postList || undefined,
      is_active: true,
      order_index: faqs.length + 1,
    };

    faqs.push(newFaq);
    saveLocalFaqs(faqs);

    if (isSupabaseConfigured) {
      try {
        const supabase = getAdminSupabase();
        if (supabase) {
          await supabase.from("faqs").insert([
            {
              category: newFaq.category,
              category_label: newFaq.categoryLabel,
              question: newFaq.question,
              answer: Array.isArray(newFaq.answers) ? newFaq.answers.join("\n\n") : String(newFaq.answers),
              order_index: newFaq.order_index,
              is_active: true,
            },
          ]);
        }
      } catch (e) {
        // quiet
      }
    }

    return NextResponse.json({ success: true, data: newFaq });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error creating FAQ" },
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
    const { id, question, answers, answer, category, categoryLabel, list, postList, is_active } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "FAQ ID is required" }, { status: 400 });
    }

    const faqs = getLocalFaqs();
    const index = faqs.findIndex((f) => String(f.id) === String(id));
    if (index === -1) {
      return NextResponse.json({ success: false, message: "FAQ not found" }, { status: 404 });
    }

    if (question !== undefined) faqs[index].question = question;
    if (answers !== undefined) faqs[index].answers = answers;
    else if (answer !== undefined) faqs[index].answers = [answer];
    if (category !== undefined) faqs[index].category = category;
    if (categoryLabel !== undefined) faqs[index].categoryLabel = categoryLabel;
    if (list !== undefined) faqs[index].list = list;
    if (postList !== undefined) faqs[index].postList = postList;
    if (is_active !== undefined) faqs[index].is_active = is_active;

    saveLocalFaqs(faqs);

    if (isSupabaseConfigured) {
      try {
        const supabase = getAdminSupabase();
        if (supabase) {
          await supabase
            .from("faqs")
            .update({
              question: faqs[index].question,
              answer: Array.isArray(faqs[index].answers) ? faqs[index].answers.join("\n\n") : "",
              is_active: faqs[index].is_active,
            })
            .eq("id", id);
        }
      } catch (e) {
        // quiet
      }
    }

    return NextResponse.json({ success: true, data: faqs[index] });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error updating FAQ" },
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
      return NextResponse.json({ success: false, message: "Missing id" }, { status: 400 });
    }

    let faqs = getLocalFaqs();
    faqs = faqs.filter((f) => String(f.id) !== String(id));
    saveLocalFaqs(faqs);

    if (isSupabaseConfigured) {
      try {
        const supabase = getAdminSupabase();
        if (supabase) {
          await supabase.from("faqs").delete().eq("id", id);
        }
      } catch (e) {
        // quiet
      }
    }

    return NextResponse.json({ success: true, message: "FAQ deleted" });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error deleting FAQ" },
      { status: 500 }
    );
  }
}
