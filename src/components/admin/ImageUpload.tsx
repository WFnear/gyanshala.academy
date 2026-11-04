"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Upload, X, Loader2, Image as ImageIcon, CheckCircle, RefreshCw, Link as LinkIcon } from "lucide-react";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  helperText?: string;
  aspectRatio?: "square" | "video" | "banner" | "auto";
}

export default function ImageUpload({
  value,
  onChange,
  label = "Upload Image",
  helperText = "Click to browse or drag & drop (JPG, PNG, WebP up to 15MB)",
  aspectRatio = "auto",
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showManualInput, setShowManualInput] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file (JPG, PNG, WebP, etc.).");
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      setError("Image size exceeds 15 MB. Please choose a smaller file.");
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to upload image");
      }

      onChange(data.url);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
  }

  const aspectClass =
    aspectRatio === "square"
      ? "w-32 h-32"
      : aspectRatio === "video"
      ? "w-full aspect-video max-h-48"
      : aspectRatio === "banner"
      ? "w-full h-36"
      : "w-full max-h-52";

  return (
    <div className="space-y-2">
      {/* Hidden native file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml,image/avif"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
          }
        }}
      />

      {/* Label & Manual Toggle Header */}
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
          {label}
        </label>
        <button
          type="button"
          onClick={() => setShowManualInput(!showManualInput)}
          className="text-[11px] font-semibold text-slate-400 hover:text-[#BC0202] inline-flex items-center gap-1 transition"
          title="Toggle manual URL path"
        >
          <LinkIcon size={12} />
          <span>{showManualInput ? "Hide manual URL" : "Manual path / URL"}</span>
        </button>
      </div>

      {/* Optional Manual Path Input (Kept for advanced flexibility) */}
      {showManualInput && (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 space-y-1.5 animate-in fade-in duration-150">
          <div className="text-[11px] font-semibold text-slate-500">
            Paste image file path or web link directly:
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="e.g. /teammembers/photo.png or https://..."
            className="w-full px-3 py-2 text-xs font-mono bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#BC0202]"
          />
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="text-xs font-medium text-red-700 bg-red-50 p-2.5 rounded-xl border border-red-200 flex items-center justify-between">
          <span>{error}</span>
          <button
            type="button"
            onClick={() => setError(null)}
            className="text-red-500 hover:text-red-700"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Case 1: Image ALREADY EXISTS -> Friendly Preview Card */}
      {value ? (
        <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs flex flex-col sm:flex-row items-center gap-4">
          {/* Thumbnail preview */}
          <div className={`relative shrink-0 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center ${aspectClass}`}>
            {/* Standard img tag so any local or external upload loads immediately */}
            <img
              src={value}
              alt="Uploaded Preview"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                // Fallback icon on broken image
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            {uploading && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-2xs flex flex-col items-center justify-center text-white text-xs gap-1.5">
                <Loader2 size={22} className="animate-spin text-white" />
                <span>Uploading...</span>
              </div>
            )}
          </div>

          {/* Action buttons & current image info */}
          <div className="flex-1 w-full flex flex-col justify-between space-y-2">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
                <CheckCircle size={13} />
                <span>Image Active</span>
              </div>
              <p className="text-xs font-mono text-slate-500 mt-1.5 truncate max-w-xs sm:max-w-md" title={value}>
                {value}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1">
              {/* Replace / Change Photo */}
              <button
                type="button"
                disabled={uploading}
                onClick={() => fileInputRef.current?.click()}
                className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#BC0202] hover:bg-[#990202] text-white text-xs font-bold shadow-2xs transition disabled:opacity-50"
              >
                {uploading ? (
                  <>
                    <Loader2 size={13} className="animate-spin" />
                    <span>Uploading...</span>
                  </>
                ) : (
                  <>
                    <RefreshCw size={13} />
                    <span>Change Image</span>
                  </>
                )}
              </button>

              {/* Remove Photo */}
              <button
                type="button"
                disabled={uploading}
                onClick={() => onChange("")}
                className="cursor-pointer inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 text-xs font-semibold border border-slate-200 transition disabled:opacity-50"
              >
                <X size={13} />
                <span>Remove</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Case 2: NO IMAGE -> Big, Friendly Drag & Drop Area */
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => {
            if (!uploading) fileInputRef.current?.click();
          }}
          className={`border-2 border-dashed rounded-2xl p-6 sm:p-7 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-3 ${
            isDragging
              ? "border-[#BC0202] bg-red-50/60 scale-[1.01]"
              : "border-slate-300 hover:border-[#BC0202] bg-slate-50/60 hover:bg-red-50/20"
          }`}
        >
          <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-[#BC0202]">
            {uploading ? (
              <Loader2 size={24} className="animate-spin text-[#BC0202]" />
            ) : (
              <Upload size={22} className="text-[#BC0202]" />
            )}
          </div>

          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-bold text-slate-800">
              {uploading ? "Uploading image to server..." : "Click to upload image from your computer"}
            </p>
            <p className="text-[11px] text-slate-500 font-medium">
              {helperText}
            </p>
          </div>

          {!uploading && (
            <button
              type="button"
              className="mt-1 px-3.5 py-1.5 bg-white border border-slate-200 hover:border-[#BC0202] text-slate-700 hover:text-[#BC0202] rounded-xl text-xs font-bold shadow-2xs transition pointer-events-none"
            >
              Browse Files
            </button>
          )}
        </div>
      )}
    </div>
  );
}
