import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import SkillsSection from '@/app/components/SkillsSection';
import DesignProcessSection from '@/app/components/DesignProcessSection';
import AchievementsSection from '@/app/components/AchievementsSection';
import ContactSection from '@/app/components/ContactSection';
import CursorGlow from '@/app/components/CursorGlow';

export default function HomePage() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <DesignProcessSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}