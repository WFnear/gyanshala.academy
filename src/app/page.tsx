"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

interface Slide {
  id: number;
  image: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primaryBtn: { text: string; href: string };
  secondaryBtn: { text: string; href: string };
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/Hero/IMG_20250806_170204918_HDR.jpg",
    badge: "🇩🇪 Premier German Institute in Jaipur",
    title: "Master German Language",
    highlight: "From A1 to C2 Levels",
    description: "Learn with native-standard curriculum, certified faculty, and interactive batches tailored for Goethe, TELC and ÖSD examinations.",
    primaryBtn: { text: "German Courses", href: "/german/a1" },
    secondaryBtn: { text: "Enquiry Now", href: "/enquiry" },
  },
  {
    id: 2,
    image: "/Hero/IMG_20250806_121152807_HDR.jpg",
    badge: "🎓 Study & Careers in Germany",
    title: "Your Journey to Germany",
    highlight: "Starts Here",
    description: "Improve your German and explore pathways to study, pursue Ausbildung, and build your career in Germany.",
    primaryBtn: { text: "Explore Germany Pathways", href: "/pathways/study-in-germany" },
    secondaryBtn: { text: "Free Counseling", href: "/enquiry" },
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  // Handle touch swipe / scroll
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      // Swiped left -> next slide
      nextSlide();
    } else if (distance < -50) {
      // Swiped right -> prev slide
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };


  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full aspect-[16/10] sm:aspect-[16/8] lg:aspect-auto lg:h-[660px] min-h-[260px] max-h-[520px] lg:max-h-none overflow-hidden select-none bg-zinc-950"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides Container (Zero Horizontal Overflow) */}
        <div className="relative w-full h-full overflow-hidden">
          {slides.map((slide, index) => {
            const isActive = index === current;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out ${isActive
                  ? "opacity-100 translate-x-0 z-10 pointer-events-auto"
                  : index < current
                    ? "opacity-0 -translate-x-full z-0 pointer-events-none"
                    : "opacity-0 translate-x-full z-0 pointer-events-none"
                  }`}
              >
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                />

                {/* Gradient Overlay for centered contrast */}
                <div className="absolute inset-0 bg-black/55 sm:bg-black/45" />

                {/* Slide Content (Centered & Mobile Responsive) */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex flex-col items-center justify-center text-center">
                  <div className="max-w-4xl lg:max-w-5xl text-white space-y-2 sm:space-y-3 lg:space-y-4">
                    {/* Heading */}
                    <h1
                      className={`text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-balance leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] transition-all duration-700 ease-out ${isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                        }`}
                      style={{ transitionDelay: isActive ? "150ms" : "0ms" }}
                    >
                      {slide.title} {slide.highlight}
                    </h1>

                    {/* Description */}
                    <p
                      className={`text-xs sm:text-sm md:text-base lg:text-lg text-white/90 font-normal leading-relaxed text-balance max-w-3xl mx-auto drop-shadow-sm transition-all duration-700 ease-out ${isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                        }`}
                      style={{ transitionDelay: isActive ? "300ms" : "0ms" }}
                    >
                      {slide.description}
                    </p>

                    {/* CTA Action Button */}
                    {slide.primaryBtn && (
                      <div
                        className={`pt-1 sm:pt-2 transition-all duration-700 ease-out ${isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                          }`}
                        style={{ transitionDelay: isActive ? "450ms" : "0ms" }}
                      >
                        <Link
                          href={slide.primaryBtn.href}
                          className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-1.5 sm:py-2.5 rounded-full bg-[#BC0202] hover:bg-[#990000] text-white text-[11px] sm:text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
                        >
                          <span>{slide.primaryBtn.text}</span>
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Previous Button (No Background) */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="cursor-pointer absolute left-1 sm:left-3 lg:left-5 top-1/2 -translate-y-1/2 z-20 text-white/85 hover:text-white transition-all hover:scale-115 active:scale-95 p-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Next Button (No Background) */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="cursor-pointer absolute right-1 sm:right-3 lg:right-5 top-1/2 -translate-y-1/2 z-20 text-white/85 hover:text-white transition-all hover:scale-115 active:scale-95 p-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Floating Indicator Dots */}
        <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 sm:gap-2 bg-black/45 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-xl">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`cursor-pointer rounded-full transition-all duration-300 ${current === index
                  ? "w-4 sm:w-6 h-1.5 sm:h-2 bg-[#ECBB0C] shadow-sm"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/70 hover:bg-white"
                }`}
            />
          ))}
        </div>

        {/* Torn Paper / Ragged Edge Effect (Replaces flat straight cut) */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none pointer-events-none z-20">
          <svg
            viewBox="0 0 1200 24"
            preserveAspectRatio="none"
            className="w-full h-3 sm:h-5 text-white dark:text-zinc-950 fill-current drop-shadow-[0_-3px_4px_rgba(0,0,0,0.18)]"
          >
            <path d="M0,24 L1200,24 L1200,18 L1190,10 L1182,17 L1175,5 L1168,13 L1160,16 L1152,8 L1145,15 L1138,3 L1130,12 L1122,16 L1115,7 L1108,14 L1100,2 L1092,11 L1085,17 L1078,8 L1070,15 L1062,4 L1055,12 L1048,17 L1040,6 L1032,14 L1025,1 L1018,10 L1010,16 L1002,7 L995,14 L988,2 L980,11 L972,16 L965,5 L958,13 L950,1 L942,10 L935,17 L928,6 L920,14 L912,3 L905,12 L898,17 L890,7 L882,14 L875,0 L868,11 L860,16 L852,6 L845,14 L838,2 L830,11 L822,17 L815,5 L808,13 L800,1 L792,10 L785,16 L778,7 L770,14 L762,2 L755,12 L748,17 L740,6 L732,14 L725,1 L718,11 L710,16 L702,7 L695,14 L688,3 L680,12 L672,17 L665,5 L658,13 L650,0 L642,10 L635,16 L628,6 L620,14 L612,2 L605,11 L598,17 L590,7 L582,14 L575,1 L568,11 L560,16 L552,5 L545,13 L538,2 L530,12 L522,17 L515,6 L508,14 L500,0 L492,10 L485,16 L478,7 L470,14 L462,3 L455,12 L448,17 L440,5 L432,13 L425,1 L418,11 L410,16 L402,6 L395,14 L388,2 L380,12 L372,17 L365,5 L358,13 L350,0 L342,10 L335,16 L328,7 L320,14 L312,2 L305,11 L298,17 L290,6 L282,14 L275,1 L268,11 L260,16 L252,5 L245,13 L238,3 L230,12 L222,17 L215,6 L208,14 L200,0 L192,10 L185,16 L178,7 L170,14 L162,2 L155,12 L148,17 L140,5 L132,13 L125,1 L118,11 L110,16 L102,6 L95,14 L88,3 L80,12 L72,17 L65,5 L58,13 L50,0 L42,10 L35,16 L28,6 L20,14 L12,2 L5,12 L0,17 Z" />
          </svg>
        </div>

      </section>

      {/* About Us Gyanshala Section */}
      <section id="about" className="relative py-14 sm:py-20 lg:py-24 bg-white dark:bg-zinc-950 overflow-hidden border-b border-zinc-100 dark:border-zinc-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              {/* Small Label */}
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#BC0202] mb-2 sm:mb-3">
                ABOUT GYANSHALA
              </p>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
                Your Trusted Partner in German Language Learning
              </h2>

              {/* Description */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Gyanshala Foreign Language Academy was established in 2018 with a vision to help learners build strong German language skills and explore global opportunities. With structured courses, experienced trainers, and personalised guidance, we support students at every step of their German learning journey.
              </p>

              {/* 3 Compact Highlights with Dedicated Icons */}
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5" staggerDelay={0.08}>
                <StaggerItem>
                  <div className="flex items-center gap-3 py-1.5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shrink-0">
                      <Image
                        src="/Icons/01_german_courses_A1-C2.png"
                        alt="German Courses A1–C2"
                        width={44}
                        height={44}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
                      German Courses — A1–C2
                    </span>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-center gap-3 py-1.5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shrink-0">
                      <Image
                        src="/Icons/02_experienced_trainers.png"
                        alt="Experienced Trainers"
                        width={44}
                        height={44}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
                      Experienced Trainers
                    </span>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-center gap-3 py-1.5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shrink-0">
                      <Image
                        src="/Icons/03_global_opportunities.png"
                        alt="Guidance for Global Opportunities"
                        width={44}
                        height={44}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
                      Guidance for Global Opportunities
                    </span>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              {/* CTA Button: View More */}
              <div className="pt-6 sm:pt-8">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#BC0202] hover:bg-[#990000] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>View More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Right Column: About Us Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="lg:col-span-5 relative mt-6 lg:mt-0 flex items-center justify-center"
            >
              <div className="w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden relative shadow-md">
                <Image
                  src="/homepage/About/Aboutus.png"
                  alt="Gyanshala Academy - Collaborative Study Session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* German Courses Section */}
      <section id="german-courses" className="py-12 sm:py-16 bg-zinc-50/60 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <FadeInUp className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              German Courses
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Comprehensive CEFR-aligned training from A1 to C2 levels.
            </p>
          </FadeInUp>

          {/* Course Cards Grid */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" staggerDelay={0.07}>
            {[
              { id: "a1", badge: "A1 Level", name: "A1 – Beginner Level" },
              { id: "a2", badge: "A2 Level", name: "A2 – Elementary Level" },
              { id: "b1", badge: "B1 Level", name: "B1 – Intermediate Level" },
              { id: "b2", badge: "B2 Level", name: "B2 – Upper-Intermediate Level" },
              { id: "c1", badge: "C1 Level", name: "C1 – Advanced Level" },
              { id: "c2", badge: "C2 Level", name: "C2 – Proficiency Level" },
            ].map((course) => (
              <StaggerItem key={course.id} className="h-full">
                <Link
                  href={`/german/${course.id}`}
                  className="group flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  {/* Top Marble Area with Level Badge */}
                  <div
                    className="relative w-full aspect-[16/10] sm:aspect-[3/2] flex items-center justify-center overflow-hidden select-none"
                    style={{
                      background:
                        "radial-gradient(circle at 35% 30%, #fbf3ea 0%, #ecd4be 42%, #e0bd9c 75%, #cfab84 100%)",
                    }}
                  >
                    {/* Subtle marble texture veins */}
                    <div
                      className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(circle at 18% 25%, rgba(255,255,255,0.7) 0%, transparent 45%),
                                          radial-gradient(circle at 82% 75%, rgba(168,118,74,0.35) 0%, transparent 55%),
                                          radial-gradient(circle at 50% 85%, rgba(200,150,110,0.4) 0%, transparent 40%)`,
                      }}
                    />
                    <span className="relative z-10 text-2xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.32)]">
                      {course.badge}
                    </span>
                  </div>

                  {/* Bottom Red Area with Course Name */}
                  <div className="p-3 sm:p-4 bg-[#BC0202] group-hover:bg-[#9e0202] text-left transition-colors">
                    <p className="font-semibold text-xs sm:text-sm lg:text-base text-white leading-snug whitespace-nowrap">
                      {course.name}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

    </main>
  );
}


