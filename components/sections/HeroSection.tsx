'use client';

import React from 'react';
import { PERSONAL_INFO, HERO_METRICS } from '@/lib/data/portfolioData';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { TerminalWidget } from '@/components/interactive/TerminalWidget';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-radial-gradient">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Personal Positioning & Metrics */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="emerald">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Backend & AI Software Engineer
              </Badge>
              <Badge variant="cyan">Future Startup Founder</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Architecting High-Scale <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">
                Backend Systems & AI Infrastructure
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Software Engineer at <span className="text-white font-medium">OFB Tech (OfBusiness)</span> building SaaS products for 
              <span className="text-emerald-400 font-mono"> 5,000+ enterprise clients</span> across 
              <span className="text-cyan-400 font-mono"> 50+ countries</span>. Specializing in autonomous AI agent orchestration, vector RAG pipelines, and sub-second Elasticsearch systems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#ai-engine">
                <Button
                  variant="primary"
                  size="lg"
                  icon={
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  }
                >
                  Explore AI Systems
                </Button>
              </a>

              <a href="#projects">
                <Button variant="secondary" size="lg">
                  View Architecture
                </Button>
              </a>

              <a href={`mailto:${PERSONAL_INFO.email}`}>
                <Button variant="outline" size="lg">
                  Contact Direct
                </Button>
              </a>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
              {HERO_METRICS.map((metric) => (
                <div key={metric.label} className="space-y-1">
                  <div className="text-2xl font-bold font-mono text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-400 font-sans">{metric.label}</div>
                  {metric.subtext && (
                    <div className="text-[10px] text-emerald-400/90 font-mono">{metric.subtext}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Terminal Preview */}
          <div className="lg:col-span-5">
            <TerminalWidget />
          </div>
        </div>
      </div>
    </section>
  );
};
