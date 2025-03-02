
import React from "react";
import NavLink from "./NavLink";
import AnimatedButton from "./AnimatedButton";
import { Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DesktopNavProps {
  handleCommunityClick: (e: React.MouseEvent) => void;
  handleScoreboardClick: (e: React.MouseEvent) => void;
  setShowShareModal: (show: boolean) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({
  handleCommunityClick,
  handleScoreboardClick,
  setShowShareModal,
}) => {
  return (
    <>
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
    </>
  );
};

export default DesktopNav;
