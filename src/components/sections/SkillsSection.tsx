"use client";

import { Card } from "@/components/ui/Card";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[var(--muted)]/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-[var(--text-light)] text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Comprehensive skill set for building modern mobile applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {skills.map((skill, index) => (
            <Card
              key={index}
              hover
              className="p-5 flex flex-col items-center justify-center text-center group min-h-[120px]"
            >
              <div className="p-3 bg-[var(--neon-primary)]/10 rounded-xl group-hover:bg-[var(--neon-primary)]/20 group-hover:scale-110 transition-all duration-200 mb-3">
                {typeof skill.icon === "string" ? (
                  <img
                    src={skill.icon}
                    alt=""
                    aria-hidden="true"
                    className="w-7 h-7"
                    loading="lazy"
                  />
                ) : (
                  <skill.icon
                    className="text-[var(--neon-primary)]"
                    size={28}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="text-sm md:text-base font-semibold group-hover:text-[var(--neon-primary)] transition-colors">
                {skill.name}
              </h3>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
