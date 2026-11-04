"use client";

import { useState, useEffect } from "react";
import {
  PanelBottom,
  Save,
  Check,
  MapPin,
  Clock,
  Phone,
  Mail,
  Share2,
  ExternalLink,
  Loader2,
} from "lucide-react";

export default function FooterAdminPage() {
  const [footer, setFooter] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    async function loadFooter() {
      try {
        const res = await fetch("/api/admin/cms/footer");
        const json = await res.json();
        if (json.success && json.data) {
          setFooter(json.data);
        }
      } catch (e) {
        console.error("Failed to load footer:", e);
      } finally {
        setLoading(false);
      }
    }
    loadFooter();
  }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/admin/cms/footer", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(footer),
      });
      const data = await res.json();
      if (data.success) {
        setFooter(data.footer);
        showToast("Footer updated successfully!");
      }
    } catch (e) {
      alert("Error saving footer data");
    } finally {
      setSaving(false);
    }
  }

  if (loading || !footer) {
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
            <PanelBottom className="text-[#BC0202]" size={26} />
            <span>Footer Content CMS</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Edit live footer text, address, contact numbers, social media links, and working hours
          </p>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="cursor-pointer inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition disabled:opacity-50"
        >
          {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
          <span>Save Footer Changes</span>
        </button>
      </div>

      {toast && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
          <Check size={16} className="text-emerald-600" />
          <span>{toast}</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Card 1: About Gyanshala Description */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-6 space-y-3">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-[#BC0202]">
            Column 1: About Academy Description
          </h2>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Short Description shown under footer logo
            </label>
            <textarea
              rows={3}
              value={footer.about_text || ""}
              onChange={(e) => setFooter({ ...footer, about_text: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none leading-relaxed"
            />
          </div>
        </div>

        {/* Card 2: Contact Details */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-6 space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-[#BC0202] flex items-center gap-2">
            <MapPin size={16} />
            <span>Campus Location &amp; Contact Details</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Location Title</label>
              <input
                type="text"
                value={footer.contact?.address_title || ""}
                onChange={(e) =>
                  setFooter({
                    ...footer,
                    contact: { ...footer.contact, address_title: e.target.value },
                  })
                }
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">City / Region</label>
              <input
                type="text"
                value={footer.contact?.address_subtitle || ""}
                onChange={(e) =>
                  setFooter({
                    ...footer,
                    contact: { ...footer.contact, address_subtitle: e.target.value },
                  })
                }
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Google Maps CID Link
              </label>
              <input
                type="text"
                value={footer.contact?.google_maps_url || ""}
                onChange={(e) =>
                  setFooter({
                    ...footer,
                    contact: { ...footer.contact, google_maps_url: e.target.value },
                  })
                }
                className="w-full px-3 py-2 text-sm font-mono border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Primary Phone</label>
              <input
                type="text"
                value={footer.contact?.primary_phone || ""}
                onChange={(e) =>
                  setFooter({
                    ...footer,
                    contact: { ...footer.contact, primary_phone: e.target.value },
                  })
                }
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Secondary Phone</label>
              <input
                type="text"
                value={footer.contact?.secondary_phone || ""}
                onChange={(e) =>
                  setFooter({
                    ...footer,
                    contact: { ...footer.contact, secondary_phone: e.target.value },
                  })
                }
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Number</label>
              <input
                type="text"
                value={footer.contact?.whatsapp || ""}
                onChange={(e) =>
                  setFooter({
                    ...footer,
                    contact: { ...footer.contact, whatsapp: e.target.value },
                  })
                }
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Official Email</label>
              <input
                type="text"
                value={footer.contact?.email || ""}
                onChange={(e) =>
                  setFooter({
                    ...footer,
                    contact: { ...footer.contact, email: e.target.value },
                  })
                }
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">Working Hours</label>
              <input
                type="text"
                value={footer.contact?.working_hours || ""}
                onChange={(e) =>
                  setFooter({
                    ...footer,
                    contact: { ...footer.contact, working_hours: e.target.value },
                  })
                }
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Card 3: Social Media Links */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-6 space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-[#BC0202] flex items-center gap-2">
            <Share2 size={16} />
            <span>Social Media Handles</span>
          </h2>

          <div className="space-y-3">
            {footer.social_links?.map((social: any, idx: number) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="w-24 text-xs font-bold text-slate-700">{social.name}:</span>
                <input
                  type="text"
                  value={social.url}
                  onChange={(e) => {
                    const updated = [...footer.social_links];
                    updated[idx].url = e.target.value;
                    setFooter({ ...footer, social_links: updated });
                  }}
                  className="flex-1 px-3 py-2 text-sm font-mono border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Card 4: Copyright Bottom Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-6 space-y-3">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-[#BC0202]">
            Bottom Copyright Text
          </h2>
          <input
            type="text"
            value={footer.copyright || ""}
            onChange={(e) => setFooter({ ...footer, copyright: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="cursor-pointer px-6 py-2.5 bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition disabled:opacity-50"
        >
          {saving ? "Saving Changes..." : "Save Footer Details"}
        </button>
      </form>
    </div>
  );
}
