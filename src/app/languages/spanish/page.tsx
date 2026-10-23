import type { Metadata } from "next";
import GermanCourseHero from "@/components/GermanCourseHero";

export const metadata: Metadata = {
  title: "Spanish Language Course | Gyanshala Foreign Language Academy",
  description: "Learn Spanish language from A1 to C2 levels (DELE/SIELE) at Gyanshala Academy Jaipur.",
};

export default function SpanishPage() {
  return (
    <GermanCourseHero
      title="SPANISH LANGUAGE"
      subtitle="Interactive Spanish Language Training • DELE & SIELE Preparation"
      image="/Hero/GermanHero2.jpg"
    />
  );
}
