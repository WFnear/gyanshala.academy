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
  title: "Study in Germany – Essential Guide for Indian Students | Gyanshala Academy",
  description:
    "Essential guide for Indian students 2026/27: Bachelor's & Master's eligibility, 70% Class XII rule, Studienkolleg, tuition-free public universities, €11,904 blocked account, APS certificate, and 7-step application process.",
};

export default function StudyInGermanyPage() {
  const applicationSteps = [
    {
      step: "01",
      desc: "Choose a programme and university; check recognition, eligibility, fees and deadlines.",
    },
    {
      step: "02",
      desc: "Confirm the correct admission route (direct entry or Studienkolleg) and language level.",
    },
    {
      step: "03",
      desc: "Prepare German/English test results and apply for APS where required.",
    },
    {
      step: "04",
      desc: "Collect documents: passport, transcripts/certificates, APS, language proof, CV, motivation letter and recommendations where requested.",
    },
    {
      step: "05",
      desc: "Apply directly to the university or via uni-assist, as instructed.",
    },
    {
      step: "06",
      desc: "After an offer, arrange finances, accommodation, insurance and your student visa.",
    },
    {
      step: "07",
      desc: "After visa approval, travel, enrol and complete local residence formalities.",
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
          alt="Study in Germany - Gyanshala Foreign Language Academy"
          fill
          priority
          className="object-cover object-center z-0 brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-[0.06em] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              STUDY IN GERMANY
            </h1>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-[22px] text-white font-medium italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
              Essential guide for Indian students | 2026/27
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

          {/* SECTION 1: OVERVIEW */}
          <FadeInUp className="space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                ACADEMIC EXCELLENCE
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Higher Education in Germany
              </h2>
            </div>

            <h4 className="text-2xl sm:text-3xl lg:text-[28px] font-bold italic text-[#C00000] leading-snug">
              World-Class Degrees &amp; Low-Tuition Opportunities
            </h4>

            <div
              className="space-y-4 text-zinc-900 dark:text-zinc-100 text-base sm:text-lg lg:text-[21px] leading-[1.55] italic font-medium tracking-normal"
              style={{
                fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                letterSpacing: "0em",
              }}
            >
              <p>
                Germany offers globally recognised degrees, research and industry exposure, and many low-tuition public university programmes. Students can choose German- or English-taught options across engineering, IT, business, science, healthcare and more.
              </p>
            </div>
          </FadeInUp>

          {/* SECTION 2: 01 PROGRAMMES & ADMISSION ELIGIBILITY */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                01 ADMISSION ELIGIBILITY
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Programmes &amp; Eligibility Criteria
              </h2>
            </FadeInUp>

            <div className="overflow-x-auto border border-zinc-200/90 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 shadow-sm">
              <table className="w-full text-left text-sm sm:text-base">
                <thead className="bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-white font-bold">
                  <tr>
                    <th className="p-4 border-b border-zinc-200 dark:border-zinc-700 w-1/3">Programme</th>
                    <th className="p-4 border-b border-zinc-200 dark:border-zinc-700">Eligibility &amp; Criteria</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="p-4 font-bold text-[#C00000]">
                      Bachelor’s (usually 3–4 years)
                    </td>
                    <td className="p-4 text-zinc-800 dark:text-zinc-200 leading-relaxed italic font-medium">
                      Class XII alone does not automatically qualify for direct entry. For common Indian routes from winter 2026/27, APS India specifies at least 70% overall in Class XII, plus the appropriate Studienkolleg route OR one successful academic year in a recognised Bachelor’s programme for possible subject-restricted direct entry.
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="p-4 font-bold text-[#C00000]">
                      Master’s (usually 1–2 years)
                    </td>
                    <td className="p-4 text-zinc-800 dark:text-zinc-200 leading-relaxed italic font-medium">
                      Requires a recognised, relevant Bachelor’s degree, appropriate grades/credits and any programme-specific conditions.
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="p-4 font-bold text-[#C00000]">
                      MBA / Business
                    </td>
                    <td className="p-4 text-zinc-800 dark:text-zinc-200 leading-relaxed italic font-medium">
                      Requirements vary; work experience and tuition fees are common.
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="p-4 font-bold text-[#C00000]">
                      PhD / Research
                    </td>
                    <td className="p-4 text-zinc-800 dark:text-zinc-200 leading-relaxed italic font-medium">
                      University, supervisor, funding, qualification and language criteria vary by programme.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              className="p-5 sm:p-6 bg-white/95 dark:bg-zinc-900/95 border border-zinc-200/90 dark:border-zinc-800 shadow-sm text-zinc-800 dark:text-zinc-200 text-sm sm:text-base lg:text-[19px] leading-[1.55] italic font-medium"
              style={{
                fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                letterSpacing: "0em",
              }}
            >
              <strong>Studienkolleg:</strong> A typically one-year preparatory route ending in the <em>Feststellungsprüfung (FSP)</em>. Tracks include T (technical), M (medical/science), W (business), G (humanities) and S (languages). Completing it does not guarantee a university place.
            </div>
          </section>

          {/* SECTION 3: 02 LANGUAGE REQUIREMENTS */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                02 PROFICIENCY
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Language Requirements
              </h2>
            </FadeInUp>

            <div className="overflow-x-auto border border-zinc-200/90 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 shadow-sm">
              <table className="w-full text-left text-sm sm:text-base">
                <thead className="bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-white font-bold">
                  <tr>
                    <th className="p-4 border-b border-zinc-200 dark:border-zinc-700 w-1/3">Study Route</th>
                    <th className="p-4 border-b border-zinc-200 dark:border-zinc-700">Language Level &amp; Tests</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="p-4 font-bold text-[#C00000]">
                      Studienkolleg
                    </td>
                    <td className="p-4 text-zinc-800 dark:text-zinc-200 leading-relaxed italic font-medium">
                      Commonly German B1–B2; entrance tests may apply.
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="p-4 font-bold text-[#C00000]">
                      German-taught degrees
                    </td>
                    <td className="p-4 text-zinc-800 dark:text-zinc-200 leading-relaxed italic font-medium">
                      Often B2 or C1; accepted tests may include TestDaF, DSH, Goethe or telc, depending on the university.
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="p-4 font-bold text-[#C00000]">
                      English-taught degrees
                    </td>
                    <td className="p-4 text-zinc-800 dark:text-zinc-200 leading-relaxed italic font-medium">
                      An accepted English test such as IELTS may be needed. German remains valuable for everyday life, internships and jobs.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 4: 03 UNIVERSITIES & STUDY COSTS */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                03 FINANCIAL PLANNING
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Universities &amp; Study Costs
              </h2>
              <p
                className="mt-2 text-zinc-800 dark:text-zinc-200 text-base sm:text-lg lg:text-[20px] leading-[1.55] italic font-medium"
                style={{
                  fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                  letterSpacing: "0em",
                }}
              >
                <strong>University types:</strong> Public universities, universities of applied sciences (practical focus), and private universities. Confirm recognition, accreditation and programme fees.
              </p>
            </FadeInUp>

            <div className="overflow-x-auto border border-zinc-200/90 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 shadow-sm">
              <table className="w-full text-left text-sm sm:text-base">
                <thead className="bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-white font-bold">
                  <tr>
                    <th className="p-4 border-b border-zinc-200 dark:border-zinc-700 w-1/3">Expense Category</th>
                    <th className="p-4 border-b border-zinc-200 dark:border-zinc-700">Cost Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="p-4 font-bold text-[#C00000]">Tuition</td>
                    <td className="p-4 text-zinc-800 dark:text-zinc-200 leading-relaxed italic font-medium">
                      Many public Bachelor’s and consecutive Master’s programmes charge no tuition; exceptions exist. Baden-Württemberg generally charges relevant non-EU students €1,500 per semester, subject to exemptions.
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="p-4 font-bold text-[#C00000]">Semester contribution</td>
                    <td className="p-4 text-zinc-800 dark:text-zinc-200 leading-relaxed italic font-medium">
                      Approximately €70–€430, varying by institution.
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="p-4 font-bold text-[#C00000]">Living expenses</td>
                    <td className="p-4 text-zinc-800 dark:text-zinc-200 leading-relaxed italic font-medium">
                      Budget approximately €900–€1,200 monthly; large cities may cost more.
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="p-4 font-bold text-[#C00000]">2026 blocked account</td>
                    <td className="p-4 text-zinc-800 dark:text-zinc-200 leading-relaxed italic font-medium">
                      <strong>€11,904</strong> for one year (€992 monthly withdrawal), where this is the chosen proof of funds. It is the student’s money, not tuition.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 5: 04 APS, SCHOLARSHIPS & VISA */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                04 DOCUMENTATION
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                APS, Scholarships &amp; Visa Preparation
              </h2>
            </FadeInUp>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.06}>
              {[
                {
                  title: "APS Certificate",
                  desc: "Generally required for applicants using Indian academic qualifications, unless an official exemption applies. APS verification is not an admission or visa guarantee.",
                },
                {
                  title: "Scholarships",
                  desc: "Explore DAAD, Deutschlandstipendium, university and research scholarships. Awards are competitive and eligibility varies.",
                },
                {
                  title: "Visa Finances",
                  desc: "Check the current financial proof, health insurance and student visa checklist with the German Missions in India; requirements may change.",
                },
              ].map((card, idx) => (
                <StaggerItem key={idx}>
                  <div className="h-full p-6 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-sm space-y-2">
                    <h4 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
                      <span className="text-[#C00000] font-bold select-none">•</span>
                      <span>{card.title}</span>
                    </h4>
                    <p
                      className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base lg:text-[18px] leading-[1.5] italic font-medium"
                      style={{
                        fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                        letterSpacing: "0em",
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          {/* SECTION 6: 05 APPLICATION PROCESS */}
          <section className="space-y-8">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                05 ROADMAP
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Application Process — 7 Practical Steps
              </h2>
            </FadeInUp>

            <div className="space-y-3.5">
              {applicationSteps.map((s, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-sm flex items-center gap-4"
                >
                  <span className="px-3 py-1 bg-[#C00000] text-white text-sm font-bold shrink-0">
                    {s.step}
                  </span>
                  <p
                    className="text-zinc-900 dark:text-zinc-100 text-base sm:text-lg lg:text-[20px] leading-[1.5] italic font-medium"
                    style={{
                      fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                      letterSpacing: "0em",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 7: 06 INTAKES, PART-TIME WORK & CAREERS */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                06 CAREER PROSPECTS
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Intakes, Part-Time Work &amp; Careers
              </h2>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Intakes",
                  desc: "Winter usually begins September/October; summer typically March/April. Not every programme admits in both.",
                },
                {
                  title: "Work While Studying",
                  desc: "Eligible non-EU students may generally work 140 full days or 280 half days per year, or under the applicable 20-hour weekly arrangement. Jobs and income are not guaranteed.",
                },
                {
                  title: "After Graduation",
                  desc: "Eligible German university graduates may seek qualified employment with a job-search residence permit for up to 18 months. Other residence permits and settlement depend on legal eligibility.",
                },
                {
                  title: "Career Fields",
                  desc: "Engineering, IT, AI/data science, automotive, renewable energy, finance, research, logistics and life sciences.",
                },
              ].map((box, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-sm space-y-2"
                >
                  <h4 className="text-lg sm:text-xl font-bold text-black dark:text-white flex items-center gap-2">
                    <span className="text-[#C00000] font-bold select-none">•</span>
                    <span>{box.title}</span>
                  </h4>
                  <p
                    className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base lg:text-[18px] leading-[1.5] italic font-medium"
                    style={{
                      fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                      letterSpacing: "0em",
                    }}
                  >
                    {box.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 8: 07 PREPARE WITH GYANSHALA */}
          <FadeInUp className="space-y-4">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                07 LANGUAGE PREPARATION
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Prepare with Gyanshala Foreign Language Academy
              </h2>
            </div>

            <div
              className="p-6 sm:p-8 bg-white/95 dark:bg-zinc-900/95 border border-zinc-200/90 dark:border-zinc-800 shadow-sm text-zinc-900 dark:text-zinc-100 text-base sm:text-lg lg:text-[21px] leading-[1.55] italic font-medium"
              style={{
                fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                letterSpacing: "0em",
              }}
            >
              <p>
                At Gyanshala Foreign Language Academy, Jaipur, students can build German-language skills from A1 to C2, including grammar, speaking, listening, reading, writing, everyday communication and Goethe-oriented preparation. Strong German skills can support university study, daily life and future employment, even in an English-taught programme.
              </p>
            </div>
          </FadeInUp>

          {/* SECTION 9: DISCLAIMER */}
          <footer
            className="p-5 sm:p-6 bg-zinc-100/90 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 space-y-1.5 italic font-medium"
            style={{
              fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
              letterSpacing: "0em",
            }}
          >
            <p className="font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-200 not-italic">
              Important Notice
            </p>
            <p>
              Admissions, APS, scholarships, visas and employment are decided by the respective institutions and authorities. Fees, eligibility, work and immigration rules can change. Verify current official requirements before applying or paying. Gyanshala provides German-language training and educational information; any admission assistance is subject to separately agreed terms.
            </p>
          </footer>

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
            Learn German. Study Globally. Build Your Future. Connect with our team to prepare for German university admissions.
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
