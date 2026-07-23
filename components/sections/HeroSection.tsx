'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/lib/data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-[#FAF8F5]">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-40 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Engineer Identity & Name */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-black text-stone-900 tracking-tight leading-[1.15]">
            Devansh Singh Bhadauria
          </h1>
          <p className="text-lg sm:text-xl font-mono text-amber-900 font-semibold">
            Backend Software Engineer & AI Systems Builder
          </p>
        </div>

        {/* First-Person Engineering Narrative */}
        <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-3xl font-sans">
          I design and architect high-scale backend microservices and autonomous AI infrastructure. Currently engineering Elasticsearch full-text search, event-driven SQS pipelines, and Redis caching layers at <span className="text-stone-900 font-semibold">OFB Tech (OfBusiness)</span> for <span className="text-stone-900 font-semibold">5,000+ B2B enterprise clients</span> across <span className="text-stone-900 font-semibold">50+ countries</span>.
        </p>

        {/* Editorial Links (Clean, Engineer-first) */}
        <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
          <a
            href="#experience"
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold rounded-lg transition-all shadow-sm"
          >
            View Experience & Systems ↓
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white hover:bg-stone-100 text-stone-800 font-semibold border border-stone-300 rounded-lg transition-all shadow-sm"
          >
            GitHub ↗
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white hover:bg-stone-100 text-stone-800 font-semibold border border-stone-300 rounded-lg transition-all shadow-sm"
          >
            LinkedIn ↗
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-4 py-2 bg-white hover:bg-stone-100 text-stone-800 font-semibold border border-stone-300 rounded-lg transition-all shadow-sm"
          >
            Email Direct ↗
          </a>
        </div>
      </div>
    </section>
  );
};
