import type { Metadata } from "next";
import GermanCourseHero from "@/components/GermanCourseHero";

export const metadata: Metadata = {
  title: "Germany Pathways | Gyanshala Foreign Language Academy",
  description: "Explore pathways for higher education, vocational training (Ausbildung), and nursing careers in Germany with Gyanshala Academy Jaipur.",
};

export default function PathwaysIndexPage() {
  return (
    <GermanCourseHero
      title="GERMANY PATHWAYS"
      subtitle="Study, Ausbildung & Professional Career Opportunities in Germany"
      image="/Hero/IMG_20250806_121152807_HDR.jpg"
    />
  );
}
