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

const externalResources = [
  {
    name: "DAAD",
    url: "https://www.daad.de/en/",
    icon: "/partners/daad.png",
  },
  {
    name: "German Radio",
    url: "https://www.deutschland.fm/",
    icon: "/partners/german-radio.png",
  },
  {
    name: "Goethe-Institut",
    url: "https://www.goethe.de/ins/in/en/sta/del.html",
    icon: "/partners/goethe.png",
  },
  {
    name: "telc Exam",
    url: "https://deutsch-pruefung.de/",
    icon: "/partners/telc.png",
  },
  {
    name: "Deutsche Welle (DW)",
    url: "https://www.dw.com/",
    icon: "/partners/dw.png",
  },
  {
    name: "Germany in India",
    url: "https://india.diplo.de/",
    icon: "/partners/germany-in-india.png",
  },
  {
    name: "Make it in Germany",
    url: "https://www.make-it-in-germany.com/en/",
    icon: "/partners/make-it-in-germany.png",
  },
];

const whyChoosePoints = [
  {
    number: "01",
    title: "Experienced German Language Trainers",
    description: "Learn from qualified and dedicated German language experts.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "German Courses from A1 to C2",
    description: "Progress step by step from beginner to advanced proficiency.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Spoken German & Exam Preparation",
    description: "Develop practical communication skills and prepare for recognised examinations.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v5.018z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Flexible Batch Timings",
    description: "Choose a batch that fits your daily schedule.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Affordable German Classes in Jaipur",
    description: "Quality German language training at reasonable fees.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 0a1.5 1.5 0 00-1.5 1.5v8.25a1.5 1.5 0 001.5 1.5m16.5-11.25a1.5 1.5 0 011.5 1.5v8.25a1.5 1.5 0 01-1.5 1.5m-16.5 0h16.5m-18 3h19.5a.75.75 0 00.75-.75v-.75H1.5v.75a.75.75 0 00.75.75z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Online and Offline Classes",
    description: "Learn through online sessions or in-person classroom training.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
];

const highlights = [
  {
    title: "Exceptional Study Material",
    description: "Diverse study material to our students for a world class language knowledge.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#F59E0B] fill-current" viewBox="0 0 24 24">
        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v7l2-1.5 2 1.5V4h7v16z" />
      </svg>
    ),
  },
  {
    title: "Certified Language Trainer",
    description: "Empowering you to achieve fluency and confidence in your chosen language.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#F59E0B] fill-current" viewBox="0 0 24 24">
        <path d="M20.5 9.5l.9-2.2-2.2-.9.2-2.4-2.4-.2-.9-2.2-2.2.9-1.9-1.5-1.9 1.5-2.2-.9-.9 2.2-2.4.2.2 2.4-2.2.9.9 2.2-1.5 1.9 1.5 1.9-.9 2.2 2.2.9-.2 2.4 2.4.2.9 2.2 2.2-.9 1.9 1.5 1.9-1.5 2.2.9.9-2.2 2.4-.2-.2-2.4 2.2-.9-.9-2.2 1.5-1.9z" />
      </svg>
    ),
  },
  {
    title: "Study Abroad Counselling",
    description: "Expert study abroad counseling to guide your journey toward global education opportunities.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#F59E0B] fill-current" viewBox="0 0 24 24">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 8.55L4.47 9 12 4.91 19.53 9 12 11.55zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
      </svg>
    ),
  },
  {
    title: "Flexible Hours",
    description: "Learn from your comfort zone with multiple batch timing options.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#F59E0B] fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5l-4.2-2.5.7-1.2 3.5 2.1V7h1.5v9.5z" />
      </svg>
    ),
  },
  {
    title: "Smart Classrooms",
    description: "Study with interactive digital setups and advanced modern learning facilities.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#F59E0B] fill-current" viewBox="0 0 24 24">
        <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-9-9l-4 3 4 3V8z" />
      </svg>
    ),
  },
  {
    title: "Ausbildung in Germany",
    description: "Complete pathway guidance for vocational training and career opportunities in Germany.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#F59E0B] fill-current" viewBox="0 0 24 24">
        <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 12c-4.42 0-8 2.24-8 5v2h16v-2c0-2.76-3.58-5-8-5zm1-3.5h-2l-1 4 2 3 2-3-1-4z" />
      </svg>
    ),
  },
];

interface OnlineVideo {
  id: string;
  youtubeId: string;
  playlistId?: string;
  title: string;
  trainer: string;
  level: string;
  duration: string;
  isPlaylist?: boolean;
}

const onlineVideos: OnlineVideo[] = [
  {
    id: "video-1",
    youtubeId: "UfaGlQcIKvE",
    title: "Nursing Jobs in Germany - Complete Process for Indian Nurses",
    trainer: "Gyanshala Germany Pathway Experts",
    level: "Nursing in Germany",
    duration: "Full Guide",
  },
  {
    id: "video-2",
    youtubeId: "M5B2xEpXJGI",
    title: "Ausbildung in Germany - Vocational Training & Career Guide for Indian Students",
    trainer: "Gyanshala Germany Pathway Experts",
    level: "Ausbildung in Germany",
    duration: "Full Guide",
  },
  {
    id: "video-3",
    youtubeId: "IhXq68yXfu0",
    playlistId: "PLIzfqeLAM3cSNdu9yssdtxrPu-ZsMFCzA",
    title: "A1 German Language Grammar Topics - Complete Series",
    trainer: "Dilip Sinsinwar | German Language Trainer",
    level: "A1 Grammar Series",
    duration: "Full Playlist",
    isPlaylist: true,
  },
];

const studentReviews = [
  {
    name: "Karan Pareek",
    image: "/Review/KaranPareek.jpeg",
    rating: 5,
    review:
      "I had a wonderful experience learning German at “Gyanshala Foreign Language Academy”. The classes were well-structured, engaging, and easy to understand. Special thanks to Dillip Sir for his guidance, patience, and constant support. I truly appreciate his efforts and highly recommend this institute to anyone learning German.",
  },
  {
    name: "Anjali Choudhary",
    image: "/Review/Anjali.Choudhary.jpeg",
    rating: 5,
    review:
      "Seit einem Jahr lerne ich Deutsch und glücklicherweise habe ich meine B1 Prüfung bestanden🏆🏆 . Zurzeit lerne ich B2 Kurs...Ich sammle hier viele Erfahrungen und das Umfeld des Unterrichts ist auch aüßerst einwandfrei und die Lehrer sind auch sehr hilfreich und unterstüztend uns beim Problem...Ich empfehle allen das Gyanshala institute zu beitreten",
  },
  {
    name: "Jhanvi Kumawat",
    image: "/Review/Jhanvi.Kumawat.jpeg",
    rating: 5,
    review:
      "The German classes here are very interactive and practical. I like how the teachers focus on speaking from day one, instead of just theory. The sessions are fun, and I always feel motivated to practice more at home. It’s a perfect institute for beginners who want to learn German seriousl",
  },
  {
    name: "Richa Singh",
    image: "/Review/Richa.singh.jpeg",
    rating: 5,
    review:
      "I recently finished my German classes here and I have to say, the faculty is amazing. They really know their stuff and have a deep and thorough Knowledge of the German language. Instead of just making you memorize a textbook, they actually break down tricky grammar and sentence structures so it's easier to grasp the concepts. The teachers are super supportive and patient whenever you get stuck. They are incredible and respond whenever you need help. Definitely recommend.",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
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
      <section id="about" className={`relative py-14 sm:py-20 lg:py-24 bg-[#FCF9EA] dark:bg-zinc-950 overflow-hidden border-b border-zinc-200/60 dark:border-zinc-800 ${josefin.className}`}>
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
                  className="group flex flex-col h-full bg-[#FFFAF3] dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
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

      {/* Germany Pathways Section */}
      <section id="pathways" className={`relative py-14 sm:py-20 lg:py-24 bg-[#F5EFE3] dark:bg-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800 overflow-hidden ${josefin.className}`}>
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
                  className="group flex flex-col h-full bg-[#FFFAF3] dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden rounded-none"
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
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-[#FFFAF3] dark:bg-zinc-900">
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
      <section id="team" className={`py-14 sm:py-20 lg:py-24 bg-[#FBFBFB] dark:bg-zinc-900/30 border-b border-zinc-200/60 dark:border-zinc-800 ${josefin.className}`}>
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
                role: "German Language Trainer",
                image: "/members/DILIP.SINSINWAR..jpeg",
              },
              {
                name: "Claudia Zibell",
                role: "German Language Native Speaker",
                image: "/members/Claudia.Zibell.jpeg",
              },
              {
                name: "Ashveer Singh",
                role: "German Language Trainer",
                image: "/members/ASHVEER.SINGH.jpeg",
              },
              {
                name: "Ruchi Kaushik",
                role: "Spanish Language Trainer",
                image: "/members/RUCHI.KAUSHIK.jpeg",
              },
              {
                name: "Jhanvi Kumawat",
                role: "German Language Trainer",
                image: "/members/Jhanvi.kumawat.jpeg",
              },
              {
                name: "Katharina Shevchuk",
                role: "English/German & Russian Language Trainer",
                image: "/members/KATRINA.jpeg",
              },
              {
                name: "Mumal Rathore",
                role: "French Language Trainer",
                image: "/members/Mumal.Rathore.jpeg",
              },
              {
                name: "Neeru Joshi",
                role: "German Language Trainer",
                image: "/members/Neeru.Joshi.jpeg",
              },
              {
                name: "Niharika",
                role: "English Language Trainer",
                image: "/members/NIHARIKA..jpeg",
              },
            ].map((member) => (
              <StaggerItem key={member.name} className="h-full">
                <div className="h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all group">
                  {/* Faculty Photo */}
                  <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Faculty Info */}
                  <div className="p-2.5 sm:p-3.5 md:p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200/60 dark:border-zinc-800 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-zinc-900 dark:text-white tracking-tight leading-snug text-center">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-[#C00000] leading-tight text-center">
                      {member.role}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* Why Choose Gyanshala Section */}
      <section id="why-choose-us" className={`relative pt-14 sm:pt-20 lg:pt-24 pb-0 lg:pb-24 overflow-hidden border-b border-zinc-200/60 dark:border-zinc-800 ${josefin.className}`}>
        {/* White Paper Background Texture with 100% Appearance */}
        <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
          <Image
            src="/whitepaper.jpg"
            alt="Paper background texture"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeInUp className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C00000] leading-none mb-2">
              WHY LEARN WITH US
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-black dark:text-white tracking-normal leading-tight">
              Why Choose Gyanshala?
            </h2>
          </FadeInUp>

          {/* 3-Column Symmetrical Layout (Matching Reference Style) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-6 items-center">
            
            {/* Left Column (3 items: order-1 on mobile & desktop) */}
            <div className="order-1 lg:order-1 lg:col-span-4 space-y-8 sm:space-y-10">
              {whyChoosePoints.slice(0, 3).map((point) => (
                <div key={point.number} className="flex items-start gap-4 text-left group">
                  <div className="shrink-0 text-[#C00000] pt-1 transition-transform duration-300 group-hover:scale-110">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-[#C00000] transition-colors">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Column: Cutout Student Visual (order-3 on mobile, order-2 on desktop) */}
            <div className="order-3 lg:order-2 lg:col-span-4 flex items-end justify-center self-end lg:self-center pt-4 sm:pt-6 lg:pt-0">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[360px] aspect-[432/578] flex items-end justify-center">
                <Image
                  src="/whychoose/whychooseus.png"
                  alt="Why Choose Gyanshala Foreign Language Academy"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_8px_20px_rgba(0,0,0,0.14)]"
                  priority
                />
              </div>
            </div>

            {/* Right Column (3 items: order-2 on mobile so points 4-6 follow points 1-3, order-3 on desktop) */}
            <div className="order-2 lg:order-3 lg:col-span-4 space-y-8 sm:space-y-10">
              {whyChoosePoints.slice(3, 6).map((point) => (
                <div key={point.number} className="flex items-start lg:flex-row-reverse gap-4 text-left lg:text-right group">
                  <div className="shrink-0 text-[#C00000] pt-1 transition-transform duration-300 group-hover:scale-110">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-[#C00000] transition-colors">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Highlights of Gyanshala Section */}
      <section id="highlights" className={`py-14 sm:py-20 lg:py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800 ${josefin.className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeInUp className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
              KEY FEATURES
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
              Highlights of Gyanshala
            </h2>
          </FadeInUp>

          {/* Highlights of Gyanshala Card Grid (Matching Reference Design) */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.06}>
            {highlights.map((item, index) => (
              <StaggerItem key={index} className="h-full">
                <div className="h-full p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 rounded-2xl shadow-xs hover:shadow-xl hover:border-[#F59E0B]/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group">
                  {/* Yellow/Gold Bordered Icon Container */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 border-[#F59E0B] bg-white dark:bg-zinc-800 flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 group-hover:border-[#ECBB0C] group-hover:shadow-md transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* Highlight Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white leading-snug mb-2.5 group-hover:text-[#C00000] transition-colors">
                    {item.title}
                  </h3>

                  {/* Highlight Description */}
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* Learn German Online (YouTube Video Lessons) Section */}
      <section id="learn-online" className={`py-14 sm:py-20 lg:py-24 bg-[#F5EFE3] dark:bg-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800 ${josefin.className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <FadeInUp className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
              LEARN GERMAN ONLINE
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
              Free Video Lessons
            </h3>
          </FadeInUp>

          {/* Video Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto" staggerDelay={0.08}>
            {onlineVideos.map((video) => {
              const isPlaying = playingVideoId === video.id;

              return (
                <StaggerItem key={video.id} className="h-full">
                  <div className="h-full bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col group">
                    {/* YouTube Video Area */}
                    <div className="relative w-full aspect-video bg-black overflow-hidden">
                      {isPlaying ? (
                        <iframe
                          src={
                            video.playlistId
                              ? `https://www.youtube-nocookie.com/embed/${video.youtubeId}?list=${video.playlistId}&autoplay=1&rel=0`
                              : `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`
                          }
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full border-0"
                        />
                      ) : (
                        <div
                          onClick={() => setPlayingVideoId(video.id)}
                          className="relative w-full h-full cursor-pointer group/thumb"
                        >
                          <Image
                            src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                            alt={video.title}
                            fill
                            unoptimized
                            className="object-cover object-center group-hover/thumb:scale-105 transition-transform duration-500 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 group-hover/thumb:from-black/50 transition-colors" />

                          {/* Duration Badge */}
                          <span className="absolute bottom-3 right-3 px-2 py-0.5 text-xs font-medium text-white bg-black/80 rounded-md shadow-md z-10">
                            {video.duration}
                          </span>

                          {/* Red YouTube Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-2xl group-hover/thumb:scale-115 group-hover/thumb:bg-[#CC0000] transition-all transform">
                              <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current translate-x-0.5" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Content: Title */}
                    <div className="p-4 sm:p-5 bg-white dark:bg-zinc-900 flex-1 flex items-center">
                      <h3 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-white group-hover:text-[#C00000] transition-colors leading-snug line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Subscribe CTA */}
          <div className="mt-10 sm:mt-12 text-center">
            <a
              href="https://www.youtube.com/@gyanshalaforeignlanguage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-[#BC0202] hover:bg-[#990202] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>Subscribe for More</span>
            </a>
          </div>

        </div>
      </section>

      {/* Student Reviews & Testimonials Section */}
      <section id="reviews" className={`py-14 sm:py-20 lg:py-24 bg-[#FCF9EA] dark:bg-zinc-900/40 border-b border-zinc-200/60 dark:border-zinc-800 ${josefin.className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <FadeInUp className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
              STUDENT REVIEWS
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
              What Our Students Say
            </h2>
            <div className="mt-3 flex items-center justify-center gap-2">
              <div className="flex items-center text-[#ECBB0C]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200">
                4.9 / 5.0 Rating (350+ Google Reviews)
              </span>
            </div>
          </FadeInUp>

          {/* Reviews Grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6" staggerDelay={0.07}>
            {studentReviews.map((item, idx) => (
              <StaggerItem key={idx} className="h-full">
                <div className="relative w-full h-full min-h-[500px] sm:min-h-[540px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-zinc-200/50 dark:border-zinc-800 transition-all duration-500 transform hover:-translate-y-1.5 flex flex-col justify-end group">
                  {/* Full Student Background Image */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Dark Gradient Overlay for Maximum Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 pointer-events-none" />

                  {/* Overlay Content Directly on Image */}
                  <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-end text-white">
                    {/* 5 Stars */}
                    <div className="flex items-center gap-1 text-[#ECBB0C] mb-2.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal mb-3.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      &ldquo;{item.review}&rdquo;
                    </p>

                    {/* Student Name & Verified Google Badge */}
                    <div className="pt-3 border-t border-white/20 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-base sm:text-lg text-white leading-tight drop-shadow-md">
                          {item.name}
                        </h4>
                        <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium mt-0.5">
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Verified Student
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-white/90 bg-white/15 px-2.5 py-1 rounded-full border border-white/25 backdrop-blur-xs">
                        Google Review
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <FAQSection isHomepage={true} limit={8} />

      {/* External Portals / Useful German Learning Resources Section */}
      <section id="external-portals" className={`py-12 sm:py-16 bg-[#FCF9EA] dark:bg-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800 overflow-hidden ${josefin.className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
              EXTERNAL PORTALS
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
              Useful German Learning Resources
            </h2>
          </FadeInUp>
        </div>

        {/* Infinite Looping Marquee Track */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] py-4">
          <div className="animate-marquee flex items-center gap-12 sm:gap-16">
            {[...externalResources, ...externalResources, ...externalResources, ...externalResources].map((res, index) => (
              <a
                key={`${res.name}-${index}`}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 sm:gap-4 shrink-0 bg-transparent transition-transform hover:scale-105"
              >
                {/* Shape-Free, Bigger Logo */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 shrink-0 flex items-center justify-center">
                  <Image
                    src={res.icon}
                    alt={res.name}
                    width={80}
                    height={80}
                    className="object-contain w-full h-full drop-shadow-xs group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Name Beside Icon */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-[#C00000] transition-colors whitespace-nowrap leading-snug">
                    {res.name}
                  </span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 group-hover:text-[#C00000] transition-colors shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}


