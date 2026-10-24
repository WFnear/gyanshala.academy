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
  title: "Germany Pathways | Gyanshala Foreign Language Academy",
  description:
    "Explore pathways for higher education, vocational training (Ausbildung), and nursing careers in Germany with Gyanshala Academy Jaipur.",
};

const pathwaysData = [
  {
    title: "Study In Germany",
    description:
      "Pursue a Bachelor's or Master's degree at a German university. Get guidance on course selection, admission requirements, APS certification, and student visa preparation.",
    target: "For students planning to pursue higher education in Germany.",
    cta: "Explore Study Options →",
    href: "/pathways/study-in-germany",
    image: "/Pathways/studyingermany.png",
  },
  {
    title: "Ausbildung in Germany",
    description:
      "Learn a profession through practical workplace training and classroom education. Many dual training programmes offer a monthly allowance while you develop skills for a career in Germany.",
    target: "For students who want professional training and practical work experience.",
    cta: "Explore Ausbildung →",
    href: "/pathways/ausbildung",
    image: "/Pathways/ausbildung.png",
  },
  {
    title: "Nursing in Germany",
    description:
      "Explore nursing employment opportunities in Germany if you have a GNM, BSc Nursing, or another relevant nursing qualification. Understand qualification recognition, German language requirements, and the steps towards professional registration.",
    target: "For qualified nurses looking to build their careers in Germany.",
    cta: "Explore Nursing Careers →",
    href: "/pathways/nursing-in-germany",
    image: "/Pathways/nursingcareer.png",
  },
];

const pathwayFeatures = [
  {
    title: "Tuition-Free Education",
    desc: "Access world-class public universities across Germany with zero tuition fees for undergraduate and postgraduate degrees.",
    icon: (
      <svg className="w-8 h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Paid Dual Ausbildung",
    desc: "Earn a monthly stipend between €900 and €1,400 while completing recognized vocational training and gaining real work experience.",
    icon: (
      <svg className="w-8 h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
  },
  {
    title: "Direct Nursing Careers",
    desc: "Qualified Indian nurses (BSc / GNM) can enter hospital jobs with guided B1/B2 training, qualification recognition, and visa support.",
    icon: (
      <svg className="w-8 h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "PR & Settlement Path",
    desc: "Germany's Opportunity Card and skilled immigration laws provide clear, transparent pathways to permanent residency and global citizenship.",
    icon: (
      <svg className="w-8 h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function PathwaysIndexPage() {
  return (
    <main className={`w-full overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 ${josefin.className}`}>
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px] flex flex-col items-center justify-center overflow-hidden py-14 sm:py-16 md:py-20 text-white text-center bg-zinc-950">
        <Image
          src="/Hero/hero3.jpg"
          alt="Germany Pathways - Gyanshala Foreign Language Academy"
          fill
          priority
          className="object-cover object-center z-0 brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-[0.06em] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              GERMANY PATHWAYS
            </h1>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-[22px] text-white font-medium italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
              Study, Ausbildung & Professional Career Opportunities in Germany
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* =========================================================================
          MAIN GERMANY PATHWAYS SECTION (HOMEPAGE SECTION STYLE)
          ========================================================================= */}
      <section id="pathways" className="relative py-14 sm:py-20 lg:py-24 bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800 overflow-hidden">
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
              GLOBAL OPPORTUNITIES
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
              Germany Pathways
            </h2>
          </FadeInUp>

          {/* 3 Pathway Cards Grid (Exact Homepage Style) */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.08}>
            {pathwaysData.map((pathway) => (
              <StaggerItem key={pathway.title} className="h-full">
                <Link
                  href={pathway.href}
                  className="group flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden rounded-none"
                >
                  {/* Image Banner */}
                  <div className="relative aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                    <Image
                      src={pathway.image}
                      alt={pathway.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    />
                  </div>

                  {/* Red Title Banner */}
                  <div className="bg-[#AC2424] py-3 sm:py-3.5 px-4 text-center">
                    <h3
                      className="text-2xl sm:text-3xl lg:text-[28px] font-bold italic text-white tracking-normal leading-tight"
                      style={{ fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif' }}
                    >
                      {pathway.title}
                    </h3>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white dark:bg-zinc-900">
                    <div className="space-y-3">
                      <p
                        className="text-base sm:text-lg lg:text-[18px] leading-[1.45] text-zinc-950 dark:text-zinc-100 font-medium italic"
                        style={{ fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif' }}
                      >
                        {pathway.description}
                      </p>
                      <p
                        className="text-base sm:text-lg lg:text-[18px] leading-[1.45] text-zinc-950 dark:text-zinc-100 font-medium italic"
                        style={{ fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif' }}
                      >
                        {pathway.target}
                      </p>
                    </div>

                    {/* Yellow Button */}
                    <div className="mt-6 pt-2">
                      <span
                        className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-none bg-[#FBAE17] group-hover:bg-[#e09c12] text-white text-base sm:text-lg font-bold italic shadow-sm transition-colors"
                        style={{ fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif' }}
                      >
                        {pathway.cta}
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* =========================================================================
          KEY ADVANTAGES OF CHOOSING GERMANY
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
              WHY GERMANY?
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
              Key Advantages for Indian Aspirants
            </h2>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" staggerDelay={0.06}>
            {pathwayFeatures.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-center gap-3.5 sm:gap-4 p-2 bg-transparent">
                  <div className="text-[#C00000] shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-zinc-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
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
            alt="Germany Pathways"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <FadeInUp className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            Ready to Start Your Journey to Germany?
          </h2>

          <p
            className="text-base sm:text-lg lg:text-[21px] text-white max-w-2xl mx-auto leading-[1.55] italic font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            style={{
              fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
              letterSpacing: '0em',
            }}
          >
            Get personalized counseling from our experts on admissions, language requirements, APS certification, and visas.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-bold text-[#BC0202] bg-white hover:bg-zinc-100 shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Free Counseling
            </Link>
          </div>
        </FadeInUp>
      </section>
    </main>
  );
}
