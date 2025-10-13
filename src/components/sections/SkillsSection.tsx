"use client";

import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section id="skills" className="py-15 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-[var(--text-light)] text-lg max-w-2xl mx-auto">
            Comprehensive skill set for building modern mobile applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--card-bg)] p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[var(--accent)]/10 rounded-lg">
                  <skill.icon className="text-[var(--accent)]" size={24} />
                </div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <div className="relative w-full h-2 bg-[var(--border)] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] rounded-full"
                />
              </div>
              <div className="text-right text-sm text-[var(--text-light)] mt-2">
                {skill.level}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
