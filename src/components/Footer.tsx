"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = 2026;

  const germanCourses = [
    { label: "German A1 – Beginner", href: "/german/a1" },
    { label: "German A2 – Elementary", href: "/german/a2" },
    { label: "German B1 – Intermediate", href: "/german/b1" },
    { label: "German B2 – Upper-Intermediate", href: "/german/b2" },
    { label: "German C1 – Advanced", href: "/german/c1" },
    { label: "German C2 – Proficiency", href: "/german/c2" },
    { label: "All German Levels →", href: "/german" },
  ];

  const languageCourses = [
    { label: "French Language", href: "/languages/french" },
    { label: "Spanish Language", href: "/languages/spanish" },
    { label: "German Language", href: "/german" },
    { label: "English Language", href: "/languages/english" },
    { label: "All Language Courses →", href: "/languages" },
  ];

  const pathways = [
    { label: "Study in Germany", href: "/pathways/study-in-germany" },
    { label: "Ausbildung in Germany", href: "/pathways/ausbildung" },
    { label: "Nursing in Germany", href: "/pathways/nursing-in-germany" },
    { label: "Germany Pathways Overview →", href: "/pathways" },
  ];

  const quickLinks = [
    { label: "About Gyanshala", href: "/about-us" },
    { label: "Experienced Faculty", href: "/#team" },
    { label: "Frequently Asked Questions", href: "/faqs" },
    { label: "Course Enquiry & Demo", href: "/enquiry" },
    { label: "Find Us on Google Maps", href: "https://maps.google.com/?cid=14451730170732164818" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  const externalPortals = [
    { label: "DAAD Germany", href: "https://www.daad.de/en/" },
    { label: "Goethe-Institut", href: "https://www.goethe.de/ins/in/en/sta/del.html" },
    { label: "telc German Exam", href: "https://deutsch-pruefung.de/" },
    { label: "Make it in Germany", href: "https://www.make-it-in-germany.com/en/" },
    { label: "German Missions in India", href: "https://india.diplo.de/" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/gyanshalaajaipur/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
      hoverColor: "hover:text-[#1877F2]",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/learnwithgyanshala/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      ),
      hoverColor: "hover:text-[#E4405F]",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gyanshala-foreign-language-academy-044459202",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      hoverColor: "hover:text-[#0A66C2]",
    },
  ];

  return (
    <footer className="w-full bg-[#111111] text-zinc-300 font-sans">
      
      {/* Main Footer Links Columns */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
          
          {/* Column 1: Brand Info (4 cols on lg, full width on sm) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/Logo/LOGO.NEW.GYANSHALA.png"
                alt="Gyanshala Foreign Language Academy"
                width={360}
                height={110}
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain brightness-105 transition-transform hover:scale-105"
              />
            </Link>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed pr-2">
              Gyanshala – Foreign Language Academy was established in 2018 in Jaipur to support students in their learning journey and connect them with international education, Ausbildung, and professional opportunities in Germany and Europe.
            </p>

            <div className="pt-2 space-y-3 text-sm sm:text-base text-zinc-300">
              <div className="flex items-start gap-3">
                <span className="text-[#ECBB0C] text-lg sm:text-xl shrink-0">📍</span>
                <div>
                  <a
                    href="https://maps.google.com/?cid=14451730170732164818"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ECBB0C] transition-colors underline-offset-2 hover:underline font-semibold text-white inline-flex items-center gap-1.5"
                    title="Open Gyanshala Academy on Google Maps"
                  >
                    <span>Gyanshala Foreign Language Academy</span>
                    <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                  <p className="text-xs sm:text-sm text-zinc-400">Jaipur, Rajasthan, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#ECBB0C] text-lg sm:text-xl shrink-0">🎓</span>
                <span>Offline Classroom Batches &amp; Live Interactive Online Classes</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#ECBB0C] text-lg sm:text-xl shrink-0">⏰</span>
                <span>Monday – Saturday: 9:00 AM – 7:00 PM</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-3">
              <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-3">
                Connect With Us
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Gyanshala Academy on ${s.name}`}
                    className={`text-zinc-300 transition-all hover:scale-125 ${s.hoverColor}`}
                  >
                    <span className="w-6 h-6 flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6">
                      {s.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Language Courses (2 cols on lg) */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider border-b-2 border-[#BC0202] pb-2 inline-block">
              Language Courses
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {languageCourses.map((lc) => (
                <li key={lc.label}>
                  <Link
                    href={lc.href}
                    className="text-zinc-200 hover:text-[#ECBB0C] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#BC0202] font-black text-lg leading-none transition-transform group-hover:translate-x-1">›</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">{lc.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: German Courses (2 cols on lg) */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider border-b-2 border-[#BC0202] pb-2 inline-block">
              German Courses
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {germanCourses.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="text-zinc-200 hover:text-[#ECBB0C] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#BC0202] font-black text-lg leading-none transition-transform group-hover:translate-x-1">›</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">{c.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Germany Pathways (2 cols on lg) */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider border-b-2 border-[#BC0202] pb-2 inline-block">
              Germany Pathways
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {pathways.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="text-zinc-200 hover:text-[#ECBB0C] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#BC0202] font-black text-lg leading-none transition-transform group-hover:translate-x-1">›</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">{p.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Navigation & Official Portals (2 cols on lg) */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider border-b-2 border-[#BC0202] pb-2 inline-block">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {quickLinks.map((q) => {
                const isExternal = q.href.startsWith("http");
                return (
                  <li key={q.label}>
                    {isExternal ? (
                      <a
                        href={q.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-200 hover:text-[#ECBB0C] transition-colors flex items-center gap-2 group"
                      >
                        <span className="text-[#BC0202] font-black text-lg leading-none transition-transform group-hover:translate-x-1">›</span>
                        <span className="group-hover:translate-x-0.5 transition-transform flex items-center gap-1.5">
                          {q.label}
                          <svg className="w-3 h-3 text-zinc-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={q.href}
                        className="text-zinc-200 hover:text-[#ECBB0C] transition-colors flex items-center gap-2 group"
                      >
                        <span className="text-[#BC0202] font-black text-lg leading-none transition-transform group-hover:translate-x-1">›</span>
                        <span className="group-hover:translate-x-0.5 transition-transform">{q.label}</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider pt-3 text-[#ECBB0C]">
              Official Portals
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {externalPortals.map((ep) => (
                <li key={ep.label}>
                  <a
                    href={ep.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{ep.label}</span>
                    <svg className="w-3.5 h-3.5 text-zinc-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Google Maps Embed Section */}
        <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-zinc-800/80">
          <div className="w-full h-[240px] sm:h-[300px] lg:h-[340px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4882305359088!2d75.79787511132368!3d26.887996161054378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7b90c6f5f83%3A0xc88edc05904936d2!2sGyanshala%20Foreign%20Language%20Academy!5e0!3m2!1sen!2sin!4v1792853886790!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gyanshala Foreign Language Academy Google Map Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-zinc-800/80 bg-black/60 py-6 text-zinc-400 text-xs sm:text-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-center sm:text-left text-xs sm:text-sm leading-relaxed text-zinc-300 italic">
            <strong>Important Notice:</strong> Gyanshala Foreign Language Academy provides certified German and foreign language training, exam preparation (Goethe, telc, ÖSD), and educational guidance. University admissions, Ausbildung contracts, professional recognition, and visa decisions are subject to individual merit and the sole discretion of respective German universities, employers, and immigration authorities.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-3 border-t border-zinc-800/50">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 sm:gap-x-4 gap-y-2 text-xs sm:text-sm text-zinc-400">
              <p className="text-center lg:text-left whitespace-normal sm:whitespace-nowrap">
                <span>© {currentYear} <strong className="text-white">Gyanshala Foreign Language Academy</strong>.</span>{" "}
                <span className="whitespace-nowrap">All Rights Reserved.</span>
              </p>
              <span className="text-zinc-600 hidden sm:inline">|</span>
              <Link
                href="/terms-and-conditions"
                className="hover:text-[#ECBB0C] text-zinc-300 transition-colors underline-offset-4 hover:underline whitespace-nowrap"
              >
                Terms &amp; Conditions
              </Link>
              <span className="text-zinc-600 hidden sm:inline">|</span>
              <Link
                href="/privacy-policy"
                className="hover:text-[#ECBB0C] text-zinc-300 transition-colors underline-offset-4 hover:underline whitespace-nowrap"
              >
                Privacy Policy
              </Link>
            </div>

            <div className="flex items-center gap-4 text-sm shrink-0">
              <span className="text-zinc-400 hidden md:inline font-medium">Follow us:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className={`text-zinc-400 transition-all hover:scale-125 ${s.hoverColor}`}
                  >
                    <span className="w-5 h-5 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5">
                      {s.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
