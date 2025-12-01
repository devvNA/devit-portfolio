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
    <section id="about" className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-lg mx-auto px-2">
            Passionate about creating high-quality mobile applications
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative w-48 sm:w-56 md:w-64">
              <div className="absolute -inset-3 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 rounded-2xl blur-2xl" />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card-bg)]">
                <Image
                  src="/images/profile.png"
                  alt="Devit Nur Azaqi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-5"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] text-center lg:text-left">
              Mobile Development Specialist
            </h3>

            <div className="space-y-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {achievements.map((achievement, index) => (
            <Card key={index} hover className="p-4 sm:p-6 text-center group">
              <div className="mb-2 sm:mb-3 flex justify-center">
                <div className="p-2 sm:p-3 rounded-xl bg-[var(--surface)] group-hover:scale-110 transition-transform">
                  <achievement.icon
                    className={achievement.color}
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-0.5">
                {achievement.value}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-[var(--text-muted)]">
                {achievement.label}
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
