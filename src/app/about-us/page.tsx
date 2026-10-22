import type { Metadata } from "next";
import Link from "next/link";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | Gyanshala Foreign Language Academy - Jaipur",
  description:
    "Learn about Gyanshala Foreign Language Academy: our journey since 2018, mission, vision, goals, faculty, and pathways to global opportunities.",
};

export default function AboutUsPage() {
  const missionVisionGoals = [
    {
      title: "Our Mission",
      badge: "Mission",
      icon: (
        <svg className="w-6 h-6 text-[#BC0202]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0a9 9 0 009-9M12 3a9 9 0 019 9m-9 9c-3 0-5.5-2.5-5.5-5.5S8.5 10 12 10s5.5 2.5 5.5 5.5S15 21 12 21z" />
        </svg>
      ),
      content:
        "Our mission at Gyanshala Foreign Language Academy is to deliver high-quality German language classes in Jaipur that are structured, practical, and aligned with international standards. We aim to help learners communicate confidently in German and prepare effectively for academic, professional, and exam-related goals.",
    },
    {
      title: "Our Vision",
      badge: "Vision",
      icon: (
        <svg className="w-6 h-6 text-[#BC0202]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      content:
        "Our vision is to become a trusted and leading German language institute in Jaipur, recognised for academic excellence, practical teaching methods, and student success. We aspire to empower learners with strong German language skills and connect them to global opportunities in education, employment, and professional development.",
    },
    {
      title: "Our Goals",
      badge: "Goals",
      icon: (
        <svg className="w-6 h-6 text-[#BC0202]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      goals: [
        "Offer CEFR-aligned German language courses from A1 to C2.",
        "Develop speaking, listening, reading, and writing skills through practical learning.",
        "Prepare students for Goethe-Institut and telc examinations with practice tests and targeted guidance.",
        "Provide personalised learning through small batches, individual attention, and supportive teaching.",
      ],
    },
  ];

  const whyChoosePoints = [
    {
      number: "01",
      title: "Experienced German Language Trainers",
      description: "Learn from qualified and dedicated German language experts.",
      icon: (
        <svg className="w-6 h-6 text-[#BC0202]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "German Courses from A1 to C2",
      description: "Progress step by step from beginner to advanced proficiency.",
      icon: (
        <svg className="w-6 h-6 text-[#BC0202]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Spoken German & Exam Preparation",
      description: "Develop practical communication skills and prepare for recognised examinations.",
      icon: (
        <svg className="w-6 h-6 text-[#BC0202]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v5.018z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Flexible Batch Timings",
      description: "Choose a batch that fits your daily schedule.",
      icon: (
        <svg className="w-6 h-6 text-[#BC0202]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Affordable German Classes in Jaipur",
      description: "Quality German language training at reasonable fees.",
      icon: (
        <svg className="w-6 h-6 text-[#BC0202]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6H2.25m0 0v10.5m0-10.5h19.5m0 0v10.5m-19.5 0h19.5" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "Online and Offline Classes",
      description: "Learn through online sessions or in-person classroom training.",
      icon: (
        <svg className="w-6 h-6 text-[#BC0202]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
      description: "German Academic Exchange Service for study & scholarships in Germany.",
      category: "Academic & Scholarships",
    },
    {
      name: "German Radio",
      url: "https://www.deutschland.fm/",
      description: "Live German radio stations for daily listening practice & immersion.",
      category: "Listening & Immersion",
    },
    {
      name: "Goethe-Institut",
      url: "https://www.goethe.de/ins/in/en/sta/del.html",
      description: "Official German cultural institute & worldwide language certifications.",
      category: "Certification & Culture",
    },
    {
      name: "telc Exam",
      url: "https://deutsch-pruefung.de/",
      description: "Official European Language Certificates exam preparation & guidance.",
      category: "Proficiency Exams",
    },
    {
      name: "Deutsche Welle (DW)",
      url: "https://www.dw.com/",
      description: "Germany's international broadcaster with dedicated free German learning.",
      category: "News & Learning Media",
    },
    {
      name: "Germany in India",
      url: "https://india.diplo.de/",
      description: "Official portal of the German Missions in India (Visas & Consular).",
      category: "Official Diplomatic Mission",
    },
    {
      name: "Make it in Germany",
      url: "https://www.make-it-in-germany.com/en/",
      description: "Federal Government portal for qualified professionals & Ausbildung.",
      category: "Careers & Immigration",
    },
  ];

  return (
    <main className="w-full overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      
      {/* =========================================================================
          SECTION 1 · ABOUT US HERO
          ========================================================================= */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-zinc-50 via-white to-zinc-50/50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs & Hero Heading */}
          <FadeInUp>
            <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              <Link href="/" className="hover:text-[#BC0202] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-zinc-800 dark:text-zinc-200 font-semibold">About Us</span>
            </nav>

            <div className="max-w-3xl">
              {/* Small Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#BC0202] bg-red-50 dark:bg-red-950/40 border border-red-200/60 dark:border-red-900/40 mb-4">
                <span>🇩🇪</span> Gyanshala Foreign Language Academy
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
                About Gyanshala Foreign Language Academy
              </h1>

              {/* Subheading */}
              <p className="mt-4 text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Empowering learners with German language skills, expert guidance, and pathways to global opportunities since 2018.
              </p>
            </div>
          </FadeInUp>

          {/* Large Responsive Hero Image Placeholder */}
          <FadeInUp delay={0.15}>
            <div className="mt-8 sm:mt-12 w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl bg-zinc-100 dark:bg-zinc-900 border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex flex-col items-center justify-center p-6 text-center shadow-xs">
              <div className="w-16 h-16 rounded-2xl bg-red-50 dark:bg-red-950/50 text-[#BC0202] flex items-center justify-center mb-3 border border-red-100 dark:border-red-900/40">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <p className="text-base sm:text-lg font-bold text-zinc-800 dark:text-zinc-200">
                About Us Hero Image Placeholder
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 max-w-md">
                High-resolution academy campus, classroom, or orientation banner (16:9 / 21:9 responsive ratio)
              </p>
            </div>
          </FadeInUp>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2 · OUR JOURNEY
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Content Column */}
            <FadeInUp className="lg:col-span-7 space-y-5">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#BC0202]">
                OUR STORY
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-snug">
                Our Journey Since 2018
              </h2>

              <div className="space-y-4 text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Gyanshala – Foreign Language Academy was established in 2018 as an initiative to support students in their learning journey, provide a global platform, and help them achieve their academic goals.
                </p>

                <p>
                  Gyanshala works to connect learners with international educational opportunities and offers language learning, consultation, and student guidance services. The academy aims to help students choose programmes suited to their interests and career goals, while encouraging them to become confident global citizens rooted in their traditions and ready to face the world.
                </p>
              </div>

              {/* Journey Milestones Strip */}
              <div className="pt-2 grid grid-cols-3 gap-3 border-t border-zinc-100 dark:border-zinc-800 text-center">
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900">
                  <p className="text-xl sm:text-2xl font-black text-[#BC0202]">2018</p>
                  <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">Founded</p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900">
                  <p className="text-xl sm:text-2xl font-black text-[#BC0202]">A1–C2</p>
                  <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">CEFR Levels</p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900">
                  <p className="text-xl sm:text-2xl font-black text-[#BC0202]">Jaipur</p>
                  <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">Center</p>
                </div>
              </div>
            </FadeInUp>

            {/* Visual Column: Image Placeholder */}
            <FadeInUp delay={0.15} className="lg:col-span-5 relative">
              <div className="w-full aspect-[4/3] rounded-2xl bg-zinc-100 dark:bg-zinc-900 border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex flex-col items-center justify-center p-6 text-center shadow-xs">
                <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-950/50 text-[#BC0202] flex items-center justify-center mb-3 border border-red-100 dark:border-red-900/40">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                  Our Journey Image Placeholder
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-[240px]">
                  Gyanshala journey, classrooms &amp; students batch memories (4:3 aspect ratio)
                </p>
              </div>

              {/* Established Pill */}
              <div className="absolute -bottom-4 right-4 sm:-bottom-5 sm:right-6 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white px-3.5 py-2 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#BC0202] text-white flex items-center justify-center font-black text-xs">
                  18
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold leading-none">Established</p>
                  <p className="text-xs font-bold text-zinc-900 dark:text-white leading-tight">2018 • Jaipur</p>
                </div>
              </div>
            </FadeInUp>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 · OUR MISSION, VISION & GOALS
          ========================================================================= */}
      {/* =========================================================================
          SECTION 3 · OUR MISSION, VISION & GOALS
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 bg-zinc-50/60 dark:bg-zinc-900/30 border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeInUp className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#BC0202]">
              PURPOSE &amp; DIRECTION
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Our Mission, Vision &amp; Goals
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Guided by a commitment to academic excellence, student success, and global connectivity.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.08}>
            {missionVisionGoals.map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <div
                  className="h-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/40 flex items-center justify-center mb-5 border border-red-100 dark:border-red-900/50">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                      {item.title}
                    </h3>

                    {item.content && (
                      <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {item.content}
                      </p>
                    )}

                    {item.goals && (
                      <ul className="mt-4 space-y-2.5">
                        {item.goals.map((goal, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-100 dark:bg-red-950/60 text-[#BC0202] text-[10px] font-bold shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-zinc-400">
                    <span>Gyanshala Academy</span>
                    <span className="text-[#BC0202] uppercase tracking-wider">{item.badge}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4 · OUR TEAM
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeInUp className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#BC0202]">
              EXPERIENCED EDUCATORS
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Meet Our Team
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Our dedicated faculty members bring native-level proficiency, structured methodology, and individual mentorship to every batch.
            </p>
          </FadeInUp>

          {/* Responsive Faculty Grid: 3 columns desktop, 2 tablet, 1-2 mobile */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto" staggerDelay={0.08}>
            {[1, 2, 3].map((memberIndex) => (
              <StaggerItem key={memberIndex} className="h-full">
                <div
                  className="h-full rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                >
                  {/* Faculty Photo Placeholder */}
                  <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-800/60 border-b border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-zinc-800 text-[#BC0202] flex items-center justify-center shadow-xs mb-2">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                      Faculty Photo Placeholder
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      Trainer {memberIndex} • Official Photo
                    </p>
                  </div>

                  {/* Faculty Details */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#BC0202] bg-red-50 dark:bg-red-950/40 border border-red-200/50 mb-2">
                        German Language Trainer
                      </span>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                        Faculty Member {memberIndex}
                      </h3>
                      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
                        Senior German Language Faculty
                      </p>
                      <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                        Certified German Instructor (CEFR C1/C2) with extensive experience in Goethe-Zertifikat and telc exam preparation.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
                      <span>Batch Mentorship</span>
                      <span className="font-semibold text-zinc-600 dark:text-zinc-300">A1 — C2</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp delay={0.2}>
            <p className="text-center text-xs text-zinc-400 dark:text-zinc-500 mt-6">
              Detailed instructor profiles and verified credentials are provided during batch enrollment and orientation.
            </p>
          </FadeInUp>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5 · WHY CHOOSE GYANSHALA?
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 bg-zinc-50/60 dark:bg-zinc-900/30 border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeInUp className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#BC0202]">
              WHY LEARN WITH US
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Why Choose Gyanshala?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Practical language learning combined with exam excellence, individual attention, and flexible study options.
            </p>
          </FadeInUp>

          {/* 6 Clean Cards */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.06}>
            {whyChoosePoints.map((point) => (
              <StaggerItem key={point.number} className="h-full">
                <div
                  className="h-full p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/40 flex items-center justify-center border border-red-100 dark:border-red-900/50">
                        {point.icon}
                      </div>
                      <span className="text-xs font-black text-zinc-400 dark:text-zinc-600 tracking-wider">
                        {point.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-snug">
                      {point.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {point.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-2 text-xs font-semibold text-[#BC0202]">
                    <span>Gyanshala Advantage</span>
                    <span>→</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6 · HIGHLIGHTS OF GYANSHALA
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeInUp className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#BC0202]">
              KEY FEATURES
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Highlights of Gyanshala
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Core highlights of our training methodology and student-focused academic experience.
            </p>
          </FadeInUp>

          {/* 9 Responsive Icon Grid Highlights */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5" staggerDelay={0.05}>
            {highlights.map((item, index) => (
              <StaggerItem key={index} className="h-full">
                <div
                  className="h-full flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-[#BC0202]/50 transition-colors"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white dark:bg-zinc-800 text-xl shrink-0 shadow-xs border border-zinc-200/60 dark:border-zinc-700">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                      Standard Gyanshala curriculum feature
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7 · VIDEO SECTION
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 bg-zinc-50/60 dark:bg-zinc-900/30 border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <FadeInUp className="max-w-2xl mx-auto mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#BC0202]">
              MEDIA &amp; TOUR
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Experience Gyanshala
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Get an insider look at our interactive German classes, faculty interactions, and campus environment.
            </p>
          </FadeInUp>

          {/* Responsive 16:9 Video Placeholder */}
          <FadeInUp delay={0.15}>
            <div className="relative w-full aspect-video rounded-2xl bg-zinc-900 text-white overflow-hidden shadow-2xl border-2 border-dashed border-zinc-700 flex flex-col items-center justify-center p-6 text-center group cursor-pointer">
              {/* Play Button Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#BC0202] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              {/* Placeholder Label */}
              <p className="text-sm sm:text-base md:text-lg font-bold text-white tracking-wide">
                YouTube Video Placeholder — Add Client Video URL
              </p>

              <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-md">
                Embed responsive YouTube iframe or custom player once client video URL is supplied.
              </p>
            </div>
          </FadeInUp>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8 · USEFUL GERMAN LEARNING RESOURCES
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeInUp className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#BC0202]">
              EXTERNAL PORTALS
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Useful German Learning Resources
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Verified official websites, listening stations, and regulatory portals to support your German learning and journey.
            </p>
          </FadeInUp>

          {/* 7 Clean Clickable Cards */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" staggerDelay={0.05}>
            {resources.map((res) => (
              <StaggerItem key={res.name} className="h-full">
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:border-[#BC0202] hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#BC0202] bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded-md border border-red-200/50">
                        {res.category}
                      </span>
                      <svg className="w-4 h-4 text-zinc-400 group-hover:text-[#BC0202] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </div>

                    <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-[#BC0202] transition-colors">
                      {res.name}
                    </h3>

                    <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {res.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-[11px] font-semibold text-zinc-400 group-hover:text-[#BC0202] transition-colors truncate">
                    {res.url.replace("https://", "")}
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9 · FINAL CTA
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#BC0202] to-[#990202] text-white">
        <FadeInUp className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/15 border border-white/20">
            Start Your Journey
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Start Your German Learning Journey Today
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
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
