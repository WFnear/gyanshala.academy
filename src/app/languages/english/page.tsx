import type { Metadata } from "next";
import GermanCourseHero from "@/components/GermanCourseHero";

export const metadata: Metadata = {
  title: "English Language Course | Gyanshala Foreign Language Academy",
  description: "Improve spoken English, business communication, and IELTS/TOEFL exam preparation at Gyanshala Academy Jaipur.",
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
