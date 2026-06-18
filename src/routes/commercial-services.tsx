import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wrench, 
  Phone, 
  ChevronDown, 
  Check, 
  Shield, 
  Award, 
  ArrowRight,
  Sparkle,
  Star,
  Sparkles,
  Flame,
  Volume2,
  TrendingUp,
  Droplets,
  Building,
  Home as HomeIcon,
  HelpCircle,
  FileCheck,
  Clock,
  Zap,
  Hammer,
  Truck,
  ShieldCheck
} from "lucide-react";

import sCommercial from "@/assets/s_commercial.png";
import whyImg from "@/assets/why.jpg";
import g1Img from "@/assets/g1.jpg";
import g2Img from "@/assets/g2.jpg";
import g3Img from "@/assets/g3.jpg";
import g5Img from "@/assets/g5.jpg";
import g6Img from "@/assets/g6.jpg";

export const Route = createFileRoute("/commercial-services")({
  head: () => ({
    meta: [
      { title: "Commercial Services – Reliable Contracting for Your Business" },
      { name: "description", content: "Expert commercial contracting services by Blackwater USA LLC in Moss Point, MS, and across the Gulf Coast. 43 years of experience, licensed & insured, free estimates 24/7. Call (228) 219-8338 today." },
      { property: "og:title", content: "Commercial Services – Blackwater USA LLC" },
      { property: "og:description", content: "Expert commercial contracting services by Blackwater USA LLC in Moss Point, MS, and across the Gulf Coast. 43 years of experience, licensed & insured, free estimates 24/7. Call (228) 219-8338 today." },
      { property: "og:url", content: "/commercial-services" },
    ],
    links: [{ rel: "canonical", href: "/commercial-services" }],
  }),
  component: CommercialServicesPage,
});

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

function CommercialServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const constructionServices = [
    { name: "Office Build-Outs", desc: "Custom office spaces, conference rooms, workstations, and reception areas." },
    { name: "Retail Store Remodels", desc: "Modern, inviting retail environments that attract customers and boost sales." },
    { name: "Restaurant & Hospitality Renovations", desc: "Dining areas, commercial kitchens, bars, and guest spaces." },
    { name: "Warehouse & Industrial Upgrades", desc: "Functional, safe, and code-compliant industrial spaces." },
    { name: "Tenant Improvements", desc: "Custom renovations for new tenants in multi-tenant properties." },
    { name: "Accessibility (ADA) Upgrades", desc: "Full compliance with accessibility standards for all commercial properties." },
    { name: "Commercial Additions", desc: "Expansion of existing commercial spaces." },
    { name: "Full Commercial Renovations", desc: "Complete transformations of offices, retail spaces, and more." }
  ];

  const repairServices = [
    { name: "Emergency Commercial Repairs", desc: "24/7 response for plumbing, electrical, roofing, and structural emergencies." },
    { name: "Commercial Electrical Services", desc: "Panel upgrades, wiring, lighting, security systems, and emergency repairs." },
    { name: "Commercial Plumbing Services", desc: "Pipe repairs, sewer line work, grease traps, water heaters, and more." },
    { name: "Commercial Painting", desc: "Interior and exterior painting for offices, retail, and industrial spaces." },
    { name: "Drywall Installation & Repair", desc: "New drywall, patching, texture matching, and finishing." },
    { name: "Flooring Installation", desc: "Commercial-grade flooring — tile, luxury vinyl, hardwood, and carpet." },
    { name: "Roofing Repairs", desc: "Minor and major roof repairs for commercial buildings." },
    { name: "Storefront Repairs", desc: "Glass, door, and storefront structural repairs." },
    { name: "Property Maintenance", desc: "Ongoing maintenance and preventive services." }
  ];

  const restorationServices = [
    { name: "Water Damage Restoration", desc: "Full restoration after leaks, floods, or burst pipes." },
    { name: "Fire & Smoke Damage Restoration", desc: "Repair and rebuilding after fire and smoke damage." },
    { name: "Storm Damage Repairs", desc: "Roof, siding, window, and structural repairs after storms." },
    { name: "Mold Remediation", desc: "Professional mold removal and prevention for commercial properties." },
    { name: "Insurance Claim Management", desc: "Full claim documentation, communication with adjusters, and project management." }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation & Estimate",
      desc: "We meet with you to understand your project goals, timeline, and budget. We provide a detailed, no-obligation estimate — available 24/7."
    },
    {
      step: "02",
      title: "Planning & Design",
      desc: "We work with you and your team (architects, designers, property managers) to finalize plans, select materials, and create a detailed project schedule."
    },
    {
      step: "03",
      title: "Permitting & Compliance",
      desc: "We handle all necessary permits and ensure your project meets all local commercial building codes and regulations."
    },
    {
      step: "04",
      title: "Construction & Project Management",
      desc: "Our team executes the project with efficiency and professionalism. We coordinate all trades, manage timelines, and keep you updated throughout the process."
    },
    {
      step: "05",
      title: "Final Walkthrough & Handover",
      desc: "We walk through the completed project with you, address any final touches, and ensure you're 100% satisfied before we consider the job complete."
    }
  ];

  const industries = [
    { name: "Office & Professional", examples: "Corporate offices, law firms, medical offices, real estate agencies." },
    { name: "Retail", examples: "Boutiques, department stores, grocery stores, shopping centers." },
    { name: "Restaurants & Hospitality", examples: "Restaurants, cafes, bars, hotels, motels, event venues." },
    { name: "Industrial & Warehouse", examples: "Warehouses, distribution centers, manufacturing facilities." },
    { name: "Multi-Family Housing", examples: "Apartments, condos, townhomes, senior living facilities." },
    { name: "Healthcare", examples: "Clinics, dental offices, urgent care centers." },
    { name: "Education", examples: "Schools, daycare centers, training facilities." },
    { name: "Government & Municipal", examples: "Public buildings, community centers, municipal facilities." },
    { name: "Religious Institutions", examples: "Churches, mosques, synagogues, community halls." }
  ];

  const testimonials = [
    {
      quote: "Blackwater USA completed a full office build-out for our new location. They worked efficiently, stayed within budget, and delivered exceptional quality. Our team loves the new space!",
      author: "David R.",
      location: "Biloxi, MS"
    },
    {
      quote: "After a fire damaged our restaurant, we thought we'd be closed for months. Blackwater USA handled the insurance claim and completed the renovation ahead of schedule. We're back in business — and the space looks even better than before.",
      author: "Steve M.",
      location: "Gautier, MS"
    },
    {
      quote: "We've used Blackwater USA for multiple retail store remodels. They understand the need to minimize disruption, and their work is always top quality. Highly recommended!",
      author: "James R.",
      location: "Ocean Springs, MS"
    }
  ];

  const faqs: FAQItem[] = [
    {
      id: 1,
      q: "Do you handle commercial projects of all sizes?",
      a: "Yes — we handle everything from small office repairs to large-scale commercial renovations and new construction."
    },
    {
      id: 2,
      q: "Do you work after hours to minimize business disruption?",
      a: "Absolutely. We can schedule work during evenings, weekends, or holidays to keep your business operations running smoothly."
    },
    {
      id: 3,
      q: "Are you licensed and insured for commercial work?",
      a: "Yes — we are fully licensed, insured, and bonded for all commercial projects."
    },
    {
      id: 4,
      q: "Can you help with commercial insurance claims?",
      a: "Yes — we specialize in commercial restoration for insurance claims and handle all communication with your adjuster."
    },
    {
      id: 5,
      q: "Do you offer free estimates for commercial projects?",
      a: "Yes — we provide free, no-obligation estimates 24/7."
    },
    {
      id: 6,
      q: "How quickly can you respond to a commercial emergency?",
      a: "We typically respond within 1–2 hours. For urgent calls, we can often be there even sooner."
    },
    {
      id: 7,
      q: "Do you coordinate with architects and designers?",
      a: "Yes — we work seamlessly with your design team to ensure your vision is realized."
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
        <div className="absolute inset-0 z-0">
          <img 
            src={sCommercial} 
            alt="Blackwater USA commercial contracting services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/85 to-navy-dark/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_60%)]" />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <Reveal variant="reveal" className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold font-sans">Businesses</span>
            </Reveal>
            <Reveal variant="reveal" className="stagger-1">
              <h1 className="text-[34px] sm:text-[46px] lg:text-[56px] font-bold text-white leading-tight tracking-[-0.03em] font-display">
                Commercial Services – <span className="text-gradient-gold">Reliable Contracting for Your Business</span>
              </h1>
            </Reveal>
            <Reveal variant="reveal" className="stagger-2">
              <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
                Expert commercial contracting services by Blackwater USA LLC in Moss Point, MS, and across the Gulf Coast. 43 years of experience, licensed & insured, free estimates 24/7.
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
                <span className="section-label">Commercial Contracting</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Professional Commercial Contracting – <span className="text-gradient-gold">Minimize Downtime, Maximize Quality</span>
                </h2>
                
                <div className="mt-6 space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  <p>
                    Your business deserves a contractor who understands the unique demands of commercial projects — tight deadlines, minimal disruption, code compliance, and high-quality results. At Blackwater USA LLC, we deliver exactly that.
                  </p>
                  <p>
                    With 43 years of hands-on experience, Richard Burns and our team bring unmatched expertise, reliability, and professionalism to every commercial project. We work with offices, retail stores, restaurants, warehouses, multi-unit properties, and more — providing comprehensive services from renovations and build-outs to emergency repairs and insurance claim restoration.
                  </p>
                  <p>
                    We serve businesses across a 35-mile radius of Moss Point, MS — and we're available 24/7 for emergencies and free estimates.
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

      {/* Section 2: Why Choose Blackwater USA LLC for Your Commercial Project? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Reliable Partner</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Why Businesses Across <span className="text-gradient-gold">the Gulf Coast Trust Us</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Commercial projects require a different level of expertise, coordination, and reliability. Here's why businesses choose Blackwater USA LLC:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "43 Years of Experience", desc: "We've completed hundreds of commercial projects of all sizes." },
              { title: "Licensed, Insured & Bonded", desc: "Full protection for your business and investment." },
              { title: "Minimal Disruption", desc: "We work efficiently around your business hours to minimize downtime." },
              { title: "Code Compliance", desc: "All work meets or exceeds local and national commercial codes." },
              { title: "One-Stop Shop", desc: "We handle everything — from plumbing and electrical to painting and drywall." },
              { title: "Fast Response", desc: "24/7 availability for emergencies and urgent repairs." },
              { title: "Insurance Claim Experts", desc: "We handle commercial damage repairs and claims management." },
              { title: "Project Management", desc: "We coordinate all trades and manage timelines so you don't have to." },
              { title: "Quality Craftsmanship", desc: "We never cut corners. Every project reflects our 43-year legacy." }
            ].map((item, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${(idx % 3) + 1}`}>
                <div className="p-6 bg-white border border-border rounded-2xl h-full flex flex-col hover:border-gold/30 hover:shadow-md transition-all shadow-sm">
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

      {/* Section 3: Our Commercial Services – Full Overview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label justify-center font-sans">Services Overview</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Comprehensive Commercial Solutions – <span className="text-gradient-gold">Renovations, Repairs & More</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Commercial Construction & Renovation */}
            <Reveal variant="reveal-left" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Building className="w-6 h-6 text-gold shrink-0" />
                <h3 className="text-xl font-bold text-navy font-display">🏢 Construction & Renovation</h3>
              </div>
              <div className="divide-y divide-border/60 flex-1 space-y-4">
                {constructionServices.map((row, idx) => (
                  <div key={idx} className="pt-3.5 first:pt-0">
                    <h4 className="font-bold text-navy text-sm sm:text-base">{row.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-semibold leading-relaxed">{row.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Commercial Repairs & Maintenance */}
            <Reveal variant="reveal-scale" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Hammer className="w-6 h-6 text-red shrink-0" />
                <h3 className="text-xl font-bold text-navy font-display">🛠️ Repairs & Maintenance</h3>
              </div>
              <div className="divide-y divide-border/60 flex-1 space-y-4">
                {repairServices.map((row, idx) => (
                  <div key={idx} className="pt-3.5 first:pt-0">
                    <h4 className="font-bold text-navy text-sm sm:text-base">{row.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-semibold leading-relaxed">{row.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Commercial Insurance Claim Restoration */}
            <Reveal variant="reveal-right" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-6 h-6 text-gold shrink-0" />
                <h3 className="text-xl font-bold text-navy font-display">🚨 Insurance & Restoration</h3>
              </div>
              <div className="divide-y divide-border/60 flex-1 space-y-4">
                {restorationServices.map((row, idx) => (
                  <div key={idx} className="pt-3.5 first:pt-0">
                    <h4 className="font-bold text-navy text-sm sm:text-base">{row.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-semibold leading-relaxed">{row.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* Section 4: Our Commercial Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white relative w-full overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold-light)_0%,_transparent_60%)] opacity-5 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label text-gold before:bg-gold justify-center">Proven Process</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-tight font-display">
              Your Commercial Project, <span className="text-gradient-gold">Our Proven Process</span>
            </h2>
            <p className="mt-4 text-white/85 font-medium text-sm sm:text-base">
              We understand that commercial projects require efficiency, coordination, and clear communication. Here's how we deliver:
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

      {/* Section 5: Industries We Serve */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Industries</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              We Work With Businesses <span className="text-gradient-gold">Across Every Industry</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <div className="divide-y divide-border">
              <div className="grid grid-cols-[1fr_2fr] p-4 bg-navy text-white font-bold text-xs sm:text-sm tracking-wider uppercase">
                <div>Industry Sector</div>
                <div className="pl-2">Examples & Scope</div>
              </div>
              {industries.map((row, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-[1fr_2fr] p-4 font-medium text-xs sm:text-sm items-center transition-colors duration-200 hover:bg-gold/5 ${
                    idx % 2 === 0 ? 'bg-secondary/10' : 'bg-white'
                  }`}
                >
                  <div className="text-navy-dark font-bold leading-snug flex items-center gap-2">
                    <Sparkle className="w-3.5 h-3.5 text-gold shrink-0" />
                    {row.name}
                  </div>
                  <div className="text-muted-foreground font-medium pl-2 leading-relaxed">{row.examples}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 6: Quality Control */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Why Choose Us</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Your Business Partner – <span className="text-gradient-gold">Reliable, Professional, and Experienced</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "43 Years of Legacy", desc: "We've completed hundreds of commercial projects across the Gulf Coast." },
              { title: "Fully Licensed & Insured", desc: "Your business and investment are fully protected." },
              { title: "Family Values", desc: "Honest, transparent, and client-focused." },
              { title: "Minimal Disruption", desc: "We work around your business hours to keep operations running." },
              { title: "One-Stop Shop", desc: "We handle everything, so you don't need to manage multiple contractors." },
              { title: "24/7 Availability", desc: "We're always on call for emergencies and urgent repairs." },
              { title: "Claims Adjustment", desc: "We handle commercial damage repairs and claims management." },
              { title: "Turnkey Project Management", desc: "We coordinate all trades and manage timelines for you." },
              { title: "Premium Materials", desc: "Quality craftsmanship. We never cut corners. Every project reflects our 43-year legacy." }
            ].map((item, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${(idx % 3) + 1}`}>
                <div className="p-6 bg-white border border-border/80 rounded-2xl h-full flex flex-col hover:border-gold/30 hover:shadow-md transition-all shadow-sm">
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

      {/* Section 7: Insurance Claim Commercial Restoration */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-5xl mx-auto">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Restoration</span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy leading-tight font-display">
                  Restoring Your Business After Damage – <span className="text-gradient-gold">We Handle Everything</span>
                </h2>
                <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
                  When disaster strikes your commercial property, we help you recover quickly and fully. We specialize in commercial restoration for insurance claims:
                </p>
                
                <h4 className="mt-6 font-bold text-navy text-base">We Handle All Types of Damage:</h4>
                <ul className="mt-3 grid grid-cols-2 gap-2 font-bold text-navy-dark text-xs sm:text-sm">
                  <li>💧 Water damage (burst pipes, leaks, floods)</li>
                  <li>🔥 Fire & smoke damage</li>
                  <li>🌊 Storm & hurricane damage</li>
                  <li>🧫 Mold & mildew damage</li>
                  <li>🌪️ Wind & hail damage</li>
                  <li>🚨 Vandalism & break-in damage</li>
                </ul>

                <h4 className="mt-8 font-bold text-navy text-base">What We Do For You:</h4>
                <ul className="mt-3 space-y-2 text-xs font-semibold text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Damage assessment and documentation</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Detailed estimates for your insurance claim</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Direct communication with your adjuster</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Complete restoration and rebuilding</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Final documentation for claim closure</li>
                </ul>
                <p className="mt-4 text-xs font-bold text-red">We work directly with your insurance provider — so you can focus on running your business.</p>
              </div>
            </Reveal>

            <Reveal variant="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-border bg-white p-2">
                <img src={g6Img} alt="Commercial insurance claim rebuild" className="w-full h-auto object-cover rounded-2xl" />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 8: Why Prompt Commercial Service Matters */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Downtime Mitigation</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Time is Money – <span className="text-gradient-gold">We Minimize Downtime</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We understand that every hour of downtime costs your business money. That's why we prioritize speed, efficiency, and minimal disruption:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Fast Response */}
            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Truck className="w-6 h-6 text-red" />
                <h4 className="font-bold text-navy font-display text-lg">Fast Response</h4>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm font-semibold text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" strokeWidth={3} />
                  <div>
                    <span className="text-navy font-bold block">24/7 Emergency Service</span>
                    We're available around the clock.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" strokeWidth={3} />
                  <div>
                    <span className="text-navy font-bold block">Rapid Deployment</span>
                    We mobilize quickly to minimize downtime.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold shrink-0" strokeWidth={3} />
                  <div>
                    <span className="text-navy font-bold block">Efficient Execution</span>
                    We work efficiently to get your business back online.
                  </div>
                </li>
              </ul>
            </div>

            {/* Minimal Disruption */}
            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-gold" />
                <h4 className="font-bold text-navy font-display text-lg">Minimal Disruption</h4>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm font-semibold text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" strokeWidth={3} />
                  <div>
                    <span className="text-navy font-bold block">After-Hours Work</span>
                    We can work during off-hours to avoid business interruptions.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" strokeWidth={3} />
                  <div>
                    <span className="text-navy font-bold block">Secure Job Sites</span>
                    We protect your property and assets.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold shrink-0" strokeWidth={3} />
                  <div>
                    <span className="text-navy font-bold block">Clean Worksites</span>
                    We maintain professional, organized job sites.
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Section 9: Commercial Gallery */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center font-sans">Portfolio</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              See Our Commercial <span className="text-gradient-gold">Work</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Browse our gallery to see real commercial projects completed by Blackwater USA LLC — from office build-outs to restaurant renovations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Office Build-Out", loc: "Biloxi, MS", img: g5Img },
              { title: "Restaurant Renovation", loc: "Gautier, MS", img: g1Img },
              { title: "Retail Store Remodel", loc: "Ocean Springs, MS", img: whyImg },
              { title: "Warehouse Electrical Upgrade", loc: "Pascagoula, MS", img: g2Img },
              { title: "Commercial Insurance Restoration", loc: "Moss Point, MS", img: g6Img }
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

      {/* Section 10: Testimonials – Commercial Projects */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Testimonials</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              What Business Owners Say About <span className="text-gradient-gold">Our Commercial Work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((test, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${idx + 1}`}>
                <div className="bg-white border border-border/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full relative shadow-sm">
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

      {/* Section 11: FAQs – Commercial Services */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center font-sans">Common Questions</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-secondary/25 rounded-3xl p-6 sm:p-10 border border-border shadow-sm space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`transition-all duration-300 border-b border-border/80 last:border-0 pb-4 last:pb-0 ${
                    isOpen ? 'bg-white border border-gold/30 rounded-2xl p-5 mb-2 border-b-0 shadow-sm' : ''
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
                    Let's Partner
                  </span>
                  <h2 className="mt-4 text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white leading-tight font-display">
                    Ready to Upgrade or Restore Your Commercial Property?
                  </h2>
                  <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xl font-medium font-sans">
                    Whether you're planning a renovation, need emergency repairs, or require insurance claim restoration — Blackwater USA LLC delivers professional commercial services you can trust. Let's keep your business moving forward.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-white/90">
                    <span className="flex items-center gap-2">📞 (228) 219-8338</span>
                    <span className="flex items-center gap-2">✉️ blackwaterusa.llc@gmail.com</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col lg:w-full">
                  <a href="/estimate" className="btn-gold w-full text-center py-4 text-base font-bold shadow-lg">
                    Get Your Free Commercial Estimate
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
