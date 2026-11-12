"use client";

import { useState, useEffect } from "react";
import ImageUpload from "@/components/admin/ImageUpload";
import {
  Plus,
  Trash2,
  Eye,
  Loader2,
  Check,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

interface GalleryItem {
  id: number | string;
  title: string;
  category: "Campus" | "Classroom" | "Events" | "Alumni" | string;
  image_url: string;
}

export default function GalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<string>("Campus");
  const [imageUrl, setImageUrl] = useState("");
  const [previewItem, setPreviewItem] = useState<GalleryItem | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadGallery() {
      try {
        const res = await fetch("/api/admin/gallery", { cache: "no-store" });
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setGallery(json.data);
        }
      } catch (err) {
        console.error("Failed to load gallery:", err);
      } finally {
        setLoading(false);
      }
    }
    loadGallery();
  }, []);

  function showToast(msg: string) {
    setError(null);
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  const filteredItems = gallery.filter((item) =>
    filter === "all" ? true : item.category.toLowerCase() === filter.toLowerCase()
  );

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !imageUrl) {
      setError("Please enter a photo title and upload an image.");
      return;
    }

    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, category, image_url: imageUrl }),
      });
      const data = await res.json();
      if (res.ok && data.success && data.data) {
        setGallery([data.data, ...gallery]);
        setIsModalOpen(false);
        setTitle("");
        setImageUrl("");
        showToast("Photo added to gallery!");
      } else {
        setError(data.message || "Failed to save gallery photo.");
      }
    } catch {
      setError("Error saving gallery photo.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number | string) => {
    if (!confirm("Delete this gallery image?")) return;
    setError(null);
    try {
      const res = await fetch(`/api/admin/gallery?id=${encodeURIComponent(String(id))}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setGallery(gallery.filter((g) => String(g.id) !== String(id)));
        showToast("Photo deleted from gallery.");
      } else {
        setError(data.message || "Failed to delete gallery photo.");
      }
    } catch {
      setError("Error deleting gallery photo.");
    }
  };

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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="border-l-4 border-[#BC0202] pl-3.5">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Photo Gallery Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Campus infrastructure, student events, workshops and celebration moments
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <Link
            href="/gallery"
            target="_blank"
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm font-bold rounded-xl transition"
          >
            <span>View Live Gallery</span>
            <ExternalLink size={14} />
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition cursor-pointer"
          >
            <Plus size={16} />
            <span>Upload New Photo</span>
          </button>
        </div>
      </div>

      {toast && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
          <Check size={16} className="text-emerald-600" />
          <span>{toast}</span>
        </div>
      )}

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
          <AlertCircle size={16} className="text-red-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {["all", "Campus", "Classroom", "Events", "Alumni"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
              filter === cat
                ? "bg-[#BC0202] text-white shadow-xs"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            {cat === "all" ? "All Photos" : cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden group flex flex-col justify-between"
          >
            <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <span className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold rounded-md">
                {item.category}
              </span>
            </div>

            <div className="p-4 flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm truncate pr-2">
                {item.title}
              </h3>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => setPreviewItem(item)}
                  className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition cursor-pointer"
                  title="View Preview"
                >
                  <Eye size={15} />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
                  title="Delete Photo"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
              <h2 className="text-lg font-bold text-slate-900">
                Add Photo to Gallery
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAdd} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Photo Caption / Title
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. New Batch Classroom Orientation"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-[#BC0202]"
                >
                  <option value="Campus">Campus</option>
                  <option value="Classroom">Classroom</option>
                  <option value="Events">Events</option>
                  <option value="Alumni">Alumni</option>
                </select>
              </div>

              <ImageUpload
                label="Gallery Photo"
                value={imageUrl}
                onChange={(url) => setImageUrl(url)}
                aspectRatio="video"
                helperText="Upload campus, classroom, or event photo from your computer"
              />

              <div className="pt-3 flex gap-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 py-3 bg-[#BC0202] hover:bg-[#990202] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save to Gallery"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {previewItem && (
        <div
          onClick={() => setPreviewItem(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="max-w-3xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <img
              src={previewItem.image_url}
              alt={previewItem.title}
              className="w-full max-h-[75vh] object-contain"
            />
            <div className="p-4 flex items-center justify-between text-white">
              <div>
                <h3 className="font-bold text-sm">{previewItem.title}</h3>
                <span className="text-xs text-slate-400">{previewItem.category}</span>
              </div>
              <button
                onClick={() => setPreviewItem(null)}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-xs cursor-pointer"
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
