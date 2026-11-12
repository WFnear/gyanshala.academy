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
    // Expected on read-only serverless filesystems (e.g. Vercel production)
    console.warn("Local cmsData.json write skipped:", err instanceof Error ? err.message : err);
    return false;
  }
}

export async function getSiteSettingJson<T>(key: string): Promise<T | null> {
  if (!isSupabaseConfigured) return null;
  try {
    const supabase = getAdminSupabase();
    if (!supabase) return null;

    const { data, error } = await supabase
      .from("site_settings")
      .select("value")
      .eq("key", key)
      .maybeSingle();

    if (error || !data?.value) return null;
    return JSON.parse(data.value) as T;
  } catch (err) {
    console.warn(`Supabase read failed for ${key}:`, err);
    return null;
  }
}

export async function saveSiteSettingJson(
  key: string,
  value: unknown
): Promise<{ ok: boolean; error?: string }> {
  if (!isSupabaseConfigured) {
    return { ok: false, error: "Supabase is not configured" };
  }
  try {
    const supabase = getAdminSupabase();
    if (!supabase) {
      return { ok: false, error: "Supabase admin client unavailable" };
    }

    const { error } = await supabase.from("site_settings").upsert(
      {
        key,
        value: JSON.stringify(value),
        updated_at: new Date().toISOString(),
      },
      { onConflict: "key" }
    );

    if (error) {
      console.error(`Supabase upsert error for ${key}:`, error);
      return { ok: false, error: error.message };
    }
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown Supabase error";
    console.error(`Supabase upsert exception for ${key}:`, err);
    return { ok: false, error: message };
  }
}

async function persistCmsSection(
  supabaseKey: string,
  applyLocal: (data: any) => void,
  payloadToSync: unknown
): Promise<{ ok: boolean; error?: string }> {
  const data = getCmsData() || {};
  applyLocal(data);
  const localSaved = saveCmsData(data);

  if (isSupabaseConfigured) {
    const remote = await saveSiteSettingJson(supabaseKey, payloadToSync);
    if (!remote.ok) {
      return {
        ok: false,
        error: remote.error || "Failed to save changes to database.",
      };
    }
    return { ok: true };
  }

  if (!localSaved) {
    return {
      ok: false,
      error: "Database is not configured and server filesystem is read-only.",
    };
  }

  return { ok: true };
}

// 1. NAVBAR
function isLegacyFaqNavItem(item: any): boolean {
  const href = String(item?.href || "").trim().toLowerCase();
  const label = String(item?.label || "").trim().toLowerCase();
  return (
    href === "/faqs" ||
    href === "/faq" ||
    href === "/#faqs" ||
    label === "faqs" ||
    label === "faq"
  );
}

export async function getNavbarCMS() {
  const remote = await getSiteSettingJson<{
    items?: any[];
    cta?: any;
    migrated_contact_us_v2?: boolean;
  }>("cms_navbar");

  if (remote && Array.isArray(remote.items)) {
    const cta = remote.cta || { text: "Enquiry Now", href: "/enquiry", is_active: true };

    if (!remote.migrated_contact_us_v2) {
      const hasContact = remote.items.some(
        (i) => i?.href === "/contact-us" || i?.href === "/contact"
      );
      const hasLegacyFaq = remote.items.some(isLegacyFaqNavItem);
      if (!hasContact && hasLegacyFaq) {
        const migratedItems = remote.items.map((i) =>
          isLegacyFaqNavItem(i) ? { ...i, label: "Contact Us", href: "/contact-us" } : i
        );
        await saveSiteSettingJson("cms_navbar", {
          items: migratedItems,
          cta,
          migrated_contact_us_v2: true,
        });
        return { items: migratedItems, cta };
      }
    }

    return {
      items: remote.items,
      cta,
    };
  }

  const data = getCmsData();
  return {
    items: data?.navbar || [],
    cta: data?.navbar_cta || { text: "Enquiry Now", href: "/enquiry", is_active: true },
  };
}

export async function updateNavbarCMS(items: any[], cta?: any) {
  const current = await getNavbarCMS();
  const nextCta = cta ?? current.cta;

  const saved = await persistCmsSection(
    "cms_navbar",
    (data) => {
      data.navbar = items;
      if (nextCta) data.navbar_cta = nextCta;
    },
    { items, cta: nextCta, migrated_contact_us_v2: true }
  );

  if (!saved.ok) {
    return { success: false, message: saved.error };
  }

  return { success: true, items, cta: nextCta };
}

// 2. HOMEPAGE SECTIONS
export async function getHomepageSectionsCMS() {
  const remote = await getSiteSettingJson<any[]>("cms_homepage_sections");
  if (Array.isArray(remote)) {
    return remote;
  }

  const data = getCmsData();
  return data?.homepage_sections || [];
}

export async function updateHomepageSectionsCMS(sections: any[]) {
  const saved = await persistCmsSection(
    "cms_homepage_sections",
    (data) => {
      data.homepage_sections = sections;
    },
    sections
  );

  if (!saved.ok) {
    return { success: false, message: saved.error };
  }

  return { success: true, sections };
}

// 3. PAGES
export async function getPagesCMS() {
  const remote = await getSiteSettingJson<any[]>("cms_pages");
  if (Array.isArray(remote)) {
    return remote;
  }

  const data = getCmsData();
  return data?.pages || [];
}

export async function updatePagesCMS(pages: any[]) {
  const saved = await persistCmsSection(
    "cms_pages",
    (data) => {
      data.pages = pages;
    },
    pages
  );

  if (!saved.ok) {
    return { success: false, message: saved.error };
  }

  return { success: true, pages };
}

// 4. FOOTER
export async function getFooterCMS() {
  const remote = await getSiteSettingJson<Record<string, any>>("cms_footer");
  if (remote && typeof remote === "object") {
    return remote;
  }

  const data = getCmsData();
  return data?.footer || {};
}

export async function updateFooterCMS(footerData: any) {
  const saved = await persistCmsSection(
    "cms_footer",
    (data) => {
      data.footer = footerData;
    },
    footerData
  );

  if (!saved.ok) {
    return { success: false, message: saved.error };
  }

  return { success: true, footer: footerData };
}
