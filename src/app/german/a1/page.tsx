import type { Metadata } from "next";
import GermanCourseHero from "@/components/GermanCourseHero";

export const metadata: Metadata = {
  title: "German A1 Course | Gyanshala Foreign Language Academy",
  description: "Learn German A1 Beginner Level at Gyanshala Academy Jaipur. CEFR aligned curriculum with certified trainers.",
};

export default function GermanA1Page() {
  return (
    <GermanCourseHero
      title="GERMAN A1 LEVEL"
      subtitle="A1 – Beginner Level German Language Training in Jaipur"
    />
  );
}
