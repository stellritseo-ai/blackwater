import React, { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { NAV, SERVICE_LOCATIONS } from "./Constants";
import { Logo } from "./Icons";
import { ChevronDown, ArrowRight, MapPin } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const getHref = (href: string) => {
    if (href.startsWith("#")) {
      return isHomePage ? href : `/${href}`;
    }
    return href;
  };

  const serviceSubmenu = [
    { label: "General Contracting", href: "/general-contracting" },
    { label: "Kitchen Remodeling", href: "/kitchen-remodeling" },
    { label: "Bathroom Remodeling", href: "/bathroom-remodeling" },
    { label: "Renovation Services", href: "/renovation-services" },
    { label: "Residential Services", href: "/residential-services" },
    { label: "Commercial Services", href: "/commercial-services" },
    { label: "Interior & Exterior Painting", href: "/painting-services" },
    { label: "Drywall Services", href: "/drywall-services" },
    { label: "Plumbing Services", href: "/plumbing-services" },
    { label: "Electrical Services", href: "/electrical-services" }
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled
          ? "bg-navy-dark/85 backdrop-blur-lg shadow-[0_8px_30px_-10px_rgba(0,0,0,0.4)]"
          : "bg-navy-dark/45 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href={getHref("#home")} className="flex items-center text-white" aria-label="Blackwater USA LLC Home">
          <Logo className="h-18 sm:h-20 w-auto object-contain" />
        </a>
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {NAV.map((n) => {
            const isServices = n.label === "Services";
            const isServiceAreas = n.label === "Service Areas";

            if (isServices) {
              return (
                <div key={n.label} className="relative group/dropdown py-4">
                  <a 
                    href={getHref(n.href)} 
                    className="px-3.5 py-2 text-sm font-medium text-white/85 hover:text-gold transition flex items-center gap-1.5 group/link cursor-pointer"
                  >
                    <span>{n.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover/dropdown:rotate-180 text-white/50 group-hover/link:text-gold" />
                  </a>
                  {/* Services Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 scale-95 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:scale-100 group-hover/dropdown:pointer-events-auto transition-all duration-300 ease-out origin-top z-50">
                    <div className="bg-navy-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-80 grid grid-cols-1 gap-1">
                      {serviceSubmenu.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white/80 hover:text-navy-dark hover:bg-gold transition-all duration-300 flex items-center justify-between group/item"
                        >
                          <span>{sub.label}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            if (isServiceAreas) {
              return (
                <div key={n.label} className="relative group/dropdown py-4">
                  <a 
                    href="/service-areas" 
                    className="px-3.5 py-2 text-sm font-medium text-white/85 hover:text-gold transition flex items-center gap-1.5 group/link cursor-pointer"
                  >
                    <span>{n.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover/dropdown:rotate-180 text-white/50 group-hover/link:text-gold" />
                  </a>
                  {/* Service Areas Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 scale-95 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:scale-100 group-hover/dropdown:pointer-events-auto transition-all duration-300 ease-out origin-top z-50">
                    <div className="bg-navy-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-84 grid grid-cols-1 gap-1">
                      <div className="px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase text-gold/80 border-b border-white/10 mb-1 flex items-center justify-between">
                        <span>Our Service Locations</span>
                        <span className="text-white/40">MS & AL</span>
                      </div>
                      {SERVICE_LOCATIONS.map((loc) => (
                        <a
                          key={loc.slug}
                          href={loc.slug}
                          className="px-3.5 py-2 rounded-xl text-xs font-semibold text-white/80 hover:text-navy-dark hover:bg-gold transition-all duration-300 flex items-center justify-between group/item"
                        >
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3 text-gold group-hover/item:text-navy-dark transition-colors" />
                            <span>{loc.city}, {loc.state}</span>
                          </div>
                          <span className="text-[10px] text-white/50 group-hover/item:text-navy-dark font-medium">{loc.region}</span>
                        </a>
                      ))}
                      <div className="pt-2 mt-1 border-t border-white/10">
                        <a
                          href="/service-areas"
                          className="px-3.5 py-2 rounded-xl text-xs font-bold text-gold hover:text-white flex items-center justify-between"
                        >
                          <span>Explore All Service Areas →</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a key={n.label} href={getHref(n.href)} className="px-3.5 py-2 text-sm font-medium text-white/85 hover:text-gold transition relative group">
                {n.label}
                <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/estimate" className="btn-primary hidden sm:inline-flex">Get Free Estimate</a>
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
        <div className="absolute top-full left-0 right-0 lg:hidden bg-navy-dark/95 backdrop-blur-xl border-b border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] animate-menu-slide max-h-[85vh] overflow-y-auto">
          <div className="px-6 py-6 flex flex-col gap-3">
            {NAV.map((n) => {
              const isServices = n.label === "Services";
              const isServiceAreas = n.label === "Service Areas";

              if (isServices) {
                return (
                  <div key={n.label} className="flex flex-col border-b border-white/5 last:border-0 py-1">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full py-2.5 text-base font-medium text-white/85 hover:text-gold transition-colors duration-300 flex items-center justify-between cursor-pointer"
                    >
                      <span>{n.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-gold' : 'text-white/50'}`} />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileServicesOpen ? "max-h-[600px] opacity-100 mb-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col gap-1 pl-4 border-l border-white/10 mt-1">
                        {serviceSubmenu.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="py-2 text-sm font-medium text-white/70 hover:text-gold transition-colors flex items-center justify-between group"
                          >
                            <span>{sub.label}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              if (isServiceAreas) {
                return (
                  <div key={n.label} className="flex flex-col border-b border-white/5 last:border-0 py-1">
                    <button
                      onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                      className="w-full py-2.5 text-base font-medium text-white/85 hover:text-gold transition-colors duration-300 flex items-center justify-between cursor-pointer"
                    >
                      <span>{n.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileAreasOpen ? 'rotate-180 text-gold' : 'text-white/50'}`} />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileAreasOpen ? "max-h-[600px] opacity-100 mb-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col gap-1 pl-4 border-l border-white/10 mt-1">
                        {SERVICE_LOCATIONS.map((loc) => (
                          <a
                            key={loc.slug}
                            href={loc.slug}
                            onClick={() => setOpen(false)}
                            className="py-2 text-sm font-medium text-white/70 hover:text-gold transition-colors flex items-center justify-between group"
                          >
                            <span>{loc.city}, {loc.state}</span>
                            <span className="text-[10px] text-white/40">{loc.region}</span>
                          </a>
                        ))}
                        <a
                          href="/service-areas"
                          onClick={() => setOpen(false)}
                          className="py-2 text-sm font-bold text-gold hover:text-white transition-colors"
                        >
                          View All Service Areas →
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a 
                  key={n.label} 
                  href={getHref(n.href)} 
                  onClick={() => setOpen(false)} 
                  className="py-2.5 text-base font-medium text-white/85 hover:text-gold transition-colors duration-300 border-b border-white/5 last:border-0 flex items-center justify-between group"
                >
                  <span>{n.label}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />
                </a>
              );
            })}
            <a 
              href="/estimate" 
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
