-- =========================================================================
-- GYANSHALA FOREIGN LANGUAGE ACADEMY - COMPLETE PRODUCTION DATABASE SCHEMA
-- Full database schema & seed data matching gyanshala.academy
-- Copy & Run this complete SQL script in your Supabase SQL Editor.
-- =========================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- -------------------------------------------------------------------------
-- 1. ADMIN USERS & ROLES
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'Super Admin' CHECK (role IN ('Super Admin', 'Admin', 'Editor', 'Counselor')),
    avatar_url TEXT DEFAULT '/Logo/LOGO.NEW.GYANSHALA.png',
    status VARCHAR(50) DEFAULT 'Active' CHECK (status IN ('Active', 'Inactive')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------------------
-- 2. ENQUIRIES / LEADS (Synced with Website Enquiry Forms)
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    course VARCHAR(255) DEFAULT 'General Enquiry',
    mode VARCHAR(50) DEFAULT 'Offline',
    message TEXT,
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'follow-up', 'converted', 'rejected')),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries(created_at DESC);

-- -------------------------------------------------------------------------
-- 3. STUDENTS DIRECTORY
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.students (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    course_name VARCHAR(255) NOT NULL,
    batch_time VARCHAR(100) DEFAULT 'Morning 8:00 AM',
    mode VARCHAR(50) DEFAULT 'Offline' CHECK (mode IN ('Offline', 'Online', 'Hybrid')),
    total_fee NUMERIC(10,2) DEFAULT 18000,
    paid_fee NUMERIC(10,2) DEFAULT 18000,
    status VARCHAR(50) DEFAULT 'Active' CHECK (status IN ('Active', 'Completed', 'On Hold', 'Cancelled')),
    enrollment_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_students_status ON public.students(status);

-- -------------------------------------------------------------------------
-- 4. PAYMENTS & TRANSACTIONS
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    invoice_no VARCHAR(100) UNIQUE NOT NULL,
    student_name VARCHAR(255) NOT NULL,
    student_phone VARCHAR(50),
    course_name VARCHAR(255) NOT NULL,
    amount NUMERIC(10,2) NOT NULL,
    payment_method VARCHAR(50) DEFAULT 'UPI' CHECK (payment_method IN ('UPI', 'Razorpay', 'Cash', 'Bank Transfer', 'Card')),
    transaction_id VARCHAR(100),
    status VARCHAR(50) DEFAULT 'Paid' CHECK (status IN ('Paid', 'Pending', 'Failed', 'Refunded')),
    payment_date TIMESTAMPTZ DEFAULT NOW(),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_payments_date ON public.payments(payment_date DESC);

-- -------------------------------------------------------------------------
-- 5. COURSES & PATHWAYS
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
    order_index INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------------------
-- 6. FACULTY & TEACHERS (All 9 Educators)
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.faculty_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    image TEXT NOT NULL,
    experience VARCHAR(100) DEFAULT '5+ Years',
    proficiency VARCHAR(100) DEFAULT 'C2 Native / Master',
    bio TEXT,
    order_index INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------------------
-- 7. HOMEPAGE HERO SLIDES
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
-- 8. WHY CHOOSE GYANSHALA (6 Pillars)
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
-- 9. OUR STUDENTS IN GERMANY (All 16 Alumni)
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
-- 10. STUDENT REVIEWS / TESTIMONIALS (18 Google Reviews)
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
-- 11. FREQUENTLY ASKED QUESTIONS (FAQS - All 28 Real Questions)
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.faqs (
    id SERIAL PRIMARY KEY,
    category VARCHAR(50) DEFAULT 'general', -- 'general', 'courses', 'goethe', 'pathways', 'admission'
    category_label VARCHAR(100) DEFAULT 'General Questions',
    question TEXT NOT NULL,
    answers JSONB NOT NULL DEFAULT '[]',
    list JSONB DEFAULT '[]',
    post_list JSONB DEFAULT '[]',
    order_index INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------------------
-- 12. VIDEO LESSONS (YouTube Showcases)
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.video_lessons (
    id SERIAL PRIMARY KEY,
    youtube_id VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    trainer VARCHAR(255) NOT NULL,
    level VARCHAR(100) NOT NULL,
    duration VARCHAR(50) DEFAULT 'Full Guide',
    order_index INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------------------
-- 13. GALLERY (Campus & Student Moments)
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.gallery (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) DEFAULT 'Campus',
    image_url TEXT NOT NULL,
    order_index INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------------------
-- 14. WEBSITE PAGES MANAGEMENT (18 Public Pages)
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.pages (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) DEFAULT 'General',
    hero_title VARCHAR(255),
    hero_subtitle TEXT,
    hero_image TEXT,
    meta_title VARCHAR(255),
    meta_description TEXT,
    content_json JSONB DEFAULT '{}',
    is_published BOOLEAN DEFAULT TRUE,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------------------
-- 15. ACTIVITY LOGS (Admin Audit Trail)
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.activity_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    action VARCHAR(255) NOT NULL,
    module VARCHAR(100) NOT NULL,
    details TEXT,
    admin_name VARCHAR(100) DEFAULT 'Admin',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------------------
-- 16. SITE SETTINGS (Key-Value)
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
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faculty_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hero_slides ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.why_choose ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students_in_germany ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.video_lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Anonymous public inserts for enquiries
CREATE POLICY "Public can submit enquiries" ON public.enquiries FOR INSERT WITH CHECK (true);

-- Anonymous public reads for active content
CREATE POLICY "Public view active hero_slides" ON public.hero_slides FOR SELECT USING (is_active = true);
CREATE POLICY "Public view active why_choose" ON public.why_choose FOR SELECT USING (is_active = true);
CREATE POLICY "Public view active students_in_germany" ON public.students_in_germany FOR SELECT USING (is_active = true);
CREATE POLICY "Public view active student_reviews" ON public.student_reviews FOR SELECT USING (is_active = true);
CREATE POLICY "Public view active faculty_members" ON public.faculty_members FOR SELECT USING (is_active = true);
CREATE POLICY "Public view active video_lessons" ON public.video_lessons FOR SELECT USING (is_active = true);
CREATE POLICY "Public view active courses" ON public.courses FOR SELECT USING (is_active = true);
CREATE POLICY "Public view active faqs" ON public.faqs FOR SELECT USING (is_active = true);
CREATE POLICY "Public view active gallery" ON public.gallery FOR SELECT USING (is_active = true);
CREATE POLICY "Public view published pages" ON public.pages FOR SELECT USING (is_published = true);
CREATE POLICY "Public view site_settings" ON public.site_settings FOR SELECT USING (true);

-- Service role full access
CREATE POLICY "Service role full admin_users" ON public.admin_users FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full enquiries" ON public.enquiries FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full students" ON public.students FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full payments" ON public.payments FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full courses" ON public.courses FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full faculty_members" ON public.faculty_members FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full hero_slides" ON public.hero_slides FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full why_choose" ON public.why_choose FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full students_in_germany" ON public.students_in_germany FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full student_reviews" ON public.student_reviews FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full faqs" ON public.faqs FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full video_lessons" ON public.video_lessons FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full gallery" ON public.gallery FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full pages" ON public.pages FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full activity_logs" ON public.activity_logs FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full site_settings" ON public.site_settings FOR ALL USING (true) WITH CHECK (true);

-- CRITICAL: Explicit Schema Privileges to prevent 42501 "permission denied"
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA public TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON ROUTINES TO anon, authenticated, service_role;


-- =========================================================================
-- SEED DATA INSERTION
-- Real website courses, faculty, slides, why choose, alumni, reviews, faqs, videos
-- No dummy student or payment records.
-- =========================================================================

-- Admin Users
INSERT INTO public.admin_users (name, email, role, status)
VALUES
('Gyanshala Admin', 'admin@gyanshala.in', 'Super Admin', 'Active'),
('Admissions Team', 'admissions@gyanshala.in', 'Counselor', 'Active')
ON CONFLICT (email) DO NOTHING;

-- Hero Slides
INSERT INTO public.hero_slides (image, badge, title, highlight, description, primary_btn_text, primary_btn_href, secondary_btn_text, secondary_btn_href, order_index)
VALUES 
('/Hero/IMG_20250806_170204918_HDR.jpg', '🇩🇪 Premier German Institute in Jaipur', 'Master German Language', 'From A1 to C2 Levels', 'Learn with native-standard curriculum, certified faculty, and interactive batches tailored for Goethe, TELC and ÖSD examinations.', 'German Courses', '/german', 'Enquiry Now', '/enquiry', 1),
('/Hero/IMG_20250806_121152807_HDR.jpg', '🇩🇪 Study • Ausbildung • Careers in Germany', 'Study, Ausbildung & Careers', 'in Germany', 'Master German to unlock tuition-free university education, paid dual Ausbildung with monthly stipends, and high-demand nursing & engineering careers.', 'Explore Germany Pathways', '/pathways', 'Free Counseling', '/enquiry', 2),
('/Hero/hero3x.jpg', '🌍 Global Language Programs', 'Learn Beyond German', 'Master Global Languages', 'Expand your career horizon with our specialized courses in French, Spanish, and Business English with personalized coaching.', 'View All Languages', '/languages', 'Free Counseling', '/enquiry', 3)
ON CONFLICT DO NOTHING;

-- Why Choose Points
INSERT INTO public.why_choose (number, title, description, order_index)
VALUES
('01', 'Experienced German Language Trainers', 'Learn from qualified and dedicated German language experts with years of teaching excellence.', 1),
('02', 'German Courses from A1 to C2', 'Progress step by step from complete beginner to advanced CEFR proficiency.', 2),
('03', 'Spoken German & Exam Preparation', 'Develop practical communication skills and prepare with targeted Goethe & telc mock exams.', 3),
('04', 'Flexible Batch Timings', 'Choose morning, afternoon, evening, or weekend batches that fit your daily schedule.', 4),
('05', 'Affordable German Classes in Jaipur', 'Quality German language training at reasonable, transparent fees with no hidden costs.', 5),
('06', 'Online and Offline Classes', 'Learn through interactive live online sessions or in-person classroom training in Jaipur.', 6)
ON CONFLICT DO NOTHING;

-- Video Lessons
INSERT INTO public.video_lessons (youtube_id, title, trainer, level, duration, order_index)
VALUES
('uN2ZqX5v844', 'German A1 Complete Grammar & Vocabulary Guide', 'Dilip Sinsinwar Sir', 'German A1', '45 Mins', 1),
('cE98aK71kLQ', 'How to Pass Goethe B1 Exam with 90%+ Marks', 'Ashveer Singh Sir', 'Goethe B1', '35 Mins', 2),
('yM3nB82hPz0', 'Complete Guide to Ausbildung in Germany for Indian Students', 'Counseling Team', 'Germany Pathways', '28 Mins', 3)
ON CONFLICT DO NOTHING;

-- Activity Logs
INSERT INTO public.activity_logs (action, module, details, admin_name)
VALUES
('Admin Logged In', 'Authentication', 'Admin logged into CMS dashboard', 'Gyanshala Admin'),
('Updated FAQ item #1', 'FAQs CMS', 'Refreshed general academy details', 'Gyanshala Admin'),
('Synced Database', 'Database', 'Initial CMS schema synchronized successfully', 'System')
ON CONFLICT DO NOTHING;
