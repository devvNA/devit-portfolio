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
    setIsMobileMenuOpen(false);
    const element = document.getElementById(item.toLowerCase());
    element?.focus();
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--card-bg)]/80 backdrop-blur-lg border-b border-[var(--border)]"
      role="navigation"
      aria-label="Main navigation"
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
                aria-current={activeSection === item.toLowerCase() ? "page" : undefined}
                className={`transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm ${
                  activeSection === item.toLowerCase()
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-light)] hover:text-[var(--accent)]"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Download CV Button */}
            <a
              href="https://drive.google.com/file/d/1KhKMTYPnmB8trt7SPR0maj9U3UV3p91O/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 min-h-[44px] bg-[var(--button)] text-white rounded-lg hover:bg-[var(--secondary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              aria-label="Download CV (opens in new tab)"
            >
              <Download size={18} aria-hidden="true" />
              <span>Download CV</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-[var(--border)] hover:bg-[var(--muted)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
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
                  aria-current={activeSection === item.toLowerCase() ? "page" : undefined}
                  onClick={() => handleNavClick(item)}
                  className={`block px-4 py-3 min-h-[44px] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] ${
                    activeSection === item.toLowerCase()
                      ? "text-[var(--accent)] bg-[var(--accent)]/10"
                      : "text-[var(--text-light)] hover:text-[var(--accent)] hover:bg-[var(--muted)]"
                  }`}
                >
                  {item}
                </a>
              ))}

              {/* Mobile Download CV */}
              <a
                href="https://drive.google.com/file/d/1KhKMTYPnmB8trt7SPR0maj9U3UV3p91O/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex sm:hidden items-center justify-center gap-2 px-4 py-3 min-h-[44px] mt-4 bg-[var(--button)] text-white rounded-lg hover:bg-[var(--secondary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                aria-label="Download CV (opens in new tab)"
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
