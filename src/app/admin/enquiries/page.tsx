"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Download,
  Trash2,
  Mail,
  Phone,
  MessageSquare,
  Clock,
  Filter,
  RefreshCw,
  X,
  CheckCircle,
} from "lucide-react";

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  message?: string;
  status: "new" | "contacted" | "in_progress" | "enrolled" | "closed";
  notes?: string;
  created_at: string;
}

const statusOptions = [
  { value: "all", label: "All Leads" },
  { value: "new", label: "New (Action Required)" },
  { value: "contacted", label: "Contacted" },
  { value: "in_progress", label: "In Progress" },
  { value: "enrolled", label: "Enrolled" },
  { value: "closed", label: "Closed" },
];

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [activeMessage, setActiveMessage] = useState<Enquiry | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  async function fetchEnquiries() {
    setLoading(true);
    try {
      const url = new URL("/api/admin/enquiries", window.location.origin);
      if (statusFilter !== "all") url.searchParams.set("status", statusFilter);
      if (search) url.searchParams.set("search", search);

      const res = await fetch(url.toString());
      const data = await res.json();
      if (data.success) {
        setEnquiries(data.data || []);
      }
    } catch (err) {
      console.error("Failed to fetch enquiries:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchEnquiries();
  }, [statusFilter]);

  async function handleStatusChange(id: string, newStatus: string) {
    setUpdatingId(id);
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setEnquiries((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status: newStatus as any } : item))
        );
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    } finally {
      setUpdatingId(null);
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Are you sure you want to delete lead from "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/enquiries?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setEnquiries((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (err) {
      console.error("Failed to delete enquiry:", err);
    }
  }

  function exportCSV() {
    if (enquiries.length === 0) {
      alert("No leads to export.");
      return;
    }

    const headers = ["ID", "Name", "Email", "Phone", "Course", "Status", "Message", "Date"];
    const rows = enquiries.map((l) => [
      l.id,
      `"${l.name.replace(/"/g, '""')}"`,
      l.email,
      `"${l.phone}"`,
      `"${(l.course || "").replace(/"/g, '""')}"`,
      l.status,
      `"${(l.message || "").replace(/"/g, '""')}"`,
      new Date(l.created_at).toLocaleString("en-IN"),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `Gyanshala_Leads_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const filteredEnquiries = enquiries.filter((item) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      item.name?.toLowerCase().includes(q) ||
      item.email?.toLowerCase().includes(q) ||
      item.phone?.includes(q) ||
      item.course?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Student Leads &amp; Enquiries
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Capture, update follow-up status, and export student data
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchEnquiries}
            className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 transition shadow-xs"
            title="Refresh Leads"
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
          </button>
          <button
            onClick={exportCSV}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C00000] hover:bg-[#a00000] text-white text-xs sm:text-sm font-bold shadow-sm shadow-red-700/20 transition"
          >
            <Download size={16} />
            <span>Export to CSV</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 flex flex-col md:flex-row gap-4 justify-between items-center shadow-xs">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search size={16} />
          </div>
          <input
            type="text"
            placeholder="Search by student name, phone, course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#C00000] transition"
          />
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {statusOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setStatusFilter(opt.value)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                statusFilter === opt.value
                  ? "bg-[#C00000] text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Enquiries Table */}
      <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-bold border-b border-slate-200/80">
              <tr>
                <th className="px-5 py-3.5">Student</th>
                <th className="px-5 py-3.5">Target Course</th>
                <th className="px-5 py-3.5">Contact Details</th>
                <th className="px-5 py-3.5">Lead Status</th>
                <th className="px-5 py-3.5">Notes</th>
                <th className="px-5 py-3.5">Received Date</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-5 py-14 text-center text-slate-500">
                    <div className="inline-block w-6 h-6 border-3 border-[#C00000] border-t-transparent rounded-full animate-spin" />
                    <p className="mt-2 text-xs font-semibold">Loading student leads...</p>
                  </td>
                </tr>
              ) : filteredEnquiries.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-16 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 mx-auto flex items-center justify-center mb-3">
                      <Mail size={22} />
                    </div>
                    <p className="text-sm font-bold text-slate-800">No student enquiries yet</p>
                    <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                      Real student enquiries submitted from your website enquiry form will appear here in real time.
                    </p>
                  </td>
                </tr>
              ) : (
                filteredEnquiries.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50/80 transition">
                    <td className="px-5 py-4">
                      <div className="font-bold text-slate-900">{lead.name}</div>
                      <span className="text-[11px] text-slate-400 font-mono">ID: {lead.id.slice(0, 8)}</span>
                    </td>
                    <td className="px-5 py-4 text-slate-800 font-medium">{lead.course}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1.5 text-slate-900 text-xs font-semibold">
                        <Phone size={12} className="text-[#C00000]" />
                        <a href={`tel:${lead.phone}`} className="hover:underline">
                          {lead.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-[11px] mt-0.5">
                        <Mail size={11} />
                        <a href={`mailto:${lead.email}`} className="hover:text-slate-800">
                          {lead.email}
                        </a>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <select
                        value={lead.status}
                        disabled={updatingId === lead.id}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        className={`text-xs font-bold px-3 py-1 rounded-lg border focus:outline-none transition cursor-pointer ${
                          lead.status === "new"
                            ? "bg-red-50 text-[#C00000] border-red-200"
                            : lead.status === "contacted"
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : lead.status === "in_progress"
                            ? "bg-amber-50 text-amber-800 border-amber-200"
                            : lead.status === "enrolled"
                            ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                            : "bg-slate-100 text-slate-600 border-slate-200"
                        }`}
                      >
                        <option value="new">🔴 New Lead</option>
                        <option value="contacted">🔵 Contacted</option>
                        <option value="in_progress">🟡 In Progress</option>
                        <option value="enrolled">🟢 Enrolled</option>
                        <option value="closed">⚪ Closed</option>
                      </select>
                    </td>
                    <td className="px-5 py-4">
                      {lead.message ? (
                        <button
                          onClick={() => setActiveMessage(lead)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#C00000] bg-slate-100 hover:bg-red-50 px-2.5 py-1 rounded-lg border border-slate-200 transition"
                        >
                          <MessageSquare size={13} className="text-[#C00000]" />
                          <span>View Note</span>
                        </button>
                      ) : (
                        <span className="text-xs text-slate-400 italic">None</span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500 whitespace-nowrap">
                      {new Date(lead.created_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => handleDelete(lead.id, lead.name)}
                        className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
                        title="Delete lead"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Message Modal */}
      {activeMessage && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setActiveMessage(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare size={20} className="text-[#C00000]" />
              <h3 className="text-lg font-bold text-slate-900">Student Enquiry Note</h3>
            </div>
            <div className="space-y-3">
              <div>
                <span className="text-xs text-slate-400 uppercase font-bold">Student Name:</span>
                <p className="text-sm font-bold text-slate-900">{activeMessage.name}</p>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-bold">Program:</span>
                <p className="text-sm text-slate-700 font-semibold">{activeMessage.course}</p>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-bold">Message:</span>
                <div className="mt-1 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-medium">
                  {activeMessage.message || "No specific message provided."}
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActiveMessage(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
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
