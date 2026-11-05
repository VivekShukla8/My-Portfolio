import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

const techPills = ['REACT', 'NODE.JS', 'MYSQL', 'DOCKER'];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-x-clip pt-24 pb-12 md:pb-14">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 w-full"
      >
        {/* Top Row: Status + Info */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8 md:mb-10">
          <motion.div variants={item} className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
            <span className="font-mono uppercase text-[11px] tracking-[0.2em] text-[var(--text-muted)]">
              {personalInfo.status}
            </span>
          </motion.div>

          <motion.div variants={item} className="text-right hidden md:block">
            <p className="font-mono text-[11px] tracking-[0.15em] text-[var(--text-muted)] uppercase">
              From {personalInfo.location}
            </p>
            <p className="font-mono text-[11px] tracking-[0.15em] text-[var(--text-muted)] uppercase mt-1">
              {personalInfo.university} &apos;26 &bull; Electrical Engineering
            </p>
          </motion.div>
        </div>

        {/* Main Content: Title on the left, Photo + Name on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Title + Pills */}
          <div className="title-col lg:col-span-7 min-w-0">
            <motion.h1
              variants={item}
              className="hero-title text-[var(--text-primary)]"
            >
              FULL-STACK
            </motion.h1>
            <motion.h1
              variants={item}
              className="hero-title text-[var(--text-primary)] mt-2"
            >
              DEVELOPER
            </motion.h1>

            {/* Tech Pills */}
            <motion.div variants={item} className="flex flex-wrap gap-2.5 mt-8">
              {techPills.map((tech) => (
                <span
                  key={tech}
                  className="border border-[var(--border-color)] rounded-full px-4 py-1.5 font-mono text-[10px] tracking-[0.15em] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed max-w-md mt-5"
            >
              {personalInfo.tagline}
            </motion.p>
          </div>

          {/* Right Column: Photo + Name stacked */}
          <div className="lg:col-span-5 min-w-0 flex flex-col items-start lg:items-end gap-8">
            {/* Photo */}
            <motion.div
              variants={item}
              className="w-full max-w-[260px] lg:max-w-[240px] aspect-[3/4] rounded-xl overflow-hidden"
            >
              <img
                src={personalInfo.photo}
                alt={personalInfo.fullName}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            {/* Big Name — right aligned */}
            <motion.div variants={item} className="text-left lg:text-right">
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[0.96] tracking-tight text-[var(--text-primary)]">
                {personalInfo.name.toUpperCase()}
              </h2>
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[0.96] tracking-tight text-[var(--text-primary)] mt-2">
                {personalInfo.lastName.toUpperCase()}
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Bottom Strip */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-12 md:mt-14 pt-5 border-t border-[var(--border-color)]"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)] uppercase mb-3 sm:mb-0">
            Design &amp; Code by {personalInfo.name}
          </span>

          <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)] uppercase hidden sm:block">
            {new Date().getFullYear()} Portfolio
          </span>

          <a
            href="#projects"
            className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)] uppercase hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-2 group"
          >
            Selected Work
            <span className="inline-block transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
