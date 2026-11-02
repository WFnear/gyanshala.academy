"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, Sparkles, CheckCircle2 } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [adminname, setAdminname] = useState("admin@gyanshala.in");
  const [password, setPassword] = useState("gyanshala_admin_2026");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function performLogin(user: string, pass: string) {
    if (!pass.trim()) {
      setError("Please enter the password");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: user.trim(), password: pass.trim() }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Invalid credentials");
      }

      router.push("/admin");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Authentication error");
    } finally {
      setLoading(false);
    }
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    performLogin(adminname, password);
  }

  function handleQuickLogin() {
    setAdminname("admin@gyanshala.in");
    setPassword("gyanshala_admin_2026");
    performLogin("admin@gyanshala.in", "gyanshala_admin_2026");
  }

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] flex flex-col items-center justify-center p-4 sm:p-6 text-slate-900">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-200/80 overflow-hidden">
          {/* Dark Brand Header - Ensures White Logo Text is Crisp and High Contrast */}
          <div className="bg-[#0B0F17] border-t-4 border-[#BC0202] px-6 py-8 text-center relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute -top-12 -left-12 w-36 h-36 bg-[#BC0202]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-[#BC0202]/15 rounded-full blur-2xl pointer-events-none" />

            {/* Large Original Logo */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              <Image
                src="/Logo/LOGO.NEW.GYANSHALA.original.png"
                alt="Gyanshala Foreign Language Academy"
                width={380}
                height={110}
                className="w-64 sm:w-76 h-auto object-contain brightness-105 drop-shadow-md"
                priority
              />
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] font-semibold text-slate-200 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#BC0202] animate-pulse" />
                CMS Admin Portal
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-7 sm:p-8">
            <div className="mb-6">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Sign In to Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Manage website pages, courses, FAQs and student enquiries
              </p>
            </div>

            {error && (
              <div className="mb-5 text-xs font-medium text-red-700 bg-red-50 p-3.5 rounded-xl border border-red-200 flex items-start gap-2">
                <span className="font-bold shrink-0">Error:</span>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Admin Email or ID */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Email or Admin ID
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3.5 text-slate-400 pointer-events-none">
                    <Mail size={18} />
                  </div>
                  <input
                    type="text"
                    value={adminname}
                    onChange={(e) => setAdminname(e.target.value)}
                    placeholder="admin@gyanshala.in or admin"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 font-medium placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#BC0202] focus:ring-2 focus:ring-[#BC0202]/15 transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-xs text-slate-500 hover:text-[#BC0202] flex items-center gap-1 font-medium transition-colors"
                  >
                    {showPassword ? (
                      <>
                        <EyeOff size={13} /> Hide
                      </>
                    ) : (
                      <>
                        <Eye size={13} /> Show
                      </>
                    )}
                  </button>
                </div>
                <div className="relative flex items-center">
                  <div className="absolute left-3.5 text-slate-400 pointer-events-none">
                    <Lock size={18} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-10 text-sm text-slate-900 font-medium placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#BC0202] focus:ring-2 focus:ring-[#BC0202]/15 transition-all"
                  />
                </div>
              </div>

              {/* Sign In Button (Gyanshala Red) */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 cursor-pointer py-3.5 px-4 bg-[#BC0202] hover:bg-[#9E0202] active:bg-[#850101] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Admin Panel</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Quick 1-Click Access Card */}
            <div className="mt-6 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-amber-600" /> Default Credentials
                </span>
                <span className="text-[11px] text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full font-medium">
                  Verified
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 my-2">
                <div className="bg-white/80 p-2 rounded-lg border border-amber-100">
                  <span className="block text-[10px] text-slate-400 uppercase font-bold">Email / User</span>
                  <span className="font-mono font-semibold text-slate-900 text-[11px]">admin@gyanshala.in</span>
                </div>
                <div className="bg-white/80 p-2 rounded-lg border border-amber-100">
                  <span className="block text-[10px] text-slate-400 uppercase font-bold">Password</span>
                  <span className="font-mono font-semibold text-slate-900 text-[11px]">gyanshala_admin_2026</span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleQuickLogin}
                disabled={loading}
                className="w-full cursor-pointer py-2 px-3 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <CheckCircle2 size={14} />
                <span>1-Click Auto-Fill & Enter</span>
              </button>
            </div>

            {/* Back to Website Link */}
            <div className="mt-5 text-center">
              <Link
                href="/"
                className="text-xs text-slate-500 hover:text-[#BC0202] transition-colors inline-flex items-center gap-1"
              >
                ← Back to Gyanshala Academy Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
