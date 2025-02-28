
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AnimatedButton from "./ui/AnimatedButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            Market
          </a>
          <a
            href="#team"
            className="text-navy/80 hover:text-primary transition-colors duration-300"
          >
            Team
          </a>
          <AnimatedButton variant="primary" size="sm" withArrow>
            Get in Touch
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
              Market
            </a>
            <a
              href="#team"
              className="text-navy py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </a>
            <AnimatedButton
              variant="primary"
              size="sm"
              className="w-full"
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById("contact")?.scrollIntoView();
              }}
            >
              Get in Touch
            </AnimatedButton>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
