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
  title: "German C1 Course (Advanced Level) | Gyanshala Foreign Language Academy",
  description:
    "Master advanced German for university admission, postgraduate research, medical licensing, and career excellence. Comprehensive preparation for Goethe C1, telc C1, and ÖSD C1 in Jaipur.",
};

export default function GermanC1Page() {
  const whatYouLearn = [
    {
      title: "Advanced German Fluency",
      desc: "Communicate naturally, fluently, and spontaneously with native German speakers on complex academic, professional, and social topics.",
    },
    {
      title: "Mastery of Advanced Grammar",
      desc: "Develop greater control over sophisticated sentence structures, advanced passive constructions, Konjunktiv I and II, nominalisation, participial constructions, complex subordinate clauses, and advanced grammatical expressions.",
    },
    {
      title: "Advanced Speaking Skills",
      desc: "Express complex ideas confidently, participate in detailed discussions, and communicate opinions with precision and clarity.",
    },
    {
      title: "Comprehensive Listening Skills",
      desc: "Understand extended speeches, university lectures, interviews, debates, documentaries, and complex discussions, including implied meanings and attitudes.",
    },
    {
      title: "Critical Reading Skills",
      desc: "Read, analyse, and interpret demanding academic articles, professional reports, literary texts, and complex documents.",
    },
    {
      title: "Academic & Professional Writing",
      desc: "Produce well-organised essays, reports, formal letters, professional emails, summaries, and argumentative texts using sophisticated vocabulary and grammatical structures.",
    },
    {
      title: "Expressing & Defending Arguments",
      desc: "Present well-supported opinions, evaluate different perspectives, justify conclusions, and participate confidently in debates.",
    },
    {
      title: "Academic German Communication",
      desc: "Develop essential language skills for university lectures, seminars, academic presentations, research discussions, and higher education environments.",
    },
    {
      title: "Professional German Communication",
      desc: "Communicate effectively in workplace meetings, interviews, presentations, negotiations, and professional correspondence.",
    },
    {
      title: "Presentation & Public Speaking Skills",
      desc: "Deliver structured presentations, explain complex subjects, respond to challenging questions, and engage audiences effectively.",
    },
    {
      title: "Advanced Vocabulary Development",
      desc: "Expand your knowledge of academic terminology, professional vocabulary, idiomatic expressions, collocations, and sophisticated language structures.",
    },
    {
      title: "Analytical & Critical Thinking",
      desc: "Analyse information, compare different viewpoints, evaluate arguments, and communicate reasoned conclusions in German.",
    },
    {
      title: "Understanding Implicit Meaning",
      desc: "Recognise subtle differences in meaning, tone, style, attitudes, and intentions in spoken and written German.",
    },
    {
      title: "Formal & Informal Communication",
      desc: "Adapt your language appropriately according to professional, academic, social, and cultural contexts.",
    },
    {
      title: "German Culture & Communication Etiquette",
      desc: "Develop a deeper understanding of German-speaking societies, cultural conventions, academic expectations, and workplace communication.",
    },
    {
      title: "Goethe-Zertifikat/Telc/ÖSD C1 Exam Preparation",
      desc: "Practise all four examination modules—Hören (Listening), Lesen (Reading), Schreiben (Writing), and Sprechen (Speaking)—through advanced exercises, mock examinations, and targeted examination strategies.",
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
          alt="German Language Course C1 Advanced Level - Gyanshala Foreign Language Academy"
          fill
          priority
          className="object-cover object-center z-0 brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-[0.06em] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              GERMAN C1 LEVEL
            </h1>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-[22px] text-white font-medium italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
              Master Advanced German and Communicate with Confidence in Academic and Professional Environments! 🇩🇪
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
                German Language Course – C1 (Advanced Level)
              </h2>
            </div>

            <h4 className="text-2xl sm:text-3xl lg:text-[28px] font-bold italic text-[#C00000] leading-snug">
              Master Advanced German and Communicate with Confidence in Academic and Professional Environments! 🇩🇪
            </h4>

            <div
              className="space-y-4 text-zinc-900 dark:text-zinc-100 text-base sm:text-lg lg:text-[21px] leading-[1.55] italic font-medium tracking-normal"
              style={{
                fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                letterSpacing: "0em",
              }}
            >
              <p>
                The German C1 Course is designed for learners who have successfully completed the B2 level or possess equivalent German language proficiency. This advanced-level course focuses on developing a high degree of fluency, mastering sophisticated grammatical structures, expanding academic and professional vocabulary, and enhancing communication skills for complex real-life situations.
              </p>
              <p>
                At the C1 level, students learn to understand a wide range of demanding, longer texts and recognise implicit meanings, enabling them to interpret complex information, academic materials, professional documents, and detailed discussions effectively.
              </p>
              <p>
                Learners develop the ability to express themselves fluently and spontaneously without frequently searching for words or expressions. They become capable of using German flexibly and effectively for social, academic, and professional purposes.
              </p>
              <p>
                The course places special emphasis on advanced speaking, academic writing, critical reading, comprehensive listening, structured presentations, and professional communication, helping students express complex ideas accurately, confidently, and naturally.
              </p>
              <p>
                Students also learn to produce clear, well-structured, and detailed texts on complex subjects while demonstrating controlled use of organisational patterns, connectors, and cohesive language.
              </p>
              <p>
                This course is particularly beneficial for international students, university applicants, researchers, healthcare professionals, doctors, engineers, skilled professionals, and individuals planning to pursue higher education or advanced career opportunities in Germany, Austria, or Switzerland.
              </p>
              <p>
                The course also provides comprehensive preparation for the <strong>Goethe-Zertifikat C1</strong>, <strong>telc Deutsch C1 (including telc C1 Hochschule)</strong> &amp; <strong>ÖSD Zertifikat C1</strong> examinations.
              </p>
            </div>
          </FadeInUp>

          {/* SECTION 2: KEY HIGHLIGHTS */}
          <FadeInUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { label: "CEFR Level", val: "C1 Advanced" },
                { label: "Prerequisite", val: "German B2 Level" },
                { label: "Focus", val: "Academic & Research" },
                { label: "Next Stage", val: "C2 Mastery" },
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
                After successfully completing the German C1 course, students will be able to understand complex and demanding German texts, communicate fluently and spontaneously, participate in advanced discussions, express sophisticated ideas, and produce clear, well-structured academic and professional written communication.
              </p>
              <p>
                Learners will gain the confidence and language proficiency necessary to function effectively in university environments, professional workplaces, research institutions, and advanced social situations in German-speaking countries.
              </p>
              <p>
                The C1 level is particularly valuable for individuals pursuing <strong>German university admission, postgraduate education, research opportunities, professional careers, and specialised employment</strong>, subject to the specific language certification and admission requirements of the relevant university, employer, or professional authority.
              </p>
              <p className="text-[#C00000] font-bold not-italic">
                Recommended Prerequisite: German B2 Level or equivalent knowledge. Ready to advance towards the C2 Proficiency Level!
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
