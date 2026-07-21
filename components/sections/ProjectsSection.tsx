'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/lib/data/portfolioData';
import { Project } from '@/lib/types/portfolio';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'backend' | 'saas'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  return (
    <section id="projects" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="indigo">Architecture & Products</Badge>
              <span className="text-xs font-mono text-stone-500">System Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Flagship Projects & Systems
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-stone-200/70 border border-stone-300/80 rounded-lg font-mono text-xs">
            {[
              { id: 'all', label: 'All Systems' },
              { id: 'ai', label: 'AI & Agents' },
              { id: 'backend', label: 'Backend Architecture' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-stone-900 text-stone-50 font-semibold shadow-sm'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-300/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant={project.category === 'ai' ? 'cyan' : 'emerald'}>
                    {project.category === 'ai' ? 'AI / ML System' : 'Backend Infra'}
                  </Badge>
                  {project.metrics && project.metrics[0] && (
                    <span className="text-xs font-mono font-bold text-amber-800">
                      {project.metrics[0].label}: {project.metrics[0].value}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-stone-900 hover:text-amber-800 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs text-stone-500 font-mono">
                  {project.subtitle}
                </p>

                <p className="text-sm text-stone-700 line-clamp-3">
                  {project.summary}
                </p>

                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] font-mono text-stone-400 uppercase tracking-wider font-semibold">Key Highlights:</div>
                  <ul className="space-y-1 text-xs text-stone-700">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-800 text-xs">▸</span>
                        <span className="line-clamp-2">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="slate">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Button
                    variant="terminal"
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                  >
                    Inspect Architecture
                  </Button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-stone-600 hover:text-stone-900 transition-colors"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Architecture Deep Dive Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          subtitle={selectedProject.subtitle}
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-mono text-amber-800 font-bold uppercase mb-2">System Overview</h4>
              <p className="text-stone-700 text-sm leading-relaxed">{selectedProject.summary}</p>
            </div>

            <div>
              <h4 className="text-sm font-mono text-amber-800 font-bold uppercase mb-2">Architectural Accomplishments</h4>
              <ul className="space-y-2 text-sm text-stone-700">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 bg-stone-50 p-3 rounded border border-stone-200">
                    <span className="text-amber-800 font-bold">0{i + 1}.</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedProject.metrics && (
              <div>
                <h4 className="text-sm font-mono text-amber-800 font-bold uppercase mb-2">Performance & Impact Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  {selectedProject.metrics.map((m) => (
                    <div key={m.label} className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-center">
                      <div className="text-2xl font-bold font-mono text-amber-900">{m.value}</div>
                      <div className="text-xs text-stone-500 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="text-sm font-mono text-amber-800 font-bold uppercase mb-2">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <Badge key={tech} variant="cyan">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {selectedProject.githubUrl && (
              <div className="pt-4 border-t border-stone-200 flex justify-end">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="md">
                    Open GitHub Repository ↗
                  </Button>
                </a>
              </div>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
};
