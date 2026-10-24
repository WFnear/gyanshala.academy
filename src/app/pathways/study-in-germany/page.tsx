import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Study in Germany – Your Gateway to World-Class Education | Gyanshala Academy",
  description:
    "Complete guide to studying in Germany for Indian students: tuition-free public universities, Bachelor's & Master's eligibility, Studienkolleg, APS certificate, blocked account (€11,904), German language levels (A1–C2), and visa process.",
};

export default function StudyInGermanyPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      
      {/* =========================================================================
          HERO SECTION (SAME DESIGN AS ABOUT US)
          ========================================================================= */}
      <section className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px] flex flex-col items-center justify-center overflow-hidden py-14 sm:py-16 md:py-20 text-white text-center bg-zinc-950">
        <Image
          src="/Pathways/studyingermany.png"
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
              Your Gateway to World-Class Education • Build Your International Career
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
              Gateway to Higher Education
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Study at German Universities and Build Your International Career!
            </h2>
          </div>
          <p className="text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-200">
            Dreaming of Studying in Germany? Make Your Dream a Reality with Gyanshala Foreign Language Academy!
          </p>
          <p>
            Germany is one of the leading destinations for international higher education, offering internationally recognised degrees, research opportunities, modern academic facilities, and a wide range of programmes across different fields.
          </p>
          <p>
            With numerous public universities offering tuition-free education for eligible programmes, Germany has become an attractive destination for students seeking high-quality education at an affordable cost.
          </p>
          <p>
            Whether you want to pursue a Bachelor&apos;s degree, Master&apos;s degree, MBA, Engineering, Computer Science, or a research programme, Germany provides diverse academic opportunities for international students.
          </p>
          <p>
            At <strong>Gyanshala Foreign Language Academy, Jaipur</strong>, we help students develop the German language skills needed to prepare for German-taught university programmes, academic communication, and everyday life in Germany.
          </p>
          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-none text-center font-bold text-zinc-900 dark:text-white tracking-wide">
            Learn German. Study Globally. Build Your Future.
          </div>
        </section>

        {/* 2. Why Study in Germany */}
        <section className="space-y-5 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Global Excellence</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Why Study in Germany?
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Germany combines a strong academic system with practical learning, scientific research, and opportunities for international professional development.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
              Key Benefits of Studying in Germany
            </h3>
            <ul className="space-y-2.5">
              {[
                { title: "Quality Higher Education", desc: "Germany has an established higher education system with internationally recognised universities and qualifications." },
                { title: "Affordable Education", desc: "Most public universities charge no tuition fees for many Bachelor's and Master's programmes, although exceptions apply." },
                { title: "Globally Recognised Degrees", desc: "German higher education qualifications can support international academic and professional opportunities." },
                { title: "English and German Programmes", desc: "Students can choose from a variety of programmes taught in German or English." },
                { title: "Research and Innovation", desc: "Germany offers opportunities in engineering, scientific research, technology, business, and other academic fields." },
                { title: "Practical Learning", desc: "Many programmes include research projects, laboratory work, internships, or industry-focused learning." },
                { title: "Part-Time Employment", desc: "Eligible international students may work part-time during their studies within applicable legal limits." },
                { title: "Post-Study Opportunities", desc: "Eligible graduates can apply for a residence permit to seek qualified employment in Germany." },
                { title: "International Student Environment", desc: "German universities welcome students from many countries and academic backgrounds." },
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

        {/* 3. Higher Education Programmes in Germany */}
        <section className="space-y-6 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Degrees &amp; Qualifications</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Higher Education Programmes in Germany
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Germany offers several types of academic qualifications depending on your previous education and career objectives.
            </p>
          </div>

          {/* Bachelor's Degree */}
          <div className="p-5 sm:p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
              1. Bachelor&apos;s Degree in Germany
            </h3>
            <p>
              A Bachelor&apos;s degree is an undergraduate academic qualification, generally completed in three to four years, depending on the programme and institution.
            </p>
            <div>
              <p className="font-semibold text-zinc-900 dark:text-white mb-2">Popular Bachelor&apos;s programmes include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                {[
                  "Mechanical Engineering",
                  "Computer Science",
                  "Electrical Engineering",
                  "Business Administration",
                  "Automotive Engineering",
                  "Artificial Intelligence and Data Science",
                  "Economics and Finance",
                  "Biotechnology",
                  "Architecture",
                  "Environmental Science",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              Indian students must satisfy the German higher education entrance qualification requirements. Completing Class 12 does not automatically qualify every applicant for direct Bachelor&apos;s admission. Depending on their qualifications, students may need to complete a Studienkolleg or qualifying previous university study.
            </p>
          </div>

          {/* Master's Degree */}
          <div className="p-5 sm:p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
              2. Master&apos;s Degree in Germany
            </h3>
            <p>
              Germany offers a wide range of Master&apos;s degree programmes for graduates seeking advanced academic qualifications and specialised professional knowledge. Most Master&apos;s programmes take approximately 1–2 years, depending on their structure and credit requirements.
            </p>
            <div>
              <p className="font-semibold text-zinc-900 dark:text-white mb-2">Popular fields include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                {[
                  "Master of Science in Computer Science",
                  "Data Science and Artificial Intelligence",
                  "Mechanical and Automotive Engineering",
                  "Electrical and Electronics Engineering",
                  "Renewable Energy",
                  "Biotechnology and Life Sciences",
                  "International Business and Management",
                  "Supply Chain Management",
                  "Cybersecurity",
                  "Robotics and Automation",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              Admission normally requires a recognised Bachelor&apos;s degree that satisfies the academic and subject requirements of the selected Master&apos;s programme. Some programmes may also require relevant work experience, aptitude tests, or additional qualifications.
            </p>
          </div>

          {/* MBA and Business */}
          <div className="p-5 sm:p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
              3. MBA and Business Programmes
            </h3>
            <p>
              Germany offers MBA and other postgraduate business programmes covering management, finance, entrepreneurship, marketing, international business, and leadership.
            </p>
            <p>
              MBA admission requirements vary considerably. Many programmes require a recognised undergraduate degree and relevant professional experience. Tuition fees are more common for MBA programmes than for standard consecutive Master&apos;s programmes at public universities.
            </p>
          </div>

          {/* PhD and Research */}
          <div className="p-5 sm:p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
              4. PhD and Research Programmes
            </h3>
            <p>
              Germany also provides opportunities for doctoral studies and advanced academic research. PhD candidates may pursue individual doctoral research or structured doctoral programmes, depending on the university and subject area.
            </p>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Admission, supervision, funding, employment arrangements, and language requirements vary between institutions and research projects.
            </p>
          </div>
        </section>

        {/* 4. Types of Universities in Germany */}
        <section className="space-y-5 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Academic Landscape</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Types of Universities in Germany
            </h2>
          </div>

          <div className="space-y-4">
            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 space-y-1.5">
              <h3 className="font-bold text-zinc-900 dark:text-white">Public Universities</h3>
              <p>
                Public universities are primarily funded by the German government and generally offer a wide selection of academic and research-oriented degree programmes. Many Bachelor&apos;s and Master&apos;s programmes have no tuition fees, although semester contributions and certain tuition exceptions apply.
              </p>
            </div>

            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 space-y-1.5">
              <h3 className="font-bold text-zinc-900 dark:text-white">
                Universities of Applied Sciences (Hochschulen für angewandte Wissenschaften)
              </h3>
              <p>
                Universities of Applied Sciences focus on practical, application-oriented education. They often maintain strong connections with industry and provide programmes in engineering, business, design, technology, and social sciences.
              </p>
            </div>

            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 space-y-1.5">
              <h3 className="font-bold text-zinc-900 dark:text-white">Private Universities</h3>
              <p>
                Private universities may provide specialised academic programmes, smaller learning environments, and industry-oriented educational models. However, students should carefully verify institutional recognition, programme accreditation, tuition fees, and degree-awarding authority before applying.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Eligibility Criteria for Indian Students */}
        <section className="space-y-6 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Admission Standards</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Eligibility Criteria for Indian Students
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Admission requirements depend on the university, selected course, academic background, and language of instruction.
            </p>
          </div>

          {/* Bachelor's Eligibility with Important 2026/27 Update */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Bachelor&apos;s Degree Eligibility</h3>
            <p>
              Indian students applying for undergraduate programmes must meet Germany&apos;s recognised higher education entrance qualification requirements.
            </p>

            <div className="p-4 sm:p-5 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#BC0202]">
                Important Update for Winter Semester 2026/27 and Later
              </p>
              <p className="text-zinc-800 dark:text-zinc-200 font-medium">
                For the standard Indian Class XII admission routes identified by APS India, the updated eligibility criteria require a <strong>minimum overall score of 70% in Class XII</strong>.
              </p>
              <div className="space-y-2 text-xs sm:text-sm">
                <div>
                  <strong>Pathway 1: Class XII + Studienkolleg</strong>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Students with at least 70% overall in Class XII may qualify for subject-restricted admission through an appropriate Studienkolleg, provided all other requirements are satisfied.
                  </p>
                </div>
                <div>
                  <strong>Pathway 2: Class XII + One Successful Academic Year</strong>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Students with at least 70% overall in Class XII and one successfully completed academic year in a regular Bachelor&apos;s programme at a recognised higher education institution may qualify for direct subject-restricted admission in the same or a closely related field.
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 italic">
                * Other qualification-specific routes may exist. These are eligibility pathways, not admission guarantees. The final admission decision rests with the German higher education institution.
              </p>
            </div>
          </div>

          {/* Master's Eligibility */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Master&apos;s Degree Eligibility</h3>
            <p>Master&apos;s applicants generally require:</p>
            <ul className="space-y-1.5 pl-2">
              {[
                "A recognised Bachelor's degree",
                "Appropriate academic performance",
                "Relevant subject background and credits",
                "Required language proficiency",
                "Programme-specific eligibility documents",
                "Additional assessments or professional experience, where required",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. What is Studienkolleg */}
        <section className="space-y-5 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Preparatory Course</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              What is Studienkolleg in Germany?
            </h2>
          </div>
          <p>
            Studienkolleg is a preparatory educational programme designed for international students whose school-leaving qualification does not directly qualify them to begin university studies in Germany.
          </p>
          <p>
            The programme usually lasts two semesters (approximately one academic year). Students study relevant academic subjects and improve their German language skills before sitting for the final assessment examination known as the <strong>Feststellungsprüfung (FSP)</strong>.
          </p>
          <p>
            Successful completion of the appropriate recognised assessment may qualify students to apply for university programmes within the relevant subject area.
          </p>

          <div className="space-y-2">
            <h3 className="font-bold text-zinc-900 dark:text-white">Common Studienkolleg Courses</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <strong>T-Kurs:</strong> Engineering, mathematics, and technical/scientific fields
              </div>
              <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <strong>M-Kurs:</strong> Medicine, biology, and pharmaceutical fields
              </div>
              <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <strong>W-Kurs:</strong> Business, economics, and related social sciences
              </div>
              <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <strong>G-Kurs:</strong> Humanities
              </div>
              <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 sm:col-span-2">
                <strong>S-Kurs:</strong> Language-related programmes
              </div>
            </div>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Students commonly require German proficiency around B1–B2 for Studienkolleg admission, together with any required entrance examination. Completing Studienkolleg does not guarantee admission to a particular university or competitive programme.
          </p>
        </section>

        {/* 7. German Language Requirements */}
        <section className="space-y-6 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Language Competence</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              German Language Requirements for Studying in Germany
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              German language proficiency is especially important for students who want to pursue German-taught university programmes. Many programmes require advanced German language ability, often B2 or C1, along with an accepted language certificate.
            </p>
          </div>

          {/* CEFR Levels Table */}
          <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-white font-bold">
                <tr>
                  <th className="p-3 sm:p-3.5 border-b border-zinc-200 dark:border-zinc-700 w-28">German Level</th>
                  <th className="p-3 sm:p-3.5 border-b border-zinc-200 dark:border-zinc-700">Learning Objective</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {[
                  { level: "A1", desc: "Basic communication and everyday expressions" },
                  { level: "A2", desc: "Simple conversations and routine situations" },
                  { level: "B1", desc: "Independent communication on familiar topics" },
                  { level: "B2", desc: "Upper-intermediate academic and professional communication" },
                  { level: "C1", desc: "Advanced academic communication and comprehension" },
                  { level: "C2", desc: "Highest CEFR proficiency level" },
                ].map((row) => (
                  <tr key={row.level} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                    <td className="p-3 sm:p-3.5 font-bold text-[#BC0202]">{row.level}</td>
                    <td className="p-3 sm:p-3.5">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-zinc-900 dark:text-white">Which Level Is Required?</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><strong>Studienkolleg:</strong> Commonly B1 or B2, depending on the institution.</li>
              <li><strong>German-Taught Bachelor&apos;s:</strong> Often B2 or C1, with specific accepted examinations determined by the university.</li>
              <li><strong>German-Taught Master&apos;s:</strong> Commonly B2 or C1, depending on the programme.</li>
              <li><strong>English-Taught Programmes:</strong> Proof of English proficiency is normally required instead of German proficiency for admission, although additional conditions may apply.</li>
            </ul>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 pt-2">
              Universities may accept specific examinations such as <strong>TestDaF, DSH, Goethe-Zertifikat, telc</strong>, or other recognised qualifications. Students should always verify the exact certificate and minimum score accepted by their chosen university.
            </p>
          </div>
        </section>

        {/* 8. Study in English & Why Learn German */}
        <section className="space-y-5 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Language Strategy</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Can I Study in Germany in English?
            </h2>
          </div>
          <p>
            Yes. Germany offers numerous English-taught degree programmes, particularly at Master&apos;s level. Students applying to English-taught programmes may need to demonstrate English language proficiency through examinations such as IELTS or another test accepted by the university and relevant German visa authorities.
          </p>

          <div className="p-5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <h3 className="font-bold text-zinc-900 dark:text-white">
              Why Learn German Even if Your Course Is in English?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Learning German can help international students:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {[
                "Communicate during everyday activities",
                "Interact with local communities",
                "Understand German culture",
                "Manage accommodation and administrative matters",
                "Communicate with employers and colleagues",
                "Apply for internships and part-time positions",
                "Explore a wider range of employment opportunities after graduation",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs font-semibold text-zinc-900 dark:text-white pt-2 border-t border-zinc-200 dark:border-zinc-800">
              At Gyanshala Foreign Language Academy, we encourage students to build practical German language skills before travelling to Germany.
            </p>
          </div>
        </section>

        {/* 9. Cost of Studying in Germany */}
        <section className="space-y-6 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Financial Planning</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Cost of Studying in Germany
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Germany can be more affordable than many other international study destinations, particularly for students enrolling in tuition-free public university programmes. However, students must budget for living expenses, accommodation, health insurance, travel, university charges, and other costs.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-zinc-900 dark:text-white">Tuition Fees</h3>
              <p className="mt-1">
                <strong>Public Universities:</strong> Most public universities do not charge tuition fees for standard Bachelor&apos;s programmes and many Master&apos;s programmes. However, exceptions apply. For example, the German state of Baden-Württemberg generally charges non-EU international students €1,500 per semester for relevant degree programmes, subject to exemptions. Certain universities in Bavaria and some specialised or continuing education programmes may also charge tuition fees.
              </p>
              <p className="mt-2">
                <strong>Private Universities:</strong> Private institutions generally charge tuition fees, which vary significantly by university and degree programme.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-zinc-900 dark:text-white">Semester Contribution</h3>
              <p className="mt-1">
                Most students must pay a semester contribution to cover university administration and student services. Typical semester contributions range approximately from <strong>€70 to €430</strong>, depending on the institution.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-zinc-900 dark:text-white">Estimated Monthly Living Expenses</h3>
              <p className="mt-1">
                Students should plan for approximately <strong>€900–€1,200 per month</strong>, depending on the city and lifestyle.
              </p>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {["Accommodation", "Food & groceries", "Health insurance", "Transportation", "Study materials", "Mobile & internet", "Personal expenses"].map((exp, idx) => (
                  <div key={idx} className="p-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center font-medium">
                    {exp}
                  </div>
                ))}
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                * Living costs in major cities can be substantially higher than in smaller university towns.
              </p>
            </div>
          </div>
        </section>

        {/* 10. Blocked Account (Sperrkonto) */}
        <section className="space-y-5 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Visa Financial Requirement</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Blocked Account for Germany Student Visa (Sperrkonto)
            </h2>
          </div>
          <p>
            Indian students applying for a German student visa generally need to demonstrate that they have sufficient financial resources to support themselves during their studies. One commonly used method is opening a German blocked account, known as a <strong>Sperrkonto</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <p className="text-xs uppercase text-zinc-500 font-bold">Annual Amount (Standard 2026)</p>
              <p className="text-2xl font-black text-[#BC0202] mt-1">€11,904</p>
              <p className="text-xs text-zinc-500 mt-1">For one academic year</p>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <p className="text-xs uppercase text-zinc-500 font-bold">Monthly Withdrawal Limit</p>
              <p className="text-2xl font-black text-zinc-900 dark:text-white mt-1">€992</p>
              <p className="text-xs text-zinc-500 mt-1">Disbursed monthly for living expenses</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            The blocked account is <strong>not a university tuition fee</strong>. It contains the student&apos;s own money, which is released according to the applicable withdrawal conditions. Depending on the applicant&apos;s circumstances, certain scholarships or formal declarations of commitment may also be accepted as alternative financial evidence. Financial requirements may change, so applicants should verify the current amount with the German Missions in India before applying.
          </p>
        </section>

        {/* 11. APS Certificate */}
        <section className="space-y-4 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Document Verification</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              APS Certificate for Indian Students
            </h2>
          </div>
          <p>
            The Academic Evaluation Centre (APS India) verifies academic documents and educational qualifications issued by Indian institutions.
          </p>
          <p>
            An <strong>APS certificate is generally mandatory</strong> for Indian students applying for German university studies and the relevant student visa, unless a recognised exemption applies. The APS process helps establish the authenticity and evaluation of academic documentation.
          </p>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Students should complete the relevant academic stage before submitting an APS application and carefully follow the correct document checklist. An APS certificate does not guarantee university admission or visa approval.
          </p>
        </section>

        {/* 12. Scholarships */}
        <section className="space-y-4 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Funding Opportunities</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Scholarships for Studying in Germany
            </h2>
          </div>
          <p>
            Germany offers various scholarship and funding opportunities for international students. Depending on the scholarship programme, financial support may contribute towards living expenses, travel, research, or other eligible study costs.
          </p>
          <div>
            <p className="font-semibold text-zinc-900 dark:text-white mb-2">Potential Scholarship Sources:</p>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {[
                "DAAD (German Academic Exchange Service)",
                "Deutschlandstipendium",
                "University-specific scholarships",
                "Research funding programmes",
                "Eligible foundation and institutional scholarships",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Scholarship eligibility depends on academic achievements, programme requirements, nationality, field of study, financial circumstances, or other criteria. Scholarships are competitive and cannot be guaranteed.
          </p>
        </section>

        {/* 13. Working While Studying */}
        <section className="space-y-4 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Student Employment</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Can International Students Work While Studying in Germany?
            </h2>
          </div>
          <p>
            Yes. Eligible international students from non-EU countries can work alongside their academic studies under German immigration regulations.
          </p>
          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <p className="font-bold text-zinc-900 dark:text-white mb-2">Students are generally permitted to work up to:</p>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202] shrink-0" />
                <span><strong>140 full working days</strong> per year, or</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202] shrink-0" />
                <span><strong>280 half working days</strong> per year, or</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202] shrink-0" />
                <span>Under the applicable alternative arrangement, up to <strong>20 hours per week</strong>.</span>
              </li>
            </ul>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Part-time employment can help students gain practical experience and supplement their finances. However, employment availability and income are not guaranteed. Students should not assume that part-time work will cover all tuition and living expenses.
          </p>
        </section>

        {/* 14. 10-Step Application Process */}
        <section className="space-y-6 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Step-by-Step Roadmap</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Study in Germany – Application Process
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "Step 1",
                title: "Choose Your Course and University",
                desc: "Identify programmes that match your educational background, academic interests, preferred language of instruction, and career objectives.",
              },
              {
                step: "Step 2",
                title: "Check Your Eligibility",
                desc: "Verify your academic qualifications using official university requirements, DAAD guidance, and relevant recognition databases.",
              },
              {
                step: "Step 3",
                title: "Prepare Your Language Skills",
                desc: "Complete the required German or English language preparation and obtain an accepted language proficiency certificate where necessary.",
              },
              {
                step: "Step 4",
                title: "Apply for APS Verification",
                desc: "If APS is required for your application, follow the official APS India procedure and submit complete academic documents.",
              },
              {
                step: "Step 5",
                title: "Prepare Your University Application",
                desc: "Gather documents: Valid passport, Class 10 & 12 certificates, Bachelor's degree and transcripts (if applicable), APS certificate, language certificates, Statement of Purpose (SOP), CV, Letters of Recommendation (LORs), and course-specific requirements.",
              },
              {
                step: "Step 6",
                title: "Submit Your Application",
                desc: "Apply directly through the German university or through uni-assist, depending on the institution's requirements. Application deadlines vary by university, programme, and intake.",
              },
              {
                step: "Step 7",
                title: "Receive an Admission Offer",
                desc: "If selected, you will receive an admission letter explaining your programme and any outstanding conditions.",
              },
              {
                step: "Step 8",
                title: "Arrange Your Finances",
                desc: "Prepare the required evidence of financial resources (Blocked Account), accommodation plans, health insurance, and other relevant documents.",
              },
              {
                step: "Step 9",
                title: "Apply for a German Student Visa",
                desc: "Submit your application through the appropriate official German visa procedure and follow the instructions issued by the German Missions in India.",
              },
              {
                step: "Step 10",
                title: "Travel to Germany and Begin Your Studies",
                desc: "After visa approval, complete your travel arrangements, university enrolment, and necessary residence formalities.",
              },
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

        {/* 15. University Intakes */}
        <section className="space-y-4 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Academic Calendar</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              University Intakes in Germany
            </h2>
          </div>
          <p>German universities commonly offer two academic intakes:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-zinc-900 dark:text-white">Winter Semester (Primary Intake)</h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                Usually begins around <strong>September or October</strong>. The majority of degree programmes admit new students during this intake.
              </p>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-zinc-900 dark:text-white">Summer Semester</h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                Usually begins around <strong>March or April</strong>. Availability of programmes and intake quotas vary by university.
              </p>
            </div>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Students are encouraged to begin preparation well in advance, especially when APS verification, language certification, or Studienkolleg admission is required.
          </p>
        </section>

        {/* 16. Career Opportunities After Graduation */}
        <section className="space-y-4 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Career Pathways</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Career Opportunities After Graduation
            </h2>
          </div>
          <p>
            International students who successfully complete a recognised German university degree may explore employment opportunities in their field of qualification across high-demand sectors:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm">
            {[
              "Engineering and Manufacturing",
              "Information Technology",
              "Artificial Intelligence and Data Science",
              "Automotive Technology",
              "Research and Development",
              "Renewable Energy",
              "Business and Finance",
              "Logistics & Supply Chain",
              "Healthcare and Life Sciences",
              "Academic Research",
            ].map((sector, idx) => (
              <div key={idx} className="p-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                {sector}
              </div>
            ))}
          </div>

          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2 mt-4">
            <h3 className="font-bold text-zinc-900 dark:text-white">
              Post-Study Job Search Residence Permit (18 Months)
            </h3>
            <p className="text-xs sm:text-sm">
              Eligible non-EU graduates of German universities may apply for a residence permit allowing them to seek qualified employment for <strong>up to 18 months</strong> after graduation. Once suitable qualified employment is secured, applicants may be eligible to switch to an appropriate skilled worker residence permit or EU Blue Card.
            </p>
          </div>
        </section>

        {/* 17. German Language Training at Gyanshala */}
        <section className="space-y-5 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Language Preparation</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              German Language Training at Gyanshala Foreign Language Academy
            </h2>
            <p className="mt-2 text-zinc-800 dark:text-zinc-200 font-semibold">
              Prepare for University Life in Germany with Confidence!
            </p>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              At Gyanshala Foreign Language Academy, Jaipur, our German language courses are designed to help students develop essential communication skills and build a strong linguistic foundation for international education following a progressive CEFR-aligned approach:
            </p>
          </div>

          <div className="space-y-3">
            {[
              { level: "German A1 – Beginner Level", desc: "Build a foundation in German grammar, vocabulary, pronunciation, and everyday communication." },
              { level: "German A2 – Elementary Level", desc: "Develop the ability to participate in simple conversations and communicate in familiar situations." },
              { level: "German B1 – Intermediate Level", desc: "Improve independent communication and strengthen speaking, listening, reading, and writing skills." },
              { level: "German B2 – Upper-Intermediate Level", desc: "Develop greater fluency, grammatical accuracy, and communication skills for complex everyday and academic situations." },
              { level: "German C1 – Advanced Level", desc: "Strengthen advanced academic writing, presentation skills, listening comprehension, and effective communication in demanding learning environments." },
              { level: "German C2 – Proficiency Level", desc: "Refine sophisticated language skills and develop the ability to communicate with exceptional accuracy and fluency." },
            ].map((course, idx) => (
              <div key={idx} className="p-3.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm">{course.level}</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">{course.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="font-bold text-zinc-900 dark:text-white">What Makes German Language Preparation Important?</h3>
            <p className="text-xs sm:text-sm">
              A strong command of German can help international students understand lectures, participate in discussions, interact with classmates, communicate with university staff, and adapt more confidently to everyday life.
            </p>
            <p className="font-medium text-xs sm:text-sm text-zinc-900 dark:text-white">Our language programmes focus on:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {[
                "Grammar and vocabulary development",
                "German speaking and pronunciation",
                "Listening and reading comprehension",
                "Academic and everyday communication",
                "Writing and presentation skills",
                "Goethe examination-oriented preparation",
                "Progressive language development from beginner to advanced levels",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 18. Frequently Asked Questions */}
        <section className="space-y-6 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC0202]">Have Questions?</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Frequently Asked Questions – Study in Germany
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "1. Can Indian students study in Germany after Class 12?",
                a: "Yes. Indian students can pursue undergraduate education in Germany if they meet the applicable higher education entrance requirements. Many applicants need a Studienkolleg or qualifying prior university study before entering a Bachelor's programme.",
              },
              {
                q: "2. Is studying in Germany free for Indian students?",
                a: "Many public university Bachelor's and Master's programmes have no tuition fees, including for Indian students. However, some universities, federal states, and degree programmes charge tuition. Semester contributions and living expenses must also be paid.",
              },
              {
                q: "3. Is German language proficiency compulsory?",
                a: "German proficiency is normally required for German-taught programmes. English-taught programmes may accept appropriate English language qualifications instead. Nevertheless, learning German is beneficial for daily life and professional opportunities.",
              },
              {
                q: "4. Can I study in Germany with IELTS?",
                a: "Yes. Many English-taught programmes accept IELTS as evidence of English proficiency. Applicants must meet the specific university and visa requirements.",
              },
              {
                q: "5. What German language level is required for university admission?",
                a: "Many German-taught degree programmes require B2 or C1 proficiency. The required examination and score depend on the university and programme.",
              },
              {
                q: "6. Is an APS certificate mandatory?",
                a: "An APS certificate is generally required for students presenting Indian educational qualifications, although certain official exemptions exist.",
              },
              {
                q: "7. How much money is required for a German student visa?",
                a: "The standard blocked account requirement for 2026 is €11,904 for one year, or €992 per month. Other accepted financial evidence may be available depending on the circumstances.",
              },
              {
                q: "8. Can I work part-time during my studies?",
                a: "Yes. Eligible international students may work under the applicable limits, generally 140 full days or 280 half days per year, or according to the permitted weekly working-time arrangement.",
              },
              {
                q: "9. Can I stay in Germany after completing my degree?",
                a: "Eligible graduates may apply for a residence permit to seek qualified employment for up to 18 months after successfully completing their studies.",
              },
              {
                q: "10. Can I obtain permanent residence after graduating?",
                a: "German university graduates may become eligible for permanent settlement after meeting the applicable employment, residence, language, pension contribution, and other legal requirements. It is not automatic.",
              },
              {
                q: "11. Does Gyanshala guarantee admission or a student visa?",
                a: "No. University admission, scholarships, and visa approval are determined by the relevant universities, scholarship organisations, and German authorities.",
              },
              {
                q: "12. Why should I learn German before going to Germany?",
                a: "German language skills can help you prepare for German-taught programmes, communicate in everyday situations, integrate into the local community, and explore broader professional opportunities.",
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

        {/* 19. CTA Section */}
        <section className="p-6 sm:p-8 bg-[#BC0202] text-white space-y-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Begin Your Study in Germany Journey with Gyanshala!
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
            Learn German Today. Prepare for International Education Tomorrow! Whether your goal is a Bachelor&apos;s degree, Master&apos;s programme, or a future international career, developing the right language skills is an important part of your preparation.
          </p>
          <div className="pt-2">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ECBB0C] hover:bg-[#d9ab0b] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              Contact Us Today for German Courses (A1 to C2) →
            </Link>
          </div>
          <p className="text-xs text-white/80 pt-2">
            Gyanshala Foreign Language Academy • Jaipur, Rajasthan, India
          </p>
        </section>

        {/* 20. Important Disclaimer */}
        <footer className="p-4 sm:p-5 bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 space-y-2">
          <p className="font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
            Important Disclaimer
          </p>
          <p>
            Gyanshala Foreign Language Academy provides German language training and educational information. Any separately offered admission or application-related assistance is subject to its own agreed terms.
          </p>
          <p>
            University admission, APS verification, examinations, scholarships, employment, and visa decisions are made independently by the relevant institutions and authorities.
          </p>
          <p>
            Tuition fees, financial requirements, eligibility rules, and immigration regulations may change. Students should verify all requirements using current official sources before submitting applications or making payments.
          </p>
        </footer>

      </article>

    </main>
  );
}
