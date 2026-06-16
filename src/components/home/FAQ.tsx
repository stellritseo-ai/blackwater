import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import sContracting from "@/assets/s_contracting.png";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Do you offer free estimates?", a: "Yes, we provide free estimates 24 hours a day, 7 days a week." },
    { q: "Are you licensed and insured?", a: "Absolutely. We are licensed, insured, and bonded." },
    { q: "Do you handle insurance damage repairs?", a: "Yes, we assist clients with repairs related to insurance damage claims." },
    { q: "Do you serve both residential and commercial clients?", a: "Yes, we proudly work with homeowners and businesses." },
    { q: "How far do you travel?", a: "We serve customers within a 35-mile radius of Moss Point." },
  ];

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24 w-full" id="faq">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column */}
          <Reveal variant="reveal-left">
            <div className="w-full text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="section-label">FAQs</span>

              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-navy leading-tight tracking-[-0.02em]">
                Frequently Asked <span className="text-gradient-gold">Questions</span>
              </h2>

              <p className="mt-5 text-muted-foreground text-sm leading-relaxed max-w-[500px]">
                Find answers to some of the most common questions about our services, licensing, and contracting process. Still need help? Give us a call — we're happy to guide you.
              </p>

              <div className="mt-8 w-full h-[220px] lg:h-[260px] rounded-3xl overflow-hidden shadow-[var(--shadow-card)] border border-border">
                <img src={sContracting} alt="Contractor consulting with blueprints" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </Reveal>

          {/* Right Column: Accordion */}
          <Reveal variant="reveal-right">
            <div className="bg-white rounded-3xl p-6 lg:p-10 border border-border shadow-[var(--shadow-card)]">
              <div className="flex flex-col">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index}
                      className={`transition-all duration-300 ${isOpen ? 'bg-secondary/20 border border-gold/40 rounded-xl mb-3' : 'border-b border-border last:border-0'}`}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className={`w-full text-left flex items-center justify-between transition-colors ${isOpen ? 'p-5 text-navy font-semibold' : 'py-5 px-1 text-navy font-medium hover:text-red'}`}
                      >
                        <span className="text-base lg:text-[17px] pr-4">{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold' : ''}`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 px-5 pb-5' : 'max-h-0 opacity-0 px-5 pb-0'}`}
                      >
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
