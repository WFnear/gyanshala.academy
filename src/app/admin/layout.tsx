"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  Users,
  FileText,
  MessageSquareQuote,
  HelpCircle,
  Video,
  Menu,
  PanelBottom,
  Trophy,
  Globe,
  ShieldCheck,
  LogOut,
  X,
  ChevronDown,
  ChevronRight,
  Compass,
  Sliders,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

// 1. Homepage Sections in exact Header to Footer order
const homepageSections = [
  { name: "Top Header / Navigation Bar", href: "/admin/navbar", icon: Menu },
  { name: "Hero Slider Banner", href: "/admin/homepage?tab=hero", icon: Sliders },
  { name: "About Us / Our Journey", href: "/admin/homepage?tab=about", icon: FileText },
  { name: "German Courses (Levels)", href: "/admin/german-courses", icon: BookOpen },
  { name: "Germany Pathways", href: "/admin/germany-pathways", icon: Compass },
  { name: "Our Students in Germany", href: "/admin/success-stories", icon: Trophy },
  { name: "Meet Our Team / Faculty", href: "/admin/faculty", icon: Users },
  { name: "Why Choose Us?", href: "/admin/homepage?tab=why_choose", icon: ShieldCheck },
  { name: "Highlights of Gyanshala", href: "/admin/homepage?tab=highlights", icon: Sparkles },
  { name: "Free Video Lessons (YouTube)", href: "/admin/videos", icon: Video },
  { name: "Student Reviews & Testimonials", href: "/admin/testimonials", icon: MessageSquareQuote },
  { name: "Frequently Asked Questions (FAQ)", href: "/admin/faqs", icon: HelpCircle },
  { name: "Useful German Learning Resources", href: "/admin/homepage?tab=partners", icon: Globe },
  { name: "Footer", href: "/admin/footer", icon: PanelBottom },
];

// 2. All 21 Website Pages grouped by Category
const websitePages = [
  {
    category: "Main & Core Pages",
    items: [
      { name: "Home", slug: "/" },
      { name: "About Us", slug: "/about-us" },
      { name: "Course Enquiry & Free Demo", slug: "/enquiry" },
      { name: "Frequently Asked Questions (FAQ)", slug: "/faqs" },
    ],
  },
  {
    category: "German Language Courses",
    items: [
      { name: "German Courses Overview", slug: "/german" },
      { name: "German A1 – Beginner Level", slug: "/german/a1" },
      { name: "German A2 – Elementary Level", slug: "/german/a2" },
      { name: "German B1 – Intermediate Level", slug: "/german/b1" },
      { name: "German B2 – Upper-Intermediate", slug: "/german/b2" },
      { name: "German C1 – Advanced Level", slug: "/german/c1" },
      { name: "German C2 – Proficiency Level", slug: "/german/c2" },
    ],
  },
  {
    category: "Other Global Languages",
    items: [
      { name: "All Languages Overview", slug: "/languages" },
      { name: "French Language Course", slug: "/languages/french" },
      { name: "Spanish Language Course", slug: "/languages/spanish" },
      { name: "Spoken English & IELTS Prep", slug: "/languages/english" },
    ],
  },
  {
    category: "Germany Pathways",
    items: [
      { name: "Germany Pathways Overview", slug: "/pathways" },
      { name: "Study in Germany", slug: "/pathways/study-in-germany" },
      { name: "Ausbildung in Germany", slug: "/pathways/ausbildung" },
      { name: "Nursing in Germany", slug: "/pathways/nursing-in-germany" },
    ],
  },
  {
    category: "Legal Pages",
    items: [
      { name: "Privacy Policy", slug: "/privacy-policy" },
      { name: "Terms & Conditions", slug: "/terms-and-conditions" },
    ],
  },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(true);
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) return;

    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/auth");
        const data = await res.json();
        if (!data.authenticated) {
          router.replace("/admin/login");
        }
      } catch {
        router.replace("/admin/login");
      }
    }

    checkAuth();
  }, [isLoginPage, router]);

  async function handleLogout() {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
      router.replace("/admin/login");
    } catch {
      router.replace("/admin/login");
    }
  }

  if (isLoginPage) {
    return (
      <div
        className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans"
        style={{ fontFamily: "var(--font-plus-jakarta), var(--font-raleway), sans-serif" }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#F6F8FB] text-slate-900 flex font-sans"
      style={{ fontFamily: "var(--font-plus-jakarta), var(--font-raleway), sans-serif" }}
    >
      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-xs"
        />
      )}

      {/* =====================================================================
          1. CRIMSON RED SIDEBAR (MATCHING USER MOCKUP & SPECIFICATION)
          ===================================================================== */}
      <aside
        className={`fixed md:sticky top-0 h-screen z-50 w-72 bg-[#9B0A11] text-white flex flex-col justify-between shadow-2xl transition-transform duration-200 ease-in-out shrink-0 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Brand Header with Official Gyanshala Cropped Logo */}
        <div className="px-5 py-4 flex items-center justify-between border-b border-white/10 shrink-0">
          <Link href="/admin" className="flex items-center group">
            <Image
              src="/Logo/LOGO.NEW.GYANSHALA.cropped.png"
              alt="Gyanshala Foreign Language Academy"
              width={240}
              height={70}
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-102"
              priority
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden p-1.5 rounded-lg text-white/80 hover:bg-white/10 transition cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Nav Sections: ONLY Dashboard + Exact Homepage Sections + Pages Menu */}
        <div className="overflow-y-auto flex-1 px-3 py-4 space-y-4 scrollbar-thin scrollbar-thumb-white/20">
          
          {/* 1. DASHBOARD */}
          <div>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                pathname === "/admin"
                  ? "bg-[#D8232A] text-white shadow-md shadow-red-950/20 translate-x-1"
                  : "text-white/85 hover:text-white hover:bg-white/10"
              }`}
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard size={18} className="shrink-0 stroke-[2]" />
                <span>Dashboard</span>
              </div>
            </Link>
          </div>

          {/* 2. HOMEPAGE SECTIONS (HEADER TO FOOTER IN EXACT SEQUENCE & NAMES) */}
          <div className="pt-2 border-t border-white/10">
            <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-white/50 flex items-center justify-between">
              <span>HOMEPAGE SECTIONS</span>
              <span className="text-[10px] bg-white/15 px-1.5 py-0.5 rounded-full text-white font-mono">14</span>
            </div>
            <div className="space-y-0.5">
              {homepageSections.map((sec) => {
                const Icon = sec.icon;
                const isActive = pathname === sec.href || (sec.href.startsWith("/admin/homepage") && pathname === "/admin/homepage");

                return (
                  <Link
                    key={sec.name}
                    href={sec.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all ${
                      isActive
                        ? "bg-[#D8232A] text-white shadow-md shadow-red-950/20 translate-x-1"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon size={16} className="shrink-0 stroke-[2]" />
                      <span className="truncate">{sec.name}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 3. PAGES (MENU CONTAINING ALL 21 WEBSITE PAGES) */}
          <div className="pt-2 border-t border-white/10">
            <button
              type="button"
              onClick={() => setPagesMenuOpen(!pagesMenuOpen)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition cursor-pointer ${
                pathname === "/admin/pages" || pathname.startsWith("/admin/pages")
                  ? "bg-[#D8232A] text-white shadow-md shadow-red-950/20"
                  : "text-white/85 hover:text-white hover:bg-white/10"
              }`}
            >
              <div className="flex items-center gap-3">
                <FileText size={18} className="shrink-0 stroke-[2]" />
                <span>Pages</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 text-[10px] font-bold bg-white/20 rounded-full text-white">
                  21 Pages
                </span>
                {pagesMenuOpen ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
              </div>
            </button>

            {/* Collapsible Sub-list of Pages */}
            {pagesMenuOpen && (
              <div className="mt-2 ml-2 pl-2 border-l border-white/15 space-y-3 pb-1">
                {/* Master All Pages Management Link */}
                <Link
                  href="/admin/pages"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    pathname === "/admin/pages"
                      ? "bg-white text-[#9B0A11] shadow-xs"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  <span>Manage All Pages (SEO &amp; Status)</span>
                  <Sliders size={13} />
                </Link>

                {/* Categories & Pages */}
                {websitePages.map((cat) => (
                  <div key={cat.category} className="space-y-1">
                    <div className="px-2 pt-1 text-[10px] font-bold uppercase tracking-wider text-white/50">
                      {cat.category}
                    </div>
                    {cat.items.map((page) => (
                      <div
                        key={page.slug}
                        className="group flex items-center justify-between px-2.5 py-1 rounded-lg text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 transition"
                      >
                        <Link
                          href={`/admin/pages?search=${encodeURIComponent(page.slug)}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="truncate flex-1 hover:underline text-left"
                          title={`Manage SEO & Details for ${page.name}`}
                        >
                          {page.name}
                        </Link>
                        <a
                          href={page.slug}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 text-white/40 hover:text-white transition shrink-0 ml-1"
                          title={`View ${page.name} live`}
                        >
                          <ExternalLink size={11} />
                        </a>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Bottom User / Logout Section */}
        <div className="p-3 border-t border-white/10 shrink-0">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition cursor-pointer"
          >
            <LogOut size={18} className="shrink-0" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* =====================================================================
          2. MAIN CONTENT AREA WITH TOP NAVIGATION BAR
          ===================================================================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between shadow-xs">
          {/* Left: Mobile Toggle & Status Indicator */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>

            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-800 font-bold">Gyanshala Admin CMS</span>
              <span>&bull;</span>
              <span className="text-slate-500">Control Panel</span>
            </div>
          </div>

          {/* Right: View Website & Admin Profile */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* View Live Website Button */}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition shadow-2xs"
              title="Open Live Website"
            >
              <span className="hidden sm:inline">Website</span>
              <ExternalLink size={13} />
            </a>

            {/* Profile Pill */}
            <div className="flex items-center gap-2.5 pl-2 sm:border-l sm:border-slate-200">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#9B0A11] to-[#BC0202] text-white font-bold flex items-center justify-center text-sm shadow-sm ring-2 ring-red-100">
                A
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Admin
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  Super Admin
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Children Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
