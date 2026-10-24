"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Josefin_Sans } from "next/font/google";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-josefin",
});

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
    primaryBtn: { text: "German Courses", href: "/german" },
    secondaryBtn: { text: "Enquiry Now", href: "/enquiry" },
  },
  {
    id: 2,
    image: "/Hero/IMG_20250806_121152807_HDR.jpg",
    badge: "🇩🇪 Study • Ausbildung • Careers in Germany",
    title: "Study, Ausbildung & Careers",
    highlight: "in Germany",
    description: "Master German to unlock tuition-free university education, paid dual Ausbildung with monthly stipends, and high-demand nursing & engineering careers.",
    primaryBtn: { text: "Explore Germany Pathways", href: "/pathways" },
    secondaryBtn: { text: "Free Counseling", href: "/enquiry" },
  },
  {
    id: 3,
    image: "/Hero/hero3x.jpg",
    badge: "🌍 Global Language Programs",
    title: "Learn Beyond German",
    highlight: "Master Global Languages",
    description: "",
    primaryBtn: { text: "View All Languages", href: "/languages" },
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

      {/* About Us Gyanshala Section - Matching About Us Page Typography & Design */}
      <section id="about" className={`relative py-14 sm:py-20 lg:py-24 bg-white dark:bg-zinc-950 overflow-hidden border-b border-zinc-100 dark:border-zinc-800 ${josefin.className}`}>
        {/* White Paper Background Texture with 70% Opacity */}
        <div className="absolute inset-0 z-0 opacity-70 dark:opacity-30 pointer-events-none">
          <Image
            src="/whitepaper.jpg"
            alt="Paper background texture"
            fill
            className="object-cover object-center contrast-[1.12] brightness-[0.96]"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Text Content matching About Us page */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                OUR STORY
              </h3>

              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight mb-4">
                Our Journey Since 2018
              </h2>

              <div
                className="space-y-4 text-zinc-900 dark:text-zinc-100 text-base sm:text-lg lg:text-[21px] xl:text-[22px] leading-[1.55] italic font-medium tracking-normal"
                style={{
                  fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                  letterSpacing: '0em',
                }}
              >
                <p>
                  Gyanshala – Foreign Language Academy was established in 2018 as an initiative to support students in their learning journey, provide a global platform, and help them achieve their academic goals.
                </p>

                <p>
                  Gyanshala works to connect learners with international educational opportunities and offers language learning, consultation, and student guidance services. The academy aims to help students choose programmes suited to their interests and career goals, while encouraging them to become confident global citizens rooted in their traditions and ready to face the world.
                </p>
              </div>

              {/* View More Button */}
              <div className="mt-6 sm:mt-8">
                <Link
                  href="/about-us"
                  className="inline-flex items-center justify-center px-8 sm:px-10 py-3 rounded-xl text-base font-bold text-white bg-[#C00000] hover:bg-[#a00000] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  View More →
                </Link>
              </div>
            </motion.div>

            {/* Right Column: About Us Image with No Radius */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-none overflow-hidden shadow-lg border border-zinc-200/60 dark:border-zinc-800">
                <Image
                  src="/aboutus.png"
                  alt="Gyanshala Foreign Language Academy - Your Trusted Partner in German Language Training"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* German Courses Section */}
      <section id="german-courses" className={`relative py-12 sm:py-16 overflow-hidden ${josefin.className}`}>
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
          <FadeInUp className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#ECBB0C] leading-none mb-1">
              LANGUAGE TRAINING
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-normal leading-tight">
              German Courses
            </h2>
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
                  {/* Top Image Area with Level Badge */}
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
                  <div className="p-3 sm:p-4 bg-white dark:bg-zinc-900 group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800/80 text-left transition-colors border-t border-zinc-100 dark:border-zinc-800">
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

      {/* Germany Pathways Section */}
      <section id="pathways" className={`relative py-14 sm:py-20 lg:py-24 bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800 overflow-hidden ${josefin.className}`}>
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
              GLOBAL OPPORTUNITIES
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
              Germany Pathways
            </h2>
          </FadeInUp>

          {/* 3 Pathway Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.08}>
            {[
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
            ].map((pathway) => (
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

      {/* Experienced Educators / Meet Our Team Section */}
      <section id="team" className={`py-14 sm:py-20 lg:py-24 bg-zinc-50/60 dark:bg-zinc-900/30 border-b border-zinc-100 dark:border-zinc-800 ${josefin.className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeInUp className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
              EXPERIENCED EDUCATORS
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
              Meet Our Team
            </h2>
          </FadeInUp>

          {/* Responsive Team Grid: 4 columns desktop, 2 columns mobile & tablet */}
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6" staggerDelay={0.06}>
            {[
              {
                name: "Dilip Sinsinwar",
                image: "/members/DILIP.SINSINWAR..jpeg",
              },
              {
                name: "Claudia Zibell",
                image: "/members/Claudia.Zibell.jpeg",
              },
              {
                name: "Ashveer Singh",
                image: "/members/ASHVEER.SINGH.jpeg",
              },
              {
                name: "Ruchi Kaushik",
                image: "/members/RUCHI.KAUSHIK.jpeg",
              },
              {
                name: "Jhanvi Kumawat",
                image: "/members/Jhanvi.kumawat.jpeg",
              },
              {
                name: "Katrina",
                image: "/members/KATRINA.jpeg",
              },
              {
                name: "Mumal Rathore",
                image: "/members/Mumal.Rathore.jpeg",
              },
              {
                name: "Neeru Joshi",
                image: "/members/Neeru.Joshi.jpeg",
              },
              {
                name: "Niharika",
                image: "/members/NIHARIKA..jpeg",
              },
            ].map((member) => (
              <StaggerItem key={member.name} className="h-full">
                <div className="h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all group">
                  {/* Faculty Photo */}
                  <div className="relative aspect-[4/5] bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Faculty Name */}
                  <div className="p-2.5 sm:p-3.5 md:p-4 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 text-center">
                    <h3 className="text-xs sm:text-base lg:text-lg font-bold text-zinc-900 dark:text-white tracking-tight leading-snug text-center">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <FAQSection isHomepage={true} limit={8} />

    </main>
  );
}


