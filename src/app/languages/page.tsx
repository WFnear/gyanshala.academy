import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "All Languages | Gyanshala Foreign Language Academy",
  description: "Learn German, French, Spanish, and English with certified language experts at Gyanshala Academy Jaipur.",
};

const languagesData = [
  {
    name: "German",
    image: "/Flag/german.jpg",
    href: "/german",
  },
  {
    name: "French",
    image: "/Flag/french.jpg",
    href: "/languages/french",
  },
  {
    name: "Spanish",
    image: "/Flag/spain.jpg",
    href: "/languages/spanish",
  },
  {
    name: "English",
    image: "/Flag/english.jpg",
    href: "/languages/english",
  },
];

export default function AllLanguagesPage() {
  return (
    <main className={`w-full overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 ${josefin.className}`}>
      {/* =========================================================================
          HERO SECTION (SAME DESIGN & HEIGHT AS ABOUT US)
          ========================================================================= */}
      <section className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px] flex flex-col items-center justify-center overflow-hidden py-14 sm:py-16 md:py-20 text-white text-center bg-zinc-950">
        <Image
          src="/Hero/hero3.jpg"
          alt="All Languages - Gyanshala Foreign Language Academy"
          fill
          priority
          className="object-cover object-center z-0 brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-[0.06em] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              ALL LANGUAGES
            </h1>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-[22px] text-white font-medium italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
              Master Global Languages with Certified Faculty & Interactive Methodology
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* =========================================================================
          MAIN GLOBAL LANGUAGES SECTION (HOMEPAGE SECTION STYLE)
          ========================================================================= */}
      <section id="languages" className="relative py-14 sm:py-20 lg:py-24 bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800 overflow-hidden">
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
              LEARN BEYOND GERMAN
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
              Master Global Languages
            </h2>
          </FadeInUp>

          {/* Language Cards Grid (Flag Image & Language Name Only) */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" staggerDelay={0.07}>
            {languagesData.map((lang) => (
              <StaggerItem key={lang.name} className="h-full">
                <Link
                  href={lang.href}
                  className="group flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  {/* Flag Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={lang.image}
                      alt={`${lang.name} Language - Gyanshala Foreign Language Academy`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Language Name Only */}
                  <div className="p-3.5 sm:p-4 bg-white dark:bg-zinc-900 group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800/80 text-center transition-colors border-t border-zinc-100 dark:border-zinc-800">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-zinc-900 dark:text-white tracking-wide">
                      {lang.name}
                    </h3>
                  </div>
                </Link>
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
            alt="Language Training"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <FadeInUp className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            Start Your Language Learning Journey Today
          </h2>

          <p
            className="text-base sm:text-lg lg:text-[21px] text-white max-w-2xl mx-auto leading-[1.55] italic font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            style={{
              fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
              letterSpacing: '0em',
            }}
          >
            Learn German, French, Spanish, or English with certified native & expert trainers at Gyanshala Academy.
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
