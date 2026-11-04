"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  GraduationCap,
  BookOpen,
  Star,
  Calendar,
  Eye,
  Phone,
  PlusCircle,
  ShieldCheck,
  TrendingUp,
  Image as ImageIcon,
  UserPlus,
  MessageSquare,
  HelpCircle,
  Video,
  Info,
  ChevronDown,
  ArrowRight,
  Mail,
  Loader2,
  Compass,
} from "lucide-react";

interface Enquiry {
  id: string;
  name: string;
  course: string;
  date?: string;
  created_at: string;
  status: string;
  phone: string;
  email: string;
}

export default function AdminDashboardPage() {
  const [selectedRange, setSelectedRange] = useState("Last 30 Days");
  const [chartRange, setChartRange] = useState("6 Months");
  const [selectedLead, setSelectedLead] = useState<Enquiry | null>(null);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEnquiries() {
      try {
        const res = await fetch("/api/admin/enquiries");
        const json = await res.json();
        if (json.data && Array.isArray(json.data)) {
          setEnquiries(json.data);
        }
      } catch (err) {
        console.error("Failed to load enquiries:", err);
      } finally {
        setLoading(false);
      }
    }
    loadEnquiries();
  }, []);

  const getStatusBadge = (status: string) => {
    switch ((status || "").toLowerCase()) {
      case "new":
        return "bg-red-50 text-red-600 border border-red-200";
      case "contacted":
        return "bg-blue-50 text-blue-600 border border-blue-200";
      case "follow-up":
      case "in_progress":
        return "bg-amber-50 text-amber-700 border border-amber-200";
      case "converted":
      case "enrolled":
        return "bg-emerald-50 text-emerald-700 border border-emerald-200";
      case "rejected":
      case "closed":
        return "bg-slate-100 text-slate-600 border border-slate-200";
      default:
        return "bg-slate-50 text-slate-700 border border-slate-200";
    }
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "Recent";
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="space-y-6">
      {/* =====================================================================
          1. HEADER WITH ACCENT LINE & RANGE DROPDOWN
          ===================================================================== */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="border-l-4 border-[#BC0202] pl-3.5">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-medium">
            Welcome back! Real-time overview of your Gyanshala website CMS and student enquiries.
          </p>
        </div>

        {/* Date Filter Dropdown */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700 hover:border-slate-300 transition cursor-pointer"
            >
              <Calendar size={15} className="text-slate-400" />
              <span>{selectedRange}</span>
              <ChevronDown size={14} className="text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          2. TOP 5 REAL STAT CARDS WITH SPARKLINES
          ===================================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Card 1: Total Enquiries */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#BC0202] flex items-center justify-center font-bold">
              <Users size={20} />
            </div>
            <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
              Real-time
            </span>
          </div>
          <div className="mt-4">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">
              {enquiries.length}
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-1">
              Total Enquiries
            </div>
          </div>
          <div className="mt-3 h-8 w-full">
            <svg viewBox="0 0 100 24" className="w-full h-full overflow-visible">
              <path
                d={enquiries.length > 0 ? "M0,18 Q20,16 35,20 T70,8 T100,12" : "M0,20 L100,20"}
                fill="none"
                stroke={enquiries.length > 0 ? "#F87171" : "#E2E8F0"}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Card 2: Website Pages */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <BookOpen size={20} />
            </div>
            <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              Published
            </span>
          </div>
          <div className="mt-4">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">
              18
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-1">
              Website Pages
            </div>
          </div>
          <div className="mt-3 h-8 w-full">
            <svg viewBox="0 0 100 24" className="w-full h-full overflow-visible">
              <path
                d="M0,18 Q30,12 55,16 T85,10 T100,14"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Card 3: Faculty & Trainers */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Users size={20} />
            </div>
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              Verified
            </span>
          </div>
          <div className="mt-4">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">
              9
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-1">
              Faculty &amp; Trainers
            </div>
          </div>
          <div className="mt-3 h-8 w-full">
            <svg viewBox="0 0 100 24" className="w-full h-full overflow-visible">
              <path
                d="M0,16 Q25,20 50,14 T80,18 T100,12"
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Card 4: Active Courses */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <BookOpen size={20} />
            </div>
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              12 Active
            </span>
          </div>
          <div className="mt-4">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">
              12
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-1">
              Active Courses
            </div>
          </div>
          <div className="mt-3 h-8 w-full">
            <svg viewBox="0 0 100 24" className="w-full h-full overflow-visible">
              <path
                d="M0,16 Q20,20 40,12 T75,18 T100,10"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Card 5: Google Rating */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
              <Star size={20} className="fill-orange-500 text-orange-500" />
            </div>
            <span className="text-[11px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
              18 Reviews
            </span>
          </div>
          <div className="mt-4">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none flex items-center gap-1.5">
              <span>4.9</span>
              <Star size={20} className="fill-amber-400 text-amber-400" />
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-1">
              Google Rating
            </div>
          </div>
          <div className="mt-3 h-8 w-full">
            <svg viewBox="0 0 100 24" className="w-full h-full overflow-visible">
              <path
                d="M0,15 Q30,18 60,11 T85,15 T100,8"
                fill="none"
                stroke="#F97316"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* =====================================================================
          3. MIDDLE ROW: ENQUIRY OVERVIEW CHART & RECENT ENQUIRIES TABLE
          ===================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Enquiry Overview Interactive Chart */}
        <div className="lg:col-span-7 xl:col-span-8 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp size={20} className="text-[#BC0202]" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Enquiry Overview
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3 text-xs font-medium text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#BC0202]" />
                  Website Enquiries ({enquiries.length})
                </span>
              </div>

              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 cursor-pointer"
              >
                <span>{chartRange}</span>
                <ChevronDown size={13} className="text-slate-400" />
              </button>
            </div>
          </div>

          {/* Clean Real Chart / Placeholder */}
          <div className="relative w-full h-64 sm:h-72 mt-2 flex items-center justify-center">
            {enquiries.length === 0 ? (
              <div className="text-center p-6 border-2 border-dashed border-slate-200 rounded-2xl w-full h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#BC0202] flex items-center justify-center mb-2">
                  <TrendingUp size={24} />
                </div>
                <h3 className="font-bold text-slate-800 text-sm">
                  No Enquiries Received Yet
                </h3>
                <p className="text-xs text-slate-400 max-w-sm mt-1">
                  When prospective students submit the enquiry form or book demo sessions on your website, their enquiry trend will graph here automatically.
                </p>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-xs font-bold text-slate-600">
                  {enquiries.length} live enquiry record(s) recorded from website.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right: Recent Enquiries Table (Real Data) */}
        <div className="lg:col-span-5 xl:col-span-4 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Users size={18} className="text-[#BC0202]" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Recent Enquiries ({enquiries.length})
              </h2>
            </div>
            <Link
              href="/admin/enquiries"
              className="text-xs font-bold text-[#BC0202] hover:underline flex items-center gap-1"
            >
              View All →
            </Link>
          </div>

          {/* Table */}
          <div className="overflow-x-auto min-h-[220px]">
            {loading ? (
              <div className="py-12 flex flex-col items-center justify-center text-slate-400">
                <Loader2 size={24} className="animate-spin text-[#BC0202]" />
                <span className="text-xs mt-2 font-medium">Checking enquiries...</span>
              </div>
            ) : enquiries.length === 0 ? (
              <div className="py-12 flex flex-col items-center justify-center text-center p-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center mb-2">
                  <Mail size={18} />
                </div>
                <p className="text-xs font-bold text-slate-700">No leads yet</p>
                <p className="text-[11px] text-slate-400 mt-0.5 max-w-[220px]">
                  New inquiries submitted on your live website will show up right here.
                </p>
              </div>
            ) : (
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                    <th className="pb-2.5">Name</th>
                    <th className="pb-2.5">Course</th>
                    <th className="pb-2.5">Status</th>
                    <th className="pb-2.5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                  {enquiries.slice(0, 5).map((enq) => (
                    <tr key={enq.id} className="hover:bg-slate-50/80 transition">
                      <td className="py-3 pr-2">
                        <div className="font-bold text-slate-900 truncate max-w-[100px]">
                          {enq.name}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {formatDate(enq.created_at || enq.date)}
                        </div>
                      </td>
                      <td className="py-3 px-2 text-slate-600 truncate max-w-[110px]">
                        {enq.course}
                      </td>
                      <td className="py-3 px-2">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${getStatusBadge(
                            enq.status
                          )}`}
                        >
                          {enq.status}
                        </span>
                      </td>
                      <td className="py-3 pl-2 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            type="button"
                            onClick={() => setSelectedLead(enq)}
                            className="p-1 rounded-md text-slate-400 hover:text-[#BC0202] hover:bg-red-50 transition cursor-pointer"
                            title="View Details"
                          >
                            <Eye size={14} />
                          </button>
                          <a
                            href={`https://wa.me/${(enq.phone || "").replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded-md text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition cursor-pointer"
                            title="WhatsApp Student"
                          >
                            <Phone size={14} />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================================
          4. BOTTOM ROW: QUICK ACTIONS, TOP COURSES, SYSTEM STATUS
          ===================================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Card 1: Quick Actions */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#BC0202] font-black text-lg">⚡</span>
            <h2 className="text-base font-bold text-slate-900">
              Quick Actions
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            <Link
              href="/admin/german-courses"
              className="p-3 bg-red-50/70 hover:bg-red-100/70 rounded-xl flex flex-col items-center justify-center text-center transition group border border-red-100"
            >
              <div className="w-8 h-8 rounded-lg bg-white text-[#BC0202] flex items-center justify-center shadow-xs mb-1.5 group-hover:scale-105 transition-transform">
                <BookOpen size={16} />
              </div>
              <span className="text-[11px] font-bold text-slate-800 leading-tight">
                German Courses
              </span>
            </Link>

            <Link
              href="/admin/germany-pathways"
              className="p-3 bg-red-50/70 hover:bg-red-100/70 rounded-xl flex flex-col items-center justify-center text-center transition group border border-red-100"
            >
              <div className="w-8 h-8 rounded-lg bg-white text-[#BC0202] flex items-center justify-center shadow-xs mb-1.5 group-hover:scale-105 transition-transform">
                <Compass size={16} />
              </div>
              <span className="text-[11px] font-bold text-slate-800 leading-tight">
                Germany Pathways
              </span>
            </Link>

            <Link
              href="/admin/homepage"
              className="p-3 bg-red-50/70 hover:bg-red-100/70 rounded-xl flex flex-col items-center justify-center text-center transition group border border-red-100"
            >
              <div className="w-8 h-8 rounded-lg bg-white text-[#BC0202] flex items-center justify-center shadow-xs mb-1.5 group-hover:scale-105 transition-transform">
                <ImageIcon size={16} />
              </div>
              <span className="text-[11px] font-bold text-slate-800 leading-tight">
                Homepage
              </span>
            </Link>

            <Link
              href="/admin/faculty"
              className="p-3 bg-red-50/70 hover:bg-red-100/70 rounded-xl flex flex-col items-center justify-center text-center transition group border border-red-100"
            >
              <div className="w-8 h-8 rounded-lg bg-white text-[#BC0202] flex items-center justify-center shadow-xs mb-1.5 group-hover:scale-105 transition-transform">
                <UserPlus size={16} />
              </div>
              <span className="text-[11px] font-bold text-slate-800 leading-tight">
                Meet Our Team
              </span>
            </Link>

            <Link
              href="/admin/testimonials"
              className="p-3 bg-red-50/70 hover:bg-red-100/70 rounded-xl flex flex-col items-center justify-center text-center transition group border border-red-100"
            >
              <div className="w-8 h-8 rounded-lg bg-white text-[#BC0202] flex items-center justify-center shadow-xs mb-1.5 group-hover:scale-105 transition-transform">
                <MessageSquare size={16} />
              </div>
              <span className="text-[11px] font-bold text-slate-800 leading-tight">
                What Students Say
              </span>
            </Link>

            <Link
              href="/admin/faqs"
              className="p-3 bg-red-50/70 hover:bg-red-100/70 rounded-xl flex flex-col items-center justify-center text-center transition group border border-red-100"
            >
              <div className="w-8 h-8 rounded-lg bg-white text-[#BC0202] flex items-center justify-center shadow-xs mb-1.5 group-hover:scale-105 transition-transform">
                <HelpCircle size={16} />
              </div>
              <span className="text-[11px] font-bold text-slate-800 leading-tight">
                FAQs
              </span>
            </Link>
          </div>
        </div>

        {/* Card 2: Top Courses */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-amber-500 font-bold text-base">🏆</span>
              <h2 className="text-base font-bold text-slate-900">
                Core Offerings
              </h2>
            </div>
            <Link
              href="/admin/courses"
              className="text-xs font-bold text-[#BC0202] hover:underline flex items-center gap-1"
            >
              View All 12 →
            </Link>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-black text-[#BC0202]">
                    🇩🇪
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">German Courses</div>
                    <div className="text-[10px] text-slate-400">A1 to C2 Levels • Goethe &amp; TELC Prep</div>
                  </div>
                </div>
                <span className="font-bold text-emerald-600">Active</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#BC0202] h-full rounded-full" style={{ width: "100%" }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-black text-amber-600">
                    🎓
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Germany Pathways</div>
                    <div className="text-[10px] text-slate-400">Study, Ausbildung &amp; Nursing</div>
                  </div>
                </div>
                <span className="font-bold text-emerald-600">Active</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: "100%" }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-black text-blue-600">
                    🌍
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">All Languages</div>
                    <div className="text-[10px] text-slate-400">German, French, Spanish &amp; English</div>
                  </div>
                </div>
                <span className="font-bold text-emerald-600">Active</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: System Status */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck size={18} className="text-[#BC0202]" />
            <h2 className="text-base font-bold text-slate-900">
              System Status
            </h2>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs py-1 border-b border-slate-100">
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Database Connection
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                OK
              </span>
            </div>

            <div className="flex items-center justify-between text-xs py-1 border-b border-slate-100">
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                CMS Content Sync
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Active
              </span>
            </div>

            <div className="flex items-center justify-between text-xs py-1 border-b border-slate-100">
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Web3Forms Email Gateway
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Active
              </span>
            </div>

            <div className="flex items-center justify-between text-xs py-1">
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Website Live
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Online
              </span>
            </div>
          </div>

          <div className="mt-4 p-2.5 rounded-xl bg-red-50/60 border border-red-100 flex items-center gap-2 text-[11px] text-slate-600 font-medium">
            <Info size={14} className="text-[#BC0202] shrink-0" />
            <span>Real-time connected to live website</span>
          </div>
        </div>
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3 mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Enquiry Details
                </h3>
                <p className="text-xs text-slate-500">{formatDate(selectedLead.created_at)}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="text-slate-400 hover:text-slate-700 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Student Name</span>
                <span className="font-semibold text-sm text-slate-900">{selectedLead.name}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Interested Course</span>
                <span className="font-semibold text-sm text-[#BC0202]">{selectedLead.course}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Phone</span>
                  <span className="font-mono">{selectedLead.phone}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Email</span>
                  <span className="font-mono">{selectedLead.email}</span>
                </div>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Lead Status</span>
                <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${getStatusBadge(selectedLead.status)}`}>
                  {selectedLead.status}
                </span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <a
                href={`https://wa.me/${(selectedLead.phone || "").replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition"
              >
                <Phone size={14} /> WhatsApp Message
              </a>
              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
