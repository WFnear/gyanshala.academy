"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  FadeInScale,
  StaggerContainer,
  StaggerItem,
  CardImageReveal,
  CardTextReveal,
  ScrollParallax,
  AnimatedButton,
} from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";

interface Slide {
  id: number;
  image: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primaryBtn: { text: string; href: string };
  secondaryBtn: { text: string; href: string };
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/Hero/IMG_20250806_170204918_HDR.jpg",
    badge: "🇩🇪 Premier German Institute in Jaipur",
    title: "Master German Language",
    highlight: "From A1 to C2 Levels",
    description: "Learn with native-standard curriculum, certified faculty, and interactive batches tailored for Goethe, TELC and ÖSD examinations.",
    primaryBtn: { text: "German Courses", href: "/german" },
    secondaryBtn: { text: "Enquiry Now", href: "/enquiry" },
  },
  {
    id: 2,
    image: "/Hero/IMG_20250806_121152807_HDR.jpg",
    badge: "🇩🇪 Study • Ausbildung • Careers in Germany",
    title: "Study, Ausbildung & Careers",
    highlight: "in Germany",
    description: "Master German to unlock tuition-free university education, paid dual Ausbildung with monthly stipends, and high-demand nursing & engineering careers.",
    primaryBtn: { text: "Explore Germany Pathways", href: "/pathways" },
    secondaryBtn: { text: "Free Counseling", href: "/enquiry" },
  },
  {
    id: 3,
    image: "/Hero/hero3x.jpg",
    badge: "🌍 Global Language Programs",
    title: "Learn Beyond German",
    highlight: "Master Global Languages",
    description: "",
    primaryBtn: { text: "View All Languages", href: "/languages" },
    secondaryBtn: { text: "Free Counseling", href: "/enquiry" },
  },
];

const externalResources = [
  {
    name: "DAAD",
    url: "https://www.daad.de/en/",
    icon: "/partners/daad.png",
  },
  {
    name: "German Radio",
    url: "https://www.deutschland.fm/",
    icon: "/partners/german-radio.png",
  },
  {
    name: "Goethe-Institut",
    url: "https://www.goethe.de/ins/in/en/sta/del.html",
    icon: "/partners/goethe.png",
  },
  {
    name: "telc Exam",
    url: "https://deutsch-pruefung.de/",
    icon: "/partners/telc.png",
  },
  {
    name: "Deutsche Welle (DW)",
    url: "https://www.dw.com/",
    icon: "/partners/dw.png",
  },
  {
    name: "Germany in India",
    url: "https://india.diplo.de/",
    icon: "/partners/germany-in-india.png",
  },
  {
    name: "Make it in Germany",
    url: "https://www.make-it-in-germany.com/en/",
    icon: "/partners/make-it-in-germany.png",
  },
];

const whyChoosePoints = [
  {
    number: "01",
    title: "Experienced German Language Trainers",
    description: "Learn from qualified and dedicated German language experts.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "German Courses from A1 to C2",
    description: "Progress step by step from beginner to advanced proficiency.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Spoken German & Exam Preparation",
    description: "Develop practical communication skills and prepare for recognised examinations.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v5.018z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Flexible Batch Timings",
    description: "Choose a batch that fits your daily schedule.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Affordable German Classes in Jaipur",
    description: "Quality German language training at reasonable fees.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 0a1.5 1.5 0 00-1.5 1.5v8.25a1.5 1.5 0 001.5 1.5m16.5-11.25a1.5 1.5 0 011.5 1.5v8.25a1.5 1.5 0 01-1.5 1.5m-16.5 0h16.5m-18 3h19.5a.75.75 0 00.75-.75v-.75H1.5v.75a.75.75 0 00.75.75z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Online and Offline Classes",
    description: "Learn through online sessions or in-person classroom training.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#C00000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
];

const highlights = [
  {
    title: "Exceptional Study Material",
    description: "Diverse study material to our students for a world class language knowledge.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#F59E0B] fill-current" viewBox="0 0 24 24">
        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v7l2-1.5 2 1.5V4h7v16z" />
      </svg>
    ),
  },
  {
    title: "Certified Language Trainer",
    description: "Empowering you to achieve fluency and confidence in your chosen language.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#F59E0B] fill-current" viewBox="0 0 24 24">
        <path d="M20.5 9.5l.9-2.2-2.2-.9.2-2.4-2.4-.2-.9-2.2-2.2.9-1.9-1.5-1.9 1.5-2.2-.9-.9 2.2-2.4.2.2 2.4-2.2.9.9 2.2-1.5 1.9 1.5 1.9-.9 2.2 2.2.9-.2 2.4 2.4.2.9 2.2 2.2-.9 1.9 1.5 1.9-1.5 2.2.9.9-2.2 2.4-.2-.2-2.4 2.2-.9-.9-2.2 1.5-1.9z" />
      </svg>
    ),
  },
  {
    title: "Study Abroad Counselling",
    description: "Expert study abroad counseling to guide your journey toward global education opportunities.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#F59E0B] fill-current" viewBox="0 0 24 24">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 8.55L4.47 9 12 4.91 19.53 9 12 11.55zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
      </svg>
    ),
  },
  {
    title: "Flexible Hours",
    description: "Learn from your comfort zone with multiple batch timing options.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#F59E0B] fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5l-4.2-2.5.7-1.2 3.5 2.1V7h1.5v9.5z" />
      </svg>
    ),
  },
  {
    title: "Smart Classrooms",
    description: "Study with interactive digital setups and advanced modern learning facilities.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#F59E0B] fill-current" viewBox="0 0 24 24">
        <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-9-9l-4 3 4 3V8z" />
      </svg>
    ),
  },
  {
    title: "Ausbildung in Germany",
    description: "Complete pathway guidance for vocational training and career opportunities in Germany.",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#F59E0B] fill-current" viewBox="0 0 24 24">
        <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 12c-4.42 0-8 2.24-8 5v2h16v-2c0-2.76-3.58-5-8-5zm1-3.5h-2l-1 4 2 3 2-3-1-4z" />
      </svg>
    ),
  },
];

interface OnlineVideo {
  id: string;
  youtubeId: string;
  playlistId?: string;
  title: string;
  trainer: string;
  level: string;
  duration: string;
  isPlaylist?: boolean;
}

const onlineVideos: OnlineVideo[] = [
  {
    id: "video-1",
    youtubeId: "UfaGlQcIKvE",
    title: "Nursing Jobs in Germany - Complete Process for Indian Nurses",
    trainer: "Gyanshala Germany Pathway Experts",
    level: "Nursing in Germany",
    duration: "Full Guide",
  },
  {
    id: "video-2",
    youtubeId: "M5B2xEpXJGI",
    title: "Ausbildung in Germany - Vocational Training & Career Guide for Indian Students",
    trainer: "Gyanshala Germany Pathway Experts",
    level: "Ausbildung in Germany",
    duration: "Full Guide",
  },
  {
    id: "video-3",
    youtubeId: "IhXq68yXfu0",
    playlistId: "PLIzfqeLAM3cSNdu9yssdtxrPu-ZsMFCzA",
    title: "A1 German Language Grammar Topics - Complete Series",
    trainer: "Dilip Sinsinwar | German Language Trainer",
    level: "A1 Grammar Series",
    duration: "Full Playlist",
    isPlaylist: true,
  },
];

const studentReviews = [
  {
    name: "Karan Pareek",
    image: "/Review/KaranPareek.png",
    rating: 5,
    review:
      "I had a wonderful experience learning German at “Gyanshala Foreign Language Academy”. The classes were well-structured, engaging, and easy to understand. Special thanks to Dillip Sir for his guidance, patience, and constant support. I truly appreciate his efforts and highly recommend this institute to anyone learning German.",
  },
  {
    name: "Anjali Choudhary",
    image: "/Review/AnjaliChoudhary.png",
    rating: 5,
    review:
      "Seit einem Jahr lerne ich Deutsch und glücklicherweise habe ich meine B1 Prüfung bestanden🏆🏆 . Zurzeit lerne ich B2 Kurs...Ich sammle hier viele Erfahrungen und das Umfeld des Unterrichts ist auch aüßerst einwandfrei und die Lehrer sind auch sehr hilfreich und unterstüztend uns beim Problem...Ich empfehle allen das Gyanshala institute zu beitreten",
  },
  {
    name: "Jhanvi Kumawat",
    image: "/Review/JhanviKumawat.png",
    rating: 5,
    review:
      "The German classes here are very interactive and practical. I like how the teachers focus on speaking from day one, instead of just theory. The sessions are fun, and I always feel motivated to practice more at home. It’s a perfect institute for beginners who want to learn German seriously.",
  },
  {
    name: "Richa Singh",
    image: "/Review/RichaSingh.png",
    rating: 5,
    review:
      "I recently finished my German classes here and I have to say, the faculty is amazing. They really know their stuff and have a deep and thorough Knowledge of the German language. Instead of just making you memorize a textbook, they actually break down tricky grammar and sentence structures so it's easier to grasp the concepts. The teachers are super supportive and patient whenever you get stuck. They are incredible and respond whenever you need help. Definitely recommend.",
  },
  {
    name: "Suraj Dhayal",
    image: "/Review/Suraj dhayal.jpeg",
    rating: 5,
    review:
      "Gyanshala Foreign Language Academy is a finest institute in Lalkothi Jaipur for learning German language. The teachers are very supportive and hardworking. They are always ready to help you. The environment of the institute is very rich. Highly recommend!",
  },
  {
    name: "Ramjhan Chhimpa",
    image: "/Review/Ramjhan Chhimpa.jpeg",
    rating: 5,
    review:
      "I joined German language classes in Jaipur here and I must say the teaching quality is very good. The faculty is supportive, friendly, and always ready to clear doubts. The classes are interactive with lots of speaking practice, which makes learning enjoyable. Overall, a great place to improve German.",
  },
  {
    name: "Suvidhi Loonker",
    image: "/Review/Suvidhi Loonker.jpeg",
    rating: 5,
    review:
      "I had an incredible experience at this German coaching institute! The faculty members are extremely knowledgeable, approachable, and genuinely dedicated to ensuring each student’s success. The learning atmosphere is positive, supportive, and highly conducive to acquiring language skills. Whether you’re a beginner or looking to refine your knowledge, this institute provides the perfect balance of structured teaching and practical exercises. I wholeheartedly recommend it to anyone looking for a top-tier German language learning experience.",
  },
  {
    name: "Shivam Tak",
    image: "/Review/Shivam tak.png",
    rating: 5,
    review:
      "Gyanshala is actually having some quality teaching and support toward student. It is a really very good experience. All the details covered by faculty is really great. Every smallest information was well explained by faculty. I am really thankful to Gyanshala teachers for making German language so easy to learn and understand.",
  },
  {
    name: "Jatin Sharma",
    image: "/Review/Jatin Sharma.jpeg",
    rating: 5,
    review:
      "The Gyanshala Foreign Language Academy is an excellent place to learn languages. I am currently doing the English spoken course here, and I have seen a lot of improvement in myself. The teachers are knowledgeable, experienced, and very supportive with a friendly attitude. Thanks to their guidance, I can now speak English more fluently and confidently.",
  },
  {
    name: "Deepak Chaudhary",
    image: "/Review/Deepak Choudhary.jpeg",
    rating: 5,
    review:
      "I recently completed a course at Gyanshala academy, and I must say it exceeded my expectations. The instructors were not only highly knowledgeable but also incredibly patient, catering to the varying skill levels of each student with tailored teaching methods. The curriculum was well-structured, covering all aspects of the language from grammar to conversational skills, and the small class sizes ensured ample opportunity for interaction and practice. Overall, I highly recommend Gyanshala Academy Institute to anyone looking to master the language effectively and enjoyably.",
  },
  {
    name: "Khushi Sharma",
    image: "/Review/Khushi Sharma.jpeg",
    rating: 5,
    review:
      "I would 100% recommend this institute for all learners. I am learning German here and my experience here is just so amazing. Teachers and the whole environment is so good. Dilip sir and Ashweer sir are brilliant and fantastic teachers. They support and understand students and are the most helpful. This institute provide the best nurturing environment. Anyone who needs guidance for studying abroad and learning foreign language must attend here. Tested and recommend institute.",
  },
  {
    name: "Akshat Pandey",
    image: "/Review/Akshat Pandey.jpeg",
    rating: 5,
    review:
      "I started learning German here exact 1 year before and now I have completed B2 certification. From the level A1 to B2 I had the most amazing experience here while studying and interacting with others. Teachers here have very deep knowledge about everything like getting job in the German field, studying abroad and Techniques for the slow learners.",
  },
  {
    name: "Rahul Soni",
    image: "/Review/Rahul Soni.jpeg",
    rating: 5,
    review:
      "Das ist ein schönes Institut und die Lehrer sind nett und hilfreich. Ich empfehle das Institut für alle, die Deutsch in Jaipur lernen wollen.",
  },
  {
    name: "Lavesh Rajput",
    image: "/Review/Lavesh Rajput.jpeg",
    rating: 5,
    review:
      "GYANSHALA is a great place to learn foreign languages, where you get a healthy environment and great support from the staff. Their personalised attention to their students help to learn even faster. Well equipped digital classroom, interaction with natives and supportive faculty are also a very big support to the students. Coming to the career guidance and counseling, it is also a strong side of Gyanshala.",
  },
  {
    name: "Jayalaxmi",
    image: "/Review/Jayalaxmi.jpeg",
    rating: 5,
    review:
      "Had an excellent experience here. The teachers are well qualified. It made learning german easy. This institute is highly recommended to everyone who wishes to learn any foreign language.",
  },
  {
    name: "Shailja Rathore",
    image: "/Review/Shailja Rathore.jpeg",
    rating: 5,
    review:
      "Wenn jemand in Jaipur deutsch lernen möchte, der am Gyanshala Institut einmal besuchen soll. Die Lehrer sind sehr hilfreich und freundlich. Das Lernen am Gyanshala fühlt nie schwer, sondern genießt man die Atmosphäre!",
  },
  {
    name: "Veronica Velasco",
    image: "/Review/Veronica Velasco.jpeg",
    rating: 5,
    review:
      "I had a fantastic experience learning German at Gyanshala Foreign Language Academy with Mr. Dilip Sinsinwar. Thanks to his excellent teaching methods and patient guidance, I was able to complete the A1 level in a short period of time. Mr. Sinsinwar made the lessons engaging and easy to understand, which greatly helped in building my confidence with the language. The academy provides a supportive learning environment, and I highly recommend it to anyone looking to learn German quickly and effectively. Vielen Dank, Mr. Sinsinwar and Gyanshala!",
  },
  {
    name: "Sanju Punia",
    image: "/Review/Sanju Punia.jpeg",
    rating: 5,
    review:
      "Best german language institute in jaipur. I am from Haryana and joined here for B1 and B2 level. I am learning from Disha Mam and found the class best among all the classes I've taken earlier in Jaipur as well as Delhi. For students interested in studying or working in Germany, the academy offers counseling services, assistance with university admissions, visa applications, and information on job opportunities within its network. Supporting staff, positive environment. Highly recommended! ✅✨",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  // Handle touch swipe / scroll
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      // Swiped left -> next slide
      nextSlide();
    } else if (distance < -50) {
      // Swiped right -> prev slide
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const reviewsTrackRef = useRef<HTMLDivElement>(null);
  const [isReviewsPaused, setIsReviewsPaused] = useState(false);

  const getReviewStep = () => {
    if (!reviewsTrackRef.current) return 360;
    const container = reviewsTrackRef.current;
    const firstCard = container.firstElementChild as HTMLElement | null;
    if (firstCard) {
      const style = window.getComputedStyle(container);
      const gap = parseFloat(style.columnGap || style.gap || "20") || 20;
      return firstCard.offsetWidth + gap;
    }
    return 360;
  };

  const scrollPrevReview = () => {
    if (reviewsTrackRef.current) {
      const container = reviewsTrackRef.current;
      const step = getReviewStep();
      if (container.scrollLeft <= 15) {
        container.scrollTo({ left: container.scrollWidth - container.clientWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -step, behavior: "smooth" });
      }
    }
  };

  const scrollNextReview = () => {
    if (reviewsTrackRef.current) {
      const container = reviewsTrackRef.current;
      const step = getReviewStep();
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 20) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: step, behavior: "smooth" });
      }
    }
  };

  // Auto slide reviews every 2 seconds (faster, brisk pace; paused on hover / touch)
  useEffect(() => {
    if (isReviewsPaused) return;

    const timer = setInterval(() => {
      scrollNextReview();
    }, 2000);

    return () => clearInterval(timer);
  }, [isReviewsPaused]);


  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full aspect-[16/10] sm:aspect-[16/8] lg:aspect-auto lg:h-[660px] min-h-[260px] max-h-[520px] lg:max-h-none overflow-hidden select-none bg-zinc-950"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides Container (Zero Horizontal Overflow) */}
        <div className="relative w-full h-full overflow-hidden">
          {slides.map((slide, index) => {
            const isActive = index === current;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out ${isActive
                  ? "opacity-100 translate-x-0 z-10 pointer-events-auto"
                  : index < current
                    ? "opacity-0 -translate-x-full z-0 pointer-events-none"
                    : "opacity-0 translate-x-full z-0 pointer-events-none"
                  }`}
              >
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                />

                {/* Gradient Overlay for centered contrast */}
                <div className="absolute inset-0 bg-black/55 sm:bg-black/45" />

                {/* Slide Content (Centered & Mobile Responsive) */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex flex-col items-center justify-center text-center">
                  <div className="max-w-4xl lg:max-w-5xl text-white space-y-2 sm:space-y-3 lg:space-y-4">
                    {/* Heading */}
                    <h1
                      className={`text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-balance leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] transition-all duration-700 ease-out ${isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                        }`}
                      style={{ transitionDelay: isActive ? "150ms" : "0ms" }}
                    >
                      {slide.title} {slide.highlight}
                    </h1>

                    {/* Description */}
                    <p
                      className={`text-xs sm:text-sm md:text-base lg:text-lg text-white/90 font-normal leading-relaxed text-balance max-w-3xl mx-auto drop-shadow-sm transition-all duration-700 ease-out ${isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                        }`}
                      style={{ transitionDelay: isActive ? "300ms" : "0ms" }}
                    >
                      {slide.description}
                    </p>

                    {/* CTA Action Button */}
                    {slide.primaryBtn && (
                      <div
                        className={`pt-1 sm:pt-2 transition-all duration-700 ease-out ${isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                          }`}
                        style={{ transitionDelay: isActive ? "450ms" : "0ms" }}
                      >
                        <Link
                          href={slide.primaryBtn.href}
                          className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-1.5 sm:py-2.5 rounded-full bg-[#ECBB0C] hover:bg-[#d9ab0b] text-white text-[11px] sm:text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
                        >
                          <span>{slide.primaryBtn.text}</span>
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Previous Button (No Background) */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="cursor-pointer absolute left-1 sm:left-3 lg:left-5 top-1/2 -translate-y-1/2 z-20 text-white/85 hover:text-white transition-all hover:scale-115 active:scale-95 p-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Next Button (No Background) */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="cursor-pointer absolute right-1 sm:right-3 lg:right-5 top-1/2 -translate-y-1/2 z-20 text-white/85 hover:text-white transition-all hover:scale-115 active:scale-95 p-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Floating Indicator Dots */}
        <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 sm:gap-2 bg-black/45 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-xl">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`cursor-pointer rounded-full transition-all duration-300 ${current === index
                  ? "w-4 sm:w-6 h-1.5 sm:h-2 bg-[#ECBB0C] shadow-sm"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/70 hover:bg-white"
                }`}
            />
          ))}
        </div>



      </section>

      {/* About Us Gyanshala Section - Matching About Us Page Typography & Design */}
      <section id="about" className="relative py-14 sm:py-20 lg:py-24 bg-[#FCF9EA] dark:bg-zinc-950 overflow-hidden border-b border-zinc-200/60 dark:border-zinc-800">
        {/* White Paper Background Texture with 70% Opacity */}
        <div className="absolute inset-0 z-0 opacity-70 dark:opacity-30 pointer-events-none">
          <Image
            src="/whitepaper.jpg"
            alt="Paper background texture"
            fill
            className="object-cover object-center contrast-[1.12] brightness-[0.96]"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Text Content matching the reference typography */}
            <FadeInLeft className="lg:col-span-7">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] leading-none mb-3 sm:mb-4">
                OUR STORY
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-normal text-zinc-900 dark:text-zinc-100 tracking-[-0.01em] leading-[1.12] mb-6 sm:mb-7">
                Our journey since <span className="text-[#A61911] italic font-normal">2018</span>
              </h2>

              <FadeInUp delay={0.1}>
                <div className="space-y-4 sm:space-y-5 text-zinc-700 dark:text-zinc-300 text-base sm:text-lg lg:text-[17.5px] leading-[1.75] font-normal not-italic tracking-normal">
                  <p>
                    Gyanshala – Foreign Language Academy was established in 2018 as an initiative to support students in their learning journey, provide a global platform, and help them achieve their academic goals.
                  </p>

                  <p>
                    Gyanshala works to connect learners with international educational opportunities and offers language learning, consultation, and student guidance services. The academy aims to help students choose programmes suited to their interests and career goals, while encouraging them to become confident global citizens rooted in their traditions and ready to face the world.
                  </p>
                </div>
              </FadeInUp>

              {/* View More Button */}
              <FadeInUp delay={0.18} className="mt-7 sm:mt-8">
                <AnimatedButton>
                  <Link
                    href="/about-us"
                    className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-none text-base font-semibold text-white bg-[#A61911] hover:bg-[#8A140D] shadow-sm hover:shadow-md transition-all group"
                  >
                    <span>View More</span>
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </AnimatedButton>
              </FadeInUp>
            </FadeInLeft>

            {/* Right Column: About Us Image with No Radius */}
            <FadeInRight delay={0.12} className="lg:col-span-5 flex justify-center lg:justify-end">
              <ScrollParallax yOffset={35} className="w-full flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-none overflow-hidden shadow-lg border border-zinc-200/60 dark:border-zinc-800">
                  <Image
                    src="/Aboutusgyanshala.in.png"
                    alt="Gyanshala Foreign Language Academy - Your Trusted Partner in German Language Training"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </ScrollParallax>
            </FadeInRight>

          </div>
        </div>
      </section>

      {/* German Courses Section */}
      <section id="german-courses" className="relative py-12 sm:py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/germancourses/bgcolor.jpg"
            alt="German Courses Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <FadeInUp className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#ECBB0C] leading-none mb-3">
              LANGUAGE TRAINING
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-white tracking-normal leading-tight">
              German Courses
            </h2>
          </FadeInUp>

          {/* Course Cards Grid */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" staggerDelay={0.22}>
            {[
              { id: "a1", badge: "A1 Level", name: "A1 – Beginner Level" },
              { id: "a2", badge: "A2 Level", name: "A2 – Elementary Level" },
              { id: "b1", badge: "B1 Level", name: "B1 – Intermediate Level" },
              { id: "b2", badge: "B2 Level", name: "B2 – Upper-Intermediate Level" },
              { id: "c1", badge: "C1 Level", name: "C1 – Advanced Level" },
              { id: "c2", badge: "C2 Level", name: "C2 – Proficiency Level" },
            ].map((course, index) => {
              const isEven = index % 2 === 0;
              return (
                <StaggerItem
                  key={course.id}
                  className="h-full"
                  direction="alternate"
                  index={index}
                  hoverLift
                >
                  <Link
                    href={`/german/${course.id}`}
                    className="group flex flex-col h-full bg-[#FFFAF3] dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Top Image Area with Level Badge */}
                    <CardImageReveal reversed={!isEven} className="relative w-full aspect-[16/10] sm:aspect-[3/2] flex items-center justify-center overflow-hidden select-none">
                      <Image
                        src="/greenbg.jpg"
                        alt={course.badge}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 380px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors pointer-events-none" />
                      <span className="relative z-10 text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.65)]">
                        {course.badge}
                      </span>
                    </CardImageReveal>

                    {/* Bottom Area with Course Name (Enters from opposite direction, staggered) */}
                    <CardTextReveal reversed={!isEven} delay={0.15}>
                      <div className="p-3 sm:p-4 bg-[#FFFAF3] dark:bg-zinc-900 group-hover:bg-[#FCF9EA] dark:group-hover:bg-zinc-800/80 text-left transition-colors border-t border-zinc-200/60 dark:border-zinc-800">
                        <p className="font-semibold text-xs sm:text-sm lg:text-base text-black dark:text-white leading-snug whitespace-nowrap">
                          {course.name}
                        </p>
                      </div>
                    </CardTextReveal>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

        </div>
      </section>

      {/* Germany Pathways Section */}
      <section id="pathways" className="relative py-14 sm:py-20 lg:py-24 bg-[#F5EFE3] dark:bg-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800 overflow-hidden">
        {/* White Paper Background Texture */}
        <div className="absolute inset-0 z-0 opacity-60 dark:opacity-25 pointer-events-none">
          <Image
            src="/whitepaper.jpg"
            alt="Paper background texture"
            fill
            className="object-cover object-center contrast-[1.12] brightness-[0.96]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeInUp className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] leading-none mb-3">
              GLOBAL OPPORTUNITIES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-zinc-900 dark:text-zinc-100 tracking-normal leading-tight">
              Germany Pathways
            </h2>
          </FadeInUp>

          {/* 3 Pathway Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.24}>
            {[
              {
                title: "Study In Germany",
                description:
                  "Pursue a Bachelor's or Master's degree at a German university. Get guidance on course selection, admission requirements, APS certification, and student visa preparation.",
                target: "For students planning to pursue higher education in Germany.",
                cta: "Explore Study Options →",
                href: "/pathways/study-in-germany",
                image: "/Pathways/studyingermany.png",
              },
              {
                title: "Ausbildung in Germany",
                description:
                  "Learn a profession through practical workplace training and classroom education. Many dual training programmes offer a monthly allowance while you develop skills for a career in Germany.",
                target: "For students who want professional training and practical work experience.",
                cta: "Explore Ausbildung →",
                href: "/pathways/ausbildung",
                image: "/Pathways/ausbildung.png",
              },
              {
                title: "Nursing in Germany",
                description:
                  "Explore nursing employment opportunities in Germany if you have a GNM, BSc Nursing, or another relevant nursing qualification. Understand qualification recognition, German language requirements, and the steps towards professional registration.",
                target: "For qualified nurses looking to build their careers in Germany.",
                cta: "Explore Nursing Careers →",
                href: "/pathways/nursing-in-germany",
                image: "/Pathways/nursingcareer.png",
              },
            ].map((pathway, index) => (
              <StaggerItem key={pathway.title} className="h-full" direction="alternate" index={index} hoverLift>
                <Link
                  href={pathway.href}
                  className="group flex flex-col h-full bg-[#FFFAF3] dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden rounded-none"
                >
                  {/* Image Banner */}
                  <CardImageReveal reversed={index % 2 !== 0}>
                    <div className="relative aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                      <Image
                        src={pathway.image}
                        alt={pathway.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      />
                    </div>
                  </CardImageReveal>

                  {/* Red Title Banner & Content Area */}
                  <CardTextReveal reversed={index % 2 !== 0} delay={0.15} className="flex-1 flex flex-col">
                    {/* Red Title Banner */}
                    <div className="bg-[#AC2424] py-3 sm:py-3.5 px-4 text-center">
                      <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white tracking-normal leading-tight">
                        {pathway.title}
                      </h3>
                    </div>

                    {/* Content Area */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-[#FFFAF3] dark:bg-zinc-900">
                      <div className="space-y-3">
                        <p className="text-base sm:text-lg leading-[1.6] text-zinc-800 dark:text-zinc-200 font-normal">
                          {pathway.description}
                        </p>
                        <p className="text-base sm:text-lg leading-[1.6] text-zinc-800 dark:text-zinc-200 font-normal">
                          {pathway.target}
                        </p>
                      </div>

                      {/* Yellow Button */}
                      <div className="mt-6 pt-2">
                        <span className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-none bg-[#FBAE17] group-hover:bg-[#e09c12] text-white text-base sm:text-lg font-bold shadow-sm transition-colors">
                          {pathway.cta}
                        </span>
                      </div>
                    </div>
                  </CardTextReveal>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* =========================================================================
          OUR STUDENTS IN GERMANY SECTION
          ========================================================================= */}
      <section id="students-in-germany" className="relative py-14 sm:py-20 lg:py-24 bg-[#FCF9EA] dark:bg-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800 overflow-hidden">
        {/* Subtle Decorative Background Texture */}
        <div className="absolute inset-0 z-0 opacity-50 dark:opacity-20 pointer-events-none">
          <Image
            src="/whitepaper.jpg"
            alt="Paper background texture"
            fill
            className="object-cover object-center contrast-[1.12] brightness-[0.96]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <FadeInUp className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] font-normal text-zinc-900 dark:text-zinc-100 tracking-[-0.01em] leading-tight">
              Our Students in Germany
            </h2>
          </FadeInUp>
        </div>
      </section>

      {/* Experienced Educators / Meet Our Team Section */}
      <section id="team" className="py-14 sm:py-20 lg:py-24 bg-[#FBFBFB] dark:bg-zinc-900/30 border-b border-zinc-200/60 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeInUp className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] leading-none mb-3">
              EXPERIENCED EDUCATORS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-zinc-900 dark:text-zinc-100 tracking-normal leading-tight">
              Meet Our Team
            </h2>
          </FadeInUp>

          {/* Responsive Team Grid: 4 columns desktop, 2 columns mobile & tablet */}
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6" staggerDelay={0.22}>
            {[
              {
                name: "Dilip Sinsinwar",
                role: "German Language Trainer",
                image: "/teammembers/Dilip Sinsinwar Sir German Language Expert.png",
              },
              {
                name: "Claudia Zibell",
                role: "German Language Native Speaker",
                image: "/teammembers/Claudia Zibell Maam German langauge Native Speaker.png",
              },
              {
                name: "Ashveer Singh",
                role: "German Language Trainer",
                image: "/teammembers/Ashveer Singh Sir German Language Expert.png",
              },
              {
                name: "Ruchi Kaushik",
                role: "Spanish Language Trainer",
                image: "/teammembers/Ruchi Kausik Maam Spanish Language Trainer.png",
              },
              {
                name: "Jhanvi Kumawat",
                role: "German Language Trainer",
                image: "/teammembers/Jhanvi Kumawat German Language Trainer.png",
              },
              {
                name: "Katharina Shevchuk",
                role: "English/German & Russian Language Trainer",
                image: "/teammembers/Katharina Shevchuk Maam EnglishGerman & Russian Language Trainer.png",
              },
              {
                name: "Mumal Rathore",
                role: "French Language Trainer",
                image: "/teammembers/Mumal Rathore Maam French Language Trainer.png",
              },
              {
                name: "Neeru Joshi",
                role: "German Language Trainer",
                image: "/teammembers/Neeru Joshi German Langauge Trainer.png",
              },
            ].map((member, index) => (
              <StaggerItem key={member.name} className="h-full" direction="alternate" index={index} hoverLift>
                <div className="h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all group">
                  {/* Faculty Photo */}
                  <CardImageReveal reversed={index % 2 !== 0}>
                    <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-center transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  </CardImageReveal>

                  {/* Faculty Info */}
                  <CardTextReveal reversed={index % 2 !== 0} delay={0.15} className="flex-1 flex flex-col">
                    <div className="p-2.5 sm:p-3.5 md:p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200/60 dark:border-zinc-800 text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-zinc-900 dark:text-white tracking-tight leading-snug text-center">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm font-semibold text-[#C00000] leading-tight text-center">
                        {member.role}
                      </p>
                    </div>
                  </CardTextReveal>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* Why Choose Gyanshala Section */}
      <section id="why-choose-us" className="relative pt-14 sm:pt-20 lg:pt-24 pb-0 overflow-hidden border-b border-zinc-200/60 dark:border-zinc-800">
        {/* White Paper Background Texture with 100% Appearance */}
        <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
          <Image
            src="/whitepaper.jpg"
            alt="Paper background texture"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeInUp className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] leading-none mb-3">
              WHY LEARN WITH US
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-zinc-900 dark:text-zinc-100 tracking-normal leading-tight">
              Why Choose Gyanshala?
            </h2>
          </FadeInUp>

          {/* 3-Column Symmetrical Layout (Matching Reference Style) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-6 items-center">
            
            {/* Left Column (3 items: order-1 on mobile & desktop) */}
            <FadeInLeft className="order-1 lg:order-1 lg:col-span-4 space-y-8 sm:space-y-10">
              {whyChoosePoints.slice(0, 3).map((point) => (
                <div key={point.number} className="flex items-start gap-4 text-left group">
                  <div className="shrink-0 text-[#C00000] pt-1 transition-transform duration-300 group-hover:scale-110">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-[#C00000] transition-colors">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </FadeInLeft>

            {/* Center Column: Cutout Student Visual (order-3 on mobile, order-2 on desktop) */}
            <div className="order-3 lg:order-2 lg:col-span-4 flex items-end justify-center self-end pt-4 sm:pt-6 lg:pt-0">
              <ScrollParallax yOffset={45} className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[420px] xl:max-w-[460px] aspect-[432/578] flex items-end justify-center">
                <Image
                  src="/whychoose/whychooseus.png"
                  alt="Why Choose Gyanshala Foreign Language Academy"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_8px_20px_rgba(0,0,0,0.14)]"
                  priority
                />
              </ScrollParallax>
            </div>

            {/* Right Column (3 items: order-2 on mobile so points 4-6 follow points 1-3, order-3 on desktop) */}
            <FadeInRight className="order-2 lg:order-3 lg:col-span-4 space-y-8 sm:space-y-10">
              {whyChoosePoints.slice(3, 6).map((point) => (
                <div key={point.number} className="flex items-start lg:flex-row-reverse gap-4 text-left lg:text-right group">
                  <div className="shrink-0 text-[#C00000] pt-1 transition-transform duration-300 group-hover:scale-110">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-[#C00000] transition-colors">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </FadeInRight>

          </div>

        </div>
      </section>

      {/* Highlights of Gyanshala Section */}
      <section id="highlights" className="py-14 sm:py-20 lg:py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeInUp className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] leading-none mb-3">
              KEY FEATURES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-zinc-900 dark:text-zinc-100 tracking-normal leading-tight">
              Highlights of Gyanshala
            </h2>
          </FadeInUp>

          {/* Highlights of Gyanshala Card Grid (Matching Reference Design) */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.22}>
            {highlights.map((item, index) => (
              <StaggerItem key={index} className="h-full" direction="alternate" index={index} hoverLift>
                <div className="h-full p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 rounded-2xl shadow-xs hover:shadow-xl hover:border-[#F59E0B]/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group">
                  {/* Yellow/Gold Bordered Icon Container */}
                  <CardImageReveal reversed={index % 2 !== 0}>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 border-[#F59E0B] bg-white dark:bg-zinc-800 flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 group-hover:border-[#ECBB0C] group-hover:shadow-md transition-all duration-300">
                      {item.icon}
                    </div>
                  </CardImageReveal>

                  {/* Highlight Title & Description */}
                  <CardTextReveal reversed={index % 2 !== 0} delay={0.15} className="flex-1 flex flex-col items-center">
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white leading-snug mb-2.5 group-hover:text-[#C00000] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </CardTextReveal>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* Learn German Online (YouTube Video Lessons) Section */}
      <section id="learn-online" className="py-14 sm:py-20 lg:py-24 bg-[#F5EFE3] dark:bg-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <FadeInUp className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] leading-none mb-3">
              LEARN GERMAN ONLINE
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-zinc-900 dark:text-zinc-100 tracking-normal leading-tight">
              Free Video Lessons
            </h2>
          </FadeInUp>

          {/* Video Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto" staggerDelay={0.24}>
            {onlineVideos.map((video, index) => {
              const isPlaying = playingVideoId === video.id;

              return (
                <StaggerItem key={video.id} className="h-full" direction="alternate" index={index} hoverLift>
                  <div className="h-full bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col group">
                    {/* YouTube Video Area */}
                    <CardImageReveal reversed={index % 2 !== 0}>
                      <div className="relative w-full aspect-video bg-black overflow-hidden">
                        {isPlaying ? (
                          <iframe
                            src={
                              video.playlistId
                                ? `https://www.youtube-nocookie.com/embed/${video.youtubeId}?list=${video.playlistId}&autoplay=1&rel=0`
                                : `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`
                            }
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full border-0"
                          />
                        ) : (
                          <div
                            onClick={() => setPlayingVideoId(video.id)}
                            className="relative w-full h-full cursor-pointer group/thumb"
                          >
                            <Image
                              src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                              alt={video.title}
                              fill
                              unoptimized
                              className="object-cover object-center group-hover/thumb:scale-105 transition-transform duration-500 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 group-hover/thumb:from-black/50 transition-colors" />

                            {/* Duration Badge */}
                            <span className="absolute bottom-3 right-3 px-2 py-0.5 text-xs font-medium text-white bg-black/80 rounded-md shadow-md z-10">
                              {video.duration}
                            </span>

                            {/* Red YouTube Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-2xl group-hover/thumb:scale-115 group-hover/thumb:bg-[#CC0000] transition-all transform">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current translate-x-0.5" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardImageReveal>

                    {/* Card Content: Title */}
                    <CardTextReveal reversed={index % 2 !== 0} delay={0.15} className="flex-1 flex items-center">
                      <div className="p-4 sm:p-5 bg-white dark:bg-zinc-900 w-full flex items-center">
                        <h3 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-white group-hover:text-[#C00000] transition-colors leading-snug line-clamp-2">
                          {video.title}
                        </h3>
                      </div>
                    </CardTextReveal>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Subscribe CTA */}
          <div className="mt-10 sm:mt-12 text-center">
            <a
              href="https://www.youtube.com/@gyanshalaforeignlanguage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-[#BC0202] hover:bg-[#990202] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>Subscribe for More</span>
            </a>
          </div>

        </div>
      </section>

      {/* Student Reviews & Testimonials Section */}
      <section id="reviews" className="py-12 sm:py-16 lg:py-20 bg-[#FCF9EA] dark:bg-zinc-900/40 border-b border-zinc-200/60 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Left/Right Navigation */}
          <FadeInUp className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] leading-none mb-3">
                STUDENT REVIEWS
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-zinc-900 dark:text-zinc-100 tracking-normal leading-tight">
                What Our Students Say
              </h2>
              <div className="mt-2.5 flex items-center gap-2">
                <div className="flex items-center text-[#ECBB0C]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200">
                  4.9 / 5.0 Rating (350+ Google Reviews)
                </span>
              </div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                type="button"
                onClick={scrollPrevReview}
                aria-label="Previous review"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-[#C00000] hover:text-white hover:border-[#C00000] transition-all flex items-center justify-center shadow-xs cursor-pointer active:scale-90"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={scrollNextReview}
                aria-label="Next review"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-[#C00000] hover:text-white hover:border-[#C00000] transition-all flex items-center justify-center shadow-xs cursor-pointer active:scale-90"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </FadeInUp>

          {/* Reviews Track: 3 Cards in 1 Row on Desktop, 2 on Tablet, 1 on Mobile */}
          <div
            ref={reviewsTrackRef}
            onMouseEnter={() => setIsReviewsPaused(true)}
            onMouseLeave={() => setIsReviewsPaused(false)}
            onTouchStart={() => setIsReviewsPaused(true)}
            onTouchEnd={() => setIsReviewsPaused(false)}
            className="flex items-stretch gap-5 lg:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {studentReviews.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start flex flex-col"
              >
                <div className="relative h-full bg-white dark:bg-zinc-900 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-xl border border-zinc-200/90 hover:border-[#C00000]/40 dark:border-zinc-800 dark:hover:border-[#C00000]/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden">
                  {/* Decorative Quote Mark */}
                  <div className="absolute right-3.5 top-3 text-zinc-100 dark:text-zinc-800/40 pointer-events-none group-hover:text-red-50 dark:group-hover:text-zinc-800 transition-colors duration-300">
                    <svg className="w-8 h-8 fill-current opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    {/* Header: Circle Profile Pic + Name, Stars & Google Badge */}
                    <div className="flex items-start justify-between gap-3 mb-3.5">
                      <div className="flex items-center gap-3">
                        {/* Profile Pic in Medium Circle with Hover Ring Animation */}
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#C00000] ring-2 ring-[#C00000]/15 group-hover:ring-4 group-hover:ring-[#C00000]/30 shadow-2xs shrink-0 bg-zinc-100 dark:bg-zinc-800 transition-all duration-300">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 48px, 56px"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-sm sm:text-base text-zinc-950 dark:text-white leading-tight truncate group-hover:text-[#C00000] dark:group-hover:text-red-400 transition-colors duration-200">
                            {item.name}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                            Verified Student Review
                          </p>
                          {/* 5 Stars with gentle scale on card hover */}
                          <div className="flex items-center gap-0.5 text-[#ECBB0C] mt-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                            {[...Array(item.rating)].map((_, i) => (
                              <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Google Badge */}
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full shrink-0 border border-zinc-200/60 dark:border-zinc-700 shadow-2xs group-hover:border-[#C00000]/30 transition-colors">
                        <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                        </svg>
                        <span>Google</span>
                      </span>
                    </div>

                    {/* Compact Review Text */}
                    <p className="text-xs sm:text-[13.5px] text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal not-italic pt-2.5 border-t border-zinc-100 dark:border-zinc-800">
                      &ldquo;{item.review}&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <FAQSection isHomepage={true} limit={8} />

      {/* External Portals / Useful German Learning Resources Section */}
      <section id="external-portals" className="py-12 sm:py-16 bg-[#FCF9EA] dark:bg-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A61911] leading-none mb-3">
              EXTERNAL PORTALS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-zinc-900 dark:text-zinc-100 tracking-normal leading-tight">
              Useful German Learning Resources
            </h2>
          </FadeInUp>
        </div>

        {/* Infinite Looping Marquee Track */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] py-4">
          <div className="animate-marquee flex items-center gap-12 sm:gap-16">
            {[...externalResources, ...externalResources, ...externalResources, ...externalResources].map((res, index) => (
              <a
                key={`${res.name}-${index}`}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 sm:gap-4 shrink-0 bg-transparent transition-transform hover:scale-105"
              >
                {/* Shape-Free, Bigger Logo */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 shrink-0 flex items-center justify-center">
                  <Image
                    src={res.icon}
                    alt={res.name}
                    width={80}
                    height={80}
                    className="object-contain w-full h-full drop-shadow-xs group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Name Beside Icon */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-[#C00000] transition-colors whitespace-nowrap leading-snug">
                    {res.name}
                  </span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 group-hover:text-[#C00000] transition-colors shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}


