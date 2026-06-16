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
          <button 
            aria-label={open ? "Close menu" : "Open menu"} 
            onClick={() => setOpen(!open)} 
            className="lg:hidden text-white p-2.5 relative w-10 h-10 rounded-xl hover:bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <span className={`absolute h-0.5 w-5 bg-current rounded transition-all duration-300 ${open ? 'rotate-45' : '-translate-y-1.5'}`} />
              <span className={`absolute h-0.5 w-5 bg-current rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute h-0.5 w-5 bg-current rounded transition-all duration-300 ${open ? '-rotate-45' : 'translate-y-1.5'}`} />
            </div>
          </button>
        </div>
      </div>
      
      {open && (
        <div className="absolute top-full left-0 right-0 lg:hidden bg-navy-dark/95 backdrop-blur-xl border-b border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] animate-menu-slide">
          <div className="px-6 py-6 flex flex-col gap-3">
            {NAV.map((n) => (
              <a 
                key={n.href} 
                href={n.href} 
                onClick={() => setOpen(false)} 
                className="py-2.5 text-base font-medium text-white/85 hover:text-gold transition-colors duration-300 border-b border-white/5 last:border-0 flex items-center justify-between group"
              >
                <span>{n.label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setOpen(false)} 
              className="btn-primary w-full text-center py-3.5 mt-3 shadow-[0_10px_20px_-10px_rgba(178,34,34,0.4)]"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
