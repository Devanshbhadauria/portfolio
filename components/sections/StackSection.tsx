'use client';

import React from 'react';
import { SKILL_CATEGORIES } from '@/lib/data/portfolioData';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const StackSection: React.FC = () => {
  return (
    <section id="stack" className="py-24 bg-[#f5f2ec] relative border-t border-stone-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="amber">Technical Matrix</Badge>
            <span className="text-xs font-mono text-stone-500 font-bold">Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Technology & System Stack
          </h2>
          <p className="text-stone-600 max-w-2xl text-sm mt-2">
            Production experience across enterprise backend systems, search indexing, distributed messaging, and modern AI engineering workflows.
          </p>
        </div>

        {/* Skill Matrix Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <Card key={cat.category} className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <span className="text-amber-800">❯</span> {cat.category}
                </h3>
                <p className="text-xs text-stone-500 font-mono mt-1">{cat.description}</p>
              </div>

              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 bg-stone-50 border border-stone-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-stone-300 transition-colors"
                  >
                    <div>
                      <div className="text-sm font-bold text-stone-800 flex items-center gap-2">
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
                      <p className="text-xs text-stone-600 mt-0.5">{skill.context}</p>
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
