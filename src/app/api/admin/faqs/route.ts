import { NextResponse, connection } from "next/server";
import fs from "fs";
import path from "path";
import { isSupabaseConfigured } from "@/lib/supabase";
import { verifyAdminSession } from "@/lib/adminAuth";
import { getSiteSettingJson, saveSiteSettingJson } from "@/lib/cmsService";

const FAQS_FILE_PATH = path.join(process.cwd(), "src", "data", "faqsData.json");
const SETTINGS_KEY = "cms_faqs";

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
    console.warn("Local faqsData.json write skipped:", err instanceof Error ? err.message : err);
    return false;
  }
}

async function loadAllFaqs(): Promise<{ faqs: any[]; source: string }> {
  if (isSupabaseConfigured) {
    const remote = await getSiteSettingJson<any[]>(SETTINGS_KEY);
    if (Array.isArray(remote) && remote.length > 0) {
      return { faqs: remote, source: "supabase" };
    }
  }
  return { faqs: getLocalFaqs(), source: "local_database" };
}

async function persistAllFaqs(faqs: any[]): Promise<{ ok: boolean; error?: string }> {
  const localSaved = saveLocalFaqs(faqs);
  if (isSupabaseConfigured) {
    const remote = await saveSiteSettingJson(SETTINGS_KEY, faqs);
    if (!remote.ok) {
      return { ok: false, error: remote.error || "Failed to save FAQs to database." };
    }
    return { ok: true };
  }
  if (!localSaved) {
    return { ok: false, error: "Database is not configured and server filesystem is read-only." };
  }
  return { ok: true };
}

export async function GET(request: Request) {
  await connection();
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const { faqs: allFaqs, source } = await loadAllFaqs();
  let faqs = allFaqs;

  if (category && category !== "all") {
    faqs = faqs.filter((f) => f.category === category);
  }

  return NextResponse.json(
    { success: true, data: faqs, count: faqs.length, source },
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
    const { question, answers, answer, category, categoryLabel, list, postList } = body;

    if (!question || (!answers && !answer)) {
      return NextResponse.json(
        { success: false, message: "Question and Answer are required" },
        { status: 400 }
      );
    }

    const { faqs } = await loadAllFaqs();
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

    const next = [...faqs, newFaq];
    const saved = await persistAllFaqs(next);
    if (!saved.ok) {
      return NextResponse.json({ success: false, message: saved.error }, { status: 500 });
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

    const { faqs } = await loadAllFaqs();
    const next = [...faqs];
    const index = next.findIndex((f) => String(f.id) === String(id));
    if (index === -1) {
      return NextResponse.json({ success: false, message: "FAQ not found" }, { status: 404 });
    }

    const updated = { ...next[index] };
    if (question !== undefined) updated.question = question;
    if (answers !== undefined) updated.answers = answers;
    else if (answer !== undefined) updated.answers = [answer];
    if (category !== undefined) updated.category = category;
    if (categoryLabel !== undefined) updated.categoryLabel = categoryLabel;
    if (list !== undefined) updated.list = list;
    if (postList !== undefined) updated.postList = postList;
    if (is_active !== undefined) updated.is_active = is_active;
    next[index] = updated;

    const saved = await persistAllFaqs(next);
    if (!saved.ok) {
      return NextResponse.json({ success: false, message: saved.error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: updated });
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

    const { faqs } = await loadAllFaqs();
    const next = faqs.filter((f) => String(f.id) !== String(id));

    const saved = await persistAllFaqs(next);
    if (!saved.ok) {
      return NextResponse.json({ success: false, message: saved.error }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "FAQ deleted" });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error deleting FAQ" },
      { status: 500 }
    );
  }
}
