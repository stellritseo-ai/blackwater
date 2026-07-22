import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Utensils, 
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
import sKitchen from "@/assets/s_kitchen.png";
import whyImg from "@/assets/why.jpg";
import aboutImg from "@/assets/about.jpg";
import g1Img from "@/assets/g1.jpg";
import g2Img from "@/assets/g2.jpg";
import g3Img from "@/assets/g3.jpg";
import g5Img from "@/assets/g5.jpg";
import g6Img from "@/assets/g6.jpg";

export const Route = createFileRoute("/kitchen-remodeling")({
  head: () => ({
    meta: [
      { title: "Kitchen Remodeling & Renovation | Custom Cabinets | Moss Point, MS" },
      { name: "description", content: "Transform your home with a custom kitchen remodel by Blackwater USA LLC. We offer cabinet installation, countertops, and full renovations across the Gulf Coast." },
      { property: "og:title", content: "Kitchen Remodeling Services | Blackwater USA LLC" },
      { property: "og:description", content: "Transform your home with a custom kitchen remodel by Blackwater USA LLC. We offer cabinet installation, countertops, and full renovations across the Gulf Coast." },
      { property: "og:url", content: "https://blackwaterusallc.com/kitchen-remodeling" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/kitchen-remodeling" }],
  }),
  component: KitchenRemodelingPage,
});

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

function KitchenRemodelingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesList = [
    { name: "Full Kitchen Remodels", desc: "Complete demolition and rebuild — from floor to ceiling." },
    { name: "Custom Cabinetry", desc: "Solid wood, soft-close drawers, custom finishes, and smart storage solutions." },
    { name: "Countertops", desc: "Granite, quartz, marble, solid surface, butcher block, and more." },
    { name: "Backsplashes", desc: "Custom tile, glass, stone, and decorative backsplash designs." },
    { name: "Flooring", desc: "Ceramic tile, hardwood, luxury vinyl, and heated flooring systems." },
    { name: "Appliances", desc: "Installation of premium, energy-efficient appliances." },
    { name: "Lighting", desc: "Pendants, under-cabinet lighting, recessed lights, and dimmable fixtures." },
    { name: "Plumbing Upgrades", desc: "New sinks, faucets, garbage disposals, and water filtration systems." },
    { name: "Kitchen Islands", desc: "Custom islands with seating, storage, and prep space." },
    { name: "Open-Concept Layouts", desc: "Removing walls to create spacious, flowing spaces." },
    { name: "Insurance Claim Kitchen Repairs", desc: "Full restoration for water, fire, or storm-damaged kitchens." }
  ];

  const designStyles = [
    { style: "Modern", features: "Clean lines, flat-panel cabinets, integrated appliances, minimalist hardware." },
    { style: "Traditional", features: "Classic details, raised-panel cabinets, ornate moldings, warm woods." },
    { style: "Farmhouse", features: "Shaker cabinets, apron-front sinks, open shelving, rustic accents." },
    { style: "Contemporary", features: "Sleek materials, bold contrasts, mixed metals, innovative storage." },
    { style: "Transitional", features: "A timeless blend of traditional warmth and modern simplicity." },
    { style: "Coastal", features: "Light colors, natural textures, beadboard, and airy, bright spaces." },
    { style: "Industrial", features: "Exposed beams, concrete, metal accents, and urban loft aesthetics." }
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
      desc: "We collaborate with you to finalize the layout, cabinets, countertops, fixtures, and finishes. We offer material samples to help you visualize your new space."
    },
    {
      step: "03",
      title: "Demolition & Preparation",
      desc: "Our team carefully removes old cabinets, countertops, and flooring. We address any underlying issues like outdated wiring, plumbing, or structural concerns."
    },
    {
      step: "04",
      title: "Construction & Installation",
      desc: "We handle all cabinetry, countertops, plumbing, electrical, flooring, and finishing work. Our team works efficiently and keeps your home clean and organized throughout."
    },
    {
      step: "05",
      title: "Final Walkthrough & Reveal",
      desc: "We walk through the completed kitchen with you, address any final touches, and ensure you're 100% satisfied before we consider the job complete."
    }
  ];

  const testimonials = [
    {
      quote: "Blackwater USA turned our outdated kitchen into a dream space. The custom cabinetry, granite countertops, and attention to detail are incredible. Richard helped us stay within budget without compromising quality. We couldn't be happier!",
      author: "Amanda T.",
      location: "Pascagoula, MS"
    },
    {
      quote: "After a pipe burst and destroyed our kitchen, Blackwater USA came to the rescue. They handled the insurance claim, managed the entire rebuild, and delivered a kitchen that's even better than before. Highly recommend!",
      author: "Mark & Dana S.",
      location: "Ocean Springs, MS"
    },
    {
      quote: "We hired Blackwater USA to remodel the kitchen in our rental property. They finished ahead of schedule, stayed within budget, and the tenants love the new space. Professional and reliable.",
      author: "James R.",
      location: "Biloxi, MS"
    }
  ];

  const faqs: FAQItem[] = [
    {
      id: 1,
      q: "How much does a kitchen remodel cost?",
      a: "Costs vary based on size, materials, and scope. We provide free, detailed estimates tailored to your specific project and budget."
    },
    {
      id: 2,
      q: "How long does a kitchen remodel take?",
      a: "Most kitchen remodels take 4 to 8 weeks, depending on complexity. We provide a clear timeline upfront."
    },
    {
      id: 3,
      q: "Do I need permits for a kitchen remodel?",
      a: "Often, yes — especially for plumbing, electrical, or structural changes. We handle all necessary permits and inspections."
    },
    {
      id: 4,
      q: "Do you offer design services?",
      a: "Yes! We work with you on layout, materials, and finishes to create a kitchen that matches your vision and budget."
    },
    {
      id: 5,
      q: "Can you help with insurance claims for kitchen damage?",
      a: "Absolutely. We specialize in kitchen repairs related to insurance claims and handle all communication with your adjuster."
    },
    {
      id: 6,
      q: "What if I want to keep my existing layout?",
      a: "That's perfectly fine. We can refresh your kitchen with new cabinets, countertops, backsplashes, and appliances without changing the footprint."
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
            src={sKitchen} 
            alt="Blackwater USA kitchen remodeling design" 
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
                Kitchen Remodeling – <span className="text-gradient-gold">Design, Build & Transform</span> Your Heart of the Home
              </h1>
            </Reveal>
            <Reveal variant="reveal" className="stagger-2">
              <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
                Expert kitchen remodeling services by Blackwater USA LLC in Moss Point, MS, and across the Gulf Coast. 43 years of experience, licensed & insured, free estimates 24/7.
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
                <span className="section-label">Heart of the Home</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Your Dream Kitchen Awaits – <span className="text-gradient-gold">Custom Remodels for Every Home</span>
                </h2>
                
                <div className="mt-6 space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  <p>
                    The kitchen is the heart of every home — a place for family meals, entertaining guests, and creating memories. At Blackwater USA LLC, we specialize in transforming outdated, inefficient kitchens into stunning, functional spaces that elevate your home and your lifestyle.
                  </p>
                  <p>
                    With 43 years of hands-on experience, Richard Burns and our team bring unmatched craftsmanship, attention to detail, and personalized service to every kitchen remodel. From concept to completion, we handle everything — design, demolition, cabinetry, countertops, plumbing, electrical, flooring, and finishing touches.
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

      {/* Section 2: Why Remodel Your Kitchen? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Why Renovate</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Top Reasons to <span className="text-gradient-gold">Remodel Your Kitchen</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              A kitchen remodel is one of the most rewarding home improvements you can make, upgrading both visual status and lifestyle efficiency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Increase Home Value", desc: "Kitchen remodels offer one of the highest returns on investment for homeowners." },
              { title: "Improve Functionality", desc: "Better workflow layout, customized smart storage solutions, and premium appliances." },
              { title: "Enhance Energy Efficiency", desc: "Modern Energy Star appliances, LED under-cabinet lighting, and insulated windows save electricity." },
              { title: "Update Outdated Design", desc: "Modernize colors, backsplash tiles, textures, and fixtures for a fresh, timeless look." },
              { title: "Fix Hidden Problems", desc: "Resolve structural sag, dry rot, outdated electrical wiring, plumbing leaks, or water damage issues." },
              { title: "Create Open Space", desc: "Remove walls to merge the dining area into an open-concept kitchen perfect for hosting." }
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

      {/* Section 3: Our Kitchen Remodeling Services */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Services List</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Full-Service Kitchen Renovations – <span className="text-gradient-gold">We Do It All</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              From cosmetic resurfacing to complex layout expansions, we offer fully licensed kitchen upgrades.
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

      {/* Section 4: Our Kitchen Remodeling Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white relative w-full overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold-light)_0%,_transparent_60%)] opacity-5 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label text-gold before:bg-gold justify-center">Our Process</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-tight font-display">
              From Vision to Reality – <span className="text-gradient-gold">Our 5-Step Process</span>
            </h2>
            <p className="mt-4 text-white/85 font-medium text-sm sm:text-base">
              We make kitchen remodeling stress-free and transparent. Here's how we bring your dream kitchen to life:
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

      {/* Section 5: Kitchen Design Styles */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Styles</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Find Your Style – <span className="text-gradient-gold">Kitchen Design Inspiration</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We work with you to create a kitchen that reflects your personal style. Here are popular design aesthetics we bring to life:
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <div className="divide-y divide-border">
              <div className="grid grid-cols-[1fr_2fr] p-4 bg-navy text-white font-bold text-xs sm:text-sm tracking-wider uppercase">
                <div>Design Style</div>
                <div className="pl-2">Key Features & Elements</div>
              </div>
              {designStyles.map((row, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-[1fr_2fr] p-4.5 font-medium text-xs sm:text-sm items-center transition-colors duration-200 hover:bg-gold/5 ${
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
              We use only high-quality, durable materials that stand up to daily kitchen use and look beautiful for years.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {/* Cabinetry */}
            <div className="bg-white p-5 rounded-2xl border border-border shadow-sm">
              <h4 className="font-bold text-navy font-display text-sm border-b border-border pb-2 mb-3">Cabinetry</h4>
              <ul className="space-y-2 text-xs font-semibold text-muted-foreground">
                {["Custom & Semi-Custom", "Solid Wood & Veneers", "Soft-Close Hardware", "Smart Pull-outs", "Lazy Susans"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-gold shrink-0" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Countertops */}
            <div className="bg-white p-5 rounded-2xl border border-border shadow-sm">
              <h4 className="font-bold text-navy font-display text-sm border-b border-border pb-2 mb-3">Countertops</h4>
              <ul className="space-y-2 text-xs font-semibold text-muted-foreground">
                {["Granite", "Quartz", "Marble", "Solid Surface", "Butcher Block", "Recycled Glass"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-gold shrink-0" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Backsplashes */}
            <div className="bg-white p-5 rounded-2xl border border-border shadow-sm">
              <h4 className="font-bold text-navy font-display text-sm border-b border-border pb-2 mb-3">Backsplashes</h4>
              <ul className="space-y-2 text-xs font-semibold text-muted-foreground">
                {["Ceramic & Porcelain", "Glass Tile", "Natural Stone", "Metal & Mosaic"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-gold shrink-0" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Flooring */}
            <div className="bg-white p-5 rounded-2xl border border-border shadow-sm">
              <h4 className="font-bold text-navy font-display text-sm border-b border-border pb-2 mb-3">Flooring</h4>
              <ul className="space-y-2 text-xs font-semibold text-muted-foreground">
                {["Hardwood", "Ceramic & Porcelain", "Luxury Vinyl Plank", "Heated Systems"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-gold shrink-0" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fixtures */}
            <div className="bg-white p-5 rounded-2xl border border-border shadow-sm">
              <h4 className="font-bold text-navy font-display text-sm border-b border-border pb-2 mb-3">Fixtures</h4>
              <ul className="space-y-2 text-xs font-semibold text-muted-foreground">
                {["Moen, Delta, Kohler", "Touchless Faucets", "Brushed Finishes", "Smart Tech"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
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
              Why Homeowners Trust Us for <span className="text-gradient-gold">Kitchen Renovations</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              With decades of local contracting experience, we bring unmatched reliability and craftsmanship to every kitchen remodel.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "43 Years Experience", desc: "We've successfully remodeled hundreds of kitchens across the Gulf Coast." },
              { title: "Fully Licensed & Insured", desc: "Bonded, licensed & insured contractor ensuring complete safety of your home." },
              { title: "Family-Owned Values", desc: "Richard Burns operates with transparency, honesty, and client-first values." },
              { title: "24/7 Availability", desc: "We are always available for emergency plumbing failures or immediate structural fixes." },
              { title: "Insurance Claim Experts", desc: "Water damage claims? We document everything and coordinate adjuster approvals." },
              { title: "Residential & Commercial", desc: "Equipped to handle high-end home kitchens and commercial rental properties." },
              { title: "Free Accurate Estimates", desc: "Transparent breakdown of labor and materials with zero pressure." },
              { title: "Flawless Quality Control", desc: "We never cut corners on electrical load balancing or code compliance." }
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

      {/* Section 8: Insurance Claim Kitchen Repairs */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-5xl mx-auto">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Restoration</span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy leading-tight font-display">
                  Kitchen Restoration for <span className="text-gradient-gold">Insurance Claims</span>
                </h2>
                <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
                  Water damage, fire, or storms can devastate your kitchen. We specialize in restoring kitchens that have been damaged by burst pipes, water leaks, storm flooding, fire, and structural mold growth.
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
                    <span>Complete rebuilding and cabinet matching</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-border bg-white p-2">
                <img src={g6Img} alt="Kitchen water damage restoration" className="w-full h-auto object-cover rounded-2xl" />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 9: Kitchen Remodeling Gallery */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center font-sans">Gallery Highlights</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              See Our Kitchen <span className="text-gradient-gold">Transformations</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Browse some of our completed kitchen renovations across the Gulf Coast.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Modern Kitchen Remodel", loc: "Pascagoula, MS", img: g1Img },
              { title: "Farmhouse Kitchen Renovation", loc: "Moss Point, MS", img: g3Img },
              { title: "Custom Cabinetry & Island", loc: "Ocean Springs, MS", img: heroImg },
              { title: "Open-Concept Kitchen Makeover", loc: "Biloxi, MS", img: g5Img },
              { title: "Luxury Kitchen with Quartz Countertops", loc: "Gautier, MS", img: g3Img }
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

      {/* Section 10: Testimonials – Kitchen Remodels */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Testimonials</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              What Our Clients Say About <span className="text-gradient-gold">Their New Kitchens</span>
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

      {/* Section 11: FAQs – Kitchen Remodeling */}
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
                    Ready for Your Dream Kitchen?
                  </h2>
                  <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xl font-medium font-sans">
                    Whether you want a gourmet kitchen, a cozy farmhouse space, or need emergency repairs after water damage — Blackwater USA LLC is here to help. Let's create the kitchen you've always wanted.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-white/90">
                    <span className="flex items-center gap-2">📞 (228) 219-8338</span>
                    <span className="flex items-center gap-2">✉️ blackwaterusa.llc@gmail.com</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col lg:w-full">
                  <a href="/estimate" className="btn-gold w-full text-center py-4 text-base font-bold shadow-lg">
                    Get Your Free Kitchen Remodel Estimate
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
