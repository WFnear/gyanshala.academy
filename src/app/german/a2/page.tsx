import type { Metadata } from "next";
import GermanCourseHero from "@/components/GermanCourseHero";

export const metadata: Metadata = {
  title: "German A2 Course | Gyanshala Foreign Language Academy",
  description: "Learn German A2 Elementary Level at Gyanshala Academy Jaipur. CEFR aligned curriculum with certified trainers.",
};

export default function GermanA2Page() {
  return (
    <GermanCourseHero
      title="GERMAN A2 LEVEL"
      subtitle="A2 – Elementary Level German Language Training in Jaipur"
    />
  );
}
