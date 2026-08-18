import React from "react";
import { useLocation } from "@tanstack/react-router";
import { PHONE, PHONE_LINK, NAV, services, SERVICE_LOCATIONS, ADDRESS, EMAIL } from "./Constants";
import { Logo } from "./Icons";
import bbbLogo from "@/assets/bbb.png";
import { Facebook, Instagram, Phone, Mail, MapPin, Clock, User, ArrowRight } from "lucide-react";

export function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const getHref = (href: string) => {
    if (href.startsWith("#")) {
      return isHomePage ? href : `/${href}`;
    }
    return href;
  };

  return (
    <footer className="bg-navy-dark text-white/70 pt-14 sm:pt-16 lg:pt-20 pb-8 relative overflow-hidden w-full">
      {/* Top golden border gradient */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

      {/* Background radial highlight */}
      <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1.1fr_1.1fr_1.3fr] gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">

          {/* Column 1: Logo, Bio, Socials & Badges */}
          <div className="flex flex-col items-start col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center">
              <a href="/" aria-label="Blackwater USA LLC Home">
                <Logo className="h-20 sm:h-24 w-auto object-contain" />
              </a>
            </div>

            <p className="mt-6 text-[14px] leading-relaxed text-white/60">
              Family-owned licensed general contractors delivering premium remodeling, renovations, and 24/7 insurance repairs across South Mississippi & Southwest Alabama with 43 years of trusted experience.
            </p>

            {/* Badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["Licensed", "Insured", "Bonded"].map((b) => (
                <span
                  key={b}
                  className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border border-gold/30 bg-gold/5 text-gold-light"
                >
                  {b}
                </span>
              ))}
            </div>

            {/* Social Follow & BBB Accreditation */}
            <div className="mt-6 flex flex-wrap gap-6 items-end">
              <div>
                <span className="text-xs uppercase tracking-widest text-white/45 font-bold">Follow Us</span>
                <div className="flex gap-3 mt-2">
                  <a 
                    href="https://facebook.com" 
                    aria-label="Facebook Page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-gold/10 hover:text-gold hover:border-gold/30 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Facebook className="w-[16px] h-[16px]" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    aria-label="Instagram Page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-gold/10 hover:text-gold hover:border-gold/30 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Instagram className="w-[16px] h-[16px]" />
                  </a>
                </div>
              </div>

              <a 
                href="https://www.bbb.org/us/ms/moss-point/profile/home-renovation/blackwater-usa-llc-0523-235906195"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90 transition-opacity duration-300 block pb-0.5"
                aria-label="BBB Accredited Business Profile"
              >
                <img 
                  src={bbbLogo} 
                  alt="BBB Accredited Business - Blackwater USA LLC" 
                  className="h-12 w-auto object-contain" 
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-[16px] pb-3 border-b border-white/10 mb-5 tracking-wide">Quick Links</h3>
            <ul className="space-y-3.5 text-[14px]">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a
                    href={getHref(n.href)}
                    className="hover:text-gold transition-colors duration-300 flex items-center gap-2 group text-white/70"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-[16px] pb-3 border-b border-white/10 mb-5 tracking-wide">Services</h3>
            <ul className="space-y-3 text-[13px]">
              {services.map((s) => (
                <li key={s.t}>
                  <a
                    href={s.slug}
                    className="hover:text-gold transition-colors duration-300 flex items-center gap-2 group text-white/70"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />
                    {s.t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Dedicated Service Areas */}
          <div>
            <h3 className="text-white font-bold text-[16px] pb-3 border-b border-white/10 mb-5 tracking-wide">Service Areas</h3>
            <ul className="space-y-3 text-[13px]">
              {SERVICE_LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <a
                    href={loc.slug}
                    className="hover:text-gold transition-colors duration-300 flex items-center justify-between group text-white/70"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors duration-300 shrink-0" />
                      {loc.city}, {loc.state}
                    </span>
                    <span className="text-[10px] text-white/40 group-hover:text-gold/80">{loc.state === "MS" ? "MS" : "AL"}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <a
                  href="/service-areas"
                  className="text-gold hover:text-white transition-colors text-xs font-semibold flex items-center gap-1 group"
                >
                  <span>All Service Areas</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-[16px] pb-3 border-b border-white/10 mb-5 tracking-wide">Contact Details</h3>
            <ul className="space-y-4 text-[14px]">
              <li className="flex items-start gap-3">
                <User className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold block leading-none">Owner</span>
                  <span className="text-white/85 font-medium mt-1 block">Richard Burns (43 Yrs Experience)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold block leading-none">Phone (24/7 Response)</span>
                  <a href={PHONE_LINK} className="text-white/85 hover:text-gold transition-colors font-medium mt-1 block">
                    {PHONE}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold block leading-none">Email</span>
                  <a href={`mailto:${EMAIL}`} className="text-white/85 hover:text-gold transition-colors font-medium break-all mt-1 block">
                    {EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold block leading-none">Office Headquarters</span>
                  <span className="text-white/85 font-medium leading-relaxed mt-1 block">
                    {ADDRESS}
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold block leading-none">Operating Hours</span>
                  <span className="text-white/85 font-medium mt-1 block">Available 24/7 • 35-Mile Radius</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright details row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/50">
          <div>
            © {new Date().getFullYear()} Blackwater USA LLC. All Rights Reserved. Licensed, Bonded & Insured General Contractor.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 justify-center">
            <a href="/service-areas" className="hover:text-gold transition-colors">Service Areas Hub</a>
            <span>•</span>
            <a href="/faq" className="hover:text-gold transition-colors">FAQ</a>
            <span>•</span>
            <a href="/estimate" className="hover:text-gold transition-colors">Free Estimate</a>
            <span>•</span>
            <span>Design By <a href="https://stellrit.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors font-medium">StellR IT LLC</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
