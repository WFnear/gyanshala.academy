"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Mail,
  GraduationCap,
  BookOpen,
  Users,
  Layers,
  FileText,
  MessageSquareQuote,
  HelpCircle,
  Video,
  Image as ImageIcon,
  Menu,
  PanelBottom,
  Trophy,
  Globe,
  Settings,
  ShieldCheck,
  History,
  LogOut,
  Search,
  Bell,
  X,
  ChevronDown,
  Compass,
} from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

interface NavSection {
  title: string;
  items: {
    name: string;
    href: string;
    icon: any;
    badge?: number | string;
  }[];
}

const navSections: NavSection[] = [
  {
    title: "OVERVIEW",
    items: [{ name: "Dashboard", href: "/admin", icon: LayoutDashboard }],
  },
  {
    title: "WEBSITE LEADS",
    items: [
      { name: "Student Enquiries", href: "/admin/enquiries", icon: Mail },
    ],
  },
  {
    title: "WEBSITE SECTIONS",
    items: [
      { name: "German Courses", href: "/admin/german-courses", icon: BookOpen },
      { name: "Germany Pathways", href: "/admin/germany-pathways", icon: Compass },
      { name: "All Languages", href: "/admin/courses", icon: Globe },
      { name: "Our Students in Germany", href: "/admin/success-stories", icon: Trophy },
      { name: "Meet Our Team", href: "/admin/faculty", icon: Users },
      { name: "What Our Students Say", href: "/admin/testimonials", icon: MessageSquareQuote },
      { name: "Free Video Lessons", href: "/admin/videos", icon: Video },
      { name: "Frequently Asked Questions", href: "/admin/faqs", icon: HelpCircle },
      { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
    ],
  },
  {
    title: "WEBSITE CMS & PAGES",
    items: [
      { name: "Homepage Sections", href: "/admin/homepage", icon: Layers },
      { name: "Pages Management", href: "/admin/pages", icon: FileText },
      { name: "Navigation Menu", href: "/admin/navbar", icon: Menu },
      { name: "Footer Management", href: "/admin/footer", icon: PanelBottom },
    ],
  },
  {
    title: "SETTINGS & SEO",
    items: [
      { name: "SEO Settings", href: "/admin/seo", icon: Globe },
      { name: "General Settings", href: "/admin/settings", icon: Settings },
      { name: "Admin Users", href: "/admin/users", icon: ShieldCheck },
    ],
  },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [realLeadCount, setRealLeadCount] = useState<number>(0);
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

    async function loadRealLeads() {
      try {
        const res = await fetch("/api/admin/enquiries");
        const data = await res.json();
        if (data.data && Array.isArray(data.data)) {
          const newLeads = data.data.filter((l: any) => l.status === "new").length;
          setRealLeadCount(newLeads);
        }
      } catch {
        // quiet
      }
    }

    checkAuth();
    loadRealLeads();
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
    return <div className="min-h-screen bg-[#F8FAFC] text-slate-900">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-[#F6F8FB] text-slate-900 flex font-sans">
      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-xs"
        />
      )}

      {/* =====================================================================
          1. CRIMSON RED SIDEBAR (MATCHING USER MOCKUP EXACTLY)
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

        {/* Scrollable Nav Sections */}
        <div className="overflow-y-auto flex-1 px-3 py-4 space-y-5 scrollbar-thin scrollbar-thumb-white/20">
          {navSections.map((sec) => (
            <div key={sec.title}>
              <div className="px-3 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-white/50">
                {sec.title}
              </div>
              <div className="space-y-0.5">
                {sec.items.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    item.href === "/admin"
                      ? pathname === "/admin"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-[#D8232A] text-white shadow-md shadow-red-950/20 translate-x-1"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} className="shrink-0 stroke-[2]" />
                        <span>{item.name}</span>
                      </div>
                      {item.href === "/admin/enquiries" && realLeadCount > 0 && (
                        <span className="px-2 py-0.5 text-xs font-bold bg-white text-[#9B0A11] rounded-full shadow-xs">
                          {realLeadCount}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
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
        {/* Top Navbar matching Mockup */}
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between shadow-xs">
          {/* Left: Mobile Toggle & Global Search */}
          <div className="flex items-center gap-3 flex-1 max-w-xl">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>

            {/* Global Search Input */}
            <div className="relative w-full max-w-md hidden sm:block">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anything... (e.g. enquiries, courses)"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#BC0202] focus:ring-2 focus:ring-[#BC0202]/15 transition-all"
              />
            </div>
          </div>

          {/* Right: Notifications & Admin Profile */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Notification Bell with Badge */}
            <button
              type="button"
              className="relative p-2 text-slate-600 hover:text-[#BC0202] hover:bg-slate-100 rounded-xl transition cursor-pointer"
              aria-label="Notifications"
            >
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#BC0202] text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                3
              </span>
            </button>

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
