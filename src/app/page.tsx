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
                          className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-1.5 sm:py-2.5 rounded-full bg-[#ECBB0C] hover:bg-[#d9ab0b] text-white text-[11px] sm:text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
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



      </section>

      {/* About Us Gyanshala Section */}
      <section id="about" className="relative py-14 sm:py-20 lg:py-24 overflow-hidden border-b border-zinc-100 dark:border-zinc-800">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/Hero/GermanHero1.jpg"
            alt="About Gyanshala Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/85 dark:bg-zinc-950/85 backdrop-blur-[1px]" />
        </div>

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
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-3 pt-4 sm:pt-5" staggerDelay={0.08}>
                <StaggerItem>
                  <div className="flex items-center gap-2.5 py-1 sm:py-1.5">
                    <div className="w-12 h-12 sm:w-11 sm:h-11 flex items-center justify-center shrink-0">
                      <Image
                        src="/Icons/01_german_courses_A1-C2-removebg-preview.png"
                        alt="German Courses A1–C2"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-base sm:text-xs md:text-sm font-bold sm:font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                      German Courses — A1–C2
                    </span>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-center gap-2.5 py-1 sm:py-1.5">
                    <div className="w-12 h-12 sm:w-11 sm:h-11 flex items-center justify-center shrink-0">
                      <Image
                        src="/Icons/02_experienced_trainers-removebg-preview.png"
                        alt="Experienced Trainers"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-base sm:text-xs md:text-sm font-bold sm:font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                      Experienced Trainers
                    </span>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-center gap-2.5 py-1 sm:py-1.5">
                    <div className="w-12 h-12 sm:w-11 sm:h-11 flex items-center justify-center shrink-0">
                      <Image
                        src="/Icons/03_global_opportunities-removebg-preview.png"
                        alt="Guidance for Global Opportunities"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-base sm:text-xs md:text-sm font-bold sm:font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                      Guidance for Global Opportunities
                    </span>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              {/* CTA Button: View More */}
              <div className="pt-6 sm:pt-8">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#ECBB0C] hover:bg-[#d9ab0b] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
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
              <div className="w-full max-w-[500px] aspect-[4/3] overflow-hidden relative shadow-md">
                <Image
                  src="/Aboutus.jpg"
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
      <section id="german-courses" className="relative py-12 sm:py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/germancourses/bgcolor.jpg"
            alt="German Courses Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <FadeInUp className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              German Courses
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/90">
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


