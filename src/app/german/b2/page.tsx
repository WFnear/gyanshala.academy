import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "German B2 Course (Upper-Intermediate Level) | Gyanshala Academy",
  description:
    "Achieve advanced communication skills. Crucial for healthcare & nursing jobs in Germany, university studies, and Goethe-Zertifikat B2, telc B2, and ÖSD B2 exams in Jaipur.",
};

export default function GermanB2Page() {
  const whatYouLearn = [
    {
      title: "Fluent German Communication",
      desc: "Communicate confidently and spontaneously with native German speakers on a wide range of everyday, academic, and professional topics.",
    },
    {
      title: "Advanced German Grammar",
      desc: "Master complex sentence structures, passive voice, Konjunktiv II, relative clauses, advanced conjunctions, prepositions, and sophisticated grammatical constructions.",
    },
    {
      title: "Speaking Skills",
      desc: "Participate in detailed discussions, express opinions, defend arguments, and communicate ideas clearly and logically.",
    },
    {
      title: "Listening Skills",
      desc: "Understand extended conversations, interviews, presentations, news reports, and discussions involving complex topics in standard German.",
    },
    {
      title: "Reading Skills",
      desc: "Read and analyse complex articles, reports, professional documents, academic texts, and contemporary literature appropriate to the B2 level.",
    },
    {
      title: "Advanced Writing Skills",
      desc: "Write well-structured formal emails, professional correspondence, essays, reports, and opinion-based texts using accurate grammar and appropriate vocabulary.",
    },
    {
      title: "Expressing & Defending Opinions",
      desc: "Present arguments effectively, discuss advantages and disadvantages, justify viewpoints, and respond appropriately to different perspectives.",
    },
    {
      title: "Professional German Communication",
      desc: "Develop essential language skills for workplace meetings, professional presentations, job interviews, and communication with colleagues.",
    },
    {
      title: "Academic Communication Skills",
      desc: "Understand lectures, participate in academic discussions, and express ideas using more sophisticated language structures.",
    },
    {
      title: "Presentation & Discussion Skills",
      desc: "Prepare structured presentations, communicate complex information, and participate actively in debates and group discussions.",
    },
    {
      title: "Problem-Solving & Negotiation",
      desc: "Discuss solutions, make suggestions, negotiate effectively, and respond appropriately in challenging communication situations.",
    },
    {
      title: "Vocabulary Development",
      desc: "Expand your vocabulary through advanced expressions, idiomatic phrases, professional terminology, and topic-specific language.",
    },
    {
      title: "Understanding German Culture",
      desc: "Develop greater awareness of social conventions, workplace communication, and cultural practices in German-speaking countries.",
    },
    {
      title: "Goethe-Zertifikat/Telc/ÖSD B2 Exam Preparation",
      desc: "Practise all four examination modules—Hören (Listening), Lesen (Reading), Schreiben (Writing), and Sprechen (Speaking)—with targeted exercises, mock examinations, and exam-oriented strategies.",
    },
  ];

  return (
    <main className="w-full overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      
      {/* =========================================================================
          HERO SECTION (SAME DESIGN AS ABOUT US)
          ========================================================================= */}
      <section className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px] flex flex-col items-center justify-center overflow-hidden py-14 sm:py-16 md:py-20 text-white text-center bg-zinc-950">
        <Image
          src="/Hero/hero3.jpg"
          alt="German Language Course B2 Upper-Intermediate Level - Gyanshala Foreign Language Academy"
          fill
          priority
          className="object-cover object-center z-0 brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-[0.06em] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              GERMAN B2 LEVEL
            </h1>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-[22px] text-white font-medium italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
              Achieve Advanced Communication Skills and Speak German with Confidence!
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
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] leading-none mb-3 sm:mb-4">
                COURSE OVERVIEW
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-zinc-900 dark:text-zinc-100 tracking-normal leading-tight mb-4">
                German Language Course – B2 (Upper-Intermediate Level)
              </h2>
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl lg:text-[30px] font-normal italic text-[#A61911] leading-snug">
              Achieve Advanced Communication Skills and Speak German with Confidence!
            </h4>

            <div className="space-y-4 sm:space-y-5 text-zinc-700 dark:text-zinc-300 text-base sm:text-lg lg:text-[17.5px] leading-[1.75] font-normal not-italic tracking-normal">
              <p>
                The German B2 Course is designed for learners who have successfully completed the B1 level or possess equivalent German language proficiency. This upper-intermediate course focuses on developing greater fluency, improving grammatical accuracy, expanding vocabulary, and strengthening communication skills for academic, professional, and everyday situations.
              </p>
              <p>
                At the B2 level, students learn to understand the main ideas of complex texts on both concrete and abstract topics, including technical discussions related to their fields of interest or professional expertise.
              </p>
              <p>
                Learners develop the ability to interact with native German speakers with a considerable degree of fluency and spontaneity, making regular conversations possible without significant difficulty for either participant.
              </p>
              <p>
                The course emphasizes advanced grammar, structured writing, effective speaking, critical thinking, and comprehensive listening skills, enabling students to express opinions, participate in detailed discussions, present arguments, and explain different viewpoints clearly and confidently.
              </p>
              <p>
                Students also learn to produce clear, detailed texts on a wide range of subjects, explain advantages and disadvantages, and communicate effectively in professional and academic environments.
              </p>
              <p>
                This course is particularly beneficial for international students, healthcare professionals, nurses, doctors, engineers, skilled workers, Ausbildung applicants, and individuals planning to pursue higher education or professional careers in Germany, Austria, or Switzerland.
              </p>
              <p>
                The course also provides comprehensive preparation for the <strong>Goethe-Zertifikat B2</strong>, <strong>telc Deutsch B2 (including telc B1-B2 Pflege)</strong> &amp; <strong>ÖSD Zertifikat B2</strong> examinations.
              </p>
            </div>
          </FadeInUp>

          {/* SECTION 2: KEY HIGHLIGHTS */}
          <FadeInUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { label: "CEFR Level", val: "B2 Upper-Int." },
                { label: "Prerequisite", val: "German B1 Level" },
                { label: "Mandatory For", val: "Nursing & Healthcare" },
                { label: "Next Stage", val: "C1 Advanced" },
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
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] leading-none mb-3">
                CURRICULUM &amp; MODULES
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-zinc-900 dark:text-zinc-100 tracking-normal leading-tight">
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
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed pl-4 font-normal not-italic">
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
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] leading-none mb-3">
                OUTCOMES &amp; PROGRESSION
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-zinc-900 dark:text-zinc-100 tracking-normal leading-tight">
                Learning Outcome
              </h2>
            </div>

            <div className="p-6 sm:p-8 bg-white/95 dark:bg-zinc-900/95 border border-zinc-200/90 dark:border-zinc-800 shadow-sm space-y-3 text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-[1.75] font-normal not-italic">
              <p>
                After successfully completing the German B2 course, students will be able to communicate fluently and spontaneously, understand complex written and spoken German, express detailed opinions, participate in professional discussions, and produce clear, well-structured written texts.
              </p>
              <p>
                Learners will develop the language skills necessary to communicate more independently and effectively in academic, professional, and social environments in German-speaking countries.
              </p>
              <p>
                The B2 level is particularly valuable for individuals seeking opportunities in <strong>German healthcare, nursing, skilled employment, vocational training (Ausbildung), and selected higher education programmes</strong>, depending on the specific language proficiency and certification requirements of institutions, employers, and professional licensing authorities.
              </p>
              <p className="text-[#A61911] font-bold not-italic">
                Recommended Prerequisite: German B1 Level or equivalent knowledge. Ready to advance to C1 Advanced Level!
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
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] font-normal text-white tracking-[-0.01em] leading-tight drop-shadow-sm">
            Start Your German Learning Journey Today
          </h2>

          <p className="text-base sm:text-lg lg:text-[20px] text-white/90 max-w-2xl mx-auto leading-[1.6] font-normal not-italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
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
