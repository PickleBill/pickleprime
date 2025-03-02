
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SolutionSection from "@/components/SolutionSection";
import HighlightReels from "@/components/HighlightReels";
import MarketSection from "@/components/MarketSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute("href");
      
      if (href && href.startsWith("#") && href !== "#") {
        e.preventDefault();
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: "smooth",
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", handleAnchorLinkClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener("click", handleAnchorLinkClick);
      });
    };
  }, []);

  // Handle direct links to future play scoreboard
  useEffect(() => {
    // Check if hash is #future-play
    if (window.location.hash === '#future-play') {
      // Find the Future Play button and click it
      setTimeout(() => {
        const futurePlayButton = document.querySelector('button[aria-label="Launch Digital Scoreboard"]');
        if (futurePlayButton && futurePlayButton instanceof HTMLElement) {
          futurePlayButton.click();
        }
      }, 500);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <SolutionSection />
      <HighlightReels />
      <MarketSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
