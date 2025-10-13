"use client";

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
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
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
              className="flex items-center gap-2 mb-4"
            >
              <Sparkles className="text-[var(--accent)]" size={20} />
              <span className="text-[var(--accent)] font-medium">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Devit Nur Azaqi</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-[var(--text-light)] mb-6"
            >
              Mobile Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-[var(--text-light)] mb-8 leading-relaxed"
            >
              Experienced Mobile Developer with 2+ years of expertise in
              Flutter and experience in React Native. Specialized in Clean Architecture,
              building scalable applications, and delivering exceptional user
              experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-[var(--button)] text-white rounded-lg hover:bg-[var(--secondary)] transition-all hover:scale-105 flex items-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-[var(--accent)] text-[var(--accent)] rounded-lg hover:bg-[var(--accent)] hover:text-white transition-all hover:scale-105 flex items-center gap-2"
              >
                <Briefcase size={20} />
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 mt-8"
            >
              <a
                href="https://github.com/devvNA"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/devitnurazaqi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:devitazaqi@gmail.com"
                className="p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)] rounded-3xl rotate-6 opacity-20 blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-3xl p-1">
                <div className="bg-[var(--card-bg)] rounded-3xl p-8 h-full flex items-center justify-center">
                  <Code size={200} className="text-[var(--accent)]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
