import fs from "fs";
import path from "path";
import { getAdminSupabase, isSupabaseConfigured } from "@/lib/supabase";

const CMS_FILE_PATH = path.join(process.cwd(), "src", "data", "cmsData.json");

export function getCmsData() {
  try {
    const raw = fs.readFileSync(CMS_FILE_PATH, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading cmsData.json:", err);
    return null;
  }
}

export function saveCmsData(data: any) {
  try {
    fs.writeFileSync(CMS_FILE_PATH, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Error writing cmsData.json:", err);
    return false;
  }
}

// 1. NAVBAR
export async function getNavbarCMS() {
  const data = getCmsData();
  return {
    items: data?.navbar || [],
    cta: data?.navbar_cta || { text: "Enquiry Now", href: "/enquiry", is_active: true },
  };
}

export async function updateNavbarCMS(items: any[], cta?: any) {
  const data = getCmsData() || {};
  data.navbar = items;
  if (cta) data.navbar_cta = cta;
  saveCmsData(data);

  // Sync to Supabase if configured
  if (isSupabaseConfigured) {
    try {
      const supabase = getAdminSupabase();
      if (supabase) {
        await supabase.from("site_settings").upsert({
          key: "cms_navbar",
          value: JSON.stringify({ items, cta }),
          updated_at: new Date().toISOString(),
        });
      }
    } catch (e) {
      console.warn("Supabase sync skipped:", e);
    }
  }

  return { success: true, items: data.navbar, cta: data.navbar_cta };
}

// 2. HOMEPAGE SECTIONS
export async function getHomepageSectionsCMS() {
  const data = getCmsData();
  return data?.homepage_sections || [];
}

export async function updateHomepageSectionsCMS(sections: any[]) {
  const data = getCmsData() || {};
  data.homepage_sections = sections;
  saveCmsData(data);

  if (isSupabaseConfigured) {
    try {
      const supabase = getAdminSupabase();
      if (supabase) {
        await supabase.from("site_settings").upsert({
          key: "cms_homepage_sections",
          value: JSON.stringify(sections),
          updated_at: new Date().toISOString(),
        });
      }
    } catch (e) {
      console.warn("Supabase sync skipped:", e);
    }
  }

  return { success: true, sections: data.homepage_sections };
}

// 3. PAGES
export async function getPagesCMS() {
  const data = getCmsData();
  return data?.pages || [];
}

export async function updatePagesCMS(pages: any[]) {
  const data = getCmsData() || {};
  data.pages = pages;
  saveCmsData(data);

  if (isSupabaseConfigured) {
    try {
      const supabase = getAdminSupabase();
      if (supabase) {
        await supabase.from("site_settings").upsert({
          key: "cms_pages",
          value: JSON.stringify(pages),
          updated_at: new Date().toISOString(),
        });
      }
    } catch (e) {
      console.warn("Supabase sync skipped:", e);
    }
  }

  return { success: true, pages: data.pages };
}

// 4. FOOTER
export async function getFooterCMS() {
  const data = getCmsData();
  return data?.footer || {};
}

export async function updateFooterCMS(footerData: any) {
  const data = getCmsData() || {};
  data.footer = footerData;
  saveCmsData(data);

  if (isSupabaseConfigured) {
    try {
      const supabase = getAdminSupabase();
      if (supabase) {
        await supabase.from("site_settings").upsert({
          key: "cms_footer",
          value: JSON.stringify(footerData),
          updated_at: new Date().toISOString(),
        });
      }
    } catch (e) {
      console.warn("Supabase sync skipped:", e);
    }
  }

  return { success: true, footer: data.footer };
}
