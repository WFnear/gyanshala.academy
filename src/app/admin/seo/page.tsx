"use client";

import { useState } from "react";
import { Globe, Save, Search, CheckCircle2, ExternalLink } from "lucide-react";

interface PageSEO {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  isIndexed: boolean;
}

const initialSEO: PageSEO[] = [
  {
    slug: "/",
    name: "Homepage",
    metaTitle: "German Language Classes in Jaipur | Gyanshala Foreign Language Academy",
    metaDescription: "Learn German in Jaipur from A1 to C2 with certified trainers. Goethe, TELC and ÖSD exam prep, Study in Germany, and paid Ausbildung pathways.",
    keywords: "German classes Jaipur, learn German, Goethe exam preparation, Study in Germany, Ausbildung Jaipur",
    isIndexed: true,
  },
  {
    slug: "/about-us",
    name: "About Us",
    metaTitle: "About Us | Gyanshala Foreign Language Academy - Jaipur",
    metaDescription: "Learn about Gyanshala Foreign Language Academy: our journey since 2018, mission, vision, goals, faculty, and pathways to global opportunities.",
    keywords: "About Gyanshala, Dilip Sinsinwar, foreign language institute Jaipur, certified German faculty",
    isIndexed: true,
  },
  {
    slug: "/german/a1",
    name: "German A1 Course",
    metaTitle: "German A1 Course (Beginner Level) | Gyanshala Foreign Language Academy",
    metaDescription: "Start your German language journey with confidence. Learn essential vocabulary, grammar, speaking, and prepare for Goethe-Zertifikat A1.",
    keywords: "German A1 course, Goethe A1 exam, German beginner classes Jaipur",
    isIndexed: true,
  },
  {
    slug: "/german/b1",
    name: "German B1 Course",
    metaTitle: "German B1 Course (Intermediate Level) | Gyanshala Foreign Language Academy",
    metaDescription: "Master German B1 intermediate proficiency for Ausbildung, university study and work visa requirements in Germany.",
    keywords: "German B1 course, Goethe B1 exam, Ausbildung German requirement",
    isIndexed: true,
  },
  {
    slug: "/pathways/study-in-germany",
    name: "Study in Germany",
    metaTitle: "Study in Germany from India | Tuition-Free Public Universities Guidance",
    metaDescription: "Complete guidance for Bachelors and Masters in Germany. Admission in tuition-free universities, APS certificate, blocked account and visa support.",
    keywords: "Study in Germany, tuition free universities Germany, APS certificate India, German student visa",
    isIndexed: true,
  },
  {
    slug: "/pathways/ausbildung",
    name: "Ausbildung in Germany",
    metaTitle: "Ausbildung in Germany for Indian Students | Paid Dual Vocational Training",
    metaDescription: "Apply for 3-year dual vocational Ausbildung in Germany with €1,000+ monthly stipend, free tuition and direct job placement.",
    keywords: "Ausbildung Germany, paid apprenticeship Germany, Ausbildung stipend, vocational training Germany",
    isIndexed: true,
  },
  {
    slug: "/pathways/nursing-in-germany",
    name: "Nursing in Germany",
    metaTitle: "Nursing in Germany for Indian Nurses | GNM & B.Sc Direct Placement",
    metaDescription: "Direct hospital placement for Indian nurses in Germany with starting salary of €2,800+. Fast-track Anerkennung licensing.",
    keywords: "Nursing in Germany, Indian nurses Germany, B2 German for nurses, Anerkennung Germany",
    isIndexed: true,
  },
];

export default function SEOSettingsPage() {
  const [pages, setPages] = useState<PageSEO[]>(initialSEO);
  const [search, setSearch] = useState("");
  const [savedSlug, setSavedSlug] = useState<string | null>(null);

  const filteredPages = pages.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.slug.toLowerCase().includes(search.toLowerCase())
  );

  const handleUpdate = (slug: string, field: keyof PageSEO, val: any) => {
    setPages(
      pages.map((p) => (p.slug === slug ? { ...p, [field]: val } : p))
    );
  };

  const handleSave = (slug: string) => {
    setSavedSlug(slug);
    setTimeout(() => setSavedSlug(null), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-l-4 border-[#BC0202] pl-3.5">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          SEO &amp; Metadata Management
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-medium">
          Control Google search titles, descriptions, and meta tags for all public website pages
        </p>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center">
        <div className="relative w-full max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search page by name or URL slug..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#BC0202]"
          />
        </div>
      </div>

      {/* Pages SEO List */}
      <div className="space-y-5">
        {filteredPages.map((p) => (
          <div
            key={p.slug}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
              <div>
                <h3 className="font-bold text-slate-900 text-base">{p.name}</h3>
                <span className="font-mono text-xs text-[#BC0202]">{p.slug}</span>
              </div>
              <button
                type="button"
                onClick={() => handleSave(p.slug)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#BC0202] hover:bg-[#990202] text-white rounded-xl text-xs font-bold transition shadow-xs self-start sm:self-auto cursor-pointer"
              >
                {savedSlug === p.slug ? (
                  <>
                    <CheckCircle2 size={14} className="text-emerald-300" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save size={14} />
                    <span>Save SEO</span>
                  </>
                )}
              </button>
            </div>

            {/* Google Search Result Simulation */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70 font-sans">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block mb-1">
                Google Search Preview
              </span>
              <div className="text-sm font-semibold text-[#1a0dab] line-clamp-1 hover:underline cursor-pointer">
                {p.metaTitle}
              </div>
              <div className="text-[11px] text-emerald-800 line-clamp-1">
                https://gyanshala.academy{p.slug}
              </div>
              <div className="text-xs text-slate-600 line-clamp-2 mt-0.5">
                {p.metaDescription}
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Meta Title ({p.metaTitle.length} / 60 chars)
                </label>
                <input
                  type="text"
                  value={p.metaTitle}
                  onChange={(e) => handleUpdate(p.slug, "metaTitle", e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Meta Description ({p.metaDescription.length} / 160 chars)
                </label>
                <textarea
                  rows={2}
                  value={p.metaDescription}
                  onChange={(e) => handleUpdate(p.slug, "metaDescription", e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Target Search Keywords
                </label>
                <input
                  type="text"
                  value={p.keywords}
                  onChange={(e) => handleUpdate(p.slug, "keywords", e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-[#BC0202]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
