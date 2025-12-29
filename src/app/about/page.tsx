"use client"
import React, { useEffect } from 'react';
import Header from '@/components/landing/Header';
import AboutHero from '@/components/about/AboutHero';
import OurEssence from '@/components/about/OurEssence';
import MissionVisionValues from '@/components/about/MissionVisionValues';
import WhyWeExist from '@/components/about/WhyWeExist';
import Differentials from '@/components/about/Differentials';
import FounderSection from '@/components/about/FounderSection';
import ProcessTimeline from '@/components/about/ProcessTimeline';
import AboutCTA from '@/components/about/AboutCTA';
import FooterSection from '@/components/landing/FooterSection';
import WhatsAppButton from '@/components/landing/WhatsAppButton';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Hero */}
      <AboutHero />
      
      {/* Nossa Essência */}
      <OurEssence />
      
      {/* Missão, Visão e Valores */}
      <MissionVisionValues />
      
      {/* Por que existimos */}
      <WhyWeExist />
      
      {/* Diferenciais */}
      <Differentials />
      
      {/* Fundador */}
      <FounderSection />
      
      {/* Timeline / Processo */}
      <ProcessTimeline />
      
      {/* CTA Final */}
      <AboutCTA />
      
      {/* Footer */}
      <FooterSection />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}