"use client";

import { Card } from "@/components/ui/Card";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 bg-[var(--surface)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-lg mx-auto px-2">
            Technologies and tools I use to build modern applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {skills.map((skill, index) => (
            <Card
              key={index}
              hover
              className="p-4 sm:p-5 flex flex-col items-center justify-center text-center group min-h-[110px] sm:min-h-[130px]"
            >
              <div className="p-2.5 sm:p-3 rounded-xl bg-[var(--surface)] group-hover:bg-[var(--primary-muted)] group-hover:scale-110 transition-all duration-200 mb-2 sm:mb-3">
                {typeof skill.icon === "string" ? (
                  <img
                    src={skill.icon}
                    alt=""
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    loading="lazy"
                  />
                ) : (
                  <skill.icon
                    className="text-[var(--primary)]"
                    size={24}
                    strokeWidth={1.5}
                  />
                )}
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors leading-tight">
                {skill.name}
              </h3>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
