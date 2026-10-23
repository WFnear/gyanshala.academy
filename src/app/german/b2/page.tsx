import type { Metadata } from "next";
import GermanCourseHero from "@/components/GermanCourseHero";

export const metadata: Metadata = {
  title: "German B2 Course | Gyanshala Foreign Language Academy",
  description: "Learn German B2 Upper-Intermediate Level at Gyanshala Academy Jaipur. CEFR aligned curriculum with certified trainers.",
};

export default function GermanB2Page() {
  return (
    <GermanCourseHero
      title="GERMAN B2 LEVEL"
      subtitle="B2 – Upper-Intermediate Level German Language Training in Jaipur"
    />
  );
}
