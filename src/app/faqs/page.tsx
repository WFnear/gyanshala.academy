import type { Metadata } from "next";
import Image from "next/image";
import { FadeInUp } from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | Gyanshala Foreign Language Academy",
  description:
    "Find answers to frequently asked questions about learning German (A1-C2), Goethe-Zertifikat exams, studying in Germany, Ausbildung, nursing opportunities, fees, and admissions at Gyanshala Academy Jaipur.",
};

export default function FAQsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      
      {/* =========================================================================
          HERO SECTION (SAME DESIGN AS ABOUT US & PATHWAYS)
          ========================================================================= */}
      <section className="relative min-h-[300px] sm:min-h-[360px] md:min-h-[420px] flex flex-col items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-24 text-white text-center bg-zinc-950">
        <Image
          src="/Hero/IMG_20250806_121356110_HDR.jpg"
          alt="Frequently Asked Questions - Gyanshala Foreign Language Academy"
          fill
          priority
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/60 sm:bg-black/55 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-white/95 font-medium tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] max-w-2xl mx-auto">
              Your Questions Answered – Start Your German Language Learning Journey with Confidence! 🇩🇪
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* =========================================================================
          FAQ INTERACTIVE CONTENT SECTION
          ========================================================================= */}
      <FAQSection showHeading={false} />

    </main>
  );
}
