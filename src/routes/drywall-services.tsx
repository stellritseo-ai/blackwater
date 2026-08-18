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
  FileCheck
} from "lucide-react";

import sDrywall from "@/assets/s_drywall.png";
import whyImg from "@/assets/why.jpg";
import g1Img from "@/assets/g1.jpg";
import g2Img from "@/assets/g2.jpg";
import g3Img from "@/assets/g3.jpg";
import g5Img from "@/assets/g5.jpg";
import g6Img from "@/assets/g6.jpg";

export const Route = createFileRoute("/drywall-services")({
  head: () => ({
    meta: [
      { title: "Drywall Contractor in Moss Point, MS | Blackwater USA LLC" },
      { name: "description", content: "Drywall installation & repair in Moss Point, Pascagoula & Gulf Coast MS. 43 years experience in sheetrock hanging, taping, texture matching & 24/7 estimates." },
      { property: "og:title", content: "Drywall Contractor in Moss Point, MS | Blackwater USA LLC" },
      { property: "og:description", content: "Expert sheetrock installation, drywall finishing, texture matching, and water damage drywall repair across South Mississippi." },
      { property: "og:url", content: "https://blackwaterusallc.com/drywall-services" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/drywall-services" }],
  }),
  component: DrywallServicesPage,
});

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

function DrywallServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const installationServices = [
    { name: "New Construction Drywall", desc: "Full drywall installation for new homes, additions, and commercial buildings." },
    { name: "Room Additions", desc: "Drywall installation for expanded living spaces." },
    { name: "Basement Finishing", desc: "Complete drywall for transformed basements." },
    { name: "Ceiling Installation", desc: "Expert installation of standard, vaulted, and drop ceilings." },
    { name: "Commercial Drywall", desc: "Installation for offices, retail spaces, restaurants, and warehouses." },
    { name: "Soundproof Drywall", desc: "Specialized products and techniques for noise reduction." },
    { name: "Fire-Rated Drywall", desc: "Installation of fire-resistant drywall for safety and code compliance." },
    { name: "Moisture-Resistant Drywall", desc: "Green board and cement board for bathrooms, kitchens, and basements." }
  ];

  const repairServices = [
    { name: "Hole & Crack Repair", desc: "Professional patching of holes, cracks, and damaged areas." },
    { name: "Water Damage Repair", desc: "Restoration of drywall damaged by leaks or flooding." },
    { name: "Mold Remediation Drywall", desc: "Removal and replacement of mold-damaged drywall." },
    { name: "Corner & Edge Repair", desc: "Repair of damaged corners, edges, and transitions." },
    { name: "Texture Matching", desc: "Expert matching of existing textures for seamless repairs." },
    { name: "Insurance Claim Drywall Repair", desc: "Full drywall restoration after fire, water, or storm damage." }
  ];

  const finishingServices = [
    { name: "Taping & Mudding", desc: "Professional application of joint compound and tape for seamless seams." },
    { name: "Sanding", desc: "Fine sanding for smooth, flawless surfaces." },
    { name: "Texture Application", desc: "Custom textures including orange peel, knockdown, popcorn, and smooth." },
    { name: "Priming", desc: "Professional priming for optimal paint adhesion." },
    { name: "Custom Finishes", desc: "Venetian plaster, skip trowel, and other decorative finishes." }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation & Estimate",
      desc: "We meet with you to assess the project, discuss your needs, and provide a detailed, no-obligation estimate — available 24/7."
    },
    {
      step: "02",
      title: "Preparation",
      desc: "We prepare the work area, protect your floors and furniture, and ensure the space is ready for installation or repair."
    },
    {
      step: "03",
      title: "Installation or Repair",
      desc: "Our skilled team installs, patches, or repairs drywall with precision and care. We use premium materials and proven techniques."
    },
    {
      step: "04",
      title: "Taping, Mudding & Sanding",
      desc: "We apply joint compound, tape seams, and sand to create smooth, seamless surfaces. Multiple coats ensure a flawless finish."
    },
    {
      step: "05",
      title: "Texture & Finish",
      desc: "We apply your chosen texture — from smooth to knockdown to orange peel — and prime the surface for painting or wallpaper."
    },
    {
      step: "06",
      title: "Cleanup & Inspection",
      desc: "We thoroughly clean up all debris, remove protection, and walk through the completed work with you to ensure your 100% satisfaction."
    }
  ];

  const textures = [
    { type: "Smooth", desc: "Completely flat, seamless surface", best: "Modern, contemporary, and minimalist interiors." },
    { type: "Knockdown", desc: "Subtle, textured finish with flattened peaks", best: "Hides imperfections; popular in residential and commercial spaces." },
    { type: "Orange Peel", desc: "Light, splatter texture resembling orange peel", best: "Classic residential finish; versatile and attractive." },
    { type: "Popcorn / Acoustic", desc: "Bumpy, spray-on texture", best: "Ceilings; helps with soundproofing (less common now)." },
    { type: "Skip Trowel", desc: "Hand-applied, light texture", best: "Rustic, Mediterranean, and Southwestern styles." },
    { type: "Venetian Plaster", desc: "Elegant, polished plaster finish", best: "Luxury, high-end interiors." },
    { type: "Custom Designs", desc: "Unique textures and patterns", best: "Creative, personalized spaces." }
  ];

  const testimonials = [
    {
      quote: "Blackwater USA repaired our water-damaged drywall after a pipe burst. They matched the existing texture perfectly, and you can't even tell where the repair was made. Professional and efficient!",
      author: "Mark & Dana S.",
      location: "Ocean Springs, MS"
    },
    {
      quote: "We needed drywall installed for our new commercial office. Blackwater USA completed the job quickly and the finish is flawless. They coordinated with our electricians and painters — seamless experience.",
      author: "David R.",
      location: "Biloxi, MS"
    },
    {
      quote: "Richard and his team finished our basement with drywall installation and custom textures. The quality is outstanding, and they kept the space clean throughout. Highly recommend!",
      author: "Amanda T.",
      location: "Pascagoula, MS"
    }
  ];

  const faqs: FAQItem[] = [
    {
      id: 1,
      q: "How much does drywall installation cost?",
      a: "Costs vary based on square footage, type of drywall, complexity, and finishes. We provide free, detailed estimates for every project."
    },
    {
      id: 2,
      q: "How long does drywall installation take?",
      a: "A single room typically takes 1–3 days, including taping, mudding, and sanding. Larger projects may take longer. We provide a clear timeline upfront."
    },
    {
      id: 3,
      q: "Can you repair a small hole in my drywall?",
      a: "Yes! We repair holes of all sizes — from small nail holes to large damaged areas."
    },
    {
      id: 4,
      q: "What's the difference between drywall and plaster?",
      a: "Drywall is a modern, efficient building material made of gypsum board. Plaster is a traditional, hand-applied finish. We work with both."
    },
    {
      id: 5,
      q: "Can you match existing drywall texture?",
      a: "Yes — we expertly match any texture, including knockdown, orange peel, smooth, and custom finishes."
    },
    {
      id: 6,
      q: "Do you handle insurance claims for drywall damage?",
      a: "Absolutely. We specialize in drywall restoration for insurance claims and handle all communication with your adjuster."
    },
    {
      id: 7,
      q: "What type of drywall do you recommend for bathrooms?",
      a: "We recommend moisture-resistant green board or cement board for bathrooms, kitchens, and basements to prevent mold and water damage."
    }
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://blackwaterusallc.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://blackwaterusallc.com/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Drywall Services",
        "item": "https://blackwaterusallc.com/drywall-services"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Drywall Contractor",
    "provider": {
      "@type": "GeneralContractor",
      "name": "Blackwater USA LLC",
      "telephone": "+1-228-219-8338",
      "url": "https://blackwaterusallc.com"
    },
    "areaServed": ["Moss Point, MS", "Pascagoula, MS", "Gautier, MS", "Ocean Springs, MS", "Biloxi, MS", "D'Iberville, MS", "Grand Bay, AL", "Theodore, AL"],
    "description": "Professional sheetrock installation, drywall repair, seamless tape and mud finishing, texture matching, and water damage restoration in South Mississippi."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <TopBar />
      <Nav />

      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden w-full isolate">
        <div className="absolute inset-0 z-0">
          <img 
            src={sDrywall} 
            alt="Drywall Contractor in Moss Point MS - Blackwater USA LLC" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/85 to-navy-dark/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_60%)]" />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* In-page Breadcrumb bar */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60">
            <a href="/" className="hover:text-gold transition-colors">Home</a>
            <span>/</span>
            <a href="/#services" className="hover:text-gold transition-colors">Services</a>
            <span>/</span>
            <span className="text-gold font-medium">Drywall Services</span>
          </nav>

          <div className="max-w-3xl">
            <Reveal variant="reveal" className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold font-sans">Sheetrock & Drywall</span>
            </Reveal>
            <Reveal variant="reveal" className="stagger-1">
              <h1 className="text-[32px] sm:text-[44px] lg:text-[54px] font-bold text-white leading-tight tracking-[-0.03em] font-display">
                Drywall Contractor in <span className="text-gradient-gold">Moss Point, MS</span>
              </h1>
            </Reveal>
            <Reveal variant="reveal" className="stagger-2">
              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
                Flawless drywall installation, sheetrock repairs, custom texture matching, and moisture-resistant board installation in Moss Point, Pascagoula, and the Gulf Coast.
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
                <span className="section-label">Drywall Services</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Flawless Drywall – <span className="text-gradient-gold">The Foundation of Beautiful Spaces</span>
                </h2>
                
                <div className="mt-6 space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  <p>
                    Drywall is the canvas of your home or business — smooth, seamless, and ready for paint or wallpaper. At Blackwater USA LLC, we deliver professional drywall services that ensure your walls and ceilings are flawless, durable, and built to last.
                  </p>
                  <p>
                    With 43 years of hands-on experience, Richard Burns and our team bring unmatched craftsmanship, meticulous attention to detail, and the highest quality materials to every drywall project. Whether you need new installation, repairs, or finishing, we deliver results that exceed expectations.
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

      {/* Section 2: Why Quality Drywall Matters */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">The Importance</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              The Importance of <span className="text-gradient-gold">Professional Drywall</span> Installation & Repair
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Quality drywall is essential for the beauty, durability, and safety of your property. Here's why professional drywall services matter:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Structural Integrity", desc: "Properly installed drywall provides stability and strength to walls and ceilings.", icon: Shield },
              { title: "Aesthetics", desc: "Seamless, smooth surfaces create a beautiful foundation for paint, wallpaper, and finishes.", icon: Sparkles },
              { title: "Fire Resistance", desc: "Drywall adds a layer of fire protection to your home or business.", icon: Flame },
              { title: "Soundproofing", desc: "Quality installation helps reduce noise between rooms and floors.", icon: Volume2 },
              { title: "Energy Efficiency", desc: "Properly sealed drywall improves insulation and energy efficiency.", icon: TrendingUp },
              { title: "Moisture Resistance", desc: "Specialized drywall products protect against mold and moisture damage.", icon: Droplets },
              { title: "Increased Property Value", desc: "Flawless walls and ceilings enhance your property's appeal and value.", icon: Award },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Reveal key={idx} variant="reveal-scale" className={`stagger-${(idx % 4) + 1}`}>
                  <div className="p-6 bg-white border border-border rounded-2xl h-full flex flex-col hover:border-gold/30 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 mb-4 text-gold">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-navy font-display text-sm sm:text-base mb-2">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Section 3: Our Drywall Services – Residential & Commercial */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label justify-center">Capabilities</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Comprehensive Drywall Solutions – <span className="text-gradient-gold">Installation, Repair & Finishing</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We offer a full range of drywall services for homes, rental properties, and commercial spaces. No job is too small or too large.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Drywall Installation */}
            <Reveal variant="reveal-left" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <HomeIcon className="w-6 h-6 text-gold shrink-0" />
                <h3 className="text-xl font-bold text-navy font-display">Drywall Installation</h3>
              </div>
              <div className="divide-y divide-border/60 flex-1 space-y-4">
                {installationServices.map((row, idx) => (
                  <div key={idx} className="pt-3.5 first:pt-0">
                    <h4 className="font-bold text-navy text-sm sm:text-base">{row.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-semibold leading-relaxed">{row.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Drywall Repair */}
            <Reveal variant="reveal-scale" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-6 h-6 text-red shrink-0" />
                <h3 className="text-xl font-bold text-navy font-display">Drywall Repair</h3>
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

            {/* Drywall Finishing */}
            <Reveal variant="reveal-right" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Sparkle className="w-6 h-6 text-gold shrink-0" />
                <h3 className="text-xl font-bold text-navy font-display">Drywall Finishing</h3>
              </div>
              <div className="divide-y divide-border/60 flex-1 space-y-4">
                {finishingServices.map((row, idx) => (
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

      {/* Section 4: Our Drywall Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white relative w-full overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold-light)_0%,_transparent_60%)] opacity-5 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label text-gold before:bg-gold justify-center">Our Process</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-tight font-display">
              Flawless from Start to Finish – <span className="text-gradient-gold">Our Drywall Process</span>
            </h2>
            <p className="mt-4 text-white/85 font-medium text-sm sm:text-base">
              We take pride in our meticulous approach to drywall. Every project follows our proven process to ensure exceptional results:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto relative">
            {processSteps.map((step, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${idx + 1} flex flex-col items-center text-center relative`}>
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

      {/* Section 5: Drywall Textures & Finishes */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Custom Aesthetics</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Choose Your Perfect <span className="text-gradient-gold">Texture & Finish</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We offer a variety of drywall textures and finishes to match your style and preference:
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <div className="divide-y divide-border">
              <div className="grid grid-cols-3 p-4 bg-navy text-white font-bold text-xs sm:text-sm tracking-wider uppercase">
                <div>Texture Type</div>
                <div>Description</div>
                <div className="pl-2">Best For</div>
              </div>
              {textures.map((row, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-3 p-4 font-medium text-xs sm:text-sm items-center transition-colors duration-200 hover:bg-gold/5 ${
                    idx % 2 === 0 ? 'bg-secondary/10' : 'bg-white'
                  }`}
                >
                  <div className="text-navy-dark font-bold leading-snug flex items-center gap-2">
                    <Sparkle className="w-3.5 h-3.5 text-gold shrink-0" />
                    {row.type}
                  </div>
                  <div className="text-muted-foreground font-semibold pr-2">{row.desc}</div>
                  <div className="text-muted-foreground font-medium pl-2 leading-relaxed">{row.best}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 6: Why Choose Blackwater USA LLC for Drywall Services? */}
      <section className="py-16 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">The Difference</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Why Clients Trust Us for <span className="text-gradient-gold">Drywall Installation & Repair</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              With decades of local contracting experience, we bring unmatched reliability and craftsmanship to every drywall project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "43 Years of Experience", desc: "We've installed and repaired drywall in hundreds of properties across the Gulf Coast." },
              { title: "Licensed, Insured & Bonded", desc: "Your property and investment are fully protected." },
              { title: "Family-Owned Values", desc: "Honest, transparent, and client-focused." },
              { title: "Meticulous Finishing", desc: "We take pride in seamless, flawless results." },
              { title: "Premium Materials", desc: "We use only high-quality drywall, compound, and textures." },
              { title: "24/7 Availability", desc: "We're always on call for emergencies and questions." },
              { title: "Insurance Claim Experts", desc: "We handle drywall restoration for insurance-related damage." },
              { title: "Residential & Commercial Expertise", desc: "We work on homes, rental properties, and commercial spaces." },
              { title: "Free Estimates", desc: "No obligation, no pressure — just honest pricing." },
              { title: "Clean & Professional", desc: "We protect your property and leave it spotless." }
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

      {/* Section 7: Insurance Claim Drywall Repairs */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-5xl mx-auto">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Restoration</span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy leading-tight font-display">
                  Drywall Restoration for <span className="text-gradient-gold">Insurance Claims</span>
                </h2>
                <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
                  When water, fire, mold, or storm damage affects your drywall, we provide professional restoration services to bring your property back to its original condition:
                </p>
                
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 font-bold text-navy-dark text-xs sm:text-sm">
                  <li className="flex items-center gap-2">💧 Water damage drywall repair</li>
                  <li className="flex items-center gap-2">🔥 Fire & smoke damage replacement</li>
                  <li className="flex items-center gap-2">🌊 Storm & flood damage restoration</li>
                  <li className="flex items-center gap-2">🧫 Mold remediation & removal</li>
                  <li className="flex items-center gap-2">🏚️ Full wall and ceiling reconstruction</li>
                </ul>

                <h4 className="mt-8 font-bold text-navy text-base">We handle everything:</h4>
                <ul className="mt-3 space-y-2 text-xs font-semibold text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Damage assessment and documentation</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Detailed estimates for your insurance claim</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Direct communication with your adjuster</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Complete drywall restoration</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Final documentation for claim closure</li>
                </ul>
                <p className="mt-4 text-xs font-bold text-red">We work directly with your insurance provider — so you don't have to.</p>
              </div>
            </Reveal>

            <Reveal variant="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-border bg-white p-2">
                <img src={g6Img} alt="Drywall restoration insurance rebuild" className="w-full h-auto object-cover rounded-2xl" />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 8: Drywall for Commercial & Multi-Unit Properties */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center max-w-5xl mx-auto">
            
            <Reveal variant="reveal-left">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-border bg-white p-2">
                <img src={g5Img} alt="Commercial drywall construction project" className="w-full h-auto object-cover rounded-2xl" />
              </div>
            </Reveal>

            <Reveal variant="reveal-right">
              <div>
                <span className="section-label">Commercial</span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy leading-tight font-display">
                  Commercial <span className="text-gradient-gold">Drywall Services</span>
                </h2>
                <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
                  We specialize in drywall for commercial and multi-unit properties, including:
                </p>
                
                <div className="mt-6 grid grid-cols-2 gap-y-3 gap-x-4 font-bold text-navy-dark text-xs sm:text-sm">
                  <span className="flex items-center gap-2">🏢 Office buildings</span>
                  <span className="flex items-center gap-2">🛒 Retail stores</span>
                  <span className="flex items-center gap-2">🍽️ Restaurants & hospitality</span>
                  <span className="flex items-center gap-2">🏗️ Warehouses & industrial</span>
                  <span className="flex items-center gap-2">🏘️ Multi-family housing</span>
                  <span className="flex items-center gap-2">🏫 Schools & educational</span>
                  <span className="flex items-center gap-2">🏥 Healthcare & medical</span>
                </div>

                <h4 className="mt-8 font-bold text-navy text-base">Why choose us for commercial drywall?</h4>
                <ul className="mt-3 space-y-2 text-xs font-semibold text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Fast, efficient work with minimal disruption</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Code compliance & fire-rated materials</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Soundproofing solutions for multi-unit properties</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Large-scale project experience</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Coordination with other trades for seamless construction</li>
                </ul>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 9: Drywall Gallery */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center font-sans">Portfolio</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              See Our Drywall <span className="text-gradient-gold">Work</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Browse our gallery to see real drywall installation, repair, and finishing projects completed by Blackwater USA LLC.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { title: "New Drywall Installation", loc: "Moss Point, MS", img: g3Img },
              { title: "Water Damage Repair", loc: "Pascagoula, MS", img: g6Img },
              { title: "Textured Ceiling Finish", loc: "Ocean Springs, MS", img: whyImg },
              { title: "Commercial Drywall Project", loc: "Biloxi, MS", img: g5Img },
              { title: "Basement Finishing", loc: "Gautier, MS", img: g1Img }
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

      {/* Section 10: Testimonials – Drywall Projects */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Testimonials</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              What Our Clients Say About <span className="text-gradient-gold">Our Drywall Work</span>
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

      {/* Section 11: FAQs – Drywall Services */}
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

      {/* Service Areas Cross-Linking */}
      <section className="py-12 bg-secondary/40 border-t border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-4">Drywall Service Areas:</h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            <a href="/areas/moss-point-ms" className="px-3.5 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Moss Point, MS</a>
            <a href="/areas/pascagoula-ms" className="px-3.5 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Pascagoula, MS</a>
            <a href="/areas/gautier-ms" className="px-3.5 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Gautier, MS</a>
            <a href="/areas/ocean-springs-ms" className="px-3.5 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Ocean Springs, MS</a>
            <a href="/areas/biloxi-ms" className="px-3.5 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Biloxi, MS</a>
            <a href="/areas/diberville-ms" className="px-3.5 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">D'Iberville, MS</a>
            <a href="/areas/grand-bay-al" className="px-3.5 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Grand Bay, AL</a>
            <a href="/areas/theodore-al" className="px-3.5 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Theodore, AL</a>
            <a href="/service-areas" className="px-3.5 py-2 rounded-xl bg-navy text-white text-xs font-bold hover:bg-navy-dark transition-colors">View All Service Areas →</a>
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
                    Ready for Flawless Drywall?
                  </h2>
                  <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xl font-medium font-sans">
                    Whether you're building new, renovating, or need repairs after damage — Blackwater USA LLC delivers expert drywall services you can trust. Let's create smooth, beautiful walls for your home or business.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-white/90">
                    <span className="flex items-center gap-2">📞 (228) 219-8338</span>
                    <span className="flex items-center gap-2">✉️ blackwaterusa.llc@gmail.com</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col lg:w-full">
                  <a href="/estimate" className="btn-gold w-full text-center py-4 text-base font-bold shadow-lg">
                    Get Your Free Drywall Estimate
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
