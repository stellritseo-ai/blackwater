import React from "react";
import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export function Reviews() {
  const reviews = [
    {
      name: "Sarah M.",
      location: "Kitchen Remodel",
      text: "“Richard and his team remodeled our kitchen beautifully. The entire process was professional, organized, and completed on time. We couldn't be happier.”"
    },
    {
      name: "James T.",
      location: "Insurance Repair",
      text: "“Excellent communication and outstanding craftsmanship. They handled our insurance repair claim smoothly and exceeded our expectations.”"
    },
    {
      name: "Linda R.",
      location: "Full Renovation",
      text: "“Highly recommend Blackwater USA LLC. Honest pricing, dependable service, and incredible attention to detail from start to finish.”"
    }
  ];

  return (
    <section id="reviews" className="bg-background py-16 sm:py-20 lg:py-24 w-full overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[30%_70%] gap-[48px] lg:gap-[80px] items-center">
          
          {/* Left Content */}
          <Reveal variant="reveal-left">
            <div className="max-w-[420px] mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Badge */}
              <span className="section-label">Client Testimonials</span>
              
              <h2 className="mt-[24px] text-[30px] font-bold text-navy leading-tight tracking-[-0.02em]">
                What Our Clients <span className="text-red">Are Saying</span>
              </h2>
              
              <p className="mt-[24px] text-[16px] lg:text-[17px] text-muted-foreground leading-[1.6]">
                Our reputation is built on trust, quality workmanship, and long-lasting relationships with our clients.
              </p>
              
              <div className="mt-[40px]">
                <a 
                  href="#contact" 
                  className="btn-primary"
                >
                  Schedule Your Free Estimate Today
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Carousel */}
          <Reveal variant="reveal-right" className="min-w-0 w-full overflow-hidden">
            <div className="relative pt-[40px] lg:pt-0 w-full">
              {/* Fade Edges for Premium Look */}
              <div className="absolute inset-y-0 left-0 w-[40px] lg:w-[80px] bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-[40px] lg:w-[80px] bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              
              <div className="w-full">
                <motion.div 
                  className="flex gap-[24px] w-fit"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 45,
                  }}
                >
                  {[...reviews, ...reviews, ...reviews, ...reviews, ...reviews, ...reviews].map((r, i) => (
                    <div 
                      key={i} 
                      className="relative shrink-0 w-[320px] md:w-[380px] bg-white rounded-[20px] p-[32px] shadow-[var(--shadow-card)] border border-border flex flex-col hover:shadow-[var(--shadow-gold)] hover:-translate-y-1 transition duration-300 overflow-hidden"
                    >
                      {/* Decorative Quote SVG Icon */}
                      <svg className="absolute top-6 right-6 w-10 h-10 text-gold/15 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 7h-4v6h4v6h6v-6h-4l4-6h-6zm10 0h-4v6h4v6h6v-6h-4l4-6h-6z"/>
                      </svg>

                      {/* User Info */}
                      <div className="flex items-center gap-[16px] mb-[24px] relative">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-md shrink-0" style={{ background: "var(--gradient-cta)" }}>
                          {r.name[0]}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-navy text-[17px] leading-tight">{r.name}</span>
                          <span className="text-[14px] text-muted-foreground leading-tight mt-[4px]">{r.location}</span>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-[4px] mb-[16px]">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-[18px] h-[18px] text-gold fill-current" strokeWidth={1} />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-[15px] text-navy/90 leading-[1.6]">
                        {r.text}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
}
