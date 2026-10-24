"use client";

import React, { useState } from "react";
import { Josefin_Sans } from "next/font/google";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const courseOptions = [
  "German A1 (Beginner Level)",
  "German A2 (Elementary Level)",
  "German B1 (Intermediate Level)",
  "German B2 (Upper-Intermediate Level)",
  "German C1 (Advanced Level)",
  "German C2 (Proficiency Level)",
  "French Language Course",
  "Spanish Language Course",
  "English Language Course",
  "Study in Germany (Bachelors/Masters)",
  "Ausbildung in Germany (Vocational Training)",
  "Nursing in Germany (Direct Placement)",
  "Other Educational Query",
];

export default function EnquiryModal() {
  const { isOpen, closeEnquiryModal, selectedCourse } = useEnquiryModal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [userEnteredCourse, setUserEnteredCourse] = useState<string | null>(null);
  const course = userEnteredCourse !== null ? userEnteredCourse : (selectedCourse || "");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission (or future API integration)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setCountryCode("+91");
        setPhone("");
        setUserEnteredCourse(null);
        setMessage("");
        closeEnquiryModal();
      }, 2500);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/65 backdrop-blur-xs transition-opacity duration-300"
      onClick={closeEnquiryModal}
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-[580px] bg-white rounded-none sm:rounded-sm shadow-2xl overflow-hidden p-6 sm:p-8 sm:px-10 max-h-[92vh] overflow-y-auto text-zinc-900 ${josefin.className}`}
        style={{ letterSpacing: "0.01em" }}
      >
        {/* Close Button (X) */}
        <button
          type="button"
          onClick={closeEnquiryModal}
          className="cursor-pointer absolute top-3 sm:top-4 right-3 sm:right-4 p-1.5 text-zinc-700 hover:text-black transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

          {/* Form Content */}
          {submitted ? (
            <div className="py-12 sm:py-16 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 italic">Thank You!</h3>
              <p className="text-zinc-600 italic text-base max-w-sm mx-auto">
                Your enquiry has been received. Our counselor will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 pt-2 sm:pt-4">
              {/* Row 1: Name */}
              <div className="flex flex-col sm:grid sm:grid-cols-[125px_1fr] sm:items-center gap-1.5 sm:gap-4">
                <label
                  htmlFor="modal-name"
                  className="text-lg sm:text-2xl text-black font-medium italic select-none"
                >
                  Name
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=""
                  className="w-full bg-[#D9D9D9] text-zinc-950 font-medium px-3.5 py-2 sm:py-2.5 text-sm sm:text-base rounded-none border border-transparent focus:outline-none focus:bg-[#cfcfcf] transition-colors"
                />
              </div>

              {/* Row 2: Email */}
              <div className="flex flex-col sm:grid sm:grid-cols-[125px_1fr] sm:items-center gap-1.5 sm:gap-4">
                <label
                  htmlFor="modal-email"
                  className="text-lg sm:text-2xl text-black font-medium italic select-none"
                >
                  Email
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  className="w-full bg-[#D9D9D9] text-zinc-950 font-medium px-3.5 py-2 sm:py-2.5 text-sm sm:text-base rounded-none border border-transparent focus:outline-none focus:bg-[#cfcfcf] transition-colors"
                />
              </div>

              {/* Row 3: Phone No with Default +91 Country Code & Numbers Only */}
              <div className="flex flex-col sm:grid sm:grid-cols-[125px_1fr] sm:items-center gap-1.5 sm:gap-4">
                <label
                  htmlFor="modal-phone"
                  className="text-lg sm:text-2xl text-black font-medium italic select-none"
                >
                  Phone No
                </label>
                <div className="flex items-center w-full bg-[#D9D9D9] rounded-none border border-transparent focus-within:bg-[#cfcfcf] transition-colors overflow-hidden">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-transparent text-zinc-950 font-bold px-2 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base border-r border-zinc-400/50 focus:outline-none cursor-pointer shrink-0"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+43">🇦🇹 +43</option>
                    <option value="+41">🇨🇭 +41</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+971">🇦🇪 +971</option>
                  </select>
                  <input
                    id="modal-phone"
                    type="tel"
                    inputMode="numeric"
                    required
                    value={phone}
                    onChange={(e) => {
                      const numsOnly = e.target.value.replace(/\D/g, "");
                      const maxLen = countryCode === "+91" ? 10 : 15;
                      if (numsOnly.length <= maxLen) {
                        setPhone(numsOnly);
                      }
                    }}
                    placeholder="Enter phone number..."
                    className="w-full bg-transparent text-zinc-950 font-medium px-3 py-2 sm:py-2.5 text-sm sm:text-base focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 4: Courses */}
              <div className="flex flex-col sm:grid sm:grid-cols-[125px_1fr] sm:items-center gap-1.5 sm:gap-4">
                <label
                  htmlFor="modal-courses"
                  className="text-lg sm:text-2xl text-black font-medium italic select-none"
                >
                  Courses
                </label>
                <div className="relative w-full">
                  <select
                    id="modal-courses"
                    required
                    value={course}
                    onChange={(e) => setUserEnteredCourse(e.target.value)}
                    className="w-full bg-[#D9D9D9] text-zinc-950 font-medium px-3.5 py-2 sm:py-2.5 text-sm sm:text-base rounded-none border border-transparent focus:outline-none focus:bg-[#cfcfcf] transition-colors appearance-none cursor-pointer pr-10"
                  >
                    <option value="" disabled>Select or enter course...</option>
                    {courseOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-white text-zinc-900 py-1">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-800">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 5: Message */}
              <div className="flex flex-col sm:grid sm:grid-cols-[125px_1fr] sm:items-start gap-1.5 sm:gap-4">
                <label
                  htmlFor="modal-message"
                  className="text-lg sm:text-2xl text-black font-medium italic select-none pt-0 sm:pt-1"
                >
                  Message
                </label>
                <textarea
                  id="modal-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder=""
                  className="w-full bg-[#D9D9D9] text-zinc-950 font-medium px-3.5 py-2 text-sm sm:text-base rounded-none border border-transparent focus:outline-none focus:bg-[#cfcfcf] transition-colors resize-none"
                />
              </div>

              {/* Row 6: Submit Button */}
              <div className="flex flex-col sm:grid sm:grid-cols-[125px_1fr] sm:items-center gap-2 sm:gap-4 pt-2 sm:pt-2">
                <div className="hidden sm:block" />
                <div className="flex justify-center sm:justify-start">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="cursor-pointer bg-[#B22222] hover:bg-[#8B0000] active:scale-95 disabled:opacity-70 text-white italic text-xl sm:text-2xl font-bold px-9 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          )}
      </div>
    </div>
  );
}
