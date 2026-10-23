import type { Metadata } from "next";
import GermanCourseHero from "@/components/GermanCourseHero";

export const metadata: Metadata = {
  title: "German C2 Course | Gyanshala Foreign Language Academy",
  description: "Learn German C2 Proficiency Level at Gyanshala Academy Jaipur. CEFR aligned curriculum with certified trainers.",
};

export default function GermanC2Page() {
  return (
    <GermanCourseHero
      title="GERMAN C2 LEVEL"
      subtitle="C2 – Proficiency Level German Language Training in Jaipur"
    />
  );
}
