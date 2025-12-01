"use client";

import { Card } from "@/components/ui/Card";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--surface)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-lg mx-auto">
            Technologies and tools I use to build modern applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill, index) => (
            <Card
              key={index}
              hover
              className="p-5 flex flex-col items-center justify-center text-center group min-h-[130px]"
            >
              <div className="p-3 rounded-xl bg-[var(--surface)] group-hover:bg-[var(--primary-muted)] group-hover:scale-110 transition-all duration-200 mb-3">
                {typeof skill.icon === "string" ? (
                  <img
                    src={skill.icon}
                    alt=""
                    className="w-7 h-7"
                    loading="lazy"
                  />
                ) : (
                  <skill.icon
                    className="text-[var(--primary)]"
                    size={28}
                    strokeWidth={1.5}
                  />
                )}
              </div>
              <h3 className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                {skill.name}
              </h3>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
