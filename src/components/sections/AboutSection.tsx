"use client";

import { Card } from "@/components/ui/Card";
import { achievements } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase, Code, Server } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  const highlights = [
    {
      icon: Briefcase,
      title: "Experience",
      description: "2+ years in Mobile Development",
      color: "var(--primary)",
    },
    {
      icon: Code,
      title: "Architecture",
      description: "Clean Architecture, MVVM, GetX, Bloc",
      color: "var(--accent)",
    },
    {
      icon: Server,
      title: "Backend",
      description: "Laravel, Supabase, PostgreSQL",
      color: "var(--secondary)",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-lg mx-auto">
            Passionate about creating high-quality mobile applications
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 rounded-3xl blur-2xl" />
              <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card-bg)]">
                <Image
                  src="/images/profile.png"
                  alt="Devit Nur Azaqi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 288px"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Mobile Development Specialist
            </h3>

            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                A graduate of Telkom University's Information Systems program
                with over 2 years of experience in cross-platform mobile
                application development using Flutter and React Native.
              </p>
              <p>
                Specialized in implementing Clean Architecture patterns, state
                management solutions (GetX, Bloc, Redux), and working with
                backend systems using Laravel and Supabase.
              </p>
              <p>
                Enthusiastic about learning new technologies, especially
                advances in AI to optimize the development process and create
                innovative digital solutions.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid gap-3 pt-4">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="flex items-center gap-4 p-4 hover:border-[var(--border-hover)] transition-all"
                >
                  <div
                    className="p-2.5 rounded-xl"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${item.color} 15%, transparent)`,
                    }}
                  >
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] text-sm">
                      {item.title}
                    </h4>
                    <p className="text-[var(--text-muted)] text-sm">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {achievements.map((achievement, index) => (
            <Card key={index} hover className="p-6 text-center group">
              <div className="mb-3 flex justify-center">
                <div className="p-3 rounded-xl bg-[var(--surface)] group-hover:scale-110 transition-transform">
                  <achievement.icon
                    className={achievement.color}
                    size={28}
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-1">
                {achievement.value}
              </div>
              <div className="text-xs sm:text-sm text-[var(--text-muted)]">
                {achievement.label}
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
