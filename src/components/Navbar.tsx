
import React, { useState, useEffect } from "react";
import AnimatedButton from "./ui/AnimatedButton";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a
            href="#about"
            className="text-navy hover:text-primary transition-colors font-medium"
          >
            About
          </a>
          <a
            href="#solution"
            className="text-navy hover:text-primary transition-colors font-medium"
          >
            Solution
          </a>
          <a
            href="#market"
            className="text-navy hover:text-primary transition-colors font-medium"
          >
            Market
          </a>
          <a
            href="#team"
            className="text-navy hover:text-primary transition-colors font-medium"
          >
            Team
          </a>
          <a
            href="#connectivity"
            className="text-navy hover:text-primary transition-colors font-medium"
          >
            Connectivity
          </a>
          <a
            href="#contact"
            className="text-navy hover:text-primary transition-colors font-medium"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-navy"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-primary transition-colors text-xl"
              >
                About
              </a>
              <a
                href="#solution"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-primary transition-colors text-xl"
              >
                Solution
              </a>
              <a
                href="#market"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-primary transition-colors text-xl"
              >
                Market
              </a>
              <a
                href="#team"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-primary transition-colors text-xl"
              >
                Team
              </a>
              <a
                href="#connectivity"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-primary transition-colors text-xl"
              >
                Connectivity
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-primary transition-colors text-xl"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <AnimatedButton>Get Started</AnimatedButton>
      </div>
    </header>
  );
};

export default Navbar;
