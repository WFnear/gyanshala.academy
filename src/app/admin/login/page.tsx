"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [adminname, setAdminname] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function performLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!adminname.trim()) {
      setError("Please enter your admin email or username.");
      return;
    }
    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: adminname.trim(),
          password: password.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Invalid credentials. Please try again.");
      }

      router.push("/admin");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Authentication error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen w-full bg-[#F4F6F9] flex flex-col items-center justify-center p-4 sm:p-6 text-slate-900 font-sans"
      style={{ fontFamily: "var(--font-plus-jakarta), var(--font-raleway), sans-serif" }}
    >
      <div className="w-full max-w-md">

        {/* Main Production Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] border border-slate-200/80 overflow-hidden">
          
          {/* Gyanshala Crimson Red Brand Header */}
          <div className="bg-[#BC0202] px-6 py-7 sm:py-8 text-center relative overflow-hidden flex flex-col items-center justify-center">
            {/* Subtle brand glow overlay */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <Link href="/" title="Go to Gyanshala Home">
                <Image
                  src="/Logo/LOGO.NEW.GYANSHALA.cropped.png"
                  alt="Gyanshala Foreign Language Academy"
                  width={260}
                  height={78}
                  className="h-12 sm:h-14 w-auto object-contain drop-shadow-sm transition-transform hover:scale-102"
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-6 sm:p-8">
            <div className="mb-6 text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Sign In
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Enter your credentials to access the Gyanshala control panel
              </p>
            </div>

            {error && (
              <div className="mb-5 text-xs font-medium text-red-700 bg-red-50 p-3.5 rounded-xl border border-red-200 flex items-start gap-2 animate-in fade-in">
                <span className="font-bold shrink-0">Error:</span>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={performLogin} className="space-y-4">
              {/* Admin Email or Username */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Email Address / Username
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3.5 text-slate-400 pointer-events-none">
                    <Mail size={18} />
                  </div>
                  <input
                    type="text"
                    value={adminname}
                    onChange={(e) => setAdminname(e.target.value)}
                    placeholder="Enter admin email or username"
                    autoComplete="username"
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
                    className="text-xs text-slate-500 hover:text-[#BC0202] flex items-center gap-1 font-medium transition-colors cursor-pointer"
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
                    placeholder="••••••••••••"
                    autoComplete="current-password"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-10 text-sm text-slate-900 font-medium placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#BC0202] focus:ring-2 focus:ring-[#BC0202]/15 transition-all"
                  />
                </div>
              </div>

              {/* Sign In Button (Gyanshala Red) */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-3 cursor-pointer py-3.5 px-4 bg-[#BC0202] hover:bg-[#9E0202] active:bg-[#850101] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Dashboard</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Back to Website Link */}
            <div className="mt-6 pt-5 border-t border-slate-100 text-center">
              <Link
                href="/"
                className="text-xs font-semibold text-slate-500 hover:text-[#BC0202] transition-colors inline-flex items-center gap-1"
              >
                ← Back to Gyanshala Academy Website
              </Link>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <p className="mt-4 text-center text-[11px] text-slate-400 font-medium">
          Protected by Gyanshala Security &bull; Authorized Personnel Only
        </p>

      </div>
    </div>
  );
}
