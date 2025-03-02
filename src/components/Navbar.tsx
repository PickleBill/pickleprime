
import React, { useState, useEffect } from "react";
import AnimatedButton from "./ui/AnimatedButton";
import { useNavigate } from "react-router-dom";
import ShareMatchModal from "./ui/ShareMatchModal";
import { Menu, X, Share2 } from "lucide-react";

// Create a NavLink component to reduce repetition
const NavLink = ({ 
  href, 
  label, 
  onClick, 
  isMobile = false 
}: { 
  href: string; 
  label: string; 
  onClick?: (e: React.MouseEvent) => void;
  isMobile?: boolean;
}) => {
  const baseClasses = isMobile 
    ? "text-white hover:text-primary transition-colors text-xl"
    : "text-navy hover:text-primary transition-colors font-medium";
  
  return (
    <a
      href={href}
      onClick={onClick}
      className={baseClasses}
    >
      {label}
    </a>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle scoreboard navigation
  const handleScoreboardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/scoreboard');
  };

  const handleCommunityClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowShareModal(true);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/swingnet-logo.svg"
            alt="SwingNet Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="font-bold text-xl text-navy">SwingNet</span>
        </a>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink href="#about" label="About" />
          <NavLink href="#solution" label="Solution" />
          <NavLink href="#market" label="Market" />
          <NavLink href="#team" label="Team" />
          <NavLink href="#connectivity" label="Community" onClick={handleCommunityClick} />
          <NavLink href="#scoreboard" label="Scoreboard" onClick={handleScoreboardClick} />
          <NavLink href="#contact" label="Contact" />
        </nav>

        {/* Share button - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setShowShareModal(true)}
            className="flex items-center gap-2 text-navy hover:text-primary transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
          <AnimatedButton>Get Started</AnimatedButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setShowShareModal(true)}
            className="text-navy mr-2"
            aria-label="Share Match Update"
          >
            <Share2 className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-navy"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 bg-navy-dark bg-opacity-95 backdrop-blur-sm transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:hidden`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
              <NavLink href="#about" label="About" isMobile onClick={() => setIsMenuOpen(false)} />
              <NavLink href="#solution" label="Solution" isMobile onClick={() => setIsMenuOpen(false)} />
              <NavLink href="#market" label="Market" isMobile onClick={() => setIsMenuOpen(false)} />
              <NavLink href="#team" label="Team" isMobile onClick={() => setIsMenuOpen(false)} />
              <NavLink 
                href="#connectivity" 
                label="Community" 
                isMobile
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  setShowShareModal(true);
                }} 
              />
              <NavLink 
                href="#scoreboard" 
                label="Scoreboard" 
                isMobile
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  navigate('/scoreboard');
                }} 
              />
              <NavLink href="#contact" label="Contact" isMobile onClick={() => setIsMenuOpen(false)} />
              
              <AnimatedButton onClick={() => setIsMenuOpen(false)}>
                Get Started
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>

      {/* Share Match Modal */}
      <ShareMatchModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
      />
    </header>
  );
};

export default Navbar;
