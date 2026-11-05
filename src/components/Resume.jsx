import { ExternalLink } from 'lucide-react';
import { education, experience, personalInfo } from '../data/portfolio';

export default function Resume() {
  return (
    <section id="resume" className="py-16 md:py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <p className="font-mono uppercase text-[11px] tracking-[0.2em] text-[var(--text-muted)] mb-2">
              Credentials
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              Resume
            </h2>
          </div>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] border border-[var(--border-color)] rounded-full px-5 py-3 text-[var(--text-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] hover:border-[var(--text-primary)] transition-all duration-300"
          >
            Download Resume
            <ExternalLink size={14} />
          </a>
        </div>

        <h3 className="font-heading text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-1">
          Experience
        </h3>
        <div className="mt-4 mb-10">
          {experience.map((job) => (
            <div
              key={job.role}
              className="grid grid-cols-1 md:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] gap-2 md:gap-8 py-6 md:py-7 border-t border-[var(--border-color)] border-b"
            >
              <span className="font-mono text-sm text-[var(--text-muted)]">{job.period}</span>
              <div className="min-w-0">
                <h4 className="font-heading text-lg md:text-xl font-bold text-[var(--text-primary)] mb-1">
                  {job.role}
                </h4>
                <p className="text-[var(--text-secondary)] text-sm mb-3">{job.org}</p>
                <ul className="mt-4 space-y-2 pl-5 text-sm leading-relaxed text-[var(--text-secondary)] list-disc marker:text-[var(--text-muted)]">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-heading text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-1">
          Education
        </h3>

        <div className="mt-4">
          {education.map((edu, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] gap-2 md:gap-8 py-6 md:py-7 border-t border-[var(--border-color)] last:border-b"
            >
              <div>
                <span className="font-mono text-sm text-[var(--text-muted)]">
                  {edu.period}
                </span>
              </div>

              <div className="min-w-0">
                <h4 className="font-heading text-lg md:text-xl font-bold text-[var(--text-primary)] mb-1">
                  {edu.degree}
                </h4>
                <p className="text-[var(--text-secondary)] text-sm mb-3">
                  {edu.institution}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-6">
                  <span className="font-mono text-[11px] tracking-[0.1em] text-[var(--text-muted)]">
                    {edu.details}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.1em] text-[var(--text-primary)] font-medium">
                    {edu.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
