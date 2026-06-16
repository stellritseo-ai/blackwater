import React from "react";
import { PHONE, PHONE_LINK } from "./Constants";
import { Dot, PhoneIcon, GoogleIcon, TiktokIcon } from "./Icons";
import { Facebook, Instagram } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden md:block bg-navy-dark text-white/80 text-xs border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-white/70"><Dot /> 24/7 Emergency Service</span>
          <span className="flex items-center gap-2 text-white/70"><Dot /> Licensed • Insured • Bonded</span>
        </div>
        <div className="flex items-center gap-5">
          <a href={PHONE_LINK} className="flex items-center gap-2 font-semibold hover:text-gold transition text-white/90">
            <PhoneIcon className="w-3.5 h-3.5" /> {PHONE}
          </a>
          <span className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook" 
              className="text-white/60 hover:text-gold transition-colors duration-200"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="text-white/60 hover:text-gold transition-colors duration-200"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://www.bbb.org/us/ms/moss-point/profile/home-renovation/blackwater-usa-llc-0523-235906195" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Google Business" 
              className="text-white/60 hover:text-gold transition-colors duration-200"
            >
              <GoogleIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="TikTok" 
              className="text-white/60 hover:text-gold transition-colors duration-200"
            >
              <TiktokIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
