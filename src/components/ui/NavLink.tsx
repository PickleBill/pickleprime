
import React from "react";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: (e: React.MouseEvent) => void;
  isMobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  label, 
  onClick, 
  isMobile = false 
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

export default NavLink;
