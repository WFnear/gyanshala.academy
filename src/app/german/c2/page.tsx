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
  title: "German C2 Course (Mastery & Proficiency Level) | Gyanshala Academy",
  description:
    "Achieve near-native German proficiency. Master complex academic, literary, and professional communication. Comprehensive preparation for Goethe-Zertifikat C2 (GDS), telc C2, and ÖSD C2 in Jaipur.",
};

export default function GermanC2Page() {
  const whatYouLearn = [
    {
      title: "Mastery of German Communication",
      desc: "Communicate fluently, spontaneously, and accurately in complex academic, professional, and social situations.",
    },
    {
      title: "Advanced Grammar Mastery",
      desc: "Refine your command of sophisticated grammatical structures, complex sentence constructions, stylistic variations, advanced passive forms, Konjunktiv I and II, and nuanced language usage.",
    },
    {
      title: "Exceptional Speaking Skills",
      desc: "Express complex thoughts effortlessly, participate in high-level discussions, and communicate with precision, clarity, and confidence.",
    },
    {
      title: "Advanced Listening Comprehension",
      desc: "Understand virtually all forms of spoken German, including rapid conversations, academic lectures, debates, interviews, and specialised discussions, with appropriate familiarity with regional accents.",
    },
    {
      title: "Critical Reading & Interpretation",
      desc: "Analyse and interpret complex academic publications, professional documents, literary works, research articles, and sophisticated written texts.",
    },
    {
      title: "Professional & Academic Writing",
      desc: "Produce highly structured essays, detailed reports, research summaries, formal correspondence, critical analyses, and complex argumentative texts.",
    },
    {
      title: "Precise Expression of Ideas",
      desc: "Communicate subtle differences in meaning, express nuanced opinions, and present arguments using sophisticated vocabulary and appropriate linguistic structures.",
    },
    {
      title: "Advanced Public Speaking",
      desc: "Deliver professional presentations, academic lectures, formal speeches, and persuasive arguments with excellent organisation and clarity.",
    },
    {
      title: "Academic & Research Communication",
      desc: "Develop the language competence needed for advanced university studies, research discussions, academic publications, and scholarly presentations.",
    },
    {
      title: "Professional Communication Excellence",
      desc: "Participate effectively in high-level business meetings, professional negotiations, technical discussions, interviews, and specialised workplace communication.",
    },
    {
      title: "Advanced Vocabulary & Idiomatic Expressions",
      desc: "Master sophisticated vocabulary, idiomatic phrases, collocations, figurative language, and complex expressions used by proficient German speakers.",
    },
    {
      title: "Understanding Cultural & Linguistic Nuances",
      desc: "Recognise humour, irony, implied meanings, regional variations, cultural references, and subtle differences in communication styles.",
    },
    {
      title: "Critical Thinking & Argumentation",
      desc: "Analyse complex information, synthesise ideas from multiple sources, evaluate contrasting viewpoints, and construct convincing arguments.",
    },
    {
      title: "Advanced Summarising & Paraphrasing",
      desc: "Summarise lengthy written and spoken information accurately while maintaining the original meaning, tone, and logical structure.",
    },
    {
      title: "Formal, Informal & Specialist Language",
      desc: "Adapt communication styles effectively according to academic, professional, social, and cultural contexts.",
    },
    {
      title: "Translation & Interpretation Skills",
      desc: "Develop advanced skills in understanding, paraphrasing, and accurately conveying complex German-language content.",
    },
    {
      title: "Independent Language Usage",
      desc: "Use German confidently and effectively across virtually all familiar and unfamiliar communication situations.",
    },
    {
      title: "Goethe-Zertifikat/Telc/ÖSD C2 Exam Preparation",
      desc: "Practise all four examination modules—Hören (Listening), Lesen (Reading), Schreiben (Writing), and Sprechen (Speaking)—through advanced exercises, examination simulations, and targeted preparation strategies.",
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
          alt="German Language Course C2 Mastery Level - Gyanshala Foreign Language Academy"
          fill
          priority
          className="object-cover object-center z-0 brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-[0.06em] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              GERMAN C2 LEVEL
            </h1>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-[22px] text-white font-medium italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
              Achieve the Highest Level of German Language Proficiency and Communicate with Exceptional Fluency and Precision! 🇩🇪
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
                German Language Course – C2 (Mastery / Proficiency Level)
              </h2>
            </div>

            <h4 className="text-2xl sm:text-3xl lg:text-[28px] font-bold italic text-[#C00000] leading-snug">
              Achieve the Highest Level of German Language Proficiency and Communicate with Exceptional Fluency and Precision! 🇩🇪
            </h4>

            <div
              className="space-y-4 text-zinc-900 dark:text-zinc-100 text-base sm:text-lg lg:text-[21px] leading-[1.55] italic font-medium tracking-normal"
              style={{
                fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                letterSpacing: "0em",
              }}
            >
              <p>
                The German C2 Course is designed for advanced learners who have successfully completed the C1 level or possess equivalent German language proficiency. As the highest level of the Common European Framework of Reference for Languages (CEFR), the C2 course focuses on achieving exceptional linguistic competence, sophisticated communication skills, and near-native proficiency in understanding and using the German language.
              </p>
              <p>
                At the C2 level, students develop the ability to understand virtually everything they hear or read with ease, including complex academic materials, specialised professional documents, literary works, and sophisticated discussions.
              </p>
              <p>
                Learners acquire the skills to summarise information from different spoken and written sources, reconstruct arguments and explanations, and present complex ideas coherently and logically.
              </p>
              <p>
                The course enables students to express themselves spontaneously, fluently, and precisely, while distinguishing subtle shades of meaning even in highly complex situations.
              </p>
              <p>
                Special emphasis is placed on advanced linguistic accuracy, academic excellence, professional communication, critical analysis, sophisticated writing, and effective public speaking.
              </p>
              <p>
                Students develop greater command of idiomatic expressions, advanced vocabulary, cultural nuances, and complex grammatical structures, allowing them to communicate naturally and effectively across a wide range of academic, professional, and social environments.
              </p>
              <p>
                This course is particularly suitable for university students, researchers, academics, doctors, healthcare professionals, engineers, translators, language educators, international professionals, and individuals seeking the highest level of German language proficiency.
              </p>
              <p>
                The course also provides comprehensive preparation for the <strong>Goethe-Zertifikat C2: Großes Deutsches Sprachdiplom (GDS)</strong>, <strong>telc Deutsch C2</strong> &amp; <strong>ÖSD Zertifikat C2</strong> examinations.
              </p>
            </div>
          </FadeInUp>

          {/* SECTION 2: KEY HIGHLIGHTS */}
          <FadeInUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { label: "CEFR Level", val: "C2 Mastery" },
                { label: "Prerequisite", val: "German C1 Level" },
                { label: "Standard", val: "Near-Native Fluency" },
                { label: "Certification", val: "Goethe C2 (GDS)" },
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
                After successfully completing the German C2 course, students will be able to understand virtually all forms of spoken and written German, communicate effortlessly and spontaneously, express complex ideas with exceptional precision, and produce sophisticated academic and professional texts.
              </p>
              <p>
                Learners will develop a high degree of linguistic independence, enabling them to participate confidently in advanced academic discussions, professional negotiations, research activities, specialised communication, and complex social interactions.
              </p>
              <p>
                At the C2 level, students can distinguish subtle shades of meaning, understand implicit messages, interpret sophisticated texts, and communicate naturally with a high degree of grammatical accuracy and stylistic flexibility.
              </p>
              <p className="text-[#C00000] font-bold not-italic">
                Recommended Prerequisite: German C1 Level or equivalent knowledge. Represents the ultimate mastery of the German language (CEFR C2).
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
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-bold text-white bg-[#BC0202] hover:bg-[#990202] shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book a Free Demo
            </Link>
          </div>
        </FadeInUp>
      </section>

    </main>
  );
}
