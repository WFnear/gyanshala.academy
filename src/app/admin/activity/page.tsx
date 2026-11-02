"use client";

import { useState } from "react";
import { History, Search, Shield, Filter, Clock } from "lucide-react";

interface ActivityLog {
  id: string;
  admin: string;
  action: string;
  module: string;
  details: string;
  timestamp: string;
}

const initialLogs: ActivityLog[] = [
  {
    id: "log-1",
    admin: "Gyanshala Admin",
    action: "Updated Hero Slide #1",
    module: "Homepage CMS",
    details: "Changed primary CTA button destination and refreshed subtitle",
    timestamp: "Today, 02:30 PM",
  },
  {
    id: "log-2",
    admin: "Dilip Sinsinwar Sir",
    action: "Converted Student Lead",
    module: "Enquiries",
    details: "Marked Sneha Gupta (Nursing in Germany) as Converted",
    timestamp: "Today, 01:15 PM",
  },
  {
    id: "log-3",
    admin: "Dilip Sinsinwar Sir",
    action: "Updated German Courses",
    module: "German Courses",
    details: "Updated German B1 course syllabus and Goethe exam preparation details",
    timestamp: "Today, 11:45 AM",
  },
  {
    id: "log-4",
    admin: "Gyanshala Admin",
    action: "Updated FAQ #1",
    module: "FAQs CMS",
    details: "Updated general academy description and batch details",
    timestamp: "Yesterday, 05:20 PM",
  },
  {
    id: "log-5",
    admin: "Gyanshala Admin",
    action: "Admin Login",
    module: "Security",
    details: "Successful authenticated login from Jaipur, India",
    timestamp: "Yesterday, 09:00 AM",
  },
];

export default function ActivityLogsPage() {
  const [logs] = useState<ActivityLog[]>(initialLogs);
  const [search, setSearch] = useState("");

  const filteredLogs = logs.filter(
    (l) =>
      l.action.toLowerCase().includes(search.toLowerCase()) ||
      l.admin.toLowerCase().includes(search.toLowerCase()) ||
      l.module.toLowerCase().includes(search.toLowerCase()) ||
      l.details.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-l-4 border-[#BC0202] pl-3.5">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          System Activity Logs
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-medium">
          Complete audit trail of admin logins, content modifications and student lead actions
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
            placeholder="Search by action, admin name or module..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#BC0202]"
          />
        </div>
      </div>

      {/* Timeline List */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="divide-y divide-slate-100">
          {filteredLogs.map((l) => (
            <div key={l.id} className="p-4 sm:p-5 hover:bg-slate-50/70 transition flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-red-50 text-[#BC0202] flex items-center justify-center shrink-0 mt-0.5">
                <History size={18} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">{l.action}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">
                      {l.module}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock size={12} /> {l.timestamp}
                  </span>
                </div>

                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {l.details}
                </p>

                <div className="text-[11px] text-slate-400 font-medium mt-1">
                  By: <strong className="text-slate-700">{l.admin}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
