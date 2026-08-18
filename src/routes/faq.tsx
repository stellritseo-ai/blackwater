import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  HelpCircle, 
  Check, 
  Clock, 
  Shield, 
  Award, 
  FileText, 
  ArrowRight,
  Sparkles,
  Settings,
  DollarSign,
  Briefcase,
  Map,
  MessageSquare
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import sContracting from "@/assets/s_contracting.png";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "General Contractor FAQs | Blackwater USA LLC Moss Point, MS" },
      { name: "description", content: "Frequently asked questions about Blackwater USA LLC: 24/7 emergency response, free estimates, insurance claims & remodeling in Moss Point, MS and Gulf Coast." },
      { property: "og:title", content: "General Contractor FAQs | Blackwater USA LLC Moss Point, MS" },
      { property: "og:description", content: "Frequently asked questions about Blackwater USA LLC: 24/7 emergency response, free estimates, insurance claims & remodeling in Moss Point, MS and Gulf Coast." },
      { property: "og:url", content: "https://blackwaterusallc.com/faq" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/faq" }],
  }),
  component: FAQPage,
});

interface FAQItem {
  id: number;
  category: string;
  q: string;
  a: string | React.ReactNode;
}

function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { label: "All Questions", value: "All", icon: HelpCircle },
    { label: "General Questions", value: "General", icon: Settings },
    { label: "Estimates & Pricing", value: "Pricing", icon: DollarSign },
    { label: "Services & Projects", value: "Services", icon: Briefcase },
    { label: "Insurance Claims", value: "Insurance", icon: Shield },
    { label: "Service Area", value: "Area", icon: Map },
    { label: "Contact & Process", value: "Process", icon: MessageSquare }
  ];

  const faqs: FAQItem[] = [
    // General Questions
    {
      id: 1,
      category: "General",
      q: "Is Blackwater USA LLC a family-owned business?",
      a: "Yes! Blackwater USA LLC is a family-owned and operated business founded by Richard Burns. We've been serving the Gulf Coast for 43 years, and we take pride in treating every client like family."
    },
    {
      id: 2,
      category: "General",
      q: "Are you licensed, insured, and bonded?",
      a: "Absolutely. We are fully licensed, insured, and bonded for your protection. Our credentials ensure that your property and investment are safe. License and insurance details are available upon request."
    },
    {
      id: 3,
      category: "General",
      q: "How many years of experience do you have?",
      a: "We have 43 years of hands-on experience in the construction and remodeling industry. Richard Burns personally brings decades of expertise in plumbing, electrical, drywall, painting, and general contracting."
    },
    {
      id: 4,
      category: "General",
      q: "What areas do you serve?",
      a: "We serve a 35-mile radius of Moss Point, MS, including Moss Point, Pascagoula, Gautier, Ocean Springs, Biloxi, D'Iberville, St. Martin, Escatawpa, Hurley, and Vancleave, as well as surrounding areas across Mississippi, Alabama, and Louisiana. If you're outside this radius, call us anyway — we may still be able to help."
    },
    {
      id: 5,
      category: "General",
      q: "What are your working hours?",
      a: "We are available 24 hours a day, 7 days a week — including weekends and holidays. We understand that emergencies don't wait, and neither do we."
    },
    // Estimates & Pricing
    {
      id: 6,
      category: "Pricing",
      q: "Do you offer free estimates?",
      a: "Yes! We provide free, no-obligation estimates 24/7. Whether you need a simple repair or a full renovation, we'll assess your project and provide a detailed quote at no cost."
    },
    {
      id: 7,
      category: "Pricing",
      q: "How long does it take to get an estimate?",
      a: "For small repairs, we can often provide a quote within hours. For larger projects, we typically deliver a detailed estimate within 24–48 hours after the initial assessment."
    },
    {
      id: 8,
      category: "Pricing",
      q: "Do you charge for emergency estimates?",
      a: "No. Even for emergency repairs, our estimates are always free. We'll come out at any hour to assess the situation and give you a transparent quote."
    },
    {
      id: 9,
      category: "Pricing",
      q: "Are your prices competitive?",
      a: "Yes — we offer fair, transparent pricing with no hidden fees. With 43 years of experience, we know how to deliver high-quality work efficiently, which helps keep costs down."
    },
    {
      id: 10,
      category: "Pricing",
      q: "What payment methods do you accept?",
      a: "We accept cash, checks, credit/debit cards, and direct insurance payouts. We also offer flexible payment options for larger projects — just ask us."
    },
    // Services & Projects
    {
      id: 11,
      category: "Services",
      q: "What types of services do you offer?",
      a: "We are a full-service general contractor offering: Bathroom & Kitchen Remodeling, Home Renovations & Additions, Painting (Interior & Exterior), Drywall Installation & Repair, Plumbing Services, Electrical Services, and General Contracting for Commercial & Residential projects."
    },
    {
      id: 12,
      category: "Services",
      q: "Do you handle both residential and commercial projects?",
      a: "Yes. We serve both residential homeowners and commercial businesses, including offices, retail spaces, rental properties, and more."
    },
    {
      id: 13,
      category: "Services",
      q: "Can you handle insurance claim repairs?",
      a: "Absolutely. We specialize in repairs related to insurance damage claims — from water and fire damage to storm and vandalism. We handle all communication with your adjuster and manage the paperwork for you."
    },
    {
      id: 14,
      category: "Services",
      q: "Do you offer design services?",
      a: "Yes — we work with you to design your dream space. We offer guidance on materials, layout, fixtures, and finishes to ensure your project matches your vision and budget."
    },
    {
      id: 15,
      category: "Services",
      q: "What is the typical timeline for a kitchen remodel?",
      a: "A full kitchen remodel typically takes 4 to 8 weeks, depending on the scope of work. We provide a detailed timeline during the estimate phase and keep you updated throughout the process."
    },
    // Insurance Claims
    {
      id: 16,
      category: "Insurance",
      q: "Do you work directly with my insurance company?",
      a: "Yes. We communicate directly with your insurance adjuster, provide detailed estimates, submit documentation, and handle all claim-related paperwork on your behalf."
    },
    {
      id: 17,
      category: "Insurance",
      q: "What types of insurance claims do you handle?",
      a: "We handle a wide range of claims, including: water damage, fire damage, storm damage (roof, siding, windows), vandalism, mold remediation, and flood damage (when covered by your insurance policy)."
    },
    {
      id: 18,
      category: "Insurance",
      q: "Do I need to pay upfront for claim-related repairs?",
      a: "In most cases, we work directly with your insurance provider to arrange payment. We'll guide you through the process and discuss all financial details before starting any work."
    },
    {
      id: 19,
      category: "Insurance",
      q: "Can you help if my claim is denied?",
      a: "Yes — we can review your claim, provide additional documentation, and work with your adjuster to appeal the decision if necessary. We're here to advocate for you."
    },
    // Service Area
    {
      id: 20,
      category: "Area",
      q: "What cities do you serve?",
      a: (
        <div className="space-y-4">
          <p>We proudly serve a 35-mile radius of Moss Point, MS, across Mississippi, Alabama, and Louisiana:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-secondary/35 p-4 rounded-xl border border-border">
            <div>
              <p className="font-bold text-navy text-xs uppercase tracking-wider mb-2 border-b border-border pb-1">Mississippi</p>
              <ul className="space-y-1 text-xs">
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
              <p className="font-bold text-navy text-xs uppercase tracking-wider mb-2 border-b border-border pb-1">Alabama</p>
              <ul className="space-y-1 text-xs">
                <li>Grand Bay</li>
                <li>Theodore</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-navy text-xs uppercase tracking-wider mb-2 border-b border-border pb-1">Louisiana</p>
              <ul className="space-y-1 text-xs">
                <li>Louisiana (All Areas)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 21,
      category: "Area",
      q: "Do you travel beyond 35 miles?",
      a: "Occasionally — depending on the project. Call us, and we'll discuss whether we can accommodate your location."
    },
    // Contact & Process
    {
      id: 22,
      category: "Process",
      q: "How do I schedule a free estimate?",
      a: "You can: Call us at (228) 219-8338 (available 24/7), Email us at blackwaterusa.llc@gmail.com, or fill out the form on our Contact or Get Free Estimate page."
    },
    {
      id: 23,
      category: "Process",
      q: "What happens after I request an estimate?",
      a: (
        <ol className="list-decimal pl-5 space-y-1">
          <li>We contact you within 24 hours (often sooner)</li>
          <li>We schedule an in-person or virtual assessment</li>
          <li>We provide a detailed, written estimate</li>
          <li>You review it — with no pressure or obligation</li>
          <li>If you are happy with the estimate, we schedule the work and get started!</li>
        </ol>
      )
    },
    {
      id: 24,
      category: "Process",
      q: "How quickly can you start my project?",
      a: "For most projects, we can start within 24 to 48 hours after approval. For emergency repairs, we're on-site the same night."
    },
    {
      id: 25,
      category: "Process",
      q: "Do you provide written contracts?",
      a: "Yes — every project is backed by a detailed written contract that includes the scope of work, timeline, materials, costs, and payment schedule."
    },
    {
      id: 26,
      category: "Process",
      q: "What if I have a problem after the project is complete?",
      a: "We stand behind our work. If any issues arise after completion, contact us and we'll make it right. That's our 43-year promise."
    }
  ];

  const filteredFaqs = activeCategory === "All" 
    ? faqs 
    : faqs.filter(item => item.category === activeCategory);

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
        "name": "FAQs",
        "item": "https://blackwaterusallc.com/faq"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are you licensed and insured in Mississippi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Blackwater USA LLC is fully licensed, insured, and bonded in Mississippi. We carry comprehensive liability and workers' compensation coverage."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide free estimates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 100% free, no-obligation estimates 24 hours a day, 7 days a week across South Mississippi."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer 24/7 emergency repair services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer 24/7 emergency response for plumbing leaks, power outages, storm damage, and structural securing across the Gulf Coast."
        }
      },
      {
        "@type": "Question",
        "name": "Can you work directly with my homeowners insurance company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialize in insurance claim repairs for hurricane, storm, water, and fire damage, handling itemized estimates and adjuster meetings directly."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Moss Point, Pascagoula, Gautier, Ocean Springs, Biloxi, D'Iberville, Vancleave, Grand Bay (AL), and Theodore (AL)."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <TopBar />
      <Nav />

      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden w-full isolate">
        {/* Background Image and Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="General Contractor FAQs Moss Point MS - Blackwater USA LLC" 
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
            <span className="text-gold font-medium">FAQs</span>
          </nav>

          <div className="max-w-3xl">
            <Reveal variant="reveal" className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold font-sans">Common Questions</span>
            </Reveal>
            <Reveal variant="reveal" className="stagger-1">
              <h1 className="text-[32px] sm:text-[44px] lg:text-[54px] font-bold text-white leading-tight tracking-[-0.03em] font-display">
                General Contractor <span className="text-gradient-gold">Frequently Asked Questions</span>
              </h1>
            </Reveal>
            <Reveal variant="reveal" className="stagger-2">
              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
                Find answers about our 24/7 estimates, licensing, insurance claims, emergency services, and construction timelines in Moss Point, MS and the Gulf Coast.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 1: Intro / Trust Banner */}
      <section className="py-16 sm:py-20 bg-white relative w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Help Desk</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  We Have Answers – And We're <span className="text-gradient-gold">Always Here to Help</span>
                </h2>
                
                <div className="mt-6 space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  <p>
                    At Blackwater USA LLC, we believe in transparency and clear communication. That's why we've compiled answers to the questions we hear most often from homeowners and businesses across the Gulf Coast.
                  </p>
                  <p>
                    Whether you're wondering about our licensing, insurance claim process, pricing, or service areas — you'll find the information you need here. And if you don't see your question, don't hesitate to reach out. We're available 24/7 to answer your call.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Emergency Hotline Box */}
            <Reveal variant="reveal-right">
              <div className="w-full bg-navy text-white rounded-3xl p-8 shadow-[var(--shadow-card)] relative overflow-hidden border border-white/5 text-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl" />
                <h3 className="text-xl font-bold font-display text-white mb-3">Still have questions?</h3>
                <p className="text-xs text-white/70 font-semibold mb-6">Call Richard Burns directly at any hour for honest answers.</p>
                <a href="tel:+12282198338" className="btn-gold w-full justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (228) 219-8338
                </a>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 2 & 3: Category Filter and FAQ Accordion */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label justify-center">Browse Topics</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy font-display">
              Browse Questions by <span className="text-gradient-gold">Category</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Use the tabs below to filter questions by topic and find exactly what you need quickly.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12 max-w-5xl mx-auto">
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.value}
                  onClick={() => {
                    setActiveCategory(cat.value);
                    setOpenFaq(null); // Reset open accordion on tab change
                  }}
                  className={`px-4.5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border flex items-center gap-2 transition-all duration-300 ${
                    activeCategory === cat.value
                      ? "bg-gold border-gold text-navy-dark shadow-md"
                      : "bg-white border-border text-navy hover:border-gold hover:text-gold"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* FAQ Accordion Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-6 lg:p-10 border border-border shadow-[var(--shadow-card)] space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  {filteredFaqs.map((faq) => {
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
                          className={`w-full text-left flex items-center justify-between transition-colors ${
                            isOpen 
                              ? 'text-navy font-bold text-base lg:text-[17px]' 
                              : 'py-2.5 text-navy font-semibold text-base lg:text-[17px] hover:text-red'
                          }`}
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
                            isOpen ? 'max-h-[800px] opacity-100 mt-3.5 text-sm text-muted-foreground leading-relaxed' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className={`${isOpen ? 'border-t border-border/55 pt-3.5' : ''}`}>
                            {faq.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {filteredFaqs.length === 0 && (
                    <div className="text-center py-12 text-muted-foreground font-medium">
                      No questions found under this category.
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      {/* Section 5: Quick Reference – Need-to-Know Info */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Quick Facts</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Blackwater USA LLC – <span className="text-gradient-gold">At a Glance</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Here is all the essential information you need to know about our business in one place.
            </p>
          </div>

          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <div className="divide-y divide-border">
              {[
                { cat: "Business Name", val: "Blackwater USA LLC" },
                { cat: "Owner", val: "Richard Burns" },
                { cat: "Experience", val: "43 Years" },
                { cat: "Service Radius", val: "35 Miles" },
                { cat: "Hours", val: "24/7 – Including Holidays" },
                { cat: "Phone", val: <a href="tel:+12282198338" className="text-red font-semibold hover:underline">(228) 219-8338</a> },
                { cat: "Email", val: <a href="mailto:blackwaterusa.llc@gmail.com" className="text-navy font-semibold hover:underline">blackwaterusa.llc@gmail.com</a> },
                { cat: "Address", val: "3600 Magnolia St, Moss Point, MS" },
                { cat: "Licensing", val: "Licensed, Insured, Bonded" },
                { cat: "Estimates", val: "Free – 24/7" },
                { cat: "Insurance Claims", val: "Expert Assistance Available" },
                { cat: "Clients", val: "Residential & Commercial" }
              ].map((row, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-[1fr_1.5fr] sm:grid-cols-[200px_1fr] p-4 font-medium text-xs sm:text-sm ${
                    idx % 2 === 0 ? 'bg-secondary/10' : 'bg-white'
                  }`}
                >
                  <div className="text-navy-dark/65 font-bold uppercase tracking-wider">{row.cat}</div>
                  <div className="text-navy font-semibold pl-2">{row.val}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: Still Have Questions? */}
      <section className="py-16 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal variant="reveal-scale">
            <div className="max-w-5xl mx-auto rounded-[32px] bg-gradient-cta p-8 sm:p-12 text-white relative overflow-hidden shadow-[var(--shadow-luxe)]">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              
              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-center relative z-10">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-gold/30 bg-gold/10 text-gold-light font-sans">
                    Get in Touch
                  </span>
                  <h2 className="mt-4 text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white leading-tight font-display">
                    We're Here 24/7 – Ask Us Anything
                  </h2>
                  <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xl font-medium font-sans">
                    Didn't find the answer you were looking for? No problem — reach out to us directly. Richard Burns and our team are always ready to help.
                  </p>

                  <div className="mt-6 space-y-2 text-xs sm:text-sm text-white/90">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gold" />
                      <span>Phone: (228) 219-8338</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gold" />
                      <span>Email: blackwaterusa.llc@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span>Address: 3600 Magnolia St, Moss Point, MS</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col lg:w-full">
                  <a href="/contact" className="btn-gold w-full text-center py-4 text-base font-bold shadow-lg">
                    Contact Us Now
                    <ArrowRight className="w-4 h-4 ml-1 shrink-0" />
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
