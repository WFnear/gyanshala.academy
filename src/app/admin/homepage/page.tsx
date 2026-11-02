"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Layers,
  MoveUp,
  MoveDown,
  Eye,
  EyeOff,
  Edit3,
  Plus,
  Trash2,
  Check,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Sliders,
  Users,
  Video,
  Star,
  Loader2,
  Save,
} from "lucide-react";

export default function HomepageAdminPage() {
  const [sections, setSections] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // Active sub-editor tab: "overview" | "hero" | "why_choose" | "students" | "reviews" | "videos"
  const [activeTab, setActiveTab] = useState<string>("overview");

  useEffect(() => {
    async function loadSections() {
      try {
        const res = await fetch("/api/admin/cms/homepage");
        const json = await res.json();
        if (json.success && json.data) {
          setSections(json.data);
        }
      } catch (e) {
        console.error("Failed to load homepage sections:", e);
      } finally {
        setLoading(false);
      }
    }
    loadSections();
  }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  async function saveSections(updatedSections: any[]) {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/cms/homepage", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sections: updatedSections }),
      });
      const data = await res.json();
      if (data.success) {
        setSections(data.sections);
        showToast("Homepage updated successfully!");
      }
    } catch (e) {
      alert("Error saving homepage sections");
    } finally {
      setSaving(false);
    }
  }

  function handleToggleSection(sectionId: string) {
    const updated = sections.map((s) => (s.id === sectionId ? { ...s, is_active: !s.is_active } : s));
    setSections(updated);
    saveSections(updated);
  }

  function handleMoveSection(index: number, direction: "up" | "down") {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= sections.length) return;
    const updated = [...sections];
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;
    const reindexed = updated.map((s, idx) => ({ ...s, order_index: idx + 1 }));
    setSections(reindexed);
    saveSections(reindexed);
  }

  // Helpers to get specific section data
  const heroSection = sections.find((s) => s.key === "hero");
  const whyChooseSection = sections.find((s) => s.key === "why_choose");
  const studentsSection = sections.find((s) => s.key === "students_in_germany");
  const reviewsSection = sections.find((s) => s.key === "reviews");
  const videosSection = sections.find((s) => s.key === "videos");

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
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Layers className="text-[#BC0202]" size={26} />
            <span>Homepage CMS Manager</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Reorder, toggle, and edit every section and banner of your live homepage
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => saveSections(sections)}
            disabled={saving}
            className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition disabled:opacity-50"
          >
            {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
            <span>Save All Changes</span>
          </button>
        </div>
      </div>

      {toast && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
          <Check size={16} className="text-emerald-600" />
          <span>{toast}</span>
        </div>
      )}

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-200">
        {[
          { id: "overview", label: "Homepage Sections & Order", icon: Sliders },
          { id: "hero", label: "Hero Slider", icon: Sparkles },
          { id: "why_choose", label: "Why Learn With Us?", icon: Check },
          { id: "students", label: "Our Students in Germany", icon: Users },
          { id: "reviews", label: "What Our Students Say", icon: Star },
          { id: "videos", label: "Free Video Lessons", icon: Video },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap flex items-center gap-2 transition ${
                isActive
                  ? "bg-[#BC0202] text-white shadow-xs"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Icon size={15} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: SECTIONS OVERVIEW & ORDER */}
      {activeTab === "overview" && (
        <div className="space-y-3">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-1">
            Drag / Reorder Sections &amp; Toggle Live Status
          </div>

          {sections.map((section, idx) => (
            <div
              key={section.id}
              className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                section.is_active
                  ? "bg-white border-slate-200/90 shadow-xs"
                  : "bg-slate-50 border-dashed border-slate-300 opacity-60"
              }`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900 truncate">
                      {section.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      key: {section.key}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500">
                    Status:{" "}
                    <strong className={section.is_active ? "text-emerald-600" : "text-slate-400"}>
                      {section.is_active ? "Visible on Homepage" : "Hidden from Public"}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => handleMoveSection(idx, "up")}
                  disabled={idx === 0}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 disabled:opacity-30 cursor-pointer"
                  title="Move Up"
                >
                  <MoveUp size={16} />
                </button>
                <button
                  onClick={() => handleMoveSection(idx, "down")}
                  disabled={idx === sections.length - 1}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 disabled:opacity-30 cursor-pointer"
                  title="Move Down"
                >
                  <MoveDown size={16} />
                </button>

                {/* Direct Edit link to tab if applicable */}
                {["hero", "why_choose", "students_in_germany", "reviews", "videos"].includes(section.key) && (
                  <button
                    onClick={() => {
                      if (section.key === "hero") setActiveTab("hero");
                      if (section.key === "why_choose") setActiveTab("why_choose");
                      if (section.key === "students_in_germany") setActiveTab("students");
                      if (section.key === "reviews") setActiveTab("reviews");
                      if (section.key === "videos") setActiveTab("videos");
                    }}
                    className="cursor-pointer px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1"
                  >
                    <Edit3 size={13} />
                    <span>Edit Content</span>
                  </button>
                )}

                <button
                  onClick={() => handleToggleSection(section.id)}
                  className={`p-1.5 rounded-lg cursor-pointer transition ${
                    section.is_active ? "text-emerald-600 hover:bg-emerald-50" : "text-slate-400 hover:bg-slate-100"
                  }`}
                  title={section.is_active ? "Disable Section" : "Enable Section"}
                >
                  {section.is_active ? <Eye size={16} /> : <EyeOff size={16} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: HERO SLIDER EDITOR */}
      {activeTab === "hero" && heroSection && (
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Homepage Hero Slider Banners</h2>
              <p className="text-xs text-slate-500">Edit real banner images, headings, highlights, and buttons</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {heroSection.slides?.map((slide: any, sIdx: number) => (
              <div
                key={slide.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-6 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#BC0202]">
                    Slide #{sIdx + 1}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Image: {slide.image}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Badge Text</label>
                    <input
                      type="text"
                      value={slide.badge}
                      onChange={(e) => {
                        const updatedSlides = [...heroSection.slides];
                        updatedSlides[sIdx].badge = e.target.value;
                        const updated = sections.map((s) =>
                          s.key === "hero" ? { ...s, slides: updatedSlides } : s
                        );
                        setSections(updated);
                      }}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Image Path</label>
                    <input
                      type="text"
                      value={slide.image}
                      onChange={(e) => {
                        const updatedSlides = [...heroSection.slides];
                        updatedSlides[sIdx].image = e.target.value;
                        const updated = sections.map((s) =>
                          s.key === "hero" ? { ...s, slides: updatedSlides } : s
                        );
                        setSections(updated);
                      }}
                      className="w-full px-3 py-2 text-sm font-mono border border-slate-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Main Title</label>
                    <input
                      type="text"
                      value={slide.title}
                      onChange={(e) => {
                        const updatedSlides = [...heroSection.slides];
                        updatedSlides[sIdx].title = e.target.value;
                        const updated = sections.map((s) =>
                          s.key === "hero" ? { ...s, slides: updatedSlides } : s
                        );
                        setSections(updated);
                      }}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Highlighted Sub-title
                    </label>
                    <input
                      type="text"
                      value={slide.highlight}
                      onChange={(e) => {
                        const updatedSlides = [...heroSection.slides];
                        updatedSlides[sIdx].highlight = e.target.value;
                        const updated = sections.map((s) =>
                          s.key === "hero" ? { ...s, slides: updatedSlides } : s
                        );
                        setSections(updated);
                      }}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={slide.description}
                    onChange={(e) => {
                      const updatedSlides = [...heroSection.slides];
                      updatedSlides[sIdx].description = e.target.value;
                      const updated = sections.map((s) =>
                        s.key === "hero" ? { ...s, slides: updatedSlides } : s
                      );
                      setSections(updated);
                    }}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500">Primary Button:</span>
                    <input
                      type="text"
                      value={slide.primaryBtn?.text}
                      onChange={(e) => {
                        const updatedSlides = [...heroSection.slides];
                        updatedSlides[sIdx].primaryBtn.text = e.target.value;
                        const updated = sections.map((s) =>
                          s.key === "hero" ? { ...s, slides: updatedSlides } : s
                        );
                        setSections(updated);
                      }}
                      className="px-2 py-1 text-xs border rounded-lg w-32"
                    />
                    <input
                      type="text"
                      value={slide.primaryBtn?.href}
                      onChange={(e) => {
                        const updatedSlides = [...heroSection.slides];
                        updatedSlides[sIdx].primaryBtn.href = e.target.value;
                        const updated = sections.map((s) =>
                          s.key === "hero" ? { ...s, slides: updatedSlides } : s
                        );
                        setSections(updated);
                      }}
                      className="px-2 py-1 text-xs font-mono border rounded-lg flex-1"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500">Secondary Button:</span>
                    <input
                      type="text"
                      value={slide.secondaryBtn?.text}
                      onChange={(e) => {
                        const updatedSlides = [...heroSection.slides];
                        updatedSlides[sIdx].secondaryBtn.text = e.target.value;
                        const updated = sections.map((s) =>
                          s.key === "hero" ? { ...s, slides: updatedSlides } : s
                        );
                        setSections(updated);
                      }}
                      className="px-2 py-1 text-xs border rounded-lg w-32"
                    />
                    <input
                      type="text"
                      value={slide.secondaryBtn?.href}
                      onChange={(e) => {
                        const updatedSlides = [...heroSection.slides];
                        updatedSlides[sIdx].secondaryBtn.href = e.target.value;
                        const updated = sections.map((s) =>
                          s.key === "hero" ? { ...s, slides: updatedSlides } : s
                        );
                        setSections(updated);
                      }}
                      className="px-2 py-1 text-xs font-mono border rounded-lg flex-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => saveSections(sections)}
            disabled={saving}
            className="cursor-pointer px-6 py-2.5 bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition"
          >
            {saving ? "Saving Changes..." : "Save Hero Slides"}
          </button>
        </div>
      )}

      {/* TAB 3: WHY CHOOSE US (6 POINTS) */}
      {activeTab === "why_choose" && whyChooseSection && (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Why Choose Gyanshala Cards</h2>
            <p className="text-xs text-slate-500">Edit the 6 reason cards shown on homepage &amp; about page</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyChooseSection.points?.map((pt: any, idx: number) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200/90 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#BC0202]">{pt.number}</span>
                  <span className="text-xs text-slate-400">Card #{idx + 1}</span>
                </div>
                <input
                  type="text"
                  value={pt.title}
                  onChange={(e) => {
                    const updatedPoints = [...whyChooseSection.points];
                    updatedPoints[idx].title = e.target.value;
                    const updated = sections.map((s) =>
                      s.key === "why_choose" ? { ...s, points: updatedPoints } : s
                    );
                    setSections(updated);
                  }}
                  className="w-full px-3 py-1.5 text-sm font-bold border border-slate-300 rounded-lg"
                />
                <textarea
                  rows={2}
                  value={pt.description}
                  onChange={(e) => {
                    const updatedPoints = [...whyChooseSection.points];
                    updatedPoints[idx].description = e.target.value;
                    const updated = sections.map((s) =>
                      s.key === "why_choose" ? { ...s, points: updatedPoints } : s
                    );
                    setSections(updated);
                  }}
                  className="w-full px-3 py-1.5 text-xs text-slate-600 border border-slate-300 rounded-lg"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => saveSections(sections)}
            disabled={saving}
            className="cursor-pointer px-6 py-2.5 bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition"
          >
            {saving ? "Saving..." : "Save Why Choose Cards"}
          </button>
        </div>
      )}

      {/* TAB 4: STUDENTS IN GERMANY (16 REAL STUDENTS) */}
      {activeTab === "students" && studentsSection && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Our Students in Germany 🇩🇪</h2>
              <p className="text-xs text-slate-500">
                All 16 verified students currently showcased on the homepage
              </p>
            </div>
            <button
              onClick={() => {
                const name = prompt("Student Name:");
                if (!name) return;
                const destination = prompt("Destination (e.g. Munich, Germany):", "Munich, Germany");
                const image = prompt("Photo path:", "/studentsingermany/AKSHAT PANDEY.png");
                const updatedList = [...(studentsSection.students || [])];
                updatedList.push({ name, destination: destination || "Germany", image: image || "" });
                const updated = sections.map((s) =>
                  s.key === "students_in_germany" ? { ...s, students: updatedList } : s
                );
                setSections(updated);
                saveSections(updated);
              }}
              className="cursor-pointer px-3.5 py-1.5 bg-[#BC0202] text-white text-xs font-bold rounded-xl flex items-center gap-1"
            >
              <Plus size={14} />
              <span>Add Student</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {studentsSection.students?.map((stu: any, idx: number) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 p-3 flex flex-col justify-between shadow-2xs group"
              >
                <div>
                  <div className="relative aspect-square w-full rounded-lg bg-slate-100 overflow-hidden mb-2">
                    <Image
                      src={stu.image}
                      alt={stu.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="font-bold text-xs text-slate-900 truncate">{stu.name}</div>
                  {(stu.degree || stu.course_cleared) && (
                    <div className="text-[10px] font-semibold text-[#BC0202] truncate">
                      {stu.degree || stu.course_cleared}
                    </div>
                  )}
                  <div className="text-[10px] text-slate-500 truncate">{stu.university || stu.destination}</div>
                </div>

                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      const newDest = prompt("Edit Destination:", stu.destination);
                      if (newDest !== null) {
                        const updatedList = [...studentsSection.students];
                        updatedList[idx].destination = newDest;
                        const updated = sections.map((s) =>
                          s.key === "students_in_germany" ? { ...s, students: updatedList } : s
                        );
                        setSections(updated);
                        saveSections(updated);
                      }
                    }}
                    className="text-[11px] font-semibold text-slate-600 hover:text-[#BC0202] cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (!confirm(`Delete ${stu.name}?`)) return;
                      const updatedList = studentsSection.students.filter((_: any, i: number) => i !== idx);
                      const updated = sections.map((s) =>
                        s.key === "students_in_germany" ? { ...s, students: updatedList } : s
                      );
                      setSections(updated);
                      saveSections(updated);
                    }}
                    className="text-[11px] font-semibold text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: STUDENT REVIEWS (18 REVIEWS) */}
      {activeTab === "reviews" && reviewsSection && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Verified Student Reviews</h2>
              <p className="text-xs text-slate-500">
                All 18 Google Student reviews shown in the homepage carousel
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviewsSection.reviews?.map((rev: any, idx: number) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200/90 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900">{rev.name}</span>
                    <span className="text-amber-500 text-xs">★★★★★</span>
                  </div>
                  <button
                    onClick={() => {
                      if (!confirm(`Remove review by ${rev.name}?`)) return;
                      const updatedList = reviewsSection.reviews.filter((_: any, i: number) => i !== idx);
                      const updated = sections.map((s) =>
                        s.key === "reviews" ? { ...s, reviews: updatedList } : s
                      );
                      setSections(updated);
                      saveSections(updated);
                    }}
                    className="text-red-400 hover:text-red-600 cursor-pointer"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <textarea
                  rows={3}
                  value={rev.review}
                  onChange={(e) => {
                    const updatedList = [...reviewsSection.reviews];
                    updatedList[idx].review = e.target.value;
                    const updated = sections.map((s) =>
                      s.key === "reviews" ? { ...s, reviews: updatedList } : s
                    );
                    setSections(updated);
                  }}
                  className="w-full px-3 py-2 text-xs text-slate-700 border border-slate-300 rounded-lg"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => saveSections(sections)}
            disabled={saving}
            className="cursor-pointer px-6 py-2.5 bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition"
          >
            {saving ? "Saving..." : "Save Student Reviews"}
          </button>
        </div>
      )}

      {/* TAB 6: VIDEOS SHOWCASE */}
      {activeTab === "videos" && videosSection && (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">YouTube Video Guides</h2>
            <p className="text-xs text-slate-500">Edit YouTube video IDs and titles on the homepage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {videosSection.videos?.map((vid: any, idx: number) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200/90 p-4 space-y-3">
                <div className="text-xs font-bold text-[#BC0202]">Video #{idx + 1}</div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600">YouTube ID</label>
                  <input
                    type="text"
                    value={vid.youtubeId}
                    onChange={(e) => {
                      const updated = [...videosSection.videos];
                      updated[idx].youtubeId = e.target.value;
                      setSections(sections.map((s) => (s.key === "videos" ? { ...s, videos: updated } : s)));
                    }}
                    className="w-full px-2 py-1 text-xs font-mono border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600">Title</label>
                  <input
                    type="text"
                    value={vid.title}
                    onChange={(e) => {
                      const updated = [...videosSection.videos];
                      updated[idx].title = e.target.value;
                      setSections(sections.map((s) => (s.key === "videos" ? { ...s, videos: updated } : s)));
                    }}
                    className="w-full px-2 py-1 text-xs border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600">Trainer / Level</label>
                  <input
                    type="text"
                    value={vid.trainer}
                    onChange={(e) => {
                      const updated = [...videosSection.videos];
                      updated[idx].trainer = e.target.value;
                      setSections(sections.map((s) => (s.key === "videos" ? { ...s, videos: updated } : s)));
                    }}
                    className="w-full px-2 py-1 text-xs border rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => saveSections(sections)}
            disabled={saving}
            className="cursor-pointer px-6 py-2.5 bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition"
          >
            {saving ? "Saving..." : "Save Videos"}
          </button>
        </div>
      )}
    </div>
  );
}
