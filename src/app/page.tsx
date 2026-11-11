import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Gyanshala Academy - German Language Institute & Overseas Pathways | Jaipur",
  description:
    "Jaipur's premier German language academy for A1 to C2 certification, Goethe & telc exam preparation, Study in Germany, and paid Ausbildung counseling.",
  alternates: {
    canonical: "https://gyanshala.in",
  },
  openGraph: {
    title: "Gyanshala Academy - German Language Institute & Overseas Pathways | Jaipur",
    description:
      "Learn German (A1-C2) with certified native trainers in Jaipur. Comprehensive Goethe & telc preparation, tuition-free Study in Germany, and Ausbildung guidance.",
    url: "https://gyanshala.in",
    siteName: "Gyanshala Academy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/Logo/LOGO.NEW.GYANSHALA.png",
        width: 1200,
        height: 630,
        alt: "Gyanshala Foreign Language Academy Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gyanshala Academy - German Language Institute & Overseas Pathways | Jaipur",
    description:
      "Learn German (A1-C2), prepare for Goethe & telc exams, and explore tuition-free study and Ausbildung in Germany with Gyanshala Academy Jaipur.",
    images: ["/Logo/LOGO.NEW.GYANSHALA.png"],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Gyanshala Foreign Language Academy",
    alternateName: "Gyanshala Academy",
    url: "https://gyanshala.in",
    logo: "https://gyanshala.in/Logo/LOGO.NEW.GYANSHALA.png",
    image: "https://gyanshala.in/Hero/IMG_20250806_170204918_HDR.jpg",
    description:
      "Premier German Language Academy and Overseas Pathways Consultancy in Jaipur, Rajasthan, established in 2018.",
    telephone: "+91-8239218436",
    email: "info@gyanshala.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gyanshala Academy, Tonk Road / Gopalpura Bypass",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302018",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/gyanshalaajaipur/",
      "https://www.instagram.com/learnwithgyanshala/",
      "https://www.linkedin.com/in/gyanshala-foreign-language-academy-044459202",
      "https://www.youtube.com/@gyanshalaforeignlanguage",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
