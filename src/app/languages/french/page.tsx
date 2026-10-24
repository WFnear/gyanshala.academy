import type { Metadata } from "next";
import GermanCourseHero from "@/components/GermanCourseHero";

export const metadata: Metadata = {
  title: "French Language Course | Gyanshala Foreign Language Academy",
  description: "Learn French language from beginner to advanced levels (DELF/DALF) at Gyanshala Academy Jaipur.",
};

export default function FrenchPage() {
  return (
    <GermanCourseHero
      title="FRENCH LANGUAGE"
      subtitle="Comprehensive French Language Training • DELF & DALF Preparation"
      image="/Hero/hero3.jpg"
    />
  );
}
