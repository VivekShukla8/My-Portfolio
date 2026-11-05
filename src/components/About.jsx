import { motion } from 'framer-motion';
import { aboutText, quickInfo } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const skillPills = ['DSA', 'System Design', 'DBMS'];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 border-t border-[var(--border-color)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Label */}
        <motion.p
          variants={fadeUp}
          className="font-mono uppercase text-[11px] tracking-[0.2em] text-[var(--text-muted)] mb-3"
        >
          About Me
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.85fr)] gap-8 lg:gap-12">
          {/* Left: Text */}
          <div className="min-w-0">
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl font-bold leading-[1.15] text-[var(--text-primary)] mb-5"
            >
              A Curious Developer Who Builds End-to-End Products
            </motion.h2>

            <div className="space-y-4">
              {aboutText.map((paragraph, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-[var(--text-secondary)] text-sm md:text-base leading-[1.8]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Skill Pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-6">
              {skillPills.map((skill) => (
                <span
                  key={skill}
                  className="border border-[var(--border-color)] rounded-full px-4 py-2 font-mono text-[10px] tracking-[0.15em] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Quick Info Card */}
          <motion.div variants={fadeUp} className="min-w-0">
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-5 md:p-6 transition-colors duration-[var(--transition-speed)]">
              <h3 className="font-heading font-bold text-lg mb-4 text-[var(--text-primary)]">
                Quick Info
              </h3>
              <div className="space-y-0">
                {quickInfo.map((info) => (
                  <div
                    key={info.label}
                    className="py-3 border-b border-[var(--border-color)] last:border-b-0 last:pb-0 first:pt-0"
                  >
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2">
                      {info.label}
                    </p>
                    {info.url ? (
                      <a
                        href={info.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--text-primary)] hover:underline underline-offset-4 break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-[var(--text-primary)] break-all">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
