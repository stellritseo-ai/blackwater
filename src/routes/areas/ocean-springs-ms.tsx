import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { PHONE, PHONE_LINK, services } from "@/components/home/Constants";
import { 
  MapPin, 
  Shield, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  HelpCircle,
  ChevronDown,
  Check
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import whyImg from "@/assets/why.jpg";

export const Route = createFileRoute("/areas/ocean-springs-ms")({
  head: () => ({
    meta: [
      { title: "General Contractor in Ocean Springs, MS | Remodeling | Blackwater USA LLC" },
      { name: "description", content: "Premier general contractor in Ocean Springs, MS. 43 years experience in luxury kitchen & bathroom remodeling, historic home renovations, drywall & painting." },
      { property: "og:title", content: "General Contractor in Ocean Springs, MS | Blackwater USA LLC" },
      { property: "og:description", content: "Licensed, bonded & insured general contractors delivering custom craftsmanship and upscale renovations across Ocean Springs, Mississippi." },
      { property: "og:url", content: "https://blackwaterusallc.com/areas/ocean-springs-ms" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/areas/ocean-springs-ms" }],
  }),
  component: OceanSpringsLocationPage,
});

export function OceanSpringsLocationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const localFaqs = [
    {
      q: "Do you specialize in historic home remodeling in Ocean Springs, MS?",
      a: "Yes. Ocean Springs is celebrated for its historic cottages and coastal architecture. With 43 years of master carpentry and general contracting experience, Richard Burns and our team preserve the architectural character of your home while seamlessly integrating modern plumbing, electrical systems, and chef's kitchens."
    },
    {
      q: "What commercial contracting services do you provide in Ocean Springs?",
      a: "We work with local boutique shops, restaurants, art studios, and professional offices along Government Street and Washington Avenue, offering tenant improvements, interior renovations, and commercial painting."
    },
    {
      q: "How long does a typical kitchen or bathroom remodel take in Ocean Springs?",
      a: "Most custom bathroom renovations take 2 to 3 weeks, while full kitchen remodels generally take 3 to 5 weeks depending on custom cabinetry lead times and layout reconfigurations."
    },
    {
      q: "How do I schedule an on-site design consultation?",
      a: "Call us at (228) 219-8338 or fill out our online 24/7 estimate request. We will coordinate a convenient on-site walkthrough at your Ocean Springs property."
    }
  ];

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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Ocean Springs, MS",
        "item": "https://blackwaterusallc.com/areas/ocean-springs-ms"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    "name": "Blackwater USA LLC - Ocean Springs General Contractor",
    "url": "https://blackwaterusallc.com/areas/ocean-springs-ms",
    "telephone": "+1-228-219-8338",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3600 Magnolia St",
      "addressLocality": "Moss Point",
      "addressRegion": "MS",
      "postalCode": "39563",
      "addressCountry": "US"
    },
    "areaServed": "Ocean Springs, MS"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": localFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <TopBar />
      <Nav />

      <main className="flex-1">
        {/* Location Hero */}
        <section className="relative bg-navy-dark text-white pt-12 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img src={heroImg} alt="General Contractor Ocean Springs MS" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy-dark/80" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60">
              <a href="/" className="hover:text-gold transition-colors">Home</a>
              <span>/</span>
              <a href="/service-areas" className="hover:text-gold transition-colors">Service Areas</a>
              <span>/</span>
              <span className="text-gold font-medium">Ocean Springs, MS</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 bg-white/5 text-xs font-semibold uppercase tracking-wider text-gold mb-4">
                <MapPin className="w-3.5 h-3.5" /> Ocean Springs, MS Service Area
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                General Contractor & Luxury Remodeling in <span className="text-gradient-gold">Ocean Springs, MS</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed font-normal">
                Elevate your coastal living with Blackwater USA LLC. For 43 years, we have provided discerning Ocean Springs homeowners and businesses with bespoke kitchen remodeling, luxury bathroom suites, historic cottage restorations, premium painting, and turnkey general contracting.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/estimate" className="btn-primary">Request Free Ocean Springs Estimate</a>
                <a href={PHONE_LINK} className="btn-outline flex items-center gap-2">
                  <Phone className="w-4 h-4" /> (228) 219-8338
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-white/80">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-gold" /> Licensed, Bonded & Insured</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-gold" /> Architectural & Custom Finishes</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-gold" /> 24/7 Free Consultations</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Ocean Springs */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-label">Ocean Springs Services</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy">
                Remodeling & Contracting Solutions in Ocean Springs, MS
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Meticulous attention to detail for luxury residential remodels and boutique commercial spaces.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <a
                  key={s.t}
                  href={s.slug}
                  className="p-6 rounded-2xl border border-border hover:border-gold/50 bg-secondary/10 hover:bg-white hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl mb-3 block">{s.i}</span>
                    <h3 className="text-lg font-bold text-navy group-hover:text-red transition-colors">{s.t} in Ocean Springs</h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-bold text-navy group-hover:text-red">
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Ocean Springs Architectural & Remodeling Details */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="section-label">Artisan Craftsmanship</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy">
                  Preserving Ocean Springs Charm While Upgrading Comfort
                </h2>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  From historic downtown cottages to modern estates near East Beach and Gulf Hills, Blackwater USA LLC balances timeless coastal beauty with modern structural durability.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-navy">Custom Cabinetry & Chef Kitchens</h4>
                      <p className="text-xs text-muted-foreground">Solid wood soft-close cabinets, quartz waterfall islands, and designer lighting installations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-navy">Spa-Inspired Bathrooms</h4>
                      <p className="text-xs text-muted-foreground">Zero-threshold walk-in tile showers, freestanding soaking tubs, and custom double vanities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-navy">Boutique Commercial Upgrades</h4>
                      <p className="text-xs text-muted-foreground">Turnkey build-outs for retail storefronts, dining venues, and professional offices.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-xl border border-border">
                <img src={whyImg} alt="Ocean Springs MS Custom Remodeling" className="w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="section-label">Local FAQ</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy">
                Ocean Springs General Contracting FAQs
              </h2>
            </div>

            <div className="space-y-3">
              {localFaqs.map((faq, idx) => (
                <div key={idx} className="border border-border rounded-2xl p-5 bg-secondary/10">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-bold text-navy text-sm sm:text-base cursor-pointer"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-gold shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openFaq === idx ? "rotate-180 text-gold" : "text-muted-foreground"}`} />
                  </button>
                  {openFaq === idx && (
                    <p className="mt-3 text-xs sm:text-sm text-muted-foreground pl-6 leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross Linking */}
        <section className="py-12 bg-secondary/40 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-navy mb-4">Nearby Service Areas:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/areas/biloxi-ms" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Biloxi, MS</a>
              <a href="/areas/diberville-ms" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">D'Iberville, MS</a>
              <a href="/areas/gautier-ms" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Gautier, MS</a>
              <a href="/areas/moss-point-ms" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Moss Point, MS</a>
              <a href="/areas/pascagoula-ms" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Pascagoula, MS</a>
              <a href="/service-areas" className="px-4 py-2 rounded-xl bg-navy text-white text-xs font-bold hover:bg-navy-dark transition-colors">All Service Areas →</a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-4xl font-bold">Transform Your Ocean Springs Home</h2>
            <p className="mt-3 text-white/80 text-sm sm:text-base">
              Call Blackwater USA LLC at (228) 219-8338 to schedule your free consultation with master builder Richard Burns.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/estimate" className="btn-primary">Request Free Estimate</a>
              <a href="/contact" className="btn-outline">Contact Us</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
