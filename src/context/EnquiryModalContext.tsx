"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface EnquiryModalContextType {
  isOpen: boolean;
  openEnquiryModal: (course?: string) => void;
  closeEnquiryModal: () => void;
  selectedCourse?: string;
}

const EnquiryModalContext = createContext<EnquiryModalContextType | undefined>(undefined);

export function EnquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);

  const openEnquiryModal = (course?: string) => {
    if (course) setSelectedCourse(course);
    setIsOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Check URL parameters for ?enquiry=1 or ?enquiry=open or #enquiry
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        if (params.get("enquiry") === "1" || params.get("enquiry") === "open" || window.location.hash === "#enquiry") {
          setIsOpen(true);
        }
      }
    }, 0);

    // Listen to custom window event
    const handleCustomEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ course?: string }>;
      openEnquiryModal(customEvent.detail?.course);
    };
    window.addEventListener("open-enquiry-modal", handleCustomEvent);

    // Close on Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeEnquiryModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-enquiry-modal", handleCustomEvent);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <EnquiryModalContext.Provider value={{ isOpen, openEnquiryModal, closeEnquiryModal, selectedCourse }}>
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext);
  if (!context) {
    throw new Error("useEnquiryModal must be used within an EnquiryModalProvider");
  }
  return context;
}
