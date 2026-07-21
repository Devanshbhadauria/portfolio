'use client';

import React from 'react';
import { EXPERIENCES } from '@/lib/data/portfolioData';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#FAF8F5] relative border-t border-stone-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="cyan">Career Execution</Badge>
            <span className="text-xs font-mono text-stone-500 font-bold">Track Record & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Work Experience & Scale
          </h2>
          <p className="text-stone-600 max-w-xl text-sm mt-2">
            Proven execution in high-growth enterprise SaaS companies, scaling APIs, and optimizing database infrastructure.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-stone-300 ml-4 md:ml-6 space-y-12 pl-6 md:pl-8">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-amber-800 group-hover:bg-amber-700 group-hover:scale-125 transition-all shadow-sm"></div>

              <Card className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">{exp.role}</h3>
                    <div className="text-sm font-semibold text-amber-900 font-mono">
                      {exp.company} <span className="text-stone-500 font-normal">| {exp.location}</span>
                    </div>
                  </div>
                  <Badge variant="slate" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>

                <p className="text-sm text-stone-700 italic">{exp.summary}</p>

                {/* Key Metric Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.metrics.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 rounded bg-amber-100/90 border border-amber-300/80 text-amber-900 text-xs font-mono font-bold"
                    >
                      ✓ {m}
                    </span>
                  ))}
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-stone-500 uppercase tracking-wider font-semibold">Key Contributions:</div>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-800 font-bold shrink-0 mt-0.5">❯</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Used */}
                <div className="pt-4 border-t border-stone-200 flex flex-wrap gap-1.5">
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
