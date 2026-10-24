"use client";

import { motion } from "framer-motion";

export default function FloatingContactButtons() {
  const phoneNumber = "+918239218436";
  const whatsappUrl =
    "https://wa.me/918239218436?text=Hello%20Gyanshala%20Academy%2C%20I%20want%20to%20enquire%20about%20German%20Language%20Courses%20and%20Global%20Pathways.";

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3 sm:gap-3.5 items-end pointer-events-auto select-none"
      aria-label="Quick Contact Actions"
    >
      {/* 1. Phone Call Floating Button (Top, Deep Dark Circle) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative group flex items-center"
      >
        {/* Tooltip on Hover */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-zinc-950 text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 hidden sm:block border border-zinc-800">
          Call: +91 8239218436
        </span>

        <motion.a
          href={`tel:${phoneNumber}`}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Call Gyanshala Foreign Language Academy"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1A1F29] hover:bg-[#0E121A] active:bg-black text-white flex items-center justify-center shadow-2xl border border-zinc-700/60 transition-colors focus:outline-none"
        >
          {/* Bold, Bigger Phone Receiver Icon */}
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </motion.a>
      </motion.div>

      {/* 2. WhatsApp Floating Button (Bottom, Deep Dark Green Circle, No Glow) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative group flex items-center"
      >
        {/* Tooltip on Hover */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-zinc-950 text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 hidden sm:block border border-zinc-800">
          Chat on WhatsApp
        </span>

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Chat with Gyanshala Academy on WhatsApp"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1C6B37] hover:bg-[#15562C] active:bg-[#0F4221] text-white flex items-center justify-center shadow-2xl border border-emerald-800/60 transition-colors focus:outline-none"
        >
          {/* Bold, Bigger WhatsApp Icon */}
          <svg
            className="w-8 h-8 sm:w-9 sm:h-9 text-white fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.89 12.04 8.01 12.2C8.13 12.36 9.71 14.81 12.15 15.86C12.73 16.11 13.18 16.26 13.54 16.37C14.12 16.56 14.65 16.53 15.07 16.47C15.54 16.4 16.51 15.88 16.71 15.31C16.92 14.74 16.92 14.25 16.86 14.15C16.8 14.05 16.63 13.99 16.38 13.86C16.13 13.74 14.9 13.13 14.67 13.05C14.44 12.97 14.28 12.93 14.11 13.18C13.95 13.43 13.48 13.99 13.34 14.15C13.2 14.31 13.06 14.33 12.81 14.21C12.56 14.08 11.77 13.82 10.83 12.99C10.1 12.34 9.61 11.53 9.47 11.29C9.33 11.04 9.45 10.91 9.58 10.78C9.69 10.67 9.83 10.49 9.95 10.35C10.07 10.21 10.11 10.11 10.19 9.95C10.27 9.79 10.23 9.64 10.17 9.52C10.11 9.4 9.64 8.24 9.44 7.77C9.25 7.3 9.05 7.37 8.91 7.36C8.78 7.35 8.63 7.35 8.47 7.35L8.53 7.33Z" />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
}
