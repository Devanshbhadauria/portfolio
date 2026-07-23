'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { StackSection } from '@/components/sections/StackSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      {/* Navbar */}
      <Navbar />

      {/* Streamlined Main Layout (Proposal A) */}
      <main className="flex-grow">
        <HeroSection />
        <ExperienceSection />
        <StackSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
