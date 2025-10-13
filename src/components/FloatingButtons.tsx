"use client";

import { motion } from "framer-motion";
import { ChevronUp, MessageCircle, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingButtons() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDarkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="p-4 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.a>

      {/* Dark Mode Toggle */}
      <motion.button
        onClick={() => setIsDarkMode(!isDarkMode)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="p-4 bg-[var(--accent)] text-white rounded-full shadow-lg hover:shadow-xl transition-all"
        title="Toggle Dark Mode"
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </motion.button>

      {/* Back to Top */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="p-4 bg-[var(--primary)] text-white rounded-full shadow-lg hover:shadow-xl transition-all"
          title="Back to Top"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </div>
  );
}
