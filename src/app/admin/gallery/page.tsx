"use client";

import { useState } from "react";
import Image from "next/image";
import ImageUpload from "@/components/admin/ImageUpload";
import {
  Image as ImageIcon,
  Plus,
  Trash2,
  Filter,
  Eye,
  Camera,
} from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "Campus" | "Classroom" | "Events" | "Alumni";
  imageUrl: string;
}

const initialGallery: GalleryItem[] = [
  {
    id: 1,
    title: "Jaipur Campus Reception & Main Hall",
    category: "Campus",
    imageUrl: "/Hero/IMG_20250806_170204918_HDR.jpg",
  },
  {
    id: 2,
    title: "Interactive German Batch in Session",
    category: "Classroom",
    imageUrl: "/Hero/IMG_20250806_121152807_HDR.jpg",
  },
  {
    id: 3,
    title: "Goethe Exam Preparation Workshop",
    category: "Events",
    imageUrl: "/Hero/hero3x.jpg",
  },
  {
    id: 4,
    title: "Gyanshala Building & International Desk",
    category: "Campus",
    imageUrl: "/Aboutusgyanshala.in.png",
  },
  {
    id: 5,
    title: "Batch Graduation & Certificate Ceremony",
    category: "Alumni",
    imageUrl: "/Hero/hero3.jpg",
  },
];

export default function GalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>(initialGallery);
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<GalleryItem["category"]>("Campus");
  const [imageUrl, setImageUrl] = useState("");
  const [previewItem, setPreviewItem] = useState<GalleryItem | null>(null);

  const filteredItems = gallery.filter((item) =>
    filter === "all" ? true : item.category.toLowerCase() === filter.toLowerCase()
  );

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !imageUrl) return;

    const newItem: GalleryItem = {
      id: Date.now(),
      title,
      category,
      imageUrl,
    };
    setGallery([newItem, ...gallery]);
    setIsModalOpen(false);
    setTitle("");
    setImageUrl("");
  };

  const handleDelete = (id: number) => {
    if (confirm("Delete this gallery image?")) {
      setGallery(gallery.filter((g) => g.id !== id));
    }
  };

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

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition cursor-pointer self-start sm:self-auto"
        >
          <Plus size={16} />
          <span>Upload New Photo</span>
        </button>
      </div>

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
                src={item.imageUrl}
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
                  className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                  title="View Preview"
                >
                  <Eye size={15} />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
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
                className="text-slate-400 hover:text-slate-700 text-lg font-bold"
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
                  onChange={(e) => setCategory(e.target.value as any)}
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
                  className="flex-1 py-3 bg-[#BC0202] hover:bg-[#990202] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
                >
                  Save to Gallery
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
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={previewItem.imageUrl}
              alt={previewItem.title}
              className="w-full h-auto max-h-[70vh] object-contain bg-black"
            />
            <div className="p-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#BC0202]">
                  {previewItem.category}
                </span>
                <h3 className="font-bold text-slate-900 text-sm">
                  {previewItem.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewItem(null)}
                className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold"
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
