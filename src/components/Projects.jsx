import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="mb-8 md:mb-10"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono uppercase text-[11px] tracking-[0.2em] text-[var(--text-muted)] mb-4"
          >
            Selected Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl font-bold text-[var(--text-primary)]"
          >
            Projects
          </motion.h2>
        </motion.div>

        {/* Project List */}
        <div>
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="border-t border-[var(--border-color)] pt-8 pb-12 md:pt-10 md:pb-14"
            >
              {/* Top Row: Number + Title + Arrow */}
              <motion.div
                variants={fadeUp}
                className="flex items-start justify-between gap-6 mb-8"
              >
                <div className="flex items-start gap-4 md:gap-8">
                  <span className="font-mono text-sm text-[var(--text-muted)] pt-2 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)] mt-2">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] hover:border-[var(--text-primary)] transition-all duration-300 mt-1"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </motion.div>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="text-[var(--text-secondary)] text-sm md:text-base leading-[1.8] max-w-2xl pl-0 md:pl-16 mb-8"
              >
                {project.description}
              </motion.p>

              {/* Tech + GitHub */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-2 pl-0 md:pl-16 mb-6"
              >
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-[0.1em] border border-[var(--border-color)] rounded-full px-3 py-1.5 text-[var(--text-muted)]"
                  >
                    {t}
                  </span>
                ))}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors ml-1"
                >
                  <GithubIcon size={14} />
                  View Code
                </a>
              </motion.div>

              {/* Project Image */}
              <motion.div
                variants={fadeUp}
                className="pl-0 md:pl-16 rounded-xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[220px] md:h-[300px] lg:h-[340px] object-cover object-top hover:scale-[1.03] transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
