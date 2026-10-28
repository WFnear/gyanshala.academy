import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  StaggerContainer,
  StaggerItem,
  AnimatedButton,
  CardImageReveal,
  CardTextReveal,
  ScrollParallax,
} from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | Gyanshala Foreign Language Academy - Jaipur",
  description:
    "Learn about Gyanshala Foreign Language Academy: our journey since 2018, mission, vision, goals, faculty, and pathways to global opportunities.",
};

export default function AboutUsPage() {
  const whyChoosePoints = [
    {
      number: "01",
      title: "Experienced German Language Trainers",
      description: "Learn from qualified and dedicated German language experts.",
      icon: (
        <svg className="w-8 h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "German Courses from A1 to C2",
      description: "Progress step by step from beginner to advanced proficiency.",
      icon: (
        <svg className="w-8 h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Spoken German & Exam Preparation",
      description: "Develop practical communication skills and prepare for recognised examinations.",
      icon: (
        <svg className="w-8 h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v5.018z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Flexible Batch Timings",
      description: "Choose a batch that fits your daily schedule.",
      icon: (
        <svg className="w-8 h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Affordable German Classes in Jaipur",
      description: "Quality German language training at reasonable fees.",
      icon: (
        <svg className="w-8 h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 0a1.5 1.5 0 00-1.5 1.5v8.25a1.5 1.5 0 001.5 1.5m16.5-11.25a1.5 1.5 0 011.5 1.5v8.25a1.5 1.5 0 01-1.5 1.5m-16.5 0h16.5m-18 3h19.5a.75.75 0 00.75-.75v-.75H1.5v.75a.75.75 0 00.75.75z" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "Online and Offline Classes",
      description: "Learn through online sessions or in-person classroom training.",
      icon: (
        <svg className="w-8 h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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

  const resources = [
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

  return (
    <main className="w-full overflow-x-hidden bg-[#FCF9EA] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      
      {/* =========================================================================
          SECTION 1 · ABOUT US HERO
          ========================================================================= */}
      <section className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px] flex flex-col items-center justify-center overflow-hidden py-14 sm:py-16 md:py-20 text-white text-center bg-zinc-950">
        {/* Background Image - Berlin Reichstag Landmark with German Flag */}
        <Image
          src="/Hero/hero3.jpg"
          alt="About Us - Gyanshala Foreign Language Academy"
          fill
          priority
          className="object-cover object-center z-0 brightness-[0.92]"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-[1]" />

        {/* Centered Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            {/* Main Heading: ABOUT US */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-[0.06em] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              ABOUT US
            </h1>

            {/* Subtitle */}
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-[22px] text-white font-medium italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
              Empowering Learners with German Language Excellence Since 2018
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* =========================================================================
          CONTINUOUS WHITE PAPER WRAPPER (SECTIONS 2 TO 8 · SEAMLESS, NO DIVIDING LINES)
          ========================================================================= */}
      <div className="relative bg-[#FCF9EA] dark:bg-zinc-950 overflow-hidden">
        {/* Truly Continuous White Paper Background Texture - Appearance 70% */}
        <div className="absolute inset-0 z-0 opacity-70 dark:opacity-30 pointer-events-none">
          <Image
            src="/whitepaper.jpg"
            alt="Paper background texture"
            fill
            className="object-cover object-top contrast-[1.12] brightness-[0.96]"
            priority
          />
        </div>

        <div className="relative z-10">
          {/* =====================================================================
              SECTIONS 2 & 3 · OUR STORY & PURPOSE & DIRECTION
              ===================================================================== */}
          <section className="py-14 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-24">
          
          {/* Part 1: OUR STORY */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Content Column */}
            <FadeInLeft className="lg:col-span-7">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-normal text-zinc-900 dark:text-zinc-100 tracking-[-0.01em] leading-[1.12] mb-6 sm:mb-7">
                Our journey since <span className="text-[#A61911] italic font-normal">2018</span>
              </h2>

              <FadeInUp delay={0.1}>
                <div className="space-y-4 sm:space-y-5 text-zinc-700 dark:text-zinc-300 text-base sm:text-lg lg:text-[17.5px] leading-[1.75] font-normal not-italic tracking-normal">
                  <p>
                    Gyanshala – Foreign Language Academy was established in 2018 as an initiative to support students in their learning journey, provide a global platform, and help them achieve their academic goals.
                  </p>

                  <p>
                    Gyanshala works to connect learners with international educational opportunities and offers language learning, consultation, and student guidance services. The academy aims to help students choose programmes suited to their interests and career goals, while encouraging them to become confident global citizens rooted in their traditions and ready to face the world.
                  </p>
                </div>
              </FadeInUp>
            </FadeInLeft>

            {/* Visual Column: Building Image with Border Radius Zero */}
            <FadeInRight delay={0.12} className="lg:col-span-5 flex justify-center lg:justify-end">
              <ScrollParallax yOffset={35} className="relative w-full max-w-[500px] aspect-[4/3] rounded-none overflow-hidden shadow-lg border border-zinc-200/60 dark:border-zinc-800">
                <Image
                  src="/Aboutusgyanshala.in.png"
                  alt="Gyanshala Foreign Language Academy - Campus & International Opportunities"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                  priority
                />
              </ScrollParallax>
            </FadeInRight>
          </div>

          {/* Part 2: PURPOSE & DIRECTION */}
          <div className="max-w-5xl mx-auto">
            <FadeInUp>
              {/* Headings - Center Aligned */}
              <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] leading-none mb-3">
                  PURPOSE &amp; DIRECTION
                </p>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal text-zinc-900 dark:text-zinc-100 tracking-normal leading-tight">
                  Our Mission, Vision &amp; Goals
                </h2>
              </div>

              {/* Our Mission */}
              <div className="space-y-2">
                <h4 className="font-serif text-2xl sm:text-3xl lg:text-[30px] font-normal italic text-[#A61911] leading-snug">
                  Our Mission
                </h4>
                <p className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg lg:text-[18px] leading-[1.75] font-normal not-italic tracking-normal">
                  Our mission at Gyanshala Foreign Language Academy is to deliver high-quality German language classes in Jaipur that are structured, practical, and aligned with international standards. We aim to help learners communicate confidently in German and prepare effectively for academic, professional, and exam-related goals.
                </p>
              </div>

              {/* Our Vision */}
              <div className="mt-7 sm:mt-9 space-y-2">
                <h4 className="font-serif text-2xl sm:text-3xl lg:text-[30px] font-normal italic text-[#A61911] leading-snug">
                  Our Vision
                </h4>
                <p className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg lg:text-[18px] leading-[1.75] font-normal not-italic tracking-normal">
                  Our vision is to become a trusted and leading German language institute in Jaipur, recognised for academic excellence, practical teaching methods, and student success. We aspire to empower learners with strong German language skills and connect them to global opportunities in education, employment, and professional development.
                </p>
              </div>

              {/* Our Goals */}
              <div className="mt-7 sm:mt-9 space-y-3">
                <h4 className="font-serif text-2xl sm:text-3xl lg:text-[30px] font-normal italic text-[#A61911] leading-snug">
                  Our Goals
                </h4>
                <ul className="space-y-2.5 text-zinc-700 dark:text-zinc-300 text-base sm:text-lg lg:text-[18px] leading-[1.75] font-normal not-italic tracking-normal">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C00000] font-bold select-none">•</span>
                    <span>Offer CEFR-aligned German language courses from A1 to C2.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C00000] font-bold select-none">•</span>
                    <span>Develop speaking, listening, reading, and writing skills through practical learning.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C00000] font-bold select-none">•</span>
                    <span>Prepare students for Goethe-Institut and telc examinations with practice tests and targeted guidance.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C00000] font-bold select-none">•</span>
                    <span>Provide personalised learning through small batches, individual attention, and supportive teaching.</span>
                  </li>
                </ul>
              </div>
            </FadeInUp>
          </div>

        </div>
      </section>
        </div>
      </div>

      {/* =========================================================================
          SECTION 4 · OUR TEAM / MEMBERS
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#FBFBFB] dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <FadeInUp className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] leading-none mb-3">
                  EXPERIENCED EDUCATORS
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-zinc-900 dark:text-zinc-100 tracking-normal leading-tight">
                  Meet Our Members
                </h2>
              </FadeInUp>

              {/* Responsive Faculty Grid matching Homepage: 3 columns desktop & tablet, 2 columns mobile */}
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3.5 sm:gap-6 max-w-6xl mx-auto" staggerDelay={0.15}>
                {[
                  {
                    name: "Dilip Sinsinwar",
                    role: "German Language Trainer",
                    image: "/teammembers/Dilip Sinsinwar Sir German Language Expert.png",
                  },
                  {
                    name: "Claudia Zibell",
                    role: "German Language Native Speaker",
                    image: "/teammembers/Claudia Zibell Maam German langauge Native Speaker.png",
                  },
                  {
                    name: "Ashveer Singh",
                    role: "German Language Trainer",
                    image: "/teammembers/Ashveer Singh Sir German Language Expert.png",
                  },
                  {
                    name: "Ruchi Kaushik",
                    role: "Spanish Language Trainer",
                    image: "/teammembers/Ruchi Kausik Maam Spanish Language Trainer.png",
                  },
                  {
                    name: "Jhanvi Kumawat",
                    role: "German Language Trainer",
                    image: "/teammembers/Jhanvi Kumawat German Language Trainer.png",
                  },
                  {
                    name: "Katharina Shevchuk",
                    role: "English/German & Russian Language Trainer",
                    image: "/teammembers/Katharina Shevchuk Maam EnglishGerman & Russian Language Trainer.png",
                  },
                  {
                    name: "Mumal Rathore",
                    role: "French Language Trainer",
                    image: "/teammembers/Mumal.Rathore.png",
                  },
                  {
                    name: "Neeru Joshi",
                    role: "German Language Trainer",
                    image: "/teammembers/Neeru.Joshi.png",
                  },
                  {
                    name: "Niharika",
                    role: "English Language Trainer",
                    image: "/teammembers/Niharika Maam English Language Trainer.png",
                  },
                ].map((member, index) => (
                  <StaggerItem key={member.name} className="h-full" direction="alternate" index={index} hoverLift>
                    <div className="h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all group">
                      {/* Faculty Photo */}
                      <CardImageReveal reversed={index % 2 !== 0}>
                        <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-center transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                        </div>
                      </CardImageReveal>

                      {/* Faculty Info */}
                      <CardTextReveal reversed={index % 2 !== 0} delay={0.15} className="flex-1 flex flex-col">
                        <div className="p-2.5 sm:p-3.5 md:p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200/60 dark:border-zinc-800 text-center flex-1 flex flex-col justify-center">
                          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-zinc-900 dark:text-white tracking-tight leading-snug text-center">
                            {member.name}
                          </h3>
                          <p className="mt-1 text-xs sm:text-sm font-semibold text-[#C00000] leading-tight text-center">
                            {member.role}
                          </p>
                        </div>
                      </CardTextReveal>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

        </div>
      </section>

      {/* =========================================================================
          SECTIONS 5 TO 8 · (Soft Ivory Background)
          ========================================================================= */}
      <div className="bg-[#FCF9EA] dark:bg-zinc-950">
        {/* =====================================================================
            SECTION 5 · WHY CHOOSE GYANSHALA?
            ===================================================================== */}
        <section className="relative pt-14 sm:pt-20 lg:pt-24 pb-0 overflow-hidden border-b border-zinc-200/60 dark:border-zinc-800">
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
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] leading-none mb-3">
                WHY LEARN WITH US
              </p>
            </FadeInUp>

            {/* 3-Column Symmetrical Layout (Matching Reference Style) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-6 items-center">
              
              {/* Left Column (3 items: order-1 on mobile & desktop) */}
              <FadeInLeft className="order-1 lg:order-1 lg:col-span-4 space-y-8 sm:space-y-10">
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
              </FadeInLeft>

              {/* Center Column: Cutout Student Visual (order-3 on mobile, order-2 on desktop) */}
              <div className="order-3 lg:order-2 lg:col-span-4 flex items-end justify-center self-end pt-4 sm:pt-6 lg:pt-0">
                <ScrollParallax yOffset={45} className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[420px] xl:max-w-[460px] aspect-[432/578] flex items-end justify-center">
                  <Image
                    src="/whychoose/whychooseus.png"
                    alt="Why Choose Gyanshala Foreign Language Academy"
                    fill
                    className="object-contain object-bottom drop-shadow-[0_8px_20px_rgba(0,0,0,0.14)]"
                    priority
                  />
                </ScrollParallax>
              </div>

              {/* Right Column (3 items: order-2 on mobile so points 4-6 follow points 1-3, order-3 on desktop) */}
              <FadeInRight className="order-2 lg:order-3 lg:col-span-4 space-y-8 sm:space-y-10">
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
              </FadeInRight>

            </div>

          </div>
        </section>

          {/* =====================================================================
              SECTION 6 · HIGHLIGHTS OF GYANSHALA
              ===================================================================== */}
          <section className="py-14 sm:py-20 lg:py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <FadeInUp className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-zinc-900 dark:text-zinc-100 tracking-normal leading-tight">
                  Highlights of Gyanshala
                </h2>
              </FadeInUp>

              {/* Highlights of Gyanshala Card Grid (Matching Reference Design) */}
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.22}>
                {highlights.map((item, index) => (
                  <StaggerItem key={index} className="h-full" direction="alternate" index={index} hoverLift>
                    <div className="h-full p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 rounded-2xl shadow-xs hover:shadow-xl hover:border-[#F59E0B]/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group">
                      {/* Yellow/Gold Bordered Icon Container */}
                      <CardImageReveal reversed={index % 2 !== 0}>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 border-[#F59E0B] bg-white dark:bg-zinc-800 flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 group-hover:border-[#ECBB0C] group-hover:shadow-md transition-all duration-300">
                          {item.icon}
                        </div>
                      </CardImageReveal>

                      {/* Highlight Title & Description */}
                      <CardTextReveal reversed={index % 2 !== 0} delay={0.15} className="flex-1 flex flex-col items-center">
                        <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white leading-snug mb-2.5 group-hover:text-[#C00000] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </CardTextReveal>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

            </div>
          </section>

          {/* =====================================================================
              SECTION 8 · USEFUL GERMAN LEARNING RESOURCES
              ===================================================================== */}
          <section className="py-12 sm:py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeInUp className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] leading-none mb-3">
                  EXTERNAL PORTALS
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-zinc-900 dark:text-zinc-100 tracking-normal leading-tight">
                  Useful German Learning Resources
                </h2>
              </FadeInUp>
            </div>

            {/* Infinite Looping Marquee Track */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] py-4">
              <div className="animate-marquee flex items-center gap-12 sm:gap-16">
                {[...resources, ...resources, ...resources, ...resources].map((res, index) => (
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
      </div>

      {/* =========================================================================
          SECTION 9 · FINAL CTA
          ========================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 text-white overflow-hidden bg-zinc-950">
        {/* Background Image: Germany.jpg with 100% Appearance */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Germany.jpg"
            alt="Germany"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Contrast overlay for crisp text readability */}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Start Your German Learning Journey Today
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p className="text-base sm:text-lg lg:text-[20px] text-white/90 max-w-2xl mx-auto leading-[1.6] font-normal not-italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Connect with our team to explore German courses and find the right learning path for your goals.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2} className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <AnimatedButton>
              <Link
                href="/enquiry"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 rounded-xl text-base font-bold text-white bg-[#BC0202] hover:bg-[#990202] shadow-xl transition-all"
              >
                Book a Free Demo
              </Link>
            </AnimatedButton>
          </FadeInUp>
        </div>
      </section>

    </main>
  );
}
