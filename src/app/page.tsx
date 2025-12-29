"use client"
import React, { useEffect } from 'react';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import BenefitsSection from '@/components/landing/BenefitsSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import PricingSection from '@/components/landing/PricingSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import PortfolioSection from '@/components/landing/PortfolioSection';
import UrgencySection from '@/components/landing/UrgencySection';
import FAQSection from '@/components/landing/FAQSection';
import ContactForm from '@/components/landing/ContactForm';
import FinalCTASection from '@/components/landing/FinalCTASection';
import FooterSection from '@/components/landing/FooterSection';
import WhatsAppButton from '@/components/landing/WhatsAppButton';

export default function Home() {
  useEffect(() => {
    // Verifica se há hash na URL após o carregamento
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace('#', '');
      // Aguarda a página carregar completamente
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Limpa o hash da URL após a rolagem
          window.history.replaceState(null, '', window.location.pathname);
        }
      }, 500);
    }
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Navigation */}
      <Header />
      
      {/* Hero Section */}
      <div id="hero">
        <HeroSection onScrollToPricing={scrollToPricing} />
      </div>
      
      {/* Problem / Pain Points */}
      <ProblemSection />
      
      {/* Benefits */}
      <div id="benefits">
        <BenefitsSection />
      </div>
      
      {/* How It Works */}
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      
      {/* Pricing - already has id="pricing" inside component */}
      <PricingSection />
      
      {/* Testimonials 
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      */}

      
      {/* Portfolio */}
      <div id="portfolio">
        <PortfolioSection />
      </div>
      
      {/* Urgency / Limited Offer */}
      <UrgencySection />
      
      {/* FAQ */}
      <div id="faq">
        <FAQSection />
      </div>
      
      {/* Contact Form */}
      <ContactForm />
      
      {/* Final CTA */}
      <FinalCTASection />
      
      {/* Footer */}
      <FooterSection />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}