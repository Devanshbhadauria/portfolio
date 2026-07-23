'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/lib/data/portfolioData';
import { Button } from '@/components/ui/Button';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience & Systems', href: '#experience' },
    { name: 'Tech Stack', href: '#stack' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/90 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center font-mono font-bold text-amber-400 group-hover:bg-stone-800 transition-all shadow-sm">
            DSB
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-stone-900 text-sm tracking-wide group-hover:text-amber-800 transition-colors">
              Devansh Singh Bhadauria
            </span>
            <span className="text-[10px] font-mono text-stone-500">Backend & AI Engineer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Status Pill & Action */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-[11px] font-mono text-stone-700 shadow-sm shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>{PERSONAL_INFO.statusText}</span>
          </div>

          <a href={`mailto:${PERSONAL_INFO.email}`}>
            <Button variant="primary" size="sm">
              Get in Touch
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};
