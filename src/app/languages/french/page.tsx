import type { Metadata } from "next";
import GermanCourseHero from "@/components/GermanCourseHero";

export const metadata: Metadata = {
  title: "French Language Course in Jaipur | DELF & DALF Exam Preparation",
  description:
    "Learn French from beginner (A1) to advanced (B2) with certified instructors at Gyanshala Jaipur. Prepare for DELF/DALF and TEF immigration exams.",
  alternates: {
    canonical: "https://gyanshala.in/languages/french",
  },
  openGraph: {
    title: "French Language Course in Jaipur | DELF & DALF Exam Preparation",
    description:
      "Learn French from beginner (A1) to advanced (B2) with certified instructors at Gyanshala Jaipur. Prepare for DELF/DALF and TEF immigration exams.",
    url: "https://gyanshala.in/languages/french",
  },
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
