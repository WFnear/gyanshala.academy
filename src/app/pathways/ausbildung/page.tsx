import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Ausbildung in Germany – Earn While You Learn | Gyanshala Academy",
  description:
    "Complete guide to Dual Vocational Training (Ausbildung) in Germany for Indian students: Class 12 eligibility, monthly stipends (€724–€1,014+), German language levels (B1/B2), popular professions, visa process, and career opportunities.",
};

export default function AusbildungPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      
      {/* =========================================================================
          HERO SECTION (SAME DESIGN AS ABOUT US)
          ========================================================================= */}
      <section className="relative min-h-[300px] sm:min-h-[360px] md:min-h-[420px] flex flex-col items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-24 text-white text-center bg-zinc-950">
        <Image
          src="/Pathways/ausbildung.png"
          alt="Ausbildung in Germany - Gyanshala Foreign Language Academy"
          fill
          priority
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/60 sm:bg-black/55 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
              AUSBILDUNG IN GERMANY
            </h1>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-white/95 font-medium tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] max-w-2xl mx-auto">
              Earn While You Learn • Start Your Professional Career in Germany with Paid Vocational Training
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
              Vocational Career Pathway
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Start Your Professional Career in Germany with Paid Vocational Training!
            </h2>
          </div>
          <p className="text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-200">
            Completed Your 12th? Explore Career Opportunities in Germany Through Ausbildung!
          </p>
          <p>
            Germany offers an excellent opportunity for international students to gain practical professional qualifications through its internationally respected vocational training system, known as <strong>Ausbildung</strong>.
          </p>
          <p>
            Ausbildung combines practical workplace training with theoretical education, helping students develop industry-relevant skills while working towards a recognised German vocational qualification.
          </p>
          <p>
            In many dual Ausbildung programmes, students receive a monthly training allowance from their German employer, allowing them to earn money while developing valuable professional experience.
          </p>
          <p>
            At <strong>Gyanshala Foreign Language Academy, Jaipur</strong>, we help aspiring students build the German language skills and communication confidence needed to prepare for Ausbildung opportunities in Germany.
          </p>
          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-none text-center font-bold text-zinc-900 dark:text-white tracking-wide">
            Learn German. Develop Professional Skills. Build Your Future in Germany.
          </div>
        </section>

        {/* 2. What is Ausbildung */}
        <section className="space-y-5 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">System Overview</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              What is Ausbildung in Germany?
            </h2>
          </div>
          <p>
            Ausbildung is Germany&apos;s structured vocational education and training system. It prepares students for skilled professions through a combination of classroom education and practical industry training.
          </p>
          <p>
            The most common form, known as <strong>Duale Ausbildung (Dual Vocational Training)</strong>, allows students to learn professional skills while receiving hands-on training with a German employer.
          </p>
          
          <div className="space-y-3">
            <p className="font-semibold text-zinc-900 dark:text-white">
              During the programme, students generally divide their training between:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202] mt-2 shrink-0" />
                <span>
                  <strong className="text-zinc-900 dark:text-white">Practical Training:</strong> Working with a German company or organisation to develop professional skills.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202] mt-2 shrink-0" />
                <span>
                  <strong className="text-zinc-900 dark:text-white">Theoretical Education:</strong> Attending a vocational school (<em>Berufsschule</em>) to learn the academic and technical knowledge required for the profession.
                </span>
              </li>
            </ul>
          </div>
          <p>
            Most Ausbildung programmes last approximately <strong>2 to 3.5 years</strong>, depending on the selected occupation. After completing the required training and successfully passing the examinations, students receive a recognised vocational qualification in their chosen profession.
          </p>

          {/* Programme Highlights Box */}
          <div className="p-5 sm:p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <h3 className="font-bold text-zinc-900 dark:text-white text-base sm:text-lg">
              Ausbildung in Germany – Programme Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
              <div><strong>Destination:</strong> Germany 🇩🇪</div>
              <div><strong>Programme Type:</strong> Vocational Education &amp; Training</div>
              <div><strong>Training Duration:</strong> Generally 2–3.5 years</div>
              <div><strong>Education:</strong> Class 12 or equivalent qualification</div>
              <div><strong>German Language:</strong> Usually B1 or higher (B2 for some)</div>
              <div><strong>Training Allowance:</strong> Paid in dual vocational training</div>
              <div><strong>Work Experience:</strong> Practical training with German employer</div>
              <div><strong>Qualification:</strong> Recognised German vocational qualification</div>
              <div><strong>Career Opportunities:</strong> Potential employment &amp; growth</div>
              <div><strong>Visa:</strong> German national vocational visa required</div>
            </div>
          </div>
        </section>

        {/* 3. Types of Ausbildung */}
        <section className="space-y-6 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Training Formats</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Types of Ausbildung in Germany
            </h2>
          </div>

          <div className="space-y-5">
            <div className="p-5 sm:p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                1. Dual Ausbildung (Duale Berufsausbildung)
              </h3>
              <p>
                Dual Ausbildung is the most common vocational training system in Germany. Students gain practical experience with an employer while attending a vocational school.
              </p>
              <p className="font-semibold text-zinc-900 dark:text-white text-xs sm:text-sm">Main Features:</p>
              <ul className="space-y-1.5 text-xs sm:text-sm pl-2">
                {[
                  "Combination of practical and theoretical learning",
                  "Monthly training allowance paid by the employer",
                  "Structured professional training",
                  "Industry-recognised qualifications",
                  "Opportunities for employment after successful completion",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 pt-1">
                Dual Ausbildung programmes are available in fields such as engineering trades, hospitality, logistics, retail, and various technical professions.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                2. School-Based Ausbildung (Schulische Ausbildung)
              </h3>
              <p>
                School-based Ausbildung primarily takes place at specialised vocational schools, sometimes with practical training periods in companies or institutions.
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                Unlike dual vocational training, school-based programmes do not always provide a monthly allowance. Some private schools may also charge tuition fees. Certain healthcare training programmes follow different funding and remuneration arrangements. Students should verify the programme structure, fees, training allowance, and qualification recognition before applying.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Popular Ausbildung Courses */}
        <section className="space-y-5 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Popular Careers</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Popular Ausbildung Courses in Germany
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Germany offers hundreds of recognised vocational training occupations across different professional sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Nursing and Healthcare",
                role: "Pflegefachfrau / Pflegefachmann",
                desc: "Prepares students for professional nursing responsibilities in hospitals, healthcare facilities, and care homes. 3-year duration combining theory with supervised clinical practice.",
              },
              {
                title: "Hotel Management and Hospitality",
                role: "Hotelfachmann / Hotelfachfrau",
                desc: "Prepares students for dynamic careers in international hotels, restaurants, guest services, culinary operations, and hospitality management.",
              },
              {
                title: "Information Technology (IT)",
                role: "Fachinformatiker / Fachinformatikerin",
                desc: "Develops hands-on expertise in software application development, system integration, cybersecurity, network administration, and IT infrastructure.",
              },
              {
                title: "Mechatronics and Electronics",
                role: "Mechatroniker / Elektroniker",
                desc: "Technical training covering complex mechanical assemblies, electrical equipment, industrial automated machinery, and modern maintenance.",
              },
              {
                title: "Logistics and Warehouse Management",
                role: "Fachkraft für Lagerlogistik",
                desc: "Focuses on global inventory management, freight routing, modern warehouse operations, digitised dispatch, and supply chain processes.",
              },
              {
                title: "Retail and Sales",
                role: "Kaufmann / Kauffrau im Einzelhandel",
                desc: "Teaches professional customer relations, brand retail merchandising, inventory accounting, stock control, and commercial sales management.",
              },
              {
                title: "Culinary Arts & Professional Cooking",
                role: "Koch / Köchin",
                desc: "Comprehensive culinary vocational training covering kitchen brigade operations, international food preparation, nutrition, and hygiene standards.",
              },
              {
                title: "Automotive Technology",
                role: "Kfz-Mechatroniker",
                desc: "Hands-on diagnostic and repair training in vehicle electronics, hybrid/electric powertrains, engine mechanics, and automotive engineering.",
              },
            ].map((course, idx) => (
              <div key={idx} className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm sm:text-base">
                  {course.title}
                </h3>
                <p className="text-[11px] font-semibold text-[#BC0202]">
                  {course.role}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  {course.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            * Programme availability, qualifications, language requirements, and training allowances vary by employer, profession, and location.
          </p>
        </section>

        {/* 5. Eligibility Criteria */}
        <section className="space-y-5 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Requirements</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Eligibility Criteria for Ausbildung in Germany
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Indian students interested in Ausbildung must satisfy the requirements of the selected employer, vocational school, and relevant German authorities.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 space-y-1">
              <h3 className="font-bold text-zinc-900 dark:text-white">Educational Qualification</h3>
              <p className="text-xs sm:text-sm">
                Students who have completed <strong>Class 12</strong> may apply for suitable Ausbildung opportunities. Some vocational training programmes may also be accessible with other qualifying school-leaving certificates, subject to employer requirements and educational recognition rules.
              </p>
            </div>

            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 space-y-1">
              <h3 className="font-bold text-zinc-900 dark:text-white">German Language Proficiency</h3>
              <p className="text-xs sm:text-sm">
                German language proficiency is one of the most important requirements for Ausbildung:
              </p>
              <ul className="text-xs sm:text-sm space-y-1 pt-1">
                <li><strong>A1–A2:</strong> Foundation levels for learning German</li>
                <li><strong>B1:</strong> Common minimum expectation for many Ausbildung programmes</li>
                <li><strong>B2:</strong> Often preferred or required for programmes involving more advanced communication, particularly healthcare/nursing</li>
              </ul>
            </div>

            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 space-y-1">
              <h3 className="font-bold text-zinc-900 dark:text-white">Age Requirements</h3>
              <p className="text-xs sm:text-sm">
                There is no single general maximum age that applies to every Ausbildung contract. However, certain visa categories have specific age limits (for example, the visa to seek an Ausbildung place in Germany requires applicants to be under 35).
              </p>
            </div>

            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 space-y-1">
              <h3 className="font-bold text-zinc-900 dark:text-white">Other Essential Documents</h3>
              <p className="text-xs sm:text-sm">
                Valid passport, Class 10 &amp; 12 certificates, German language certificates, German-format professional CV &amp; motivation letter, confirmed training contract (<em>Ausbildungsvertrag</em>), proof of health insurance, and financial evidence.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Ausbildung Salary / Allowance Table */}
        <section className="space-y-6 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Earn While You Learn</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Ausbildung Salary in Germany – Monthly Allowances
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              One of the major advantages of dual Ausbildung is the opportunity to receive a monthly training allowance. The allowance increases each training year as your professional skills develop.
            </p>
          </div>

          <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-white font-bold">
                <tr>
                  <th className="p-3 sm:p-3.5 border-b border-zinc-200 dark:border-zinc-700">Training Year</th>
                  <th className="p-3 sm:p-3.5 border-b border-zinc-200 dark:border-zinc-700">Statutory Minimum Monthly Allowance (2026)</th>
                  <th className="p-3 sm:p-3.5 border-b border-zinc-200 dark:border-zinc-700">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {[
                  { year: "First Year", allowance: "€724 Gross / month", notes: "Minimum legal rate for arrangements starting in 2026" },
                  { year: "Second Year", allowance: "€854 Gross / month", notes: "18% statutory increment" },
                  { year: "Third Year", allowance: "€977 Gross / month", notes: "35% statutory increment over year 1" },
                  { year: "Fourth Year", allowance: "€1,014 Gross / month", notes: "Applicable for 3.5-year technical programmes" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="p-3 sm:p-3.5 font-bold text-zinc-900 dark:text-white">{row.year}</td>
                    <td className="p-3 sm:p-3.5 font-bold text-[#BC0202]">{row.allowance}</td>
                    <td className="p-3 sm:p-3.5 text-zinc-500 dark:text-zinc-400">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            * These amounts are gross minimum statutory allowances for covered training arrangements starting in 2026. Many professions (especially Nursing, IT, and Automotive) offer significantly higher collective agreement allowances (often €1,000–€1,300+ per month). A training allowance does not automatically guarantee that a student satisfies financial requirements for a visa; additional proof of funds may be necessary if living costs exceed the net allowance.
          </p>
        </section>

        {/* 7. Language Training at Gyanshala */}
        <section className="space-y-5 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Language Preparation</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              German Language Training for Ausbildung at Gyanshala
            </h2>
            <p className="mt-2 text-zinc-800 dark:text-zinc-200 font-semibold">
              Your German Language Journey Starts Here!
            </p>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              Strong German communication skills help students prepare for Ausbildung interviews, vocational school lessons, workplace responsibilities, and everyday life in Germany. At Gyanshala Foreign Language Academy, students develop their German language skills progressively through structured CEFR-based training:
            </p>
          </div>

          <div className="space-y-3">
            {[
              { level: "A1 – Beginner", desc: "Learn everyday expressions, pronunciation, vocabulary, and basic German communication." },
              { level: "A2 – Elementary", desc: "Develop conversational skills, strengthen grammar, and communicate in familiar situations." },
              { level: "B1 – Intermediate", desc: "Build independent communication skills, express opinions, and prepare for common Ausbildung language expectations." },
              { level: "B2 – Upper-Intermediate", desc: "Improve professional communication, listening comprehension, advanced grammar, and confidence for programmes requiring higher language levels." },
            ].map((course, idx) => (
              <div key={idx} className="p-3.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm">{course.level}</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">{course.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="font-bold text-zinc-900 dark:text-white">Our Language Training Emphasises:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {[
                "German speaking and pronunciation",
                "Grammar and vocabulary development",
                "Listening and reading comprehension",
                "Writing and email communication",
                "Everyday conversation practice",
                "Goethe examination-oriented preparation",
                "German communication for interviews and professional situations",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 8. Step-by-Step Application Roadmap */}
        <section className="space-y-6 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Application Roadmap</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Step-by-Step Process to Apply for Ausbildung in Germany
            </h2>
          </div>

          <div className="space-y-3.5">
            {[
              { step: "Step 1", title: "Choose Your Career Field", desc: "Select a vocational training profession based on your educational background, interests, skills, and career goals." },
              { step: "Step 2", title: "Learn German", desc: "Develop German language proficiency, usually to B1 or B2 level depending on the training programme and employer requirements." },
              { step: "Step 3", title: "Prepare Your Documents", desc: "Prepare your passport, educational certificates, German language evidence, professional German-format CV, and motivation letter." },
              { step: "Step 4", title: "Apply for Ausbildung Positions", desc: "Search for suitable vacancies and submit applications directly to German employers or accredited training institutions." },
              { step: "Step 5", title: "Attend Interviews", desc: "Shortlisted candidates are invited to online interviews, assessments, or language evaluations with prospective employers." },
              { step: "Step 6", title: "Receive a Training Contract", desc: "Successful candidates receive a signed training agreement (Ausbildungsvertrag) registered with the competent chamber (IHK/HWK)." },
              { step: "Step 7", title: "Apply for the German Visa", desc: "Apply through the official German visa process with the German Missions in India, submitting your contract, language proof, and insurance." },
              { step: "Step 8", title: "Travel to Germany and Begin Training", desc: "After receiving your visa, complete travel arrangements, city registration (Anmeldung), and begin your paid vocational training programme." },
            ].map((s, idx) => (
              <div key={idx} className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex gap-4 items-start">
                <span className="px-2.5 py-1 bg-[#BC0202] text-white text-xs font-bold shrink-0">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white text-sm sm:text-base">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Career Opportunities After Ausbildung */}
        <section className="space-y-4 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Future Growth</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Career Opportunities After Completing Ausbildung
            </h2>
          </div>
          <p>
            Successfully completing Ausbildung can create opportunities for professional employment and further career development in Germany.
          </p>
          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <p className="font-bold text-zinc-900 dark:text-white">Graduates may:</p>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {[
                "Apply for qualified employment in their trained profession",
                "Seek opportunities with their training employer or other companies in Germany",
                "Pursue advanced professional qualifications (Master Craftsman / Meister or Fachwirt)",
                "Undertake further specialised vocational education",
                "Explore higher education pathways where eligible",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Eligible non-EU graduates may apply for a residence permit to seek qualified employment for <strong>up to 18 months</strong> after completing vocational training. Long-term employment, residence, or permanent settlement is subject to applicable immigration rules and individual eligibility.
          </p>
        </section>

        {/* 10. Why Choose Gyanshala */}
        <section className="space-y-4 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Gyanshala Advantage</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Why Choose Gyanshala Foreign Language Academy?
            </h2>
            <p className="mt-1 text-zinc-800 dark:text-zinc-200 font-semibold">
              Build Your German Language Foundation for Germany
            </p>
          </div>
          <p>
            At Gyanshala Foreign Language Academy, we believe that strong language skills are essential for successful communication in international education and professional environments. Our German language programmes are designed to help students develop practical language abilities through structured lessons, grammar practice, vocabulary exercises, and communication-based learning.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            {[
              "Structured German language training from beginner to advanced levels",
              "Emphasis on real-life speaking and listening",
              "German grammar and vocabulary development",
              "Goethe examination-oriented preparation",
              "Communication skills relevant to education and work",
              "Guidance in identifying appropriate language learning goals",
              "Progressive preparation for German-speaking environments",
            ].map((pt, idx) => (
              <div key={idx} className="p-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202] shrink-0" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 11. Frequently Asked Questions */}
        <section className="space-y-6 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Common Inquiries</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Frequently Asked Questions About Ausbildung in Germany
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "1. Can I apply for Ausbildung after completing Class 12 in India?",
                a: "Yes. Indian students who have completed Class 12 can apply for suitable Ausbildung programmes, provided they meet the educational, language, and employer-specific requirements.",
              },
              {
                q: "2. Is Ausbildung free in Germany?",
                a: "Many dual Ausbildung programmes do not charge tuition fees and instead provide a training allowance. However, applicants may still need to pay for language learning, documentation, visa fees, travel, accommodation, and other expenses. School-based programmes may have different fee structures.",
              },
              {
                q: "3. Is German B1 sufficient for Ausbildung?",
                a: "B1 is commonly required for many programmes. However, individual employers and professions may require B2 or another level.",
              },
              {
                q: "4. Is IELTS mandatory for Ausbildung in Germany?",
                a: "IELTS is not generally a standard requirement for German-language Ausbildung. German language proficiency is usually more relevant, but applicants must follow the requirements of their chosen programme.",
              },
              {
                q: "5. Can I receive a salary during Ausbildung?",
                a: "Students in dual vocational training receive a training allowance from their employer. The amount depends on their occupation and training contract.",
              },
              {
                q: "6. Can I work in Germany after completing Ausbildung?",
                a: "Yes, successful graduates may seek qualified employment, subject to obtaining the appropriate residence permission and fulfilling any professional requirements.",
              },
              {
                q: "7. Can I settle permanently in Germany after Ausbildung?",
                a: "Ausbildung may contribute towards a longer-term career and residence pathway, but permanent residence is not automatic. Applicants must meet the applicable immigration requirements.",
              },
              {
                q: "8. Does Gyanshala guarantee Ausbildung admission or a German visa?",
                a: "No. Employer selection, training contracts, examination outcomes, and visa decisions are handled by the relevant organisations and German authorities. German language training does not guarantee admission, placement, or visa approval.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-4 sm:p-5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm sm:text-base">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 12. CTA Section */}
        <section className="p-6 sm:p-8 bg-[#BC0202] text-white space-y-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Start Your Ausbildung Journey with Gyanshala!
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
            Learn German Today. Prepare for Professional Opportunities in Germany Tomorrow! Are you ready to explore vocational training opportunities in Germany? Develop the language skills you need to communicate with confidence.
          </p>
          <div className="pt-2">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ECBB0C] hover:bg-[#d9ab0b] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              Enquire About German Courses (A1 to B2) →
            </Link>
          </div>
          <p className="text-xs text-white/80 pt-2">
            Gyanshala Foreign Language Academy • Jaipur, Rajasthan, India
          </p>
        </section>

        {/* 13. Important Disclaimer */}
        <footer className="p-4 sm:p-5 bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 space-y-2">
          <p className="font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
            Important Disclaimer
          </p>
          <p>
            Gyanshala Foreign Language Academy provides German language education and related guidance. Training placements, employer contracts, stipend amounts, programme eligibility, and visa approvals depend on third-party decisions and applicable German requirements.
          </p>
          <p>
            All fees for optional educational or advisory services, where applicable, should be explained separately and transparently. No training position, salary, visa approval, or immigration outcome is guaranteed.
          </p>
        </footer>

      </article>

    </main>
  );
}
