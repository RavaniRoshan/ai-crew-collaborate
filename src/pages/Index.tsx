
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import AIResponseSection from "@/components/AIResponseSection";
import KeyFeatures from "@/components/KeyFeatures";
import PricingSection from "@/components/PricingSection";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Function to handle animation on scroll
    const handleAnimatedElements = () => {
      const animatedElements = document.querySelectorAll(
        '.fade-in, .slide-in-left, .slide-in-right, .scale-in'
      );
      
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });
      
      animatedElements.forEach((element) => {
        observerRef.current?.observe(element);
      });
      
      // Handle staggered animations
      const staggerContainers = document.querySelectorAll('.stagger-container');
      
      staggerContainers.forEach((container) => {
        const staggerObserver = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            const items = container.querySelectorAll('.stagger-item');
            
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible');
              }, 100 * index);
            });
          }
        }, { threshold: 0.1 });
        
        staggerObserver.observe(container);
      });
    };

    // Initialize animations after a short delay to ensure DOM is ready
    setTimeout(() => {
      handleAnimatedElements();
    }, 100);
    
    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background dark:bg-background">
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
