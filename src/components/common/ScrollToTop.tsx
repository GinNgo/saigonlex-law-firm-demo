"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      if (scrollTop > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Circular progress calculations (radius = 18px, circum = ~113.1px)
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-40 select-none"
        >
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Cuộn lên đầu trang"
            title="Cuộn lên đầu trang"
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[var(--surface)] border border-[var(--color-border)] shadow-xl hover:shadow-2xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] cursor-pointer"
          >
            {/* SVG Circular Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1"
              viewBox="0 0 44 44"
              aria-hidden="true"
            >
              {/* Background circular track */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="opacity-25"
                strokeWidth="2.5"
                stroke="var(--color-border)"
                fill="transparent"
              />
              {/* Active scroll progress stroke */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                stroke="var(--color-accent)"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-150 ease-out"
              />
            </svg>

            {/* Up arrow icon */}
            <ArrowUp className="w-4 h-4 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] group-hover:-translate-y-0.5 transition-all duration-200 relative z-10" />

            {/* Hover Tooltip (Desktop) */}
            <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-[var(--bg-dark)] text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-md">
              Lên đầu trang
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
