'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/lib/data/portfolioData';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] relative border-t border-stone-300/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center p-8 sm:p-12 space-y-8 bg-white border-stone-300 shadow-md shadow-stone-200/50">
          <div className="space-y-4 max-w-2xl mx-auto">
            <Badge variant="emerald" className="mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              Open for High-Impact Roles
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Let&apos;s Build Something Scalable
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Whether you are looking for a high-impact backend & AI engineer, scaling distributed microservices, or building autonomous AI infrastructure—I&apos;d love to connect.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={handleCopyEmail}
              icon={
                copied ? (
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-stone-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2h2a2 2 0 002 2m0 0h2a2 2 0 002 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                )
              }
            >
              {copied ? 'Email Address Copied!' : 'Copy Email Address'}
            </Button>

            <a href={`mailto:${PERSONAL_INFO.email}`}>
              <Button variant="secondary" size="lg">
                Send Direct Mail ↗
              </Button>
            </a>
          </div>

          {/* Direct Channels */}
          <div className="pt-8 border-t border-stone-200 flex flex-wrap items-center justify-center gap-8 font-mono text-xs text-stone-600">
            <div>
              <span className="text-stone-400">Email:</span>{' '}
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-amber-900 font-semibold hover:underline">
                {PERSONAL_INFO.email}
              </a>
            </div>
            <div>
              <span className="text-stone-400">GitHub:</span>{' '}
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-amber-900 font-semibold hover:underline">
                github.com/Devanshbhadauria
              </a>
            </div>
            <div>
              <span className="text-stone-400">LinkedIn:</span>{' '}
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-amber-900 font-semibold hover:underline">
                linkedin.com/in/devansh-bhadauria
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
