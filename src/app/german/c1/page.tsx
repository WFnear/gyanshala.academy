import type { Metadata } from "next";
import GermanCourseHero from "@/components/GermanCourseHero";

export const metadata: Metadata = {
  title: "German C1 Course | Gyanshala Foreign Language Academy",
  description: "Learn German C1 Advanced Level at Gyanshala Academy Jaipur. CEFR aligned curriculum with certified trainers.",
};

export default function GermanC1Page() {
  return (
    <GermanCourseHero
      title="GERMAN C1 LEVEL"
      subtitle="C1 – Advanced Level German Language Training in Jaipur"
    />
  );
}
