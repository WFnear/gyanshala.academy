import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Page Not Found (404) | Gyanshala Academy",
  description:
    "The page you are looking for does not exist or has been moved. Explore German courses, foreign languages, and Germany pathways at Gyanshala Academy.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-xl w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-red-50 text-[#BC0202] dark:bg-red-950/40 font-black text-3xl mb-6 shadow-sm border border-red-100 dark:border-red-900/40">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          Page Not Found
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 mb-8 max-w-md mx-auto leading-relaxed">
          The link you followed may be broken or the page may have been moved. Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#BC0202] hover:bg-[#9B0A11] text-white font-bold text-sm transition shadow-md hover:shadow-lg text-center"
          >
            Back to Homepage
          </Link>
          <Link
            href="/german"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 hover:border-slate-300 text-slate-800 dark:text-zinc-200 font-bold text-sm transition text-center"
          >
            German Courses
          </Link>
          <Link
            href="/faqs"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 hover:border-slate-300 text-slate-800 dark:text-zinc-200 font-bold text-sm transition text-center"
          >
            FAQs
          </Link>
        </div>
      </div>
    </main>
  );
}
