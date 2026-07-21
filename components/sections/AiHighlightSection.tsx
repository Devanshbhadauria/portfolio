'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const AiHighlightSection: React.FC = () => {
  return (
    <section id="ai-engine" className="py-24 bg-[#0a0d15] relative border-t border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="cyan">AI Performance Engine</Badge>
              <span className="text-xs font-mono text-slate-400">Autonomous Agents & RAG Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              AI Engineering & Autonomous Workflows
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm font-sans">
            Moving beyond simple prompt wrappers to engineer scalable vector retrieval, multi-agent thread pools, and production-grade AI pipelines.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Intelligent RAG Knowledge Engine */}
          <Card className="flex flex-col justify-between border-emerald-500/20 hover:border-emerald-500/50">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="emerald">Vector Search & RAG</Badge>
                <span className="text-xs font-mono text-emerald-400 font-bold">+35% Accuracy Gain</span>
              </div>

              <h3 className="text-xl font-bold text-white">Intelligent RAG Knowledge Engine</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Context-aware vector querying over high-volume unstructured PDF documents. Built with Java, Spring Boot, OpenAI APIs, and MongoDB Atlas Vector Search.
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-slate-400 font-semibold">Architectural Highlights:</div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">❯</span>
                    <span><strong>Recursive Text-Chunking:</strong> Engineered semantic boundary chunking to eliminate fragmented prompt context.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">❯</span>
                    <span><strong>MongoDB Atlas Vector Search:</strong> High-dimensional embeddings management with sub-100ms retrieval speed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">❯</span>
                    <span><strong>Prompt Context Injection:</strong> Clean Spring Boot context formatting preventing hallucination.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-slate-800">
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="slate">Java</Badge>
                <Badge variant="slate">Spring Boot</Badge>
                <Badge variant="slate">OpenAI API</Badge>
                <Badge variant="slate">MongoDB Vector</Badge>
              </div>
              <a href="https://github.com/Devanshbhadauria" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm">
                  View Repository →
                </Button>
              </a>
            </div>
          </Card>

          {/* Card 2: Agent Orchestrator – Travel Planning Assistant */}
          <Card className="flex flex-col justify-between border-cyan-500/20 hover:border-cyan-500/50">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="cyan">Multi-Agent Systems</Badge>
                <span className="text-xs font-mono text-cyan-400 font-bold">+38% Speedup</span>
              </div>

              <h3 className="text-xl font-bold text-white">Agent Orchestrator – Travel Assistant</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Multi-agent orchestration system processing natural language requests across a synchronized chain of 5+ specialized agents (Parser, Validator, Provider, Aggregator, Formatter).
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-slate-400 font-semibold">Architectural Highlights:</div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">❯</span>
                    <span><strong>Parallel Thread Pool Execution:</strong> Simultaneous execution of independent provider agents, cutting response time by 38%.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">❯</span>
                    <span><strong>Partial Failure Handling:</strong> Graceful degradation strategy returning best-effort results during provider timeout.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">❯</span>
                    <span><strong>Immutable Context Pipeline:</strong> Eliminates race conditions and maintains complete step execution trace.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-slate-800">
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="slate">Multithreading</Badge>
                <Badge variant="slate">ExecutorService</Badge>
                <Badge variant="slate">Java</Badge>
                <Badge variant="slate">5+ Agents</Badge>
              </div>
              <a href="https://github.com/Devanshbhadauria" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm">
                  View Repository →
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
