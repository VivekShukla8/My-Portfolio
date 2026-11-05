import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const socialLinks = [
  { icon: LinkedinIcon, url: personalInfo.links.linkedin, label: 'LinkedIn' },
  { icon: GithubIcon, url: personalInfo.links.github, label: 'GitHub' },
  { icon: InstagramIcon, url: personalInfo.links.instagram, label: 'Instagram' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [notice, setNotice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Portfolio message from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
    setNotice('Gmail should open with this draft. Press Send there to deliver it.');
  };

  const handleChange = (event) => {
    setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-[var(--border-color)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Big Statement */}
          <div>
            <motion.p
              variants={fadeUp}
              className="font-mono uppercase text-[11px] tracking-[0.2em] text-[var(--text-muted)] mb-4"
            >
              Get in Touch
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] leading-[1.05] mb-8"
            >
              Let&apos;s Work
              <br />
              Together
            </motion.h2>

            {/* Contact Details */}
            <motion.div variants={fadeUp} className="space-y-4 mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
              >
                <Mail size={16} className="text-[var(--text-muted)] flex-shrink-0" />
                <span className="font-mono text-sm group-hover:underline underline-offset-4">
                  {personalInfo.email}
                </span>
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
              >
                <Phone size={16} className="text-[var(--text-muted)] flex-shrink-0" />
                <span className="font-mono text-sm group-hover:underline underline-offset-4">
                  {personalInfo.phone}
                </span>
              </a>
              <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                <MapPin size={16} className="text-[var(--text-muted)] flex-shrink-0" />
                <span className="font-mono text-sm">{personalInfo.location}</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] hover:border-[var(--text-primary)] transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div variants={fadeUp} className="flex items-start">
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <label htmlFor="contact-name" className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)] block mb-4">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-[var(--border-color)] py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--text-primary)] focus:outline-none transition-colors font-mono text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)] block mb-4">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-[var(--border-color)] py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--text-primary)] focus:outline-none transition-colors font-mono text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)] block mb-4">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-[var(--border-color)] py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--text-primary)] focus:outline-none transition-colors font-mono text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] border border-[var(--border-color)] rounded-full px-6 py-3.5 text-[var(--text-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] hover:border-[var(--text-primary)] transition-all duration-300"
              >
                Open Gmail <ArrowRight size={14} />
              </button>
              {notice && (
                <p role="status" aria-live="polite" className="font-mono text-xs text-[var(--text-muted)]">
                  {notice}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
