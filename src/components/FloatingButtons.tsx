"use client";

import { motion } from "framer-motion";
import { ChevronUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);

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
        className="p-3 sm:p-4 min-w-[44px] min-h-[44px] flex items-center justify-center bg-[var(--neon-primary)] text-white rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        style={{ boxShadow: '0 0 20px rgba(0, 255, 136, 0.4)' }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} aria-hidden="true" />
      </motion.a>

      {/* Back to Top */}
      {showScrollTop && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ scale: 0 }}
          animate={{ scale: 0.92 }}
          whileHover={{ scale: 1 }}
          className="p-3 sm:p-4 min-w-[44px] min-h-[44px] flex items-center justify-center bg-[var(--neon-secondary)] text-[var(--background)] rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          style={{ boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)' }}
          aria-label="Scroll to top of page"
        >
          <ChevronUp size={24} aria-hidden="true" />
        </motion.button>
      )}
    </div>
  );
}
