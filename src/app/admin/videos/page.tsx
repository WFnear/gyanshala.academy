"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Video,
  Plus,
  Play,
  Trash2,
  Edit2,
  ExternalLink,
  CheckCircle,
  X,
} from "lucide-react";

interface OnlineVideo {
  id: string;
  youtubeId: string;
  title: string;
  trainer: string;
  level: string;
  duration: string;
  is_active: boolean;
}

const initialVideos: OnlineVideo[] = [
  {
    id: "video-1",
    youtubeId: "UfaGlQcIKvE",
    title: "Nursing Jobs in Germany - Complete Process for Indian Nurses",
    trainer: "Gyanshala Germany Pathway Experts",
    level: "Nursing in Germany",
    duration: "Full Guide",
    is_active: true,
  },
  {
    id: "video-2",
    youtubeId: "M5B2xEpXJGI",
    title: "Ausbildung in Germany - Vocational Training & Career Guide for Indian Students",
    trainer: "Gyanshala Germany Pathway Experts",
    level: "Ausbildung in Germany",
    duration: "Full Guide",
    is_active: true,
  },
  {
    id: "video-3",
    youtubeId: "IhXq68yXfu0",
    title: "A1 German Language Grammar Topics - Complete Series",
    trainer: "Dilip Sinsinwar | German Language Trainer",
    level: "A1 Grammar Series",
    duration: "Full Playlist",
    is_active: true,
  },
];

export default function VideoLessonsAdminPage() {
  const [videos, setVideos] = useState<OnlineVideo[]>(initialVideos);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<OnlineVideo | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    youtubeId: "",
    trainer: "Gyanshala Germany Pathway Experts",
    level: "German Language",
    duration: "Full Guide",
    is_active: true,
  });

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  function openCreateModal() {
    setEditingVideo(null);
    setFormData({
      title: "",
      youtubeId: "",
      trainer: "Gyanshala Germany Pathway Experts",
      level: "German Language",
      duration: "Full Guide",
      is_active: true,
    });
    setIsModalOpen(true);
  }

  function openEditModal(v: OnlineVideo) {
    setEditingVideo(v);
    setFormData({
      title: v.title,
      youtubeId: v.youtubeId,
      trainer: v.trainer,
      level: v.level,
      duration: v.duration,
      is_active: v.is_active,
    });
    setIsModalOpen(true);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    let cleanId = formData.youtubeId.trim();
    if (cleanId.includes("watch?v=")) {
      cleanId = cleanId.split("watch?v=")[1].split("&")[0];
    } else if (cleanId.includes("youtu.be/")) {
      cleanId = cleanId.split("youtu.be/")[1].split("?")[0];
    }

    if (editingVideo) {
      setVideos((prev) =>
        prev.map((v) =>
          v.id === editingVideo.id ? { ...v, ...formData, youtubeId: cleanId } : v
        )
      );
      showToast("Video lesson updated!");
    } else {
      const newId = "video-" + Date.now();
      setVideos((prev) => [
        ...prev,
        { id: newId, ...formData, youtubeId: cleanId },
      ]);
      showToast("Video lesson added!");
    }
    setIsModalOpen(false);
  }

  function toggleStatus(v: OnlineVideo) {
    const updatedStatus = !v.is_active;
    setVideos((prev) =>
      prev.map((item) => (item.id === v.id ? { ...item, is_active: updatedStatus } : item))
    );
    showToast(`Video ${updatedStatus ? "activated" : "hidden"}`);
  }

  function handleDelete(id: string, title: string) {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;
    setVideos((prev) => prev.filter((v) => v.id !== id));
    showToast("Video deleted");
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
            ONLINE LEARNING
          </p>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-0.5">
            Free Video Lessons
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Manage the {videos.length} YouTube lessons &amp; pathway webinars featured on the homepage.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/#videos"
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
            <span>Add Video</span>
          </button>
        </div>
      </div>

      {/* Video Cards Grid - EXACT MATCH TO PUBLIC WEBSITE */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`flex flex-col bg-white border rounded-2xl overflow-hidden shadow-sm transition-all ${
              video.is_active ? "border-slate-200/90" : "border-slate-300 opacity-60 bg-slate-50"
            }`}
          >
            {/* YouTube Thumbnail Preview */}
            <div className="relative w-full aspect-video bg-black overflow-hidden group">
              <Image
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={video.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#BC0202] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={20} className="fill-white translate-x-0.5" />
                </div>
              </div>

              {/* Status pill on top right */}
              <button
                type="button"
                onClick={() => toggleStatus(video)}
                className={`absolute top-2.5 right-2.5 z-20 px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm cursor-pointer ${
                  video.is_active
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-700 text-slate-300"
                }`}
                title="Toggle Active Status"
              >
                {video.is_active ? "Active" : "Hidden"}
              </button>
            </div>

            {/* Video Details */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-red-50 text-[#BC0202] border border-red-100">
                    {video.level}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {video.duration}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {video.trainer}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100">
                <a
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-slate-500 hover:text-[#BC0202] flex items-center gap-1"
                >
                  <Play size={11} className="fill-[#BC0202] text-[#BC0202]" />
                  <span>Watch on YouTube</span>
                </a>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => openEditModal(video)}
                    className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#BC0202] hover:border-red-200 transition shadow-2xs cursor-pointer"
                    title="Edit Video"
                  >
                    <Edit2 size={13} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(video.id, video.title)}
                    className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-red-600 hover:border-red-200 transition shadow-2xs cursor-pointer"
                    title="Delete Video"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
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
                {editingVideo ? "Edit Video Lesson" : "Add Video Lesson"}
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
                  Video Title
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Nursing Jobs in Germany - Complete Process"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  YouTube Video ID or URL
                </label>
                <input
                  type="text"
                  required
                  value={formData.youtubeId}
                  onChange={(e) => setFormData({ ...formData, youtubeId: e.target.value })}
                  placeholder="e.g. UfaGlQcIKvE or https://youtu.be/..."
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Level / Category
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    placeholder="e.g. Nursing in Germany"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#BC0202]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Duration
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="e.g. Full Guide"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#BC0202]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Trainer / Presenter
                </label>
                <input
                  type="text"
                  required
                  value={formData.trainer}
                  onChange={(e) => setFormData({ ...formData, trainer: e.target.value })}
                  placeholder="e.g. Gyanshala Germany Pathway Experts"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="vid_active"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  className="w-4 h-4 text-[#BC0202] rounded border-slate-300 focus:ring-red-500"
                />
                <label htmlFor="vid_active" className="text-xs font-medium text-slate-700">
                  Visible on website homepage
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
                  {editingVideo ? "Save Changes" : "Add Video"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
