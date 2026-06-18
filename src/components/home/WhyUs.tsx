import React from "react";
import { Award, ShieldCheck, Banknote, Building2, ClipboardCheck, Sparkles, MessageSquare, Heart } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

import sRenovation from "@/assets/s_renovation.png";
import aboutClean from "@/assets/about_clean.png";
import g5Img from "@/assets/g5.jpg";

export function WhyUs() {
  const points = [
    {
      Icon: Award,
      t: "43 Years of Experience",
      d: "Family-owned and operated since 1983, bringing decades of trusted construction and renovation expertise.",
    },
    {
      Icon: ShieldCheck,
      t: "Licensed, Insured & Bonded",
      d: "We are fully licensed, insured, and bonded, ensuring your property is in professional, safe hands.",
    },
    {
      Icon: Banknote,
      t: "Free 24/7 Estimates",
      d: "Get transparent pricing and quick quotes anytime with absolutely zero hidden fees or surprises.",
    },
    {
      Icon: Building2,
      t: "Residential & Commercial",
      d: "Exceptional craftsmanship for both customized home remodeling and large-scale commercial renovations.",
    },
    {
      Icon: ClipboardCheck,
      t: "Insurance Claim Assistance",
      d: "Smooth, professional claim support to help you navigate property damage, repairs, and assessments.",
    },
    {
      Icon: Sparkles,
      t: "Quality Craftsmanship",
      d: "We combine high-quality materials with precision installation to build spaces that are designed to endure.",
    },
    {
      Icon: MessageSquare,
      t: "Transparent Communication",
      d: "We provide regular project updates, honest scheduling, and clear answers from start to finish.",
    },
    {
      Icon: Heart,
      t: "Satisfaction Focused",
      d: "Our reputation is built on client satisfaction, reliable completion, and long-term relationships.",
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24 w-full overflow-x-clip relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-[48%_1fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Image Grid - Sticky */}
          <div className="lg:sticky lg:top-[120px] h-fit self-start w-full">
            <Reveal variant="reveal-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <img 
                  src={sRenovation} 
                  alt="High-end renovation under construction" 
                  className="w-full lg:h-[620px] rounded-3xl object-cover shadow-[var(--shadow-card)] hidden sm:block" 
                  loading="lazy"
                />
                <div className="flex flex-col gap-5">
                  <img 
                    src={aboutClean} 
                    alt="Blackwater USA LLC contractors crew" 
                    className="w-full h-[250px] lg:h-[300px] rounded-3xl object-cover shadow-[var(--shadow-card)]" 
                    loading="lazy"
                  />
                  <img 
                    src={g5Img} 
                    alt="Commercial Renovation" 
                    className="w-full h-[250px] lg:h-[300px] rounded-3xl object-cover shadow-[var(--shadow-card)]" 
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Content */}
          <div className="lg:py-5">
            <Reveal variant="reveal-right">
              <div>
                {/* Badge */}
                <div className="flex justify-center md:justify-start">
                  <span className="section-label">Why Choose Us</span>
                </div>
                
                {/* Heading */}
                <h2 className="mt-4 text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-navy leading-tight text-center md:text-left mx-auto">
                  Why Homeowners & Businesses Trust <span className="text-gradient-gold">Blackwater USA LLC</span>
                </h2>

                {/* Body Text */}
                <p className="mt-5 text-muted-foreground text-sm leading-relaxed text-center md:text-left mx-auto md:mx-0">
                  Choosing the right contractor makes all the difference. Our dedication to quality workmanship, customer satisfaction, and honest service has earned the trust of clients throughout the region.
                </p>

                {/* Feature Grid */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
                  {points.map((p) => (
                    <div key={p.t} className="flex items-start gap-4">
                      <p.Icon className="w-7 h-7 text-gold shrink-0 fill-current" strokeWidth={1} />
                      <div className="pt-0.5">
                        <h4 className="font-display text-[17px] font-bold text-navy leading-tight mb-1">
                          {p.t}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {p.d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-12 pb-10 lg:pb-0">
                  <a 
                    href="/estimate" 
                    className="btn-primary"
                  >
                    Get Started with a Free Estimate
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
