import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Raleway } from "next/font/google";
import "./globals.css";
import SiteLayoutWrapper from "@/components/SiteLayoutWrapper";

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
  metadataBase: new URL("https://gyanshala.in"),
  title: "Gyanshala Academy - German Language & Global Pathways | Jaipur",
  description:
    "Learn German (A1-C2), explore Germany study, Ausbildung, and nursing pathways, and learn foreign languages at Gyanshala Academy Jaipur.",
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gyanshala.in",
    siteName: "Gyanshala Academy",
    title: "Gyanshala Academy - German Language & Global Pathways | Jaipur",
    description:
      "Learn German (A1-C2), explore Germany study, Ausbildung, and nursing pathways, and learn foreign languages at Gyanshala Academy Jaipur.",
    images: [
      {
        url: "/Logo/LOGO.NEW.GYANSHALA.png",
        width: 1200,
        height: 630,
        alt: "Gyanshala Academy Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gyanshala Academy - German Language & Global Pathways | Jaipur",
    description:
      "Learn German (A1-C2), explore Germany study, Ausbildung, and nursing pathways, and learn foreign languages at Gyanshala Academy Jaipur.",
    images: ["/Logo/LOGO.NEW.GYANSHALA.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${playfair.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className={`${plusJakarta.className} min-h-full flex flex-col font-sans`}>
        <SiteLayoutWrapper>{children}</SiteLayoutWrapper>
      </body>
    </html>
  );
}
