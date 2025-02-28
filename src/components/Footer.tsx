
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold">
                Pickle<span className="text-primary">Bills</span>
              </span>
            </div>
            <p className="text-white/70 max-w-md">
              Revolutionizing racket sports with AI-powered analytics, instant highlight reels, and community engagement—without building a single court.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#solution" className="text-white/70 hover:text-primary transition-colors">
                  Solution
                </a>
              </li>
              <li>
                <a href="#market" className="text-white/70 hover:text-primary transition-colors">
                  Market
                </a>
              </li>
              <li>
                <a href="#team" className="text-white/70 hover:text-primary transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/70">
                <a href="mailto:info@picklebills.com" className="hover:text-primary transition-colors">
                  info@picklebills.com
                </a>
              </li>
              <li className="text-white/70">
                <a href="tel:+15555555555" className="hover:text-primary transition-colors">
                  (555) 555-5555
                </a>
              </li>
              <li className="text-white/70 pt-2">
                Austin, TX
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm">
            &copy; {currentYear} PickleBills. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
