import React from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceAreas() {
  const cities = [
    "Moss Point", "Pascagoula", "Gautier",
    "Ocean Springs", "Biloxi", "Gulfport",
    "Vancleave", "Escatawpa", "Hurley",
    "Wade", "Lucedale", "Gautier Area"
  ];

  return (
    <section className="bg-secondary/40 py-16 sm:py-20 lg:py-24 w-full relative" id="service-areas">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">

          {/* Left: Google Map */}
          <Reveal variant="reveal-left" className="w-full lg:sticky lg:top-[100px]">
            <div className="w-full h-[300px] lg:h-[500px] overflow-hidden rounded-3xl shadow-[var(--shadow-card)] border border-border bg-white">
              <iframe
                title="Blackwater USA LLC Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.5312428606917!2d-88.54456892433181!3d30.392666074750128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889be923561906ad%3A0x154ed2bdb0253958!2s3600%20Magnolia%20St%2C%20Moss%20Point%2C%20MS%2039563%2C%20USA!5e0!3m2!1sen!2snp!4v1781641775606!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </Reveal>

          {/* Right: Content */}
          <Reveal variant="reveal-right">
            <div className="w-full py-5">
              {/* Badge */}
              <span className="section-label">Service Area</span>

              <h2 className="mt-4 text-[30px] sm:text-[38px] lg:text-[45px] font-bold text-navy leading-tight tracking-[-0.02em]">
                Proudly Serving the <span className="text-gradient-gold">Gulf Coast</span>
              </h2>

              <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
                We provide professional general contracting, remodeling, and renovation services within a 35-mile radius of Moss Point.
              </p>

              <h3 className="mt-8 text-navy font-bold text-lg">
                Featured Areas We Serve
              </h3>

              {/* Grid of Cities */}
              <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-4">
                {cities.map((city, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-navy hover:bg-navy-dark transition-colors cursor-default rounded-xl px-4 py-3.5 shadow-sm"
                  >
                    <span className="text-white font-semibold text-[13px] md:text-sm leading-none">
                      {city}
                    </span>
                    <div className="w-5 h-5 bg-gold rounded-full flex items-center justify-center shrink-0">
                      <ArrowRight className="w-3 h-3 text-navy-dark" strokeWidth={3} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <p className="mt-8 text-xs text-muted-foreground">
                Additional nearby communities available — contact us to confirm service in your area.
              </p>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
