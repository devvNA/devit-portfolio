"use client";

import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-15 px-4 bg-[var(--card-bg)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--text-light)] text-lg max-w-2xl mx-auto">
            Real-world applications delivering measurable business impact
          </p>
        </motion.div>

        <div className="mx-auto grid grid-cols-3 gap-6 p-10">
          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--background)] rounded-xl border border-[var(--border)] overflow-hidden hover:border-[var(--accent)] transition-all hover:scale-105 mb-8"
            >
              {/* Screenshots Grid */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-[var(--card-bg)]">
                {project.screenshots.map((screenshot, i) => (
                  <div
                    key={i}
                    className="relative w-full rounded-lg overflow-hidden border border-[var(--border)]"
                  >
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${i + 1}`}
                      width={600}
                      height={700}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-[var(--text-light)] mb-4 leading-relaxed">
                  {project.description}
                </p>

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
      </div >
    </section >
  );
}
