import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICE_LOCATIONS, PHONE, PHONE_LINK } from "@/components/home/Constants";
import { 
  MapPin, 
  Shield, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Home as HomeIcon, 
  Building, 
  Hammer,
  HelpCircle,
  ChevronDown
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import whyImg from "@/assets/why.jpg";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas | General Contractors South MS & SW Alabama | Blackwater USA LLC" },
      { name: "description", content: "Blackwater USA LLC provides licensed general contracting and remodeling in Moss Point, Pascagoula, Gautier, Ocean Springs, Biloxi, D'Iberville, Grand Bay & Theodore." },
      { property: "og:title", content: "Contractor Service Areas | South Mississippi & SW Alabama | Blackwater USA LLC" },
      { property: "og:description", content: "Explore the communities served by Blackwater USA LLC. 43 years of craftsmanship in kitchen/bath remodels, commercial builds, and 24/7 insurance repairs." },
      { property: "og:url", content: "https://blackwaterusallc.com/service-areas" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/service-areas" }],
  }),
  component: ServiceAreasHubPage,
});

export function ServiceAreasHubPage() {
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
        "name": "Service Areas",
        "item": "https://blackwaterusallc.com/service-areas"
      }
    ]
  };

  const hubFaqs = [
    {
      q: "What is Blackwater USA LLC's primary service area radius?",
      a: "Our headquarters is at 3600 Magnolia St in Moss Point, MS, and we proudly serve a 35-mile radius covering Jackson County, Harrison County, and Mobile County in Southwest Alabama."
    },
    {
      q: "Do you provide emergency repair services across all listed cities?",
      a: "Yes. We offer 24/7 emergency response for severe roof leaks, plumbing breaks, electrical hazards, and storm damage across Moss Point, Pascagoula, Gautier, Ocean Springs, Biloxi, Grand Bay, and nearby communities."
    },
    {
      q: "Are you licensed and insured to work in both Mississippi and Alabama?",
      a: "Yes. Blackwater USA LLC is fully licensed, bonded, and insured to carry out residential and commercial general contracting projects across both South Mississippi and Southwest Alabama."
    },
    {
      q: "How do I schedule a free estimate for my project?",
      a: "You can call us directly at (228) 219-8338 or fill out our 24/7 online estimate form. We provide detailed, upfront, and transparent project estimates with zero obligation."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": hubFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const msLocations = SERVICE_LOCATIONS.filter(l => l.state === "MS");
  const alLocations = SERVICE_LOCATIONS.filter(l => l.state === "AL");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <TopBar />
      <Nav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-navy-dark text-white pt-12 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-25">
            <img src={heroImg} alt="Blackwater USA Service Coverage" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy-dark/80" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Breadcrumb Bar */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60">
              <a href="/" className="hover:text-gold transition-colors">Home</a>
              <span>/</span>
              <span className="text-gold font-medium">Service Areas</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 bg-white/5 text-xs font-semibold uppercase tracking-wider text-gold mb-4">
                <MapPin className="w-3.5 h-3.5" /> Regional Service Directory
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                General Contractor Service Areas in <span className="text-gradient-gold">South MS & SW Alabama</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed font-normal">
                Based in Moss Point, MS, Blackwater USA LLC delivers 43 years of licensed craftsmanship to homeowners and commercial enterprises throughout coastal Mississippi and southwest Alabama. Select your city below to learn more about our local services.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/estimate" className="btn-primary">Request Free Estimate</a>
                <a href={PHONE_LINK} className="btn-outline flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call (228) 219-8338
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Geographic Breakdown Section */}
        <section className="py-16 sm:py-20 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            
            {/* South Mississippi Hub */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-gold" />
                <span className="text-xs font-bold uppercase tracking-widest text-gold-dark">Primary Market</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy">
                South Mississippi Service Areas
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
                Serving Jackson County and Harrison County with premier residential remodeling, commercial contracting, and 24/7 emergency repairs.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {msLocations.map((loc) => (
                  <a
                    key={loc.slug}
                    href={loc.slug}
                    className="bg-white rounded-2xl p-6 border border-border hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-navy/5 text-navy group-hover:bg-gold group-hover:text-navy-dark transition-colors">
                          {loc.badge}
                        </span>
                        <MapPin className="w-4 h-4 text-gold" />
                      </div>
                      <h3 className="text-xl font-bold text-navy group-hover:text-red transition-colors">
                        {loc.city}, {loc.state}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Full-service general contracting, custom kitchen & bathroom remodeling, interior painting, and storm repairs in {loc.city}.
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-bold text-navy group-hover:text-red">
                      <span>View {loc.city} Services</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Southwest Alabama Hub */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-gold" />
                <span className="text-xs font-bold uppercase tracking-widest text-gold-dark">Secondary Market</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy">
                Southwest Alabama Service Areas
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
                Serving Mobile County communities with residential renovations, commercial build-outs, and damage restoration services.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
                {alLocations.map((loc) => (
                  <a
                    key={loc.slug}
                    href={loc.slug}
                    className="bg-white rounded-2xl p-6 border border-border hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-navy/5 text-navy group-hover:bg-gold group-hover:text-navy-dark transition-colors">
                          {loc.badge}
                        </span>
                        <MapPin className="w-4 h-4 text-gold" />
                      </div>
                      <h3 className="text-xl font-bold text-navy group-hover:text-red transition-colors">
                        {loc.city}, {loc.state}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Reliable contracting, whole-home additions, kitchen renovations, and moisture-resistant construction for {loc.city} properties.
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-bold text-navy group-hover:text-red">
                      <span>View {loc.city} Services</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Why Blackwater In All Locations */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-label">Our Service Commitment</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy">
                Why Property Owners Choose Blackwater USA LLC
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy">43 Years of Experience</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Founded by Richard Burns, our family-owned company brings four decades of unmatched field expertise to every job site.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy">Licensed, Bonded & Insured</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Full compliance with all Mississippi and Alabama building codes, ensuring your home or commercial property is protected.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy">24/7 Estimates & Emergency Help</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  We are available round-the-clock for insurance claim repairs, storm damage mitigation, and fast project quotes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-20 bg-secondary/30 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="section-label">FAQ</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy">
                Frequently Asked Service Area Questions
              </h2>
            </div>

            <div className="space-y-4">
              {hubFaqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-border shadow-sm">
                  <h3 className="text-base sm:text-lg font-bold text-navy flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed pl-8">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-navy text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-4xl font-bold">
              Ready to Start Your Construction or Remodeling Project?
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto text-sm sm:text-base">
              Call Blackwater USA LLC at (228) 219-8338 to schedule your free on-site consultation anywhere in South Mississippi or Southwest Alabama.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/estimate" className="btn-primary">Get Your Free Estimate</a>
              <a href="/contact" className="btn-outline">Contact Our Team</a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
