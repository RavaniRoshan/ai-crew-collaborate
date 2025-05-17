
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import AIResponseSection from "@/components/AIResponseSection";
import KeyFeatures from "@/components/KeyFeatures";
import PricingSection from "@/components/PricingSection";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Function to handle animation on scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-fade-in');
      elements.forEach((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.85) {
          (el as HTMLElement).style.opacity = '1';
        }
      });
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeatureSection />
      <AIResponseSection />
      <KeyFeatures />
      <PricingSection />
      <WaitlistCTA />
      <Footer />
    </div>
  );
};

export default Index;
