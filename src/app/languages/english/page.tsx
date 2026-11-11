import type { Metadata } from "next";
import GermanCourseHero from "@/components/GermanCourseHero";

export const metadata: Metadata = {
  title: "Spoken English & IELTS Prep Classes in Jaipur | Gyanshala Academy",
  description:
    "Build spoken English fluency, business presentation skills, and high-band IELTS / TOEFL preparation with personalized feedback at Gyanshala Academy Jaipur.",
  alternates: {
    canonical: "https://gyanshala.in/languages/english",
  },
  openGraph: {
    title: "Spoken English & IELTS Prep Classes in Jaipur | Gyanshala Academy",
    description:
      "Build spoken English fluency, business presentation skills, and high-band IELTS / TOEFL preparation with personalized feedback at Gyanshala Academy Jaipur.",
    url: "https://gyanshala.in/languages/english",
  },
};

export default function EnglishPage() {
  return (
    <GermanCourseHero
      title="ENGLISH LANGUAGE"
      subtitle="Spoken English, Business Communication & IELTS / TOEFL Preparation"
      image="/Hero/hero3.jpg"
    />
  );
}
