import type { Metadata } from "next";
import GermanCourseHero from "@/components/GermanCourseHero";

export const metadata: Metadata = {
  title: "German Courses A1–C2 | Gyanshala Foreign Language Academy",
  description: "Comprehensive German Language Courses from A1 to C2 levels at Gyanshala Academy Jaipur.",
};

export default function GermanOverviewPage() {
  return (
    <GermanCourseHero
      title="GERMAN COURSES"
      subtitle="Comprehensive CEFR-Aligned Training from A1 to C2 Levels"
    />
  );
}
