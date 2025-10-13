"use client";

import { achievements } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase, Code, Server } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-15 px-4 bg-[var(--card-bg)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-[var(--text-light)] text-lg max-w-2xl mx-auto">
            Passionate about creating high-quality mobile applications that
            make a difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)] rounded-3xl rotate-6 opacity-20 blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-3xl p-1">
                <div className="bg-[var(--card-bg)] rounded-3xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="/images/profile.png"
                    alt="Devit Nur Azaqi"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Mobile Development Specialist
            </h3>
            <p className="text-[var(--text-light)] mb-4 leading-relaxed">
              With over 2 years of hands-on experience in mobile development,
              I specialize in creating robust, scalable, and user-friendly
              applications using Flutter and React Native.
            </p>
            <p className="text-[var(--text-light)] mb-4 leading-relaxed">
              My expertise extends to implementing Clean Architecture
              patterns, state management solutions (GetX, Bloc, Redux), and
              integrating complex backend systems using Laravel and Supabase.
            </p>
            <p className="text-[var(--text-light)] mb-6 leading-relaxed">
              I'm passionate about writing clean, maintainable code and
              following best practices to deliver exceptional mobile
              experiences that drive business growth.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-[var(--background)] rounded-lg border border-[var(--border)]">
                <Briefcase className="text-[var(--accent)] mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Experience</h4>
                  <p className="text-[var(--text-light)]">
                    2+ years in Mobile Development
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[var(--background)] rounded-lg border border-[var(--border)]">
                <Code className="text-[var(--accent)] mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Architecture</h4>
                  <p className="text-[var(--text-light)]">
                    Clean Architecture, MVVM, GetX, Bloc , Redux patterns
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[var(--background)] rounded-lg border border-[var(--border)]">
                <Server className="text-[var(--accent)] mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Backend</h4>
                  <p className="text-[var(--text-light)]">
                    Laravel, Supabase, PostgreSQL, MySQL, RESTful APIs
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--background)] p-6 rounded-xl border border-[var(--border)] text-center hover:border-[var(--accent)] transition-all hover:scale-105"
            >
              <achievement.icon
                className={`${achievement.color} mx-auto mb-3`}
                size={40}
              />
              <div className="text-3xl font-bold mb-2">
                {achievement.value}
              </div>
              <div className="text-sm text-[var(--text-light)]">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
