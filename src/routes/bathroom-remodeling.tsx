import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bath, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Check, 
  Shield, 
  Award, 
  FileText, 
  ArrowRight,
  Sparkles,
  Star,
  Users,
  Compass,
  Hammer,
  Droplet,
  Layers,
  Sparkle
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import sBathroom from "@/assets/s_bathroom.png";
import whyImg from "@/assets/why.jpg";
import aboutImg from "@/assets/about.jpg";
import g1Img from "@/assets/g1.jpg";
import g2Img from "@/assets/g2.jpg";
import g4Img from "@/assets/g4.jpg";
import g6Img from "@/assets/g6.jpg";

export const Route = createFileRoute("/bathroom-remodeling")({
  head: () => ({
    meta: [
      { title: "Bathroom Remodeling – Transform Your Space into a Sanctuary" },
      { name: "description", content: "Expert bathroom remodeling services by Blackwater USA LLC in Moss Point, MS, and the Gulf Coast. 43 years of experience, licensed & insured, free estimates 24/7. Call (228) 219-8338 today." },
      { property: "og:title", content: "Bathroom Remodeling – Blackwater USA LLC" },
      { property: "og:description", content: "Expert bathroom remodeling services by Blackwater USA LLC in Moss Point, MS, and the Gulf Coast. 43 years of experience, licensed & insured, free estimates 24/7. Call (228) 219-8338 today." },
      { property: "og:url", content: "/bathroom-remodeling" },
    ],
    links: [{ rel: "canonical", href: "/bathroom-remodeling" }],
  }),
  component: BathroomRemodelingPage,
});

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

function BathroomRemodelingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesList = [
    { name: "Full Bathroom Remodels", desc: "Complete demolition and rebuild — from floor to ceiling." },
    { name: "Custom Showers & Tubs", desc: "Walk-in showers, soaking tubs, steam showers, and custom tile work." },
    { name: "Vanities & Cabinetry", desc: "Custom cabinetry, floating vanities, and premium countertops (granite, quartz, marble)." },
    { name: "Tile & Flooring", desc: "Ceramic, porcelain, natural stone, heated floors, and luxury vinyl." },
    { name: "Plumbing Upgrades", desc: "New fixtures, pipes, water-efficient toilets, and faucet installations." },
    { name: "Electrical & Lighting", desc: "Sconces, recessed lighting, dimmers, heated mirrors, and exhaust fans." },
    { name: "Accessibility Features", desc: "Grab bars, walk-in tubs, curbless showers, and ADA-compliant designs." },
    { name: "Storage Solutions", desc: "Built-in shelving, medicine cabinets, and custom storage." },
    { name: "Insurance Claim Bathroom Repairs", desc: "Full restoration for water damage, mold, or fire-damaged bathrooms." }
  ];

  const designStyles = [
    { style: "Modern", features: "Clean lines, neutral colors, floating vanities, minimalist fixtures." },
    { style: "Traditional", features: "Classic details, warm woods, clawfoot tubs, elegant tile patterns." },
    { style: "Farmhouse", features: "Shiplap walls, apron-front sinks, vintage fixtures, rustic accents." },
    { style: "Spa-Inspired", features: "Natural stone, rainfall showers, soaking tubs, soft lighting." },
    { style: "Coastal", features: "Light colors, beach-inspired tiles, nautical accents, natural light." },
    { style: "Industrial", features: "Exposed pipes, concrete or dark tile, metal accents, edgy lighting." },
    { style: "Transitional", features: "A blend of modern and traditional for a timeless, balanced look." }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation & Estimate",
      desc: "We meet with you to discuss your vision, needs, and budget. We take measurements, listen to your ideas, and provide a detailed, no-obligation estimate — available 24/7."
    },
    {
      step: "02",
      title: "Design & Planning",
      desc: "We collaborate with you to finalize the layout, materials, fixtures, and finishes. We offer material samples to help you visualize your new space."
    },
    {
      step: "03",
      title: "Demolition & Preparation",
      desc: "Our team carefully removes old fixtures, tiles, and materials. We address any underlying issues like mold, water damage, or outdated wiring."
    },
    {
      step: "04",
      title: "Construction & Installation",
      desc: "We handle all plumbing, electrical, tile, cabinetry, and finishing work. Our team works efficiently and keeps your home clean and organized throughout."
    },
    {
      step: "05",
      title: "Final Walkthrough & Reveal",
      desc: "We walk through the completed bathroom with you, address any final touches, and ensure you're 100% satisfied before we consider the job complete."
    }
  ];

  const testimonials = [
    {
      quote: "Our bathroom looks like a spa retreat! Richard and his team were professional, clean, and the craftsmanship is incredible. They handled everything — from design to final touches — and kept us updated daily. We're already planning our kitchen remodel with them.",
      author: "Tom & Beth W.",
      location: "Ocean Springs, MS"
    },
    {
      quote: "After a pipe burst and destroyed our bathroom, Blackwater USA came to the rescue. They handled the insurance claim, managed the entire rebuild, and delivered a bathroom that's even better than before. Highly recommend!",
      author: "Patricia L.",
      location: "Pascagoula, MS"
    },
    {
      quote: "We hired Blackwater USA to remodel our rental property bathrooms. They finished ahead of schedule, stayed within budget, and the tenants love the new spaces. Professional and reliable.",
      author: "James R.",
      location: "Biloxi, MS"
    }
  ];

  const faqs: FAQItem[] = [
    {
      id: 1,
      q: "How much does a bathroom remodel cost?",
      a: "Costs vary based on size, materials, and scope. We provide free, detailed estimates tailored to your specific project and budget."
    },
    {
      id: 2,
      q: "How long does a bathroom remodel take?",
      a: "Most bathroom remodels take 2 to 6 weeks, depending on complexity. We provide a clear timeline upfront."
    },
    {
      id: 3,
      q: "Do I need permits for a bathroom remodel?",
      a: "Often, yes — especially for plumbing, electrical, or structural changes. We handle all necessary permits and inspections."
    },
    {
      id: 4,
      q: "Do you offer design services?",
      a: "Yes! We work with you on layout, materials, and finishes to create a bathroom that matches your vision and budget."
    },
    {
      id: 5,
      q: "Can you help with water damage insurance claims?",
      a: "Absolutely. We specialize in bathroom repairs related to insurance claims and handle all communication with your adjuster."
    },
    {
      id: 6,
      q: "What if I want to keep my existing layout?",
      a: "That's perfectly fine. We can refresh your bathroom with new fixtures, tile, lighting, and finishes without changing the footprint."
    },
    {
      id: 7,
      q: "Do you offer financing?",
      a: "We offer flexible payment options. Call us to discuss financing for your project."
    }
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col w-full">
      <TopBar />
      <Nav />

      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden w-full isolate">
        {/* Background Image and Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={sBathroom} 
            alt="Blackwater USA bathroom remodeling design" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/85 to-navy-dark/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_60%)]" />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <Reveal variant="reveal" className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold font-sans">Specialties</span>
            </Reveal>
            <Reveal variant="reveal" className="stagger-1">
              <h1 className="text-[34px] sm:text-[46px] lg:text-[56px] font-bold text-white leading-tight tracking-[-0.03em] font-display">
                Bathroom Remodeling – <span className="text-gradient-gold">Transform Your Space</span> into a Sanctuary
              </h1>
            </Reveal>
            <Reveal variant="reveal" className="stagger-2">
              <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
                Expert bathroom remodeling services by Blackwater USA LLC in Moss Point, MS, and the Gulf Coast. 43 years of experience, licensed & insured, free estimates 24/7.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 1: Hero / Intro */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Your Sanctuary</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Your Dream Bathroom – <span className="text-gradient-gold">Designed & Built to Perfection</span>
                </h2>
                
                <div className="mt-6 space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  <p>
                    Your bathroom should be more than just functional — it should be a retreat. At Blackwater USA LLC, we specialize in transforming outdated, cramped, or inefficient bathrooms into beautiful, spa-like spaces that enhance your home and your daily routine.
                  </p>
                  <p>
                    With 43 years of hands-on experience, Richard Burns and our team bring unmatched craftsmanship, attention to detail, and personalized service to every bathroom remodel. From concept to completion, we handle everything — design, demolition, plumbing, electrical, tile work, cabinetry, and finishing touches.
                  </p>
                  <p>
                    We serve both residential and commercial clients across a 35-mile radius of Moss Point, MS — and we're available 24/7 for free estimates and emergency consultations.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* CTA Side Box */}
            <Reveal variant="reveal-right">
              <div className="w-full bg-navy text-white rounded-3xl p-8 shadow-[var(--shadow-card)] relative overflow-hidden border border-white/5 text-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl" />
                <h3 className="text-xl font-bold font-display text-white mb-2">Request an Estimate</h3>
                <p className="text-xs text-white/70 font-semibold mb-6">Always free, detailed estimates with zero obligation.</p>
                <div className="space-y-4">
                  <a href="tel:+12282198338" className="btn-gold w-full justify-center py-4 font-bold">
                    <Phone className="w-4 h-4 mr-2" />
                    Call (228) 219-8338
                  </a>
                  <a href="/estimate" className="btn-outline w-full justify-center py-4 font-bold border-white/10 hover:border-white">
                    Get Free Estimate
                  </a>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 2: Why Remodel Your Bathroom? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Why Renovate</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Top Reasons to <span className="text-gradient-gold">Remodel Your Bathroom</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              A bathroom remodel is one of the best investments you can make in your home, upgrading both aesthetic comfort and utility value.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Increase Home Value", desc: "Bathroom remodels offer one of the highest returns on investment for homeowners." },
              { title: "Improve Functionality", desc: "Better layout, storage solutions, and accessibility optimized for your family's needs." },
              { title: "Enhance Energy Efficiency", desc: "New water-saving fixtures, LED lighting, and smart ventilation save water and electricity costs." },
              { title: "Fix Hidden Problems", desc: "Address structural mold, water leaks, dry rot, outdated wiring, or scaling plumbing issues." },
              { title: "Create a Spa-Like Retreat", desc: "Turn your bathroom into a relaxing, luxurious oasis with premium soaking tubs & rainfall showers." },
              { title: "Aging-in-Place Features", desc: "Walk-in tubs, curbless entries, grab bars, and wider doors for premium safety and long-term comfort." }
            ].map((item, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${(idx % 3) + 1}`}>
                <div className="p-6 bg-white border border-border rounded-2xl h-full flex flex-col hover:border-gold/30 hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mb-4 text-gold">
                    <Check className="w-4 h-4 text-gold font-bold" strokeWidth={3} />
                  </div>
                  <h4 className="font-bold text-navy font-display text-sm sm:text-base mb-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Section 3: Our Bathroom Remodeling Services */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">What We Do</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Full-Service Bathroom Renovations – <span className="text-gradient-gold">We Do It All</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Whether you are looking for a small cosmetic update or a layout-altering master bath overhaul, we deliver full-service craftsmanship.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <div className="divide-y divide-border">
              <div className="grid grid-cols-[1fr_2fr] p-4 bg-navy text-white font-bold text-xs sm:text-sm tracking-wider uppercase">
                <div>Service</div>
                <div className="pl-2">Scope & Details</div>
              </div>
              {servicesList.map((row, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-[1fr_2fr] p-4.5 font-medium text-xs sm:text-sm items-center transition-colors duration-200 hover:bg-gold/5 ${
                    idx % 2 === 0 ? 'bg-secondary/10' : 'bg-white'
                  }`}
                >
                  <div className="text-navy-dark font-bold leading-snug">{row.name}</div>
                  <div className="text-muted-foreground font-medium pl-2 leading-relaxed">{row.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: Our Bathroom Remodeling Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white relative w-full overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold-light)_0%,_transparent_60%)] opacity-5 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label text-gold before:bg-gold justify-center">Our Process</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-tight font-display">
              From Vision to Reality – <span className="text-gradient-gold">Our 5-Step Process</span>
            </h2>
            <p className="mt-4 text-white/85 font-medium text-sm sm:text-base">
              We make bathroom remodeling stress-free and transparent. Here's how we bring your dream space to life:
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto relative">
            {processSteps.map((step, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${idx + 1} flex flex-col items-center text-center relative`}>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-10 left-[70%] right-[-30%] h-0.5 bg-gradient-to-r from-gold to-white/10 z-0" />
                )}
                <div className="w-16 h-16 rounded-full bg-gold/15 border-2 border-gold flex items-center justify-center text-gold font-bold text-xl mb-5 relative z-10 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-base font-bold font-display text-white mb-2 leading-snug">{step.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed font-medium max-w-[180px]">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Bathroom Design Styles */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Design Styles</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Find Your Style – <span className="text-gradient-gold">Bathroom Design Inspiration</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We work with you to design a look that reflects your personal aesthetic and matches your home.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <div className="divide-y divide-border">
              <div className="grid grid-cols-[1fr_2fr] p-4 bg-navy text-white font-bold text-xs sm:text-sm tracking-wider uppercase">
                <div>Aesthetic Style</div>
                <div className="pl-2">Key Features & Elements</div>
              </div>
              {designStyles.map((row, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-[1fr_2fr] p-4 font-medium text-xs sm:text-sm items-center transition-colors duration-200 hover:bg-gold/5 ${
                    idx % 2 === 0 ? 'bg-secondary/10' : 'bg-white'
                  }`}
                >
                  <div className="text-navy-dark font-bold leading-snug flex items-center gap-2">
                    <Sparkle className="w-3.5 h-3.5 text-gold shrink-0" />
                    {row.style}
                  </div>
                  <div className="text-muted-foreground font-medium pl-2 leading-relaxed">{row.features}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 6: Materials We Use */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label justify-center">Quality Build</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Premium Materials – <span className="text-gradient-gold">Built to Last</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We specify and install only premium grade, highly durable fixtures and finishes built to withstand moisture and daily wear.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Countertops */}
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
              <h4 className="font-bold text-navy font-display text-base border-b border-border pb-2 mb-4">Countertops</h4>
              <ul className="space-y-2.5 text-xs font-semibold text-muted-foreground">
                {["Granite", "Quartz", "Marble", "Solid Surface", "Butcher Block"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold shrink-0" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Flooring */}
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
              <h4 className="font-bold text-navy font-display text-base border-b border-border pb-2 mb-4">Flooring</h4>
              <ul className="space-y-2.5 text-xs font-semibold text-muted-foreground">
                {["Ceramic & Porcelain Tile", "Natural Stone", "Heated Flooring Systems", "Luxury Vinyl Plank", "Waterproof Laminate"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold shrink-0" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cabinetry & Vanities */}
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
              <h4 className="font-bold text-navy font-display text-base border-b border-border pb-2 mb-4">Cabinetry & Vanities</h4>
              <ul className="space-y-2.5 text-xs font-semibold text-muted-foreground">
                {["Custom & Semi-Custom", "Soft-Close Drawers", "Solid Wood & High-Grade Materials", "Floating & Wall-Mounted Options"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold shrink-0" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fixtures & Hardware */}
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
              <h4 className="font-bold text-navy font-display text-base border-b border-border pb-2 mb-4">Fixtures & Hardware</h4>
              <ul className="space-y-2.5 text-xs font-semibold text-muted-foreground">
                {["Premium Brands (Moen, Delta, Kohler)", "Water-Efficient Toilets & Faucets", "Brushed Nickel, Chrome, Bronze, Gold Finishes", "Touchless & Smart Technology"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold shrink-0" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Section 7: Why Choose Blackwater USA LLC */}
      <section className="py-16 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">The Difference</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Why Homeowners Trust Us for <span className="text-gradient-gold">Bathroom Renovations</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              When remodeling wet areas, detail and waterproofing matter most. Here is why we are trusted:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "43 Years of Experience", desc: "We've successfully remodeled hundreds of bathrooms across the Gulf Coast." },
              { title: "Fully Licensed & Insured", desc: "Bonded, licensed & insured contractor ensuring complete safety of your home." },
              { title: "Family-Owned Values", desc: "Richard Burns operates with transparency, honesty, and client-first values." },
              { title: "24/7 Availability", desc: "We are always available for emergency plumbing failures or immediate structural fixes." },
              { title: "Insurance Claim Experts", desc: "Water damage claims? We document everything and coordinate adjuster approvals." },
              { title: "Residential & Commercial", desc: "Equipped to handle high-end home master bathrooms and commercial multi-stalls." },
              { title: "Free Accurate Estimates", desc: "Transparent breakdown of labor and materials with zero pressure." },
              { title: "Flawless Quality Control", desc: "We never cut corners on waterproofing membranes or code compliance." }
            ].map((item, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${(idx % 4) + 1}`}>
                <div className="p-6 bg-secondary/25 border border-border/80 rounded-2xl h-full flex flex-col hover:border-gold/30 hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mb-4 text-gold">
                    <Check className="w-4 h-4 text-gold font-bold" strokeWidth={3} />
                  </div>
                  <h4 className="font-bold text-navy font-display text-sm sm:text-base mb-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Section 8: Insurance Claim Bathroom Repairs */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-5xl mx-auto">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Restoration</span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy leading-tight font-display">
                  Bathroom Restoration for <span className="text-gradient-gold">Insurance Claims</span>
                </h2>
                <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
                  Water damage, mold, or fire can devastate your bathroom. We specialize in restoring bathrooms that have been damaged by burst pipes, water leaks, storm flooding, fire, and structural mold growth.
                </p>
                
                <ul className="mt-6 space-y-2.5 font-bold text-navy-dark text-xs sm:text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red shrink-0" strokeWidth={3} />
                    <span>Damage assessment and documentation with photos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red shrink-0" strokeWidth={3} />
                    <span>Detailed line-item estimates for your insurance adjuster</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red shrink-0" strokeWidth={3} />
                    <span>Direct communications with adjusters to secure full approval</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red shrink-0" strokeWidth={3} />
                    <span>Complete rebuilding and code compliance modernization</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-border bg-white p-2">
                <img src={g6Img} alt="Mold and water damage restoration" className="w-full h-auto object-cover rounded-2xl" />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 9: Bathroom Remodeling Gallery */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Gallery Highlights</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              See Our Bathroom <span className="text-gradient-gold">Transformations</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Browse some of our completed bathroom renovations across the Gulf Coast.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Spa Bathroom Remodel", loc: "Ocean Springs, MS", img: g2Img },
              { title: "Farmhouse Bathroom Renovation", loc: "Moss Point, MS", img: whyImg },
              { title: "Custom Shower Installation", loc: "Pascagoula, MS", img: g4Img },
              { title: "Accessibility Remodel", loc: "Gautier, MS", img: aboutImg },
              { title: "Modern Bathroom Makeover", loc: "Biloxi, MS", img: g1Img }
            ].map((proj, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${(idx % 5) + 1}`}>
                <a 
                  href="/gallery"
                  className="group relative rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md cursor-pointer block aspect-[4/5]"
                >
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-transparent to-transparent p-4 flex flex-col justify-end">
                    <span className="text-gold text-[9px] font-bold uppercase tracking-wider block mb-1">{proj.loc}</span>
                    <h4 className="text-white font-bold text-xs sm:text-sm font-display leading-tight">{proj.title}</h4>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/gallery" className="btn-gold justify-center">
              View Our Full Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

        </div>
      </section>

      {/* Section 10: Testimonials – Bathroom Remodels */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Testimonials</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              What Our Clients Say About <span className="text-gradient-gold">Their New Bathrooms</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((test, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${idx + 1}`}>
                <div className="bg-secondary/25 border border-border/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full relative">
                  <div className="absolute top-6 right-6 text-gold opacity-20 text-6xl font-serif">“</div>
                  <div>
                    <div className="flex gap-1 mb-4 text-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm italic font-medium leading-relaxed mb-6">
                      “{test.quote}”
                    </p>
                  </div>
                  <div>
                    <span className="block font-bold text-navy text-sm">{test.author}</span>
                    <span className="block text-[10px] text-muted-foreground font-bold tracking-wider uppercase mt-1">{test.location}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Section 11: FAQs – Bathroom Remodeling */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center font-sans">Common Questions</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-border shadow-[var(--shadow-card)] space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`transition-all duration-300 border-b border-border/80 last:border-0 pb-4 last:pb-0 ${
                    isOpen ? 'bg-secondary/15 border border-gold/30 rounded-2xl p-5 mb-2 border-b-0' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left flex items-center justify-between py-2 text-navy font-semibold text-base lg:text-[17px] hover:text-red cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-gold' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[300px] opacity-100 mt-3.5 text-sm text-muted-foreground leading-relaxed' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="border-t border-border/55 pt-3.5">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Section 12: Call to Action */}
      <section className="py-16 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal variant="reveal-scale">
            <div className="max-w-5xl mx-auto rounded-[32px] bg-gradient-cta p-8 sm:p-12 text-white relative overflow-hidden shadow-[var(--shadow-luxe)]">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              
              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-center relative z-10">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-gold/30 bg-gold/10 text-gold-light font-sans">
                    Let's Begin
                  </span>
                  <h2 className="mt-4 text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white leading-tight font-display">
                    Ready for Your Dream Bathroom?
                  </h2>
                  <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xl font-medium font-sans">
                    Whether you want a spa-inspired retreat, a functional family bathroom, or need emergency repairs after water damage — Blackwater USA LLC is here to help. Let's create the bathroom you've always wanted.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-white/90">
                    <span className="flex items-center gap-2">📞 (228) 219-8338</span>
                    <span className="flex items-center gap-2">✉️ blackwaterusa.llc@gmail.com</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col lg:w-full">
                  <a href="/estimate" className="btn-gold w-full text-center py-4 text-base font-bold shadow-lg">
                    Get Your Free Bathroom Remodel Estimate
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
