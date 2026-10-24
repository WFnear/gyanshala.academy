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
  title: "German B1 Course (Intermediate Level) | Gyanshala Foreign Language Academy",
  description:
    "Communicate independently in German. Prepare for Ausbildung, German university pathways, job seeker visas, and Goethe-Zertifikat B1, telc B1, and ÖSD B1 exams in Jaipur.",
};

export default function GermanB1Page() {
  const whatYouLearn = [
    {
      title: "Independent German Communication",
      desc: "Communicate confidently in familiar everyday, academic, and professional situations.",
    },
    {
      title: "Intermediate German Grammar",
      desc: "Strengthen your understanding of complex sentence structures, subordinate clauses, relative clauses, conjunctions, and essential grammatical concepts.",
    },
    {
      title: "Speaking Skills",
      desc: "Participate in discussions, express personal opinions, describe experiences, and explain ideas with supporting arguments.",
    },
    {
      title: "Listening Skills",
      desc: "Understand the main points of conversations, announcements, interviews, and audio recordings spoken in clear, standard German.",
    },
    {
      title: "Reading Skills",
      desc: "Read and understand articles, reports, emails, advertisements, and texts related to everyday and professional topics.",
    },
    {
      title: "Writing Skills",
      desc: "Write structured formal and informal emails, personal letters, short essays, and opinion-based texts using appropriate vocabulary and grammar.",
    },
    {
      title: "Expressing Opinions",
      desc: "Present your viewpoint, agree or disagree politely, provide reasons, and participate in meaningful discussions.",
    },
    {
      title: "Describing Experiences & Events",
      desc: "Talk about past experiences, personal achievements, important events, dreams, ambitions, and future goals.",
    },
    {
      title: "Real-Life Communication",
      desc: "Handle practical situations involving travel, accommodation, appointments, education, employment, and social interactions.",
    },
    {
      title: "Presentation Skills",
      desc: "Prepare and deliver short presentations on familiar topics and respond to questions confidently.",
    },
    {
      title: "Professional Communication",
      desc: "Develop essential language skills for workplace interactions, job interviews, and professional conversations.",
    },
    {
      title: "Vocabulary Development",
      desc: "Expand your vocabulary to discuss a wider range of social, educational, cultural, and professional topics.",
    },
    {
      title: "Goethe/Telc & ÖSD B1 Exam Preparation",
      desc: "Practise all four examination modules—Hören (Listening), Lesen (Reading), Schreiben (Writing), and Sprechen (Speaking)—using exercises based on the Goethe-Zertifikat/Telc/ÖSD B1 examination format.",
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
          alt="German Language Course B1 Intermediate Level - Gyanshala Foreign Language Academy"
          fill
          priority
          className="object-cover object-center z-0 brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-[0.06em] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              GERMAN B1 LEVEL
            </h1>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-[22px] text-white font-medium italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
              Build Confidence and Communicate Independently in German! 🇩🇪
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
                German Language Course – B1 (Intermediate Level)
              </h2>
            </div>

            <h4 className="text-2xl sm:text-3xl lg:text-[28px] font-bold italic text-[#C00000] leading-snug">
              Build Confidence and Communicate Independently in German! 🇩🇪
            </h4>

            <div
              className="space-y-4 text-zinc-900 dark:text-zinc-100 text-base sm:text-lg lg:text-[21px] leading-[1.55] italic font-medium tracking-normal"
              style={{
                fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                letterSpacing: "0em",
              }}
            >
              <p>
                The German B1 Course is designed for learners who have completed the A2 level or possess equivalent German language skills. This intermediate-level course focuses on developing fluency, strengthening grammatical accuracy, expanding vocabulary, and improving communication skills for everyday, academic, and professional situations.
              </p>
              <p>
                At the B1 level, students learn to understand the main points of clear, standard German used in familiar situations related to work, education, travel, leisure activities, and everyday life.
              </p>
              <p>
                Learners develop the ability to communicate independently, express opinions, share experiences, describe events, and discuss personal goals and future plans. They also learn to handle most situations that may arise while travelling or living in German-speaking countries.
              </p>
              <p>
                The course places special emphasis on speaking, listening, reading, and writing skills, enabling students to participate in conversations, understand longer texts, write structured emails, and explain their viewpoints with supporting reasons.
              </p>
              <p>
                This course is particularly beneficial for students, working professionals, Ausbildung applicants, healthcare professionals, and individuals planning to study, work, or live in Germany, Austria, or Switzerland.
              </p>
              <p>
                The course also provides structured preparation for the <strong>Goethe-Zertifikat B1</strong>, <strong>telc Deutsch B1</strong> &amp; <strong>ÖSD Zertifikat B1</strong> examinations.
              </p>
            </div>
          </FadeInUp>

          {/* SECTION 2: KEY HIGHLIGHTS */}
          <FadeInUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { label: "CEFR Level", val: "B1 Intermediate" },
                { label: "Prerequisite", val: "German A2 Level" },
                { label: "Key For", val: "Ausbildung & Study" },
                { label: "Next Stage", val: "B2 Upper-Int." },
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
                After successfully completing the German B1 course, students will be able to communicate independently in familiar situations, understand the main points of standard German, express opinions, write connected texts, and describe experiences, aspirations, and future plans with greater confidence.
              </p>
              <p>
                Learners will develop stronger grammatical accuracy, improved vocabulary, and practical communication skills suitable for everyday life, education, and many workplace situations in German-speaking countries.
              </p>
              <p>
                The B1 level also provides an important language foundation for individuals pursuing vocational training (Ausbildung), higher education pathways, and professional opportunities in Germany, subject to the specific language requirements of the institution or employer.
              </p>
              <p className="text-[#C00000] font-bold not-italic">
                Recommended Prerequisite: German A2 Level or equivalent knowledge. Ready to advance to the B2 Upper-Intermediate Level!
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
