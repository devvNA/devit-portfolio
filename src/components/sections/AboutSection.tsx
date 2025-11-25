"use client";

import { Card } from "@/components/ui/Card";
import { achievements } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase, Code, Server } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-[var(--text-light)] text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Passionate about creating high-quality mobile applications that make
            a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-primary)]/10 to-[var(--neon-secondary)]/10 rounded-2xl blur-3xl"></div>
              <Card hover className="relative overflow-hidden aspect-[3/4] hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]">
                <Image
                  src="/images/profile.png"
                  alt="Devit Nur Azaqi"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 tracking-tight">
              Mobile Development Specialist
            </h3>
            <p className="text-[var(--text-light)] text-sm md:text-base mb-3 leading-relaxed">
              A graduate of Telkom University's Information Systems program with
              over 2 years of experience in cross-platform mobile application
              development using Flutter and React Native. Specialized in
              implementing Clean Architecture patterns to create robust and
              scalable applications.
            </p>
            <p className="text-[var(--text-light)] text-sm md:text-base mb-3 leading-relaxed">
              My expertise includes client-server integration, state management
              solutions (GetX, Bloc, Redux), and working with backend systems
              using Laravel and Supabase. I'm accustomed to performing thorough
              application quality checks and compiling structured bug reports to
              accelerate repairs and maintain high application quality.
            </p>
            <p className="text-[var(--text-light)] text-sm md:text-base mb-6 leading-relaxed">
              Enthusiastic about learning new technologies, especially advances
              in AI (Artificial Intelligence) to optimize the development
              process and create innovative digital solutions that drive
              business growth.
            </p>

            <div className="space-y-3">
              <Card className="flex items-start gap-4 p-4 group hover:border-[var(--neon-primary)] hover:shadow-[0_0_15px_rgba(0,255,136,0.1)] transition-all">
                <div className="p-2 bg-[var(--neon-primary)]/10 rounded-lg group-hover:bg-[var(--neon-primary)]/20 transition-colors">
                  <Briefcase className="text-[var(--neon-primary)]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-0.5">Experience</h4>
                  <p className="text-[var(--text-light)] text-sm">
                    2+ years in Mobile Development
                  </p>
                </div>
              </Card>

              <Card className="flex items-start gap-4 p-4 group hover:border-[var(--neon-secondary)] hover:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all">
                <div className="p-2 bg-[var(--neon-secondary)]/10 rounded-lg group-hover:bg-[var(--neon-secondary)]/20 transition-colors">
                  <Code className="text-[var(--neon-secondary)]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-0.5">Architecture</h4>
                  <p className="text-[var(--text-light)] text-sm">
                    Clean Architecture, MVVM, GetX, Bloc , Redux patterns
                  </p>
                </div>
              </Card>

              <Card className="flex items-start gap-4 p-4 group hover:border-[var(--tertiary)] hover:shadow-[0_0_15px_rgba(123,92,255,0.1)] transition-all">
                <div className="p-2 bg-[var(--tertiary)]/10 rounded-lg group-hover:bg-[var(--tertiary)]/20 transition-colors">
                  <Server className="text-[var(--tertiary)]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-0.5">Backend</h4>
                  <p className="text-[var(--text-light)] text-sm">
                    Laravel, Supabase, PostgreSQL, MySQL, RESTful APIs
                  </p>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="p-6 text-center group">
                <achievement.icon
                  className={`${achievement.color} mx-auto mb-3 group-hover:scale-110 transition-transform`}
                  size={36}
                  strokeWidth={1.5}
                />
                <div className="text-2xl md:text-3xl font-bold mb-1 text-[var(--neon-primary)]">
                  {achievement.value}
                </div>
                <div className="text-xs md:text-sm text-[var(--text-light)]">
                  {achievement.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
