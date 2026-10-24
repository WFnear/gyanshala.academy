import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Josefin_Sans, Poppins } from "next/font/google";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-josefin",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
});

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
    { title: "Expert Language Training", icon: "👨‍🏫" },
    { title: "Courses from A1 to B2", icon: "📚" },
    { title: "Practical Communication Skills", icon: "🗣️" },
    { title: "International Exam Preparation", icon: "📝" },
    { title: "Flexible Learning Modes", icon: "🕒" },
    { title: "Interactive Teaching Methods", icon: "💡" },
    { title: "Personalised Student Support", icon: "🤝" },
    { title: "Career-Oriented Learning", icon: "🎯" },
    { title: "Quality Education at Affordable Fees", icon: "💰" },
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
    <main className={`w-full overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans ${josefin.variable} ${poppins.variable}`}>
      
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
      <div className="relative bg-white dark:bg-zinc-950 overflow-hidden">
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
          <section className={`py-14 sm:py-20 lg:py-24 ${josefin.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-24">
          
          {/* Part 1: OUR STORY */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Content Column (Figma Typography: Josefin Sans, Mixed/32px, Auto line-height, 0% letter spacing) */}
            <FadeInUp className="lg:col-span-7">
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
            </FadeInUp>

            {/* Visual Column: Building Image with Border Radius Zero (Corner radius: 0) */}
            <FadeInUp delay={0.15} className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-none overflow-hidden shadow-lg border border-zinc-200/60 dark:border-zinc-800">
                <Image
                  src="/aboutus.png"
                  alt="Gyanshala Foreign Language Academy - Campus & International Opportunities"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </FadeInUp>
          </div>

          {/* Part 2: PURPOSE & DIRECTION */}
          <div className="max-w-5xl mx-auto">
            <FadeInUp>
              {/* Headings - Center Aligned */}
              <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                  PURPOSE &amp; DIRECTION
                </h3>

                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                  Our Mission, Vision &amp; Goals
                </h2>
              </div>

              {/* Our Mission */}
              <div className="space-y-2">
                <h4 className="text-2xl sm:text-3xl lg:text-[30px] font-bold italic text-[#C00000] leading-snug">
                  Our Mission
                </h4>
                <p
                  className="text-zinc-800 dark:text-zinc-200 text-base sm:text-lg lg:text-[22px] xl:text-[24px] leading-[1.55] italic font-medium tracking-normal"
                  style={{
                    fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                    letterSpacing: '0em',
                  }}
                >
                  Our mission at Gyanshala Foreign Language Academy is to deliver high-quality German language classes in Jaipur that are structured, practical, and aligned with international standards. We aim to help learners communicate confidently in German and prepare effectively for academic, professional, and exam-related goals.
                </p>
              </div>

              {/* Our Vision */}
              <div className="mt-7 sm:mt-9 space-y-2">
                <h4 className="text-2xl sm:text-3xl lg:text-[30px] font-bold italic text-[#C00000] leading-snug">
                  Our Vision
                </h4>
                <p
                  className="text-zinc-800 dark:text-zinc-200 text-base sm:text-lg lg:text-[22px] xl:text-[24px] leading-[1.55] italic font-medium tracking-normal"
                  style={{
                    fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                    letterSpacing: '0em',
                  }}
                >
                  Our vision is to become a trusted and leading German language institute in Jaipur, recognised for academic excellence, practical teaching methods, and student success. We aspire to empower learners with strong German language skills and connect them to global opportunities in education, employment, and professional development.
                </p>
              </div>

              {/* Our Goals */}
              <div className="mt-7 sm:mt-9 space-y-3">
                <h4 className="text-2xl sm:text-3xl lg:text-[30px] font-bold italic text-[#C00000] leading-snug">
                  Our Goals
                </h4>
                <ul
                  className="space-y-2.5 text-zinc-800 dark:text-zinc-200 text-base sm:text-lg lg:text-[22px] xl:text-[24px] leading-[1.55] italic font-medium tracking-normal"
                  style={{
                    fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                    letterSpacing: '0em',
                  }}
                >
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
          SECTION 4 · OUR TEAM / MEMBERS (Pure White Background)
          ========================================================================= */}
      <section className={`py-14 sm:py-20 lg:py-24 bg-white dark:bg-zinc-950 ${josefin.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <FadeInUp className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                  EXPERIENCED EDUCATORS
                </h3>
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                  Meet Our Members
                </h2>
              </FadeInUp>

              {/* Responsive Faculty Grid matching Homepage: 4 columns desktop, 2-3 columns mobile & tablet */}
              <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6 max-w-7xl mx-auto" staggerDelay={0.06}>
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

      {/* =========================================================================
          SECTIONS 5 TO 8 · (Pure White Background)
          ========================================================================= */}
      <div className="bg-white dark:bg-zinc-950">
        {/* =====================================================================
            SECTION 5 · WHY CHOOSE GYANSHALA?
            ===================================================================== */}
        <section className={`py-14 sm:py-20 lg:py-24 bg-white dark:bg-zinc-950 ${josefin.className}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <FadeInUp className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-2">
                WHY LEARN WITH US
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Why Choose Gyanshala?
              </h2>
            </FadeInUp>

            {/* 6 Clean Cardless Feature Items Matching Screenshot */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 sm:gap-x-12 sm:gap-y-12 lg:gap-x-14 lg:gap-y-12" staggerDelay={0.06}>
              {whyChoosePoints.map((point) => (
                <StaggerItem key={point.number}>
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="shrink-0 text-[#C00000]">
                      {point.icon}
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-black dark:text-white leading-snug">
                      {point.title}
                    </h3>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

          </div>
        </section>

          {/* =====================================================================
              SECTION 6 · HIGHLIGHTS OF GYANSHALA
              ===================================================================== */}
          <section className={`py-14 sm:py-20 lg:py-24 ${josefin.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <FadeInUp className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                  KEY FEATURES
                </h3>
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                  Highlights of Gyanshala
                </h2>
              </FadeInUp>

              {/* 9 Clean Cardless Grid Highlights */}
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10" staggerDelay={0.05}>
                {highlights.map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <span className="text-2xl sm:text-3xl shrink-0">
                        {item.icon}
                      </span>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-zinc-900 dark:text-white leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

            </div>
          </section>

          {/* =====================================================================
              SECTION 8 · USEFUL GERMAN LEARNING RESOURCES
              ===================================================================== */}
          <section className={`py-14 sm:py-20 lg:py-24 ${josefin.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <FadeInUp className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                  EXTERNAL PORTALS
                </h3>
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                  Useful German Learning Resources
                </h2>
              </FadeInUp>

              {/* 7 Clean Cardless Official Portals with Official Icons */}
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8" staggerDelay={0.05}>
                {resources.map((res) => (
                  <StaggerItem key={res.name}>
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 sm:gap-4 group hover:opacity-80 transition-opacity"
                    >
                      <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center">
                        <Image
                          src={res.icon}
                          alt={res.name}
                          width={44}
                          height={44}
                          className="object-contain max-h-10 max-w-10 rounded-md"
                        />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-zinc-900 dark:text-white group-hover:text-[#C00000] transition-colors leading-snug">
                          {res.name}
                        </h3>
                        <svg className="w-4 h-4 text-zinc-400 group-hover:text-[#C00000] transition-colors shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </div>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerContainer>

            </div>
          </section>
      </div>

      {/* =========================================================================
          SECTION 9 · FINAL CTA
          ========================================================================= */}
      <section className={`relative py-16 sm:py-20 lg:py-24 text-white overflow-hidden bg-zinc-950 ${josefin.className}`}>
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
            Connect with our team to explore German courses and find the right learning path for your goals.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-bold text-[#BC0202] bg-white hover:bg-zinc-100 shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book a Free Demo
            </Link>
          </div>
        </FadeInUp>
      </section>

    </main>
  );
}
