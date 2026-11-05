import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-heading font-bold text-sm text-[var(--text-primary)]">
            V.S. {personalInfo.fullName}
          </span>

          <span className="font-mono text-[10px] tracking-[0.15em] text-[var(--text-muted)] uppercase">
            &copy; {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </span>

          <span className="font-mono text-[10px] tracking-[0.15em] text-[var(--text-muted)] uppercase">
            Built with React &hearts;
          </span>
        </div>
      </div>
    </footer>
  );
}

