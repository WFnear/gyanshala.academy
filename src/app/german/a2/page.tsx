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
  title: "German A2 Course (Elementary Level) | Gyanshala Foreign Language Academy",
  description:
    "Take your German to the next level. Learn intermediate foundation grammar, expand vocabulary, write emails, and prepare for Goethe-Zertifikat A2, telc A2, and ÖSD A2 exams in Jaipur.",
};

export default function GermanA2Page() {
  const whatYouLearn = [
    {
      title: "Everyday German Communication",
      desc: "Understand and use commonly spoken German sentences and expressions.",
    },
    {
      title: "Intermediate Foundation Grammar",
      desc: "Strengthen your understanding of sentence structures, verb conjugations, cases, prepositions, and essential grammatical rules.",
    },
    {
      title: "Speaking Skills",
      desc: "Participate confidently in simple conversations about family, education, work, hobbies, and daily activities.",
    },
    {
      title: "Listening Skills",
      desc: "Understand frequently used expressions and simple conversations related to everyday situations.",
    },
    {
      title: "Reading Skills",
      desc: "Read and understand short articles, advertisements, emails, notices, and everyday texts.",
    },
    {
      title: "Writing Skills",
      desc: "Write personal and formal emails, invitations, short descriptions, and simple messages using correct grammar.",
    },
    {
      title: "Personal & Professional Background",
      desc: "Describe your educational qualifications, work experience, family background, and personal interests.",
    },
    {
      title: "Past & Future Expressions",
      desc: "Talk about previous experiences, daily routines, future plans, and personal goals.",
    },
    {
      title: "Practical Conversations",
      desc: "Communicate in situations such as shopping, travelling, booking appointments, visiting doctors, and asking for information.",
    },
    {
      title: "Vocabulary Development",
      desc: "Expand your German vocabulary for more effective communication.",
    },
    {
      title: "Goethe A2 Exam Preparation",
      desc: "Practise listening, reading, writing, and speaking tasks based on the Goethe-Zertifikat A2, The telc German A2 Exam & ÖSD Zertifikat A2 (ZA2) examinations format.",
    },
  ];

  return (
    <main className={`w-full overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 ${josefin.className}`}>
      
      {/* =========================================================================
          HERO SECTION (SAME DESIGN AS ABOUT US)
          ========================================================================= */}
      <section className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px] flex flex-col items-center justify-center overflow-hidden py-14 sm:py-16 md:py-20 text-white text-center bg-zinc-950">
        <Image
          src="/Hero/hero3.jpg"
          alt="German Language Course A2 Elementary Level - Gyanshala Foreign Language Academy"
          fill
          priority
          className="object-cover object-center z-0 brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-[0.06em] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              GERMAN A2 LEVEL
            </h1>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-[22px] text-white font-medium italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
              Take Your German Language Skills to the Next Level! 🇩🇪
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* =========================================================================
          CONTINUOUS WHITE PAPER WRAPPER (ABOUT US STYLE)
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-16 sm:space-y-20">

          {/* SECTION 1: COURSE OVERVIEW */}
          <FadeInUp className="space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                COURSE OVERVIEW
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                German Language Course – A2 (Elementary Level)
              </h2>
            </div>

            <h4 className="text-2xl sm:text-3xl lg:text-[28px] font-bold italic text-[#C00000] leading-snug">
              Take Your German Language Skills to the Next Level! 🇩🇪
            </h4>

            <div
              className="space-y-4 text-zinc-900 dark:text-zinc-100 text-base sm:text-lg lg:text-[21px] leading-[1.55] italic font-medium tracking-normal"
              style={{
                fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                letterSpacing: "0em",
              }}
            >
              <p>
                The German A2 Course is designed for learners who have completed the A1 level or already possess basic knowledge of the German language. This course focuses on strengthening essential grammar, expanding vocabulary, and improving communication skills for everyday situations.
              </p>
              <p>
                At the A2 level, students learn to understand frequently used expressions and sentences related to personal information, family, shopping, employment, education, travel, and their immediate surroundings.
              </p>
              <p>
                Learners develop the ability to communicate in simple and routine situations that require a direct exchange of information on familiar topics. They also learn to describe their educational background, work experience, daily routines, past experiences, and future plans using appropriate German vocabulary and grammatical structures.
              </p>
              <p>
                The course places special emphasis on speaking, listening, reading, and writing skills, helping students communicate more confidently and independently.
              </p>
              <p>
                This course is ideal for students, professionals, job seekers, and individuals planning to study, work, or settle in Germany, Austria, or Switzerland.
              </p>
              <p>
                The course also prepares students for the <strong>Goethe-Zertifikat A2</strong>, <strong>The telc German A2 Exam</strong> &amp; <strong>ÖSD Zertifikat A2 (ZA2)</strong> examinations.
              </p>
            </div>
          </FadeInUp>

          {/* SECTION 2: KEY HIGHLIGHTS */}
          <FadeInUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { label: "CEFR Level", val: "A2 Elementary" },
                { label: "Prerequisite", val: "German A1 Level" },
                { label: "Target Exams", val: "Goethe / telc / ÖSD" },
                { label: "Next Stage", val: "B1 Intermediate" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-5 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-sm text-center"
                >
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C00000]">
                    {stat.label}
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-black dark:text-white mt-1">
                    {stat.val}
                  </p>
                </div>
              ))}
            </div>
          </FadeInUp>

          {/* SECTION 3: WHAT YOU'LL LEARN */}
          <section className="space-y-8">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                CURRICULUM &amp; MODULES
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                What You&apos;ll Learn
              </h2>
            </FadeInUp>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" staggerDelay={0.05}>
              {whatYouLearn.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="h-full p-5 sm:p-6 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-sm space-y-2">
                    <h4 className="text-lg sm:text-xl font-bold text-black dark:text-white flex items-center gap-2.5">
                      <span className="text-[#C00000] font-bold select-none">•</span>
                      <span>{item.title}</span>
                    </h4>
                    <p
                      className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base lg:text-[18px] leading-[1.5] italic font-medium pl-4"
                      style={{
                        fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                        letterSpacing: "0em",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          {/* SECTION 4: LEARNING OUTCOME */}
          <FadeInUp className="space-y-4">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                OUTCOMES &amp; PROGRESSION
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Learning Outcome
              </h2>
            </div>

            <div
              className="p-6 sm:p-8 bg-white/95 dark:bg-zinc-900/95 border border-zinc-200/90 dark:border-zinc-800 shadow-sm space-y-3 text-zinc-900 dark:text-zinc-100 text-base sm:text-lg lg:text-[21px] leading-[1.55] italic font-medium"
              style={{
                fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                letterSpacing: "0em",
              }}
            >
              <p>
                After successfully completing the German A2 course, students will be able to communicate in familiar everyday situations, understand commonly used expressions, write simple emails, and describe personal experiences with greater confidence.
              </p>
              <p>
                Learners will have a stronger foundation in German grammar and communication, preparing them to advance to the <strong>B1 Intermediate Level</strong>.
              </p>
              <p className="text-[#C00000] font-bold not-italic">
                Recommended Prerequisite: German A1 Level or equivalent knowledge.
              </p>
            </div>
          </FadeInUp>

        </div>
      </div>

      {/* =========================================================================
          FINAL CTA (EXACT SAME DESIGN AS ABOUT US)
          ========================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 text-white overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Germany.jpg"
            alt="German Language Training"
            fill
            className="object-cover object-center"
            priority
          />
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
              letterSpacing: "0em",
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
