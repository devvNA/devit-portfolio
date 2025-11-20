"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--card-bg)]/80 backdrop-blur-lg border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold gradient-text"
          >
            Devit Nur Azaqi
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors ${activeSection === item.toLowerCase()
                  ? "text-[var(--accent)]"
                  : "text-[var(--text-light)] hover:text-[var(--accent)]"
                  }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="/documents/Devit Nur Azaqi_CV.pdf"
              download="Devit Nur Azaqi_CV.pdf"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[var(--button)] text-white rounded-lg hover:bg-[var(--secondary)] transition-colors"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
