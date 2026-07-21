'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const socialLinks = [
  { label: 'LinkedIn', icon: 'LinkIcon', href: 'https://www.linkedin.com/in/girinath-r-5385772b4', color: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]' },
  { label: 'GitHub', icon: 'CodeBracketIcon', href: 'https://github.com/Giri-crea', color: 'hover:bg-foreground hover:text-background hover:border-foreground' },
  { label: 'Behance', icon: 'GlobeAltIcon', href: 'https://www.behance.net/girinathr', color: 'hover:bg-[#1769FF] hover:text-white hover:border-[#1769FF]' },
    { label: 'Email', icon: 'EnvelopeIcon', href: 'mailto:rgiri6351@gmail.com', color: 'hover:bg-primary hover:text-white hover:border-primary' },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend connection point — connect to email service or form handler
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm font-500 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all';

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <span className="text-xs font-700 uppercase tracking-[0.3em] text-primary mb-3 block">Get In Touch</span>
          <div className="section-divider mb-6" />
          <h2 className="text-section-title text-foreground">Let&apos;s Work Together</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I&apos;m currently looking for UI/UX design internships and entry-level opportunities.
                Whether you have a project in mind, want to collaborate, or just want to say hello —
                my inbox is always open.
              </p>

              <div className="space-y-4">
                {[
                  { icon: 'EnvelopeIcon', label: 'Email', value: 'rgiri6351@gmail.com' },
                  { icon: 'PhoneIcon', label: 'Phone', value: '9789442469' },
                  { icon: 'MapPinIcon', label: 'Location', value: 'Tamil Nadu, India' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as 'EnvelopeIcon'} size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-500">{item.label}</p>
                      <p className="text-sm font-600 text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-700 uppercase tracking-[0.3em] text-muted-foreground mb-4">Find Me On</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card text-foreground text-sm font-600 transition-all duration-200 ${link.color}`}
                  >
                    <Icon name={link.icon as 'LinkIcon'} size={15} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Download resume */}
            <a
              href="https://drive.google.com/drive/folders/15_cKhUKaEV-9HiTLnt9lPi111baoRQsV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary border border-border rounded-2xl text-sm font-600 text-foreground hover:border-primary hover:text-primary transition-all w-fit"
            >
              <Icon name="ArrowDownTrayIcon" size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-3xl p-8 shadow-card space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-600 text-muted-foreground block mb-1.5">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Kavitha Subramanian"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-xs font-600 text-muted-foreground block mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="kavitha@company.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-600 text-muted-foreground block mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="UI/UX Internship Opportunity"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-xs font-600 text-muted-foreground block mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Girinath, I came across your portfolio and would love to discuss..."
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-primary text-primary-foreground rounded-2xl text-sm font-700 hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-glow"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-green-600 font-600"
                >
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}