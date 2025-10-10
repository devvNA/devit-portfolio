"use client";

import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  CheckCircle,
  ChevronUp,
  Code,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Phone,
  Send,
  Server,
  Smartphone,
  Sparkles,
  Sun,
  TrendingUp,
  Users
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDarkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // EmailJS integration would go here
    const mailtoLink = `mailto:devitazaqi@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const skills = [
    { name: "Flutter", icon: Smartphone, level: 90 },
    { name: "React Native", icon: Code, level: 85 },
    { name: "Clean Architecture", icon: Code, level: 88 },
    { name: "Laravel", icon: Server, level: 85 },
    { name: "API Integration", icon: Server, level: 90 },
    { name: "Mobile Development", icon: Smartphone, level: 92 },
    { name: "MySQL", icon: Database, level: 85 },
    { name: "PostgreSQL", icon: Database, level: 82 },
    { name: "System Analysis", icon: Code, level: 80 },
  ];

  const projects = [
    {
      title: "Learning Management System (LMS)",
      description:
        "Comprehensive LMS platform serving 5000+ students with real-time course management, assessments, and progress tracking.",
      tech: ["Flutter", "Laravel", "PostgreSQL", "Clean Architecture"],
      achievements: [
        "Served 5000+ active students",
        "Real-time synchronization",
        "Advanced analytics dashboard",
      ],
      impact: "40% improvement in student engagement",
    },
    {
      title: "E-Commerce Mobile Platform",
      description:
        "Full-featured e-commerce application with payment integration, inventory management, and order tracking.",
      tech: ["React Native", "Redux", "Laravel", "MySQL"],
      achievements: [
        "Seamless payment integration",
        "Real-time inventory updates",
        "Push notification system",
      ],
      impact: "30% reduction in cart abandonment",
    },
    {
      title: "Point of Sale (POS) System",
      description:
        "Modern POS system with offline support, inventory management, and comprehensive reporting.",
      tech: ["Flutter", "GetX", "Supabase", "PostgreSQL"],
      achievements: [
        "Offline-first architecture",
        "Real-time sales analytics",
        "Multi-branch support",
      ],
      impact: "60% faster transaction processing",
    },
    {
      title: "Agriculture Management App",
      description:
        "IoT-integrated agriculture monitoring system with crop management, weather forecasting, and market price tracking.",
      tech: ["Flutter", "Laravel", "API Integration", "MySQL"],
      achievements: [
        "IoT sensor integration",
        "Weather API integration",
        "Crop yield prediction",
      ],
      impact: "25% increase in crop yield efficiency",
    },
  ];

  const achievements = [
    {
      icon: TrendingUp,
      value: "40%",
      label: "Performance Improvements",
      color: "text-green-500",
    },
    {
      icon: CheckCircle,
      value: "30%",
      label: "Bug Reduction",
      color: "text-blue-500",
    },
    {
      icon: Award,
      value: "60%",
      label: "Faster Testing",
      color: "text-purple-500",
    },
    {
      icon: Users,
      value: "5000+",
      label: "Active Users",
      color: "text-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--card-bg)]/80 backdrop-blur-lg border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold gradient-text"
            >
              Devit Nur Azaqi
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`transition-colors ${activeSection === item.toLowerCase()
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-light)] hover:text-[var(--accent)]"
                      }`}
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="/cv-devit.pdf"
                download
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--secondary)] transition-colors"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 px-4"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 mb-4"
              >
                <Sparkles className="text-[var(--accent)]" size={20} />
                <span className="text-[var(--accent)] font-medium">
                  Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                Hi, I'm{" "}
                <span className="gradient-text">Devit Nur Azaqi</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl text-[var(--text-light)] mb-6"
              >
                Mobile Developer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-[var(--text-light)] mb-8 leading-relaxed"
              >
                Experienced Mobile Developer with 2+ years of expertise in
                Flutter & React Native. Specialized in Clean Architecture,
                building scalable applications, and delivering exceptional user
                experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="px-8 py-3 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--secondary)] transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Mail size={20} />
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 border-2 border-[var(--accent)] text-[var(--accent)] rounded-lg hover:bg-[var(--accent)] hover:text-white transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Briefcase size={20} />
                  View Projects
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4 mt-8"
              >
                <a
                  href="https://github.com/devvNA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/devitnurazaqi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:devitazaqi@gmail.com"
                  className="p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all hover:scale-110"
                >
                  <Mail size={24} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative hidden md:block"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)] rounded-3xl rotate-6 opacity-20 blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-3xl p-1">
                  <div className="bg-[var(--card-bg)] rounded-3xl p-8 h-full flex items-center justify-center">
                    <Code size={200} className="text-[var(--accent)]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[var(--card-bg)]">
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
                patterns, state management solutions (GetX, Redux), and
                integrating complex backend systems using Laravel and Supabase.
              </p>
              <p className="text-[var(--text-light)] leading-relaxed">
                I'm passionate about writing clean, maintainable code and
                following best practices to deliver exceptional mobile
                experiences that drive business growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-start gap-3 p-4 bg-[var(--background)] rounded-lg border border-[var(--border)]">
                <Briefcase className="text-[var(--accent)] mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Experience</h4>
                  <p className="text-[var(--text-light)]">
                    2+ years in Mobile Development with Flutter & React Native
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[var(--background)] rounded-lg border border-[var(--border)]">
                <Code className="text-[var(--accent)] mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Architecture</h4>
                  <p className="text-[var(--text-light)]">
                    Clean Architecture, MVVM, GetX, Redux patterns
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

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-[var(--text-light)] text-lg max-w-2xl mx-auto">
              Comprehensive skill set for building modern mobile applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--card-bg)] p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[var(--accent)]/10 rounded-lg">
                    <skill.icon className="text-[var(--accent)]" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <div className="relative w-full h-2 bg-[var(--border)] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] rounded-full"
                  />
                </div>
                <div className="text-right text-sm text-[var(--text-light)] mt-2">
                  {skill.level}%
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-[var(--text-light)] text-lg">
              Let's discuss your next project or collaboration opportunity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4 p-4 bg-[var(--card-bg)] rounded-lg border border-[var(--border)]">
                <Mail className="text-[var(--accent)] mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:devitazaqi@gmail.com"
                    className="text-[var(--text-light)] hover:text-[var(--accent)] transition-colors"
                  >
                    devitazaqi@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[var(--card-bg)] rounded-lg border border-[var(--border)]">
                <Phone className="text-[var(--accent)] mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Phone / WhatsApp</h3>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-light)] hover:text-[var(--accent)] transition-colors"
                  >
                    +62 812-3456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[var(--card-bg)] rounded-lg border border-[var(--border)]">
                <MapPin className="text-[var(--accent)] mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-[var(--text-light)]">Indonesia</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/devvNA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/devitnurazaqi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--secondary)] transition-all hover:scale-105 flex items-center justify-center gap-2 font-medium"
              >
                <Send size={20} />
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--card-bg)] border-t border-[var(--border)] py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold gradient-text mb-2">
                Devit Nur Azaqi
              </div>
              <p className="text-[var(--text-light)] text-sm">
                Mobile Developer • Flutter • React Native
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/devitnurazaqi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-[var(--accent)] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/devitnurazaqi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-[var(--accent)] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:devitazaqi@gmail.com"
                className="p-2 hover:text-[var(--accent)] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--text-light)]">
            <p>
              © {new Date().getFullYear()} Devit Nur Azaqi. All rights
              reserved.
            </p>
            <p className="mt-2">
              Built with Next.js, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="p-4 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={24} />
        </motion.a>

        {/* Dark Mode Toggle */}
        <motion.button
          onClick={() => setIsDarkMode(!isDarkMode)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="p-4 bg-[var(--accent)] text-white rounded-full shadow-lg hover:shadow-xl transition-all"
          title="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </motion.button>

        {/* Back to Top */}
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="p-4 bg-[var(--primary)] text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            title="Back to Top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </div>
    </div>
  );
}
