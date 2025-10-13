"use client";

import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-[var(--card-bg)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--text-light)] text-lg max-w-2xl mx-auto">
            Real-world applications delivering measurable business impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--background)] rounded-xl border border-[var(--border)] overflow-hidden hover:border-[var(--accent)] transition-all hover:scale-105"
            >
              {/* Screenshots Grid */}
              <div className="grid grid-cols-3 gap-2 p-4 bg-[var(--card-bg)]">
                {project.screenshots.map((screenshot, i) => (
                  <div
                    key={i}
                    className="relative w-full rounded-lg overflow-hidden border border-[var(--border)]"
                  >
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${i + 1}`}
                      width={300}
                      height={600}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 768px) 33vw, 15vw"
                    />
                  </div>
                ))}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-[var(--text-light)] mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle
                      className="text-[var(--accent)]"
                      size={18}
                    />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-sm text-[var(--text-light)] flex items-start gap-2"
                      >
                        <span className="text-[var(--accent)] mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm font-medium">
                    <TrendingUp size={16} />
                    {project.impact}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
