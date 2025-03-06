
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import MobileMenu from "./ui/MobileMenu";
import DesktopNav from "./ui/DesktopNav";
import NavbarAPIButton from "./ui/NavbarAPIButton";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCommunityClick = () => {
    // Handle community click
  };

  const handleScoreboardClick = () => {
    // Handle scoreboard click
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-dark/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/c8c26cf4-e8ff-48db-b3ff-a497749005b2.png"
              alt="Court Visionary"
              className="h-8 md:h-10"
            />
            <span className="font-bold text-white ml-2 text-lg md:text-xl">
              Court Visionary
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            {/* API Key Button */}
            <NavbarAPIButton />
            
            {/* Desktop Navigation */}
            <DesktopNav 
              handleCommunityClick={handleCommunityClick}
              handleScoreboardClick={handleScoreboardClick}
              setShowShareModal={setShowShareModal}
            />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="block lg:hidden text-white p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
        setShowShareModal={setShowShareModal}
      />
    </header>
  );
};

export default Navbar;
