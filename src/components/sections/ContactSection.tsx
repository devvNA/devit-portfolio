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
    setTimeout(() => {
      const mailtoLink = `mailto:devitazaqi@gmail.com?subject=${formData.subject}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "devitazaqi@gmail.com",
      href: "mailto:devitazaqi@gmail.com",
      color: "var(--primary)",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 821-4218-5804",
      href: "https://wa.me/6282142185804",
      color: "var(--accent)",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Purwokerto, Indonesia",
      color: "var(--secondary)",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get <span className="gradient-text">In Touch</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-lg mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
              Contact Information
            </h3>

            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="p-4 hover:border-[var(--border-hover)] transition-all"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
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
                      <p className="text-xs text-[var(--text-muted)]">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--primary)] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div
                      className="p-2.5 rounded-xl"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${item.color} 15%, transparent)`,
                      }}
                    >
                      <item.icon size={20} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-muted)]">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-[var(--text-secondary)]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            ))}

            {/* Why Work With Me */}
            <Card className="p-5 mt-6 border-[var(--primary)]/20 bg-[var(--primary-muted)]">
              <h4 className="font-semibold text-[var(--text-primary)] mb-4">
                Why Work With Me?
              </h4>
              <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
                {[
                  "2+ years professional experience",
                  "10+ successful applications",
                  "Clean code & best practices",
                  "Fast communication & delivery",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[var(--primary)] mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
                Send Message
              </h3>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-[var(--primary-muted)] border border-[var(--primary)]/30 rounded-xl text-[var(--primary)] text-sm">
                  Email client will open with your message.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      className={`input ${errors.name ? "border-[var(--destructive)]" : ""}`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-[var(--destructive)] text-xs mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      className={`input ${errors.email ? "border-[var(--destructive)]" : ""}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-[var(--destructive)] text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: "" });
                    }}
                    className={`input ${errors.subject ? "border-[var(--destructive)]" : ""}`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="text-[var(--destructive)] text-xs mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    rows={5}
                    className={`input textarea ${errors.message ? "border-[var(--destructive)]" : ""}`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-[var(--destructive)] text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full py-3.5 gap-2 text-base font-semibold"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={18} /> Send Message
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
          className="flex justify-center gap-4 mt-16 pt-8 border-t border-[var(--border)]"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/devvNA",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/devitnurazaqi",
              label: "LinkedIn",
            },
            { icon: Mail, href: "mailto:devitazaqi@gmail.com", label: "Email" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
