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
  title: "Ausbildung in Germany – Dual Vocational Training | Gyanshala Academy",
  description:
    "Earn while you learn in Germany through Dual Ausbildung: 2–3.5 years duration, Class 12 eligibility, monthly allowances (€724–€1,014+ gross in 2026), B1/B2 German requirement, and 18-month job seeker permit.",
};

export default function AusbildungPage() {
  const applicationSteps = [
    {
      step: "01",
      title: "Choose a profession",
      desc: "Select a suitable vocational career and check the employer’s eligibility criteria.",
    },
    {
      step: "02",
      title: "Build your German",
      desc: "Prepare to B1 or B2 as required for the occupation and interview.",
    },
    {
      step: "03",
      title: "Prepare documents",
      desc: "Gather passport, academic certificates, language evidence, CV and motivation letter.",
    },
    {
      step: "04",
      title: "Apply & interview",
      desc: "Apply to German employers or training schools and complete selection interviews.",
    },
    {
      step: "05",
      title: "Secure a contract",
      desc: "Receive the Ausbildung training agreement or applicable school admission evidence.",
    },
    {
      step: "06",
      title: "Apply for the visa",
      desc: "Submit the required contract, financial evidence, insurance and other documents.",
    },
    {
      step: "07",
      title: "Travel & start training",
      desc: "Complete visa and arrival formalities, then begin your programme.",
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
          alt="Ausbildung in Germany - Gyanshala Foreign Language Academy"
          fill
          priority
          className="object-cover object-center z-0 brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-[0.06em] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              AUSBILDUNG IN GERMANY
            </h1>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-[22px] text-white font-medium italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
              Earn while you learn • Build a skilled career in Germany
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
                VOCATIONAL PATHWAY
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Dual Vocational Training in Germany
              </h2>
            </div>

            <h4 className="text-2xl sm:text-3xl lg:text-[28px] font-bold italic text-[#C00000] leading-snug">
              Earn While You Learn • Practical Skills &amp; Recognised Qualification
            </h4>

            <div
              className="space-y-4 text-zinc-900 dark:text-zinc-100 text-base sm:text-lg lg:text-[21px] leading-[1.55] italic font-medium tracking-normal"
              style={{
                fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                letterSpacing: "0em",
              }}
            >
              <p>
                Ausbildung is Germany&apos;s vocational training pathway. It combines practical training with an employer and classroom learning at a vocational school. Many dual programmes pay a monthly training allowance and lead to a recognised professional qualification.
              </p>
            </div>
          </FadeInUp>

          {/* SECTION 2: AT A GLANCE */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                SUMMARY
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                At a Glance
              </h2>
            </FadeInUp>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                { label: "Duration", val: "Usually 2–3.5 years" },
                { label: "Eligibility", val: "Class 12 / Accepted Qualification" },
                { label: "German Language", val: "Usually B1; B2 for some roles" },
                { label: "Training Format", val: "Workplace + Vocational School" },
                { label: "Pay", val: "Monthly Allowance in Dual Training" },
                { label: "Visa", val: "Appropriate German National Visa" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-5 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-sm"
                >
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C00000]">
                    {stat.label}
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl font-bold text-black dark:text-white mt-1">
                    {stat.val}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: TWO MAIN TRAINING FORMATS */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                TRAINING STRUCTURE
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Two Main Training Formats
              </h2>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-sm space-y-2">
                <h4 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
                  <span className="text-[#C00000] font-bold select-none">•</span>
                  <span>Dual Ausbildung</span>
                </h4>
                <p
                  className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base lg:text-[18px] leading-[1.55] italic font-medium"
                  style={{
                    fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                    letterSpacing: "0em",
                  }}
                >
                  Practical work with an employer plus vocational school; typically includes a monthly training allowance.
                </p>
              </div>

              <div className="p-6 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-sm space-y-2">
                <h4 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
                  <span className="text-[#C00000] font-bold select-none">•</span>
                  <span>School-based Ausbildung</span>
                </h4>
                <p
                  className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base lg:text-[18px] leading-[1.55] italic font-medium"
                  style={{
                    fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                    letterSpacing: "0em",
                  }}
                >
                  Primarily taught at a vocational school with practical placements; payment and tuition rules vary.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4: WHO CAN APPLY? */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                CANDIDATE CRITERIA
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Who Can Apply?
              </h2>
            </FadeInUp>

            <div
              className="p-6 sm:p-8 bg-white/95 dark:bg-zinc-900/95 border border-zinc-200/90 dark:border-zinc-800 shadow-sm space-y-3 text-zinc-900 dark:text-zinc-100 text-base sm:text-lg lg:text-[21px] leading-[1.55] italic font-medium"
              style={{
                fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                letterSpacing: "0em",
              }}
            >
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C00000] font-bold select-none">•</span>
                  <span>Indian applicants with Class 12 or another accepted school qualification, subject to employer and programme criteria.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C00000] font-bold select-none">•</span>
                  <span>German language proficiency: B1 is common; B2 may be preferred or required, particularly in healthcare.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C00000] font-bold select-none">•</span>
                  <span>Valid passport, education records, language proof, CV, motivation letter and, for the direct visa route, a training contract.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C00000] font-bold select-none">•</span>
                  <span>Visa applicants may need health insurance and financial evidence. There is no universal maximum age for all Ausbildung contracts; the separate visa to seek a training place requires applicants to be under 35.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 5: POPULAR CAREER FIELDS */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                SECTORS &amp; OCCUPATIONS
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Popular Career Fields
              </h2>
            </FadeInUp>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                "Nursing & healthcare",
                "Hospitality & hotel services",
                "IT",
                "Mechatronics & electronics",
                "Logistics",
                "Retail & sales",
                "Culinary arts",
                "Automotive technology",
              ].map((field, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-sm text-center font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100"
                >
                  {field}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 6: MONTHLY TRAINING ALLOWANCE — 2026 */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                REMUNERATION
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Monthly Training Allowance — 2026
              </h2>
              <p
                className="mt-2 text-zinc-800 dark:text-zinc-200 text-base sm:text-lg lg:text-[20px] leading-[1.55] italic font-medium"
                style={{
                  fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                  letterSpacing: "0em",
                }}
              >
                Statutory gross minimums for covered dual-training contracts starting in 2026:
              </p>
            </FadeInUp>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              {[
                { year: "Year 1", amt: "€724" },
                { year: "Year 2", amt: "€854" },
                { year: "Year 3", amt: "€977" },
                { year: "Year 4", amt: "€1,014" },
              ].map((row, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-sm"
                >
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-500">
                    {row.year}
                  </p>
                  <p className="text-2xl sm:text-3xl font-black text-[#C00000] mt-1">
                    {row.amt}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base lg:text-[18px] leading-[1.55] italic font-medium"
              style={{
                fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                letterSpacing: "0em",
              }}
            >
              Actual allowances vary by occupation, employer, training year and contract; school-based programmes may follow different rules. The allowance may not fully meet visa financial requirements.
            </p>
          </section>

          {/* SECTION 7: YOUR PATHWAY TO GERMANY — HOW TO APPLY */}
          <section className="space-y-8">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                ROADMAP
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Your Pathway to Germany — How to Apply
              </h2>
            </FadeInUp>

            <div className="space-y-3.5">
              {applicationSteps.map((s, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-sm flex items-start gap-4"
                >
                  <span className="px-3 py-1 bg-[#C00000] text-white text-sm font-bold shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-black dark:text-white">
                      {s.title}
                    </h4>
                    <p
                      className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base lg:text-[19px] leading-[1.5] italic font-medium mt-0.5"
                      style={{
                        fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                        letterSpacing: "0em",
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 8: COSTS AND CAREER OPPORTUNITIES */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                FINANCIALS &amp; FUTURE
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Costs &amp; Career Opportunities
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
                Many dual programmes have no tuition fee and provide a training allowance. Students may still need to cover German lessons, application documents, visa, travel, housing and living expenses; some school-based programmes charge tuition.
              </p>
              <p>
                After successfully finishing Ausbildung, graduates may seek qualified work, further training or specialisation. Eligible non-EU graduates may apply for a residence permit to look for qualified work for up to 18 months. Employment and permanent residence are not automatic.
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
                Gyanshala Foreign Language Academy, Jaipur offers structured German training, from A1 foundations and A2 conversation through B1 independent communication and B2 professional language. Lessons focus on speaking, grammar, listening, reading, writing, Goethe exam-oriented preparation and interview communication.
              </p>
            </div>
          </FadeInUp>

          {/* SECTION 10: QUICK ANSWERS */}
          <section className="space-y-6">
            <FadeInUp>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold uppercase tracking-normal text-[#C00000] leading-none mb-1">
                FAQ
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black dark:text-white tracking-normal leading-tight">
                Quick Answers
              </h2>
            </FadeInUp>

            <div className="space-y-4">
              {[
                {
                  q: "Is IELTS required?",
                  a: "Not generally for German-language Ausbildung; programme-specific rules apply.",
                },
                {
                  q: "Is the programme always paid?",
                  a: "Dual training normally pays an allowance; school-based arrangements vary.",
                },
                {
                  q: "Is a job or visa guaranteed?",
                  a: "No. Employers, training providers and German authorities make the relevant decisions.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-sm space-y-1.5"
                >
                  <h4 className="text-lg sm:text-xl font-bold text-black dark:text-white">
                    {faq.q}
                  </h4>
                  <p
                    className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base lg:text-[18px] leading-[1.5] italic font-medium"
                    style={{
                      fontFamily: 'var(--font-josefin), "Josefin Sans", sans-serif',
                      letterSpacing: "0em",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 11: DISCLAIMER */}
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
              Gyanshala provides German language training and related guidance. Ausbildung placement, training stipends, visas and immigration outcomes are not guaranteed. Requirements and fees may change; confirm details with the employer and official German authorities before applying or paying.
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
