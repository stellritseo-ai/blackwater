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
  HeartPulse,
  Heart
} from "lucide-react";

import sPlumbing from "@/assets/s_plumbing.png";
import whyImg from "@/assets/why.jpg";
import g1Img from "@/assets/g1.jpg";
import g2Img from "@/assets/g2.jpg";
import g3Img from "@/assets/g3.jpg";
import g5Img from "@/assets/g5.jpg";
import g6Img from "@/assets/g6.jpg";

export const Route = createFileRoute("/plumbing-services")({
  head: () => ({
    meta: [
      { title: "Plumbing Services | 24/7 Emergency Plumber | Moss Point, MS" },
      { name: "description", content: "Reliable plumbing repairs, installations, and 24/7 emergency plumbing services by Blackwater USA LLC. Serving Moss Point and the Mississippi Gulf Coast." },
      { property: "og:title", content: "Plumbing Services | Blackwater USA LLC" },
      { property: "og:description", content: "Reliable plumbing repairs, installations, and 24/7 emergency plumbing services by Blackwater USA LLC. Serving Moss Point and the Mississippi Gulf Coast." },
      { property: "og:url", content: "https://blackwaterusallc.com/plumbing-services" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/plumbing-services" }],
  }),
  component: PlumbingServicesPage,
});

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

function PlumbingServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const residentialPlumbing = [
    { name: "Emergency Plumbing Repairs", desc: "24/7 response for burst pipes, leaks, clogs, and more." },
    { name: "Leak Detection & Repair", desc: "Expert detection and repair of hidden and visible leaks." },
    { name: "Pipe Repair & Replacement", desc: "Repair or replacement of damaged, corroded, or frozen pipes." },
    { name: "Drain Cleaning", desc: "Professional cleaning of clogged drains and sewer lines." },
    { name: "Water Heater Services", desc: "Installation, repair, and maintenance of tankless and tank water heaters." },
    { name: "Fixture Installation", desc: "Sinks, faucets, toilets, showers, bathtubs, and garbage disposals." },
    { name: "Water Filtration Systems", desc: "Installation of whole-house and point-of-use water filters." },
    { name: "Gas Line Services", desc: "Installation and repair of gas lines for stoves, dryers, and fireplaces." },
    { name: "Sump Pump Installation & Repair", desc: "Protection against basement flooding." },
    { name: "Aging-in-Place Plumbing", desc: "Grab bars, walk-in tubs, accessible fixtures." }
  ];

  const commercialPlumbing = [
    { name: "Commercial Plumbing Repairs", desc: "Fast, reliable repairs for offices, retail, restaurants, and more." },
    { name: "Pipe & Sewer Line Repair", desc: "Repair and replacement of commercial sewer and water lines." },
    { name: "Backflow Prevention", desc: "Installation and testing of backflow prevention devices." },
    { name: "Grease Trap Installation & Maintenance", desc: "For restaurants and food service businesses." },
    { name: "Commercial Water Heaters", desc: "Installation and repair of high-capacity water heaters." },
    { name: "ADA Compliance Plumbing", desc: "Accessible fixtures for ADA compliance." },
    { name: "Emergency Commercial Plumbing", desc: "24/7 response for business-critical plumbing failures." }
  ];

  const insurancePlumbing = [
    { name: "Water Damage Plumbing Restoration", desc: "Repair and replacement of plumbing after leaks, floods, or storms." },
    { name: "Fire Damage Plumbing", desc: "Restoration of plumbing systems damaged by fire." },
    { name: "Mold Remediation Plumbing", desc: "Addressing plumbing issues causing mold growth." },
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
      desc: "Using advanced tools and decades of experience, we accurately diagnose the problem and develop a clear repair or installation plan."
    },
    {
      step: "03",
      title: "Professional Execution",
      desc: "Our skilled team performs the work with precision, using premium materials and following all code requirements."
    },
    {
      step: "04",
      title: "Testing & Inspection",
      desc: "We thoroughly test the system to ensure everything is working perfectly and meets all safety standards."
    },
    {
      step: "05",
      title: "Cleanup & Follow-Up",
      desc: "We clean up the work area, review the work with you, and provide maintenance tips to prevent future issues."
    }
  ];

  const commonIssues = [
    { issue: "Dripping Faucets", solution: "Repair or replacement of washers, cartridges, or fixtures." },
    { issue: "Running Toilets", solution: "Flapper, fill valve, or flush valve replacement." },
    { issue: "Low Water Pressure", solution: "Pipe inspection, cleaning, or replacement." },
    { issue: "Clogged Drains", solution: "Professional drain cleaning and hydro-jetting." },
    { issue: "Leaky Pipes", solution: "Pipe repair or replacement with durable materials." },
    { issue: "No Hot Water", solution: "Water heater repair, replacement, or maintenance." },
    { issue: "Burst Pipes", solution: "Emergency repair and water damage mitigation." },
    { issue: "Sewer Line Backups", solution: "Sewer camera inspection and repair." },
    { issue: "Water Heater Sediment", solution: "Flushing and maintenance of water heaters." },
    { issue: "Frozen Pipes", solution: "Thawing, repair, and insulation solutions." }
  ];

  const maintenanceTips = [
    { title: "Check for Leaks", desc: "Regularly inspect under sinks, around toilets, and at visible pipes." },
    { title: "Clean Drains Monthly", desc: "Use natural, non-corrosive drain cleaners." },
    { title: "Insulate Pipes", desc: "Protect pipes in unheated areas from freezing." },
    { title: "Flush Water Heater Annually", desc: "Remove sediment buildup for efficiency and longevity." },
    { title: "Don't Flush Non-Flushables", desc: "Avoid flushing wipes, paper towels, or feminine products." },
    { title: "Schedule Annual Inspections", desc: "Professional inspections catch issues early." }
  ];

  const testimonials = [
    {
      quote: "Our basement flooded at midnight from a burst pipe. We called Blackwater USA and Richard was at our home within 45 minutes. He stopped the leak, started cleanup, and handled the insurance claim. Absolute lifesaver!",
      author: "Jessica L.",
      location: "Gautier, MS"
    },
    {
      quote: "Blackwater USA replaced our outdated water heater and repiped our bathroom. The work was clean, professional, and reasonably priced. Highly recommend!",
      author: "Tom & Beth W.",
      location: "Ocean Springs, MS"
    },
    {
      quote: "We needed emergency plumbing for our restaurant kitchen. Blackwater USA came out immediately, fixed the issue, and got us back in business the same day. Their 24/7 service is a lifesaver.",
      author: "Steve M.",
      location: "Biloxi, MS"
    }
  ];

  const faqs: FAQItem[] = [
    {
      id: 1,
      q: "Do you offer emergency plumbing services?",
      a: "Yes! We provide 24/7 emergency plumbing services — including weekends and holidays. Call us anytime."
    },
    {
      id: 2,
      q: "How much does a plumber cost?",
      a: "Costs vary based on the issue. We provide free, detailed estimates before any work begins. No hidden fees."
    },
    {
      id: 3,
      q: "How quickly can you respond to an emergency?",
      a: "We typically respond within 1–2 hours. For urgent calls, we can often be there even sooner."
    },
    {
      id: 4,
      q: "Do you handle both residential and commercial plumbing?",
      a: "Yes — we work on homes, rental properties, restaurants, offices, retail spaces, and more."
    },
    {
      id: 5,
      q: "Can you help with insurance claims for plumbing damage?",
      a: "Absolutely. We specialize in plumbing-related insurance claims and handle all communication with your adjuster."
    },
    {
      id: 6,
      q: "Do you offer plumbing maintenance services?",
      a: "Yes — we provide inspections, maintenance, and tune-ups to prevent problems before they start."
    },
    {
      id: 7,
      q: "What brands of water heaters do you install?",
      a: "We install and service all major brands, including Rheem, AO Smith, Bradford White, and more."
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
            src={sPlumbing} 
            alt="Blackwater USA plumbing services" 
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
                Plumbing Services – <span className="text-gradient-gold">24/7 Emergency & Professional Solutions</span>
              </h1>
            </Reveal>
            <Reveal variant="reveal" className="stagger-2">
              <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
                Expert plumbing services by Blackwater USA LLC in Moss Point, MS, and across the Gulf Coast. 24/7 emergency plumbing, licensed & insured, free estimates. Call (228) 219-8338 today.
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
                <span className="section-label">Plumbing Services</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Reliable Plumbing Services – <span className="text-gradient-gold">24 Hours a Day, 7 Days a Week</span>
                </h2>
                
                <div className="mt-6 space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  <p>
                    Plumbing issues don't wait for business hours — and neither do we. At Blackwater USA LLC, we provide professional plumbing services for residential and commercial properties across the Gulf Coast. From minor leaks to major pipe failures, our team is ready to respond quickly and effectively.
                  </p>
                  <p>
                    With 43 years of hands-on experience, Richard Burns and our team bring unmatched expertise, precision, and reliability to every plumbing job. We use premium materials, follow best practices, and ensure all work meets code requirements.
                  </p>
                  <p>
                    Whether you need emergency repairs, fixture installations, or a full plumbing system upgrade — we're here to help, 24/7.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* CTA Side Box */}
            <Reveal variant="reveal-right">
              <div className="w-full bg-navy text-white rounded-3xl p-8 shadow-[var(--shadow-card)] relative overflow-hidden border border-white/5 text-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl" />
                <h3 className="text-xl font-bold font-display text-white mb-2">Emergency Response</h3>
                <p className="text-xs text-white/70 font-semibold mb-6">Need emergency service or a quote? Contact us 24/7.</p>
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

      {/* Section 2: Why Professional Plumbing Matters */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">The Importance</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              The Importance of <span className="text-gradient-gold">Expert Plumbing</span> Services
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Your plumbing system is the backbone of your home or business. When something goes wrong, professional service is essential to prevent damage, protect your property, and ensure safety.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Prevent Water Damage", desc: "Quick, professional repairs stop leaks before they cause costly damage.", icon: Shield },
              { title: "Protect Your Health", desc: "Proper plumbing prevents mold, mildew, and contaminated water.", icon: HeartPulse },
              { title: "Ensure Code Compliance", desc: "Professional work meets all local plumbing codes and regulations.", icon: FileCheck },
              { title: "Increase Property Value", desc: "Updated, well-maintained plumbing adds value to your home or business.", icon: Award },
              { title: "Save Water & Money", desc: "Efficient fixtures and repairs reduce water waste and lower utility bills.", icon: TrendingUp },
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

      {/* Section 3: Our Plumbing Services – Residential & Commercial */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label justify-center">Services List</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Comprehensive Plumbing Solutions – <span className="text-gradient-gold">Repairs, Installation & Maintenance</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We offer a full range of plumbing services for homes, rental properties, and commercial spaces. No job is too small or too large.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Residential Plumbing */}
            <Reveal variant="reveal-left" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <HomeIcon className="w-6 h-6 text-gold shrink-0" />
                <h3 className="text-xl font-bold text-navy font-display">Residential Plumbing</h3>
              </div>
              <div className="divide-y divide-border/60 flex-1 space-y-4">
                {residentialPlumbing.map((row, idx) => (
                  <div key={idx} className="pt-3.5 first:pt-0">
                    <h4 className="font-bold text-navy text-sm sm:text-base">{row.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-semibold leading-relaxed">{row.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Commercial Plumbing */}
            <Reveal variant="reveal-scale" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Building className="w-6 h-6 text-red shrink-0" />
                <h3 className="text-xl font-bold text-navy font-display">Commercial Plumbing</h3>
              </div>
              <div className="divide-y divide-border/60 flex-1 space-y-4">
                {commercialPlumbing.map((row, idx) => (
                  <div key={idx} className="pt-3.5 first:pt-0">
                    <h4 className="font-bold text-navy text-sm sm:text-base">{row.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-semibold leading-relaxed">{row.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Insurance Claim Plumbing Repairs */}
            <Reveal variant="reveal-right" className="bg-secondary/35 p-6 sm:p-8 rounded-3xl border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-6 h-6 text-gold shrink-0" />
                <h3 className="text-xl font-bold text-navy font-display">Insurance Claim Repairs</h3>
              </div>
              <div className="divide-y divide-border/60 flex-1 space-y-4">
                {insurancePlumbing.map((row, idx) => (
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

      {/* Section 4: Our Plumbing Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white relative w-full overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold-light)_0%,_transparent_60%)] opacity-5 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label text-gold before:bg-gold justify-center">Our Process</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-tight font-display">
              Fast, Reliable, Professional – <span className="text-gradient-gold">Our Plumbing Process</span>
            </h2>
            <p className="mt-4 text-white/85 font-medium text-sm sm:text-base">
              We make plumbing services stress-free and efficient. Here's how we handle your project:
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

      {/* Section 5: Emergency Plumbing – 24/7 Response */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-5xl mx-auto">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Emergency response</span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy leading-tight font-display">
                  Plumbing Emergencies Don't Wait – <span className="text-gradient-gold">Neither Do We</span>
                </h2>
                <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
                  When plumbing emergencies strike, every minute counts. Blackwater USA LLC provides 24/7 emergency plumbing services to protect your property and restore your peace of mind.
                </p>
                
                <h4 className="mt-8 font-bold text-navy text-base">Common Emergencies We Handle:</h4>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-bold text-navy-dark text-xs sm:text-sm">
                  <li className="flex items-center gap-2">💧 Burst pipes & major leaks</li>
                  <li className="flex items-center gap-2">🌊 Severe clogs & backups</li>
                  <li className="flex items-center gap-2">🔥 No hot water</li>
                  <li className="flex items-center gap-2">🚽 Overflowing toilets & backups</li>
                  <li className="flex items-center gap-2">💦 Flooding & water damage</li>
                  <li className="flex items-center gap-2">🧊 Frozen pipes</li>
                  <li className="flex items-center gap-2">🔌 Gas leaks & odor issues</li>
                  <li className="flex items-center gap-2">🏚️ Water heater failures</li>
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
                <img src={g6Img} alt="Emergency plumbing repair" className="w-full h-auto object-cover rounded-2xl" />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 6: Common Plumbing Issues We Solve */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Problem Solving</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              We've Seen It All – <span className="text-gradient-gold">Here's How We Help</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Over 43 years, we've solved virtually every plumbing problem imaginable. Here are some of the most common issues we handle:
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

      {/* Section 7: Why Choose Blackwater USA LLC for Plumbing? */}
      <section className="py-16 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">The Difference</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Why Homeowners & Businesses <span className="text-gradient-gold">Trust Us for Plumbing</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "43 Years of Experience", desc: "We've handled every plumbing issue imaginable." },
              { title: "Licensed, Insured & Bonded", desc: "Your property and investment are fully protected." },
              { title: "Family-Owned Values", desc: "Honest, transparent, and client-focused." },
              { title: "24/7 Emergency Services", desc: "We're always on call — even holidays." },
              { title: "Upfront, Transparent Pricing", desc: "No hidden fees, no surprises." },
              { title: "Premium Materials", desc: "We use high-quality parts and fixtures." },
              { title: "Insurance Claim Experts", desc: "We handle plumbing repairs for insurance claims." },
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

      {/* Section 8: Insurance Claim Plumbing Repairs */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-5xl mx-auto">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Restoration</span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy leading-tight font-display">
                  Plumbing Restoration for <span className="text-gradient-gold">Insurance Claims</span>
                </h2>
                <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
                  When water damage occurs, professional plumbing restoration is often necessary to prevent further damage and restore your property. We specialize in insurance claim plumbing repairs:
                </p>
                
                <ul className="mt-6 space-y-2.5 font-bold text-navy-dark text-xs sm:text-sm">
                  <li className="flex items-center gap-2">💧 Burst pipe damage restoration</li>
                  <li className="flex items-center gap-2">🌊 Flood & storm damage plumbing repairs</li>
                  <li className="flex items-center gap-2">🔥 Fire damage plumbing restoration</li>
                  <li className="flex items-center gap-2">🧫 Mold remediation plumbing</li>
                  <li className="flex items-center gap-2">🏚️ Whole-house repiping after damage</li>
                </ul>

                <h4 className="mt-8 font-bold text-navy text-base">We handle everything:</h4>
                <ul className="mt-3 space-y-2 text-xs font-semibold text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Damage assessment and documentation</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Detailed estimates for your insurance claim</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Direct communication with your adjuster</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Complete plumbing restoration</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} /> Final documentation for claim closure</li>
                </ul>
                <p className="mt-4 text-xs font-bold text-red">We work directly with your insurance provider — so you don't have to.</p>
              </div>
            </Reveal>

            <Reveal variant="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-border bg-white p-2">
                <img src={g3Img} alt="Plumbing restoration insurance project" className="w-full h-auto object-cover rounded-2xl" />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 9: Plumbing Maintenance Tips */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Proactive Care</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Proactive Plumbing Maintenance – <span className="text-gradient-gold">Prevent Problems Before They Start</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Regular maintenance can help prevent costly plumbing emergencies. Here are some tips to keep your plumbing system in top condition:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {maintenanceTips.map((tip, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${(idx % 3) + 1}`}>
                <div className="p-6 bg-white border border-border rounded-2xl h-full flex flex-col hover:border-gold/30 hover:shadow-md transition-all shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mb-4 text-gold">
                    <Check className="w-4 h-4 text-gold font-bold" strokeWidth={3} />
                  </div>
                  <h4 className="font-bold text-navy font-display text-sm sm:text-base mb-2">{tip.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">{tip.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center text-navy font-semibold text-sm sm:text-base">
            Need maintenance or inspection? <a href="tel:+12282198338" className="text-red font-bold hover:underline">Call us today</a> to schedule a professional plumbing checkup.
          </div>

        </div>
      </section>

      {/* Section 10: Plumbing Gallery */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center font-sans">Portfolio</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              See Our Plumbing <span className="text-gradient-gold">Work</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Browse our gallery to see real plumbing projects completed by Blackwater USA LLC.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Burst Pipe Repair", loc: "Moss Point, MS", img: g1Img },
              { title: "Water Heater Installation", loc: "Pascagoula, MS", img: g2Img },
              { title: "Commercial Plumbing Project", loc: "Biloxi, MS", img: g5Img },
              { title: "Bathroom Fixture Installation", loc: "Ocean Springs, MS", img: whyImg },
              { title: "Insurance Claim Plumbing Restoration", loc: "Gautier, MS", img: g6Img }
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

      {/* Section 11: Testimonials – Plumbing Projects */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Testimonials</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy font-display">
              What Our Clients Say About <span className="text-gradient-gold">Our Plumbing Work</span>
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

      {/* Section 12: FAQs – Plumbing Services */}
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
                    Plumbing Emergency or Need an Installation? We're Here 24/7.
                  </h2>
                  <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xl font-medium font-sans">
                    Whether you're dealing with a burst pipe, installing new fixtures, or need routine maintenance — Blackwater USA LLC delivers expert plumbing services you can trust. Call us anytime.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-white/90">
                    <span className="flex items-center gap-2">📞 (228) 219-8338</span>
                    <span className="flex items-center gap-2">✉️ blackwaterusa.llc@gmail.com</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col lg:w-full">
                  <a href="/estimate" className="btn-gold w-full text-center py-4 text-base font-bold shadow-lg">
                    Get Your Free Plumbing Estimate
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
