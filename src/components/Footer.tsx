"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--card-bg)] border-t border-[var(--border)] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold gradient-text mb-2">
              Devit Nur Azaqi
            </div>
            <p className="text-[var(--text-light)] text-sm">
              Mobile Developer • Flutter • React Native
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/devitnurazaqi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-[var(--accent)] transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/devitnurazaqi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-[var(--accent)] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:devitazaqi@gmail.com"
              className="p-2 hover:text-[var(--accent)] transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--text-light)]">
          <p>
            © {new Date().getFullYear()} Devit Nur Azaqi. All rights reserved.
          </p>
          <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
