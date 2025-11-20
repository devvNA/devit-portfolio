"use client";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-[var(--muted)]/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--text-light)] text-base md:text-lg max-w-2xl mx-auto">
            Real-world applications delivering measurable business impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 9).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full overflow-hidden group">
                {/* Screenshots Grid */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-[var(--muted)]/50">
                  {project.screenshots.map((screenshot, i) => (
                    <div
                      key={i}
                      className="relative w-full rounded-md overflow-hidden border border-[var(--border)] bg-white"
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
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl font-semibold tracking-tight group-hover:text-[var(--accent)] transition-colors flex-1">
                      {project.title}
                    </h3>
                    {project.link && (
                      <NextLink
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-[var(--secondary)] transition-colors group/link flex-shrink-0"
                      >
                        View
                        <ExternalLink
                          size={16}
                          className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                        />
                      </NextLink>
                    )}
                  </div>

                  <p className="text-[var(--text-light)] text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="accent" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
