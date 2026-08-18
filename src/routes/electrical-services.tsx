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
  AlertTriangle
} from "lucide-react";

import sElectrical from "@/assets/s_electrical.png";
import whyImg from "@/assets/why.jpg";
import g1Img from "@/assets/g1.jpg";
import g2Img from "@/assets/g2.jpg";
import g3Img from "@/assets/g3.jpg";
import g5Img from "@/assets/g5.jpg";
import g6Img from "@/assets/g6.jpg";

export const Route = createFileRoute("/electrical-services")({
  head: () => ({
    meta: [
      { title: "Electrical Contractor in Moss Point, MS | Blackwater USA LLC" },
      { name: "description", content: "24/7 electrical contractor in Moss Point, Pascagoula & Gulf Coast MS. 43 years experience in panel upgrades, rewiring, commercial electrical & emergency service." },
      { property: "og:title", content: "Electrical Contractor in Moss Point, MS | Blackwater USA LLC" },
      { property: "og:description", content: "Licensed electrical contracting, panel upgrades, commercial electrical, and 24/7 emergency service in South Mississippi." },
      { property: "og:url", content: "https://blackwaterusallc.com/electrical-services" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/electrical-services" }],
  }),
  component: ElectricalServicesPage,
});

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

function ElectricalServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const residentialServices = [
    { name: "Emergency Electrical Repairs", desc: "24/7 response for power outages, sparking, shocks, and more." },
    { name: "Electrical Panel Upgrades", desc: "Replace old, unsafe panels with modern, code-compliant panels." },
    { name: "Wiring & Rewiring", desc: "New wiring for renovations, additions, and older homes." },
    { name: "Lighting Installation", desc: "Interior, exterior, recessed, landscape, and smart lighting." },
    { name: "Outlet & Switch Installation", desc: "GFCI, AFCI, USB outlets, dimmers, and smart switches." },
    { name: "Ceiling Fan Installation", desc: "Installation and repair of ceiling fans with lighting." },
    { name: "Whole-House Surge Protection", desc: "Protection against power surges and lightning strikes." },
    { name: "Smart Home Technology", desc: "Smart thermostats, lighting, security, and automation." },
    { name: "EV Charger Installation", desc: "Installation of electric vehicle charging stations." },
    { name: "Generator Installation", desc: "Standby and portable generator installation." }
  ];

  const commercialServices = [
    { name: "Commercial Electrical Repairs", desc: "Fast, reliable repairs for offices, retail, restaurants, and more." },
    { name: "Lighting Retrofits", desc: "Energy-efficient LED lighting upgrades for commercial properties." },
    { name: "Electrical Panel Upgrades", desc: "Upgrades for increased power demands in commercial spaces." },
    { name: "Data & Network Cabling", desc: "Structured cabling for data, phone, and network systems." },
    { name: "Emergency Lighting", desc: "Installation of emergency lighting and exit signs." },
    { name: "Security & Access Control", desc: "Security lighting, cameras, and access systems." },
    { name: "Industrial Electrical Services", desc: "Heavy-duty electrical for warehouses and industrial facilities." },
    { name: "Generator & Backup Power", desc: "Commercial generator installation and maintenance." },
    { name: "ADA Compliance Lighting", desc: "Accessible lighting and controls for ADA compliance." }
  ];

  const insuranceServices = [
    { name: "Fire Damage Electrical Restoration", desc: "Full restoration of electrical systems after fire damage." },
    { name: "Water Damage Electrical Restoration", desc: "Repair and replacement after water or flood damage." },
    { name: "Storm Damage Electrical Repairs", desc: "Restoring electrical systems after storms and lightning strikes." },
    { name: "Insurance Claim Management", desc: "Documentation, estimates, and direct communication with adjusters." }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation & Estimate",
      desc: "We assess the issue, explain your options, and provide a detailed, no-obligation estimate — available 24/7."
    },
    {
      step: "02",
      title: "Diagnosis & Planning",
      desc: "Using advanced diagnostic tools and decades of experience, we accurately identify the problem and develop a clear plan."
    },
    {
      step: "03",
      title: "Professional Execution",
      desc: "Our skilled electricians perform the work with precision, using premium materials and following all safety protocols and code requirements."
    },
    {
      step: "04",
      title: "Testing & Inspection",
      desc: "We thoroughly test the system to ensure everything is working safely and correctly. We also coordinate inspections if required."
    },
    {
      step: "05",
      title: "Cleanup & Follow-Up",
      desc: "We clean up the work area, review the work with you, and provide maintenance tips and safety recommendations."
    }
  ];

  const commonIssues = [
    { issue: "Circuit Breaker Trips", solution: "Diagnosis and repair of overloaded or shorted circuits." },
    { issue: "Flickering Lights", solution: "Repair of loose connections, wiring issues, or faulty fixtures." },
    { issue: "Dead Outlets", solution: "Outlet repair or replacement; wiring inspection." },
    { issue: "Electrical Shocks", solution: "Grounding and wiring corrections for safety." },
    { issue: "Panel Overload", solution: "Panel upgrade or replacement to handle increased demand." },
    { issue: "Old Wiring", solution: "Full or partial rewiring for older homes and buildings." },
    { issue: "Outdated Lighting", solution: "Energy-efficient LED lighting retrofits." },
    { issue: "Surge Damage", solution: "Whole-home surge protection installation." },
    { issue: "Sparking Fixtures", solution: "Repair or replacement of faulty wiring or fixtures." },
    { issue: "Buzzing Sounds", solution: "Diagnosis and repair of electrical noise issues." }
  ];

  const safetyTips = [
    { title: "Don't Overload Outlets", desc: "Avoid plugging too many devices into one outlet." },
    { title: "Check Cords Regularly", desc: "Replace frayed or damaged cords immediately." },
    { title: "Test GFCI Outlets", desc: "Test monthly in kitchens, bathrooms, and outdoor areas." },
    { title: "Keep Water Away", desc: "Never use electrical devices near water." },
    { title: "Have a Fire Extinguisher", desc: "Keep a Class C extinguisher for electrical fires." },
    { title: "Schedule Inspections", desc: "Annual professional inspections catch issues early." },
    { title: "Don't DIY", desc: "Electrical work requires licensed professionals." }
  ];

  const testimonials = [
    {
      quote: "Our breaker panel caught fire late at night. Richard answered on the first ring and was at our house within 45 minutes. He fixed the issue temporarily and came back the next day to install a new panel. His 24/7 service is a lifesaver!",
      author: "Jessica L.",
      location: "Gautier, MS"
    },
    {
      quote: "Blackwater USA rewired our entire home and upgraded our electrical panel. The team was professional, efficient, and the work is top quality. We feel so much safer now.",
      author: "Mark & Dana S.",
      location: "Ocean Springs, MS"
    },
    {
      quote: "We needed electrical work done for our commercial office expansion. Blackwater USA handled everything — from new wiring to lighting installation — and completed the job ahead of schedule.",
      author: "David R.",
      location: "Biloxi, MS"
    }
  ];

  const faqs: FAQItem[] = [
    {
      id: 1,
      q: "Do you offer emergency electrical services?",
      a: "Yes! We provide 24/7 emergency electrical services — including weekends and holidays. Call us anytime."
    },
    {
      id: 2,
      q: "How much does electrical work cost?",
      a: "Costs vary based on the issue. We provide free, detailed estimates before any work begins. No hidden fees."
    },
    {
      id: 3,
      q: "How quickly can you respond to an emergency?",
      a: "We typically respond within 1–2 hours. For urgent calls, we can often be there even sooner."
    },
    {
      id: 4,
      q: "Are you licensed electricians?",
      a: "Yes — we are fully licensed, insured, and bonded. All work meets or exceeds local and national electrical codes."
    },
    {
      id: 5,
      q: "Do you handle both residential and commercial electrical work?",
      a: "Yes — we work on homes, rental properties, restaurants, offices, retail spaces, and more."
    },
    {
      id: 6,
      q: "Can you help with insurance claims for electrical damage?",
      a: "Absolutely. We specialize in electrical-related insurance claims and handle all communication with your adjuster."
    },
    {
      id: 7,
      q: "Do you offer electrical inspections?",
      a: "Yes — we provide comprehensive electrical inspections and safety checks for homes and businesses."
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
        "name": "Electrical Services",
        "item": "https://blackwaterusallc.com/electrical-services"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Electrical Contractor",
    "provider": {
      "@type": "GeneralContractor",
      "name": "Blackwater USA LLC",
      "telephone": "+1-228-219-8338",
      "url": "https://blackwaterusallc.com"
    },
    "areaServed": ["Moss Point, MS", "Pascagoula, MS", "Gautier, MS", "Ocean Springs, MS", "Biloxi, MS", "D'Iberville, MS", "Grand Bay, AL", "Theodore, AL"],
    "description": "Licensed residential and commercial electrical contracting, breaker panel upgrades, whole-home rewiring, lighting installation, and 24/7 emergency response in South Mississippi."
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
            src={sElectrical} 
            alt="Electrical Contractor in Moss Point MS - Blackwater USA LLC" 
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
            <span className="text-gold font-medium">Electrical Services</span>
          </nav>

          <div className="max-w-3xl">
            <Reveal variant="reveal" className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold font-sans">Licensed Electricians</span>
            </Reveal>
            <Reveal variant="reveal" className="stagger-1">
              <h1 className="text-[32px] sm:text-[44px] lg:text-[54px] font-bold text-white leading-tight tracking-[-0.03em] font-display">
                Electrical Contractor in <span className="text-gradient-gold">Moss Point, MS</span>
              </h1>
            </Reveal>
            <Reveal variant="reveal" className="stagger-2">
              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
                Panel upgrades, commercial electrical wiring, troubleshooting, generator installs, and 24/7 emergency response across Moss Point, Pascagoula, and the Gulf Coast.
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
                <span className="section-label">Electrical Services</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Safe, Reliable Electrical Services – <span className="text-gradient-gold">Available 24/7</span>
                </h2>
                
                <div className="mt-6 space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  <p>
                    Electrical issues can be dangerous, disruptive, and stressful — which is why you need a trusted professional you can count on. At Blackwater USA LLC, we provide comprehensive electrical services for residential and commercial properties across the Gulf Coast. From minor repairs to complete system upgrades, our team delivers safe, code-compliant, and reliable solutions.
                  </p>
                  <p>
                    With 43 years of hands-on experience, Richard Burns and our team bring unmatched expertise, precision, and commitment to safety to every electrical project. We use premium materials, follow all safety protocols, and ensure every job meets or exceeds local electrical codes.
                  </p>
                  <p>
                    Whether you need emergency repairs, new installations, or a full electrical panel upgrade — we're here to help, 24/7.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* CTA Side Box */}
            <Reveal variant="reveal-right">
              <div className="w-full bg-navy text-white rounded-3xl p-8 shadow-[var(--shadow-card)] relative overflow-hidden border border-white/5 text-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl" />
                <h3 className="text-xl font-bold font-display text-white mb-2">Emergency Response</h3>
                <p className="text-xs text-white/70 font-semibold mb-6">Need emergency service or a safety inspection? Call us 24/7.</p>
                <div className="space-y-4">
                  <a href="tel:+12282198338" className="btn-primary w-full justify-center py-4 font-bold">
                    <Phone className="w-4 h-4 mr-2 animate-pulse" />
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

      {/* Section 2: Why Professional Electrical Services Matter */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Safety First</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              The Importance of <span className="text-gradient-gold">Expert Electrical</span> Work
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Electrical work is not a DIY project — it requires specialized knowledge, training, and experience to ensure safety and reliability. Here's why professional electrical services are essential:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Safety", desc: "Faulty wiring and improper installations are leading causes of house fires and electrocution.", icon: AlertTriangle },
              { title: "Code Compliance", desc: "Professional work meets all local and national electrical codes.", icon: FileCheck },
              { title: "Reliability", desc: "Properly installed and repaired systems perform consistently and last longer.", icon: Shield },
              { title: "Energy Efficiency", desc: "Upgraded systems reduce energy waste and lower utility bills.", icon: TrendingUp },
              { title: "Protect Your Investment", desc: "Quality electrical work protects your property and appliances.", icon: Award },
              { title: "Peace of Mind", desc: "24/7 availability means help is always just a phone call away.", icon: Clock },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Reveal key={idx} variant="reveal-scale" className={`stagger-${(idx % 3) + 1}`}>
                  <div className="p-6 bg-white border border-border rounded-2xl h-full flex flex-col hover:border-gold/30 hover:shadow-md transition-all shadow-sm">
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

      {/* Section 3: Our Electrical Services – Residential & Commercial */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label justify-center">Our Capabilities</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Comprehensive Electrical Solutions – <span className="text-gradient-gold">Repairs, Installation & Upgrades</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We offer a full range of electrical services for homes, rental properties, and commercial spaces. No job is too small or too large.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Residential Electrical Services */}
            <Reveal variant="reveal-left" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <HomeIcon className="w-6 h-6 text-gold shrink-0" />
                <h3 className="text-xl font-bold text-navy font-display">Residential Electrical</h3>
              </div>
              <div className="divide-y divide-border/60 flex-1 space-y-4">
                {residentialServices.map((row, idx) => (
                  <div key={idx} className="pt-3.5 first:pt-0">
                    <h4 className="font-bold text-navy text-sm sm:text-base">{row.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-semibold leading-relaxed">{row.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Commercial Electrical Services */}
            <Reveal variant="reveal-scale" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Building className="w-6 h-6 text-red shrink-0" />
                <h3 className="text-xl font-bold text-navy font-display">Commercial Electrical</h3>
              </div>
              <div className="divide-y divide-border/60 flex-1 space-y-4">
                {commercialServices.map((row, idx) => (
                  <div key={idx} className="pt-3.5 first:pt-0">
                    <h4 className="font-bold text-navy text-sm sm:text-base">{row.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-semibold leading-relaxed">{row.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Insurance Claim Electrical Repairs */}
            <Reveal variant="reveal-right" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-6 h-6 text-gold shrink-0" />
                <h3 className="text-xl font-bold text-navy font-display">Insurance Claim Repairs</h3>
              </div>
              <div className="divide-y divide-border/60 flex-1 space-y-4">
                {insuranceServices.map((row, idx) => (
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

      {/* Section 4: Our Electrical Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white relative w-full overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold-light)_0%,_transparent_60%)] opacity-5 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label text-gold before:bg-gold justify-center">Our Process</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-tight font-display">
              Safe, Professional, Reliable – <span className="text-gradient-gold">Our Electrical Process</span>
            </h2>
            <p className="mt-4 text-white/85 font-medium text-sm sm:text-base">
              We make electrical services stress-free and transparent. Here's how we handle your project:
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

      {/* Section 5: Emergency Electrical Services – 24/7 Response */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-5xl mx-auto">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Emergency response</span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy leading-tight font-display">
                  Electrical Emergencies Don't Wait – <span className="text-gradient-gold">Neither Do We</span>
                </h2>
                <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
                  Electrical emergencies can be dangerous and require immediate attention. Blackwater USA LLC provides 24/7 emergency electrical services to protect your property and family.
                </p>
                
                <h4 className="mt-8 font-bold text-navy text-base">Common Emergencies We Handle:</h4>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-bold text-navy-dark text-xs sm:text-sm">
                  <li className="flex items-center gap-2">⚡ Power outages & electrical failures</li>
                  <li className="flex items-center gap-2">🔥 Sparking, smoking, or burning outlets</li>
                  <li className="flex items-center gap-2">🚨 Circuit breaker trips & surges</li>
                  <li className="flex items-center gap-2">⚠️ Exposed or damaged wiring</li>
                  <li className="flex items-center gap-2">💡 Flickering or dimming lights</li>
                  <li className="flex items-center gap-2">🔌 Shocks from outlets or appliances</li>
                  <li className="flex items-center gap-2">🌩️ Lightning strike damage</li>
                  <li className="flex items-center gap-2">🏚️ Post-fire electrical restoration</li>
                </ul>

                <div className="mt-8 p-6 bg-red/5 rounded-2xl border border-red/20 inline-block">
                  <span className="block font-bold text-navy text-sm sm:text-base">📞 Call our emergency line:</span>
                  <a href="tel:+12282198338" className="text-red hover:underline text-lg sm:text-2xl font-black mt-1 block">
                    (228) 219-8338 – Available 24/7/365
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal variant="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-border bg-white p-2">
                <img src={g1Img} alt="Emergency electrical repair" className="w-full h-auto object-cover rounded-2xl" />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 6: Common Electrical Issues We Solve */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Problem Solving</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              We've Solved Every Electrical <span className="text-gradient-gold">Problem You Can Imagine</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Over 43 years, we've addressed virtually every electrical issue imaginable. Here are some of the most common problems we handle:
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <div className="divide-y divide-border">
              <div className="grid grid-cols-2 p-4 bg-navy text-white font-bold text-xs sm:text-sm tracking-wider uppercase">
                <div>Issue</div>
                <div className="pl-2">Our Solution</div>
              </div>
              {commonIssues.map((row, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-2 p-4 font-medium text-xs sm:text-sm items-center transition-colors duration-200 hover:bg-gold/5 ${
                    idx % 2 === 0 ? 'bg-secondary/10' : 'bg-white'
                  }`}
                >
                  <div className="text-navy-dark font-bold leading-snug flex items-center gap-2">
                    <Sparkle className="w-3.5 h-3.5 text-gold shrink-0" />
                    {row.issue}
                  </div>
                  <div className="text-muted-foreground font-medium pl-2 leading-relaxed">{row.solution}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 7: Why Choose Blackwater USA LLC for Electrical Services? */}
      <section className="py-16 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">The Difference</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Why Homeowners & Businesses <span className="text-gradient-gold">Trust Us for Electrical Work</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "43 Years of Experience", desc: "We've handled every electrical issue imaginable." },
              { title: "Licensed, Insured & Bonded", desc: "Your property and investment are fully protected." },
              { title: "Family-Owned Values", desc: "Honest, transparent, and client-focused." },
              { title: "24/7 Emergency Services", desc: "We're always on call — even holidays." },
              { title: "Upfront, Transparent Pricing", desc: "No hidden fees, no surprises." },
              { title: "Premium Materials", desc: "We use high-quality parts and equipment." },
              { title: "Code Compliance", desc: "All work meets or exceeds local and national electrical codes." },
              { title: "Insurance Claim Experts", desc: "We handle electrical repairs for insurance claims." },
              { title: "Residential & Commercial Expertise", desc: "We work on homes, rental properties, and commercial spaces." },
              { title: "Free Estimates", desc: "No obligation, no pressure — just honest pricing." },
              { title: "Clean & Professional", desc: "We protect your property and leave it spotless." }
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

      {/* Section 8: Insurance Claim Electrical Repairs */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-5xl mx-auto">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Restoration</span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy leading-tight font-display">
                  Electrical Restoration for <span className="text-gradient-gold">Insurance Claims</span>
                </h2>
                <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
                  When fire, water, storm, or lightning damage affects your electrical system, we provide professional restoration services to bring your property back to safe, code-compliant condition:
                </p>
                
                <ul className="mt-6 space-y-2.5 font-bold text-navy-dark text-xs sm:text-sm">
                  <li className="flex items-center gap-2">⚡ Fire damage electrical restoration</li>
                  <li className="flex items-center gap-2">💧 Water damage electrical restoration</li>
                  <li className="flex items-center gap-2">🌊 Storm & lightning damage repairs</li>
                  <li className="flex items-center gap-2">🔥 Smoke damage electrical cleaning & restoration</li>
                  <li className="flex items-center gap-2">🏚️ Complete electrical system rebuilds</li>
                </ul>

                <h4 className="mt-8 font-bold text-navy text-base">We handle everything:</h4>
                <ul className="mt-3 space-y-2 text-xs font-semibold text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Damage assessment and documentation</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Detailed estimates for your insurance claim</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Direct communication with your adjuster</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Complete electrical restoration</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Final documentation for claim closure</li>
                </ul>
                <p className="mt-4 text-xs font-bold text-red">We work directly with your insurance provider — so you don't have to.</p>
              </div>
            </Reveal>

            <Reveal variant="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-border bg-white p-2">
                <img src={g3Img} alt="Electrical restoration insurance claim project" className="w-full h-auto object-cover rounded-2xl" />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 9: Electrical Safety Tips */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Safety Guidelines</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Electrical Safety – <span className="text-gradient-gold">Protect Your Home & Family</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Electrical safety is critical for every home and business. Here are some important safety tips:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {safetyTips.map((tip, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${(idx % 4) + 1}`}>
                <div className="p-6 bg-white border border-border rounded-2xl h-full flex flex-col hover:border-gold/30 hover:shadow-md transition-all shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-red/10 flex items-center justify-center shrink-0 mb-4 text-red">
                    <Check className="w-4 h-4 text-red font-bold" strokeWidth={3} />
                  </div>
                  <h4 className="font-bold text-navy font-display text-sm sm:text-base mb-2">{tip.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">{tip.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center text-navy font-semibold text-sm sm:text-base">
            Need an inspection? <a href="tel:+12282198338" className="text-red font-bold hover:underline">Call us today</a> to schedule a professional electrical safety check.
          </div>

        </div>
      </section>

      {/* Section 10: Electrical Gallery */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center font-sans">Portfolio</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              See Our Electrical <span className="text-gradient-gold">Work</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Browse our gallery to see real electrical projects completed by Blackwater USA LLC.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Electrical Panel Upgrade", loc: "Moss Point, MS", img: g2Img },
              { title: "Emergency Electrical Repair", loc: "Pascagoula, MS", img: g1Img },
              { title: "Commercial Lighting Installation", loc: "Biloxi, MS", img: g5Img },
              { title: "Whole-House Rewiring", loc: "Ocean Springs, MS", img: whyImg },
              { title: "EV Charger Installation", loc: "Gautier, MS", img: g3Img }
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

      {/* Section 11: Testimonials – Electrical Projects */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Testimonials</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              What Our Clients Say About <span className="text-gradient-gold">Our Electrical Work</span>
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

      {/* Section 12: FAQs – Electrical Services */}
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
          <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-4">Electrical Service Areas:</h3>
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

      {/* Section 13: Call to Action */}
      <section className="py-16 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal variant="reveal-scale">
            <div className="max-w-5xl mx-auto rounded-[32px] bg-gradient-cta p-8 sm:p-12 text-white relative overflow-hidden shadow-[var(--shadow-luxe)]">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              
              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-center relative z-10">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-gold/30 bg-gold/10 text-gold-light font-sans">
                    Emergency or Standard Request
                  </span>
                  <h2 className="mt-4 text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white leading-tight font-display">
                    Electrical Emergency or Need an Installation? We're Here 24/7.
                  </h2>
                  <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xl font-medium font-sans">
                    Whether you're dealing with a power outage, need a panel upgrade, or want to install new lighting — Blackwater USA LLC delivers expert electrical services you can trust. Call us anytime.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-white/90">
                    <span className="flex items-center gap-2">📞 (228) 219-8338</span>
                    <span className="flex items-center gap-2">✉️ blackwaterusa.llc@gmail.com</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col lg:w-full">
                  <a href="/estimate" className="btn-gold w-full text-center py-4 text-base font-bold shadow-lg">
                    Get Your Free Electrical Estimate
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
