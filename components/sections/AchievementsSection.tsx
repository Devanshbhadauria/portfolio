'use client';

import React from 'react';
import { ACHIEVEMENTS } from '@/lib/data/portfolioData';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const AchievementsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#f5f2ec] relative border-t border-stone-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="emerald" className="mb-3">Honors & Proof of Execution</Badge>
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            Recognitions & Technical Mastery
          </h2>
          <p className="text-stone-600 text-sm mt-2">
            Independent proof of algorithmic problem solving speed and top-tier execution within high-performance engineering teams.
          </p>
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((item) => (
            <Card key={item.id} className="flex flex-col justify-between text-center items-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-300 flex items-center justify-center text-stone-900 font-mono font-bold text-xl shadow-sm">
                {item.iconName === 'award' && '🏆'}
                {item.iconName === 'trophy' && '🥇'}
                {item.iconName === 'star' && '⭐'}
              </div>

              <div>
                <Badge variant="amber" className="mb-2">{item.badge}</Badge>
                <h3 className="text-lg font-bold text-stone-900">{item.title}</h3>
                <div className="text-xs font-mono text-amber-900 font-semibold mt-0.5">{item.organization}</div>
              </div>

              <p className="text-xs text-stone-700 leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
