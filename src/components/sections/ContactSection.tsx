"use client";

import { Card } from "@/components/ui/Card";
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
      const mailtoLink = `mailto:devitazaqi@gmail.com?subject=${
        formData.subject || `Portfolio Contact from ${formData.name}`
      }&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;
      window.location.href = mailtoLink;
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Get <span className="gradient-text">In Touch</span>
          </h2>
          <p className="text-[var(--text-light)] text-base md:text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 tracking-tight">
              Contact Information
            </h3>

            <div className="space-y-3">
              {/* Email */}
              <a href="mailto:devitazaqi@gmail.com">
                <Card hover className="flex items-start gap-4 p-4 group">
                  <div className="p-2.5 bg-[var(--accent)]/10 rounded-lg group-hover:bg-[var(--accent)]/20 transition-colors">
                    <Mail className="text-[var(--accent)]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-0.5">Email</h4>
                    <p className="text-[var(--text-light)] text-sm group-hover:text-[var(--accent)] transition-colors">
                      devitazaqi@gmail.com
                    </p>
                  </div>
                </Card>
              </a>

              {/* Phone */}
              <a
                href="https://wa.me/6282142185804"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card hover className="flex items-start gap-4 p-4 group">
                  <div className="p-2.5 bg-[var(--accent)]/10 rounded-lg group-hover:bg-[var(--accent)]/20 transition-colors">
                    <Phone className="text-[var(--accent)]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-0.5">Phone</h4>
                    <p className="text-[var(--text-light)] text-sm group-hover:text-[var(--accent)] transition-colors">
                      +62 821-4218-5804
                    </p>
                  </div>
                </Card>
              </a>

              {/* Location */}
              <Card hover className="flex items-start gap-4 p-4 group">
                <div className="p-2.5 bg-[var(--accent)]/10 rounded-lg group-hover:bg-[var(--accent)]/20 transition-colors">
                  <MapPin className="text-[var(--accent)]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-0.5">Location</h4>
                  <p className="text-[var(--text-light)] text-sm">
                    Purwokerto, Indonesia
                  </p>
                </div>
              </Card>
            </div>

            {/* Why Work With Me */}
            <Card className="mt-6 p-5 border-[var(--accent)]/30 bg-[var(--accent)]/5">
              <h4 className="text-lg font-bold mb-4 tracking-tight">
                Why Work With Me?
              </h4>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <span className="text-[var(--accent)] mt-0.5 flex-shrink-0 font-bold">
                    ✓
                  </span>
                  <p className="text-[var(--text-light)] text-sm">
                    2+ years of professional mobile development experience
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[var(--accent)] mt-0.5 flex-shrink-0 font-bold">
                    ✓
                  </span>
                  <p className="text-[var(--text-light)] text-sm">
                    Proven track record with 10+ successful applications
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[var(--accent)] mt-0.5 flex-shrink-0 font-bold">
                    ✓
                  </span>
                  <p className="text-[var(--text-light)] text-sm">
                    Clean code and best practices guaranteed
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[var(--accent)] mt-0.5 flex-shrink-0 font-bold">
                    ✓
                  </span>
                  <p className="text-[var(--text-light)] text-sm">
                    Fast communication and project delivery
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Send Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6 tracking-tight">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Your Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1.5"
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
                    className="input w-full px-3 py-2.5 text-sm"
                    placeholder="John Doe"
                  />
                </div>

                {/* Your Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1.5"
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
                    className="input w-full px-3 py-2.5 text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-1.5"
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
                    className="input w-full px-3 py-2.5 text-sm"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1.5"
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
                    className="input textarea w-full px-3 py-2.5 text-sm"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full px-6 py-3 gap-2 text-sm"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mt-12 pt-8 border-t border-[var(--border)]"
        >
          <a
            href="https://github.com/devvNA"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-[var(--border)] hover:bg-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            title="GitHub"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/devitnurazaqi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-[var(--border)] hover:bg-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:devitazaqi@gmail.com"
            className="p-2.5 rounded-lg border border-[var(--border)] hover:bg-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            title="Email"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
