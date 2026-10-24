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
  title: "Terms and Conditions | Gyanshala Foreign Language Academy",
  description:
    "Review the Terms and Conditions for enrolling in language courses, training programmes, and educational consulting services at Gyanshala Foreign Language Academy Jaipur.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className={`w-full overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 ${josefin.className}`}>
      
      {/* =========================================================================
          HERO BANNER
          ========================================================================= */}
      <section className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px] flex flex-col items-center justify-center overflow-hidden py-14 sm:py-16 md:py-20 text-white text-center bg-zinc-950">
        <Image
          src="/Hero/hero3.jpg"
          alt="Terms and Conditions - Gyanshala Foreign Language Academy"
          fill
          priority
          className="object-cover object-center z-0 brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-[0.06em] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              TERMS &amp; CONDITIONS
            </h1>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-[22px] text-white font-medium italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
              Gyanshala Foreign Language Academy &nbsp;|&nbsp; Terms of Service &amp; Enrolment
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* =========================================================================
          CONTENT SECTION
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          <div className="p-5 sm:p-6 bg-zinc-50 dark:bg-zinc-900 border-l-4 border-[#C00000] rounded-r-md">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C00000] mb-1">
              GYANSHALA FOREIGN LANGUAGE ACADEMY &nbsp;|&nbsp; OFFICIAL ENROLMENT &amp; WEBSITE TERMS
            </p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Please read these Terms and Conditions carefully before registering for any language training programmes, paying course fees, or using our website and educational services.
            </p>
          </div>

          {/* 1. Introduction and Acceptance of Terms */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">1.</span> Introduction and Acceptance of Terms</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Welcome to Gyanshala Foreign Language Academy (&quot;Gyanshala&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). These Terms and Conditions govern your access to and use of our website (www.gyanshala.in), course registrations, online and offline language training programmes, and related educational services.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">By accessing our website, creating an account, registering for a course, or purchasing educational services, you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by the provisions applicable to your use or enrolment, subject to applicable law.</p>
          </div>

          {/* 2. Course Registration and Admission */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">2.</span> Course Registration and Admission</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">When registering for courses at Gyanshala, students or prospective candidates are required to provide complete and accurate information, including:</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 pl-2 sm:pl-3">
              <li>Contact number and email address</li>
              <li>Educational background, where relevant</li>
              <li>Selected language course and proficiency level</li>
              <li>Information necessary for enrolment and course administration</li>
            </ul>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Students are responsible for ensuring that all submitted information is accurate and updated when necessary.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Admission confirmation is subject to course availability, eligibility requirements, completion of applicable registration formalities, and payment arrangements.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala reserves the right to refuse or cancel registration for legitimate reasons, including fraudulent information, unavailability of seats, or serious violations of Academy policies, subject to applicable law.</p>
          </div>

          {/* 3. Language Courses and Training Programmes */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">3.</span> Language Courses and Training Programmes</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala Foreign Language Academy provides language education and training programmes designed to develop practical communication skills.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Our German language programmes may include the following proficiency levels:</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 pl-2 sm:pl-3">
              <li>A1 – Beginner</li>
              <li>A2 – Elementary</li>
              <li>B1 – Intermediate</li>
              <li>B2 – Upper-Intermediate</li>
              <li>C1 – Advanced</li>
              <li>C2 – Mastery / Proficiency</li>
            </ul>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Courses may cover grammar, vocabulary, pronunciation, listening, reading, writing, speaking, and examination-oriented preparation.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Course structures, teaching methodologies, schedules, and learning resources may vary according to the selected programme.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala reserves the right to make reasonable adjustments to course content, teaching schedules, trainers, and learning arrangements when required for academic or operational reasons.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Any significant changes affecting paid students will be communicated appropriately.</p>
          </div>

          {/* 4. Course Fees and Payments */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">4.</span> Course Fees and Payments</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Students must review the applicable course fees, payment deadlines, and other charges before confirming enrolment.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">All course fees must be paid through payment methods officially authorised by Gyanshala Foreign Language Academy.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Students are responsible for ensuring timely payment of course fees according to the agreed payment schedule.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Where payment in instalments is permitted, students must follow the agreed instalment plan.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Any applicable examination fees, third-party certification charges, textbooks, or additional services will be disclosed separately unless expressly included in the selected course package.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala is not responsible for payments made to unauthorised individuals or third parties misrepresenting themselves as Academy representatives, except where responsibility arises under applicable law.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Students are advised to retain receipts or other payment confirmations for their records.</p>
          </div>

          {/* 5. Refund and Cancellation Policy */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">5.</span> Refund and Cancellation Policy</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Students are requested to carefully review their course selection, fee structure, batch schedule, and learning requirements before making payment.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Course fees paid to Gyanshala Foreign Language Academy are generally non-refundable once the enrolled course has commenced, except where a refund is required under applicable law or expressly provided in the student&#x27;s enrolment agreement.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">The following conditions apply:</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 pl-2 sm:pl-3">
              <li>Requests for cancellation or withdrawal must be submitted through the Academy&#x27;s official communication channels.</li>
              <li>Refund requests, where applicable, will be reviewed in accordance with the published refund policy, the student&#x27;s enrolment agreement, services already provided, and applicable law.</li>
              <li>Non-attendance, voluntary discontinuation, or failure to complete a course does not automatically entitle a student to a full refund.</li>
              <li>If Gyanshala cancels a paid course and cannot provide an agreed suitable alternative, affected students will be offered an appropriate refund for the services not delivered.</li>
              <li>Any refund approved or required will be processed through an appropriate payment method within a reasonable period.</li>
              <li>Nothing in this policy excludes, restricts, or overrides a student&#x27;s statutory consumer rights.</li>
            </ul>
          </div>

          {/* 6. Batch Scheduling, Attendance and Course Completion */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">6.</span> Batch Scheduling, Attendance and Course Completion</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Students are expected to attend scheduled classes regularly and participate actively in learning activities.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Course schedules and class timings will be communicated through authorised Academy channels.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala may reschedule classes due to unavoidable circumstances, instructor unavailability, public holidays, technical difficulties, or other reasonable operational requirements.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">The Academy will make reasonable efforts to arrange replacement classes or alternative learning arrangements for sessions it cancels.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Students are responsible for completing assignments, participating in assessments, and maintaining the attendance required under their course programme.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Requests for batch transfers, missed-class arrangements, or extensions will be considered according to the applicable course policy and availability.</p>
          </div>

          {/* 7. Goethe Examinations and Third-Party Certifications */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">7.</span> Goethe Examinations and Third-Party Certifications</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala Foreign Language Academy provides German language training and examination-oriented preparation, including preparation for Goethe-Zertifikat examinations where offered.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala is an independent language training academy. Enrolment in an Academy course does not itself constitute registration with, certification by, or endorsement from the Goethe-Institut or any other examination authority.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Students must separately satisfy the eligibility, registration, payment, and examination requirements established by the relevant examination provider.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala does not guarantee:</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 pl-2 sm:pl-3">
              <li>Passing any language proficiency examination</li>
              <li>Obtaining a particular examination score</li>
              <li>Availability of examination appointments</li>
              <li>Issuance of a third-party language certificate</li>
              <li>Acceptance of a language qualification by a particular institution or authority</li>
            </ul>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Examination results depend on individual preparation, performance, and assessment by the relevant examination body.</p>
          </div>

          {/* 8. Course Completion Certificates */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">8.</span> Course Completion Certificates</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Where offered, Academy course completion certificates are issued according to the specific course&#x27;s attendance, assessment, and completion requirements.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">A certificate issued by Gyanshala Foreign Language Academy represents completion of the relevant Academy training programme and should not be misrepresented as an official Goethe-Zertifikat or another externally accredited qualification.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">The Academy may verify the authenticity of certificates it issues and take appropriate action where fraud, misrepresentation, or unauthorised alteration is identified.</p>
          </div>

          {/* 9. Student Conduct and Responsibilities */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">9.</span> Student Conduct and Responsibilities</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Students are expected to maintain respectful and professional behaviour during classroom sessions, online classes, workshops, and other Academy activities.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">The following activities are prohibited:</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 pl-2 sm:pl-3">
              <li>Harassment, bullying, discrimination, or threatening behaviour</li>
              <li>Disrupting classes or interfering with other students&#x27; learning</li>
              <li>Sharing another student&#x27;s private information without authorisation</li>
              <li>Providing false registration or academic information</li>
              <li>Recording or distributing classes without required permission</li>
              <li>Misusing Academy study materials or digital learning platforms</li>
              <li>Participating in unlawful or fraudulent activities</li>
            </ul>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala may take proportionate disciplinary action for serious misconduct, including warnings, temporary suspension, or termination of enrolment, subject to applicable law and relevant contractual terms.</p>
          </div>

          {/* 10. Intellectual Property Rights */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">10.</span> Intellectual Property Rights</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">All original educational content created or owned by Gyanshala Foreign Language Academy is protected by applicable intellectual property laws.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Such content may include:</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 pl-2 sm:pl-3">
              <li>Video lectures and recorded lessons</li>
              <li>Study notes and worksheets</li>
              <li>Grammar exercises and vocabulary resources</li>
              <li>Presentations and teaching materials</li>
              <li>Website text, graphics, logos, and branding</li>
              <li>Online learning content and Academy-created assessments</li>
            </ul>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Third-party content remains the property of its respective owners and is used under applicable permissions or licences.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Students receive limited, personal, non-exclusive, and non-transferable permission to access authorised course materials for individual educational purposes.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Without prior written permission, users must not reproduce, redistribute, sell, publish, upload, commercially exploit, or share protected Academy materials with unauthorised third parties.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Unauthorised recording, redistribution, or commercial use of educational materials may result in appropriate legal action.</p>
          </div>

          {/* 11. Online Classes and Digital Learning Resources */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">11.</span> Online Classes and Digital Learning Resources</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Students participating in online classes must ensure that they have suitable internet access, compatible devices, and the necessary software.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Login credentials and restricted learning resources must be used only by authorised individuals.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Students must not disclose account passwords or provide unauthorised access to paid educational content.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala will make reasonable efforts to maintain access to online educational services but cannot guarantee uninterrupted availability due to internet outages, platform disruptions, maintenance, or circumstances beyond its reasonable control.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Where Academy-controlled technical disruptions materially affect paid classes, suitable remedial arrangements will be considered.</p>
          </div>

          {/* 12. Privacy and Data Protection */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">12.</span> Privacy and Data Protection</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala Foreign Language Academy respects the privacy of students and website users.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Personal information collected during enquiries, course registration, payment processing, and educational activities may be used for:</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 pl-2 sm:pl-3">
              <li>Course enrolment and administration</li>
              <li>Student communication and academic support</li>
              <li>Scheduling classes and assessments</li>
              <li>Payment processing and maintaining transaction records</li>
              <li>Providing requested educational services</li>
              <li>Meeting applicable legal obligations</li>
            </ul>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Personal data will be handled in accordance with applicable Indian data protection laws and the Academy&#x27;s Privacy Policy.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Student information will not be sold to advertisers.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Information may be shared with authorised service providers where necessary for delivering services, processing payments, managing learning platforms, or complying with legal requirements, subject to appropriate safeguards.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Students may contact the Academy to raise privacy-related concerns or exercise applicable data protection rights.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">A separate Privacy Policy should provide further details on the purposes of processing, applicable consent arrangements, data retention, security, and grievance contact information.</p>
          </div>

          {/* 13. Website Security and Account Responsibility */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">13.</span> Website Security and Account Responsibility</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Users are responsible for safeguarding their account credentials and preventing unauthorised access.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">If suspicious activity or a security breach is identified, users should notify the Academy promptly.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Users must not attempt to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 pl-2 sm:pl-3">
              <li>Access restricted systems without authorisation</li>
              <li>Introduce malware, viruses, or harmful software</li>
              <li>Interfere with website functionality</li>
              <li>Obtain another user&#x27;s personal information unlawfully</li>
              <li>Circumvent website access restrictions or security mechanisms</li>
            </ul>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala may restrict access to protect the security and integrity of its website and educational services.</p>
          </div>

          {/* 14. Copyright Infringement Notification */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">14.</span> Copyright Infringement Notification</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala Foreign Language Academy respects the intellectual property rights of authors, educators, publishers, institutions, and other content creators.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">If you believe that any material available through our website or educational services infringes your copyright, please contact us through our official email address.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">A copyright complaint should identify the allegedly infringing material, provide sufficient information about the original work, and include the complainant&#x27;s contact details.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Upon receiving a valid complaint, Gyanshala will review the matter and take appropriate action in accordance with applicable law.</p>
          </div>

          {/* 15. Third-Party Websites and External Links */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">15.</span> Third-Party Websites and External Links</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Our website may include links to third-party educational platforms, examination bodies, universities, payment gateways, or other external resources.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">These links are provided for information or convenience.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala does not control the content, services, privacy practices, or terms of independent third-party websites.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Users should review the relevant third party&#x27;s policies before using its services or making payments.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala is not responsible for acts or omissions of independent third parties except to the extent responsibility is imposed by applicable law.</p>
          </div>

          {/* 16. Advertisements and Promotions */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">16.</span> Advertisements and Promotions</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala may publish educational announcements, course promotions, scholarships, discounts, special offers, or information relating to external educational opportunities.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Promotional offers may be subject to separate eligibility criteria, validity periods, and specific terms disclosed at the time of the offer.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Any third-party advertisement or promotional content does not automatically imply endorsement, partnership, or responsibility on the part of Gyanshala.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">The Academy will endeavour to present course-related advertising accurately and transparently.</p>
          </div>

          {/* 17. No Guarantee of Employment, Admission, or Visa Approval */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">17.</span> No Guarantee of Employment, Admission, or Visa Approval</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala Foreign Language Academy provides language training and educational support.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Completion of a language course does not guarantee university admission, employment, vocational training placement, a visa, immigration approval, professional recognition, or a language examination result.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Such decisions are made independently by relevant universities, employers, examination authorities, embassies, immigration departments, and other competent organisations.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Students are responsible for verifying the eligibility and language requirements applicable to their intended academic or professional pathways.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Any separately offered admission, career guidance, or placement-related service will be governed by its own written terms where applicable.</p>
          </div>

          {/* 18. Restriction and Termination of Access */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">18.</span> Restriction and Termination of Access</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala reserves the right to restrict, suspend, or terminate access to website accounts or learning resources where reasonably necessary because of:</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 pl-2 sm:pl-3">
              <li>Serious violations of these Terms and Conditions</li>
              <li>Fraudulent or unlawful activities</li>
              <li>Unauthorised sharing of educational materials</li>
              <li>Misuse of website services</li>
              <li>Threats to account or website security</li>
              <li>Failure to comply with agreed payment obligations</li>
            </ul>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Where appropriate, users will be given notice and an opportunity to resolve the issue.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Termination of access will not remove statutory rights or refund entitlements that may apply.</p>
          </div>

          {/* 19. Prohibition of Spam and Unauthorised Communications */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">19.</span> Prohibition of Spam and Unauthorised Communications</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Users must not use the Academy&#x27;s website, communication channels, or digital learning systems to distribute spam, fraudulent messages, misleading advertisements, or unsolicited promotional content.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala may block, filter, or remove such communications and take appropriate action against misuse of its platforms.</p>
          </div>

          {/* 20. Limitation of Liability */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">20.</span> Limitation of Liability</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala Foreign Language Academy aims to provide accurate educational information, reliable learning resources, and professional language training.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">However, educational outcomes may vary according to individual ability, attendance, practice, preparation, and other factors.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">To the extent permitted by applicable law, the Academy will not be liable for indirect or consequential losses arising solely from circumstances beyond its reasonable control.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or restricted, including liability arising from applicable consumer protection obligations.</p>
          </div>

          {/* 21. Indemnification */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">21.</span> Indemnification</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">To the extent permitted by applicable law, users agree to indemnify Gyanshala Foreign Language Academy against reasonable losses, claims, and expenses arising from their unlawful conduct, deliberate misuse of Academy services, or infringement of third-party rights.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">This provision does not apply to losses caused by the Academy&#x27;s own unlawful acts, negligence, or breach of applicable legal obligations.</p>
          </div>

          {/* 22. Governing Law and Jurisdiction */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">22.</span> Governing Law and Jurisdiction</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">These Terms and Conditions shall be governed by and interpreted in accordance with the laws of India.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Subject to applicable statutory rights and mandatory jurisdictional provisions, disputes relating to these Terms may be brought before competent courts in Jaipur, Rajasthan, India.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Nothing in this clause restricts a consumer&#x27;s right to approach an appropriate consumer commission, statutory authority, or other legally competent forum.</p>
          </div>

          {/* 23. Changes to Terms and Conditions */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">23.</span> Changes to Terms and Conditions</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Gyanshala Foreign Language Academy reserves the right to revise these Terms and Conditions periodically to reflect changes in educational services, website features, operational procedures, or applicable laws.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Revised Terms will be published on the official website.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Continued use of the website after revised Terms become effective constitutes acceptance of those revised Terms to the extent permitted by law.</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Existing paid enrolment agreements will remain subject to their agreed terms unless a valid modification is made.</p>
          </div>

          {/* 24. Contact Information */}
          <div className="space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white flex items-center gap-2.5"><span className="text-[#C00000]">24.</span> Contact Information</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">For questions concerning these Terms and Conditions, course registration, payments, refund requests, or educational services, please contact:</p>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">Students are encouraged to contact the Academy through its authorised communication channels for assistance.</p>
            <h3 className="text-lg font-bold text-black dark:text-white pt-3">Acceptance of Terms</h3>
            <div className="p-5 sm:p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg space-y-2 text-sm sm:text-base text-zinc-800 dark:text-zinc-200 mt-3">
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
