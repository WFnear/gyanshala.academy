import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Direct Nursing Jobs in Germany for Indian Nurses | Gyanshala Academy",
  description:
    "Complete guide for BSc & GNM Indian nurses: German hospital jobs, qualification recognition (Anerkennung), B2 German requirement, €4,587 median monthly salary, visa pathways (18a, 16d), and family reunification.",
};

export default function NursingInGermanyPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      
      {/* =========================================================================
          HERO SECTION (SAME DESIGN AS ABOUT US)
          ========================================================================= */}
      <section className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px] flex flex-col items-center justify-center overflow-hidden py-14 sm:py-16 md:py-20 text-white text-center bg-zinc-950">
        <Image
          src="/Pathways/nursingcareer.png"
          alt="Nursing in Germany - Gyanshala Foreign Language Academy"
          fill
          priority
          className="object-cover object-center z-0 brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-[0.06em] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              NURSING IN GERMANY
            </h1>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-[22px] text-white font-medium italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
              Direct Nursing Jobs for Indian Nurses • Work as a Qualified Nurse in Germany 🇩🇪
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* =========================================================================
          MAIN ARTICLE CONTENT
          ========================================================================= */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base space-y-12 sm:space-y-16">

        {/* 1. Introduction Banner */}
        <section className="space-y-4">
          <div className="border-l-4 border-[#BC0202] pl-4 sm:pl-6 space-y-2">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#BC0202]">
              Healthcare Career Pathway
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Work as a Qualified Nurse in Germany – Build Your International Nursing Career!
            </h2>
          </div>
          <p className="text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-200">
            BSc Nursing &amp; GNM Nurses – Explore Employment Opportunities in Germany
          </p>
          <p>
            Germany offers promising international career opportunities for qualified nursing professionals. With an established healthcare system, growing demand for skilled nurses, and structured professional development pathways, Germany has become an attractive destination for Indian nursing graduates.
          </p>
          <p>
            If you have completed <strong>BSc Nursing, Post Basic BSc Nursing, GNM, or MSc Nursing</strong>, you may be eligible to pursue employment opportunities in Germany, subject to the recognition of your qualifications and the applicable professional licensing requirements.
          </p>
          <p>
            At <strong>Gyanshala Foreign Language Academy, Jaipur</strong>, we help aspiring healthcare professionals develop the German language skills essential for communicating with patients, understanding workplace instructions, and preparing for nursing careers in German-speaking environments.
          </p>
          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-none text-center font-bold text-zinc-900 dark:text-white tracking-wide">
            Learn German. Prepare for Professional Recognition. Explore Nursing Careers in Germany.
          </div>
        </section>

        {/* 2. Why Choose Germany for Nursing Jobs */}
        <section className="space-y-5 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Healthcare Excellence</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Why Choose Germany for Nursing Jobs?
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Germany has a well-developed healthcare infrastructure, including university hospitals, general hospitals, rehabilitation centres, specialised medical facilities, and elderly care institutions.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
              Benefits of Working as a Nurse in Germany
            </h3>
            <ul className="space-y-2.5">
              {[
                { title: "Career Opportunities", desc: "Germany continues to experience significant nationwide demand for qualified healthcare and nursing professionals." },
                { title: "Competitive Salaries", desc: "Recognised nurses receive competitive remuneration with statutory increments, allowances, and collective agreements." },
                { title: "Professional Development", desc: "Extensive opportunities exist for clinical specialisation (ICU, OT, Oncology, Anaesthesia) and continuing education." },
                { title: "Regulated Environment", desc: "Gain valuable international experience within Germany's highly structured, technology-driven healthcare system." },
                { title: "Employment Protections", desc: "Comprehensive social security, health insurance, paid leave, pension benefits, and strong labour law protections." },
                { title: "Family Reunification", desc: "Eligible skilled workers can sponsor their spouse and minor children to live, study, and work in Germany." },
                { title: "Long-Term Settlement", desc: "Clear legal pathways to obtain permanent residence (Niederlassungserlaubnis) after meeting employment and language conditions." },
                { title: "High Quality of Life", desc: "Access to world-class public infrastructure, safety, education for children, and work-life balance." },
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202] mt-2 shrink-0" />
                  <span>
                    <strong className="text-zinc-900 dark:text-white">{benefit.title}:</strong> {benefit.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Direct Nursing vs Nursing Ausbildung */}
        <section className="space-y-5 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Pathway Clarification</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              What Are Direct Nursing Jobs in Germany?
            </h2>
          </div>
          <p>
            Direct nursing jobs are employment opportunities intended for individuals who <strong>already hold a nursing qualification</strong> from India, rather than students seeking to complete an initial 3-year nursing Ausbildung programme.
          </p>
          <p>
            However, nursing is a <strong>strictly regulated profession</strong> in Germany. This means an Indian nursing qualification must be assessed through the German professional recognition process (<em>Anerkennung</em>) before an applicant receives full authorisation to practice as a registered nurse (<em>Pflegefachkraft</em>).
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 mt-4">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-white font-bold">
                <tr>
                  <th className="p-3 sm:p-3.5 border-b border-zinc-200 dark:border-zinc-700 w-1/2">Direct Nursing Employment</th>
                  <th className="p-3 sm:p-3.5 border-b border-zinc-200 dark:border-zinc-700 w-1/2">Nursing Ausbildung</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {[
                  ["Intended for already-qualified nurses (BSc / GNM)", "Intended for individuals training to become nurses"],
                  ["Requires existing nursing degree/diploma & registration", "Requires Class 12 or equivalent school qualification"],
                  ["Foreign qualification recognition (Anerkennung) needed", "Leads to a brand-new German nursing qualification"],
                  ["Full professional nursing salary upon recognition", "Monthly training allowance during the 3-year programme"],
                  ["Adaptation programme or knowledge test if differences exist", "Usually 3 years of classroom and clinical training"],
                ].map(([direct, ausb], idx) => (
                  <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="p-3 sm:p-3.5 font-medium text-zinc-900 dark:text-white">{direct}</td>
                    <td className="p-3 sm:p-3.5 text-zinc-600 dark:text-zinc-400">{ausb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs font-semibold text-zinc-900 dark:text-white">
            Already completed nursing in India? You may be able to pursue direct qualification recognition and professional employment rather than starting a new three-year Ausbildung!
          </p>
        </section>

        {/* 4. Eligibility Criteria */}
        <section className="space-y-6 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Candidate Profile</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Eligibility Criteria for Indian Nurses
            </h2>
          </div>

          <div className="space-y-4">
            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 space-y-1">
              <h3 className="font-bold text-zinc-900 dark:text-white">1. Educational Qualification</h3>
              <p className="text-xs sm:text-sm">
                Applicants should hold a recognised qualification: <strong>BSc Nursing, Post Basic BSc Nursing, General Nursing and Midwifery (GNM), or MSc Nursing</strong>. The competent German state authority evaluates the syllabus, theoretical hours, and clinical internship hours.
              </p>
            </div>

            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 space-y-1">
              <h3 className="font-bold text-zinc-900 dark:text-white">2. Nursing Council Registration</h3>
              <p className="text-xs sm:text-sm">
                Candidates must hold active registration with their State Nursing Council in India along with a Good Standing Certificate.
              </p>
            </div>

            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 space-y-1">
              <h3 className="font-bold text-zinc-900 dark:text-white">3. German Language Proficiency</h3>
              <p className="text-xs sm:text-sm">
                For full professional recognition as a registered nurse in Germany, applicants generally require <strong>German B2 level</strong> (Goethe, telc, or ÖSD). Some employers initiate recruitment at B1, but full independent practice requires B2.
              </p>
            </div>

            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 space-y-1">
              <h3 className="font-bold text-zinc-900 dark:text-white">4. Professional Experience</h3>
              <p className="text-xs sm:text-sm">
                Fresh nursing graduates as well as experienced nurses may apply. Certain specialized departments (e.g. ICU, OT) may require previous clinical experience.
              </p>
            </div>

            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 space-y-1">
              <h3 className="font-bold text-zinc-900 dark:text-white">5. Medical Fitness &amp; Personal Suitability</h3>
              <p className="text-xs sm:text-sm">
                Medical fitness certificate, police clearance certificate (PCC), and compliance with professional ethics standards.
              </p>
            </div>

            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 space-y-1">
              <h3 className="font-bold text-zinc-900 dark:text-white">6. Age Requirements</h3>
              <p className="text-xs sm:text-sm">
                There is no universal maximum age for nursing recognition. Note that first-time skilled worker entrants over 45 must satisfy specific minimum salary or retirement pension criteria.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Language Requirements */}
        <section className="space-y-5 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Communication Competence</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              German Language Requirements for Nursing Jobs
            </h2>
            <p className="mt-2 text-zinc-800 dark:text-zinc-200 font-semibold">
              Is B1 or B2 German Required?
            </p>
          </div>
          <p>
            German language proficiency is vital for patient safety and clinical communication. Nurses interact constantly with patients, physicians, families, and multidisciplinary healthcare teams.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <p className="font-bold text-zinc-900 dark:text-white">A1 – Beginner German</p>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">Basic grammar, common vocabulary, greetings, pronunciation, and everyday expressions.</p>
            </div>
            <div className="p-3.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <p className="font-bold text-zinc-900 dark:text-white">A2 – Elementary German</p>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">Communication skills for daily routines, simple healthcare interactions, and familiar situations.</p>
            </div>
            <div className="p-3.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <p className="font-bold text-zinc-900 dark:text-white">B1 – Intermediate German</p>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">Independent speaking, listening, clinical vocabulary, and ability to handle general hospital scenarios.</p>
            </div>
            <div className="p-3.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <p className="font-bold text-[#BC0202]">B2 – Upper-Intermediate (Mandatory for Licence)</p>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">Professional healthcare communication, precise handover reports, medical documentation, and patient safety.</p>
            </div>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Full professional licensing as a registered nurse in Germany generally requires a recognised B2 certificate (Goethe-Zertifikat B2 or telc Deutsch B1-B2 Pflege).
          </p>
        </section>

        {/* 6. Nursing Qualification Recognition (Anerkennung) */}
        <section className="space-y-6 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Professional Licensing</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Nursing Qualification Recognition in Germany (Anerkennung)
            </h2>
          </div>
          <p>
            <em>Anerkennung</em> is the official German procedure for assessing qualifications obtained abroad. Indian nurses must have their credentials assessed by the state licensing authority (<em>Landesamt</em>) in the federal state where they intend to work. Once issued, the license is valid across all of Germany.
          </p>

          <div className="space-y-3">
            <h3 className="font-bold text-zinc-900 dark:text-white">The 6-Step Recognition Process:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {[
                { s: "Step 1", t: "Submit Qualification Documents", d: "Degree, diploma, curriculum hours, transcripts, registration, and experience certificates." },
                { s: "Step 2", t: "Equivalence Assessment", d: "Authority evaluates Indian syllabus and clinical hours against German nursing standards." },
                { s: "Step 3", t: "Recognition Decision", d: "Full equivalence granted or a deficit notice (Defizitbescheid) issued identifying gaps." },
                { s: "Step 4", t: "Compensation Measures", d: "Complete an adaptation course (Anpassungslehrgang) or knowledge test (Kenntnisprüfung)." },
                { s: "Step 5", t: "Fulfil Licensing Conditions", d: "Submit German B2 language certificate, medical fitness, and police clearance." },
                { s: "Step 6", t: "Obtain Professional Licence", d: "Receive official German nursing authorisation (Urkunde) to practice as a registered nurse." },
              ].map((step, idx) => (
                <div key={idx} className="p-3.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] font-bold text-white bg-[#BC0202] px-2 py-0.5 uppercase">{step.s}</span>
                  <p className="font-bold text-zinc-900 dark:text-white mt-1.5">{step.t}</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">{step.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <h3 className="font-bold text-zinc-900 dark:text-white">
              Adaptation Course (Anpassungslehrgang) vs Knowledge Exam (Kenntnisprüfung)
            </h3>
            <p className="text-xs sm:text-sm">
              If substantial differences are identified in your deficit notice, you can choose between an <strong>Adaptation Programme</strong> (supervised clinical placement with theoretical modules) or a <strong>Knowledge Examination</strong> covering oral, written, and practical nursing competencies. During this period, candidates can work in hospitals as nursing assistants with a salary.
            </p>
          </div>
        </section>

        {/* 7. Visa Pathways for Indian Nurses */}
        <section className="space-y-5 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Immigration Routes</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Visa Pathways for Indian Nurses
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                section: "1. Skilled Worker Visa – Section 18a",
                desc: "For nurses who already hold full German professional recognition and a confirmed employment offer as a registered nurse.",
                req: "Recognised qualification • Professional authorisation • German B2 • Employment contract.",
              },
              {
                section: "2. Recognition Visa – Section 16d(1)",
                desc: "For candidates who have received a Defizitbescheid and are travelling to Germany to complete an approved adaptation course or knowledge examination.",
                req: "Deficit notice • Admission to qualification measure • B1/B2 German • Confirmed hospital placement.",
              },
              {
                section: "3. Recognition Partnership – Section 16d(3)",
                desc: "Allows eligible nurses to enter Germany and carry out the entire recognition process while employed by a sponsoring German healthcare institution.",
                req: "Qualifying nursing degree • Contract with German hospital • Employer commitment to support recognition • German A2 minimum entry threshold.",
              },
            ].map((v, idx) => (
              <div key={idx} className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1">
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm sm:text-base">{v.section}</h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">{v.desc}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium pt-1"><strong>Key Requirements:</strong> {v.req}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            * Note: The EU Blue Card is not the standard immigration category for nursing. Nurses apply under skilled worker or recognition visa provisions.
          </p>
        </section>

        {/* 8. Nursing Salary in Germany */}
        <section className="space-y-6 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Remuneration &amp; Compensation</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Nursing Salary in Germany
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Nursing salaries in Germany are competitive and regulated by public sector or private collective wage agreements (e.g., <em>TVöD-P</em>).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
              <p className="text-xs text-zinc-500 font-bold uppercase">Lower Quartile</p>
              <p className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white mt-1">€4,111</p>
              <p className="text-xs text-zinc-500 mt-1">Gross / month</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 text-center">
              <p className="text-xs text-[#BC0202] font-bold uppercase">Official Median Salary</p>
              <p className="text-2xl sm:text-3xl font-black text-[#BC0202] mt-1">€4,587</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Federal Employment Agency Entgeltatlas</p>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
              <p className="text-xs text-zinc-500 font-bold uppercase">Upper Quartile</p>
              <p className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white mt-1">€5,116</p>
              <p className="text-xs text-zinc-500 mt-1">Gross / month</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            <strong>Gross vs. Net Salary:</strong> Gross salary (<em>Bruttogehalt</em>) is before taxes and mandatory social security contributions (health, pension, nursing care, unemployment insurance). Net salary (<em>Nettogehalt</em>) is your take-home pay. Shift allowances for night shifts, weekends, and public holidays are paid on top and are often tax-privileged.
          </p>
        </section>

        {/* 9. Where Indian Nurses Can Work */}
        <section className="space-y-4 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Clinical Settings</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Where Can Indian Nurses Work in Germany?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            {[
              { t: "University & General Hospitals (Krankenhäuser)", d: "General medicine, cardiology, neurology, orthopaedics, and surgical wards." },
              { t: "Intensive Care Units (Intensivstationen / ICU)", d: "High-dependency critical care monitoring and ventilator support." },
              { t: "Operating Theatres (OP-Bereich)", d: "Scrub nursing, surgical assistance, and perioperative patient care." },
              { t: "Emergency Departments (Notaufnahme)", d: "Triage, acute trauma care, and emergency resuscitation." },
              { t: "Elderly Care Facilities (Pflegeheime)", d: "Geriatric nursing, medication management, and long-term holistic care." },
              { t: "Rehabilitation Clinics (Rehakliniken)", d: "Post-stroke, cardiac, and musculoskeletal recovery care." },
              { t: "Home & Community Care (Ambulante Pflege)", d: "Outpatient home healthcare and visiting community nursing services." },
            ].map((w, idx) => (
              <div key={idx} className="p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <p className="font-bold text-zinc-900 dark:text-white">{w.t}</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">{w.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Documents Required */}
        <section className="space-y-4 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Document Checklist</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Documents Required for Nursing Jobs in Germany
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
              <p className="font-bold text-zinc-900 dark:text-white">Academic Records</p>
              <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-xs">
                <li>• Class 10 &amp; 12 certificates</li>
                <li>• GNM / BSc Nursing degree</li>
                <li>• Year-wise mark sheets</li>
                <li>• Detailed course curriculum</li>
                <li>• Clinical hours breakdown</li>
                <li>• Internship completion record</li>
              </ul>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
              <p className="font-bold text-zinc-900 dark:text-white">Professional Records</p>
              <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-xs">
                <li>• State Nursing Council registration</li>
                <li>• Good Standing Certificate</li>
                <li>• Clinical experience certificates</li>
                <li>• Professional reference letters</li>
                <li>• European-format CV (Europass)</li>
                <li>• Motivation letter in German</li>
              </ul>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
              <p className="font-bold text-zinc-900 dark:text-white">Personal &amp; Visa</p>
              <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-xs">
                <li>• Valid passport</li>
                <li>• German language certificates</li>
                <li>• Police clearance certificate (PCC)</li>
                <li>• Medical fitness certificate</li>
                <li>• Hospital contract / offer letter</li>
                <li>• Certified German translations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 11. 12-Step Process */}
        <section className="space-y-6 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Complete Roadmap</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Step-by-Step Process: How to Get a Nursing Job in Germany
            </h2>
          </div>

          <div className="space-y-3">
            {[
              { s: "Step 1", t: "Check Your Nursing Qualification", d: "Confirm GNM / BSc Nursing degree and valid State Nursing Council registration." },
              { s: "Step 2", t: "Start Learning German", d: "Begin with A1 and progress systematically to B1 and B2 levels." },
              { s: "Step 3", t: "Prepare Professional Documents", d: "Compile qualification transcripts, clinical hours breakdown, and syllabus records." },
              { s: "Step 4", t: "Identify the Recognition Authority", d: "Find the competent licensing Landesamt in your preferred German federal state." },
              { s: "Step 5", t: "Apply for Nursing Vacancies", d: "Submit tailored applications to accredited German hospitals and healthcare providers." },
              { s: "Step 6", t: "Attend Employer Interviews", d: "Participate in online clinical interviews with prospective German hospital matrons." },
              { s: "Step 7", t: "Initiate Recognition Procedure", d: "Submit credentials for official Anerkennung assessment." },
              { s: "Step 8", t: "Receive Employment Contract", d: "Get your signed contract detailing salary, working hours, and shift structure." },
              { s: "Step 9", t: "Apply for the German Visa", d: "Submit your application under Section 18a, 16d(1), or 16d(3) with German Missions." },
              { s: "Step 10", t: "Travel to Germany", d: "Relocate, complete registration (Anmeldung), and settle into your hospital accommodation." },
              { s: "Step 11", t: "Complete Remaining Recognition", d: "Finish your adaptation placement or knowledge examination if required." },
              { s: "Step 12", t: "Begin Fully Licensed Practice", d: "Receive your official Urkunde license and practice as a registered nurse in Germany." },
            ].map((step, idx) => (
              <div key={idx} className="p-3.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex gap-3.5 items-start">
                <span className="px-2 py-0.5 bg-[#BC0202] text-white text-[11px] font-bold shrink-0">{step.s}</span>
                <div>
                  <p className="font-bold text-zinc-900 dark:text-white text-xs sm:text-sm">{step.t}</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 12. Gyanshala Language Training for Nurses */}
        <section className="space-y-4 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Language Specialisation</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              German Language Training for Nurses at Gyanshala
            </h2>
            <p className="mt-1 text-zinc-800 dark:text-zinc-200 font-semibold">
              Your German Nursing Career Starts with Language Learning!
            </p>
          </div>
          <p>
            At Gyanshala Foreign Language Academy, Jaipur, our training prepares nurses specifically for clinical communication, patient dialogue, German medical terminology, and recognised examination success (Goethe &amp; telc):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <strong>German A1 Course:</strong> Basic pronunciation, grammar, numbers, vital signs, and introductory dialogue.
            </div>
            <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <strong>German A2 Course:</strong> Patient intake, daily clinical routines, symptoms, and appointment scheduling.
            </div>
            <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <strong>German B1 Course:</strong> Independent clinical conversation, nursing care plans, and emergency response.
            </div>
            <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <strong>German B2 Course:</strong> Advanced medical handover reports, drug administration records, doctor briefings, and telc B1-B2 Pflege prep.
            </div>
          </div>
        </section>

        {/* 13. Fresh Graduates & Family Reunification */}
        <section className="space-y-5 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h3 className="font-bold text-zinc-900 dark:text-white">Nursing Jobs Without Experience?</h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                Fresh BSc Nursing and GNM graduates may apply. Many German hospital clusters hire recent graduates directly and support them through the structured adaptation programme and hospital orientation.
              </p>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h3 className="font-bold text-zinc-900 dark:text-white">Can Indian Nurses Bring Their Families?</h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                Yes. Under Germany&apos;s Skilled Immigration Act, nurses working on a qualified residence permit can apply for family reunification, enabling spouses to work without restriction and children to access free German schooling.
              </p>
            </div>
          </div>
        </section>

        {/* 14. Ethical Recruitment & Fair Recruitment Healthcare */}
        <section className="p-5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
            Important Consumer Advice: Avoid Misleading Recruitment Offers
          </p>
          <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200">
            Germany promotes ethical nursing recruitment through the <strong>Fair Recruitment Healthcare Germany</strong> quality seal (<em>Faire Anwerbung Pflege Deutschland</em>). Under this standard, recruitment costs are borne by the German employer (the &quot;Employer-Pays Principle&quot;). Never pay exorbitant placement fees based on verbal guarantees.
          </p>
        </section>

        {/* 15. Frequently Asked Questions (17 FAQs) */}
        <section className="space-y-6 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Clarifications</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Frequently Asked Questions – Direct Nursing Jobs in Germany
            </h2>
          </div>

          <div className="space-y-3">
            {[
              { q: "1. Can Indian BSc Nursing graduates work directly in Germany?", a: "Yes. Indian BSc Nursing graduates may apply for German nursing employment. Full independent practice requires professional qualification recognition, B2 German proficiency, and a German nursing licence." },
              { q: "2. Can GNM nurses apply for nursing jobs in Germany?", a: "Yes. GNM-qualified nurses can explore German nursing recognition and employment pathways. Their qualification is assessed individually by the responsible state authority." },
              { q: "3. Is German B2 mandatory for nursing jobs?", a: "B2 is generally mandatory for full professional nursing licensing (Urkunde). Some recognition pathways permit entry at B1 or A2, but full practice requires B2." },
              { q: "4. Can nurses apply with B1 German?", a: "Some employers consider B1 applicants for recruitment partnerships. However, B1 alone does not grant full registered nursing authorisation." },
              { q: "5. Can nurses work in Germany without a German licence?", a: "They cannot practice as fully recognised nurses without authorisation. However, they may work in supervised nursing assistant roles during their recognition period." },
              { q: "6. Is work experience compulsory?", a: "There is no universal minimum experience requirement. Fresh graduates can apply if an employer offers an adaptation placement." },
              { q: "7. Is IELTS mandatory for nursing jobs in Germany?", a: "No. IELTS is not required for German nursing. German language proficiency (Goethe/telc) is the primary requirement." },
              { q: "8. Is NCLEX required for Germany?", a: "No. NCLEX is an American licensing exam. Germany has its own recognition procedure (Anerkennung)." },
              { q: "9. What is the nursing salary in Germany?", a: "Federal Employment Agency data reports a full-time gross median of approximately €4,587 per month for general healthcare nurses. Starting assistant salaries during recognition typically range between €2,300–€2,800 gross." },
              { q: "10. What is a Defizitbescheid?", a: "It is an official decision letter from the German authority identifying specific gaps between your Indian qualification and German standards, specifying what measures are needed." },
              { q: "11. What is the Kenntnisprüfung?", a: "A professional knowledge exam assessing clinical nursing skills and theory to achieve qualification equivalence." },
              { q: "12. What is an Anpassungslehrgang?", a: "An adaptation programme (supervised clinical practice + seminars) through which nurses bridge identified differences." },
              { q: "13. Can nurses bring their spouses and children to Germany?", a: "Yes, eligible nurses on a skilled worker residence permit can apply for family reunification." },
              { q: "14. Can nurses apply for permanent residence in Germany?", a: "Yes, eligible skilled healthcare professionals can apply for a settlement permit (Niederlassungserlaubnis) after meeting employment, contribution, and language conditions." },
              { q: "15. Is an EU Blue Card available for nursing professionals?", a: "No, standard nursing positions do not fall under the EU Blue Card. Nurses apply under skilled worker (Section 18a) or recognition visas (Section 16d)." },
              { q: "16. Can I learn German at Gyanshala Foreign Language Academy?", a: "Yes. Gyanshala Academy provides structured German courses from A1 to B2 with exam preparation for healthcare professionals." },
              { q: "17. Does Gyanshala guarantee a nursing job or German visa?", a: "No. Employment selection, professional recognition, and visa approvals are strictly handled by German hospitals, licensing boards, and German embassies." },
            ].map((faq, idx) => (
              <div key={idx} className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                <h3 className="font-bold text-zinc-900 dark:text-white text-xs sm:text-sm">{faq.q}</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 16. CTA Section */}
        <section className="p-6 sm:p-8 bg-[#BC0202] text-white space-y-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Start Your Nursing Career Journey in Germany!
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
            Are You a BSc Nursing or GNM Graduate? Take the First Step Towards Your German Nursing Career! 🇩🇪 Learn German, strengthen your communication skills, and prepare for German hospital recognition.
          </p>
          <div className="pt-2">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ECBB0C] hover:bg-[#d9ab0b] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              Enquire About German Courses (A1, A2, B1 &amp; B2) →
            </Link>
          </div>
          <p className="text-xs text-white/80 pt-2">
            Gyanshala Foreign Language Academy • Jaipur, Rajasthan, India
          </p>
        </section>

        {/* 17. Important Disclaimer & Official Sources */}
        <footer className="p-4 sm:p-5 bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 space-y-2">
          <p className="font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
            Important Disclaimer
          </p>
          <p>
            Gyanshala Foreign Language Academy provides German language training and general educational information. Nursing qualification recognition, professional authorisation, employment selection, compensation, visa approval, and residence permission are determined by the relevant German authorities and employers.
          </p>
          <p className="font-semibold text-zinc-700 dark:text-zinc-300 pt-1">Official Information Sources:</p>
          <p>
            Make it in Germany – Nursing Professionals • Recognition in Germany (Anerkennungsportal) • German Missions in India (Visa Regulations).
          </p>
          <p className="pt-1 text-[10px] text-zinc-400">
            © 2026 Gyanshala Foreign Language Academy. All Rights Reserved.
          </p>
        </footer>

      </article>

    </main>
  );
}
