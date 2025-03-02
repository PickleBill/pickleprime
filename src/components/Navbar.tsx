
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShareMatchModal from "./ui/share-modal";
import NavLink from "./ui/NavLink";
import DesktopNav from "./ui/DesktopNav";
import MobileNavButtons from "./ui/MobileNavButtons";
import MobileMenu from "./ui/MobileMenu";

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

        {/* Desktop Navigation */}
        <DesktopNav 
          handleCommunityClick={handleCommunityClick}
          handleScoreboardClick={handleScoreboardClick}
          setShowShareModal={setShowShareModal}
        />

        {/* Mobile Nav Buttons */}
        <MobileNavButtons 
          setIsMenuOpen={setIsMenuOpen} 
          setShowShareModal={setShowShareModal} 
        />

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMenuOpen} 
          setIsOpen={setIsMenuOpen} 
          setShowShareModal={setShowShareModal} 
        />
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
