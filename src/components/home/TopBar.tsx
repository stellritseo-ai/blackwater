import React from "react";
import { PHONE, PHONE_LINK } from "./Constants";
import { Dot, PhoneIcon } from "./Icons";

export function TopBar() {
  return (
    <div className="hidden md:block bg-navy-dark text-white/90 text-xs">
      <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><Dot /> 24/7 Emergency Service</span>
          <span className="flex items-center gap-2"><Dot /> Licensed • Insured • Bonded</span>
        </div>
        <a href={PHONE_LINK} className="flex items-center gap-2 font-semibold hover:text-gold transition">
          <PhoneIcon className="w-3.5 h-3.5" /> {PHONE}
        </a>
      </div>
    </div>
  );
}
