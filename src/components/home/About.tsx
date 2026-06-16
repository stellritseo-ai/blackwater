import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

import aboutImg from "@/assets/about_clean.png";
import g2Img from "@/assets/g2.jpg";
import g1Img from "@/assets/g1.jpg";

export function About() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden" id="about">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-[1fr_1.1fr] gap-10 sm:gap-14 lg:gap-20 items-center">
        
        {/* Left Side: Custom Frame with Floating Images */}
        <Reveal variant="reveal-left">
          <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] mx-auto lg:ml-auto lg:mr-8 mt-5">
            {/* Decorative Background Accents */}
            <div className="absolute -inset-4 bg-navy/5 rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] -z-10 translate-x-4 translate-y-4" />
            <div className="absolute -inset-4 border border-navy/20 rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] -z-10 -translate-x-3 -translate-y-3" />

            {/* Main Image */}
            <div className="relative overflow-hidden shadow-[var(--shadow-card)] z-10 rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px]">
              <img 
                src={aboutImg} 
                alt="Family-owned contractor team" 
                className="w-full h-auto aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700" 
                loading="lazy" 
              />
            </div>

            {/* Floating Image 1 (Top Left) - Circular */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 md:-left-12 lg:-left-16 w-[120px] md:w-[150px] rounded-full overflow-hidden shadow-lg border-[5px] border-white z-20 hidden sm:block"
            >
              <img 
                src={g2Img} 
                alt="Bathroom remodel project" 
                className="w-full aspect-square object-cover" 
                loading="lazy" 
              />
            </motion.div>

            {/* Floating Image 2 (Bottom Left) - Circular */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute top-[45%] -left-4 md:-left-8 lg:-left-12 w-[100px] md:w-[130px] rounded-full overflow-hidden shadow-lg border-[5px] border-white z-20 hidden sm:block"
            >
              <img 
                src={g1Img} 
                alt="Kitchen renovation project" 
                className="w-full aspect-square object-cover" 
                loading="lazy" 
              />
            </motion.div>
            
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-2 md:-right-6 bg-white p-4 md:p-6 rounded-[16px] shadow-lg border border-border flex items-center gap-4 z-30">
              <div className="text-navy font-display text-[36px] md:text-[46px] font-bold leading-none tracking-tight">43+</div>
              <div className="text-[11px] md:text-[12px] font-bold text-navy uppercase tracking-[0.2em] leading-relaxed">
                Years of<br/><span className="text-gold">Excellence</span>
              </div>
            </div>
          </div>
        </Reveal>
        
        {/* Right Side: Wording and Features */}
        <Reveal variant="reveal-right">
          <div className="w-full pt-5 lg:pt-0">
            {/* Badge */}
            <span className="section-label">About Blackwater USA LLC</span>
            
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight tracking-[-0.02em]">
              Family-Owned Craftsmanship Built on <span className="text-red">Trust</span> and <span className="text-gradient-gold">Experience</span>
            </h2>
            
            <div className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed space-y-4 font-medium">
              <p>
                For more than 43 years, Blackwater USA LLC has been helping homeowners and businesses transform their properties with expert craftsmanship and dependable service. Our team takes pride in delivering exceptional workmanship, honest communication, and personalized solutions tailored to every project.
              </p>
              <p>
                Whether you need a complete renovation, remodeling services, emergency repairs, or assistance with insurance claims, we are committed to exceeding expectations every step of the way.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "43 Years of Experience",
                "Residential & Commercial",
                "Free Estimates 24/7",
                "Licensed, Insured & Bonded",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-secondary/35">
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-navy">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex gap-3 flex-wrap">
              <a href="#contact" className="btn-primary">
                Start Your Project
              </a>
              <a href="#services" className="btn-gold flex items-center">
                Explore Services
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </Reveal>
        
      </div>
    </section>
  );
}
