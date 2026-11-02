import { NextResponse } from "next/server";
import { getAdminSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { verifyAdminSession } from "@/lib/adminAuth";

export interface Pathway {
  id: string;
  title: string;
  description: string;
  target: string;
  cta: string;
  href: string;
  image: string;
  is_active: boolean;
  order_index?: number;
}

const defaultPathways: Pathway[] = [
  {
    id: "study",
    title: "Study In Germany",
    description:
      "Pursue a Bachelor's or Master's degree at a German university. Get guidance on course selection, admission requirements, APS certification, and student visa preparation.",
    target: "For students planning to pursue higher education in Germany.",
    cta: "Explore Study Options →",
    href: "/pathways/study-in-germany",
    image: "/Pathways/students in germany .png",
    is_active: true,
    order_index: 1,
  },
  {
    id: "ausbildung",
    title: "Ausbildung in Germany",
    description:
      "Learn a profession through practical workplace training and classroom education. Many dual training programmes offer a monthly allowance while you develop skills for a career in Germany.",
    target: "For students who want professional training and practical work experience.",
    cta: "Explore Ausbildung →",
    href: "/pathways/ausbildung",
    image: "/Pathways/ausbildung in germnay.png",
    is_active: true,
    order_index: 2,
  },
  {
    id: "nursing",
    title: "Nursing in Germany",
    description:
      "Explore nursing employment opportunities in Germany if you have a GNM, BSc Nursing, or another relevant nursing qualification. Understand qualification recognition, German language requirements, and the steps towards professional registration.",
    target: "For qualified nurses looking to build their careers in Germany.",
    cta: "Explore Nursing Careers →",
    href: "/pathways/nursing-in-germany",
    image: "/Pathways/nursing jobs in germnay.png",
    is_active: true,
    order_index: 3,
  },
];

let memoryPathways: Pathway[] = [...defaultPathways];

export async function GET() {
  if (isSupabaseConfigured) {
    const supabase = getAdminSupabase();
    if (supabase) {
      const { data, error } = await supabase
        .from("germany_pathways")
        .select("*")
        .order("order_index", { ascending: true });
      if (!error && data && data.length > 0) {
        return NextResponse.json({ success: true, data, source: "supabase" });
      }
    }
  }

  return NextResponse.json({
    success: true,
    data: memoryPathways,
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
    const { title, description, target, cta, href, image, is_active } = body;

    if (!title || !description || !href) {
      return NextResponse.json({ success: false, message: "Title, description and link are required" }, { status: 400 });
    }

    const newPathway: Pathway = {
      id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title,
      description,
      target: target || "",
      cta: cta || "Learn More →",
      href,
      image: image || "/Pathways/students in germany .png",
      is_active: is_active !== false,
      order_index: memoryPathways.length + 1,
    };

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const { data, error } = await supabase.from("germany_pathways").insert([newPathway]).select().single();
        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    memoryPathways.push(newPathway);
    return NextResponse.json({ success: true, data: newPathway, source: "local_database" });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error creating pathway" },
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
    const { id, title, description, target, cta, href, image, is_active } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "Pathway id is required" }, { status: 400 });
    }

    if (isSupabaseConfigured) {
      const supabase = getAdminSupabase();
      if (supabase) {
        const updatePayload: any = {};
        if (title !== undefined) updatePayload.title = title;
        if (description !== undefined) updatePayload.description = description;
        if (target !== undefined) updatePayload.target = target;
        if (cta !== undefined) updatePayload.cta = cta;
        if (href !== undefined) updatePayload.href = href;
        if (image !== undefined) updatePayload.image = image;
        if (is_active !== undefined) updatePayload.is_active = is_active;

        const { data, error } = await supabase
          .from("germany_pathways")
          .update(updatePayload)
          .eq("id", id)
          .select()
          .single();

        if (!error && data) {
          return NextResponse.json({ success: true, data, source: "supabase" });
        }
      }
    }

    const index = memoryPathways.findIndex((p) => p.id === id);
    if (index !== -1) {
      memoryPathways[index] = {
        ...memoryPathways[index],
        ...(title !== undefined && { title }),
        ...(description !== undefined && { description }),
        ...(target !== undefined && { target }),
        ...(cta !== undefined && { cta }),
        ...(href !== undefined && { href }),
        ...(image !== undefined && { image }),
        ...(is_active !== undefined && { is_active }),
      };
      return NextResponse.json({ success: true, data: memoryPathways[index], source: "local_database" });
    }

    return NextResponse.json({ success: false, message: "Pathway not found" }, { status: 404 });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Error updating pathway" },
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
    return NextResponse.json({ success: false, message: "Pathway id required" }, { status: 400 });
  }

  if (isSupabaseConfigured) {
    const supabase = getAdminSupabase();
    if (supabase) {
      await supabase.from("germany_pathways").delete().eq("id", id);
    }
  }

  memoryPathways = memoryPathways.filter((p) => p.id !== id);
  return NextResponse.json({ success: true, message: "Pathway deleted" });
}
