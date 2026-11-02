"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EnquiryModalProvider } from "@/context/EnquiryModalContext";
import EnquiryModal from "@/components/EnquiryModal";
import FloatingContactButtons from "@/components/FloatingContactButtons";

interface SiteLayoutWrapperProps {
  children: React.ReactNode;
}

export default function SiteLayoutWrapper({ children }: SiteLayoutWrapperProps) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  // On Admin routes (including /admin/login), hide website navbar, footer & floating buttons
  if (isAdmin) {
    return <div className="min-h-screen w-full flex-1">{children}</div>;
  }

  // On public website routes, show full branding, navbar, footer & modal
  return (
    <EnquiryModalProvider>
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
      <EnquiryModal />
      <FloatingContactButtons />
    </EnquiryModalProvider>
  );
}
