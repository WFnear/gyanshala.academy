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
} from "lucide-react";

interface Pathway {
  id: string;
  title: string;
  description: string;
  target: string;
  cta: string;
  href: string;
  image: string;
  is_active: boolean;
}

const initialPathways: Pathway[] = [
  {
    id: "study",
    title: "Study In Germany",
    description:
      "Pursue a Bachelor's or Master's degree at a German university. Get guidance on course selection, admission requirements, APS certification, and student visa preparation.",
    target: "For students planning to pursue higher education in Germany.",
    cta: "Explore Study Options →",
    href: "/pathways/study-in-germany",
    image: "/Pathways/students in germany .png",
    is_active: true,
  },
  {
    id: "ausbildung",
    title: "Ausbildung in Germany",
    description:
      "Learn a profession through practical workplace training and classroom education. Many dual training programmes offer a monthly allowance while you develop skills for a career in Germany.",
    target: "For students who want professional training and practical work experience.",
    cta: "Explore Ausbildung →",
    href: "/pathways/ausbildung",
    image: "/Pathways/ausbildung in germnay.png",
    is_active: true,
  },
  {
    id: "nursing",
    title: "Nursing in Germany",
    description:
      "Explore nursing employment opportunities in Germany if you have a GNM, BSc Nursing, or another relevant nursing qualification. Understand qualification recognition, German language requirements, and the steps towards professional registration.",
    target: "For qualified nurses looking to build their careers in Germany.",
    cta: "Explore Nursing Careers →",
    href: "/pathways/nursing-in-germany",
    image: "/Pathways/nursing jobs in germnay.png",
    is_active: true,
  },
];

export default function AdminGermanyPathwaysPage() {
  const [pathways, setPathways] = useState<Pathway[]>(initialPathways);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPathway, setEditingPathway] = useState<Pathway | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  // Form State - ONLY exact website fields
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    target: "",
    cta: "",
    href: "",
    image: "",
    is_active: true,
  });

  async function loadPathways() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/germany-pathways");
      const json = await res.json();
      if (json.success && json.data) {
        setPathways(json.data);
      }
    } catch (e) {
      console.error("Failed to load pathways:", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPathways();
  }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  function openCreateModal() {
    setEditingPathway(null);
    setFormData({
      title: "",
      description: "",
      target: "",
      cta: "Explore Options →",
      href: "/pathways/",
      image: "/Pathways/students in germany .png",
      is_active: true,
    });
    setIsModalOpen(true);
  }

  function openEditModal(pw: Pathway) {
    setEditingPathway(pw);
    setFormData({
      title: pw.title,
      description: pw.description,
      target: pw.target,
      cta: pw.cta,
      href: pw.href,
      image: pw.image,
      is_active: pw.is_active,
    });
    setIsModalOpen(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (editingPathway) {
        const res = await fetch("/api/admin/germany-pathways", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingPathway.id, ...formData }),
        });
        const data = await res.json();
        if (data.success) {
          setPathways((prev) =>
            prev.map((p) => (p.id === editingPathway.id ? { ...p, ...formData } : p))
          );
          showToast("Pathway updated!");
        }
      } else {
        const res = await fetch("/api/admin/germany-pathways", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success) {
          setPathways((prev) => [...prev, data.data]);
          showToast("New pathway added!");
        }
      }
      setIsModalOpen(false);
    } catch {
      alert("Error saving pathway");
    }
  }

  async function toggleStatus(pw: Pathway) {
    const updatedStatus = !pw.is_active;
    try {
      const res = await fetch("/api/admin/germany-pathways", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: pw.id, is_active: updatedStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setPathways((prev) =>
          prev.map((p) => (p.id === pw.id ? { ...p, is_active: updatedStatus } : p))
        );
        showToast(`Pathway ${updatedStatus ? "activated" : "hidden"}`);
      }
    } catch {
      alert("Error updating pathway status");
    }
  }

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;
    try {
      const res = await fetch(`/api/admin/germany-pathways?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setPathways((prev) => prev.filter((p) => p.id !== id));
        showToast("Pathway deleted");
      }
    } catch {
      alert("Error deleting pathway");
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
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A61911]">
            GLOBAL OPPORTUNITIES
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-zinc-900 tracking-normal leading-tight mt-1">
            Germany Pathways
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Exactly matches the 3 core pathway cards displayed on the public website.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/pathways"
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
            <span>Add Pathway Card</span>
          </button>
        </div>
      </div>

      {/* Pathway Cards Grid - EXACT MATCH TO PUBLIC WEBSITE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pathways.map((pathway) => (
          <div
            key={pathway.id}
            className={`flex flex-col bg-[#FFFAF3] border shadow-md rounded-none overflow-hidden justify-between transition-all ${
              pathway.is_active ? "border-zinc-200/80" : "border-slate-300 opacity-60 bg-slate-100"
            }`}
          >
            <div>
              {/* Image Banner */}
              <div className="relative aspect-[16/10] w-full bg-zinc-100 overflow-hidden">
                <Image
                  src={pathway.image}
                  alt={pathway.title}
                  fill
                  className="object-cover"
                />
                {/* Active toggle button on image */}
                <button
                  type="button"
                  onClick={() => toggleStatus(pathway)}
                  className={`absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm cursor-pointer ${
                    pathway.is_active ? "bg-emerald-500 text-white" : "bg-slate-700 text-slate-300"
                  }`}
                >
                  {pathway.is_active ? "Active" : "Hidden"}
                </button>
              </div>

              {/* Red Title Banner (Exact match to website) */}
              <div className="bg-[#AC2424] py-3 px-4 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-normal leading-tight">
                  {pathway.title}
                </h3>
              </div>

              {/* Content Area (Exact match to website) */}
              <div className="p-5 space-y-3 bg-[#FFFAF3]">
                <p className="text-sm leading-relaxed text-zinc-800 font-normal">
                  {pathway.description}
                </p>
                <p className="text-xs leading-relaxed text-zinc-600 font-normal italic">
                  {pathway.target}
                </p>

                {/* Yellow CTA Button preview */}
                <div className="pt-2">
                  <span className="inline-block px-4 py-2 bg-[#FBAE17] text-white text-xs font-bold">
                    {pathway.cta}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="px-5 py-3 bg-zinc-100/70 border-t border-zinc-200/80 flex items-center justify-between">
              <Link
                href={pathway.href}
                target="_blank"
                className="text-[11px] font-bold text-slate-600 hover:text-[#BC0202] inline-flex items-center gap-1 transition"
              >
                <span>{pathway.href}</span>
                <ExternalLink size={11} />
              </Link>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => openEditModal(pathway)}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#BC0202] shadow-2xs cursor-pointer"
                  title="Edit Pathway"
                >
                  <Edit2 size={13} />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(pathway.id, pathway.title)}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-red-600 shadow-2xs cursor-pointer"
                  title="Delete Pathway"
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
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                {editingPathway ? `Edit ${editingPathway.title}` : "Add Germany Pathway"}
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
                  Pathway Title (Shows in Red Banner)
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Study In Germany"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <ImageUpload
                label="Pathway Banner Image"
                value={formData.image}
                onChange={(url) => setFormData({ ...formData, image: url })}
                aspectRatio="banner"
                helperText="Upload banner image for this Germany Pathway"
              />

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Description Paragraph
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Pursue a Bachelor's or Master's degree at a German university..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Target Audience Text
                </label>
                <input
                  type="text"
                  required
                  value={formData.target}
                  onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                  placeholder="For students planning to pursue higher education in Germany."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Button CTA Text
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.cta}
                    onChange={(e) => setFormData({ ...formData, cta: e.target.value })}
                    placeholder="Explore Study Options →"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#BC0202]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Page URL Link
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.href}
                    onChange={(e) => setFormData({ ...formData, href: e.target.value })}
                    placeholder="/pathways/study-in-germany"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#BC0202]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="activePathway"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  className="w-4 h-4 rounded text-[#BC0202] focus:ring-[#BC0202] border-slate-300"
                />
                <label htmlFor="activePathway" className="text-xs font-bold text-slate-700 cursor-pointer">
                  Display this pathway on website
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
                  Save Pathway
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
