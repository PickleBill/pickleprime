
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShareMatchModal from "./ui/share-modal";
import NavLink from "./ui/NavLink";
import DesktopNav from "./ui/DesktopNav";
import MobileNavButtons from "./ui/MobileNavButtons";
import MobileMenu from "./ui/MobileMenu";
import { Wifi, Network } from "lucide-react";

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
        <a href="/" className="flex items-center group">
          <div className="relative mr-2 rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary to-blue-400 shadow-md overflow-hidden">
            <Network className="absolute text-white w-6 h-6 transform transition-all duration-300 group-hover:scale-0 group-hover:opacity-0" />
            <Wifi className="absolute text-white w-6 h-6 transform transition-all duration-300 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-white opacity-0 rounded-full scale-90 transition-opacity duration-300 group-hover:opacity-10"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-navy leading-tight">SwingNet</span>
            <span className="text-xs text-primary/80 -mt-1 font-medium">Connect. Play. Win.</span>
          </div>
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
