"use client";

import { useState, useEffect } from "react";
import {
  Settings,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Save,
  ShieldCheck,
  RefreshCw,
  Check,
} from "lucide-react";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    site_phone: "+91 97858 87770",
    site_email: "info@gyanshala.in",
    site_address: "Gyanshala Academy, Jaipur, Rajasthan, India",
    site_whatsapp: "+919785887770",
    notification_email: "info@gyanshala.in",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    async function loadSettings() {
      try {
        const res = await fetch("/api/admin/settings");
        const data = await res.json();
        if (data.success && data.data) {
          setSettings((prev) => ({ ...prev, ...data.data }));
        }
      } catch (err) {
        console.error("Failed to load settings:", err);
      } finally {
        setLoading(false);
      }
    }

    loadSettings();
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setSaveSuccess(false);

    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings }),
      });
      const data = await res.json();
      if (data.success) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      }
    } catch (err) {
      console.error("Failed to save settings:", err);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Academy &amp; Website Settings
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage contact details, notification email, and address shown on the website
        </p>
      </div>

      {/* Contact & Academy Info Form */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
        <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-100">
          <div className="p-2.5 rounded-xl bg-red-50 text-[#C00000]">
            <Settings size={20} />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">General Contact Information</h2>
            <p className="text-xs text-slate-500">
              Updates your contact numbers, emails, and address across the website
            </p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1.5">
                <Phone size={14} className="text-[#C00000]" />
                <span>Primary Contact Phone</span>
              </label>
              <input
                type="text"
                value={settings.site_phone}
                onChange={(e) => setSettings({ ...settings, site_phone: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#C00000]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1.5">
                <MessageCircle size={14} className="text-emerald-600" />
                <span>WhatsApp Number</span>
              </label>
              <input
                type="text"
                value={settings.site_whatsapp}
                onChange={(e) => setSettings({ ...settings, site_whatsapp: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#C00000]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1.5">
                <Mail size={14} className="text-blue-600" />
                <span>Public Contact Email</span>
              </label>
              <input
                type="email"
                value={settings.site_email}
                onChange={(e) => setSettings({ ...settings, site_email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#C00000]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-amber-600" />
                <span>Lead Alert Notification Email</span>
              </label>
              <input
                type="email"
                value={settings.notification_email}
                onChange={(e) => setSettings({ ...settings, notification_email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#C00000]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1.5">
              <MapPin size={14} className="text-[#C00000]" />
              <span>Academy Campus Address</span>
            </label>
            <input
              type="text"
              value={settings.site_address}
              onChange={(e) => setSettings({ ...settings, site_address: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#C00000]"
            />
          </div>

          <div className="flex items-center justify-between pt-3">
            {saveSuccess ? (
              <span className="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                <Check size={15} /> Settings saved successfully!
              </span>
            ) : (
              <span className="text-xs text-slate-400">Updates will reflect across website</span>
            )}

            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C00000] hover:bg-[#a00000] text-white text-xs sm:text-sm font-bold shadow-sm shadow-red-700/20 transition disabled:opacity-50 cursor-pointer"
            >
              {saving ? (
                <RefreshCw size={15} className="animate-spin" />
              ) : (
                <Save size={15} />
              )}
              <span>{saving ? "Saving..." : "Save Settings"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
