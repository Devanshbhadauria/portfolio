import React from 'react';
import { PERSONAL_INFO } from '@/lib/data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#080b11] py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="flex flex-col gap-1 text-center md:text-left">
          <div className="text-slate-200 font-bold tracking-wider text-sm font-sans">
            Devansh Singh Bhadauria
          </div>
          <div className="text-slate-500">
            Backend Architecture • Autonomous AI Systems • SaaS Engineering
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-emerald-400 transition-colors"
          >
            Email
          </a>
        </div>

        {/* Right Info */}
        <div className="text-slate-500 text-center md:text-right">
          <div>System v1.0 • Built with Next.js 16 & Tailwind v4</div>
          <div className="text-[10px] text-slate-600 mt-0.5">Automated CI/CD via Vercel</div>
        </div>
      </div>
    </footer>
  );
};
