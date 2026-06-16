import React from "react";
import { PHONE, PHONE_LINK, NAV, services } from "./Constants";
import { Logo } from "./Icons";
import { Facebook, Instagram, Phone, Mail, MapPin, Clock, User } from "lucide-react";

export function Footer() {
  const servedAreas = [
    "Moss Point", "Pascagoula", "Gautier",
    "Ocean Springs", "Biloxi", "Gulfport"
  ];

  return (
    <footer className="bg-navy-dark text-white/70 pt-14 sm:pt-16 lg:pt-20 pb-8 relative overflow-hidden w-full">
      {/* Top golden border gradient */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

      {/* Background radial highlight */}
      <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-8 sm:gap-10 lg:gap-14 mb-12 sm:mb-16">

          {/* Column 1: Logo, Bio, Socials & Badges */}
          <div className="flex flex-col items-start col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center">
              <Logo className="h-20 sm:h-24 w-auto object-contain" />
            </div>

            <p className="mt-6 text-[14px] leading-relaxed text-white/60">
              Family-owned general contractors delivering premium remodeling, renovations, and insurance repairs across the Gulf Coast with 43 years of trusted experience.
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

            {/* Social Follow */}
            <div className="mt-6">
              <span className="text-xs uppercase tracking-widest text-white/45 font-bold">Follow Us</span>
              <div className="flex gap-3 mt-2">
                <a
                  href="#"
                  aria-label="Facebook Page"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-gold/10 hover:text-gold hover:border-gold/30 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Facebook className="w-[16px] h-[16px]" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram Page"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-gold/10 hover:text-gold hover:border-gold/30 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Instagram className="w-[16px] h-[16px]" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-[16px] pb-3 border-b border-white/10 mb-5 tracking-wide">Quick Links</h3>
            <ul className="space-y-3.5 text-[14px]">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
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
            <ul className="space-y-3.5 text-[14px]">
              {services.slice(0, 6).map((s) => (
                <li key={s.t}>
                  <a
                    href="#services"
                    className="hover:text-gold transition-colors duration-300 flex items-center gap-2 group text-white/70"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />
                    {s.t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h3 className="text-white font-bold text-[16px] pb-3 border-b border-white/10 mb-5 tracking-wide">Areas We Serve</h3>
            <ul className="space-y-3.5 text-[14px]">
              {servedAreas.map((area) => (
                <li key={area}>
                  <a
                    href="#service-areas"
                    className="hover:text-gold transition-colors duration-300 flex items-center gap-2 group text-white/70"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/20 group-hover:bg-gold transition-colors duration-300 shrink-0" />
                    {area}, MS
                  </a>
                </li>
              ))}
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
                  <span className="text-white/85 font-medium mt-1 block">Richard Burns</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold block leading-none">Phone</span>
                  <a href={PHONE_LINK} className="text-white/85 hover:text-gold transition-colors font-medium mt-1 block">
                    {PHONE}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold block leading-none">Email</span>
                  <a href="mailto:blackwaterusa.llc@gmail.com" className="text-white/85 hover:text-gold transition-colors font-medium break-all mt-1 block">
                    blackwaterusa.llc@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold block leading-none">Address</span>
                  <span className="text-white/85 font-medium leading-relaxed mt-1 block">
                    3600 Magnolia St,<br />Moss Point, MS
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold block leading-none">Hours</span>
                  <span className="text-white/85 font-medium mt-1 block">Available 24/7 • 35-Mile Radius</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright details row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/50">
          <div>
            © {new Date().getFullYear()} Blackwater USA LLC. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 justify-center">
            <span>Design By <a href="https://stellrit.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors font-medium">StellR IT LLC</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
