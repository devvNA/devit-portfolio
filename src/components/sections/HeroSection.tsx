"use client";

import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <Badge variant="accent" className="gap-1.5">
                <Sparkles size={14} />
                Welcome to my portfolio
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
            >
              Hi, I'm <span className="gradient-text">Devit Nur Azaqi</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-[var(--text-light)] mb-6 font-medium"
            >
              Mobile Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-[var(--text-light)] mb-8 leading-relaxed max-w-xl"
            >
              Graduate of Telkom University's Information Systems program with
              over 2 years of experience in cross-platform mobile application
              development. Specialized in implementing Clean Architecture,
              client-server integration, and maintaining application quality
              through structured testing and bug reporting.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="btn btn-primary px-6 py-3 gap-2 text-sm"
              >
                <Mail size={18} />
                Get In Touch
              </a>
              <a
                href="#projects"
                className="btn btn-outline px-6 py-3 gap-2 text-sm hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Briefcase size={18} />
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 mt-8"
            >
              <a
                href="https://github.com/devvNA"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] hover:bg-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/devitnurazaqi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] hover:bg-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:devitazaqi@gmail.com"
                className="p-2.5 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] hover:bg-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--secondary)]/20 rounded-3xl blur-3xl"></div>

              {/* Main card */}
              <div className="relative card card-hover p-12 h-full flex items-center justify-center">
                <div className="relative">
                  <Code
                    size={180}
                    className="text-[var(--accent)] opacity-90"
                    strokeWidth={1.5}
                  />

                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)] rounded-lg opacity-20"
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] rounded-full opacity-20"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
