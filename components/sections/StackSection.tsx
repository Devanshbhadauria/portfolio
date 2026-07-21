'use client';

import React from 'react';
import { SKILL_CATEGORIES } from '@/lib/data/portfolioData';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const StackSection: React.FC = () => {
  return (
    <section id="stack" className="py-24 bg-[#0a0d15] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="amber">Technical Matrix</Badge>
            <span className="text-xs font-mono text-slate-400 font-bold">Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technology & System Stack
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm mt-2">
            Production experience across enterprise backend systems, search indexing, distributed messaging, and modern AI engineering workflows.
          </p>
        </div>

        {/* Skill Matrix Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <Card key={cat.category} className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="text-emerald-400">❯</span> {cat.category}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">{cat.description}</p>
              </div>

              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 bg-slate-900/70 border border-slate-800/80 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-slate-700 transition-colors"
                  >
                    <div>
                      <div className="text-sm font-bold text-slate-200 flex items-center gap-2">
                        {skill.name}
                        {skill.badge && (
                          <Badge
                            variant={
                              skill.badge === 'AI'
                                ? 'cyan'
                                : skill.badge === 'Core'
                                ? 'emerald'
                                : 'amber'
                            }
                          >
                            {skill.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{skill.context}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
