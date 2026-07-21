'use client';

import React from 'react';
import { EXPERIENCES } from '@/lib/data/portfolioData';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0b0f17] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="cyan">Career Execution</Badge>
            <span className="text-xs font-mono text-slate-400 font-bold">Track Record & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Scale
          </h2>
          <p className="text-slate-400 max-w-xl text-sm mt-2">
            Proven execution in high-growth enterprise SaaS companies, scaling APIs, and optimizing database infrastructure.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12 pl-6 md:pl-8">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-emerald-500 group-hover:bg-emerald-400 group-hover:scale-125 transition-all"></div>

              <Card className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="text-sm font-semibold text-emerald-400 font-mono">
                      {exp.company} <span className="text-slate-500 font-normal">| {exp.location}</span>
                    </div>
                  </div>
                  <Badge variant="slate" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>

                <p className="text-sm text-slate-300 italic">{exp.summary}</p>

                {/* Key Metric Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.metrics.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold"
                    >
                      ✓ {m}
                    </span>
                  ))}
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Contributions:</div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold shrink-0 mt-0.5">❯</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Used */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {exp.skillsUsed.map((skill) => (
                    <Badge key={skill} variant="slate">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
