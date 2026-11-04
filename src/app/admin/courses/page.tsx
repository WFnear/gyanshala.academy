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
  X,
  Globe,
} from "lucide-react";

interface LanguageCard {
  id: string;
  name: string;
  image: string;
  href: string;
  is_active: boolean;
}

const initialLanguages: LanguageCard[] = [
  {
    id: "german",
    name: "German",
    image: "/Flag/german.jpg",
    href: "/german",
    is_active: true,
  },
  {
    id: "french",
    name: "French",
    image: "/Flag/french.jpg",
    href: "/languages/french",
    is_active: true,
  },
  {
    id: "spanish",
    name: "Spanish",
    image: "/Flag/spain.jpg",
    href: "/languages/spanish",
    is_active: true,
  },
  {
    id: "english",
    name: "English",
    image: "/Flag/english.jpg",
    href: "/languages/english",
    is_active: true,
  },
];

export default function AdminLanguagesPage() {
  const [languages, setLanguages] = useState<LanguageCard[]>(initialLanguages);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCard, setEditingCard] = useState<LanguageCard | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    image: "/Flag/german.jpg",
    href: "/languages/",
    is_active: true,
  });

  async function loadLanguages() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/courses");
      const json = await res.json();
      if (json.success && json.data) {
        setLanguages(json.data);
      }
    } catch (e) {
      console.error("Failed to load languages:", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadLanguages();
  }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  function openCreateModal() {
    setEditingCard(null);
    setFormData({
      name: "",
      image: "/Flag/german.jpg",
      href: "/languages/",
      is_active: true,
    });
    setIsModalOpen(true);
  }

  function openEditModal(lang: LanguageCard) {
    setEditingCard(lang);
    setFormData({
      name: lang.name,
      image: lang.image,
      href: lang.href,
      is_active: lang.is_active,
    });
    setIsModalOpen(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (editingCard) {
        const res = await fetch("/api/admin/courses", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingCard.id, ...formData }),
        });
        const data = await res.json();
        if (data.success) {
          setLanguages((prev) =>
            prev.map((l) => (l.id === editingCard.id ? { ...l, ...formData } : l))
          );
          showToast(`${formData.name} updated!`);
        }
      } else {
        const res = await fetch("/api/admin/courses", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success) {
          setLanguages((prev) => [...prev, data.data]);
          showToast(`${formData.name} added!`);
        }
      }
      setIsModalOpen(false);
    } catch {
      alert("Error saving language");
    }
  }

  async function toggleStatus(lang: LanguageCard) {
    const updatedStatus = !lang.is_active;
    try {
      const res = await fetch("/api/admin/courses", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: lang.id, is_active: updatedStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setLanguages((prev) =>
          prev.map((l) => (l.id === lang.id ? { ...l, is_active: updatedStatus } : l))
        );
        showToast(`${lang.name} ${updatedStatus ? "activated" : "hidden"}`);
      }
    } catch {
      alert("Error updating status");
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Are you sure you want to delete ${name}?`)) return;
    try {
      const res = await fetch(`/api/admin/courses?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setLanguages((prev) => prev.filter((l) => l.id !== id));
        showToast(`${name} deleted`);
      }
    } catch {
      alert("Error deleting language");
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
            LEARN BEYOND GERMAN
          </p>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-0.5">
            All Languages
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Manage the 4 global language cards displayed on the All Languages page (/languages).
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/languages"
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
            <span>Add Language Card</span>
          </button>
        </div>
      </div>

      {/* Language Cards Grid - EXACT MATCH TO PUBLIC WEBSITE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {languages.map((lang) => (
          <div
            key={lang.id}
            className={`flex flex-col bg-white border rounded-2xl shadow-sm transition-all overflow-hidden ${
              lang.is_active ? "border-slate-200/90" : "border-slate-300 opacity-60 bg-slate-50"
            }`}
          >
            {/* Top Flag Image Area */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden bg-slate-100 select-none">
              <Image
                src={lang.image}
                alt={lang.name}
                fill
                className="object-cover object-center"
              />

              {/* Status pill on top right */}
              <button
                type="button"
                onClick={() => toggleStatus(lang)}
                className={`absolute top-2.5 right-2.5 z-20 px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm cursor-pointer ${
                  lang.is_active
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-700 text-slate-300"
                }`}
                title="Toggle Active Status"
              >
                {lang.is_active ? "Active" : "Hidden"}
              </button>
            </div>

            {/* Bottom Area with Language Name & Link */}
            <div className="p-4 bg-white flex items-center justify-between border-t border-slate-100">
              <div>
                <p className="font-bold text-base text-slate-900 leading-snug">
                  {lang.name}
                </p>
                <Link
                  href={lang.href}
                  target="_blank"
                  className="text-[11px] text-slate-400 hover:text-[#BC0202] inline-flex items-center gap-1 mt-0.5 transition"
                >
                  <span>{lang.href}</span>
                  <ExternalLink size={10} />
                </Link>
              </div>

              {/* Edit & Delete Actions */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => openEditModal(lang)}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#BC0202] hover:border-red-200 transition shadow-2xs cursor-pointer"
                  title="Edit Card"
                >
                  <Edit2 size={13} />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(lang.id, lang.name)}
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

      {/* Edit / Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                {editingCard ? `Edit ${editingCard.name}` : "Add Language Card"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Language Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. French"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <ImageUpload
                label="Country Flag / Language Image"
                value={formData.image}
                onChange={(url) => setFormData({ ...formData, image: url })}
                aspectRatio="square"
                helperText="Upload country flag or representative image"
              />

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Target Destination URL
                </label>
                <input
                  type="text"
                  required
                  value={formData.href}
                  onChange={(e) => setFormData({ ...formData, href: e.target.value })}
                  placeholder="e.g. /languages/french"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="lang_active"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  className="w-4 h-4 text-[#BC0202] rounded border-slate-300 focus:ring-red-500"
                />
                <label htmlFor="lang_active" className="text-xs font-medium text-slate-700">
                  Visible on public website
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#BC0202] text-white text-xs font-bold hover:bg-[#990202] cursor-pointer"
                >
                  {editingCard ? "Save Changes" : "Add Language"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
