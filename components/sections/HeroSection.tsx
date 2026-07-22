'use client';

import React from 'react';
import { PERSONAL_INFO, HERO_METRICS } from '@/lib/data/portfolioData';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-radial-gradient">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Badges */}
        <div className="inline-flex items-center justify-center gap-2 flex-wrap">
          <Badge variant="emerald">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            Backend & AI Software Engineer
          </Badge>
          <Badge variant="cyan">Distributed Systems & AI Infrastructure</Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Architecting High-Scale <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-700 to-stone-900">
            Backend Systems & AI Infrastructure
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed font-sans">
          Software Engineer at <span className="text-stone-900 font-semibold">OFB Tech (OfBusiness)</span> building SaaS products for 
          <span className="text-amber-800 font-mono font-semibold"> 5,000+ enterprise clients</span> across 
          <span className="text-amber-900 font-mono font-semibold"> 50+ countries</span>. Specializing in autonomous AI agent orchestration, vector RAG pipelines, and sub-second Elasticsearch search systems.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-stone-300/80 max-w-4xl mx-auto">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="p-4 bg-white/70 backdrop-blur-sm border border-stone-200/80 rounded-xl space-y-1 shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-stone-900 tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs text-stone-600 font-sans font-medium">{metric.label}</div>
              {metric.subtext && (
                <div className="text-[10px] text-amber-800 font-mono font-semibold">{metric.subtext}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
