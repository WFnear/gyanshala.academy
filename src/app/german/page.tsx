import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "German Courses A1–C2 | Gyanshala Foreign Language Academy",
  description:
    "Comprehensive German Language Courses from A1 to C2 levels at Gyanshala Academy Jaipur. CEFR aligned curriculum with certified faculty.",
};

const coursesData = [
  { id: "a1", badge: "A1 Level", name: "A1 – Beginner Level" },
  { id: "a2", badge: "A2 Level", name: "A2 – Elementary Level" },
  { id: "b1", badge: "B1 Level", name: "B1 – Intermediate Level" },
  { id: "b2", badge: "B2 Level", name: "B2 – Upper-Intermediate Level" },
  { id: "c1", badge: "C1 Level", name: "C1 – Advanced Level" },
  { id: "c2", badge: "C2 Level", name: "C2 – Proficiency Level" },
];

const cefrHighlights = [
  {
    level: "A1 – A2",
    title: "Basic User",
    desc: "Understand basic everyday expressions, introduce yourself and others, and handle routine conversations in daily life and travel.",
    target: "Ideal for family reunion visa, spouse visa, and basic communication.",
  },
  {
    level: "B1 – B2",
    title: "Independent User",
    desc: "Communicate fluently on familiar topics, handle work discussions, express opinions, and understand complex technical texts.",
    target: "Essential for Ausbildung, nursing registration, university admissions, and job seekers.",
  },
  {
    level: "C1 – C2",
    title: "Proficient User",
    desc: "Express yourself spontaneously and fluently without searching for words. Master academic, professional, and literary German.",
    target: "Required for German-taught degrees, medical licenses, and senior professional roles.",
  },
];

export default function GermanOverviewPage() {
  return (
    <main className={`w-full overflow-x-hidden bg-[#FCF9EA] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 ${josefin.className}`}>
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px] flex flex-col items-center justify-center overflow-hidden py-14 sm:py-16 md:py-20 text-white text-center bg-zinc-950">
        <Image
          src="/Hero/hero3.jpg"
          alt="German Courses - Gyanshala Foreign Language Academy"
          fill
          priority
          className="object-cover object-center z-0 brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-[0.06em] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              GERMAN COURSES
            </h1>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-[22px] text-white font-medium italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
              Comprehensive CEFR-Aligned Training from A1 to C2 Levels
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* =========================================================================
          MAIN GERMAN COURSES SECTION
          ========================================================================= */}
      <section id="german-courses" className="relative py-14 sm:py-20 bg-[#FCF9EA] dark:bg-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800 overflow-hidden">
        {/* White Paper Background Texture */}
        <div className="absolute inset-0 z-0 opacity-60 dark:opacity-25 pointer-events-none">
          <Image
            src="/whitepaper.jpg"
            alt="Paper background texture"
            fill
            className="object-cover object-center contrast-[1.12] brightness-[0.96]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <FadeInUp className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
              LANGUAGE TRAINING
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
              German Courses
            </h2>
          </FadeInUp>

          {/* Course Cards Grid (Exact Homepage Style with Green BG) */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" staggerDelay={0.07}>
            {coursesData.map((course) => (
              <StaggerItem key={course.id} className="h-full">
                <Link
                  href={`/german/${course.id}`}
                  className="group flex flex-col h-full bg-[#FFFAF3] dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  {/* Top Image Area with Level Badge and Green BG */}
                  <div className="relative w-full aspect-[16/10] sm:aspect-[3/2] flex items-center justify-center overflow-hidden select-none">
                    <Image
                      src="/greenbg.jpg"
                      alt={course.badge}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 380px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors pointer-events-none" />
                    <span className="relative z-10 text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.65)]">
                      {course.badge}
                    </span>
                  </div>

                  {/* Bottom Area with Course Name */}
                  <div className="p-3 sm:p-4 bg-[#FFFAF3] dark:bg-zinc-900 group-hover:bg-[#FCF9EA] dark:group-hover:bg-zinc-800/80 text-left transition-colors border-t border-zinc-200/60 dark:border-zinc-800">
                    <p className="font-semibold text-xs sm:text-sm lg:text-base text-black dark:text-white leading-snug whitespace-nowrap">
                      {course.name}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* =========================================================================
          CEFR LEVELS FRAMEWORK OVERVIEW
          ========================================================================= */}
      <section className="relative py-14 sm:py-20 bg-[#F5EFE3] dark:bg-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800 overflow-hidden">
        {/* White Paper Background Texture */}
        <div className="absolute inset-0 z-0 opacity-60 dark:opacity-25 pointer-events-none">
          <Image
            src="/whitepaper.jpg"
            alt="Paper background texture"
            fill
            className="object-cover object-center contrast-[1.12] brightness-[0.96]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
              CURRICULUM STRUCTURE
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
              CEFR Levels & Learning Objectives
            </h2>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.08}>
            {cefrHighlights.map((tier) => (
              <StaggerItem key={tier.level} className="h-full">
                <div className="h-full bg-[#FFFAF3] dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-md p-6 sm:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white bg-[#BC0202] rounded-none">
                      {tier.level}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                      {tier.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed italic">
                      {tier.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <p className="text-xs sm:text-sm font-semibold text-[#BC0202]">
                      🎯 {tier.target}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA (SAME DESIGN AS ABOUT US)
          ========================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 text-white overflow-hidden bg-zinc-950">
        {/* Background Image: Germany.jpg with 100% Appearance */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Germany.jpg"
            alt="German Language Training"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <FadeInUp className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            Start Your German Learning Journey Today
          </h2>

          <p
            className="text-base sm:text-lg lg:text-[21px] text-white max-w-2xl mx-auto leading-[1.55] italic font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            style={{
              fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
              letterSpacing: '0em',
            }}
          >
            Join interactive batches led by certified trainers. Comprehensive preparation for Goethe-Zertifikat, telc, and ÖSD examinations.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-bold text-white bg-[#BC0202] hover:bg-[#990202] shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book a Free Demo
            </Link>
          </div>
        </FadeInUp>
      </section>
    </main>
  );
}
