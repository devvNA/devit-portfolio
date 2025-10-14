"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      const mailtoLink = `mailto:devitazaqi@gmail.com?subject=${formData.subject || "Portfolio Contact from " + formData.name
        }&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;
      window.location.href = mailtoLink;
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" className="py-10 px-4 bg-[var(--card-bg)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get <span className="gradient-text">In Touch</span>
          </h2>
          <p className="text-[var(--text-light)] text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:devitazaqi@gmail.com"
                className="flex items-start gap-4 p-4 bg-[var(--background)] rounded-lg border border-[var(--border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="p-3 bg-[var(--accent)]/10 rounded-lg group-hover:bg-[var(--accent)]/20 transition-colors">
                  <Mail className="text-[var(--accent)]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-[var(--text-light)] group-hover:text-[var(--accent)] transition-colors">
                    devitazaqi@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="https://wa.me/6282142185804"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-[var(--background)] rounded-lg border border-[var(--border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="p-3 bg-[var(--accent)]/10 rounded-lg group-hover:bg-[var(--accent)]/20 transition-colors">
                  <Phone className="text-[var(--accent)]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-[var(--text-light)] group-hover:text-[var(--accent)] transition-colors">
                    +62 821-4218-5804
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 bg-[var(--background)] rounded-lg border border-[var(--border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="p-3 bg-[var(--accent)]/10 rounded-lg group-hover:bg-[var(--accent)]/20 transition-colors">
                  <MapPin className="text-[var(--accent)]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-[var(--text-light)]">Purwokerto, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Why Work With Me */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent)]/10 rounded-xl border border-[var(--accent)]/20">
              <h3 className="text-xl font-bold mb-4">Why Work With Me?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-0.5 flex-shrink-0 text-lg font-bold">
                    ✓
                  </span>
                  <p className="text-[var(--text-light)] text-sm">
                    2+ years of professional mobile development experience
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-0.5 flex-shrink-0 text-lg font-bold">
                    ✓
                  </span>
                  <p className="text-[var(--text-light)] text-sm">
                    Proven track record with 10+ successful applications
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-0.5 flex-shrink-0 text-lg font-bold">
                    ✓
                  </span>
                  <p className="text-[var(--text-light)] text-sm">
                    Clean code and best practices guaranteed
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-0.5 flex-shrink-0 text-lg font-bold">
                    ✓
                  </span>
                  <p className="text-[var(--text-light)] text-sm">
                    Fast communication and project delivery
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Send Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--background)] rounded-xl border border-[var(--border)] p-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Your Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Your Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-[var(--button)] text-white rounded-lg hover:bg-[var(--secondary)] transition-all hover:shadow-lg flex items-center justify-center gap-2 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-12 pt-8 border-t border-[var(--border)]"
        >
          <a
            href="https://github.com/devvNA"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[var(--background)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all hover:scale-110"
            title="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/devitnurazaqi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[var(--background)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all hover:scale-110"
            title="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:devitazaqi@gmail.com"
            className="p-3 bg-[var(--background)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all hover:scale-110"
            title="Email"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
