"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const germanCourses = [
    { label: "A1 – Beginner Level", href: "/german/a1" },
    { label: "A2 – Elementary Level", href: "/german/a2" },
    { label: "B1 – Intermediate Level", href: "/german/b1" },
    { label: "B2 – Upper-Intermediate Level", href: "/german/b2" },
    { label: "C1 – Advanced Level", href: "/german/c1" },
    { label: "C2 – Proficiency Level", href: "/german/c2" },
  ];

  const germanyPathways = [
    { label: "Study in Germany", href: "/pathways/study-in-germany" },
    { label: "Ausbildung in Germany", href: "/pathways/ausbildung" },
    { label: "Nursing in Germany", href: "/pathways/nursing-in-germany" },
    { label: "Our Students in Germany 🇩🇪", href: "/#students-in-germany" },
  ];

  const allLanguages = [
    { label: "German", href: "/german" },
    { label: "French", href: "/languages/french" },
    { label: "Spanish", href: "/languages/spanish" },
    { label: "English", href: "/languages/english" },
  ];

  return (
    <header className="w-full font-sans sticky top-0 z-50 bg-[#BC0202] shadow-md border-b border-[#990202]">
      {/* 2. Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 lg:h-30">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/Logo/LOGO.NEW.GYANSHALA.png"
              alt="Gyanshala Foreign Language Academy"
              width={360}
              height={110}
              className="h-14 sm:h-18 lg:h-22 xl:h-24 w-auto object-contain transition-transform group-hover:scale-102"
              priority
            />
          </Link>

          {/* Desktop Navigation Links (Reduced spacing) */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            <Link
              href="/"
              className="px-2.5 py-2 text-sm font-semibold text-white hover:text-white/80 rounded-md transition-colors"
            >
              Home
            </Link>

            {/* German Courses Dropdown */}
            <div className="relative group">
              <Link
                href="/german"
                className="flex items-center gap-1 px-2.5 py-2 text-sm font-semibold text-white hover:text-white/80 rounded-md transition-colors cursor-pointer"
              >
                <span>German Courses</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180 text-white/90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 min-w-max pt-2 z-50">
                <div style={{ backgroundColor: "#ffffff" }} className="bg-[#ffffff] rounded-xl shadow-xl border border-gray-100 p-2 min-w-[270px]">
                  {germanCourses.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-3.5 py-2.5 text-sm font-medium text-zinc-700 hover:bg-[#BC0202] hover:text-white rounded-lg transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Germany Pathways Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 px-2.5 py-2 text-sm font-semibold text-white hover:text-white/80 rounded-md transition-colors cursor-pointer"
              >
                <span>Germany Pathways</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180 text-white/90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 min-w-max pt-2 z-50">
                <div style={{ backgroundColor: "#ffffff" }} className="bg-[#ffffff] rounded-xl shadow-xl border border-gray-100 p-2 min-w-[240px]">
                  {germanyPathways.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-3.5 py-2.5 text-sm font-medium text-zinc-700 hover:bg-[#BC0202] hover:text-white rounded-lg transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* All Languages Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 px-2.5 py-2 text-sm font-semibold text-white hover:text-white/80 rounded-md transition-colors cursor-pointer"
              >
                <span>All Languages</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180 text-white/90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 min-w-max pt-2 z-50">
                <div style={{ backgroundColor: "#ffffff" }} className="bg-[#ffffff] rounded-xl shadow-xl border border-gray-100 p-2 min-w-[200px]">
                  {allLanguages.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-3.5 py-2.5 text-sm font-medium text-zinc-700 hover:bg-[#BC0202] hover:text-white rounded-lg transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* About Us */}
            <Link
              href="/about-us"
              className="px-2.5 py-2 text-sm font-semibold text-white hover:text-white/80 rounded-md transition-colors"
            >
              About Us
            </Link>

            {/* FAQs */}
            <Link
              href="/faqs"
              className="px-2.5 py-2 text-sm font-semibold text-white hover:text-white/80 rounded-md transition-colors"
            >
              FAQs
            </Link>
          </div>

          {/* Right Action: CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg text-sm font-bold text-white bg-[#ECBB0C] hover:bg-[#d9ab0b] shadow-sm sm:shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              Enquiry Now
            </Link>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 rounded-md text-white hover:bg-white/10 focus:outline-hidden cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Right Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Right Drawer Slide-over Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs sm:max-w-sm bg-[#BC0202] text-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/15">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <Image
              src="/Logo/LOGO.NEW.GYANSHALA.png"
              alt="Gyanshala Foreign Language Academy"
              width={220}
              height={70}
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Scrollable Links */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-white/10 transition-colors"
          >
            Home
          </Link>

          {/* German Courses Mobile Accordion */}
          <div>
            <button
              type="button"
              onClick={() => toggleDropdown("german")}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span>German Courses</span>
              <svg
                className={`w-4 h-4 transform transition-transform text-white/90 ${openDropdown === "german" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {openDropdown === "german" && (
              <div className="pl-4 pr-2 py-1 space-y-1">
                {germanCourses.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-sm text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Germany Pathways Mobile Accordion */}
          <div>
            <button
              type="button"
              onClick={() => toggleDropdown("pathways")}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span>Germany Pathways</span>
              <svg
                className={`w-4 h-4 transform transition-transform text-white/90 ${openDropdown === "pathways" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {openDropdown === "pathways" && (
              <div className="pl-4 pr-2 py-1 space-y-1">
                {germanyPathways.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-sm text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* All Languages Mobile Accordion */}
          <div>
            <button
              type="button"
              onClick={() => toggleDropdown("languages")}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span>All Languages</span>
              <svg
                className={`w-4 h-4 transform transition-transform text-white/90 ${openDropdown === "languages" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {openDropdown === "languages" && (
              <div className="pl-4 pr-2 py-1 space-y-1">
                {allLanguages.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-sm text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* About Us */}
          <Link
            href="/about-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-white/10 transition-colors"
          >
            About Us
          </Link>

          {/* FAQs */}
          <Link
            href="/faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-white/10 transition-colors"
          >
            FAQs
          </Link>
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-white/15">
          <Link
            href="/enquiry"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-base font-bold text-white bg-[#ECBB0C] hover:bg-[#d9ab0b] shadow-md text-center transition-all"
          >
            Enquiry Now
          </Link>
        </div>
      </div>

      {/* Torn Paper / Ragged Edge Effect */}
      <div className="absolute -bottom-2.5 sm:-bottom-3.5 left-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg
          viewBox="0 0 1200 24"
          preserveAspectRatio="none"
          className="w-full h-2.5 sm:h-3.5 text-[#BC0202] fill-current drop-shadow-[0_3px_2px_rgba(0,0,0,0.22)]"
        >
          <path d="M0,0 L1200,0 L1200,6 L1190,14 L1182,7 L1175,19 L1168,11 L1160,8 L1152,16 L1145,9 L1138,21 L1130,12 L1122,8 L1115,17 L1108,10 L1100,22 L1092,13 L1085,7 L1078,16 L1070,9 L1062,20 L1055,12 L1048,7 L1040,18 L1032,10 L1025,23 L1018,14 L1010,8 L1002,17 L995,10 L988,22 L980,13 L972,8 L965,19 L958,11 L950,23 L942,14 L935,7 L928,18 L920,10 L912,21 L905,12 L898,7 L890,17 L882,10 L875,24 L868,13 L860,8 L852,18 L845,10 L838,22 L830,13 L822,7 L815,19 L808,11 L800,23 L792,14 L785,8 L778,17 L770,10 L762,22 L755,12 L748,7 L740,18 L732,10 L725,23 L718,13 L710,8 L702,17 L695,10 L688,21 L680,12 L672,7 L665,19 L658,11 L650,24 L642,14 L635,8 L628,18 L620,10 L612,22 L605,13 L598,7 L590,17 L582,10 L575,23 L568,13 L560,8 L552,19 L545,11 L538,22 L530,12 L522,7 L515,18 L508,10 L500,24 L492,14 L485,8 L478,17 L470,10 L462,21 L455,12 L448,7 L440,19 L432,11 L425,23 L418,13 L410,8 L402,18 L395,10 L388,22 L380,12 L372,7 L365,19 L358,11 L350,24 L342,14 L335,8 L328,17 L320,10 L312,22 L305,13 L298,7 L290,18 L282,10 L275,23 L268,13 L260,8 L252,19 L245,11 L238,21 L230,12 L222,7 L215,18 L208,10 L200,24 L192,14 L185,8 L178,17 L170,10 L162,22 L155,12 L148,7 L140,19 L132,11 L125,23 L118,13 L110,8 L102,18 L95,10 L88,21 L80,12 L72,7 L65,19 L58,11 L50,24 L42,14 L35,8 L28,18 L20,10 L12,22 L5,12 L0,7 Z" />
        </svg>
      </div>
    </header>
  );
}
