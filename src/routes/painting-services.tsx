import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Paintbrush, 
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
  Sparkle,
  Layers,
  Palette
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import sPainting from "@/assets/s_painting.png";
import whyImg from "@/assets/why.jpg";
import aboutImg from "@/assets/about.jpg";
import g1Img from "@/assets/g1.jpg";
import g2Img from "@/assets/g2.jpg";
import g5Img from "@/assets/g5.jpg";
import g6Img from "@/assets/g6.jpg";

export const Route = createFileRoute("/painting-services")({
  head: () => ({
    meta: [
      { title: "Interior & Exterior Painting – Professional Finishes That Last" },
      { name: "description", content: "Expert interior and exterior painting services by Blackwater USA LLC in Moss Point, MS, and across the Gulf Coast. 43 years of experience, licensed & insured, free estimates 24/7. Call (228) 219-8338 today." },
      { property: "og:title", content: "Interior & Exterior Painting – Blackwater USA LLC" },
      { property: "og:description", content: "Expert interior and exterior painting services by Blackwater USA LLC in Moss Point, MS, and across the Gulf Coast. 43 years of experience, licensed & insured, free estimates 24/7. Call (228) 219-8338 today." },
      { property: "og:url", content: "/painting-services" },
    ],
    links: [{ rel: "canonical", href: "/painting-services" }],
  }),
  component: PaintingServicesPage,
});

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

function PaintingServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const interiorPainting = [
    { name: "Wall Painting", desc: "Expert rolling and brushing for smooth, even coverage." },
    { name: "Ceiling Painting", desc: "Professional ceiling painting, including textured and popcorn ceilings." },
    { name: "Trim & Crown Molding", desc: "Detailed painting of baseboards, crown molding, window frames, and door frames." },
    { name: "Cabinet Painting & Refinishing", desc: "Transform your kitchen or bathroom cabinets with professional painting or refinishing." },
    { name: "Accent Walls", desc: "Create visual interest with bold accent walls and custom designs." },
    { name: "Wallpaper Removal & Prep", desc: "Safe removal of old wallpaper and surface preparation." },
    { name: "Drywall Repair & Prep", desc: "Patching, sanding, and priming for a flawless finish." },
    { name: "Commercial Interior Painting", desc: "Offices, retail spaces, restaurants, and more." },
    { name: "Apartment & Rental Property Painting", desc: "Quick, professional painting for multi-unit properties." }
  ];

  const exteriorPainting = [
    { name: "Siding Painting", desc: "Wood, vinyl, fiber cement, and metal siding painting." },
    { name: "Trim & Fascia Painting", desc: "Detailed painting of eaves, gutters, shutters, and window frames." },
    { name: "Door & Garage Door Painting", desc: "Professional painting of front doors, garage doors, and entryways." },
    { name: "Deck & Fence Painting", desc: "Staining and painting for decks, porches, and fences." },
    { name: "Stucco & Masonry Painting", desc: "Specialized painting for stucco, brick, and concrete surfaces." },
    { name: "Commercial Exterior Painting", desc: "Storefronts, office buildings, warehouses, and industrial facilities." },
    { name: "Pressure Washing & Prep", desc: "Thorough cleaning and preparation for optimal paint adhesion." },
    { name: "Insurance Claim Painting", desc: "Restoration painting for fire, water, or storm-damaged properties." }
  ];

  const paintFinishes = [
    { finish: "Flat/Matte", best: "Ceilings, low-traffic walls", features: "Non-reflective, hides imperfections, soft appearance." },
    { finish: "Eggshell", best: "Living rooms, dining rooms", features: "Subtle sheen, easy to clean, elegant look." },
    { finish: "Satin", best: "Kitchens, bathrooms, hallways", features: "Soft luster, durable, washable, moisture-resistant." },
    { finish: "Semi-Gloss", best: "Trim, doors, cabinets, children's rooms", features: "High durability, easy to clean, reflects light." },
    { finish: "High-Gloss", best: "Furniture, accent features", features: "High shine, extremely durable, dramatic effect." },
    { finish: "Exterior Flat", best: "Siding, stucco", features: "Hides imperfections, breathable, weather-resistant." },
    { finish: "Exterior Satin/Semi-Gloss", best: "Trim, doors, windows", features: "Durable, easy to clean, excellent weather protection." },
    { finish: "Low-VOC/Eco-Friendly", best: "Any room, nurseries, kitchens", features: "Minimal odor, better air quality, environmentally safe." }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation & Estimate",
      desc: "We meet with you to discuss your vision, color preferences, and timeline. We inspect the surfaces, provide recommendations, and deliver a detailed, no-obligation estimate — available 24/7."
    },
    {
      step: "02",
      title: "Color Consultation",
      desc: "Not sure which colors to choose? We offer expert guidance on color selection, finishes, and trends to help you achieve the perfect look."
    },
    {
      step: "03",
      title: "Surface Preparation",
      desc: "We meticulously prepare all surfaces — cleaning, sanding, patching, caulking, and priming. Proper prep is the key to a long-lasting, flawless finish."
    },
    {
      step: "04",
      title: "Professional Painting",
      desc: "Our skilled painters use premium paints and high-quality tools to deliver smooth, even coverage. We protect your furniture, floors, and landscaping throughout."
    },
    {
      step: "05",
      title: "Cleanup & Inspection",
      desc: "We thoroughly clean up all debris, protect your property, and walk through the completed work with you to ensure your 100% satisfaction."
    }
  ];

  const testimonials = [
    {
      quote: "Blackwater USA painted our entire home — interior and exterior. The preparation was thorough, the painting was flawless, and the team was professional and respectful. Our home looks brand new!",
      author: "Linda K.",
      location: "Moss Point, MS"
    },
    {
      quote: "We needed our commercial office painted before a big client visit. Blackwater USA worked around our schedule and completed the job in just two days. The quality is outstanding — highly recommend!",
      author: "David R.",
      location: "Biloxi, MS"
    },
    {
      quote: "Richard helped us choose the perfect colors for our home's exterior. The painting crew was fast, clean, and professional. We get compliments from neighbors all the time!",
      author: "Patricia L.",
      location: "Pascagoula, MS"
    }
  ];

  const faqs: FAQItem[] = [
    {
      id: 1,
      q: "How much does interior painting cost?",
      a: "Costs vary based on square footage, number of rooms, ceiling height, and surface condition. We provide free, detailed estimates for every project."
    },
    {
      id: 2,
      q: "How long does a painting project take?",
      a: "A single room typically takes 1–2 days. A full home or commercial project may take 1–2 weeks, depending on size and prep needed."
    },
    {
      id: 3,
      q: "Do I need to move my furniture?",
      a: "We'll move furniture and protect everything with drop cloths and plastic sheeting. We also handle all cleanup."
    },
    {
      id: 4,
      q: "Do you offer color consultation?",
      a: "Yes! We provide expert guidance on color selection, finishes, and paint types to help you achieve your vision."
    },
    {
      id: 5,
      q: "What type of paint do you use?",
      a: "We use premium paints from Sherwin-Williams, Benjamin Moore, and PPG. We also offer low-VOC and eco-friendly options."
    },
    {
      id: 6,
      q: "Do you paint in winter?",
      a: "Yes — for exterior painting, we only paint when temperatures allow. Interior painting can be done year-round."
    },
    {
      id: 7,
      q: "Can you help with insurance claims for painting?",
      a: "Absolutely. We specialize in painting for insurance-related damage restoration and handle all communication with your adjuster."
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
            src={sPainting} 
            alt="Blackwater USA painting finishes" 
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
                Interior & Exterior Painting – <span className="text-gradient-gold">Professional Finishes</span> That Last
              </h1>
            </Reveal>
            <Reveal variant="reveal" className="stagger-2">
              <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
                Expert interior and exterior painting services by Blackwater USA LLC in Moss Point, MS, and across the Gulf Coast. 43 years of experience, licensed & insured, free estimates 24/7.
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
                <span className="section-label">Professionalism</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Transform Your Property with Expert Painting – <span className="text-gradient-gold">Inside and Out</span>
                </h2>
                
                <div className="mt-6 space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  <p>
                    A fresh coat of paint is one of the most cost-effective ways to transform your home or business. At Blackwater USA LLC, we deliver professional interior and exterior painting services that enhance curb appeal, protect your property, and create beautiful, inviting spaces.
                  </p>
                  <p>
                    With 43 years of hands-on experience, Richard Burns and our team bring unmatched craftsmanship, meticulous preparation, and premium materials to every painting project. We take pride in our attention to detail — from surface preparation to the final brushstroke — ensuring a flawless, long-lasting finish.
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

      {/* Section 2: Why Choose Professional Painting? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">The Benefits</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              The Benefits of <span className="text-gradient-gold">Professional Painting Services</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              A professional paint job does more than just change colors. It safeguards surfaces, updates curb value, and improves air quality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Enhanced Curb Appeal", desc: "Boost your property's appearance, value, and neighborhood aesthetics instantly." },
              { title: "Protection from Elements", desc: "Exterior paint shields against Gulf Coast humidity, intense UV rays, and moisture." },
              { title: "Improved Indoor Air", desc: "Low-VOC and eco-friendly paint options keep indoor air quality clean and odor-free." },
              { title: "Increased Property Value", desc: "A fresh paint coat is the fastest way to attract high-paying buyers or quality tenants." },
              { title: "Durability & Longevity", desc: "Professional wall prep, sanding, priming, and quality paint ensure years of wear." },
              { title: "Save Time & Hassle", desc: "We manage everything — heavy furniture moving, masking, spraying, and cleanup." },
              { title: "Expert Color Consulting", desc: "We help you select matching tones, finishes, and accent combinations." },
              { title: "Restore Damage", desc: "We handle drywall restoration, patching holes, and fixing water stains before painting." }
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

      {/* Section 3: Our Painting Services – Detailed Breakdown */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label justify-center">Services</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Comprehensive Painting Solutions – <span className="text-gradient-gold">Inside and Out</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We offer full-spectrum interior and exterior finishes for homes and commercial businesses of all sizes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Interior */}
            <Reveal variant="reveal-left" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-6 h-6 text-gold" />
                <h3 className="text-2xl font-bold text-navy font-display">Interior Painting</h3>
              </div>
              <div className="divide-y divide-border/60">
                {interiorPainting.map((row, idx) => (
                  <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                    <h4 className="font-bold text-navy text-sm sm:text-base">{row.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-semibold">{row.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Exterior */}
            <Reveal variant="reveal-right" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Paintbrush className="w-6 h-6 text-red" />
                <h3 className="text-2xl font-bold text-navy font-display">Exterior Painting</h3>
              </div>
              <div className="divide-y divide-border/60">
                {exteriorPainting.map((row, idx) => (
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

      {/* Section 4: Our Painting Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white relative w-full overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold-light)_0%,_transparent_60%)] opacity-5 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label text-gold before:bg-gold justify-center">Quality Process</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-tight font-display">
              The Blackwater USA Painting Process – <span className="text-gradient-gold">Quality from Start to Finish</span>
            </h2>
            <p className="mt-4 text-white/85 font-medium text-sm sm:text-base">
              Every project follows our proven checklist to ensure flawless paint adhesion and a clean job site:
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

      {/* Section 5: Paint Types & Finishes */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Paint Guide</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Choosing the Right Paint – <span className="text-gradient-gold">Expert Guidance</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We apply premium quality paints (Sherwin-Williams, Benjamin Moore, PPG). Here is how to select your finish:
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <div className="divide-y divide-border">
              <div className="grid grid-cols-[1.2fr_1.3fr_2fr] p-4 bg-navy text-white font-bold text-xs sm:text-sm tracking-wider uppercase">
                <div>Finish</div>
                <div>Best For</div>
                <div className="pl-2">Characteristics</div>
              </div>
              {paintFinishes.map((row, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-[1.2fr_1.3fr_2fr] p-4 font-medium text-xs sm:text-sm items-center transition-colors duration-200 hover:bg-gold/5 ${
                    idx % 2 === 0 ? 'bg-secondary/10' : 'bg-white'
                  }`}
                >
                  <div className="text-navy-dark font-bold leading-snug flex items-center gap-1.5">
                    <Sparkle className="w-3.5 h-3.5 text-gold shrink-0" />
                    {row.finish}
                  </div>
                  <div className="text-navy font-semibold text-xs leading-normal">{row.best}</div>
                  <div className="text-muted-foreground font-medium pl-2 leading-relaxed text-xs">{row.features}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 8: Color Trends & Inspiration */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label justify-center">Design Trends</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Stay Inspired – <span className="text-gradient-gold">Current Color Trends</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Need color inspiration? Here are popular choices trending across homes and businesses on the Gulf Coast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Interior Trends */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-border/80 shadow-sm">
              <h4 className="font-bold text-navy font-display text-base border-b border-border pb-2 mb-4">Interior Painting Trends</h4>
              <ul className="space-y-3 font-semibold text-muted-foreground text-sm">
                <li><span className="text-navy font-bold">🌿 Earthy Neutrals:</span> Warm beige, olive green, terracotta, and soft clay tones.</li>
                <li><span className="text-navy font-bold">🌊 Coastal Blues:</span> Soft blues, sea glass greens, and sandy whites.</li>
                <li><span className="text-navy font-bold">⚪ Warm Whites:</span> Creamy whites, warm off-whites, and soft almond.</li>
                <li><span className="text-navy font-bold">🎨 Bold Accents:</span> Deep rich navy, charcoal, emerald green, and dark burgundy.</li>
                <li><span className="text-navy font-bold">🌸 Soft Pastels:</span> Calm pinks, lavenders, and muted warm yellows.</li>
              </ul>
            </div>

            {/* Exterior Trends */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-border/80 shadow-sm">
              <h4 className="font-bold text-navy font-display text-base border-b border-border pb-2 mb-4">Exterior Painting Trends</h4>
              <ul className="space-y-3 font-semibold text-muted-foreground text-sm">
                <li><span className="text-navy font-bold">🏡 Dark & Dramatic:</span> Deep gray siding, navy blue facades, and bold black trim.</li>
                <li><span className="text-navy font-bold">🌳 Natural Earth Tones:</span> Forest greens, warm brown siding, and dark tan.</li>
                <li><span className="text-navy font-bold">⚪ Classic Whites:</span> Timeless off-white, light cream, and white trim.</li>
                <li><span className="text-navy font-bold">🎨 Accent Front Doors:</span> High-visibility bold red, sunny yellow, or deep teal entryways.</li>
                <li><span className="text-navy font-bold">🪨 Greige & Stone:</span> Warm gray-beige blends perfect for modern farmhouse siding.</li>
              </ul>
            </div>
          </div>
          
          <p className="mt-8 text-center text-xs font-bold text-navy uppercase tracking-wider">
            💡 We offer free expert color consultations with every painting project!
          </p>

        </div>
      </section>

      {/* Section 6: Why Choose Blackwater USA LLC */}
      <section className="py-16 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">The Difference</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Why Homeowners & Businesses <span className="text-gradient-gold">Trust Us for Painting</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              With 43 years of local general contracting experience, we bring structural and detail expertise to paint.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "43 Years Experience", desc: "We've painted hundreds of homes, offices, and storefronts on the Gulf Coast." },
              { title: "Licensed, Insured & Bonded", desc: "Your home, business, and investment are protected at every phase." },
              { title: "Family-Owned Legacy", desc: "Richard Burns operates with transparency, honesty, and client-first values." },
              { title: "Meticulous Prep Work", desc: "Sanding, washing, scraping, caulking, and priming. We never skip prep." },
              { title: "Premium Materials Only", desc: "We apply top-grade coatings from Sherwin-Williams and Benjamin Moore." },
              { title: "24/7 Availability", desc: "We coordinate scheduling to paint around your business hours or emergency schedule." },
              { title: "Insurance Claim Experts", desc: "Fire soot or water staining? We handle complete repairs and adjuster approvals." },
              { title: "Spotless Clean Site", desc: "We mask off everything, protect your landscaping, and clean up thoroughly." }
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

      {/* Section 7: Insurance Claim Painting */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-5xl mx-auto">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Restoration</span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy leading-tight font-display">
                  Painting & Restoration for <span className="text-gradient-gold">Insurance Claims</span>
                </h2>
                <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
                  When fire, water, storm, or smoke damage affects your property, professional painting is a critical part of the restoration process. We specialize in painting and drywall finishing for insurance claims.
                </p>
                
                <ul className="mt-6 space-y-2.5 font-bold text-navy-dark text-xs sm:text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red shrink-0" strokeWidth={3} />
                    <span>Assess damage and document stains with photos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red shrink-0" strokeWidth={3} />
                    <span>Provide detailed line-item estimates for adjusters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red shrink-0" strokeWidth={3} />
                    <span>Apply specialized stain-blocking primers and paint</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red shrink-0" strokeWidth={3} />
                    <span>Complete drywall patching, texturing, and finishes</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-border bg-white p-2">
                <img src={g6Img} alt="Water damage plaster repair painting" className="w-full h-auto object-cover rounded-2xl" />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 9: Painting Gallery */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center font-sans">Gallery Highlights</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              See Our Painting <span className="text-gradient-gold">Transformations</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Browse some of our completed interior and exterior painting projects.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Exterior Home Repaint", loc: "Moss Point, MS", img: whyImg },
              { title: "Interior Kitchen Repaint", loc: "Pascagoula, MS", img: g1Img },
              { title: "Commercial Office Painting", loc: "Biloxi, MS", img: g5Img },
              { title: "Cabinet Refinishing", loc: "Ocean Springs, MS", img: g2Img },
              { title: "Exterior Commercial Painting", loc: "Gautier, MS", img: heroImg }
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

      {/* Section 10: Testimonials – Painting Projects */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Reviews</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              What Our Clients Say About <span className="text-gradient-gold">Our Painting Work</span>
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

      {/* Section 11: FAQs – Interior & Exterior Painting */}
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
                    Get Started
                  </span>
                  <h2 className="mt-4 text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white leading-tight font-display">
                    Ready for a Fresh New Look?
                  </h2>
                  <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xl font-medium font-sans">
                    Whether you need a single room painted, a complete exterior makeover, or restoration after damage — Blackwater USA LLC is here to help. Let's bring your vision to life with professional painting services.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-white/90">
                    <span className="flex items-center gap-2">📞 (228) 219-8338</span>
                    <span className="flex items-center gap-2">✉️ blackwaterusa.llc@gmail.com</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col lg:w-full">
                  <a href="/estimate" className="btn-gold w-full text-center py-4 text-base font-bold shadow-lg">
                    Get Your Free Painting Estimate
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
