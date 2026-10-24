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
  title: "Direct Nursing Jobs in Germany for Indian Nurses | Gyanshala Academy",
  description:
    "A practical guide for Indian BSc Nursing & GNM professionals: qualification recognition (Anerkennung), German B2 requirement, visa pathways (§18a, §16d), €4,587 median gross salary, and language training with Gyanshala.",
};

export default function NursingInGermanyPage() {
  const recognitionSteps = [
    {
      step: "01",
      title: "Apply for assessment",
      desc: "The competent German state authority examines your nursing qualification, coursework, syllabus and clinical training hours against German equivalents.",
    },
    {
      step: "02",
      title: "Receive a decision (Defizitbescheid)",
      desc: "If equivalent and all conditions are met, proceed towards authorisation. If gaps are identified, you may complete adaptation training or take a knowledge exam (Kenntnisprüfung).",
    },
    {
      step: "03",
      title: "Meet professional conditions",
      desc: "Provide acceptable German B2 certificate evidence (generally), medical fitness certificate and police clearance / certificate of good standing.",
    },
    {
      step: "04",
      title: "Obtain authorisation (Berufserlaubnis / Approbation)",
      desc: "Only after the required approval may you practise as a fully recognised nurse; permitted assistant duties during recognition are strictly separate.",
    },
  ];

  const roadmapSteps = [
    {
      step: "01",
      title: "Prepare",
      desc: "Gather nursing degree/diploma, Indian registration and clinical records; learn German systematically towards the required level.",
    },
    {
      step: "02",
      title: "Check recognition",
      desc: "Identify the competent German authority using the official Recognition Finder; submit your records for initial evaluation.",
    },
    {
      step: "03",
      title: "Apply & interview",
      desc: "Connect with German hospitals, clinics, rehabilitation centres, elderly-care providers or certified employers; clear employer interviews.",
    },
    {
      step: "04",
      title: "Sign a written offer",
      desc: "Confirm gross salary, work hours, shift duties, employer identity, perks, and any employer-sponsored adaptation or recognition support.",
    },
    {
      step: "05",
      title: "Obtain the right visa",
      desc: "Apply with the required employment contract, recognition notice, proof of funds, health coverage and verified documents.",
    },
    {
      step: "06",
      title: "Complete licensing",
      desc: "Finish adaptation measures or the knowledge exam if required, obtain full professional authorisation, and practise as a recognised nurse in Germany.",
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
          alt="Direct Nursing Jobs in Germany - Gyanshala Foreign Language Academy"
          fill
          priority
          className="object-cover object-center z-0 brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-[0.06em] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              DIRECT NURSING JOBS IN GERMANY
            </h1>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-[22px] text-white font-medium italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
              A practical guide for Indian BSc Nursing &amp; GNM professionals
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
                HEALTHCARE CAREER PATHWAY
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Nursing Opportunities in German Hospitals &amp; Care Facilities
              </h2>
            </div>

            <h4 className="text-2xl sm:text-3xl lg:text-[28px] font-bold italic text-[#C00000] leading-snug">
              Already Qualified as a Nurse in India? • Your Gateway to Germany
            </h4>

            <div
              className="space-y-4 text-zinc-900 dark:text-zinc-100 text-base sm:text-lg lg:text-[21px] leading-[1.55] italic font-medium tracking-normal"
              style={{
                fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                letterSpacing: "0em",
              }}
            >
              <p>
                Already qualified as a nurse in India? Germany offers employment opportunities in hospitals, clinics, rehabilitation units and specialised care facilities. To work as a fully recognised nurse, you must meet German qualification-recognition, language, professional-authorisation and visa requirements.
              </p>
            </div>
          </FadeInUp>

          {/* SECTION 2: WHO CAN APPLY? */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                ELIGIBILITY
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Who Can Apply?
              </h2>
            </FadeInUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  title: "QUALIFICATIONS",
                  desc: "BSc Nursing, Post Basic BSc, GNM or MSc Nursing; each qualification is assessed individually.",
                },
                {
                  title: "GERMAN LANGUAGE",
                  desc: "B2 generally required for full nursing authorisation; lower levels may apply to some entry/recognition routes.",
                },
                {
                  title: "INDIAN REGISTRATION",
                  desc: "Appropriate nursing registration; good standing and clinical records may be requested.",
                },
                {
                  title: "WORK EXPERIENCE",
                  desc: "No universal minimum; some employers accept fresh graduates, others require experience.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 sm:p-6 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-sm space-y-2"
                >
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C00000]">
                    {item.title}
                  </p>
                  <p
                    className="text-zinc-900 dark:text-zinc-100 text-base sm:text-lg lg:text-[19px] leading-[1.5] italic font-medium"
                    style={{
                      fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                      letterSpacing: "0em",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Callout box: Direct Job != Nursing Ausbildung */}
            <div className="p-5 sm:p-6 bg-red-50/90 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 shadow-sm space-y-2">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C00000]">
                DIRECT JOB ≠ NURSING AUSBILDUNG
              </p>
              <p
                className="text-zinc-900 dark:text-zinc-100 text-base sm:text-lg lg:text-[19px] leading-[1.5] italic font-medium"
                style={{
                  fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                  letterSpacing: "0em",
                }}
              >
                This pathway is for already-qualified nurses. Ausbildung is initial vocational nursing training, usually taking three years. Full nursing practice in Germany still requires recognition and authorisation.
              </p>
            </div>
          </section>

          {/* SECTION 3: QUALIFICATION RECOGNITION (ANERKENNUNG) */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                ANERKENNUNG
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Qualification Recognition (Anerkennung)
              </h2>
            </FadeInUp>

            <StaggerContainer className="space-y-4">
              {recognitionSteps.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="p-5 sm:p-6 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row gap-4 sm:items-center">
                    <span className="w-12 h-12 flex items-center justify-center bg-[#C00000] text-white text-lg font-bold shrink-0">
                      {item.step}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-lg sm:text-xl font-bold text-black dark:text-white">
                        {item.title}
                      </h4>
                      <p
                        className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base lg:text-[18px] leading-[1.5] italic font-medium"
                        style={{
                          fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                          letterSpacing: "0em",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          {/* SECTION 4: MAIN VISA PATHWAYS */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                IMMIGRATION ROUTES
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Main Visa Pathways
              </h2>
            </FadeInUp>

            <div className="overflow-x-auto border border-zinc-200/90 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-[#C00000] text-white">
                  <tr>
                    <th className="p-3.5 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider w-1/3">
                      Visa Category
                    </th>
                    <th className="p-3.5 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider">
                      Description &amp; Eligibility
                    </th>
                  </tr>
                </thead>
                <tbody
                  className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm sm:text-base lg:text-[18px] italic font-medium"
                  style={{
                    fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                    letterSpacing: "0em",
                  }}
                >
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                    <td className="p-3.5 sm:p-4 font-bold text-[#C00000] not-italic">
                      Skilled worker — §18a
                    </td>
                    <td className="p-3.5 sm:p-4">
                      For eligible fully recognised nurses with professional authorisation and a suitable job offer.
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                    <td className="p-3.5 sm:p-4 font-bold text-[#C00000] not-italic">
                      Recognition — §16d(1)
                    </td>
                    <td className="p-3.5 sm:p-4">
                      For applicants completing required adaptation or examination measures in Germany.
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                    <td className="p-3.5 sm:p-4 font-bold text-[#C00000] not-italic">
                      Recognition partnership — §16d(3)
                    </td>
                    <td className="p-3.5 sm:p-4">
                      An eligible employer-supported route to start recognition after arrival; the visa category may have an A2 entry threshold, but nursing duties and full approval have separate requirements.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 5: YOUR PATHWAY TO A GERMAN NURSING CAREER */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                ROADMAP
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Your Pathway to a German Nursing Career — How to Apply
              </h2>
            </FadeInUp>

            <StaggerContainer className="space-y-4">
              {roadmapSteps.map((s, idx) => (
                <StaggerItem key={idx}>
                  <div className="p-5 sm:p-6 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row gap-4 sm:items-center">
                    <span className="w-12 h-12 flex items-center justify-center bg-[#C00000] text-white text-lg font-bold shrink-0">
                      {s.step}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-lg sm:text-xl font-bold text-black dark:text-white">
                        {s.title}
                      </h4>
                      <p
                        className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base lg:text-[18px] leading-[1.5] italic font-medium"
                        style={{
                          fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                          letterSpacing: "0em",
                        }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          {/* SECTION 6: DOCUMENTS TO PREPARE */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                CHECKLIST
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Documents to Prepare
              </h2>
            </FadeInUp>

            <div className="overflow-x-auto border border-zinc-200/90 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-[#C00000] text-white">
                  <tr>
                    <th className="p-3.5 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider w-1/3">
                      Category
                    </th>
                    <th className="p-3.5 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider">
                      Required Documents
                    </th>
                  </tr>
                </thead>
                <tbody
                  className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm sm:text-base lg:text-[18px] italic font-medium"
                  style={{
                    fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                    letterSpacing: "0em",
                  }}
                >
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                    <td className="p-3.5 sm:p-4 font-bold text-black dark:text-white not-italic">
                      Education &amp; training
                    </td>
                    <td className="p-3.5 sm:p-4">
                      10th/12th certificates; GNM/BSc/Post Basic BSc/MSc qualification and marksheets; course syllabus; theory/clinical hours; internship records.
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                    <td className="p-3.5 sm:p-4 font-bold text-black dark:text-white not-italic">
                      Professional
                    </td>
                    <td className="p-3.5 sm:p-4">
                      Indian nursing registration; good standing (if needed); experience/reference letters; updated CV; German-language certificate.
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                    <td className="p-3.5 sm:p-4 font-bold text-black dark:text-white not-italic">
                      Personal &amp; job
                    </td>
                    <td className="p-3.5 sm:p-4">
                      Passport; employer contract/offer; recognition notice or licence; medical fitness/police clearance where required; visa paperwork and certified translations when requested.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 7: SALARY, WORKPLACES & FUTURE PROSPECTS */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                REMUNERATION &amp; SETTINGS
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Salary, Workplaces &amp; Future Prospects
              </h2>
            </FadeInUp>

            <div
              className="p-6 sm:p-8 bg-white/95 dark:bg-zinc-900/95 border border-zinc-200/90 dark:border-zinc-800 shadow-sm space-y-4 text-zinc-900 dark:text-zinc-100 text-base sm:text-lg lg:text-[21px] leading-[1.55] italic font-medium"
              style={{
                fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                letterSpacing: "0em",
              }}
            >
              <p>
                Official occupational data report a median of approximately <strong>€4,587 gross/month</strong> for full-time general healthcare nurses. This is not a guaranteed starting salary: pay varies by role, recognition status, employer, location and shifts. Gross pay is before tax and social-insurance deductions.
              </p>
              <p>
                <strong>Potential workplaces:</strong> Hospitals, ICU/operating theatres, emergency units, rehabilitation centres, elderly care and community nursing facilities. Eligible workers may pursue family reunification and longer-term residence subject to immigration rules; neither is automatic.
              </p>
            </div>
          </section>

          {/* SECTION 8: STAY SAFE WHEN CONSIDERING AN OFFER */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                CONSUMER ADVISORY
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Stay Safe When Considering an Offer
              </h2>
            </FadeInUp>

            <div
              className="p-6 sm:p-8 bg-amber-50/90 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 shadow-sm space-y-3 text-amber-950 dark:text-amber-200 text-base sm:text-lg lg:text-[20px] leading-[1.55] italic font-medium"
              style={{
                fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                letterSpacing: "0em",
              }}
            >
              <p>
                Verify the employer, whether the position is a nurse or assistant role, recognition arrangements, gross pay, deductions, accommodation costs, recruitment fees and refund clauses. Always request written terms.
              </p>
              <p>
                Germany&apos;s voluntary &ldquo;Fair Recruitment Healthcare Germany&rdquo; seal promotes transparent recruitment. Do not rely on verbal promises of guaranteed jobs or visas.
              </p>
            </div>
          </section>

          {/* SECTION 9: GERMAN PREPARATION WITH GYANSHALA */}
          <FadeInUp className="space-y-4">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                LANGUAGE EXCELLENCE
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                German Preparation with Gyanshala
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
                Gyanshala Foreign Language Academy, Jaipur, offers structured German A1–B2 language training focused on speaking, grammar, listening, reading, writing, Goethe exam-oriented preparation and professional communication for healthcare specialists. Enquire about course batches and intensive language preparation.
              </p>
            </div>
          </FadeInUp>

          {/* SECTION 10: DISCLAIMER */}
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
              Gyanshala provides language education and general guidance, not a guarantee of employment, recognition, salary, visa or permanent residence. Confirm up-to-date rules with Recognition in Germany, Make it in Germany and German Missions in India.
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
            Start Your German Language Journey with Gyanshala Foreign Language Academy, Jaipur. Enquire about A1–B2 courses.
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
