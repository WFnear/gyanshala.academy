"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  Plus,
  Edit2,
  Trash2,
  ExternalLink,
  Eye,
  EyeOff,
  Check,
  Search,
  Loader2,
  Sparkles,
} from "lucide-react";

interface PageItem {
  id: string;
  slug: string;
  title: string;
  meta_title?: string;
  meta_description?: string;
  is_published: boolean;
}

export default function PagesAdminPage() {
  const [pages, setPages] = useState<PageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPage, setEditingPage] = useState<PageItem | null>(null);
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    meta_title: "",
    meta_description: "",
    is_published: true,
  });

  useEffect(() => {
    async function loadPages() {
      try {
        const res = await fetch("/api/admin/cms/pages");
        const json = await res.json();
        if (json.success && json.data) {
          setPages(json.data);
        }
      } catch (e) {
        console.error("Failed to load pages:", e);
      } finally {
        setLoading(false);
      }
    }
    loadPages();
  }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  async function savePages(updated: PageItem[]) {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/cms/pages", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pages: updated }),
      });
      const data = await res.json();
      if (data.success) {
        setPages(data.pages);
        showToast("Pages updated successfully!");
      }
    } catch (e) {
      alert("Error saving pages");
    } finally {
      setSaving(false);
    }
  }

  function handleTogglePublish(id: string) {
    const updated = pages.map((p) => (p.id === id ? { ...p, is_published: !p.is_published } : p));
    setPages(updated);
    savePages(updated);
  }

  function handleDelete(id: string, title: string) {
    if (!confirm(`Are you sure you want to delete page: "${title}"?`)) return;
    const updated = pages.filter((p) => p.id !== id);
    setPages(updated);
    savePages(updated);
  }

  function openEditModal(page: PageItem) {
    setEditingPage(page);
    setFormData({
      slug: page.slug,
      title: page.title,
      meta_title: page.meta_title || "",
      meta_description: page.meta_description || "",
      is_published: page.is_published,
    });
    setIsModalOpen(true);
  }

  function openAddModal() {
    setEditingPage(null);
    setFormData({
      slug: "",
      title: "",
      meta_title: "",
      meta_description: "",
      is_published: true,
    });
    setIsModalOpen(true);
  }

  function handleModalSave(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.title || !formData.slug) return;

    let updated = [...pages];
    if (editingPage) {
      updated = updated.map((p) => (p.id === editingPage.id ? { ...p, ...formData } : p));
    } else {
      updated.push({
        id: "page-" + Date.now(),
        ...formData,
      });
    }

    setPages(updated);
    savePages(updated);
    setIsModalOpen(false);
  }

  const filteredPages = pages.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.slug.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-[#BC0202]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <FileText className="text-[#BC0202]" size={26} />
            <span>Website Pages CMS</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage all 21 website pages, titles, SEO meta details, and publish status
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={openAddModal}
            className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition"
          >
            <Plus size={16} />
            <span>Create New Page</span>
          </button>
        </div>
      </div>

      {toast && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
          <Check size={16} className="text-emerald-600" />
          <span>{toast}</span>
        </div>
      )}

      {/* Search Bar */}
      <div className="relative">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search pages by title or slug (e.g. /german, /about-us, /ausbildung)..."
          className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200/90 rounded-xl shadow-2xs focus:outline-none focus:border-[#BC0202]"
        />
      </div>

      {/* Pages Table */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200/80 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-5 py-3.5">Page Title</th>
                <th className="px-4 py-3.5">URL Slug</th>
                <th className="px-4 py-3.5">SEO Meta Title</th>
                <th className="px-4 py-3.5 text-center">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPages.map((page) => (
                <tr key={page.id} className="hover:bg-slate-50/70 transition">
                  <td className="px-5 py-3.5 font-bold text-slate-900">
                    <div className="flex items-center gap-2">
                      <span>{page.title}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 font-mono text-xs text-slate-600">
                    <span className="bg-slate-100 px-2 py-0.5 rounded">{page.slug}</span>
                  </td>
                  <td className="px-4 py-3.5 text-xs text-slate-500 max-w-xs truncate">
                    {page.meta_title || "Default site title"}
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        page.is_published
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {page.is_published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="inline-flex items-center gap-1.5">
                      <Link
                        href={page.slug}
                        target="_blank"
                        className="p-1.5 hover:bg-slate-100 text-slate-500 rounded-lg"
                        title="View Live Page"
                      >
                        <ExternalLink size={15} />
                      </Link>
                      <button
                        onClick={() => openEditModal(page)}
                        className="p-1.5 hover:bg-slate-100 text-slate-700 rounded-lg cursor-pointer"
                        title="Edit Page Info"
                      >
                        <Edit2 size={15} />
                      </button>
                      <button
                        onClick={() => handleTogglePublish(page.id)}
                        className={`p-1.5 rounded-lg cursor-pointer transition ${
                          page.is_published ? "text-emerald-600 hover:bg-emerald-50" : "text-slate-400 hover:bg-slate-100"
                        }`}
                        title={page.is_published ? "Unpublish Page" : "Publish Page"}
                      >
                        {page.is_published ? <Eye size={15} /> : <EyeOff size={15} />}
                      </button>
                      <button
                        onClick={() => handleDelete(page.id, page.title)}
                        className="p-1.5 hover:bg-red-50 text-red-500 rounded-lg cursor-pointer"
                        title="Delete Page"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
              {editingPage ? "Edit Page Details" : "Create New Website Page"}
            </h2>

            <form onSubmit={handleModalSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Page Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Study in Germany"
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  URL Slug (Starts with /)
                </label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="e.g. /pathways/study-in-germany"
                  className="w-full px-3.5 py-2 text-sm font-mono border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">SEO Meta Title</label>
                <input
                  type="text"
                  value={formData.meta_title}
                  onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                  placeholder="Appears on Google Search results"
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  SEO Meta Description
                </label>
                <textarea
                  rows={3}
                  value={formData.meta_description}
                  onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                  placeholder="Summary for search engines..."
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="page-pub"
                  checked={formData.is_published}
                  onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                  className="rounded text-[#BC0202] focus:ring-[#BC0202]"
                />
                <label htmlFor="page-pub" className="text-xs font-semibold text-slate-700 cursor-pointer">
                  Page is Published and Accessible
                </label>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="cursor-pointer px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="cursor-pointer px-5 py-2 text-xs font-bold text-white bg-[#BC0202] hover:bg-[#990202] rounded-xl shadow-sm transition disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save Page"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
