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
  Hammer
} from "lucide-react";

import sResidential from "@/assets/s_residential.png";
import whyImg from "@/assets/why.jpg";
import g1Img from "@/assets/g1.jpg";
import g2Img from "@/assets/g2.jpg";
import g3Img from "@/assets/g3.jpg";
import g5Img from "@/assets/g5.jpg";
import g6Img from "@/assets/g6.jpg";

export const Route = createFileRoute("/residential-services")({
  head: () => ({
    meta: [
      { title: "Residential Home Services & Repairs | Moss Point, MS" },
      { name: "description", content: "Comprehensive residential services by Blackwater USA LLC. We provide home repairs, renovations, and maintenance across the Mississippi Gulf Coast." },
      { property: "og:title", content: "Residential Services | Blackwater USA LLC" },
      { property: "og:description", content: "Comprehensive residential services by Blackwater USA LLC. We provide home repairs, renovations, and maintenance across the Mississippi Gulf Coast." },
      { property: "og:url", content: "https://blackwaterusallc.com/residential-services" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/residential-services" }],
  }),
  component: ResidentialServicesPage,
});

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

function ResidentialServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const interiorServices = [
    { name: "Kitchen Remodeling", desc: "Full kitchen transformations — custom cabinetry, countertops, backsplashes, appliances, and layout changes." },
    { name: "Bathroom Remodeling", desc: "Spa-like bathroom renovations — custom showers, tubs, vanities, tile, and accessibility features." },
    { name: "Whole-House Renovations", desc: "Complete interior transformations — from floor to ceiling." },
    { name: "Room Additions", desc: "Expand your living space with new bedrooms, family rooms, sunrooms, or home offices." },
    { name: "Basement Finishing", desc: "Turn unused basements into functional living areas, theaters, gyms, or guest suites." },
    { name: "Attic Conversions", desc: "Create additional bedrooms, studios, or hobby spaces." },
    { name: "Interior Painting", desc: "Professional painting for walls, ceilings, trim, cabinets, and custom finishes." },
    { name: "Drywall Installation & Repair", desc: "New drywall, patching, texture matching, and finishing." },
    { name: "Plumbing Services", desc: "Repairs, installations, water heaters, fixture upgrades, and emergency plumbing." },
    { name: "Electrical Services", desc: "Wiring, panel upgrades, lighting, outlets, smart home tech, and emergency electrical." },
    { name: "Flooring Installation", desc: "Hardwood, tile, luxury vinyl, carpet, and heated flooring systems." },
    { name: "Aging-in-Place Modifications", desc: "Grab bars, walk-in tubs, accessible showers, and ADA-compliant upgrades." }
  ];

  const exteriorServices = [
    { name: "Exterior Painting", desc: "Siding, trim, doors, eaves, and full exterior repaints." },
    { name: "Siding Installation & Repair", desc: "Wood, vinyl, fiber cement, and metal siding." },
    { name: "Roofing Repairs", desc: "Minor and major roof repairs for leaks, storm damage, and wear." },
    { name: "Window & Door Replacement", desc: "Energy-efficient windows, entry doors, patio doors, and storm doors." },
    { name: "Deck & Patio Construction", desc: "Custom decks, patios, porches, and outdoor living spaces." },
    { name: "Fence Installation & Repair", desc: "Wood, vinyl, chain-link, and custom fencing." },
    { name: "Gutter Installation & Repair", desc: "Seamless gutters, downspouts, and gutter guards." },
    { name: "Pressure Washing", desc: "Cleaning of siding, driveways, patios, and walkways." },
    { name: "Landscape Lighting", desc: "Outdoor lighting for beauty, safety, and security." }
  ];

  const emergencyServices = [
    { name: "Emergency Repairs", desc: "24/7 response for plumbing, electrical, roofing, and structural emergencies." },
    { name: "Water Damage Restoration", desc: "Full restoration after leaks, floods, or burst pipes." },
    { name: "Fire Damage Restoration", desc: "Repair and rebuilding after fire and smoke damage." },
    { name: "Storm Damage Repairs", desc: "Roof, siding, window, and structural repairs after storms." },
    { name: "Mold Remediation", desc: "Professional mold removal and prevention." },
    { name: "Insurance Claim Management", desc: "Full claim documentation, communication with adjusters, and project management." }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation & Estimate",
      desc: "We meet with you at your home (or virtually) to discuss your vision, needs, and budget. We assess the space and provide a detailed, no-obligation estimate — available 24/7."
    },
    {
      step: "02",
      title: "Design & Planning",
      desc: "We work with you to finalize designs, select materials, and create a detailed project plan. We handle all necessary permits and coordinate with designers or architects if needed."
    },
    {
      step: "03",
      title: "Preparation & Demolition",
      desc: "Our team prepares the work area, protects your furnishings, and carefully removes old materials. We address any underlying issues (plumbing, electrical, structural) before beginning new construction."
    },
    {
      step: "04",
      title: "Construction & Installation",
      desc: "We execute the project with precision and care — managing all trades, quality control, and timelines. We keep you informed every step of the way with regular updates."
    },
    {
      step: "05",
      title: "Final Walkthrough & Completion",
      desc: "We walk through the completed work with you, address any final touches, and ensure you're 100% satisfied before we consider the job complete."
    }
  ];

  const roomTransformations = [
    { room: "Kitchen", what: "Full remodels, cabinetry, countertops, backsplashes, lighting, and appliance installation." },
    { room: "Bathroom", what: "Custom showers, tubs, vanities, tile, lighting, and accessible fixtures." },
    { room: "Living Room", what: "Flooring, painting, drywall, lighting, and custom built-ins." },
    { room: "Bedroom", what: "Flooring, painting, closet systems, and lighting." },
    { room: "Basement", what: "Full finishing, flooring, drywall, lighting, and plumbing (bathrooms/bars)." },
    { room: "Attic", what: "Conversions into bedrooms, offices, or studios." },
    { room: "Home Office", what: "Custom built-ins, lighting, flooring, and electrical upgrades." },
    { room: "Laundry Room", what: "Cabinetry, plumbing, countertops, and lighting." },
    { room: "Outdoor Spaces", what: "Decks, patios, porches, outdoor kitchens, and landscape lighting." }
  ];

  const testimonials = [
    {
      quote: "Blackwater USA completely transformed our home. They renovated our kitchen, bathrooms, and added a new deck. Richard and his team were professional, communicative, and the quality is outstanding. We love our home!",
      author: "Linda K.",
      location: "Moss Point, MS"
    },
    {
      quote: "After a pipe burst and flooded our basement, Blackwater USA came to the rescue. They handled the insurance claim, managed the entire restoration, and finished ahead of schedule. Highly recommend!",
      author: "Tom & Beth W.",
      location: "Ocean Springs, MS"
    },
    {
      quote: "We hired Blackwater USA to paint our entire home exterior and install new gutters. The work is flawless, and the team was clean and respectful. We get compliments from neighbors all the time.",
      author: "Patricia L.",
      location: "Pascagoula, MS"
    }
  ];

  const faqs: FAQItem[] = [
    {
      id: 1,
      q: "Do you handle both small repairs and large renovations?",
      a: "Yes — no job is too small or too large. We handle everything from minor repairs to complete home transformations."
    },
    {
      id: 2,
      q: "Are you licensed and insured for residential work?",
      a: "Absolutely. We are fully licensed, insured, and bonded for your protection."
    },
    {
      id: 3,
      q: "Do you offer free estimates?",
      a: "Yes — we provide free, no-obligation estimates 24/7."
    },
    {
      id: 4,
      q: "Can you help with insurance claims for home damage?",
      a: "Yes — we specialize in insurance claim repairs and handle all communication with your adjuster."
    },
    {
      id: 5,
      q: "Do you offer financing for residential projects?",
      a: "We offer flexible payment options. Call us to discuss financing for your project."
    },
    {
      id: 6,
      q: "How quickly can you start my project?",
      a: "For most projects, we can start within 24–48 hours. For emergencies, we're on-site the same night."
    },
    {
      id: 7,
      q: "Do you work on older homes?",
      a: "Yes — we have extensive experience with older homes, including rewiring, repiping, and structural updates."
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
            src={sResidential} 
            alt="Blackwater USA residential services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/85 to-navy-dark/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_60%)]" />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <Reveal variant="reveal" className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold font-sans">Homeowners</span>
            </Reveal>
            <Reveal variant="reveal" className="stagger-1">
              <h1 className="text-[34px] sm:text-[46px] lg:text-[56px] font-bold text-white leading-tight tracking-[-0.03em] font-display">
                Residential Services – <span className="text-gradient-gold">Your Home, Our Expertise</span>
              </h1>
            </Reveal>
            <Reveal variant="reveal" className="stagger-2">
              <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
                Comprehensive residential services by Blackwater USA LLC in Moss Point, MS, and across the Gulf Coast. 43 years of experience, licensed & insured, free estimates 24/7.
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
                <span className="section-label">Residential Solutions</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Complete Home Services – <span className="text-gradient-gold">From Repairs to Full Renovations</span>
                </h2>
                
                <div className="mt-6 space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  <p>
                    Your home is your biggest investment — and your most personal space. At Blackwater USA LLC, we treat every home like our own. With 43 years of hands-on experience, Richard Burns and our team deliver comprehensive residential services that enhance comfort, safety, beauty, and value.
                  </p>
                  <p>
                    From minor repairs to complete home transformations, we offer a full spectrum of services under one roof. We're a licensed, insured, and bonded family-owned business serving homeowners across a 35-mile radius of Moss Point, MS — and we're available 24/7 for emergencies and free estimates.
                  </p>
                  <p>
                    Whether you're planning a dream kitchen, need emergency plumbing, or want to refresh your home's exterior, we're here to help.
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

      {/* Section 2: Why Choose Blackwater USA LLC for Your Home? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">The Difference</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Why Homeowners Trust Us With <span className="text-gradient-gold">Their Most Important Investment</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "43 Years of Experience", desc: "We've worked on hundreds of homes, solving every problem imaginable." },
              { title: "Licensed, Insured & Bonded", desc: "Your home and family are fully protected." },
              { title: "Family-Owned Values", desc: "Honest, transparent, and client-focused." },
              { title: "24/7 Availability", desc: "Emergencies don't wait — and neither do we." },
              { title: "One-Stop Shop", desc: "We handle everything from plumbing to painting to full remodels." },
              { title: "Insurance Claim Experts", desc: "We handle damage repairs and claims management for you." },
              { title: "Free Estimates", desc: "No obligation, no pressure — just honest pricing." },
              { title: "Quality Craftsmanship", desc: "We never cut corners. Every project reflects our 43-year legacy." },
              { title: "Clean & Professional", desc: "We protect your property and leave it spotless." },
              { title: "Local & Proud", desc: "We're your neighbors, serving the Gulf Coast community we love." }
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

      {/* Section 3: Our Residential Services – Full Overview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label justify-center">Full Overview</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Every Service Your Home Could Need – <span className="text-gradient-gold">All in One Place</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We offer a comprehensive range of residential services, covering every room inside your home and every surface outside.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Interior Services */}
            <Reveal variant="reveal-left" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <HomeIcon className="w-6 h-6 text-gold shrink-0" />
                <h3 className="text-xl font-bold text-navy font-display">🏠 Interior Services</h3>
              </div>
              <div className="divide-y divide-border/60 flex-1 space-y-4">
                {interiorServices.map((row, idx) => (
                  <div key={idx} className="pt-3.5 first:pt-0">
                    <h4 className="font-bold text-navy text-sm sm:text-base">{row.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-semibold leading-relaxed">{row.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Exterior Services */}
            <Reveal variant="reveal-scale" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Hammer className="w-6 h-6 text-red shrink-0" />
                <h3 className="text-xl font-bold text-navy font-display">🌳 Exterior Services</h3>
              </div>
              <div className="divide-y divide-border/60 flex-1 space-y-4">
                {exteriorServices.map((row, idx) => (
                  <div key={idx} className="pt-3.5 first:pt-0">
                    <h4 className="font-bold text-navy text-sm sm:text-base">{row.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-semibold leading-relaxed">{row.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Insurance Claim & Emergency Services */}
            <Reveal variant="reveal-right" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-6 h-6 text-gold shrink-0" />
                <h3 className="text-xl font-bold text-navy font-display">🚨 Emergency & Insurance</h3>
              </div>
              <div className="divide-y divide-border/60 flex-1 space-y-4">
                {emergencyServices.map((row, idx) => (
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

      {/* Section 4: Our Residential Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white relative w-full overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold-light)_0%,_transparent_60%)] opacity-5 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label text-gold before:bg-gold justify-center">Our Process</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-tight font-display">
              Your Home, Our Process – <span className="text-gradient-gold">Stress-Free from Start to Finish</span>
            </h2>
            <p className="mt-4 text-white/85 font-medium text-sm sm:text-base">
              We make home improvement projects easy and transparent. Here's how we work with you:
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto relative">
            {processSteps.map((step, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${step.step} flex flex-col items-center text-center relative`}>
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

      {/* Section 5: Room-by-Room Transformation */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Room-by-Room</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Every Room, <span className="text-gradient-gold">Transformed</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We have the skills and experience to transform every room in your home:
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <div className="divide-y divide-border">
              <div className="grid grid-cols-[1fr_2fr] p-4 bg-navy text-white font-bold text-xs sm:text-sm tracking-wider uppercase">
                <div>Room</div>
                <div className="pl-2">What We Do</div>
              </div>
              {roomTransformations.map((row, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-[1fr_2fr] p-4 font-medium text-xs sm:text-sm items-center transition-colors duration-200 hover:bg-gold/5 ${
                    idx % 2 === 0 ? 'bg-secondary/10' : 'bg-white'
                  }`}
                >
                  <div className="text-navy-dark font-bold leading-snug flex items-center gap-2">
                    <Sparkle className="w-3.5 h-3.5 text-gold shrink-0" />
                    {row.room}
                  </div>
                  <div className="text-muted-foreground font-medium pl-2 leading-relaxed">{row.what}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 6: Quality Craftsmanship */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Legacy of Trust</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Your Home Deserves the Best – <span className="text-gradient-gold">We Deliver Exactly That</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              With 43 years of hands-on experience, we've installed, built, and repaired homes across the Gulf Coast with total precision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "43 Years of Legacy", desc: "Richard Burns operates with transparency, honesty, and client-first values." },
              { title: "Licensed & Insured", desc: "Fully licensed, insured & bonded contractor ensuring complete safety of your home." },
              { title: "Family Values", desc: "Family-owned and locally operated with pride on the Mississippi Gulf Coast." },
              { title: "24/7 Home Emergencies", desc: "Emergency structural damage or plumbing failures resolved immediately." },
              { title: "Insurance Claims Rebuild", desc: "Comprehensive home restoration after fires, wind storms, or water leaks." },
              { title: "One-Stop Contractor", desc: "No need to coordinate multiple trades. We manage every phase." }
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

      {/* Section 7: Insurance Claim Residential Services */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-5xl mx-auto">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Restoration</span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy leading-tight font-display">
                  Restoring Your Home After Damage – <span className="text-gradient-gold">We Handle Everything</span>
                </h2>
                <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
                  When disaster strikes your home, we're here to help you rebuild and recover. We specialize in residential restoration for insurance claims:
                </p>
                
                <h4 className="mt-6 font-bold text-navy text-base">We Handle All Types of Damage:</h4>
                <ul className="mt-3 grid grid-cols-2 gap-2 font-bold text-navy-dark text-xs sm:text-sm">
                  <li>💧 Water damage (burst pipes, leaks, floods)</li>
                  <li>🔥 Fire & smoke damage</li>
                  <li>🌊 Storm & hurricane damage</li>
                  <li>🧫 Mold & mildew damage</li>
                  <li>🌪️ Wind & hail damage</li>
                </ul>

                <h4 className="mt-8 font-bold text-navy text-base">What We Do For You:</h4>
                <ul className="mt-3 space-y-2 text-xs font-semibold text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Damage assessment and documentation</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Detailed estimates for your insurance claim</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Direct communication with your adjuster</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Complete restoration and rebuilding</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Final documentation for claim closure</li>
                </ul>
                <p className="mt-4 text-xs font-bold text-red">We work directly with your insurance provider — so you don't have to.</p>
              </div>
            </Reveal>

            <Reveal variant="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-border bg-white p-2">
                <img src={g6Img} alt="Home restoration rebuild" className="w-full h-auto object-cover rounded-2xl" />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 8: Residential Gallery */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center font-sans">Portfolio</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              See Our Residential <span className="text-gradient-gold">Work</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Browse our gallery to see real residential projects completed by Blackwater USA LLC — from kitchen remodels to full home renovations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Kitchen Remodel", loc: "Pascagoula, MS", img: g2Img },
              { title: "Bathroom Renovation", loc: "Ocean Springs, MS", img: g1Img },
              { title: "Whole-House Renovation", loc: "Moss Point, MS", img: g3Img },
              { title: "Exterior Painting & Siding", loc: "Biloxi, MS", img: whyImg },
              { title: "Basement Transformation", loc: "Gautier, MS", img: g5Img }
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

      {/* Section 9: Testimonials – Residential Projects */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Testimonials</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              What Our Clients Say About <span className="text-gradient-gold">Our Home Services</span>
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

      {/* Section 10: FAQs – Residential Services */}
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

      {/* Section 11: Call to Action */}
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
                    Ready to Transform Your Home?
                  </h2>
                  <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xl font-medium font-sans">
                    Whether you need a simple repair, a complete renovation, or help with an insurance claim — Blackwater USA LLC is here to help. Let's make your home everything you've ever wanted.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-white/90">
                    <span className="flex items-center gap-2">📞 (228) 219-8338</span>
                    <span className="flex items-center gap-2">✉️ blackwaterusa.llc@gmail.com</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col lg:w-full">
                  <a href="/estimate" className="btn-gold w-full text-center py-4 text-base font-bold shadow-lg">
                    Get Your Free Residential Estimate
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
