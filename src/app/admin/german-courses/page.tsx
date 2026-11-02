"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Edit2,
  Trash2,
  ExternalLink,
  CheckCircle,
  XCircle,
  X,
  RefreshCw,
} from "lucide-react";

interface GermanCourse {
  id: string;
  badge: string; // e.g. "A1 Level"
  name: string; // e.g. "A1 – Beginner Level"
  image: string; // e.g. "/greenbg.jpg"
  href: string; // e.g. "/german/a1"
  is_active: boolean;
  order_index?: number;
}

const initialGermanCourses: GermanCourse[] = [
  { id: "a1", badge: "A1 Level", name: "A1 – Beginner Level", image: "/greenbg.jpg", href: "/german/a1", is_active: true },
  { id: "a2", badge: "A2 Level", name: "A2 – Elementary Level", image: "/greenbg.jpg", href: "/german/a2", is_active: true },
  { id: "b1", badge: "B1 Level", name: "B1 – Intermediate Level", image: "/greenbg.jpg", href: "/german/b1", is_active: true },
  { id: "b2", badge: "B2 Level", name: "B2 – Upper-Intermediate Level", image: "/greenbg.jpg", href: "/german/b2", is_active: true },
  { id: "c1", badge: "C1 Level", name: "C1 – Advanced Level", image: "/greenbg.jpg", href: "/german/c1", is_active: true },
  { id: "c2", badge: "C2 Level", name: "C2 – Proficiency Level", image: "/greenbg.jpg", href: "/german/c2", is_active: true },
];

export default function AdminGermanCoursesPage() {
  const [courses, setCourses] = useState<GermanCourse[]>(initialGermanCourses);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<GermanCourse | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  // Form State - ONLY exact fields that exist on the website
  const [formData, setFormData] = useState({
    badge: "A1 Level",
    name: "A1 – Beginner Level",
    image: "/greenbg.jpg",
    href: "/german/a1",
    is_active: true,
  });

  async function loadCourses() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/german-courses");
      const json = await res.json();
      if (json.success && json.data) {
        setCourses(json.data);
      }
    } catch (e) {
      console.error("Failed to load german courses:", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCourses();
  }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  function openCreateModal() {
    setEditingCourse(null);
    setFormData({
      badge: "",
      name: "",
      image: "/greenbg.jpg",
      href: "/german/",
      is_active: true,
    });
    setIsModalOpen(true);
  }

  function openEditModal(course: GermanCourse) {
    setEditingCourse(course);
    setFormData({
      badge: course.badge,
      name: course.name,
      image: course.image || "/greenbg.jpg",
      href: course.href,
      is_active: course.is_active,
    });
    setIsModalOpen(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (editingCourse) {
        const res = await fetch("/api/admin/german-courses", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingCourse.id, ...formData }),
        });
        const data = await res.json();
        if (data.success) {
          setCourses((prev) =>
            prev.map((c) => (c.id === editingCourse.id ? { ...c, ...formData } : c))
          );
          showToast("German course updated!");
        }
      } else {
        const res = await fetch("/api/admin/german-courses", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success) {
          setCourses((prev) => [...prev, data.data]);
          showToast("German course added!");
        }
      }
      setIsModalOpen(false);
    } catch {
      alert("Error saving course");
    }
  }

  async function toggleStatus(course: GermanCourse) {
    const updatedStatus = !course.is_active;
    try {
      const res = await fetch("/api/admin/german-courses", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: course.id, is_active: updatedStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setCourses((prev) =>
          prev.map((c) => (c.id === course.id ? { ...c, is_active: updatedStatus } : c))
        );
        showToast(`Course ${updatedStatus ? "activated" : "hidden"}`);
      }
    } catch {
      alert("Error updating course status");
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return;
    try {
      const res = await fetch(`/api/admin/german-courses?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setCourses((prev) => prev.filter((c) => c.id !== id));
        showToast("Course deleted");
      }
    } catch {
      alert("Error deleting course");
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

      {/* Header matching Website Style */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#BC0202]">
            LANGUAGE TRAINING
          </p>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-0.5">
            German Courses
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Exactly matches the 6 German course cards displayed on the public website.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/german"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#BC0202] hover:border-red-200 text-xs font-bold transition shadow-xs"
          >
            <ExternalLink size={14} />
            <span>View on Website</span>
          </Link>
          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold shadow-sm shadow-red-700/20 transition cursor-pointer"
          >
            <Plus size={16} />
            <span>Add Course Card</span>
          </button>
        </div>
      </div>

      {/* Course Cards Grid - EXACT MATCH TO PUBLIC WEBSITE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`flex flex-col bg-[#FFFAF3] border rounded-2xl shadow-sm transition-all overflow-hidden ${
              course.is_active ? "border-zinc-200/90" : "border-slate-300 opacity-60 bg-slate-100"
            }`}
          >
            {/* Top Image Area with Level Badge (Exact representation of website) */}
            <div className="relative w-full aspect-[16/10] flex items-center justify-center overflow-hidden bg-slate-900 select-none">
              <Image
                src={course.image || "/greenbg.jpg"}
                alt={course.badge}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/20" />
              <span className="relative z-10 text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.65)]">
                {course.badge}
              </span>

              {/* Status pill on top right */}
              <button
                type="button"
                onClick={() => toggleStatus(course)}
                className={`absolute top-2.5 right-2.5 z-20 px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm cursor-pointer ${
                  course.is_active
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-700 text-slate-300"
                }`}
                title="Toggle Active Status"
              >
                {course.is_active ? "Active" : "Hidden"}
              </button>
            </div>

            {/* Bottom Area with Course Name (Exact match to website) */}
            <div className="p-4 bg-[#FFFAF3] flex items-center justify-between border-t border-zinc-200/60">
              <div>
                <p className="font-bold text-sm sm:text-base text-zinc-900 leading-snug">
                  {course.name}
                </p>
                <Link
                  href={course.href}
                  target="_blank"
                  className="text-[11px] text-slate-400 hover:text-[#BC0202] inline-flex items-center gap-1 mt-0.5 transition"
                >
                  <span>{course.href}</span>
                  <ExternalLink size={10} />
                </Link>
              </div>

              {/* Edit & Delete Actions */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => openEditModal(course)}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#BC0202] hover:border-red-200 transition shadow-2xs cursor-pointer"
                  title="Edit Card"
                >
                  <Edit2 size={13} />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(course.id, course.name)}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-red-600 hover:border-red-200 transition shadow-2xs cursor-pointer"
                  title="Delete Card"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit / Add Modal with ONLY exact website fields */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                {editingCourse ? `Edit ${editingCourse.name}` : "Add German Course Card"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Level Badge Text (Shows on Image)
                </label>
                <input
                  type="text"
                  required
                  value={formData.badge}
                  onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                  placeholder="e.g. A1 Level"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Course Name (Shows below Image)
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. A1 – Beginner Level"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Card Background Image
                </label>
                <input
                  type="text"
                  required
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="/greenbg.jpg"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Page Link URL
                </label>
                <input
                  type="text"
                  required
                  value={formData.href}
                  onChange={(e) => setFormData({ ...formData, href: e.target.value })}
                  placeholder="/german/a1"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="activeCheck"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  className="w-4 h-4 rounded text-[#BC0202] focus:ring-[#BC0202] border-slate-300"
                />
                <label htmlFor="activeCheck" className="text-xs font-bold text-slate-700 cursor-pointer">
                  Display this card on website
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
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
