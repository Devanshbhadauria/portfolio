'use client';

import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO, HERO_METRICS, PROJECTS, SKILL_CATEGORIES } from '@/lib/data/portfolioData';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  content: string | React.ReactNode;
}

export const TerminalWidget: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 'welcome-1',
      type: 'system',
      content: 'DevanshOS Shell (darwin-arm64)',
    },
    {
      id: 'welcome-2',
      type: 'system',
      content: 'Type "help" or click command shortcuts below to explore system specs.',
    },
  ]);

  const consoleBoxRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (consoleBoxRef.current) {
      consoleBoxRef.current.scrollTop = consoleBoxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const newLines: TerminalLine[] = [
      ...history,
      { id: Date.now().toString(), type: 'input', content: `$ ${cmdStr}` },
    ];

    switch (trimmed) {
      case 'help':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: (
            <div className="space-y-1 text-slate-300 font-mono text-xs">
              <p className="text-emerald-400 font-bold">Available Commands:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-2">
                <div><span className="text-cyan-400">help</span> - Display system help menu</div>
                <div><span className="text-cyan-400">about</span> - Devansh's engineering profile</div>
                <div><span className="text-cyan-400">projects</span> - List flagship projects</div>
                <div><span className="text-cyan-400">rag-engine</span> - Deep dive: RAG Knowledge Engine</div>
                <div><span className="text-cyan-400">agent-orchestrator</span> - Deep dive: Agent Orchestrator</div>
                <div><span className="text-cyan-400">skills</span> - Stack & technical capabilities</div>
                <div><span className="text-cyan-400">metrics</span> - Verified engineering performance</div>
                <div><span className="text-cyan-400">contact</span> - Direct contact information</div>
                <div><span className="text-cyan-400">clear</span> - Clear terminal buffer</div>
              </div>
            </div>
          ),
        });
        break;

      case 'about':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: (
            <div className="space-y-2 text-slate-300 font-mono text-xs pl-2">
              <p className="text-emerald-400 font-bold">{PERSONAL_INFO.name}</p>
              <p>{PERSONAL_INFO.title}</p>
              <p className="text-slate-400">{PERSONAL_INFO.tagline}</p>
              <p className="text-cyan-400">Current Role: Software Engineer @ OFB Tech (Nexizo.ai)</p>
            </div>
          ),
        });
        break;

      case 'projects':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: (
            <div className="space-y-2 text-slate-300 font-mono text-xs pl-2">
              <p className="text-emerald-400 font-bold">Flagship Architectural Projects:</p>
              {PROJECTS.map((p) => (
                <div key={p.id} className="border-l-2 border-slate-700 pl-3 py-1">
                  <p className="text-cyan-400 font-bold">{p.title} <span className="text-slate-500">[{p.category}]</span></p>
                  <p className="text-slate-400">{p.subtitle}</p>
                  <p className="text-amber-400 text-[11px]">Stack: {p.techStack.join(', ')}</p>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case 'rag-engine':
        const rag = PROJECTS.find((p) => p.id === 'rag-engine');
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: (
            <div className="space-y-1.5 text-slate-300 font-mono text-xs pl-2 bg-slate-900/50 p-2.5 rounded border border-slate-800">
              <p className="text-emerald-400 font-bold">SYSTEM SPEC: {rag?.title}</p>
              <p className="text-slate-300">{rag?.summary}</p>
              <div className="text-amber-400">Key Performance Highlights:</div>
              <ul className="list-disc pl-4 text-slate-400 space-y-1">
                {rag?.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ),
        });
        break;

      case 'agent-orchestrator':
        const agent = PROJECTS.find((p) => p.id === 'agent-orchestrator');
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: (
            <div className="space-y-1.5 text-slate-300 font-mono text-xs pl-2 bg-slate-900/50 p-2.5 rounded border border-slate-800">
              <p className="text-emerald-400 font-bold">SYSTEM SPEC: {agent?.title}</p>
              <p className="text-slate-300">{agent?.summary}</p>
              <div className="text-amber-400">Key Performance Highlights:</div>
              <ul className="list-disc pl-4 text-slate-400 space-y-1">
                {agent?.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ),
        });
        break;

      case 'skills':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: (
            <div className="space-y-3 text-slate-300 font-mono text-xs pl-2">
              <p className="text-emerald-400 font-bold">Technical Capabilities Matrix:</p>
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category}>
                  <p className="text-cyan-400 font-bold">❯ {cat.category}</p>
                  <p className="text-slate-400 pl-3">
                    {cat.skills.map((s) => s.name).join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case 'metrics':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: (
            <div className="space-y-2 text-slate-300 font-mono text-xs pl-2">
              <p className="text-emerald-400 font-bold">Verified Engineering Metrics:</p>
              <div className="grid grid-cols-2 gap-2">
                {HERO_METRICS.map((m) => (
                  <div key={m.label} className="bg-slate-900 p-2 rounded border border-slate-800">
                    <div className="text-cyan-400 font-bold text-sm">{m.value}</div>
                    <div className="text-slate-400 text-[10px]">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ),
        });
        break;

      case 'contact':
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: (
            <div className="space-y-1 text-slate-300 font-mono text-xs pl-2">
              <p className="text-emerald-400 font-bold">Contact Channels:</p>
              <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 underline">{PERSONAL_INFO.email}</a></p>
              <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.github}</a></p>
              <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.linkedin}</a></p>
              <p>Phone: {PERSONAL_INFO.phone}</p>
            </div>
          ),
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newLines.push({
          id: (Date.now() + 1).toString(),
          type: 'error',
          content: `Command not found: "${cmdStr}". Type "help" for a list of supported commands.`,
        });
        break;
    }

    setHistory(newLines);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div className="w-full bg-[#1c1917] border border-stone-800 rounded-xl overflow-hidden shadow-xl shadow-stone-400/20 font-mono text-xs">
      {/* Top Console Bar */}
      <div className="bg-stone-900 px-4 py-2.5 border-b border-stone-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-stone-400 text-[11px]">devansh@portfolio:~ (bash)</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleCommand('clear')}
            className="text-[10px] text-stone-400 hover:text-stone-200 px-2 py-0.5 rounded bg-stone-800 border border-stone-700 cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Output Console Window */}
      <div ref={consoleBoxRef} className="p-4 h-80 overflow-y-auto space-y-3 bg-[#151210]">
        {history.map((line) => (
          <div key={line.id}>
            {line.type === 'input' && (
              <div className="text-emerald-400 font-semibold">{line.content}</div>
            )}
            {line.type === 'system' && (
              <div className="text-slate-400 italic">{line.content}</div>
            )}
            {line.type === 'output' && (
              <div>{line.content}</div>
            )}
            {line.type === 'error' && (
              <div className="text-rose-400">{line.content}</div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Action Chips */}
      <div className="px-4 py-2 bg-slate-900/60 border-t border-b border-slate-800/80 flex flex-wrap gap-1.5">
        <span className="text-[10px] text-slate-500 py-1">Quick run:</span>
        {['help', 'rag-engine', 'agent-orchestrator', 'skills', 'metrics', 'contact'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 rounded text-[10px] border border-slate-700 transition-colors cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Command Input Bar */}
      <div className="p-3 bg-slate-950 flex items-center gap-2">
        <span className="text-emerald-400 font-bold">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type 'help', 'rag-engine', 'skills'..."
          className="w-full bg-transparent text-slate-200 focus:outline-none placeholder-slate-600 font-mono text-xs"
        />
      </div>
    </div>
  );
};
