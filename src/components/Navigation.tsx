"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  // Ensure component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback((item: string) => {
    setActiveSection(item.toLowerCase());
    setIsMobileMenuOpen(false);

    // Delay scroll to allow menu to close and body overflow to reset
    setTimeout(() => {
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 250);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--card-bg)]/90 backdrop-blur-xl border-b border-[var(--border)]"
      role="navigation"
      aria-label="Main navigation"
      style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold gradient-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm"
            aria-label="Devit Nur Azaqi - Go to home"
          >
            Devit Nur Azaqi
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8" role="menubar">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                role="menuitem"
                aria-current={
                  activeSection === item.toLowerCase() ? "page" : undefined
                }
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item.toLowerCase());
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`relative transition-all py-2 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm ${
                  activeSection === item.toLowerCase()
                    ? "text-white"
                    : "text-[var(--text-light)] hover:text-[var(--neon-primary)]"
                }`}
                style={
                  activeSection === item.toLowerCase()
                    ? { textShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }
                    : {}
                }
              >
                {activeSection === item.toLowerCase() && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[var(--neon-primary)] rounded-full"
                    style={{ boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Download CV Button */}
            <a
              href="https://drive.google.com/drive/folders/1LBikNUREEVwR1hsi85QRSbUzQdF8gij0?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 min-h-[44px] bg-[var(--neon-primary)] text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              aria-label="Download CV (opens in new tab)"
              style={{ boxShadow: "0 0 15px rgba(0, 255, 136, 0.3)" }}
            >
              <Download size={18} aria-hidden="true" />
              <span>Download CV</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-[var(--border)] hover:border-[var(--neon-primary)] hover:text-[var(--neon-primary)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[var(--card-bg)] border-b border-[var(--border)]"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  role="menuitem"
                  aria-current={
                    activeSection === item.toLowerCase() ? "page" : undefined
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className={`block px-4 py-3 min-h-[44px] rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] ${
                    activeSection === item.toLowerCase()
                      ? "text-white bg-[var(--neon-primary)]/10 border-l-2 border-[var(--neon-primary)]"
                      : "text-white hover:text-[var(--neon-primary)] hover:bg-[var(--muted)]"
                  }`}
                  style={
                    activeSection === item.toLowerCase()
                      ? { boxShadow: "inset 0 0 20px rgba(0, 255, 136, 0.05)" }
                      : {}
                  }
                >
                  {item}
                </a>
              ))}

              {/* Mobile Download CV */}
              <a
                href="https://drive.google.com/drive/folders/1LBikNUREEVwR1hsi85QRSbUzQdF8gij0?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex sm:hidden items-center justify-center gap-2 px-4 py-3 min-h-[44px] mt-4 bg-[var(--neon-primary)] text-white font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                aria-label="Download CV (opens in new tab)"
                style={{ boxShadow: "0 0 15px rgba(0, 255, 136, 0.3)" }}
              >
                <Download size={18} aria-hidden="true" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
