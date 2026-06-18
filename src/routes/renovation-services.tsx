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
  Home as HomeIcon,
  Building,
  Sparkle
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import sRenovation from "@/assets/s_renovation.png";
import whyImg from "@/assets/why.jpg";
import aboutImg from "@/assets/about.jpg";
import g1Img from "@/assets/g1.jpg";
import g2Img from "@/assets/g2.jpg";
import g3Img from "@/assets/g3.jpg";
import g5Img from "@/assets/g5.jpg";
import g6Img from "@/assets/g6.jpg";

export const Route = createFileRoute("/renovation-services")({
  head: () => ({
    meta: [
      { title: "Renovation Services – Transform Your Home or Commercial Space" },
      { name: "description", content: "Expert renovation services by Blackwater USA LLC in Moss Point, MS, and across the Gulf Coast. 43 years of experience, licensed & insured, free estimates 24/7. Call (228) 219-8338 today." },
      { property: "og:title", content: "Renovation Services – Blackwater USA LLC" },
      { property: "og:description", content: "Expert renovation services by Blackwater USA LLC in Moss Point, MS, and across the Gulf Coast. 43 years of experience, licensed & insured, free estimates 24/7. Call (228) 219-8338 today." },
      { property: "og:url", content: "/renovation-services" },
    ],
    links: [{ rel: "canonical", href: "/renovation-services" }],
  }),
  component: RenovationServicesPage,
});

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

function RenovationServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const residentialRenovations = [
    { name: "Whole-House Renovations", desc: "Complete transformation of your home — inside and out." },
    { name: "Room Additions", desc: "Expand your living space with new bedrooms, family rooms, or sunrooms." },
    { name: "Basement Finishing", desc: "Turn unfinished basements into functional living areas, home theaters, or gyms." },
    { name: "Attic Conversions", desc: "Create additional bedrooms, offices, or studios." },
    { name: "Flooring Upgrades", desc: "Hardwood, tile, luxury vinyl, and carpet installation." },
    { name: "Interior Painting", desc: "Fresh, professional paint jobs for walls, ceilings, and trim." },
    { name: "Exterior Renovations", desc: "Siding, roofing, windows, doors, and facade improvements." },
    { name: "Outdoor Living Spaces", desc: "Decks, patios, porches, and outdoor kitchens." },
    { name: "Aging-in-Place Modifications", desc: "Accessibility upgrades for safety and comfort." }
  ];

  const commercialRenovations = [
    { name: "Office Build-Outs", desc: "Custom office spaces, conference rooms, and workstations." },
    { name: "Retail Store Remodels", desc: "Modern, inviting retail environments that attract customers." },
    { name: "Restaurant & Hospitality Renovations", desc: "Dining areas, kitchens, bars, and guest spaces." },
    { name: "Warehouse & Industrial Upgrades", desc: "Functional, safe, and code-compliant industrial spaces." },
    { name: "Tenant Improvements", desc: "Custom renovations for new tenants." },
    { name: "Accessibility (ADA) Upgrades", desc: "Compliance with accessibility standards." },
    { name: "Commercial Exterior Renovations", desc: "Storefronts, signage, parking lots, and landscaping." },
    { name: "Emergency Commercial Repairs", desc: "24/7 restoration after damage." }
  ];

  const designStyles = [
    { style: "Modern", features: "Clean lines, minimalist design, neutral palettes, and smart technology." },
    { style: "Traditional", features: "Classic details, warm woods, elegant finishes, and timeless appeal." },
    { style: "Farmhouse", features: "Shiplap, rustic accents, apron sinks, and open shelving." },
    { style: "Contemporary", features: "Bold contrasts, mixed materials, and cutting-edge design." },
    { style: "Industrial", features: "Exposed elements, concrete, metal, and urban loft vibes." },
    { style: "Coastal", features: "Light, airy spaces, natural textures, and beach-inspired colors." },
    { style: "Transitional", features: "A balanced blend of traditional and modern for timeless elegance." },
    { style: "Sustainable", features: "Eco-friendly materials, energy-efficient systems, and green building practices." }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation & Estimate",
      desc: "We meet with you to discuss your goals, needs, and budget. We assess the space, listen to your ideas, and provide a detailed, no-obligation estimate — available 24/7."
    },
    {
      step: "02",
      title: "Design & Planning",
      desc: "We work with you to finalize designs, select materials, and create a detailed project plan. We handle all necessary permits and coordinate with structural resources if needed."
    },
    {
      step: "03",
      title: "Preparation & Demolition",
      desc: "Our team prepares the site, removes old materials, and addresses any underlying issues (plumbing, electrical, structural) before beginning new construction."
    },
    {
      step: "04",
      title: "Construction & Renovation",
      desc: "We execute the renovation with precision and care — managing all trades, quality control, and timelines. We keep you informed every step of the way."
    },
    {
      step: "05",
      title: "Final Walkthrough & Completion",
      desc: "We walk through the finished space with you, address any final touches, and ensure you're 100% satisfied before we close out the project."
    }
  ];

  const testimonials = [
    {
      quote: "Blackwater USA completely transformed our outdated home. They renovated the kitchen, bathrooms, and living areas — and the results are stunning. Richard and his team were professional, communicative, and delivered on time. We love our new home!",
      author: "Linda K.",
      location: "Moss Point, MS"
    },
    {
      quote: "We needed a complete renovation for our commercial office space. Blackwater USA handled everything — from design to construction — and the results are professional and modern. Our employees and clients love the new space.",
      author: "David R.",
      location: "Biloxi, MS"
    },
    {
      quote: "After a fire damaged our restaurant, we thought we'd be closed for months. Blackwater USA managed the insurance claim and completed the renovation ahead of schedule. We're back in business — and the space looks better than ever.",
      author: "Steve M.",
      location: "Gautier, MS"
    }
  ];

  const faqs: FAQItem[] = [
    {
      id: 1,
      q: "What's the difference between a renovation and a remodel?",
      a: "A renovation typically involves updating or restoring an existing space, while a remodel involves changing the structure or layout. We do both!"
    },
    {
      id: 2,
      q: "How much does a renovation cost?",
      a: "Costs vary based on size, scope, and materials. We provide free, detailed estimates tailored to your specific project."
    },
    {
      id: 3,
      q: "How long does a renovation take?",
      a: "Timelines vary — from a few weeks for smaller projects to several months for full-home renovations. We provide a clear timeline upfront."
    },
    {
      id: 4,
      q: "Do you handle permits and inspections?",
      a: "Yes. We handle all necessary permits and coordinate inspections to ensure code compliance."
    },
    {
      id: 5,
      q: "Can you help with design?",
      a: "Absolutely! We work with you on layout, materials, and finishes to create a space that matches your vision and budget."
    },
    {
      id: 6,
      q: "Do you offer financing?",
      a: "We offer flexible payment options. Call us to discuss financing for your renovation."
    },
    {
      id: 7,
      q: "Can you renovate while I'm living in the home?",
      a: "Yes — we work efficiently and keep disruption to a minimum. We can phase projects to accommodate your living situation."
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
            src={sRenovation} 
            alt="Blackwater USA renovation services" 
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
                Renovation Services – <span className="text-gradient-gold">Transform Your Home</span> or Commercial Space
              </h1>
            </Reveal>
            <Reveal variant="reveal" className="stagger-2">
              <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
                Expert renovation services by Blackwater USA LLC in Moss Point, MS, and across the Gulf Coast. 43 years of experience, licensed & insured, free estimates 24/7.
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
                <span className="section-label">Transformations</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Breathe New Life Into Your Property – <span className="text-gradient-gold">Expert Renovations for Every Space</span>
                </h2>
                
                <div className="mt-6 space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  <p>
                    Whether you're looking to update a single room, expand your living space, or completely transform your commercial property, Blackwater USA LLC delivers expert renovation services tailored to your needs. With 43 years of hands-on experience, Richard Burns and our team bring unmatched craftsmanship, creative vision, and meticulous attention to detail to every project.
                  </p>
                  <p>
                    We handle renovations of all sizes — from cosmetic updates to full-scale structural changes — for both residential and commercial clients across a 35-mile radius of Moss Point, MS. And with 24/7 availability, we're always ready to help, whether it's a planned upgrade or an emergency restoration.
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

      {/* Section 2: What Are Renovation Services? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Overview</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              More Than a Makeover – <span className="text-gradient-gold">Comprehensive Renovation Solutions</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Renovation goes beyond simple repairs or cosmetic updates. It's about reimagining spaces to improve functionality, aesthetics, and value.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Interior Renovations", desc: "Kitchens, bathrooms, master bedrooms, living areas, finished basements, and more." },
              { title: "Exterior Renovations", desc: "Siding, roofing, modern energy-efficient windows, doors, and facade updates." },
              { title: "Structural Changes", desc: "Wall removals, load-bearing beam installations, extensions, and layout reconfigurations." },
              { title: "System Upgrades", desc: "Modern electrical rewiring, code compliance plumbing, HVAC ducting, and lighting improvements." },
              { title: "Cosmetic Updates", desc: "Premium interior/exterior painting, flooring, trim, custom millwork, and finishes." },
              { title: "Commercial Renovations", desc: "Custom office build-outs, tenant improvements, retail upgrades, and restaurant remodels." },
              { title: "Insurance Claim Rebuilds", desc: "Full contracting and restoration after fire, storm, or water damage strikes." },
              { title: "Turnkey Project Management", desc: "End-to-end oversight covering design, permitting, coordination, and final cleanup." }
            ].map((item, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${(idx % 4) + 1}`}>
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

      {/* Section 3: Our Renovation Services – Detailed Breakdown */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label justify-center">Our Capabilities</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              What We Renovate – <span className="text-gradient-gold">Residential & Commercial</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We have the skills, experience, and crew to handle renovations of any scope and complexity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Residential */}
            <Reveal variant="reveal-left" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <HomeIcon className="w-6 h-6 text-gold" />
                <h3 className="text-2xl font-bold text-navy font-display">Residential Renovations</h3>
              </div>
              <div className="divide-y divide-border/60">
                {residentialRenovations.map((row, idx) => (
                  <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                    <h4 className="font-bold text-navy text-sm sm:text-base">{row.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-semibold">{row.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Commercial */}
            <Reveal variant="reveal-right" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Building className="w-6 h-6 text-red" />
                <h3 className="text-2xl font-bold text-navy font-display">Commercial Renovations</h3>
              </div>
              <div className="divide-y divide-border/60">
                {commercialRenovations.map((row, idx) => (
                  <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                    <h4 className="font-bold text-navy text-sm sm:text-base">{row.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-semibold">{row.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* Section 4: Our Renovation Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white relative w-full overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold-light)_0%,_transparent_60%)] opacity-5 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label text-gold before:bg-gold justify-center">Our Process</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-tight font-display">
              From Vision to Completion – <span className="text-gradient-gold">Our 5-Step Process</span>
            </h2>
            <p className="mt-4 text-white/85 font-medium text-sm sm:text-base">
              We make renovations stress-free and transparent. Here's how we bring your vision to life:
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

      {/* Section 5: Renovation Styles & Trends */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Inspiration</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Find Your Inspiration – <span className="text-gradient-gold">Popular Renovation Styles</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We work with you to create a space that reflects your style and meets your functional needs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <div className="divide-y divide-border">
              <div className="grid grid-cols-[1fr_2fr] p-4 bg-navy text-white font-bold text-xs sm:text-sm tracking-wider uppercase">
                <div>Style Aesthetic</div>
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

      {/* Section 6: Materials & Finishes We Use */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label justify-center">Quality Build</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Premium Materials – <span className="text-gradient-gold">Quality That Lasts</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We specify and install only the highest-quality structural products and design materials.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {/* Flooring */}
            <div className="bg-white p-5 rounded-2xl border border-border shadow-sm">
              <h4 className="font-bold text-navy font-display text-sm border-b border-border pb-2 mb-3">Flooring</h4>
              <ul className="space-y-2 text-xs font-semibold text-muted-foreground">
                {["Hardwood", "Ceramic & Tile", "Luxury Vinyl Plank", "Natural Stone", "Heated Systems"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-gold shrink-0" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wall Finishes */}
            <div className="bg-white p-5 rounded-2xl border border-border shadow-sm">
              <h4 className="font-bold text-navy font-display text-sm border-b border-border pb-2 mb-3">Wall Finishes</h4>
              <ul className="space-y-2 text-xs font-semibold text-muted-foreground">
                {["Premium Paint", "Wallpaper", "Shiplap & Paneling", "Stone & Brick Veneer", "Custom Trim"].map((item, idx) => (
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
                {["Granite", "Quartz", "Marble", "Solid Surface", "Butcher Block"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-gold shrink-0" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cabinetry */}
            <div className="bg-white p-5 rounded-2xl border border-border shadow-sm">
              <h4 className="font-bold text-navy font-display text-sm border-b border-border pb-2 mb-3">Cabinetry</h4>
              <ul className="space-y-2 text-xs font-semibold text-muted-foreground">
                {["Custom Wood", "Semi-Custom", "Soft-Close drawers", "Smart Storage", "Premium Veneer"].map((item, idx) => (
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
                {["Moen, Delta, Kohler", "LED lighting", "Smart Technology", "ADA hardware"].map((item, idx) => (
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
              Why Clients Trust Us for <span className="text-gradient-gold">Renovations of All Sizes</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              With decades of local contracting experience, we bring unmatched reliability and craftsmanship to every renovation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "43 Years of Experience", desc: "We've renovated hundreds of homes and businesses across the Gulf Coast." },
              { title: "Fully Licensed & Insured", desc: "Bonded, licensed & insured contractor ensuring complete safety of your investment." },
              { title: "Family-Owned Values", desc: "Richard Burns operates with transparency, honesty, and client-first values." },
              { title: "24/7 Availability", desc: "We are always available for emergency plumbing failures or immediate structural fixes." },
              { title: "Insurance Claim Experts", desc: "Storm or water damage claims? We document everything and coordinate adjuster approvals." },
              { title: "Turnkey Solutions", desc: "We manage the entire project lifecycle, from initial design concepts to final walkthroughs." }
            ].map((item, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${(idx % 3) + 1}`}>
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

      {/* Section 8: Insurance Claim Renovations */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-5xl mx-auto">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Restoration</span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy leading-tight font-display">
                  Renovation & Restoration for <span className="text-gradient-gold">Insurance Claims</span>
                </h2>
                <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
                  When disaster strikes, we help you rebuild better than before. We specialize in renovation and restoration for properties damaged by water leaks, storm flooding, fire, wind, and hurricanes.
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
                    <span>Complete structural restoration and rebuilding</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-border bg-white p-2">
                <img src={g6Img} alt="Insurance claim restoration rebuild" className="w-full h-auto object-cover rounded-2xl" />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 9: Renovation Gallery */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center font-sans">Gallery Highlights</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              See Our Renovation <span className="text-gradient-gold">Transformations</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Browse some of our completed renovations across the Gulf Coast.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Whole-House Renovation", loc: "Moss Point, MS", img: g3Img },
              { title: "Commercial Office Build-Out", loc: "Biloxi, MS", img: g5Img },
              { title: "Basement Transformation", loc: "Pascagoula, MS", img: g1Img },
              { title: "Exterior Facelift", loc: "Ocean Springs, MS", img: whyImg },
              { title: "Restaurant Renovation", loc: "Gautier, MS", img: heroImg }
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

      {/* Section 10: Testimonials – Renovation Projects */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Testimonials</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              What Our Clients Say About <span className="text-gradient-gold">Their Renovations</span>
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

      {/* Section 11: FAQs – Renovation Services */}
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
                    Ready to Transform Your Space?
                  </h2>
                  <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xl font-medium font-sans">
                    Whether you're updating a single room, renovating your entire home, or transforming your commercial property — Blackwater USA LLC is here to help. Let's bring your vision to life.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-white/90">
                    <span className="flex items-center gap-2">📞 (228) 219-8338</span>
                    <span className="flex items-center gap-2">✉️ blackwaterusa.llc@gmail.com</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col lg:w-full">
                  <a href="/estimate" className="btn-gold w-full text-center py-4 text-base font-bold shadow-lg">
                    Get Your Free Renovation Estimate
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
