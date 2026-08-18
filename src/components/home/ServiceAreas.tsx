import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICE_LOCATIONS } from "./Constants";

export function ServiceAreas() {
  return (
    <section className="bg-secondary/40 py-16 sm:py-20 lg:py-24 w-full relative" id="service-areas">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">

          {/* Left: Google Map */}
          <Reveal variant="reveal-left" className="w-full lg:sticky lg:top-[100px]">
            <div className="w-full h-[320px] lg:h-[520px] overflow-hidden rounded-3xl shadow-[var(--shadow-card)] border border-border bg-white relative">
              <iframe
                title="Blackwater USA LLC Headquarters - Moss Point, MS"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.5312428606917!2d-88.54456892433181!3d30.392666074750128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889be923561906ad%3A0x154ed2bdb0253958!2s3600%20Magnolia%20St%2C%20Moss%20Point%2C%20MS%2039563%2C%20USA!5e0!3m2!1sen!2snp!4v1781641775606!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
              <div className="absolute bottom-4 left-4 right-4 bg-navy-dark/90 backdrop-blur-md text-white p-3 rounded-2xl border border-white/10 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <span className="font-semibold">Headquarters: 3600 Magnolia St, Moss Point, MS</span>
                </div>
                <span className="text-gold font-bold hidden sm:inline">35-Mile Radius</span>
              </div>
            </div>
          </Reveal>

          {/* Right: Content */}
          <Reveal variant="reveal-right">
            <div className="w-full py-2">
              {/* Badge */}
              <span className="section-label">Service Areas</span>

              <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight tracking-[-0.02em]">
                Local General Contractors Serving <span className="text-gradient-gold">South MS & SW Alabama</span>
              </h2>

              <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                Blackwater USA LLC is proud to provide licensed, bonded, and insured construction, remodeling, and insurance restoration services across Jackson County, Harrison County, and Mobile County.
              </p>

              <div className="mt-8 flex items-center justify-between">
                <h3 className="text-navy font-bold text-lg">
                  Dedicated City Service Pages
                </h3>
                <a href="/service-areas" className="text-xs font-bold text-red hover:text-navy transition-colors flex items-center gap-1">
                  View Full Directory <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Grid of Cities linking to dedicated location pages */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {SERVICE_LOCATIONS.map((loc) => (
                  <a
                    key={loc.slug}
                    href={loc.slug}
                    className="flex items-center justify-between bg-navy hover:bg-navy-dark transition-all duration-300 rounded-xl px-4 py-3.5 shadow-sm group border border-white/5 hover:border-gold/30 hover:-translate-y-0.5"
                  >
                    <div>
                      <span className="text-white font-semibold text-sm leading-none group-hover:text-gold transition-colors block">
                        {loc.city}, {loc.state}
                      </span>
                      <span className="text-[11px] text-white/50 mt-1 block">
                        {loc.badge} • {loc.region}
                      </span>
                    </div>
                    <div className="w-7 h-7 bg-gold rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-3.5 h-3.5 text-navy-dark" strokeWidth={3} />
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Nearby Communities */}
              <div className="mt-6 p-4 rounded-2xl bg-white border border-border">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy">Also Serving Nearby Communities:</h4>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  Vancleave, Escatawpa, Hurley, Wade, Lucedale, Gulfport, and surrounding areas within our 35-mile operating radius.
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <a href="/service-areas" className="text-xs font-bold text-navy hover:text-red transition-colors inline-flex items-center gap-1">
                    Explore Service Area Hub →
                  </a>
                  <span className="text-border">•</span>
                  <a href="/contact" className="text-xs font-bold text-gold-dark hover:underline inline-flex items-center gap-1">
                    Check Your Address
                  </a>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
