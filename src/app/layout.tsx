import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EnquiryModalProvider } from "@/context/EnquiryModalContext";
import EnquiryModal from "@/components/EnquiryModal";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gyanshala Academy - German Language & Global Pathways | Jaipur",
  description: "Learn German (A1-C2), explore Germany study, Ausbildung, and nursing pathways, and learn foreign languages at Gyanshala Academy Jaipur.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} h-full antialiased`}
    >
      <body className={`${raleway.className} min-h-full flex flex-col`}>
        <EnquiryModalProvider>
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
          <EnquiryModal />
        </EnquiryModalProvider>
      </body>
    </html>
  );
}
