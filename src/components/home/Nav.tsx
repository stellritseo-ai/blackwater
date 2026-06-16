import React, { useEffect, useState } from "react";
import { NAV } from "./Constants";
import { Logo } from "./Icons";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled
          ? "bg-navy-dark/85 backdrop-blur-lg shadow-[0_8px_30px_-10px_rgba(0,0,0,0.4)]"
          : "bg-navy-dark/45 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="#home" className="flex items-center text-white">
          <Logo className="h-18 sm:h-20 w-auto object-contain" />
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="px-4 py-2 text-sm font-medium text-white/85 hover:text-gold transition relative group">
              {n.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary hidden sm:inline-flex">Get Free Estimate</a>
          <button aria-label="Open menu" onClick={() => setOpen(!open)} className="lg:hidden text-white p-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-navy-dark border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-white/85 hover:text-gold">{n.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3">Get Free Estimate</a>
          </div>
        </div>
      )}
    </header>
  );
}
