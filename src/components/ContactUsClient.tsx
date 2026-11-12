"use client";

import React, { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
  GraduationCap,
  CheckCircle2,
  Send,
} from "lucide-react";
import { FadeInUp } from "@/components/ScrollReveal";
import { submitEnquiry } from "@/lib/sendEnquiry";

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
  "Study in Germany (Bachelors / Masters)",
  "Ausbildung in Germany (Vocational Training)",
  "Nursing in Germany (Direct Placement)",
  "Other Educational Query",
];

interface ContactInfo {
  addressTitle: string;
  addressSubtitle: string;
  googleMapsUrl: string;
  workingMode: string;
  workingHours: string;
  primaryPhone: string;
  secondaryPhone: string;
  whatsapp: string;
  email: string;
}

const defaultContact: ContactInfo = {
  addressTitle: "Gyanshala Foreign Language Academy",
  addressSubtitle: "Jaipur, Rajasthan, India",
  googleMapsUrl: "https://maps.google.com/?cid=14451730170732164818",
  workingMode: "Offline Classroom Batches & Live Interactive Online Classes",
  workingHours: "Monday – Saturday: 9:00 AM – 7:00 PM (Sunday Closed)",
  primaryPhone: "+91 91191 16677",
  secondaryPhone: "+91 91191 16688",
  whatsapp: "+919119116677",
  email: "info@gyanshala.in",
};

function sanitizeTel(phone: string) {
  return phone.replace(/[^+\d]/g, "");
}

function sanitizeWa(phone: string) {
  return phone.replace(/\D/g, "");
}

export default function ContactUsClient() {
  const [contact, setContact] = useState<ContactInfo>(defaultContact);

  // Enquiry form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch("/api/admin/cms/footer", { cache: "no-store" })
      .then((r) => r.json())
      .then((res) => {
        const c = res?.data?.contact;
        if (res?.success && c) {
          setContact((prev) => ({
            addressTitle: c.address_title || prev.addressTitle,
            addressSubtitle: c.address_subtitle || prev.addressSubtitle,
            googleMapsUrl: c.google_maps_url || prev.googleMapsUrl,
            workingMode: c.working_mode || prev.workingMode,
            workingHours: c.working_hours || prev.workingHours,
            primaryPhone: c.primary_phone || prev.primaryPhone,
            secondaryPhone: c.secondary_phone || prev.secondaryPhone,
            whatsapp: c.whatsapp || prev.whatsapp,
            email: c.email || prev.email,
          }));
        }
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      await submitEnquiry({
        name,
        email,
        phone: `${countryCode} ${phone}`,
        course,
        message,
      });
      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* =====================================================================
          CONTACT DETAILS + ENQUIRY FORM SECTION
          ===================================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5EFE3] dark:bg-zinc-950 border-b border-zinc-200/70 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] mb-2.5">
                REACH OUT TO US
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-zinc-900 dark:text-zinc-100 leading-tight">
                We&apos;d Love to Hear From You
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                Have questions about German (A1–C2), French, Spanish, English courses, or Study &amp; Ausbildung pathways in Germany? Visit our Jaipur campus or send an enquiry below.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN: ADDRESS & CONTACT DETAILS */}
            <div className="lg:col-span-5 space-y-5">
              {/* Campus Address Card */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#BC0202] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#A61911]">
                      Campus Address
                    </p>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                      {contact.addressTitle}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {contact.addressSubtitle}
                    </p>
                    <a
                      href={contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 pt-1 text-xs sm:text-sm font-bold text-[#BC0202] hover:underline"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#BC0202] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#A61911]">
                      Call &amp; Admissions Helpline
                    </p>
                    <div className="flex flex-col space-y-1">
                      <a
                        href={`tel:${sanitizeTel(contact.primaryPhone)}`}
                        className="text-base font-bold text-zinc-900 dark:text-white hover:text-[#BC0202] transition-colors"
                      >
                        {contact.primaryPhone}
                      </a>
                      {contact.secondaryPhone && (
                        <a
                          href={`tel:${sanitizeTel(contact.secondaryPhone)}`}
                          className="text-base font-bold text-zinc-900 dark:text-white hover:text-[#BC0202] transition-colors"
                        >
                          {contact.secondaryPhone}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${sanitizeWa(contact.whatsapp)}?text=${encodeURIComponent(
                      "Hello Gyanshala Academy! I would like to enquire about language courses."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs sm:text-sm font-bold shadow-xs transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${sanitizeTel(contact.primaryPhone)}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white text-xs sm:text-sm font-bold shadow-xs transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Email & Timings Card */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#BC0202] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#A61911]">
                      Official Email
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-base font-bold text-zinc-900 dark:text-white hover:text-[#BC0202] transition-colors break-all"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#A61911]">
                      Office &amp; Batch Timings
                    </p>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      {contact.workingHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#A61911]">
                      Learning Modes
                    </p>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {contact.workingMode}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: ENQUIRY FORM */}
            <div className="lg:col-span-7">
              <div className="bg-[#FFFAF3] dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 text-zinc-900 dark:text-zinc-100">
                <div className="mb-6 pb-4 border-b border-zinc-200/80 dark:border-zinc-800">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A61911] mb-1">
                    SEND AN ENQUIRY
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-zinc-900 dark:text-white">
                    Book a Free Demo &amp; Counselling Session
                  </h3>
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h4 className="text-2xl font-bold text-zinc-900 dark:text-white">
                      Thank You!
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-md mx-auto">
                      Your enquiry has been submitted successfully. Our senior educational counselor will contact you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName("");
                        setEmail("");
                        setCountryCode("+91");
                        setPhone("");
                        setCourse("");
                        setMessage("");
                      }}
                      className="cursor-pointer text-sm font-bold text-[#BC0202] hover:underline"
                    >
                      Submit another enquiry →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                          className="w-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white font-medium px-3.5 py-2.5 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-[#BC0202] focus:ring-2 focus:ring-[#BC0202]/15"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                        >
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white font-medium px-3.5 py-2.5 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-[#BC0202] focus:ring-2 focus:ring-[#BC0202]/15"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                        >
                          Phone Number *
                        </label>
                        <div className="flex items-center w-full bg-white dark:bg-zinc-950 rounded-xl border border-zinc-300 dark:border-zinc-700 focus-within:border-[#BC0202] focus-within:ring-2 focus-within:ring-[#BC0202]/15 overflow-hidden">
                          <select
                            aria-label="Country Code"
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="bg-transparent text-zinc-900 dark:text-white font-bold px-2.5 py-2.5 text-sm border-r border-zinc-200 dark:border-zinc-700 focus:outline-none cursor-pointer shrink-0"
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
                            id="contact-phone"
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
                            placeholder="Enter phone number"
                            className="w-full bg-transparent text-zinc-900 dark:text-white font-medium px-3 py-2.5 text-sm focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-course"
                          className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                        >
                          Interested Course / Pathway *
                        </label>
                        <select
                          id="contact-course"
                          required
                          value={course}
                          onChange={(e) => setCourse(e.target.value)}
                          className="w-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white font-medium px-3.5 py-2.5 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-[#BC0202] focus:ring-2 focus:ring-[#BC0202]/15 cursor-pointer"
                        >
                          <option value="" disabled>
                            Select course or pathway...
                          </option>
                          {courseOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                      >
                        Message / Query
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your preferred batch timing, level, or Germany goal..."
                        className="w-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white font-medium px-3.5 py-2.5 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-[#BC0202] focus:ring-2 focus:ring-[#BC0202]/15 resize-none"
                      />
                    </div>

                    {errorMsg && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-xl">
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#BC0202] hover:bg-[#990202] active:scale-[0.99] disabled:opacity-60 text-white text-sm sm:text-base font-bold px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? "Submitting..." : "Submit Enquiry"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          GOOGLE MAP SECTION
          ===================================================================== */}
      <section className="py-12 sm:py-16 bg-white dark:bg-zinc-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] mb-2">
                FIND US ON MAP
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-zinc-900 dark:text-white">
                Visit Gyanshala Academy, Jaipur
              </h2>
            </div>

            <a
              href={contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold shadow-sm transition self-start sm:self-auto"
            >
              <MapPin className="w-4 h-4" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-[340px] sm:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg bg-zinc-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4882305359088!2d75.79787511132368!3d26.887996161054378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7b90c6f5f83%3A0xc88edc05904936d2!2sGyanshala%20Foreign%20Language%20Academy!5e0!3m2!1sen!2sin!4v1792853886790!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gyanshala Foreign Language Academy Jaipur Location Map"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
