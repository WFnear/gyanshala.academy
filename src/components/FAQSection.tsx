"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Josefin_Sans } from "next/font/google";
import { FadeInUp, FadeInScale, AnimatedButton } from "@/components/ScrollReveal";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-josefin",
});

interface FAQItem {
  id: number;
  category: "general" | "courses" | "goethe" | "pathways" | "admission";
  categoryLabel: string;
  question: string;
  answers: string[];
  list?: string[];
  postList?: string[];
}

interface FAQSectionProps {
  isHomepage?: boolean;
  limit?: number;
  showFilters?: boolean;
  showHeading?: boolean;
  showBottomCTA?: boolean;
}

const CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General Questions" },
  { id: "courses", label: "Courses & Learning" },
  { id: "goethe", label: "Goethe Exam" },
  { id: "pathways", label: "Study & Work" },
  { id: "admission", label: "Admission & Fees" },
] as const;

const FAQ_DATA: FAQItem[] = [
  // 1. General Questions
  {
    id: 1,
    category: "general",
    categoryLabel: "General",
    question: "What is Gyanshala Foreign Language Academy?",
    answers: [
      "Gyanshala Foreign Language Academy is a language training institute in Jaipur, Rajasthan, dedicated to helping students, working professionals, and language enthusiasts develop practical foreign language communication skills. Our German language courses focus on grammar, vocabulary, pronunciation, speaking, listening, reading, and writing, with preparation for internationally recognised German language examinations.",
    ],
  },
  {
    id: 2,
    category: "general",
    categoryLabel: "General",
    question: "Which German language courses are offered at Gyanshala Foreign Language Academy?",
    answers: [
      "We offer German language training across the six proficiency levels of the Common European Framework of Reference for Languages (CEFR):",
    ],
    list: [
      "A1 – Beginner Level",
      "A2 – Elementary Level",
      "B1 – Intermediate Level",
      "B2 – Upper-Intermediate Level",
      "C1 – Advanced Level",
      "C2 – Mastery / Proficiency Level",
    ],
    postList: ["Course and batch availability may vary."],
  },
  {
    id: 3,
    category: "general",
    categoryLabel: "General",
    question: "Can I learn German without any previous knowledge?",
    answers: [
      "Absolutely! Our German A1 course is designed for complete beginners. You do not need any previous knowledge of German. The course begins with the alphabet, pronunciation, everyday vocabulary, basic grammar, and simple conversations.",
    ],
  },
  {
    id: 4,
    category: "general",
    categoryLabel: "General",
    question: "Who can join German language courses at Gyanshala?",
    answers: ["Our German language courses are suitable for:"],
    list: [
      "School and college students",
      "University applicants planning to study in Germany",
      "Professionals seeking career opportunities abroad",
      "Nurses, doctors, and healthcare professionals",
      "Ausbildung applicants",
      "Individuals planning to relocate to Germany",
      "Travellers and language enthusiasts",
    ],
  },
  {
    id: 5,
    category: "general",
    categoryLabel: "General",
    question: "Is there any age limit for learning German?",
    answers: [
      "German can be learned at almost any age. Students, working professionals, and adult learners can develop German language skills according to their personal, academic, or career goals. Admission to a particular batch may depend on its eligibility requirements.",
    ],
  },

  // 2. German Language Courses & Learning
  {
    id: 6,
    category: "courses",
    categoryLabel: "Courses & Learning",
    question: "What is the difference between A1, A2, B1, B2, C1, and C2 German levels?",
    answers: ["Each level represents a different stage of German language proficiency:"],
    list: [
      "A1: Learn basic expressions and introduce yourself.",
      "A2: Communicate in simple everyday situations.",
      "B1: Express opinions and communicate independently on familiar topics.",
      "B2: Discuss complex subjects and communicate with greater fluency.",
      "C1: Use German effectively in advanced academic and professional situations.",
      "C2: Demonstrate exceptionally high proficiency and understand virtually everything heard or read.",
    ],
  },
  {
    id: 7,
    category: "courses",
    categoryLabel: "Courses & Learning",
    question: "How long does it take to learn German?",
    answers: [
      "The duration depends on your selected course level, learning ability, class frequency, and practice.",
      "Gyanshala offers structured learning programmes designed to help students progress through each level. Please contact our admissions team for the latest course duration and available batch schedules.",
    ],
  },
  {
    id: 8,
    category: "courses",
    categoryLabel: "Courses & Learning",
    question: "Can I join the A2, B1, B2, or C1 level directly?",
    answers: [
      "Yes. If you already possess sufficient German language knowledge, you may be eligible to join a higher-level course directly. Your existing proficiency should match the requirements of the level you want to study.",
    ],
  },
  {
    id: 9,
    category: "courses",
    categoryLabel: "Courses & Learning",
    question: "Will I learn German grammar and speaking together?",
    answers: ["Yes. Our courses focus on developing all four essential language skills:"],
    list: [
      "Hören – Listening",
      "Lesen – Reading",
      "Schreiben – Writing",
      "Sprechen – Speaking",
    ],
    postList: [
      "Grammar, vocabulary, pronunciation, and conversational practice are integrated into the learning process.",
    ],
  },
  {
    id: 10,
    category: "courses",
    categoryLabel: "Courses & Learning",
    question: "Do you provide German speaking practice during classes?",
    answers: [
      "Yes. Speaking practice is an important component of language training. Students practise introducing themselves, asking questions, participating in conversations, giving presentations, and discussing everyday situations according to their language level.",
    ],
  },
  {
    id: 11,
    category: "courses",
    categoryLabel: "Courses & Learning",
    question: "Are German language classes suitable for working professionals?",
    answers: [
      "Yes. Our courses are suitable for professionals who want to improve their German language skills for employment, career advancement, higher education, or relocation. Working professionals can contact the academy to enquire about suitable batch schedules.",
    ],
  },
  {
    id: 12,
    category: "courses",
    categoryLabel: "Courses & Learning",
    question: "Do you provide study materials and practice exercises?",
    answers: [
      "German language training includes structured lessons, grammar exercises, vocabulary development, reading practice, writing activities, and speaking exercises. The specific learning materials provided depend on the selected course and batch.",
    ],
  },

  // 3. Goethe Examination & Certification
  {
    id: 13,
    category: "goethe",
    categoryLabel: "Goethe Exam",
    question: "Does Gyanshala Foreign Language Academy prepare students for Goethe examinations?",
    answers: [
      "Yes. Our German language training incorporates preparation for the Goethe-Zertifikat examinations at the corresponding language levels. Students practise examination-style questions and activities covering listening, reading, writing, and speaking.",
    ],
  },
  {
    id: 14,
    category: "goethe",
    categoryLabel: "Goethe Exam",
    question: "What is the Goethe-Zertifikat?",
    answers: [
      "The Goethe-Zertifikat is an internationally recognised German language qualification issued by the Goethe-Institut. It assesses German language proficiency according to CEFR levels and may be accepted by educational institutions, employers, and authorities depending on their requirements.",
    ],
  },
  {
    id: 15,
    category: "goethe",
    categoryLabel: "Goethe Exam",
    question: "Can I appear for the Goethe examination after completing my German course?",
    answers: [
      "Yes. Students who have developed the required language proficiency can register for the appropriate Goethe examination, subject to examination availability and the Goethe-Institut's registration requirements.",
      "Completing an academy course does not automatically award a Goethe-Zertifikat. Students must separately register for and pass the official examination.",
    ],
  },
  {
    id: 16,
    category: "goethe",
    categoryLabel: "Goethe Exam",
    question: "Are Goethe examination fees included in the course fees?",
    answers: [
      "The Goethe examination is administered separately by the authorised examination provider. Students should confirm examination registration charges and whether any fees are included in their selected academy programme before enrolling.",
    ],
  },
  {
    id: 17,
    category: "goethe",
    categoryLabel: "Goethe Exam",
    question: "Will I receive a certificate after completing my course?",
    answers: [
      "Please contact Gyanshala Foreign Language Academy for details of its course completion certificates, eligibility criteria, and assessment requirements.",
      "An academy-issued course completion certificate is different from an official Goethe-Zertifikat.",
    ],
  },

  // 4. Studying and Working in Germany
  {
    id: 18,
    category: "pathways",
    categoryLabel: "Study & Work",
    question: "Which German language level is required to study in Germany?",
    answers: [
      "The required German language proficiency depends on the university, degree programme, and language of instruction.",
      "Many German-taught degree programmes require B2 or C1 proficiency, while some accept specific language examinations such as TestDaF, DSH, or recognised Goethe certificates. English-taught programmes may have different language requirements.",
      "Students should always verify the admission requirements of their chosen university.",
    ],
  },
  {
    id: 19,
    category: "pathways",
    categoryLabel: "Study & Work",
    question: "What German language level is required for Ausbildung in Germany?",
    answers: [
      "Many Ausbildung employers and vocational schools require German proficiency at B1 or B2 level, depending on the profession and programme.",
      "Healthcare-related Ausbildung opportunities may have more demanding language requirements.",
    ],
  },
  {
    id: 20,
    category: "pathways",
    categoryLabel: "Study & Work",
    question: "Can nurses and healthcare professionals learn German at Gyanshala?",
    answers: [
      "Yes. Nurses, doctors, physiotherapists, and other healthcare professionals can enrol in German language courses to develop their communication skills.",
      "German language proficiency is often an important part of professional recognition and employment pathways in Germany. The required level and any specialist language examinations depend on the profession and relevant authority.",
    ],
  },
  {
    id: 21,
    category: "pathways",
    categoryLabel: "Study & Work",
    question: "Is B2 German necessary for working in Germany?",
    answers: [
      "Not all jobs require B2 German. Language requirements vary depending on the employer, profession, responsibilities, and applicable regulations.",
      "Some positions may accept A2 or B1 proficiency, while healthcare and other regulated professions may require B2 or higher, including specialist language assessments.",
    ],
  },
  {
    id: 22,
    category: "pathways",
    categoryLabel: "Study & Work",
    question: "Can learning German improve my career opportunities?",
    answers: [
      "Yes. German language proficiency can support opportunities in international education, tourism, customer service, engineering, healthcare, business, translation, and other professional fields.",
      "However, language proficiency alone does not guarantee employment, university admission, visa approval, or professional recognition.",
    ],
  },

  // 5. Admission, Fees & Classes
  {
    id: 23,
    category: "admission",
    categoryLabel: "Admission & Fees",
    question: "How can I enrol in a German language course at Gyanshala?",
    answers: [
      "You can contact the Gyanshala Foreign Language Academy admissions team to enquire about available courses, upcoming batches, fees, class schedules, and the enrolment procedure.",
      "Our team can help you identify a suitable course level based on your previous German language knowledge and learning objectives.",
    ],
  },
  {
    id: 24,
    category: "admission",
    categoryLabel: "Admission & Fees",
    question: "Can I join Gyanshala after completing a German level at another institute?",
    answers: [
      "Yes. Students who have completed previous German language training at another institute may enquire about admission to the next level, provided their existing knowledge meets the course requirements.",
    ],
  },
  {
    id: 25,
    category: "admission",
    categoryLabel: "Admission & Fees",
    question: "What are the German language course fees?",
    answers: [
      "Course fees depend on the German language level and selected programme. Please contact the academy for the latest A1, A2, B1, B2, C1, and C2 course fees, payment arrangements, and applicable terms.",
    ],
  },
  {
    id: 26,
    category: "admission",
    categoryLabel: "Admission & Fees",
    question: "Does Gyanshala offer online and offline German classes?",
    answers: [
      "Please contact the academy to confirm the availability of classroom and online learning options for your preferred German language level. Teaching modes and batch schedules may vary.",
    ],
  },
  {
    id: 27,
    category: "admission",
    categoryLabel: "Admission & Fees",
    question: "How do I choose the right German language level?",
    answers: [
      "If you are a complete beginner, A1 is the appropriate starting point. If you already understand some German, your suitable level depends on your speaking, listening, reading, writing, vocabulary, and grammar skills.",
      "Our admissions team can guide you towards an appropriate programme.",
    ],
  },
  {
    id: 28,
    category: "admission",
    categoryLabel: "Admission & Fees",
    question: "Why should I choose Gyanshala Foreign Language Academy?",
    answers: [
      "Gyanshala Foreign Language Academy focuses on building practical language skills through structured learning and communication-oriented training. Our approach emphasises:",
    ],
    list: [
      "CEFR-aligned German language learning",
      "Grammar and vocabulary development",
      "Speaking and pronunciation practice",
      "Listening, reading, and writing exercises",
      "Goethe examination-oriented preparation",
      "Progressive learning from beginner to advanced levels",
      "Language skills for education, employment, and everyday communication",
    ],
    postList: [
      "Our goal is to help learners build a strong foundation and develop the confidence to use German effectively in real-life situations.",
    ],
  },
];

export default function FAQSection({
  isHomepage = false,
  limit,
  showFilters = true,
  showHeading = true,
  showBottomCTA,
}: FAQSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openIds, setOpenIds] = useState<number[]>([1]); // First FAQ open by default
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleFAQ = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // If on homepage, default to 8 items (4 left, 4 right) for balanced 2 columns
  const effectiveLimit = isHomepage ? (limit ?? 8) : limit;

  const filteredFAQs = isHomepage
    ? FAQ_DATA.slice(0, effectiveLimit)
    : FAQ_DATA.filter((item) => {
        const matchesCategory =
          selectedCategory === "all" || item.category === selectedCategory;
        const matchesSearch =
          searchQuery.trim() === "" ||
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answers.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.list && item.list.some((l) => l.toLowerCase().includes(searchQuery.toLowerCase())));
        return matchesCategory && matchesSearch;
      });

  // Distribute items into 2 columns (left and right) for the minimalist design
  const midPoint = Math.ceil(filteredFAQs.length / 2);
  const col1 = filteredFAQs.slice(0, midPoint);
  const col2 = filteredFAQs.slice(midPoint);

  const renderFAQItem = (faq: FAQItem) => {
    const isOpen = openIds.includes(faq.id);

    return (
      <div
        key={faq.id}
        className="border-b border-zinc-200/80 dark:border-zinc-800 transition-colors"
      >
        {/* Minimalist Question Row */}
        <button
          type="button"
          onClick={() => toggleFAQ(faq.id)}
          className="w-full text-left py-4 sm:py-5 flex items-start justify-between gap-4 group focus:outline-none cursor-pointer"
          aria-expanded={isOpen}
        >
          <span className="text-base sm:text-[17px] lg:text-lg font-normal text-zinc-900 dark:text-zinc-100 group-hover:text-[#C00000] dark:group-hover:text-white transition-colors leading-snug">
            {faq.question}
          </span>

          {/* Plus / Minus Indicator */}
          <span className="flex-shrink-0 text-xl font-light text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors select-none w-6 h-6 flex items-center justify-center">
            {isOpen ? "—" : "+"}
          </span>
        </button>

        {/* Answer Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pb-5 pt-1 text-sm sm:text-[15px] md:text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed space-y-3">
                {faq.answers.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}

                {faq.list && faq.list.length > 0 && (
                  <ul className="space-y-1.5 pl-4 border-l-2 border-[#BC0202]/30 py-1 my-2">
                    {faq.list.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                        <span className="text-[#BC0202] font-bold select-none">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {faq.postList && faq.postList.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section id="faqs" className={`py-14 sm:py-20 lg:py-24 bg-[#F5EFE3] dark:bg-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800 ${josefin.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        {showHeading && (
          <FadeInUp className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
              FAQ
            </h2>
          </FadeInUp>
        )}

        {/* Search Bar & Category Filter (Shown only on dedicated /faqs page) */}
        {!isHomepage && showFilters && (
          <div className="mb-10 sm:mb-12 space-y-4 max-w-3xl mx-auto">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search questions by keyword (e.g., fees, Goethe, B2, Ausbildung)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 text-sm bg-[#FFFAF3] dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 rounded-none focus:outline-none focus:border-[#BC0202] dark:focus:border-[#BC0202] transition-colors"
              />
              <svg
                className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-400 dark:text-zinc-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-3 text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 px-1"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {CATEGORIES.map((cat) => {
                const count =
                  cat.id === "all"
                    ? FAQ_DATA.length
                    : FAQ_DATA.filter((item) => item.category === cat.id).length;
                const isActive = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-none border transition-all ${
                      isActive
                        ? "bg-[#BC0202] text-white border-[#BC0202] shadow-sm"
                        : "bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                    }`}
                  >
                    {cat.label} ({count})
                  </button>
                );
              })}
            </div>

            {/* Results Counter if search query is active */}
            {searchQuery && (
              <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
                Found {filteredFAQs.length} matching question{filteredFAQs.length === 1 ? "" : "s"}
              </p>
            )}
          </div>
        )}

        {/* Minimalist 2-Column Grid */}
        {filteredFAQs.length === 0 ? (
          <div className="py-12 text-center border border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              No questions found matching your search. Try a different keyword or view all categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-3 text-xs font-semibold text-[#BC0202] hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16">
            {/* Column 1 (Left) */}
            <div className="space-y-0">
              {col1.map((faq) => renderFAQItem(faq))}
            </div>

            {/* Column 2 (Right) */}
            <div className="space-y-0">
              {col2.map((faq) => renderFAQItem(faq))}
            </div>
          </div>
        )}

        {/* Read More Button on Homepage */}
        {isHomepage && (
          <FadeInUp delay={0.12} className="mt-10 sm:mt-12 flex justify-center">
            <AnimatedButton>
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#ECBB0C] hover:bg-[#d9ab0b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-none shadow-md hover:shadow-lg transition-all group"
              >
                <span>READ MORE FAQS →</span>
              </Link>
            </AnimatedButton>
          </FadeInUp>
        )}

        {/* Bottom CTA Block with Background Image (Hidden on Homepage) */}
        {(showBottomCTA ?? !isHomepage) && (
          <FadeInScale delay={0.1} className="relative mt-12 sm:mt-16 overflow-hidden rounded-none border border-zinc-300 dark:border-zinc-800 shadow-xl">
            {/* Background Image: 100% Appearance, No Black Shadow */}
            <Image
              src="/StillHaveQuestions.jpg"
              alt="Still Have Questions - Gyanshala Foreign Language Academy"
              fill
              className="object-cover object-center z-0"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl text-white">
                <span className="inline-block px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest bg-[#BC0202] text-white rounded-none">
                  Still Have Questions?
                </span>
                <h3 className="mt-2.5 text-lg sm:text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  Start Your German Language Journey with Gyanshala Foreign Language Academy!
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-white font-medium leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                  Whether you are a beginner or an advanced learner, our German language courses are designed to help you strengthen your language skills and work towards your academic, professional, and personal goals.
                </p>
                <p className="mt-2 text-xs font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                  Learn German. Build Confidence. Explore Global Opportunities.
                </p>
              </div>
              <div className="flex-shrink-0 w-full sm:w-auto">
                <AnimatedButton>
                  <Link
                    href="/enquiry"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 bg-[#ECBB0C] hover:bg-[#d9ab0b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-none shadow-md hover:shadow-lg transition-all"
                  >
                    ENQUIRE NOW &amp; GET FREE COUNSELING →
                  </Link>
                </AnimatedButton>
              </div>
            </div>
          </FadeInScale>
        )}

      </div>
    </section>
  );
}
