"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageUpload from "@/components/admin/ImageUpload";
import {
  Plus,
  Edit2,
  Trash2,
  ExternalLink,
  CheckCircle,
  XCircle,
  X,
  RefreshCw,
  Loader2,
} from "lucide-react";

interface Faculty {
  id: string;
  name: string;
  role: string;
  image: string;
  is_active: boolean;
  order_index?: number;
}

export default function FacultyAdminPage() {
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<string | null>(null);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<Faculty | null>(null);
  const [form, setForm] = useState({
    name: "",
    role: "",
    image: "",
    is_active: true,
  });

  async function loadFaculty() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/faculty");
      const json = await res.json();
      if (json.success && json.data) {
        setFaculty(json.data);
      }
    } catch (e) {
      console.error("Failed to load faculty:", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadFaculty();
  }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  async function handleToggle(id: string, is_active: boolean) {
    try {
      const res = await fetch("/api/admin/faculty", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, is_active: !is_active }),
      });
      const data = await res.json();
      if (data.success) {
        setFaculty(faculty.map((f) => (f.id === id ? { ...f, is_active: !is_active } : f)));
        showToast("Team member visibility updated");
      }
    } catch {
      alert("Error updating visibility");
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Are you sure you want to remove educator "${name}"?`)) return;
    try {
      const res = await fetch(`/api/admin/faculty?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setFaculty(faculty.filter((f) => f.id !== id));
        showToast("Educator removed");
      }
    } catch {
      alert("Error deleting educator");
    }
  }

  function openEdit(member: Faculty) {
    setEditingMember(member);
    setForm({
      name: member.name,
      role: member.role,
      image: member.image,
      is_active: member.is_active,
    });
    setIsModalOpen(true);
  }

  function openAdd() {
    setEditingMember(null);
    setForm({
      name: "",
      role: "German Language Trainer",
      image: "/teammembers/Dilip Sinsinwar Sir German Language Expert.png",
      is_active: true,
    });
    setIsModalOpen(true);
  }

  async function handleModalSave(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.role) return;

    try {
      if (editingMember) {
        const res = await fetch("/api/admin/faculty", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingMember.id, ...form }),
        });
        const data = await res.json();
        if (data.success) {
          setFaculty(faculty.map((f) => (f.id === editingMember.id ? { ...f, ...form } : f)));
          showToast("Educator updated successfully");
        }
      } else {
        const res = await fetch("/api/admin/faculty", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (data.success && data.data) {
          setFaculty([...faculty, data.data]);
          showToast("New educator added");
        }
      }
      setIsModalOpen(false);
    } catch {
      alert("Error saving educator");
    }
  }

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-xl border border-slate-700 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle size={16} className="text-emerald-400" />
          <span>{toast}</span>
        </div>
      )}

      {/* Header - EXACT MATCH TO PUBLIC WEBSITE */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A61911]">
            EXPERIENCED EDUCATORS
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-zinc-900 tracking-normal leading-tight mt-1">
            Meet Our Team
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Manage all 9 educators displayed on the homepage and about us sections.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/#team"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#BC0202] hover:border-red-200 text-xs font-bold transition shadow-xs"
          >
            <ExternalLink size={14} />
            <span>View on Website</span>
          </Link>
          <button
            onClick={loadFaculty}
            className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 transition shadow-xs cursor-pointer"
            title="Refresh"
          >
            <RefreshCw size={15} className={loading ? "animate-spin text-[#BC0202]" : ""} />
          </button>
          <button
            onClick={openAdd}
            className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition"
          >
            <Plus size={16} />
            <span>Add Educator</span>
          </button>
        </div>
      </div>

      {/* Educators Grid - EXACT MATCH TO PUBLIC WEBSITE CARDS */}
      {loading ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <Loader2 className="w-8 h-8 animate-spin text-[#BC0202]" />
        </div>
      ) : faculty.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 text-slate-500">
          <p className="font-bold text-slate-800 text-base">No Educators Found</p>
          <p className="text-xs text-slate-400 mt-1">Click &apos;Add Educator&apos; to create one.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {faculty.map((member) => (
            <div
              key={member.id}
              className={`h-full bg-white border shadow-sm rounded-none overflow-hidden flex flex-col justify-between transition-all group ${
                member.is_active
                  ? "border-zinc-200 hover:border-zinc-300 hover:shadow-md"
                  : "border-slate-300 opacity-60 bg-slate-100"
              }`}
            >
              <div>
                {/* Faculty Photo (Square Aspect Ratio - Exact Website Style) */}
                <div className="relative aspect-square bg-zinc-100 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  {/* Status Toggle on image corner */}
                  <button
                    type="button"
                    onClick={() => handleToggle(member.id, member.is_active)}
                    className={`absolute top-2 right-2 z-10 px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm cursor-pointer ${
                      member.is_active ? "bg-emerald-500 text-white" : "bg-slate-700 text-slate-300"
                    }`}
                  >
                    {member.is_active ? "Active" : "Hidden"}
                  </button>
                </div>

                {/* Faculty Info - Centered (Exact Website Style) */}
                <div className="p-3 sm:p-4 bg-white border-t border-zinc-200/60 text-center">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-zinc-900 tracking-tight leading-snug">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-normal text-black leading-tight">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-3 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => openEdit(member)}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 shadow-2xs cursor-pointer"
                  title="Edit Info"
                >
                  <Edit2 size={13} />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(member.id, member.name)}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-red-50 text-red-500 shadow-2xs cursor-pointer"
                  title="Remove Educator"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit / Add Modal with ONLY exact website fields (Name, Role, Image) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                {editingMember ? `Edit ${editingMember.name}` : "Add Educator"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleModalSave} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Educator Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Dilip Sinsinwar"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Role / Designation
                </label>
                <input
                  type="text"
                  required
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  placeholder="e.g. German Language Trainer"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <ImageUpload
                label="Educator Photo"
                value={form.image}
                onChange={(url) => setForm({ ...form, image: url })}
                aspectRatio="square"
                helperText="Upload educator photo (face/portrait works best)"
              />

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="activeMember"
                  checked={form.is_active}
                  onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
                  className="w-4 h-4 rounded text-[#BC0202] focus:ring-[#BC0202] border-slate-300"
                />
                <label htmlFor="activeMember" className="text-xs font-bold text-slate-700 cursor-pointer">
                  Display this educator on website
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#BC0202] hover:bg-[#990202] text-white text-xs font-bold shadow-md shadow-red-700/20 transition cursor-pointer"
                >
                  Save Educator
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
