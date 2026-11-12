"use client";

import React, { useEffect, useState } from "react";
import { X, Camera, Loader2 } from "lucide-react";
import { FadeInUp } from "@/components/ScrollReveal";

interface GalleryItem {
  id: number | string;
  title: string;
  category: string;
  image_url: string;
  is_active?: boolean;
}

const CATEGORIES = ["All", "Campus", "Classroom", "Events", "Alumni"];

export default function GalleryClient() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  useEffect(() => {
    fetch("/api/admin/gallery", { cache: "no-store" })
      .then((r) => r.json())
      .then((res) => {
        if (res?.success && Array.isArray(res.data)) {
          setItems(res.data.filter((item: GalleryItem) => item.is_active !== false));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category?.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F5EFE3] dark:bg-zinc-950 min-h-[500px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] mb-2.5">
              CAMPUS &amp; STUDENT MOMENTS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-zinc-900 dark:text-zinc-100 leading-tight">
              Life at Gyanshala Academy
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Explore our Jaipur campus, interactive German &amp; foreign language classrooms, workshops, and student achievements.
            </p>
          </div>
        </FadeInUp>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat
                  ? "bg-[#BC0202] text-white shadow-md"
                  : "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-[#BC0202]/40"
              }`}
            >
              {cat === "All" ? "All Photos" : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-[#BC0202]" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <Camera className="w-10 h-10 mx-auto text-zinc-400 mb-3" />
            <p className="text-sm sm:text-base font-semibold text-zinc-600 dark:text-zinc-400">
              No photos found in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelected(item)}
                className="group text-left bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/65 backdrop-blur-xs text-white text-[11px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white group-hover:text-[#BC0202] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 cursor-default"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close preview"
              className="cursor-pointer absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selected.image_url}
              alt={selected.title}
              className="w-full max-h-[78vh] object-contain bg-black"
            />
            <div className="p-4 sm:p-5 bg-zinc-900 text-white flex items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-sm sm:text-base">{selected.title}</h3>
                <p className="text-xs text-zinc-400 mt-0.5">{selected.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
