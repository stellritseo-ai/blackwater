import React from "react";
import { SlidersHorizontal, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { PHONE, PHONE_LINK } from "./Constants";
import aboutImg from "@/assets/about.jpg";

export function CTABanner() {
  return (
    <section id="estimate" className="py-16 sm:py-20 lg:py-24 bg-background w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <Reveal variant="reveal-scale">
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-luxe)] bg-navy-dark min-h-[400px] flex items-center">
            {/* Background image */}
            <img
              src={aboutImg}
              alt="General contracting work"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              loading="lazy"
            />
            
            {/* Crimson/Navy gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/85 to-red-dark/90" />
            
            {/* Floating blurred radial accents */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle at 20% 50%, rgba(212,175,55,0.4), transparent 50%), radial-gradient(circle at 80% 50%, rgba(178,34,34,0.4), transparent 50%)" }} />
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gold/15 blur-3xl animate-float pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-red/25 blur-3xl animate-float-delayed pointer-events-none" />

            {/* Center Content */}
            <div className="relative z-10 py-20 px-6 max-w-[800px] mx-auto text-center flex flex-col items-center text-white">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold">Limited Availability — Book Now</span>
              <h2 className="mt-4 text-[24px] sm:text-[30px] md:text-[35px] font-bold leading-tight">
                Ready to <span className="text-gradient-gold">Transform Your Property?</span>
              </h2>
              <p className="mt-5 max-w-2xl mx-auto text-white/85 text-sm md:text-base leading-relaxed font-medium">
                Whether you're planning a renovation, remodeling project, or need immediate repair assistance, our experienced team is ready to help. Contact us today for your free estimate.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
                <a
                  href="/estimate"
                  className="btn-gold flex items-center gap-2 text-[15px] font-bold py-3.5 px-7"
                >
                  <SlidersHorizontal className="w-[18px] h-[18px]" strokeWidth={2.5} />
                  Schedule Free Estimate
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-2 text-white hover:text-gold font-semibold text-[16px] transition-colors"
                >
                  <Phone className="w-[18px] h-[18px]" fill="currentColor" strokeWidth={0} />
                  Call {PHONE}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
