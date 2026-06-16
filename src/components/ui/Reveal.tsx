import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Reveal = ({ children, className = "", variant = "reveal" }: { children: React.ReactNode; className?: string; variant?: "reveal" | "reveal-scale" | "reveal-left" | "reveal-right" }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`${variant} ${isVisible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
};
