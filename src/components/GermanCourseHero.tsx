"use client";

import Image from "next/image";
import { FadeInUp } from "@/components/ScrollReveal";

interface GermanCourseHeroProps {
  title: string;
  subtitle: string;
  image?: string;
}

export default function GermanCourseHero({
  title,
  subtitle,
  image = "/Hero/IMG_20250806_134431127_HDR.jpg",
}: GermanCourseHeroProps) {
  return (
    <main className="w-full overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      {/* =========================================================================
          HERO SECTION (SAME DESIGN AS ABOUT US)
          ========================================================================= */}
      <section className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px] flex flex-col items-center justify-center overflow-hidden py-14 sm:py-16 md:py-20 text-white text-center bg-zinc-950">
        {/* Background Image */}
        <Image
          src={image}
          alt={`${title} - Gyanshala Foreign Language Academy`}
          fill
          priority
          className="object-cover object-center z-0 brightness-[0.92]"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-[1]" />

        {/* Centered Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-[0.06em] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-[22px] text-white font-medium italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
              {subtitle}
            </p>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
