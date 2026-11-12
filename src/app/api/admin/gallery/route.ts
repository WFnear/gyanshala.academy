import { NextResponse, connection } from "next/server";
import { isSupabaseConfigured } from "@/lib/supabase";
import { verifyAdminSession } from "@/lib/adminAuth";
import { getSiteSettingJson, saveSiteSettingJson } from "@/lib/cmsService";

export interface GalleryItem {
  id: number | string;
  title: string;
  category: string;
  image_url: string;
  is_active?: boolean;
  order_index?: number;
}

const SETTINGS_KEY = "cms_gallery";

const defaultGallery: GalleryItem[] = [
  {
    id: 1,
    title: "Jaipur Campus Reception & Main Hall",
    category: "Campus",
    image_url: "/Hero/IMG_20250806_170204918_HDR.jpg",
    is_active: true,
    order_index: 1,
  },
  {
    id: 2,
    title: "Interactive German Batch in Session",
    category: "Classroom",
    image_url: "/Hero/IMG_20250806_121152807_HDR.jpg",
    is_active: true,
    order_index: 2,
  },
  {
    id: 3,
    title: "Goethe Exam Preparation Workshop",
    category: "Events",
    image_url: "/Hero/hero3x.jpg",
    is_active: true,
    order_index: 3,
  },
  {
    id: 4,
    title: "Gyanshala Building & International Desk",
    category: "Campus",
    image_url: "/Aboutusgyanshala.in.png",
    is_active: true,
    order_index: 4,
  },
  {
    id: 5,
    title: "Batch Graduation & Certificate Ceremony",
    category: "Alumni",
    image_url: "/Hero/hero3.jpg",
    is_active: true,
    order_index: 5,
  },
];

let memoryGallery: GalleryItem[] = [...defaultGallery];

async function loadGallery(): Promise<{ items: GalleryItem[]; source: string }> {
  if (isSupabaseConfigured) {
    const stored = await getSiteSettingJson<GalleryItem[]>(SETTINGS_KEY);
    if (Array.isArray(stored)) {
      return { items: stored, source: "supabase" };
    }
  }
  return { items: memoryGallery, source: "local_database" };
}

export async function GET() {
  await connection();
  const { items, source } = await loadGallery();
  return NextResponse.json(
    { success: true, data: items, source },
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
    const title = (body?.title || "").trim();
    const category = (body?.category || "Campus").trim();
    const image_url = (body?.image_url || body?.imageUrl || "").trim();

    if (!title || !image_url) {
      return NextResponse.json(
        { success: false, message: "Photo title and image are required" },
        { status: 400 }
      );
    }

    const { items } = await loadGallery();
    const newItem: GalleryItem = {
      id: Date.now(),
      title,
      category,
      image_url,
      is_active: true,
      order_index: 1,
    };

    const next = [
      newItem,
      ...items.map((item, idx) => ({ ...item, order_index: idx + 2 })),
    ];

    if (isSupabaseConfigured) {
      const saved = await saveSiteSettingJson(SETTINGS_KEY, next);
      if (!saved.ok) {
        return NextResponse.json(
          { success: false, message: saved.error || "Failed to save gallery item" },
          { status: 500 }
        );
      }
    }

    memoryGallery = next;
    return NextResponse.json({ success: true, data: newItem });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error adding gallery photo" },
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
      return NextResponse.json({ success: false, message: "Photo id is required" }, { status: 400 });
    }

    const { items } = await loadGallery();
    const next = items.filter((g) => String(g.id) !== String(id));

    if (isSupabaseConfigured) {
      const saved = await saveSiteSettingJson(SETTINGS_KEY, next);
      if (!saved.ok) {
        return NextResponse.json(
          { success: false, message: saved.error || "Failed to delete gallery item" },
          { status: 500 }
        );
      }
    }

    memoryGallery = next;
    return NextResponse.json({ success: true, message: "Gallery photo deleted" });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error deleting gallery photo" },
      { status: 500 }
    );
  }
}
