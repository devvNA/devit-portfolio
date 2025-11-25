"use client";

import { motion } from "framer-motion";
import { ChevronUp, MessageCircle, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingButtons() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before showing
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDarkMode, mounted]);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 flex flex-col gap-3 z-40"
      role="group"
      aria-label="Quick actions"
    >
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/6282142185804"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 0.92 }}
        whileHover={{ scale: 1 }}
        className="p-3 sm:p-4 min-w-[44px] min-h-[44px] flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} aria-hidden="true" />
      </motion.a>

      {/* Dark Mode Toggle */}
      <motion.button
        type="button"
        onClick={() => setIsDarkMode(!isDarkMode)}
        initial={{ scale: 0 }}
        animate={{ scale: 0.92 }}
        whileHover={{ scale: 1 }}
        className="p-3 sm:p-4 min-w-[44px] min-h-[44px] flex items-center justify-center bg-[var(--accent)] text-white rounded-full shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={isDarkMode}
      >
        {isDarkMode ? <Sun size={24} aria-hidden="true" /> : <Moon size={24} aria-hidden="true" />}
      </motion.button>

      {/* Back to Top */}
      {showScrollTop && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ scale: 0 }}
          animate={{ scale: 0.92 }}
          whileHover={{ scale: 1 }}
          className="p-3 sm:p-4 min-w-[44px] min-h-[44px] flex items-center justify-center bg-amber-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          aria-label="Scroll to top of page"
        >
          <ChevronUp size={24} aria-hidden="true" />
        </motion.button>
      )}
    </div>
  );
}
