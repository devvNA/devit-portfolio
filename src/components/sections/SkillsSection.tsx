"use client";

import { Card } from "@/components/ui/Card";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-[var(--muted)]/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-[var(--text-light)] text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive skill set for building modern mobile applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                hover
                className="p-5 flex flex-col items-center justify-center text-center group min-h-[120px]"
              >
                <div className="p-3 bg-[var(--accent)]/10 rounded-xl group-hover:bg-[var(--accent)]/20 group-hover:scale-110 transition-all duration-300 mb-3">
                  <skill.icon
                    className="text-[var(--accent)]"
                    size={28}
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-sm md:text-base font-semibold">
                  {skill.name}
                </h3>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
