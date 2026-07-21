'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AiHighlightSection } from '@/components/sections/AiHighlightSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { StackSection } from '@/components/sections/StackSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { TerminalWidget } from '@/components/interactive/TerminalWidget';
import { Modal } from '@/components/ui/Modal';

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      {/* Navbar */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Sections */}
      <main className="flex-grow">
        <HeroSection />
        <AiHighlightSection />
        <ProjectsSection />
        <StackSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dedicated Command Terminal Drawer / Modal */}
      {isTerminalOpen && (
        <Modal
          isOpen={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
          title="DevanshOS Command Console"
          subtitle="Interactive CLI for exploring system architecture & engineer specs"
        >
          <div className="pt-2">
            <TerminalWidget />
          </div>
        </Modal>
      )}
    </div>
  );
}
