import { NextResponse } from "next/server";
import { getAdminSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { verifyAdminSession } from "@/lib/adminAuth";

export interface LanguageCard {
  id: string;
  name: string;
  image: string;
  href: string;
  is_active: boolean;
  order_index?: number;
}

const defaultLanguages: LanguageCard[] = [
  {
    id: "german",
    name: "German",
    image: "/Flag/german.jpg",
    href: "/german",
    is_active: true,
    order_index: 1,
  },
  {
    id: "french",
    name: "French",
    image: "/Flag/french.jpg",
    href: "/languages/french",
    is_active: true,
    order_index: 2,
  },
  {
    id: "spanish",
    name: "Spanish",
    image: "/Flag/spain.jpg",
    href: "/languages/spanish",
    is_active: true,
    order_index: 3,
  },
  {
    id: "english",
    name: "English",
    image: "/Flag/english.jpg",
    href: "/languages/english",
    is_active: true,
    order_index: 4,
  },
];

let memoryLanguages: LanguageCard[] = [...defaultLanguages];

export async function GET() {
  if (isSupabaseConfigured) {
    const supabase = getAdminSupabase();
    if (supabase) {
      const { data, error } = await supabase
        .from("languages")
        .select("*")
        .order("order_index", { ascending: true });
      if (!error && data && data.length > 0) {
        return NextResponse.json({ success: true, data, source: "supabase" });
      }
    }
  }

  return NextResponse.json({
    success: true,
    data: memoryLanguages,
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
    const { name, image, href, is_active } = body;

    if (!name || !image || !href) {
      return NextResponse.json({ success: false, message: "Name, image and href are required" }, { status: 400 });
    }

    const newLang: LanguageCard = {
      id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      name,
      image,
      href,
      is_active: is_active !== false,
      order_index: memoryLanguages.length + 1,
    };

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const { data, error } = await supabase.from("languages").insert([newLang]).select().single();
        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    memoryLanguages.push(newLang);
    return NextResponse.json({ success: true, data: newLang, source: "local_database" });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error creating language" },
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
    const { id, name, image, href, is_active } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "Language id is required" }, { status: 400 });
    }

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const updatePayload: any = {};
        if (name !== undefined) updatePayload.name = name;
        if (image !== undefined) updatePayload.image = image;
        if (href !== undefined) updatePayload.href = href;
        if (is_active !== undefined) updatePayload.is_active = is_active;

        const { data, error } = await supabase
          .from("languages")
          .update(updatePayload)
          .eq("id", id)
          .select()
          .single();

        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    const index = memoryLanguages.findIndex((l) => l.id === id);
    if (index !== -1) {
      memoryLanguages[index] = {
        ...memoryLanguages[index],
        ...(name !== undefined && { name }),
        ...(image !== undefined && { image }),
        ...(href !== undefined && { href }),
        ...(is_active !== undefined && { is_active }),
      };
      return NextResponse.json({ success: true, data: memoryLanguages[index], source: "local_database" });
    }

    return NextResponse.json({ success: false, message: "Language not found" }, { status: 404 });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error updating language" },
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
    return NextResponse.json({ success: false, message: "Language id required" }, { status: 400 });
  }

  if (isSupabaseConfigured) {
    const supabase = getAdminSupabase();
    if (supabase) {
      await supabase.from("languages").delete().eq("id", id);
    }
  }

  memoryLanguages = memoryLanguages.filter((l) => l.id !== id);
  return NextResponse.json({ success: true, message: "Language deleted" });
}
