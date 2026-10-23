import type { Metadata } from "next";
import GermanCourseHero from "@/components/GermanCourseHero";

export const metadata: Metadata = {
  title: "German B1 Course | Gyanshala Foreign Language Academy",
  description: "Learn German B1 Intermediate Level at Gyanshala Academy Jaipur. CEFR aligned curriculum with certified trainers.",
};

export default function GermanB1Page() {
  return (
    <GermanCourseHero
      title="GERMAN B1 LEVEL"
      subtitle="B1 – Intermediate Level German Language Training in Jaipur"
    />
  );
}
