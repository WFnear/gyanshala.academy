import type { Metadata } from "next";
import GermanCourseHero from "@/components/GermanCourseHero";

export const metadata: Metadata = {
  title: "Spanish Language Course in Jaipur | DELE & SIELE Certification",
  description:
    "Master Spanish language skills for study abroad, travel, and international careers. Comprehensive DELE and SIELE certification training at Gyanshala Jaipur.",
  alternates: {
    canonical: "https://gyanshala.in/languages/spanish",
  },
  openGraph: {
    title: "Spanish Language Course in Jaipur | DELE & SIELE Certification",
    description:
      "Master Spanish language skills for study abroad, travel, and international careers. Comprehensive DELE and SIELE certification training at Gyanshala Jaipur.",
    url: "https://gyanshala.in/languages/spanish",
  },
};

export default function SpanishPage() {
  return (
    <GermanCourseHero
      title="SPANISH LANGUAGE"
      subtitle="Interactive Spanish Language Training • DELE & SIELE Preparation"
      image="/Hero/hero3.jpg"
    />
  );
}
