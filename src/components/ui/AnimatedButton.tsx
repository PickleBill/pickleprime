
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "nav";
  size?: "sm" | "md" | "lg" | "icon";
  children: React.ReactNode;
  withArrow?: boolean;
  active?: boolean;
}

const AnimatedButton = ({
  variant = "primary",
  size = "md",
  className,
  children,
  withArrow = false,
  active = false,
  ...props
}: AnimatedButtonProps) => {
  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg",
    secondary:
      "bg-white text-navy border border-navy/10 hover:border-navy/30 shadow-sm hover:shadow",
    outline:
      "bg-transparent text-primary border border-primary hover:bg-primary/5",
    ghost:
      "bg-transparent text-navy hover:bg-navy/5",
    nav: "bg-transparent text-white/70 hover:text-white hover:bg-white/10 transition-all",
  };

  const sizes = {
    sm: "text-sm py-1.5 px-3",
    md: "text-base py-2 px-4",
    lg: "text-lg py-3 px-6",
    icon: "p-2",
  };

  return (
    <button
      className={cn(
        "relative rounded-md font-medium inline-flex items-center justify-center transition-all duration-300 overflow-hidden group",
        variants[variant],
        sizes[size],
        active && "bg-white/10 text-white shadow-inner",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-1">
        {children}
        {withArrow && (
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        )}
      </span>
    </button>
  );
};

export default AnimatedButton;
