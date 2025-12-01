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
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitSuccess(false);

    // Simulate form submission delay
    setTimeout(() => {
      const mailtoLink = `mailto:devitazaqi@gmail.com?subject=${
        formData.subject || `Portfolio Contact from ${formData.name}`
      }&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 500);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Get <span className="gradient-text">In Touch</span>
          </h2>
          <p className="text-[var(--text-light)] text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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
                  <div className="p-2.5 bg-[var(--neon-primary)]/10 rounded-lg group-hover:bg-[var(--neon-primary)]/20 group-hover:shadow-[0_0_10px_rgba(0,255,136,0.2)] transition-all">
                    <Mail className="text-[var(--neon-primary)]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-0.5">Email</h4>
                    <p className="text-[var(--text-light)] text-sm group-hover:text-[var(--neon-primary)] transition-colors">
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
                  <div className="p-2.5 bg-[var(--neon-secondary)]/10 rounded-lg group-hover:bg-[var(--neon-secondary)]/20 group-hover:shadow-[0_0_10px_rgba(0,212,255,0.2)] transition-all">
                    <Phone className="text-[var(--neon-secondary)]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-0.5">Phone</h4>
                    <p className="text-[var(--text-light)] text-sm group-hover:text-[var(--neon-secondary)] transition-colors">
                      +62 821-4218-5804
                    </p>
                  </div>
                </Card>
              </a>

              {/* Location */}
              <Card hover className="flex items-start gap-4 p-4 group">
                <div className="p-2.5 bg-[var(--tertiary)]/10 rounded-lg group-hover:bg-[var(--tertiary)]/20 group-hover:shadow-[0_0_10px_rgba(123,92,255,0.2)] transition-all">
                  <MapPin className="text-[var(--tertiary)]" size={20} />
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
            <Card className="mt-6 p-5 border-[var(--neon-primary)]/30 bg-[var(--neon-primary)]/5">
              <h4 className="text-lg font-bold mb-4 tracking-tight">
                Why Work With Me?
              </h4>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <span className="text-[var(--neon-primary)] mt-0.5 flex-shrink-0 font-bold">
                    ✓
                  </span>
                  <p className="text-[var(--text-light)] text-sm">
                    2+ years of professional mobile development experience
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[var(--neon-primary)] mt-0.5 flex-shrink-0 font-bold">
                    ✓
                  </span>
                  <p className="text-[var(--text-light)] text-sm">
                    Proven track record with 10+ successful applications
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[var(--neon-primary)] mt-0.5 flex-shrink-0 font-bold">
                    ✓
                  </span>
                  <p className="text-[var(--text-light)] text-sm">
                    Clean code and best practices guaranteed
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[var(--neon-primary)] mt-0.5 flex-shrink-0 font-bold">
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

              {submitSuccess && (
                <div
                  className="mb-4 p-3 bg-[var(--neon-primary)]/10 border border-[var(--neon-primary)]/30 rounded-lg text-[var(--neon-primary)] text-sm"
                  role="alert"
                  aria-live="polite"
                >
                  Thank you! Email client will open with your message.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Your Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Your Name{" "}
                    <span
                      className="text-[var(--destructive)]"
                      aria-label="required"
                    >
                      *
                    </span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    aria-describedby={errors.name ? "name-error" : undefined}
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    className={`input w-full px-3 py-2.5 text-sm transition-colors ${
                      errors.name
                        ? "border-[var(--destructive)]/50 bg-[var(--destructive)]/5"
                        : ""
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="text-[var(--destructive)] text-xs mt-1"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Your Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Your Email{" "}
                    <span
                      className="text-[var(--destructive)]"
                      aria-label="required"
                    >
                      *
                    </span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    aria-describedby={errors.email ? "email-error" : undefined}
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className={`input w-full px-3 py-2.5 text-sm transition-colors ${
                      errors.email
                        ? "border-[var(--destructive)]/50 bg-[var(--destructive)]/5"
                        : ""
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="text-[var(--destructive)] text-xs mt-1"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Subject{" "}
                    <span
                      className="text-[var(--destructive)]"
                      aria-label="required"
                    >
                      *
                    </span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    aria-required="true"
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: "" });
                    }}
                    className={`input w-full px-3 py-2.5 text-sm transition-colors ${
                      errors.subject
                        ? "border-[var(--destructive)]/50 bg-[var(--destructive)]/5"
                        : ""
                    }`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p
                      id="subject-error"
                      className="text-[var(--destructive)] text-xs mt-1"
                    >
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Message{" "}
                    <span
                      className="text-[var(--destructive)]"
                      aria-label="required"
                    >
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    aria-required="true"
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    rows={5}
                    className={`input textarea w-full px-3 py-2.5 text-sm transition-colors ${
                      errors.message
                        ? "border-[var(--destructive)]/50 bg-[var(--destructive)]/5"
                        : ""
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="text-[var(--destructive)] text-xs mt-1"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full px-6 py-3 min-h-[48px] gap-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={18} aria-hidden="true" />
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
          className="flex justify-center gap-3 sm:gap-4 mt-12 pt-8 border-t border-[var(--border)]"
          role="list"
          aria-label="Social links"
        >
          <a
            href="https://github.com/devvNA"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-[var(--border)] hover:border-[var(--neon-primary)] hover:text-[var(--neon-primary)] hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            aria-label="Visit GitHub profile (opens in new tab)"
            role="listitem"
          >
            <Github size={20} aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/devitnurazaqi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-[var(--border)] hover:border-[var(--neon-secondary)] hover:text-[var(--neon-secondary)] hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            aria-label="Visit LinkedIn profile (opens in new tab)"
            role="listitem"
          >
            <Linkedin size={20} aria-hidden="true" />
          </a>
          <a
            href="mailto:devitazaqi@gmail.com"
            className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-[var(--border)] hover:border-[var(--tertiary)] hover:text-[var(--tertiary)] hover:shadow-[0_0_15px_rgba(123,92,255,0.2)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tertiary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            aria-label="Send email"
            role="listitem"
          >
            <Mail size={20} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
