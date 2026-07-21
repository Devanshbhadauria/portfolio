'use client';

import React, { useState } from 'react';

interface FlowNode {
  id: string;
  name: string;
  role: string;
  latency: string;
  detail: string;
  badge: string;
}

const RAG_FLOW_NODES: FlowNode[] = [
  {
    id: 'input',
    name: '1. Document & Query Input',
    role: 'PDF Parsing & Ingestion',
    latency: '5ms',
    detail: 'Ingests unstructured enterprise PDF documents and extracts raw text streams.',
    badge: 'Java / Spring Boot',
  },
  {
    id: 'chunker',
    name: '2. Recursive Semantic Chunker',
    role: 'Boundary Preserving Chunking',
    latency: '12ms',
    detail: 'Splits text dynamically along semantic sentence boundaries. Boosts context precision by +35%.',
    badge: 'Algorithm (+35% Acc)',
  },
  {
    id: 'embeddings',
    name: '3. Vector Embedding Generator',
    role: 'OpenAI text-embedding-3',
    latency: '45ms',
    detail: 'Generates 1536-dimensional dense vector embeddings per text chunk.',
    badge: 'OpenAI API',
  },
  {
    id: 'vector-store',
    name: '4. MongoDB Atlas Vector Search',
    role: 'ANN HNSW Similarity Index',
    latency: '18ms',
    detail: 'Executes sub-100ms Approximate Nearest Neighbor (ANN) vector retrieval.',
    badge: 'MongoDB Vector',
  },
  {
    id: 'synthesis',
    name: '5. LLM Context Prompt Generator',
    role: 'Grounding & Response Synthesis',
    latency: '85ms',
    detail: 'Injects retrieved context into structured LLM prompt to output hallucination-free answer.',
    badge: 'Context Injection',
  },
];

export const ArchitectureFlowVisualizer: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('chunker');
  const [simulating, setSimulating] = useState(false);

  const activeNode = RAG_FLOW_NODES.find((n) => n.id === activeNodeId) || RAG_FLOW_NODES[1];

  const handleSimulate = () => {
    setSimulating(true);
    let index = 0;
    const interval = setInterval(() => {
      if (index < RAG_FLOW_NODES.length) {
        setActiveNodeId(RAG_FLOW_NODES[index].id);
        index++;
      } else {
        clearInterval(interval);
        setSimulating(false);
      }
    }, 600);
  };

  return (
    <div className="bg-white border border-stone-300 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
      {/* Visualizer Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping"></span>
            <span className="text-xs font-mono text-stone-500 uppercase tracking-wider font-bold">Interactive Architecture Sandbox</span>
          </div>
          <h3 className="text-xl font-bold text-stone-900 mt-1">RAG Knowledge Engine Pipeline</h3>
        </div>

        <button
          onClick={handleSimulate}
          disabled={simulating}
          className="inline-flex items-center gap-2 px-4 py-2 bg-amber-900 hover:bg-amber-800 text-stone-50 rounded-lg text-xs font-mono font-bold transition-all shadow-sm disabled:opacity-50 cursor-pointer"
        >
          <svg className={`w-4 h-4 ${simulating ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{simulating ? 'Running Data Packets...' : 'Simulate Vector Query'}</span>
        </button>
      </div>

      {/* Interactive Step Nodes Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {RAG_FLOW_NODES.map((node) => {
          const isActive = node.id === activeNodeId;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNodeId(node.id)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-amber-900 text-stone-50 border-amber-900 shadow-md scale-105'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
              }`}
            >
              <div className="text-[10px] font-mono opacity-80 uppercase tracking-wide">Node {node.id}</div>
              <div className="text-xs font-bold mt-1 line-clamp-1">{node.name.split('. ')[1]}</div>
              <div className={`text-[10px] font-mono mt-1 ${isActive ? 'text-amber-200 font-bold' : 'text-stone-500'}`}>
                ⏱ {node.latency}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Details Box */}
      <div className="bg-[#FAF8F5] border border-stone-300 rounded-xl p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-sm font-bold text-stone-900 flex items-center gap-2">
            <span>{activeNode.name}</span>
            <span className="px-2 py-0.5 rounded bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-mono font-bold">
              {activeNode.badge}
            </span>
          </div>
          <div className="text-xs font-mono text-stone-500">
            Pipeline Latency Contribution: <span className="text-stone-900 font-bold">{activeNode.latency}</span>
          </div>
        </div>

        <p className="text-xs text-stone-700 leading-relaxed font-sans">
          {activeNode.detail}
        </p>

        <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-[11px] font-mono text-stone-500">
          <span>Component Status: <strong className="text-emerald-700">OPTIMAL</strong></span>
          <span>Click any node above to inspect pipeline telemetry</span>
        </div>
      </div>
    </div>
  );
};
