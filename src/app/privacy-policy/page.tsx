import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
import { FadeInUp } from "@/components/ScrollReveal";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "Privacy Policy | Gyanshala Foreign Language Academy",
  description:
    "Gyanshala Foreign Language Academy privacy policy explaining how we collect, use, share and protect personal information through our website, enquiries, registrations, and language classes in compliance with DPDP Act, 2023.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className={`w-full overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 ${josefin.className}`}>
      
      {/* =========================================================================
          HERO BANNER
          ========================================================================= */}
      <section className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px] flex flex-col items-center justify-center overflow-hidden py-14 sm:py-16 md:py-20 text-white text-center bg-zinc-950">
        <Image
          src="/Hero/hero3.jpg"
          alt="Privacy Policy - Gyanshala Foreign Language Academy"
          fill
          priority
          className="object-cover object-center z-0 brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-[0.06em] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              PRIVACY POLICY
            </h1>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-[22px] text-white font-medium italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
              Gyanshala Foreign Language Academy &nbsp;|&nbsp; Last Updated: 23 October 2026
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* =========================================================================
          CONTENT SECTION
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          {/* Header Metadata Note */}
          <div className="p-5 sm:p-6 bg-zinc-50 dark:bg-zinc-900 border-l-4 border-[#C00000] rounded-r-md">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C00000] mb-1">
              GYANSHALA FOREIGN LANGUAGE ACADEMY &nbsp;|&nbsp; LAST UPDATED: 23 OCTOBER 2026
            </p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Gyanshala Foreign Language Academy (&quot;Gyanshala&quot;, &quot;we&quot;, &quot;us&quot;) values your privacy. This policy explains how we collect, use, share and protect personal information through our website, enquiries, registrations and online or offline language classes. We follow applicable Indian data-protection requirements, including provisions of the Digital Personal Data Protection Act, 2023 and Rules, 2025, as and when applicable. Where consent is legally required, we seek it separately.
            </p>
          </div>

          {/* 1. Information We Collect */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5">
              <span className="text-[#C00000]">1.</span> Information We Collect
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              We may collect your name, contact details, address, age or date of birth where needed, education, guardian details, course choices and language level. For enrolled students, we may maintain registration, attendance, assignments, assessment, progress and certificate records. Payment records may include amounts, receipts and transaction references; we do not request card PINs, banking passwords or OTPs. Our website may also collect IP address, device/browser details, pages visited, usage data and cookie information.
            </p>
          </div>

          {/* 2. How We Use Information */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5">
              <span className="text-[#C00000]">2.</span> How We Use Information
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              We use information to answer enquiries, process admissions, provide classes and learning materials, communicate schedules and progress, handle payments, maintain academic records, offer support, improve our website and meet legal obligations. We may send course or workshop updates and promotional messages where permitted by law; you can opt out of marketing at any time without losing essential course-related notices.
            </p>
          </div>

          {/* 3. Consent and Your Choices */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5">
              <span className="text-[#C00000]">3.</span> Consent and Your Choices
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              We rely on consent or another lawful basis available under applicable law. You may withdraw consent for consent-based processing by contacting us. Withdrawal does not undo earlier lawful use or override mandatory record-keeping, and it may affect services that depend on the information.
            </p>
          </div>

          {/* 4. When Information May Be Shared */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5">
              <span className="text-[#C00000]">4.</span> When Information May Be Shared
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              We do not sell students&apos; personal information to advertisers or unrelated third parties. We may share only necessary information with authorised payment processors, hosting providers, online teaching and communication platforms, certificate services or competent authorities for legitimate purposes. Enrolling in a course does not automatically authorise sharing with universities, employers, embassies or external exam bodies. Separate assistance may involve separately explained sharing.
            </p>
          </div>

          {/* 5. Online Classes, Cookies and Third Parties */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5">
              <span className="text-[#C00000]">5.</span> Online Classes, Cookies and Third Parties
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Online learning and communication platforms may handle data under their own privacy policies. We inform students when classes are recorded and obtain consent where required; identifiable recordings are used for authorised, disclosed purposes. Cookies may help with essential website functions, preferences, security and analytics. Where required, we seek consent for non-essential tracking. You can adjust cookie settings in your browser. Links to outside websites are governed by those providers&apos; policies.
            </p>
          </div>

          {/* 6. Student and Children's Privacy */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5">
              <span className="text-[#C00000]">6.</span> Student and Children&apos;s Privacy
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Student records are accessible only for authorised educational, administrative or legal purposes. Student photos, testimonials and achievements are used publicly only with appropriate permission. For students under 18, we obtain verifiable parent or guardian consent where required and limit data collection to appropriate educational needs. We do not intend to use children&apos;s personal data for targeted advertising or harmful processing.
            </p>
          </div>

          {/* 7. Security, Retention and International Processing */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5">
              <span className="text-[#C00000]">7.</span> Security, Retention and International Processing
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              We use reasonable administrative and technical safeguards to reduce risks of unauthorised access, misuse or loss; no online system is completely secure. We respond to data breaches and provide required notifications under applicable law. Information is kept only as long as needed for services or legal, accounting and academic obligations, then deleted, anonymised or securely disposed of where appropriate. Some service providers may process data outside India, subject to applicable restrictions and safeguards.
            </p>
          </div>

          {/* 8. Your Rights and Complaints */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5">
              <span className="text-[#C00000]">8.</span> Your Rights and Complaints
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Subject to the applicable law and commencement of relevant provisions, you may request access, correction, updating or erasure of personal data, withdraw consent, raise a grievance and exercise applicable nomination rights. We may verify your identity before responding. We will address requests according to applicable requirements; you may also approach the appropriate authority where a statutory remedy is available.
            </p>
          </div>

          {/* 9. Policy Changes and Contact */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5">
              <span className="text-[#C00000]">9.</span> Policy Changes and Contact
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              We may update this policy when services, technology or legal requirements change. The current version and revised date will be published on our website; additional notice or consent will be provided where legally required. For privacy questions, corrections, deletion requests or complaints, contact:
            </p>

            <div className="p-5 sm:p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg space-y-2 text-sm sm:text-base text-zinc-800 dark:text-zinc-200">
              <p className="font-bold text-base sm:text-lg text-black dark:text-white">
                Gyanshala Foreign Language Academy
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400 pt-1">
                <span>📍 Jaipur, Rajasthan, India</span>
                <span>•</span>
                <span>✉️ <a href="mailto:info@gyanshala.in" className="text-[#C00000] hover:underline">info@gyanshala.in</a></span>
                <span>•</span>
                <span>📞 <a href="tel:8239218436" className="text-[#C00000] hover:underline">+91 8239218436</a></span>
                <span>•</span>
                <span>🌐 <Link href="/" className="text-[#C00000] hover:underline">www.gyanshala.in</Link></span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
