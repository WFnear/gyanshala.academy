import type { Metadata } from "next";
import GermanCourseHero from "@/components/GermanCourseHero";

export const metadata: Metadata = {
  title: "All Languages | Gyanshala Foreign Language Academy",
  description: "Learn German, French, Spanish, and English with certified language experts at Gyanshala Academy Jaipur.",
};

export default function AllLanguagesPage() {
  return (
    <GermanCourseHero
      title="ALL LANGUAGES"
      subtitle="Master Global Languages with Certified Faculty & Interactive Methodology"
      image="/Hero/GermanHero3.jpg"
    />
  );
}
