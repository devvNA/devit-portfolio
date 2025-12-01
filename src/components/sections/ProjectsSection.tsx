"use client";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  return (
    <section
      id="projects"
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-lg mx-auto px-2">
            Real-world applications delivering measurable business impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {projects.slice(0, 9).map((project, index) => (
            <Card
              key={index}
              hover
              className="overflow-hidden group flex flex-col"
            >
              {/* Screenshots */}
              <div className="grid grid-cols-3 gap-1.5 p-3 bg-[var(--surface)]">
                {project.screenshots.map((screenshot, i) => (
                  <div
                    key={i}
                    className="relative aspect-[9/16] rounded overflow-hidden bg-[var(--card-bg)] border border-[var(--border)]"
                  >
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="100px"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--primary)] hover:bg-[var(--primary-muted)] transition-all"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <p className="text-[var(--text-muted)] text-sm mb-4 leading-relaxed line-clamp-2 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <Badge key={i} variant="default" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tech.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
