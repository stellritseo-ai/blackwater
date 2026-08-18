import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HardHat, 
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
  Users,
  AlertCircle,
  CheckCircle2,
  Calendar,
  Building,
  Home as HomeIcon,
  HelpCircle
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import whyImg from "@/assets/why.jpg";
import aboutClean from "@/assets/about_clean.png";
import sContracting from "@/assets/s_contracting.png";
import g1Img from "@/assets/g1.jpg";
import g2Img from "@/assets/g2.jpg";
import g3Img from "@/assets/g3.jpg";
import g5Img from "@/assets/g5.jpg";
import g6Img from "@/assets/g6.jpg";

export const Route = createFileRoute("/general-contracting")({
  head: () => ({
    meta: [
      { title: "General Contracting Services South Mississippi | Blackwater USA LLC" },
      { name: "description", content: "Licensed general contracting in Moss Point, Pascagoula & Gulf Coast MS. 43 years experience in residential & commercial project management & 24/7 estimates." },
      { property: "og:title", content: "General Contracting Services South Mississippi | Blackwater USA LLC" },
      { property: "og:description", content: "Licensed, bonded & insured general contracting for residential & commercial builds across South Mississippi and Southwest Alabama." },
      { property: "og:url", content: "https://blackwaterusallc.com/general-contracting" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/general-contracting" }],
  }),
  component: GeneralContractingPage,
});

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

function GeneralContractingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const contractingStages = [
    { cat: "Project Management", val: "Full oversight of budget, timeline, subcontractors, and materials." },
    { cat: "Permitting & Code Compliance", val: "We handle all necessary permits and ensure your project meets local building codes." },
    { cat: "Design & Planning", val: "Collaboration with architects, designers, and engineers to bring your vision to life." },
    { cat: "Subcontractor Coordination", val: "We manage electricians, plumbers, carpenters, painters, and more — all vetted and trusted." },
    { cat: "Quality Control", val: "Regular inspections and walkthroughs to ensure every detail meets our high standards." },
    { cat: "Insurance Claim Management", val: "For damage-related projects, we handle all communication with your insurance adjuster." },
    { cat: "Final Walkthrough & Handover", val: "We ensure you're 100% satisfied before we consider the job complete." }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Free Estimate",
      desc: "We meet with you to understand your vision, budget, and timeline. We provide a detailed, no-obligation estimate — available 24/7."
    },
    {
      step: "02",
      title: "Design & Planning",
      desc: "We work with you (and your architect or designer) to finalize plans, select materials, and secure necessary permits."
    },
    {
      step: "03",
      title: "Pre-Construction & Scheduling",
      desc: "We coordinate subcontractors, order materials, and create a detailed project timeline. We keep you informed every step of the way."
    },
    {
      step: "04",
      title: "Construction & Project Management",
      desc: "Our team works efficiently and professionally. We handle all on-site management, quality control, and regular updates so you're never in the dark."
    },
    {
      step: "05",
      title: "Final Walkthrough & Completion",
      desc: "We walk through the completed project with you, address any final touches, and ensure you're 100% satisfied before we close out."
    }
  ];

  const faqs: FAQItem[] = [
    {
      id: 1,
      q: "What is the difference between a general contractor and a specialist?",
      a: "A general contractor manages the entire project — including coordinating specialists (electricians, plumbers, etc.), obtaining permits, and ensuring the project stays on schedule and on budget. We are your single point of contact."
    },
    {
      id: 2,
      q: "Do I need a general contractor for a small renovation?",
      a: "Not always — but even for small projects, a general contractor ensures everything is done correctly, up to code, and efficiently. We can handle anything from a single room to a full commercial building."
    },
    {
      id: 3,
      q: "How do you select subcontractors?",
      a: "We work exclusively with licensed, insured, and experienced subcontractors who have proven track records. We've built relationships with trusted professionals over our 43 years in business."
    },
    {
      id: 4,
      q: "Can you help with design and permits?",
      a: "Absolutely. We collaborate with architects and designers, and we handle all necessary permitting and code compliance."
    },
    {
      id: 5,
      q: "How long does a typical project take?",
      a: "Timelines vary based on scope. We provide a detailed schedule during the estimate phase and keep you updated throughout the project."
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
        "name": "General Contracting",
        "item": "https://blackwaterusallc.com/general-contracting"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "General Contracting",
    "provider": {
      "@type": "GeneralContractor",
      "name": "Blackwater USA LLC",
      "telephone": "+1-228-219-8338",
      "url": "https://blackwaterusallc.com"
    },
    "areaServed": ["Moss Point, MS", "Pascagoula, MS", "Gautier, MS", "Ocean Springs, MS", "Biloxi, MS", "D'Iberville, MS", "Grand Bay, AL", "Theodore, AL"],
    "description": "Licensed residential and commercial general contracting, turnkey project management, code compliance, framing, and full construction across South Mississippi and Southwest Alabama."
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
        {/* Background Image and Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="General Contracting in South Mississippi - Blackwater USA LLC" 
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
            <span className="text-gold font-medium">General Contracting</span>
          </nav>

          <div className="max-w-3xl">
            <Reveal variant="reveal" className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold font-sans">Licensed Contractor</span>
            </Reveal>
            <Reveal variant="reveal" className="stagger-1">
              <h1 className="text-[32px] sm:text-[44px] lg:text-[54px] font-bold text-white leading-tight tracking-[-0.03em] font-display">
                General Contracting Services in <span className="text-gradient-gold">South Mississippi</span>
              </h1>
            </Reveal>
            <Reveal variant="reveal" className="stagger-2">
              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
                Blackwater USA LLC delivers 43 years of master craftsmanship in residential and commercial general contracting across Moss Point, Pascagoula, Ocean Springs, Biloxi, and Southwest Alabama.
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
                <span className="section-label">Overview</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Your Trusted General Contractor – <span className="text-gradient-gold">From Concept to Completion</span>
                </h2>
                
                <div className="mt-6 space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  <p>
                    Whether you're building from the ground up, renovating an existing structure, or managing a complex commercial project, Blackwater USA LLC is your trusted partner. With 43 years of hands-on experience, Richard Burns and our team bring unmatched expertise, reliability, and craftsmanship to every job.
                  </p>
                  <p>
                    As a licensed, insured, and bonded general contractor, we oversee every aspect of your project — from initial design and permitting to construction, inspections, and final walkthrough. We manage subcontractors, coordinate schedules, ensure code compliance, and deliver quality results on time and on budget.
                  </p>
                  <p>
                    We serve both residential and commercial clients across a 35-mile radius of Moss Point, MS — and we're available 24/7 for emergencies and urgent projects.
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

      {/* Section 2: What Is General Contracting? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">What We Do</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              What We Do as Your <span className="text-gradient-gold">General Contractor</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              A general contractor is your single point of contact for construction projects of any size. We handle everything so you don't have to — from planning and permits to execution and quality control.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)] bg-white">
            <div className="divide-y divide-border">
              {/* Table Header */}
              <div className="grid grid-cols-[1fr_1.5fr] sm:grid-cols-[260px_1fr] p-4 bg-navy text-white font-bold text-xs sm:text-sm tracking-wider uppercase">
                <div>Project Phase / Aspect</div>
                <div className="pl-2">Our Responsibility & Details</div>
              </div>
              {/* Table Rows */}
              {contractingStages.map((row, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-[1fr_1.5fr] sm:grid-cols-[260px_1fr] p-5 font-medium text-xs sm:text-sm items-center transition-colors duration-200 hover:bg-gold/5 ${
                    idx % 2 === 0 ? 'bg-secondary/10' : 'bg-white'
                  }`}
                >
                  <div className="text-navy-dark font-bold leading-snug">{row.cat}</div>
                  <div className="text-muted-foreground font-medium pl-2 leading-relaxed">{row.val}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Our General Contracting Capabilities */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label justify-center">Capabilities</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Full-Service <span className="text-gradient-gold">Construction & Renovation</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We have the skills, experience, and crew to handle a wide range of projects — from small renovations to large-scale commercial builds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Residential Capabilities */}
            <Reveal variant="reveal-left">
              <div className="bg-secondary/35 rounded-3xl p-8 border border-border/80 shadow-sm flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6 border border-gold/25">
                  <HomeIcon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-navy font-display mb-4">Residential General Contracting</h3>
                <ul className="space-y-3 font-semibold text-navy-dark text-sm mt-2 flex-grow">
                  {[
                    "Custom Home Building",
                    "Home Additions & Extensions",
                    "Kitchen & Bathroom Remodels",
                    "Basement & Attic Finishing",
                    "Whole-House Renovations",
                    "Aging-in-Place Modifications",
                    "Outdoor Living Spaces (Decks, Patios, Porches)",
                    "Garage & Carport Construction"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Commercial Capabilities */}
            <Reveal variant="reveal-right">
              <div className="bg-secondary/35 rounded-3xl p-8 border border-border/80 shadow-sm flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-red/10 flex items-center justify-center text-red mb-6 border border-red/25">
                  <Building className="w-6 h-6 text-red" />
                </div>
                <h3 className="text-2xl font-bold text-navy font-display mb-4">Commercial General Contracting</h3>
                <ul className="space-y-3 font-semibold text-navy-dark text-sm mt-2 flex-grow">
                  {[
                    "Office Build-Outs & Expansions",
                    "Retail Store Renovations",
                    "Restaurant & Hospitality Construction",
                    "Warehouse & Industrial Upgrades",
                    "Commercial Painting & Finishing",
                    "Tenant Improvements",
                    "Accessibility & ADA Compliance Upgrades",
                    "Emergency Repairs for Commercial Properties"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-red shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* Section 4: Our Process – How We Work */}
      <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white relative w-full overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold-light)_0%,_transparent_60%)] opacity-5 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label text-gold before:bg-gold justify-center">Our Workflow</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-tight font-display">
              Our 5-Step <span className="text-gradient-gold">General Contracting Process</span>
            </h2>
            <p className="mt-4 text-white/85 font-medium text-sm sm:text-base">
              We believe in transparency and clear communication from start to finish. Here's how we bring your project to life:
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto relative">
            {processSteps.map((step, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${idx + 1} flex flex-col items-center text-center relative`}>
                {/* Connector line for large screens */}
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

      {/* Section 5: Why Choose Blackwater USA LLC */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">The Difference</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Why Homeowners & <span className="text-gradient-gold">Businesses Trust Us</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              With so many contractors to choose from, here's what sets us apart and defines our commitment to you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "43 Years Experience", desc: "We've handled projects of every size and complexity." },
              { title: "Fully Licensed & Insured", desc: "Licensed, insured & bonded. Your property is fully protected." },
              { title: "Family-Owned Values", desc: "Honest, transparent, client-focused family legacy." },
              { title: "24/7 Emergency Service", desc: "Always on call for structural, plumbing, and electrical emergencies." },
              { title: "Insurance Claim Experts", desc: "We coordinate with adjusters and manage claim repairs from A to Z." },
              { title: "Commercial & Residential", desc: "Vast expertise working on both homes and commercial properties." },
              { title: "Free Honest Estimates", desc: "No obligation, no pressure — just clear transparent pricing." },
              { title: "Premium Craftsmanship", desc: "We never cut corners. Quality materials and structural integrity." }
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

      {/* Section 6: Subcontractor Network */}
      <section className="py-16 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center max-w-5xl mx-auto">
            <Reveal variant="reveal-left">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-border bg-white p-2">
                <img src={aboutClean} alt="Blackwater crew site management" className="w-full h-auto object-cover rounded-2xl" />
              </div>
            </Reveal>
            <Reveal variant="reveal-right">
              <div>
                <span className="section-label">Our Crew</span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy leading-tight font-display">
                  Vetted, Trusted, and <span className="text-gradient-gold">Professional Subcontractors</span>
                </h2>
                <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
                  We work with a carefully curated network of subcontractors who share our commitment to quality and professionalism. Every electrician, plumber, roofer, and specialist we bring on-site is fully licensed and insured, experienced and skilled, background-checked and vetted, and reliable and professional.
                </p>
                <div className="mt-6 border-l-2 border-gold pl-4 bg-gold/5 rounded-r-lg py-3">
                  <p className="text-xs text-navy font-bold">
                    When you hire Blackwater USA LLC, you're getting a full team of experts — all managed by one single point of contact: Richard Burns.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 7: Insurance Claim & Damage Restoration */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-5xl mx-auto">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Restoration</span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy leading-tight font-display">
                  General Contracting for <span className="text-gradient-gold">Insurance Claims</span>
                </h2>
                <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
                  If your property has been damaged by fire, water, storms, or other events, we provide comprehensive general contracting services to restore it. We handle all direct communications with your insurance provider so you don't have to carry the stress.
                </p>
                
                <ul className="mt-6 space-y-2.5 font-bold text-navy-dark text-xs sm:text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red shrink-0" strokeWidth={3} />
                    <span>Assess damage and document everything with photos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red shrink-0" strokeWidth={3} />
                    <span>Provide detailed line-item estimates for your claim</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red shrink-0" strokeWidth={3} />
                    <span>Communicate directly with your insurance adjuster</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red shrink-0" strokeWidth={3} />
                    <span>Complete all repairs to code and rigorous standards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red shrink-0" strokeWidth={3} />
                    <span>Submit final certifications for quick claim closure</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-border bg-white p-2">
                <img src={g6Img} alt="Water damage restoration repair" className="w-full h-auto object-cover rounded-2xl" />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 8: Service Area – 35-Mile Radius */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <span className="section-label justify-center">Locations</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
            Serving the Gulf Coast — <span className="text-gradient-gold">35 Miles of Expertise</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base max-w-2xl mx-auto">
            We proudly serve homeowners and businesses across Mississippi, Alabama, and Louisiana.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10 text-left bg-white p-6 sm:p-8 rounded-3xl border border-border shadow-sm">
            <div>
              <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-3 border-b border-border pb-1">Mississippi</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-muted-foreground font-bold">
                <li>Moss Point</li>
                <li>Pascagoula</li>
                <li>Gautier</li>
                <li>Ocean Springs</li>
                <li>Biloxi</li>
                <li>D'Iberville</li>
                <li>St. Martin</li>
                <li>Escatawpa</li>
                <li>Hurley</li>
                <li>Vancleave</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-3 border-b border-border pb-1">Alabama</h4>
              <ul className="space-y-1.5 text-xs text-muted-foreground font-bold">
                <li>Grand Bay</li>
                <li>Theodore</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-3 border-b border-border pb-1">Louisiana</h4>
              <ul className="space-y-1.5 text-xs text-muted-foreground font-bold">
                <li>Louisiana (All Areas)</li>
              </ul>
            </div>
          </div>
          
          <p className="mt-6 text-xs text-navy font-bold flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4 text-gold" />
            Headquarters: 3600 Magnolia St, Moss Point, MS
          </p>
        </div>
      </section>

      {/* Section 9: Portfolio / Gallery Highlights */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center font-sans">Portfolio</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              See Our General <span className="text-gradient-gold">Contracting Projects</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              From custom homes to commercial renovations — explore a snapshot of the quality we deliver.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Custom Home Build", loc: "Residential", img: g3Img },
              { title: "Office Build-Out", loc: "Commercial", img: g5Img },
              { title: "Whole-House Renovation", loc: "Residential", img: whyImg },
              { title: "Retail Store Remodel", loc: "Commercial", img: g2Img },
              { title: "Water Damage Restoration", loc: "Insurance Claim", img: g6Img }
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

      {/* Section 10: FAQs – General Contracting */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Common Questions</span>
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

      {/* Service Areas Cross-Linking */}
      <section className="py-12 bg-secondary/40 border-t border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-4">General Contracting Service Areas:</h3>
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
                    Let's Build
                  </span>
                  <h2 className="mt-4 text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white leading-tight font-display">
                    Ready to Build Your Dream Project?
                  </h2>
                  <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xl font-medium font-sans">
                    Whether you're planning a new build, renovating your home, or need emergency repairs — Blackwater USA LLC is here to help. Let's discuss your project.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-white/90">
                    <span className="flex items-center gap-2">📞 (228) 219-8338</span>
                    <span className="flex items-center gap-2">✉️ blackwaterusa.llc@gmail.com</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col lg:w-full">
                  <a href="/estimate" className="btn-gold w-full text-center py-4 text-base font-bold shadow-lg">
                    Get Your Free Estimate
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
