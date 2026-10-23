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
      <section className="relative min-h-[300px] sm:min-h-[360px] md:min-h-[420px] flex flex-col items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-24 text-white text-center bg-zinc-950">
        {/* Background Image */}
        <Image
          src={image}
          alt={`${title} - Gyanshala Foreign Language Academy`}
          fill
          priority
          className="object-cover object-center z-0"
        />
        {/* Dark Contrast Overlay */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/55 z-[1]" />

        {/* Centered Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-white/95 font-medium tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] max-w-2xl mx-auto">
              {subtitle}
            </p>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
