import React from 'react';
import { PERSONAL_INFO } from '@/lib/data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-stone-200 bg-[#f2ede4] py-12 text-stone-600 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="flex flex-col gap-1 text-center md:text-left">
          <div className="text-stone-900 font-bold tracking-wider text-sm font-sans">
            Devansh Singh Bhadauria
          </div>
          <div className="text-stone-500">
            Backend Architecture • Autonomous AI Systems • Enterprise SaaS
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-800 transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-800 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-amber-800 transition-colors"
          >
            Email
          </a>
        </div>

        {/* Right Info */}
        <div className="text-stone-500 text-center md:text-right text-[11px]">
          © {new Date().getFullYear()} Devansh Singh Bhadauria
        </div>
      </div>
    </footer>
  );
};
