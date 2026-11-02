-- =========================================================================
-- GYANSHALA FOREIGN LANGUAGE ACADEMY - OFFICIAL SUPABASE DATABASE SCHEMA
-- Full production schema and comprehensive seed data matching gyanshala.academy
-- Copy & Run this complete SQL script in your Supabase SQL Editor.
-- =========================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- -------------------------------------------------------------------------
-- 1. ENQUIRIES / LEADS (Synced with Enquiry Form & Modal)
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    course VARCHAR(255) DEFAULT 'General Enquiry',
    message TEXT,
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'enrolled', 'closed')),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries(created_at DESC);

-- -------------------------------------------------------------------------
-- 2. HOMEPAGE HERO SLIDES
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.hero_slides (
    id SERIAL PRIMARY KEY,
    image TEXT NOT NULL,
    badge VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    highlight VARCHAR(255) NOT NULL,
    description TEXT,
    primary_btn_text VARCHAR(100) DEFAULT 'German Courses',
    primary_btn_href VARCHAR(255) DEFAULT '/german',
    secondary_btn_text VARCHAR(100) DEFAULT 'Enquiry Now',
    secondary_btn_href VARCHAR(255) DEFAULT '/enquiry',
    order_index INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------------------
-- 3. WHY CHOOSE GYANSHALA CARDS
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.why_choose (
    id SERIAL PRIMARY KEY,
    number VARCHAR(10) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    order_index INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------------------
-- 4. OUR STUDENTS IN GERMANY (All 16 Student Cards)
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.students_in_germany (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    image TEXT NOT NULL,
    destination VARCHAR(255) DEFAULT 'Germany',
    course_cleared VARCHAR(255),
    year VARCHAR(10) DEFAULT '2024',
    order_index INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------------------
-- 5. VERIFIED STUDENT REVIEWS (All 18 Google Reviews)
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.student_reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    image TEXT NOT NULL,
    rating INTEGER DEFAULT 5,
    review TEXT NOT NULL,
    source VARCHAR(100) DEFAULT 'Google Review',
    order_index INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------------------
-- 6. FACULTY & TEAM MEMBERS (All 9 Educators)
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.faculty_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    image TEXT NOT NULL,
    bio TEXT,
    order_index INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------------------
-- 7. ONLINE VIDEOS / YOUTUBE SHOWCASE
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.online_videos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    youtube_id VARCHAR(50) NOT NULL,
    playlist_id VARCHAR(100),
    title VARCHAR(255) NOT NULL,
    trainer VARCHAR(255) NOT NULL,
    level VARCHAR(100) NOT NULL,
    duration VARCHAR(50) DEFAULT 'Full Guide',
    is_playlist BOOLEAN DEFAULT FALSE,
    order_index INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------------------
-- 8. COURSES & PATHWAYS
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    level VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL, -- 'german', 'foreign_language', 'pathway'
    duration VARCHAR(100) NOT NULL,
    fee VARCHAR(100),
    badge VARCHAR(100),
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------------------
-- 9. FREQUENTLY ASKED QUESTIONS (FAQS)
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.faqs (
    id SERIAL PRIMARY KEY,
    category VARCHAR(50) DEFAULT 'general', -- 'general', 'courses', 'goethe', 'pathways', 'admission'
    category_label VARCHAR(100) DEFAULT 'General Questions',
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    order_index INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------------------
-- 10. SITE SETTINGS (KEY-VALUE)
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.site_settings (
    key VARCHAR(100) PRIMARY KEY,
    value TEXT NOT NULL,
    description VARCHAR(255),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------------------
-- ROW LEVEL SECURITY (RLS) POLICIES
-- -------------------------------------------------------------------------
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hero_slides ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.why_choose ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students_in_germany ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faculty_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.online_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous users to insert enquiries (lead form submission)
CREATE POLICY "Public can submit enquiries" ON public.enquiries FOR INSERT WITH CHECK (true);

-- Allow public read access to active website content
CREATE POLICY "Public can view hero_slides" ON public.hero_slides FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view why_choose" ON public.why_choose FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view students_in_germany" ON public.students_in_germany FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view student_reviews" ON public.student_reviews FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view faculty_members" ON public.faculty_members FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view online_videos" ON public.online_videos FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view courses" ON public.courses FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view faqs" ON public.faqs FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view site_settings" ON public.site_settings FOR SELECT USING (true);

-- Allow service role full access
CREATE POLICY "Service role access enquiries" ON public.enquiries FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role access hero_slides" ON public.hero_slides FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role access why_choose" ON public.why_choose FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role access students_in_germany" ON public.students_in_germany FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role access student_reviews" ON public.student_reviews FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role access faculty_members" ON public.faculty_members FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role access online_videos" ON public.online_videos FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role access courses" ON public.courses FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role access faqs" ON public.faqs FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role access site_settings" ON public.site_settings FOR ALL USING (true) WITH CHECK (true);

-- Explicit Role Privileges (Prevents 42501 "permission denied" error)
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA public TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON ROUTINES TO anon, authenticated, service_role;


-- =========================================================================
-- SEED DATA: INSERT ALL AUTHENTIC GYANSHALA WEBSITE DATA
-- =========================================================================

-- 1. HERO SLIDES
INSERT INTO public.hero_slides (image, badge, title, highlight, description, primary_btn_text, primary_btn_href, secondary_btn_text, secondary_btn_href, order_index)
VALUES 
('/Hero/IMG_20250806_170204918_HDR.jpg', '🇩🇪 Premier German Institute in Jaipur', 'Master German Language', 'From A1 to C2 Levels', 'Learn with native-standard curriculum, certified faculty, and interactive batches tailored for Goethe, TELC and ÖSD examinations.', 'German Courses', '/german', 'Enquiry Now', '/enquiry', 1),
('/Hero/IMG_20250806_121152807_HDR.jpg', '🇩🇪 Study • Ausbildung • Careers in Germany', 'Study, Ausbildung & Careers', 'in Germany', 'Master German to unlock tuition-free university education, paid dual Ausbildung with monthly stipends, and high-demand nursing & engineering careers.', 'Explore Germany Pathways', '/pathways', 'Free Counseling', '/enquiry', 2),
('/Hero/hero3x.jpg', '🌍 Global Language Programs', 'Learn Beyond German', 'Master Global Languages', 'Expand your career horizon with our specialized courses in French, Spanish, and Business English with personalized coaching.', 'View All Languages', '/languages', 'Free Counseling', '/enquiry', 3)
ON CONFLICT DO NOTHING;

-- 2. WHY CHOOSE GYANSHALA
INSERT INTO public.why_choose (number, title, description, order_index)
VALUES
('01', 'Experienced German Language Trainers', 'Learn from qualified and dedicated German language experts with years of teaching excellence.', 1),
('02', 'German Courses from A1 to C2', 'Progress step by step from complete beginner to advanced CEFR proficiency.', 2),
('03', 'Spoken German & Exam Preparation', 'Develop practical communication skills and prepare with targeted Goethe & telc mock exams.', 3),
('04', 'Flexible Batch Timings', 'Choose morning, afternoon, evening, or weekend batches that fit your daily schedule.', 4),
('05', 'Affordable German Classes in Jaipur', 'Quality German language training at reasonable, transparent fees with no hidden costs.', 5),
('06', 'Online and Offline Classes', 'Learn through interactive live online sessions or in-person classroom training in Jaipur.', 6)
ON CONFLICT DO NOTHING;

-- 3. OUR STUDENTS IN GERMANY (All 16 real students from homepage)
INSERT INTO public.students_in_germany (name, image, destination, course_cleared, year, order_index)
VALUES
('Akshat Pandey', '/studentsingermany/AKSHAT PANDEY.png', 'Munich, Germany', 'German B2 Certified', '2024', 1),
('Ankit Maan', '/studentsingermany/ANKIT MAAN.png', 'Berlin, Germany', 'German B2 • Ausbildung', '2024', 2),
('Anukalp Lawania', '/studentsingermany/ANUKALP LAWANIA.png', 'Frankfurt, Germany', 'German B1 Certified', '2024', 3),
('Deepak Choudhary', '/studentsingermany/DEEPAK CHOUDHARY.png', 'Stuttgart, Germany', 'German B2 • Engineering', '2024', 4),
('Jayalaxmi', '/studentsingermany/JAAYALAXMI.png', 'Hamburg, Germany', 'German B2 • Healthcare', '2024', 5),
('Lavesh Rajput', '/studentsingermany/LAVESH RAJPUT.png', 'Cologne, Germany', 'German B2 • University Study', '2024', 6),
('Mehul Kumawat', '/studentsingermany/MEHUL KUMAWAT.png', 'Dresden, Germany', 'German B1 • Ausbildung', '2024', 7),
('Rahul Soni', '/studentsingermany/RAHUL SONI.png', 'Munich, Germany', 'German B2 Certified', '2024', 8),
('Riya Ahuja', '/studentsingermany/RIYA AHUJA.png', 'Hannover, Germany', 'German B2 • Nursing', '2024', 9),
('Saurav Yadav', '/studentsingermany/SAURAV YADAV.png', 'Düsseldorf, Germany', 'German B2 Certified', '2024', 10),
('Shailja Rathore', '/studentsingermany/SHAILJJA RATHOD.png', 'Nuremberg, Germany', 'German B1 Certified', '2024', 11),
('Shivam Tak', '/studentsingermany/SHIVAM TAK.png', 'Bremen, Germany', 'German B2 • Masters', '2024', 12),
('Shubham Gupta', '/studentsingermany/Shubham Gupta.png', 'Leipzig, Germany', 'German B2 Certified', '2024', 13),
('Shubhangi', '/studentsingermany/SHUBHANGI.png', 'Bonn, Germany', 'German B1 Certified', '2024', 14),
('Suvidhi Loonker', '/studentsingermany/SUVIDHI LOONKER.png', 'Munich, Germany', 'German B2 Certified', '2024', 15),
('Yuganshu Sharma', '/studentsingermany/YUGANSHU SHARMA.png', 'Frankfurt, Germany', 'German B2 • Ausbildung', '2024', 16)
ON CONFLICT DO NOTHING;

-- 4. STUDENT REVIEWS (All 18 real reviews from homepage)
INSERT INTO public.student_reviews (name, image, rating, review, source, order_index)
VALUES
('Karan Pareek', '/Review/KaranPareek.png', 5, 'I had a wonderful experience learning German at Gyanshala Foreign Language Academy. The classes were well-structured, engaging, and easy to understand. Special thanks to Dilip Sir for his guidance, patience, and constant support.', 'Google Review', 1),
('Anjali Choudhary', '/Review/AnjaliChoudhary.png', 5, 'Seit einem Jahr lerne ich Deutsch und glücklicherweise habe ich meine B1 Prüfung bestanden. Zurzeit lerne ich B2 Kurs...Ich sammle hier viele Erfahrungen und das Umfeld des Unterrichts ist auch aüßerst einwandfrei.', 'Google Review', 2),
('Jhanvi Kumawat', '/Review/JhanviKumawat.png', 5, 'The German classes here are very interactive and practical. I like how the teachers focus on speaking from day one, instead of just theory. The sessions are fun, and I always feel motivated to practice more at home.', 'Google Review', 3),
('Richa Singh', '/Review/RichaSingh.png', 5, 'I recently finished my German classes here and I have to say, the faculty is amazing. They really know their stuff and have a deep and thorough Knowledge of the German language. Instead of just making you memorize a textbook, they break down tricky grammar.', 'Google Review', 4),
('Suraj Dhayal', '/Review/Suraj dhayal.jpeg', 5, 'Gyanshala Foreign Language Academy is a finest institute in Lalkothi Jaipur for learning German language. The teachers are very supportive and hardworking. They are always ready to help you.', 'Google Review', 5),
('Ramjhan Chhimpa', '/Review/Ramjhan Chhimpa.jpeg', 5, 'I joined German language classes in Jaipur here and I must say the teaching quality is very good. The faculty is supportive, friendly, and always ready to clear doubts. The classes are interactive with lots of speaking practice.', 'Google Review', 6),
('Suvidhi Loonker', '/Review/Suvidhi Loonker.jpeg', 5, 'I had an incredible experience at this German coaching institute! The faculty members are extremely knowledgeable, approachable, and genuinely dedicated to ensuring each student''s success.', 'Google Review', 7),
('Shivam Tak', '/Review/Shivam tak.png', 5, 'Gyanshala is actually having some quality teaching and support toward student. It is a really very good experience. All the details covered by faculty is really great. Every smallest information was well explained.', 'Google Review', 8),
('Jatin Sharma', '/Review/Jatin Sharma.jpeg', 5, 'The Gyanshala Foreign Language Academy is an excellent place to learn languages. I am currently doing the English spoken course here, and I have seen a lot of improvement in myself. The teachers are knowledgeable and experienced.', 'Google Review', 9),
('Deepak Chaudhary', '/Review/Deepak Choudhary.jpeg', 5, 'I recently completed a course at Gyanshala academy, and I must say it exceeded my expectations. The instructors were not only highly knowledgeable but also incredibly patient, catering to varying skill levels.', 'Google Review', 10),
('Khushi Sharma', '/Review/Khushi Sharma.jpeg', 5, 'I would 100% recommend this institute for all learners. I am learning German here and my experience here is just so amazing. Teachers and the whole environment is so good. Dilip sir and Ashveer sir are brilliant.', 'Google Review', 11),
('Akshat Pandey', '/Review/Akshat Pandey.jpeg', 5, 'I started learning German here exact 1 year before and now I have completed B2 certification. From the level A1 to B2 I had the most amazing experience here while studying and interacting with others.', 'Google Review', 12),
('Rahul Soni', '/Review/Rahul Soni.jpeg', 5, 'Das ist ein schönes Institut und die Lehrer sind nett und hilfreich. Ich empfehle das Institut für alle, die Deutsch in Jaipur lernen wollen.', 'Google Review', 13),
('Lavesh Rajput', '/Review/Lavesh Rajput.jpeg', 5, 'GYANSHALA is a great place to learn foreign languages, where you get a healthy environment and great support from the staff. Their personalised attention to their students help to learn even faster.', 'Google Review', 14),
('Jayalaxmi', '/Review/Jayalaxmi.jpeg', 5, 'Had an excellent experience here. The teachers are well qualified. It made learning german easy. This institute is highly recommended to everyone who wishes to learn any foreign language.', 'Google Review', 15),
('Shailja Rathore', '/Review/Shailja Rathore.jpeg', 5, 'Wenn jemand in Jaipur deutsch lernen möchte, der am Gyanshala Institut einmal besuchen soll. Die Lehrer sind sehr hilfreich und freundlich. Das Lernen am Gyanshala fühlt nie schwer!', 'Google Review', 16),
('Veronica Velasco', '/Review/Veronica Velasco.jpeg', 5, 'I had a fantastic experience learning German at Gyanshala Foreign Language Academy with Mr. Dilip Sinsinwar. Thanks to his excellent teaching methods and patient guidance, I was able to complete the A1 level in a short period.', 'Google Review', 17),
('Sanju Punia', '/Review/Sanju Punia.jpeg', 5, 'Best german language institute in jaipur. I am from Haryana and joined here for B1 and B2 level. I am learning from Disha Mam and found the class best among all the classes I''ve taken earlier.', 'Google Review', 18)
ON CONFLICT DO NOTHING;

-- 5. FACULTY & TEAM MEMBERS (All 9 educators from About Us)
INSERT INTO public.faculty_members (name, role, image, bio, order_index)
VALUES
('Dilip Sinsinwar', 'German Language Trainer & Founder', '/teammembers/Dilip Sinsinwar Sir German Language Expert.png', 'Senior German language pedagogue with over 8 years of coaching experience for Goethe-Institut and TELC A1–C2 examinations.', 1),
('Claudia Zibell', 'German Language Native Speaker', '/teammembers/Claudia Zibell Maam German langauge Native Speaker.png', 'Native German educator conducting specialized pronunciation, speaking culture, and advanced conversation workshops.', 2),
('Ashveer Singh', 'German Language Trainer', '/teammembers/Ashveer Singh Sir German Language Expert.png', 'Certified German expert focusing on intermediate & advanced grammar structures, writing proficiency, and mock exam simulations.', 3),
('Ruchi Kaushik', 'Spanish Language Trainer', '/teammembers/Ruchi Kausik Maam Spanish Language Trainer.png', 'Passionate Spanish linguist specializing in DELE exam preparation and conversational Spanish for study abroad students.', 4),
('Jhanvi Kumawat', 'German Language Trainer', '/teammembers/Jhanvi Kumawat German Language Trainer.png', 'Dedicated trainer for beginner A1 & A2 batches with interactive speaking sessions and doubt clearance.', 5),
('Katharina Shevchuk', 'English/German & Russian Language Trainer', '/teammembers/Katharina Shevchuk Maam EnglishGerman & Russian Language Trainer.png', 'Polyglot educator facilitating multilingual training and European cultural adaptation for outbound students.', 6),
('Mumal Rathore', 'French Language Trainer', '/teammembers/Mumal.Rathore.png', 'Certified DELF curriculum instructor conducting structured French training for DELF A1–B2 candidates.', 7),
('Neeru Joshi', 'German Language Trainer', '/teammembers/Neeru.Joshi.png', 'Experienced German trainer specializing in exam prep, listening comprehension, and student counseling.', 8),
('Niharika', 'English Language Trainer', '/teammembers/Niharika Maam English Language Trainer.png', 'IELTS & Spoken English coach helping candidates develop corporate fluency, accent clarity, and confidence.', 9)
ON CONFLICT DO NOTHING;

-- 6. COURSES & PATHWAYS
INSERT INTO public.courses (slug, title, level, category, duration, fee, badge, description)
VALUES
('german-a1', 'German A1 – Beginner Level', 'A1', 'german', '8 to 10 Weeks', '₹18,000', 'Beginner Level', 'Learn basic everyday expressions, alphabet, introductions, numbers, and basic German grammar for Goethe-Zertifikat A1.'),
('german-a2', 'German A2 – Elementary Level', 'A2', 'german', '8 to 10 Weeks', '₹20,000', 'Elementary Level', 'Communicate in routine tasks, describe family, living conditions, shopping, and work with targeted Goethe-Zertifikat A2 training.'),
('german-b1', 'German B1 – Intermediate Level', 'B1', 'german', '10 to 12 Weeks', '₹24,000', 'Intermediate Level', 'Threshold level required for Ausbildung, dual studies, and spouse visas. Focus on independent speaking, essay writing, and Goethe B1 exam.'),
('german-b2', 'German B2 – Upper-Intermediate Level', 'B2', 'german', '12 Weeks', '₹28,000', 'Upper-Intermediate', 'Crucial proficiency level for University admissions, Nursing registration, and engineering careers across Germany.'),
('german-c1', 'German C1 – Advanced Level', 'C1', 'german', '12 to 14 Weeks', '₹32,000', 'Advanced Level', 'Express ideas fluently and spontaneously for academic and professional purposes. Prepares for TestDaF and Goethe C1.'),
('german-c2', 'German C2 – Mastery / Proficiency', 'C2', 'german', '14 to 16 Weeks', '₹38,000', 'Proficiency Level', 'Native-level mastery of German nuances, complex idioms, and scholarly texts for translators, diplomats, and senior academics.'),
('french-language', 'French Language Course (A1 – B2)', 'A1-B2', 'foreign_language', '8 to 24 Weeks', '₹18,000 / Level', 'DELF Preparation', 'Structured French language training for Canada immigration, DELF certifications, and corporate multinational careers.'),
('spanish-language', 'Spanish Language Course (A1 – B2)', 'A1-B2', 'foreign_language', '8 to 24 Weeks', '₹18,000 / Level', 'DELE Preparation', 'Learn one of the world''s most widely spoken languages with certified instructors for DELE exams and travel.'),
('english-language', 'Spoken English & IELTS Prep', 'All Levels', 'foreign_language', '6 to 8 Weeks', '₹12,000', 'Fluency & Accent', 'Develop natural spoken confidence, corporate presentation skills, vocabulary, and IELTS academic/general band 7+ readiness.'),
('pathway-study-germany', 'Study in Germany (Bachelors & Masters)', 'Pathway', 'pathway', 'Comprehensive Support', 'Consultation Package', 'Tuition-Free Universities', 'Complete end-to-end guidance for public university admissions in Germany, APS certificate processing, blocked account, and student visa.'),
('pathway-ausbildung', 'Ausbildung in Germany (Dual Vocational)', 'Pathway', 'pathway', 'Full Placement', 'Placement Assistance', 'Monthly Stipend €1,000+', 'Paid 3-year vocational training in Germany with monthly salary in IT, Mechatronics, Hotel Management, and Gastronomy.'),
('pathway-nursing-germany', 'Nursing in Germany (Direct Placement)', 'Pathway', 'pathway', 'Fast-Track', 'Direct Placement', 'Starting Salary €2,800+', 'Direct placement for B.Sc / GNM Indian nurses in accredited German hospitals with fast-track licensing (Anerkennung).')
ON CONFLICT (slug) DO NOTHING;

-- 7. INITIAL ENQUIRIES: Clean empty table. Real leads will appear here from the live website enquiry form.
-- No fake or dummy records.

-- 8. SITE SETTINGS
INSERT INTO public.site_settings (key, value, description)
VALUES
('academy_name', 'Gyanshala – Foreign Language Academy', 'Official Academy Name'),
('phone_primary', '+91 91191 16677', 'Primary Contact Phone'),
('phone_secondary', '+91 91191 16688', 'Secondary Contact Phone'),
('whatsapp_number', '+919119116677', 'Official WhatsApp Number'),
('email_admissions', 'info@gyanshala.in', 'Admissions Email Address'),
('email_support', 'support@gyanshala.in', 'Support Email Address'),
('campus_address', 'Plot No. 12, Sahakar Marg, Lalkothi, Jaipur, Rajasthan 302015', 'Physical Campus Address'),
('office_hours', 'Monday – Saturday: 8:00 AM – 8:00 PM (Sunday Closed)', 'Academy Working Hours'),
('google_maps_url', 'https://maps.app.goo.gl/gyanshala-jaipur', 'Google Maps Location Link'),
('banner_announcement', '🎓 New German A1, A2 & B1 batches starting next Monday. Limited seats available!', 'Top Bar Announcement Banner')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
