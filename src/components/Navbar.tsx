
import React, { useState, useEffect } from "react";
import { Menu, X, Activity, Share2 } from "lucide-react";
import AnimatedButton from "./ui/AnimatedButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-navy">
            Pickle<span className="text-primary">Bills</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-navy/80 hover:text-primary transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#solution"
            className="text-navy/80 hover:text-primary transition-colors duration-300"
          >
            Solution
          </a>
          <a
            href="#market"
            className="text-navy/80 hover:text-primary transition-colors duration-300"
          >
            Benefits
          </a>
          <a
            href="#team"
            className="text-navy/80 hover:text-primary transition-colors duration-300"
          >
            Team
          </a>
          <Link
            to="/scoreboard"
            className="text-navy/80 hover:text-primary transition-colors duration-300 flex items-center gap-1.5"
          >
            <Activity className="w-4 h-4" />
            <span>Live Scoreboard</span>
          </Link>
          <button
            onClick={() => setShowShareModal(true)}
            className="text-navy/80 hover:text-primary transition-colors duration-300 flex items-center gap-1.5"
            aria-label="Share"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
          <AnimatedButton variant="primary" size="sm" withArrow>
            Get Started
          </AnimatedButton>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-navy"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="text-navy py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#solution"
              className="text-navy py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Solution
            </a>
            <a
              href="#market"
              className="text-navy py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#team"
              className="text-navy py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </a>
            <Link
              to="/scoreboard"
              className="text-navy py-2 border-b border-gray-100 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Activity className="w-4 h-4" />
              <span>Live Scoreboard</span>
            </Link>
            <button
              className="text-navy py-2 border-b border-gray-100 flex items-center gap-2 w-full text-left"
              onClick={() => {
                setIsMenuOpen(false);
                setShowShareModal(true);
              }}
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
            <AnimatedButton
              variant="primary"
              size="sm"
              className="w-full"
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById("contact")?.scrollIntoView();
              }}
            >
              Get Started
            </AnimatedButton>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-5 relative animate-scale-in">
            <button 
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowShareModal(false)}
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-semibold mb-4">Share PickleBills</h3>
            <p className="text-gray-600 mb-4">Share our platform with your friends and networks:</p>
            
            <div className="grid grid-cols-3 gap-3 mb-5">
              <button className="bg-[#1DA1F2] text-white p-2 rounded-md hover:opacity-90 transition-opacity flex flex-col items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
                <span className="text-xs">Twitter</span>
              </button>
              <button className="bg-[#4267B2] text-white p-2 rounded-md hover:opacity-90 transition-opacity flex flex-col items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8v-7h-2v-3h2V9.5C12 7.57 13.57 6 15.5 6H18v3h-2c-.55 0-1 .45-1 1v2h3v3h-3V21h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                </svg>
                <span className="text-xs">Facebook</span>
              </button>
              <button className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white p-2 rounded-md hover:opacity-90 transition-opacity flex flex-col items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 18c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zm-2-9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-1-2a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1zm5 4a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm-5 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1z" />
                </svg>
                <span className="text-xs">Instagram</span>
              </button>
            </div>
            
            <div className="border-t pt-4 mt-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Share via Link</h4>
                <button className="text-primary text-sm font-medium">Copy Link</button>
              </div>
              <div className="flex">
                <input 
                  type="text" 
                  value="https://picklebills.com" 
                  readOnly
                  className="flex-1 border rounded-l-md py-2 px-3 bg-gray-50 text-sm"
                />
                <button className="bg-primary text-white px-4 rounded-r-md text-sm font-medium">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
