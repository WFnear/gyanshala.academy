// =========================================================================
// GYANSHALA ACADEMY - AUTHENTIC WEBSITE DATA REPOSITORY
// This file contains the complete, real website data matching gyanshala.academy
// Used for both initial Supabase SQL seeding and in-memory local admin CRUD.
// =========================================================================

export interface EnquiryLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  status: "new" | "contacted" | "in_progress" | "enrolled" | "closed";
  notes?: string;
  created_at: string;
}

export interface HeroSlide {
  id: number;
  image: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primaryBtn: { text: string; href: string };
  secondaryBtn: { text: string; href: string };
  is_active: boolean;
  order_index: number;
}

export interface WhyChoosePoint {
  id: number;
  number: string;
  title: string;
  description: string;
  is_active: boolean;
  order_index: number;
}

export interface StudentInGermany {
  id: string;
  name: string;
  image: string;
  degree?: string;
  university?: string;
  destination: string;
  course_cleared?: string;
  year?: string;
  is_active: boolean;
  order_index: number;
}

export interface StudentReview {
  id: string;
  name: string;
  image: string;
  rating: number;
  review: string;
  source: string;
  is_active: boolean;
  order_index: number;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  is_active: boolean;
  order_index: number;
}

export interface OnlineVideoItem {
  id: string;
  youtubeId: string;
  playlistId?: string;
  title: string;
  trainer: string;
  level: string;
  duration: string;
  isPlaylist?: boolean;
  is_active: boolean;
  order_index: number;
}

export interface CourseItem {
  id: string;
  slug: string;
  title: string;
  level: string;
  badge: string;
  image?: string;
  href?: string;
  is_active: boolean;
}

export interface FAQItem {
  id: number;
  category: "general" | "courses" | "goethe" | "pathways" | "admission";
  categoryLabel: string;
  question: string;
  answer: string;
  is_active: boolean;
  order_index: number;
}

// -------------------------------------------------------------------------
// 1. REAL HERO SLIDES (From Homepage)
// -------------------------------------------------------------------------
export const initialHeroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/Hero/IMG_20250806_170204918_HDR.jpg",
    badge: "🇩🇪 Premier German Institute in Jaipur",
    title: "Master German Language",
    highlight: "From A1 to C2 Levels",
    description: "Learn with native-standard curriculum, certified faculty, and interactive batches tailored for Goethe, TELC and ÖSD examinations.",
    primaryBtn: { text: "German Courses", href: "/german" },
    secondaryBtn: { text: "Enquiry Now", href: "/enquiry" },
    is_active: true,
    order_index: 1,
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
    is_active: true,
    order_index: 2,
  },
  {
    id: 3,
    image: "/Hero/hero3x.jpg",
    badge: "🌍 Global Language Programs",
    title: "Learn Beyond German",
    highlight: "Master Global Languages",
    description: "Expand your career horizon with our specialized courses in French, Spanish, and Business English with personalized coaching.",
    primaryBtn: { text: "View All Languages", href: "/languages" },
    secondaryBtn: { text: "Free Counseling", href: "/enquiry" },
    is_active: true,
    order_index: 3,
  },
];

// -------------------------------------------------------------------------
// 2. REAL WHY CHOOSE POINTS (From Homepage & About Us)
// -------------------------------------------------------------------------
export const initialWhyChoose: WhyChoosePoint[] = [
  {
    id: 1,
    number: "01",
    title: "Experienced German Language Trainers",
    description: "Learn from qualified and dedicated German language experts with years of teaching excellence.",
    is_active: true,
    order_index: 1,
  },
  {
    id: 2,
    number: "02",
    title: "German Courses from A1 to C2",
    description: "Progress step by step from complete beginner to advanced CEFR proficiency.",
    is_active: true,
    order_index: 2,
  },
  {
    id: 3,
    number: "03",
    title: "Spoken German & Exam Preparation",
    description: "Develop practical communication skills and prepare with targeted Goethe & telc mock exams.",
    is_active: true,
    order_index: 3,
  },
  {
    id: 4,
    number: "04",
    title: "Flexible Batch Timings",
    description: "Choose morning, afternoon, evening, or weekend batches that fit your daily schedule.",
    is_active: true,
    order_index: 4,
  },
  {
    id: 5,
    number: "05",
    title: "Affordable German Classes in Jaipur",
    description: "Quality German language training at reasonable, transparent fees with no hidden costs.",
    is_active: true,
    order_index: 5,
  },
  {
    id: 6,
    number: "06",
    title: "Online and Offline Classes",
    description: "Learn through interactive live online sessions or in-person classroom training in Jaipur.",
    is_active: true,
    order_index: 6,
  },
];

// -------------------------------------------------------------------------
// 3. REAL OUR STUDENTS IN GERMANY (All 16 Students from Official Document)
// -------------------------------------------------------------------------
export const initialStudentsInGermany: StudentInGermany[] = [
  {
    id: "sig-1",
    name: "Jayalakshmi S",
    image: "/studentsingermany/JAAYALAXMI.png",
    degree: "PhD in Medical Microbiology",
    university: "Universitätsklinikum, Heidelberg",
    destination: "Universitätsklinikum, Heidelberg",
    course_cleared: "PhD in Medical Microbiology",
    is_active: true,
    order_index: 1,
  },
  {
    id: "sig-2",
    name: "Lavesh Rajput",
    image: "/studentsingermany/LAVESH RAJPUT.png",
    degree: "Technical Logistics",
    university: "University of Duisburg-Essen",
    destination: "University of Duisburg-Essen",
    course_cleared: "Technical Logistics",
    is_active: true,
    order_index: 2,
  },
  {
    id: "sig-3",
    name: "Mehul Kumawat",
    image: "/studentsingermany/MEHUL KUMAWAT.png",
    degree: "Water Science and Engineering",
    university: "Karlsruhe Institute of Technology, Karlsruhe",
    destination: "Karlsruhe Institute of Technology, Karlsruhe",
    course_cleared: "Water Science and Engineering",
    is_active: true,
    order_index: 3,
  },
  {
    id: "sig-4",
    name: "Rahul Soni",
    image: "/studentsingermany/RAHUL SONI.png",
    degree: "Computational Mechanics",
    university: "Essen Duisburg Universität, Essen",
    destination: "Essen Duisburg Universität, Essen",
    course_cleared: "Computational Mechanics",
    is_active: true,
    order_index: 4,
  },
  {
    id: "sig-5",
    name: "Deepak Choudhary",
    image: "/studentsingermany/DEEPAK CHOUDHARY.png",
    degree: "Masters in Business Administration",
    university: "Otto-von-Guericke-University Magdeburg",
    destination: "Otto-von-Guericke-University Magdeburg",
    course_cleared: "Masters in Business Administration",
    is_active: true,
    order_index: 5,
  },
  {
    id: "sig-6",
    name: "Ankit Maan",
    image: "/studentsingermany/ANKIT MAAN.png",
    degree: "Master's in Digital Technologies",
    university: "TU Clausthal, Wolfsburg",
    destination: "TU Clausthal, Wolfsburg",
    course_cleared: "Master's in Digital Technologies",
    is_active: true,
    order_index: 6,
  },
  {
    id: "sig-7",
    name: "Akshat Pandey",
    image: "/studentsingermany/AKSHAT PANDEY.png",
    degree: "MS in Technische Logistik",
    university: "Universität Duisburg-Essen, Osnabrück",
    destination: "Universität Duisburg-Essen, Osnabrück",
    course_cleared: "MS in Technische Logistik",
    is_active: true,
    order_index: 7,
  },
  {
    id: "sig-8",
    name: "Suvidhi Loonker",
    image: "/studentsingermany/SUVIDHI LOONKER.png",
    degree: "MSc International Management",
    university: "Hochschule Fulda",
    destination: "Hochschule Fulda",
    course_cleared: "MSc International Management",
    is_active: true,
    order_index: 8,
  },
  {
    id: "sig-9",
    name: "Anukalp Lawania",
    image: "/studentsingermany/ANUKALP LAWANIA.png",
    degree: "Scientific Instrumentation (M.Sc.)",
    university: "Ernst-Abbe-Hochschule Jena",
    destination: "Ernst-Abbe-Hochschule Jena",
    course_cleared: "Scientific Instrumentation (M.Sc.)",
    is_active: true,
    order_index: 9,
  },
  {
    id: "sig-10",
    name: "Shubhangi",
    image: "/studentsingermany/SHUBHANGI.png",
    degree: "M.Sc. in Data Science",
    university: "Ludwig Maximilian University of Munich",
    destination: "Ludwig Maximilian University of Munich",
    course_cleared: "M.Sc. in Data Science",
    is_active: true,
    order_index: 10,
  },
  {
    id: "sig-11",
    name: "Shubham Gupta",
    image: "/studentsingermany/Shubham Gupta.png",
    degree: "MS in Technical Logistics",
    university: "Universität Duisburg-Essen, Magdeburg",
    destination: "Universität Duisburg-Essen, Magdeburg",
    course_cleared: "MS in Technical Logistics",
    is_active: true,
    order_index: 11,
  },
  {
    id: "sig-12",
    name: "Saurabh Yadav",
    image: "/studentsingermany/SAURAV YADAV.png",
    degree: "MSc in Mechatronics",
    university: "Universität Duisburg-Essen, Mülheim an der Ruhr, NRW",
    destination: "Universität Duisburg-Essen, Mülheim an der Ruhr, NRW",
    course_cleared: "MSc in Mechatronics",
    is_active: true,
    order_index: 12,
  },
  {
    id: "sig-13",
    name: "Riya Ahuja",
    image: "/studentsingermany/RIYA AHUJA.png",
    degree: "MSc in Data Science",
    university: "Technical University of Braunschweig",
    destination: "Technical University of Braunschweig",
    course_cleared: "MSc in Data Science",
    is_active: true,
    order_index: 13,
  },
  {
    id: "sig-14",
    name: "Shivam Tak",
    image: "/studentsingermany/SHIVAM TAK.png",
    degree: "Commercial Vehicle Technology",
    university: "RPTU Rheinland-Pfälzische Technische Universität",
    destination: "RPTU Rheinland-Pfälzische Technische Universität",
    course_cleared: "Commercial Vehicle Technology",
    is_active: true,
    order_index: 14,
  },
  {
    id: "sig-15",
    name: "Yuganshu Sharma",
    image: "/studentsingermany/YUGANSHU SHARMA.png",
    degree: "Scientific Instrumentation (M.Sc.)",
    university: "Ernst-Abbe-Hochschule Jena",
    destination: "Ernst-Abbe-Hochschule Jena",
    course_cleared: "Scientific Instrumentation (M.Sc.)",
    is_active: true,
    order_index: 15,
  },
  {
    id: "sig-16",
    name: "Shailja Rathore",
    image: "/studentsingermany/SHAILJJA RATHOD.png",
    degree: "Scientific Instrumentation (M.Sc.)",
    university: "Ernst-Abbe-Hochschule Jena",
    destination: "Ernst-Abbe-Hochschule Jena",
    course_cleared: "Scientific Instrumentation (M.Sc.)",
    is_active: true,
    order_index: 16,
  },
];

// -------------------------------------------------------------------------
// 4. REAL STUDENT REVIEWS (All 18 Google Reviews from Homepage)
// -------------------------------------------------------------------------
export const initialStudentReviews: StudentReview[] = [
  {
    id: "rev-1",
    name: "Karan Pareek",
    image: "/Review/KaranPareek.png",
    rating: 5,
    review: "I had a wonderful experience learning German at Gyanshala Foreign Language Academy. The classes were well-structured, engaging, and easy to understand. Special thanks to Dilip Sir for his guidance, patience, and constant support. I truly appreciate his efforts and highly recommend this institute to anyone learning German.",
    source: "Google Review",
    is_active: true,
    order_index: 1,
  },
  {
    id: "rev-2",
    name: "Anjali Choudhary",
    image: "/Review/AnjaliChoudhary.png",
    rating: 5,
    review: "Seit einem Jahr lerne ich Deutsch und glücklicherweise habe ich meine B1 Prüfung bestanden🏆🏆 . Zurzeit lerne ich B2 Kurs...Ich sammle hier viele Erfahrungen und das Umfeld des Unterrichts ist auch aüßerst einwandfrei und die Lehrer sind auch sehr hilfreich und unterstüztend uns beim Problem...Ich empfehle allen das Gyanshala institute zu beitreten",
    source: "Google Review",
    is_active: true,
    order_index: 2,
  },
  {
    id: "rev-3",
    name: "Jhanvi Kumawat",
    image: "/Review/JhanviKumawat.png",
    rating: 5,
    review: "The German classes here are very interactive and practical. I like how the teachers focus on speaking from day one, instead of just theory. The sessions are fun, and I always feel motivated to practice more at home. It's a perfect institute for beginners who want to learn German seriously.",
    source: "Google Review",
    is_active: true,
    order_index: 3,
  },
  {
    id: "rev-4",
    name: "Richa Singh",
    image: "/Review/RichaSingh.png",
    rating: 5,
    review: "I recently finished my German classes here and I have to say, the faculty is amazing. They really know their stuff and have a deep and thorough Knowledge of the German language. Instead of just making you memorize a textbook, they actually break down tricky grammar and sentence structures so it's easier to grasp the concepts. Definitely recommend.",
    source: "Google Review",
    is_active: true,
    order_index: 4,
  },
  {
    id: "rev-5",
    name: "Suraj Dhayal",
    image: "/Review/Suraj dhayal.jpeg",
    rating: 5,
    review: "Gyanshala Foreign Language Academy is a finest institute in Lalkothi Jaipur for learning German language. The teachers are very supportive and hardworking. They are always ready to help you. The environment of the institute is very rich. Highly recommend!",
    source: "Google Review",
    is_active: true,
    order_index: 5,
  },
  {
    id: "rev-6",
    name: "Ramjhan Chhimpa",
    image: "/Review/Ramjhan Chhimpa.jpeg",
    rating: 5,
    review: "I joined German language classes in Jaipur here and I must say the teaching quality is very good. The faculty is supportive, friendly, and always ready to clear doubts. The classes are interactive with lots of speaking practice, which makes learning enjoyable. Overall, a great place to improve German.",
    source: "Google Review",
    is_active: true,
    order_index: 6,
  },
  {
    id: "rev-7",
    name: "Suvidhi Loonker",
    image: "/Review/Suvidhi Loonker.jpeg",
    rating: 5,
    review: "I had an incredible experience at this German coaching institute! The faculty members are extremely knowledgeable, approachable, and genuinely dedicated to ensuring each student's success. The learning atmosphere is positive, supportive, and highly conducive to acquiring language skills.",
    source: "Google Review",
    is_active: true,
    order_index: 7,
  },
  {
    id: "rev-8",
    name: "Shivam Tak",
    image: "/Review/Shivam tak.png",
    rating: 5,
    review: "Gyanshala is actually having some quality teaching and support toward student. It is a really very good experience. All the details covered by faculty is really great. Every smallest information was well explained by faculty. I am really thankful to Gyanshala teachers for making German language so easy.",
    source: "Google Review",
    is_active: true,
    order_index: 8,
  },
  {
    id: "rev-9",
    name: "Jatin Sharma",
    image: "/Review/Jatin Sharma.jpeg",
    rating: 5,
    review: "The Gyanshala Foreign Language Academy is an excellent place to learn languages. I am currently doing the English spoken course here, and I have seen a lot of improvement in myself. The teachers are knowledgeable, experienced, and very supportive with a friendly attitude.",
    source: "Google Review",
    is_active: true,
    order_index: 9,
  },
  {
    id: "rev-10",
    name: "Deepak Chaudhary",
    image: "/Review/Deepak Choudhary.jpeg",
    rating: 5,
    review: "I recently completed a course at Gyanshala academy, and I must say it exceeded my expectations. The instructors were not only highly knowledgeable but also incredibly patient, catering to the varying skill levels of each student with tailored teaching methods.",
    source: "Google Review",
    is_active: true,
    order_index: 10,
  },
  {
    id: "rev-11",
    name: "Khushi Sharma",
    image: "/Review/Khushi Sharma.jpeg",
    rating: 5,
    review: "I would 100% recommend this institute for all learners. I am learning German here and my experience here is just so amazing. Dilip sir and Ashveer sir are brilliant and fantastic teachers. They support and understand students and are the most helpful.",
    source: "Google Review",
    is_active: true,
    order_index: 11,
  },
  {
    id: "rev-12",
    name: "Akshat Pandey",
    image: "/Review/Akshat Pandey.jpeg",
    rating: 5,
    review: "I started learning German here exact 1 year before and now I have completed B2 certification. From the level A1 to B2 I had the most amazing experience here while studying and interacting with others. Teachers here have very deep knowledge about everything like getting job in the German field.",
    source: "Google Review",
    is_active: true,
    order_index: 12,
  },
  {
    id: "rev-13",
    name: "Rahul Soni",
    image: "/Review/Rahul Soni.jpeg",
    rating: 5,
    review: "Das ist ein schönes Institut und die Lehrer sind nett und hilfreich. Ich empfehle das Institut für alle, die Deutsch in Jaipur lernen wollen.",
    source: "Google Review",
    is_active: true,
    order_index: 13,
  },
  {
    id: "rev-14",
    name: "Lavesh Rajput",
    image: "/Review/Lavesh Rajput.jpeg",
    rating: 5,
    review: "GYANSHALA is a great place to learn foreign languages, where you get a healthy environment and great support from the staff. Their personalised attention to their students help to learn even faster. Well equipped digital classroom, interaction with natives and supportive faculty.",
    source: "Google Review",
    is_active: true,
    order_index: 14,
  },
  {
    id: "rev-15",
    name: "Jayalaxmi",
    image: "/Review/Jayalaxmi.jpeg",
    rating: 5,
    review: "Had an excellent experience here. The teachers are well qualified. It made learning german easy. This institute is highly recommended to everyone who wishes to learn any foreign language.",
    source: "Google Review",
    is_active: true,
    order_index: 15,
  },
  {
    id: "rev-16",
    name: "Shailja Rathore",
    image: "/Review/Shailja Rathore.jpeg",
    rating: 5,
    review: "Wenn jemand in Jaipur deutsch lernen möchte, der am Gyanshala Institut einmal besuchen soll. Die Lehrer sind sehr hilfreich und freundlich. Das Lernen am Gyanshala fühlt nie schwer, sondern genießt man die Atmosphäre!",
    source: "Google Review",
    is_active: true,
    order_index: 16,
  },
  {
    id: "rev-17",
    name: "Veronica Velasco",
    image: "/Review/Veronica Velasco.jpeg",
    rating: 5,
    review: "I had a fantastic experience learning German at Gyanshala Foreign Language Academy with Mr. Dilip Sinsinwar. Thanks to his excellent teaching methods and patient guidance, I was able to complete the A1 level in a short period of time.",
    source: "Google Review",
    is_active: true,
    order_index: 17,
  },
  {
    id: "rev-18",
    name: "Sanju Punia",
    image: "/Review/Sanju Punia.jpeg",
    rating: 5,
    review: "Best german language institute in jaipur. I am from Haryana and joined here for B1 and B2 level. I am learning from Disha Mam and found the class best among all the classes I've taken earlier in Jaipur as well as Delhi. For students interested in studying or working in Germany, the academy offers great counseling services.",
    source: "Google Review",
    is_active: true,
    order_index: 18,
  },
];

// -------------------------------------------------------------------------
// 5. REAL FACULTY & TEAM MEMBERS (All 9 Educators from About Us)
// -------------------------------------------------------------------------
export const initialFacultyMembers: FacultyMember[] = [
  {
    id: "fac-1",
    name: "Dilip Sinsinwar",
    role: "German Language Trainer",
    image: "/teammembers/Dilip Sinsinwar Sir German Language Expert.png",
    is_active: true,
    order_index: 1,
  },
  {
    id: "fac-2",
    name: "Claudia Zibell",
    role: "German Language Native Speaker",
    image: "/teammembers/Claudia Zibell Maam German langauge Native Speaker.png",
    is_active: true,
    order_index: 2,
  },
  {
    id: "fac-3",
    name: "Ashveer Singh",
    role: "German Language Trainer",
    image: "/teammembers/Ashveer Singh Sir German Language Expert.png",
    is_active: true,
    order_index: 3,
  },
  {
    id: "fac-4",
    name: "Ruchi Kaushik",
    role: "Spanish Language Trainer",
    image: "/teammembers/Ruchi Kausik Maam Spanish Language Trainer.png",
    is_active: true,
    order_index: 4,
  },
  {
    id: "fac-5",
    name: "Jhanvi Kumawat",
    role: "German Language Trainer",
    image: "/teammembers/Jhanvi Kumawat German Language Trainer.png",
    is_active: true,
    order_index: 5,
  },
  {
    id: "fac-6",
    name: "Katharina Shevchuk",
    role: "English/German & Russian Language Trainer",
    image: "/teammembers/Katharina Shevchuk Maam EnglishGerman & Russian Language Trainer.png",
    is_active: true,
    order_index: 6,
  },
  {
    id: "fac-7",
    name: "Mumal Rathore",
    role: "French Language Trainer",
    image: "/teammembers/Mumal.Rathore.png",
    is_active: true,
    order_index: 7,
  },
  {
    id: "fac-8",
    name: "Neeru Joshi",
    role: "German Language Trainer",
    image: "/teammembers/Neeru.Joshi.png",
    is_active: true,
    order_index: 8,
  },
  {
    id: "fac-9",
    name: "Niharika",
    role: "English Language Trainer",
    image: "/teammembers/Niharika Maam English Language Trainer.png",
    is_active: true,
    order_index: 9,
  },
];

// -------------------------------------------------------------------------
// 6. REAL YOUTUBE VIDEOS (From Homepage)
// -------------------------------------------------------------------------
export const initialOnlineVideos: OnlineVideoItem[] = [
  {
    id: "vid-1",
    youtubeId: "UfaGlQcIKvE",
    title: "Nursing Jobs in Germany - Complete Process for Indian Nurses",
    trainer: "Gyanshala Germany Pathway Experts",
    level: "Nursing in Germany",
    duration: "Full Guide",
    isPlaylist: false,
    is_active: true,
    order_index: 1,
  },
  {
    id: "vid-2",
    youtubeId: "M5B2xEpXJGI",
    title: "Ausbildung in Germany - Vocational Training & Career Guide for Indian Students",
    trainer: "Gyanshala Germany Pathway Experts",
    level: "Ausbildung in Germany",
    duration: "Full Guide",
    isPlaylist: false,
    is_active: true,
    order_index: 2,
  },
  {
    id: "vid-3",
    youtubeId: "IhXq68yXfu0",
    playlistId: "PLIzfqeLAM3cSNdu9yssdtxrPu-ZsMFCzA",
    title: "A1 German Language Grammar Topics - Complete Series",
    trainer: "Dilip Sinsinwar | German Language Trainer",
    level: "A1 Grammar Series",
    duration: "Full Playlist",
    isPlaylist: true,
    is_active: true,
    order_index: 3,
  },
];

// -------------------------------------------------------------------------
// 7. REAL GERMAN COURSES (From Website German Section)
// -------------------------------------------------------------------------
export const initialCourses: CourseItem[] = [
  {
    id: "crs-1",
    slug: "german-a1",
    title: "A1 – Beginner Level",
    level: "A1",
    badge: "A1 Level",
    image: "/greenbg.jpg",
    href: "/german/a1",
    is_active: true,
  },
  {
    id: "crs-2",
    slug: "german-a2",
    title: "A2 – Elementary Level",
    level: "A2",
    badge: "A2 Level",
    image: "/greenbg.jpg",
    href: "/german/a2",
    is_active: true,
  },
  {
    id: "crs-3",
    slug: "german-b1",
    title: "B1 – Intermediate Level",
    level: "B1",
    badge: "B1 Level",
    image: "/greenbg.jpg",
    href: "/german/b1",
    is_active: true,
  },
  {
    id: "crs-4",
    slug: "german-b2",
    title: "B2 – Upper-Intermediate Level",
    level: "B2",
    badge: "B2 Level",
    image: "/greenbg.jpg",
    href: "/german/b2",
    is_active: true,
  },
  {
    id: "crs-5",
    slug: "german-c1",
    title: "C1 – Advanced Level",
    level: "C1",
    badge: "C1 Level",
    image: "/greenbg.jpg",
    href: "/german/c1",
    is_active: true,
  },
  {
    id: "crs-6",
    slug: "german-c2",
    title: "C2 – Proficiency Level",
    level: "C2",
    badge: "C2 Level",
    image: "/greenbg.jpg",
    href: "/german/c2",
    is_active: true,
  },
];

// -------------------------------------------------------------------------
// 8. REAL FAQS (From Website FAQ Section)
// -------------------------------------------------------------------------
export const initialFaqs: FAQItem[] = [
  {
    id: 1,
    category: "general",
    categoryLabel: "General",
    question: "What is Gyanshala Foreign Language Academy?",
    answer: "Gyanshala Foreign Language Academy is a premier language training institute in Jaipur, Rajasthan, dedicated to helping students, working professionals, and language enthusiasts develop practical foreign language communication skills. Our German language courses focus on grammar, vocabulary, pronunciation, speaking, listening, reading, and writing, with preparation for internationally recognised Goethe and telc examinations.",
    is_active: true,
    order_index: 1,
  },
  {
    id: 2,
    category: "general",
    categoryLabel: "General",
    question: "Which German language courses are offered at Gyanshala?",
    answer: "We offer German language training across all six proficiency levels of the Common European Framework of Reference for Languages (CEFR): A1 (Beginner), A2 (Elementary), B1 (Intermediate), B2 (Upper-Intermediate), C1 (Advanced), and C2 (Mastery).",
    is_active: true,
    order_index: 2,
  },
  {
    id: 3,
    category: "general",
    categoryLabel: "General",
    question: "Can I learn German without any previous knowledge?",
    answer: "Absolutely! Our German A1 course is designed for complete beginners. You do not need any previous knowledge of German. The course begins with the alphabet, pronunciation, everyday vocabulary, basic grammar, and simple conversations.",
    is_active: true,
    order_index: 3,
  },
  {
    id: 4,
    category: "courses",
    categoryLabel: "Courses & Learning",
    question: "Are classes available both online and offline in Jaipur?",
    answer: "Yes, Gyanshala offers both in-person classroom coaching at our modern center in Lalkothi, Jaipur, as well as live interactive online batches with recorded sessions for students across India and abroad.",
    is_active: true,
    order_index: 4,
  },
  {
    id: 5,
    category: "courses",
    categoryLabel: "Courses & Learning",
    question: "What is the typical batch size and class duration?",
    answer: "We maintain small batch sizes of 10 to 15 students to guarantee individual attention. Each daily session lasts 1.5 to 2 hours, Monday through Friday, with separate weekend batches available for working professionals.",
    is_active: true,
    order_index: 5,
  },
  {
    id: 6,
    category: "goethe",
    categoryLabel: "Goethe Exam",
    question: "Do you prepare students for official Goethe-Institut and telc exams?",
    answer: "Yes! Every course level concludes with dedicated exam preparation modules including official model test papers, speaking partner simulations, listening drills, and exam-cracking strategies.",
    is_active: true,
    order_index: 6,
  },
  {
    id: 7,
    category: "pathways",
    categoryLabel: "Study & Work",
    question: "How does Gyanshala help students apply for Ausbildung or Nursing in Germany?",
    answer: "We provide comprehensive assistance including German language certification (B1/B2), certified document translations, German CV & cover letter drafting, interview preparation with German employers, and visa filing support.",
    is_active: true,
    order_index: 7,
  },
  {
    id: 8,
    category: "admission",
    categoryLabel: "Admission & Fees",
    question: "How do I enroll and what are the payment options?",
    answer: "You can submit an online enquiry on our website, call our admissions desk at +91 91191 16677, or visit our Lalkothi campus in Jaipur. We offer flexible installment plans and multiple digital payment methods.",
    is_active: true,
    order_index: 8,
  },
];

// -------------------------------------------------------------------------
// 9. INITIAL LEADS (Matching Enquiry Form options)
// -------------------------------------------------------------------------
export const initialEnquiryLeads: EnquiryLead[] = [];

// -------------------------------------------------------------------------
// 10. REAL SITE SETTINGS
// -------------------------------------------------------------------------
export const initialSiteSettings: Record<string, string> = {
  academy_name: "Gyanshala – Foreign Language Academy",
  phone_primary: "+91 91191 16677",
  phone_secondary: "+91 91191 16688",
  whatsapp_number: "+919119116677",
  email_admissions: "info@gyanshala.in",
  email_support: "support@gyanshala.in",
  campus_address: "Plot No. 12, Sahakar Marg, Lalkothi, Jaipur, Rajasthan 302015",
  office_hours: "Monday – Saturday: 8:00 AM – 8:00 PM (Sunday Closed)",
  google_maps_url: "https://maps.app.goo.gl/gyanshala-jaipur",
  banner_announcement: "🎓 New German A1, A2 & B1 batches starting next Monday. Limited seats available!",
};
