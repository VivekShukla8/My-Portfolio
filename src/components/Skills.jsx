import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  Binary,
  ChartColumnIncreasing,
  ChartLine,
  Database,
  FileSpreadsheet,
  GitBranch,
  PawPrint,
  Route,
  Workflow,
} from 'lucide-react';
import { skills } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const skillFallbackIcons = {
  Zustand: PawPrint,
  Recharts: BarChart3,
  'Data Structures & Algorithms': Binary,
  'System Design': Workflow,
  DBMS: Database,
  'REST API Design': Route,
  Concurrency: GitBranch,
  'Data Analysis': ChartColumnIncreasing,
  'Data Visualization': ChartLine,
  'CSV Data Pipelines': FileSpreadsheet,
};

export default function Skills() {
  const [active, setActive] = useState('All');
  const { isDark } = useTheme();

  const filtered = active === 'All'
    ? skills.items
    : skills.items.filter((s) => s.category === active);

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-[var(--border-color)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Header */}
        <motion.p
          variants={fadeUp}
          className="font-mono uppercase text-[11px] tracking-[0.2em] text-[var(--text-muted)] mb-4"
        >
          Tech Stack
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-heading text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8"
        >
          Skills
        </motion.h2>

        {/* Filter Tabs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap gap-1 mb-8 border-b border-[var(--border-color)] overflow-x-auto"
        >
          {skills.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-[11px] tracking-[0.15em] uppercase px-4 py-3 transition-all duration-300 relative whitespace-nowrap ${
                active === cat
                  ? 'text-[var(--text-primary)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
              }`}
            >
              {cat}
              {active === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--text-primary)]"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Icons Grid */}
        <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill) => {
              const FallbackIcon = skillFallbackIcons[skill.name];

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-3 group cursor-default"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--text-primary)] group-hover:scale-110 transition-all duration-300">
                    {FallbackIcon ? (
                      <FallbackIcon size={32} strokeWidth={1.7} className="text-[var(--text-primary)]" aria-hidden="true" />
                    ) : (
                      <img
                        src={skill.icon}
                        alt=""
                        className={`w-8 h-8 object-contain ${
                          skill.invertOnDark && isDark ? 'invert' : ''
                        }`}
                      />
                    )}
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.1em] text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors text-center">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
