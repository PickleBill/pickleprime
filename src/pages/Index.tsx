
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SolutionSection from "@/components/SolutionSection";
import HighlightReels from "@/components/HighlightReels";
import MarketSection from "@/components/MarketSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ShareMatchModal from "@/components/ui/ShareMatchModal";
import AdvancedShareModal from "@/components/ui/AdvancedShareModal";
import ConnectivitySection from "@/components/ConnectivitySection";
import SocialMediaDashboard from "@/components/SocialMediaDashboard";

const Index = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showAdvancedShareModal, setShowAdvancedShareModal] = useState(false);
  
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
            top: targetElement.offsetTop - 80,
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

  useEffect(() => {
    if (window.location.hash === '#future-play') {
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
      <ConnectivitySection 
        openShareModal={() => setShowShareModal(true)} 
        openAdvancedShareModal={() => setShowAdvancedShareModal(true)}
      />
      <SocialMediaDashboard 
        openShareModal={() => setShowShareModal(true)}
        openAdvancedShareModal={() => setShowAdvancedShareModal(true)}
      />
      <TeamSection />
      <ContactSection />
      <Footer />
      
      <ShareMatchModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
      />
      
      <AdvancedShareModal
        isOpen={showAdvancedShareModal}
        onClose={() => setShowAdvancedShareModal(false)}
      />
    </div>
  );
};

export default Index;
