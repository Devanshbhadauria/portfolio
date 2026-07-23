'use client';

import React from 'react';
import { EXPERIENCES, PROJECTS } from '@/lib/data/portfolioData';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const ExperienceSection: React.FC = () => {
  const aiProjects = PROJECTS.filter((p) => p.category === 'ai');

  return (
    <section id="experience" className="py-24 bg-[#FAF8F5] relative border-t border-stone-300/60 space-y-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="cyan">Career & Systems Execution</Badge>
            <span className="text-xs font-mono text-stone-500 font-bold">Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Work Experience & Key Engineering Systems
          </h2>
          <p className="text-stone-600 max-w-2xl text-sm mt-2">
            Scaling high-throughput B2B SaaS infrastructure at OFB Tech, optimizing search performance, and building autonomous AI systems.
          </p>
        </div>

        {/* Part 1: Work Experience Timeline */}
        <div className="space-y-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold">
            01. Professional Experience
          </h3>

          <div className="relative border-l-2 border-stone-300 ml-3 md:ml-4 space-y-10 pl-6 md:pl-8">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-amber-800 group-hover:bg-amber-700 group-hover:scale-125 transition-all shadow-sm"></div>

                <Card className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-xl font-bold text-stone-900">{exp.role}</h4>
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
                    <div className="text-xs font-mono text-stone-500 uppercase tracking-wider font-semibold">Key Deliverables:</div>
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

        {/* Part 2: Key AI Systems & Architecture */}
        <div className="space-y-8 pt-6 border-t border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold">
                02. Flagship AI Engineering Systems
              </h3>
              <h4 className="text-2xl font-bold text-stone-900 mt-1">Autonomous Agent Orchestration & RAG Engines</h4>
            </div>
            <p className="text-xs text-stone-500 max-w-md">
              Custom-built vector retrieval systems and parallel multi-agent frameworks built in Java & Spring Boot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiProjects.map((project) => (
              <Card key={project.id} className="flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="cyan">AI Systems</Badge>
                    {project.metrics && project.metrics[0] && (
                      <span className="text-xs font-mono font-bold text-amber-800">
                        {project.metrics[0].label}: {project.metrics[0].value}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-stone-900">{project.title}</h4>
                  <p className="text-xs text-stone-500 font-mono">{project.subtitle}</p>
                  <p className="text-xs text-stone-700 leading-relaxed">{project.summary}</p>

                  <div className="space-y-1.5 pt-2">
                    <div className="text-[11px] font-mono text-stone-500 font-semibold uppercase tracking-wider">Key Engineering Highlights:</div>
                    <ul className="space-y-1 text-xs text-stone-700">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-800 text-xs">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="slate">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm">
                        GitHub ↗
                      </Button>
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
