import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EnquiryModalProvider } from "@/context/EnquiryModalContext";
import EnquiryModal from "@/components/EnquiryModal";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gyanshala Academy - German Language & Global Pathways | Jaipur",
  description: "Learn German (A1-C2), explore Germany study, Ausbildung, and nursing pathways, and learn foreign languages at Gyanshala Academy Jaipur.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${playfair.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className={`${plusJakarta.className} min-h-full flex flex-col font-sans`}>
        <EnquiryModalProvider>
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
          <EnquiryModal />
          <FloatingContactButtons />
        </EnquiryModalProvider>
      </body>
    </html>
  );
}
