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

export const Route = createFileRoute("/areas/grand-bay-al")({
  head: () => ({
    meta: [
      { title: "General Contractor in Grand Bay, AL | Remodeling | Blackwater USA LLC" },
      { name: "description", content: "Licensed general contractor in Grand Bay, AL. 43 years experience in residential remodeling, kitchen & bath renovations, home additions, painting & 24/7 estimates." },
      { property: "og:title", content: "General Contractor in Grand Bay, AL | Blackwater USA LLC" },
      { property: "og:description", content: "Serving Southwest Alabama and Mobile County with master general contracting, custom home remodeling, drywall, and storm repairs." },
      { property: "og:url", content: "https://blackwaterusallc.com/areas/grand-bay-al" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/areas/grand-bay-al" }],
  }),
  component: GrandBayLocationPage,
});

export function GrandBayLocationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const localFaqs = [
    {
      q: "Does Blackwater USA LLC provide general contracting in Grand Bay, Alabama?",
      a: "Yes. Located just across the state line from Jackson County, MS, Blackwater USA LLC is fully licensed, bonded, and insured to perform residential and commercial general contracting throughout Grand Bay and Mobile County, AL."
    },
    {
      q: "What types of home improvement projects do you handle in Grand Bay?",
      a: "We manage complete home remodeling, custom kitchen renovations, master bathroom updates, room additions, pole barn and workshop construction, drywall repair, interior/exterior painting, and electrical upgrades."
    },
    {
      q: "Do you offer emergency storm and water damage repairs in Grand Bay?",
      a: "Yes, our crews provide 24/7 emergency response for wind damage, roof leaks, tree impact structural repairs, and flood mitigation across Southwest Alabama."
    },
    {
      q: "How can I schedule a free consultation in Grand Bay?",
      a: "Call us directly at (228) 219-8338 or submit our 24/7 online estimate request form to set up an on-site visit."
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
        "name": "Grand Bay, AL",
        "item": "https://blackwaterusallc.com/areas/grand-bay-al"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    "name": "Blackwater USA LLC - Grand Bay General Contractor",
    "url": "https://blackwaterusallc.com/areas/grand-bay-al",
    "telephone": "+1-228-219-8338",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3600 Magnolia St",
      "addressLocality": "Moss Point",
      "addressRegion": "MS",
      "postalCode": "39563",
      "addressCountry": "US"
    },
    "areaServed": "Grand Bay, AL"
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
            <img src={heroImg} alt="General Contractor Grand Bay AL" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy-dark/80" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60">
              <a href="/" className="hover:text-gold transition-colors">Home</a>
              <span>/</span>
              <a href="/service-areas" className="hover:text-gold transition-colors">Service Areas</a>
              <span>/</span>
              <span className="text-gold font-medium">Grand Bay, AL</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 bg-white/5 text-xs font-semibold uppercase tracking-wider text-gold mb-4">
                <MapPin className="w-3.5 h-3.5" /> Southwest Alabama • Mobile County
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                General Contractor & Home Remodeling in <span className="text-gradient-gold">Grand Bay, AL</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed font-normal">
                Looking for an experienced general contractor in Grand Bay, AL? Blackwater USA LLC brings 43 years of master building craftsmanship to Mobile County homeowners. We specialize in custom kitchen and bath remodels, acreage home additions, structural repairs, drywall, painting, and insurance restorations.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/estimate" className="btn-primary">Request Free Grand Bay Estimate</a>
                <a href={PHONE_LINK} className="btn-outline flex items-center gap-2">
                  <Phone className="w-4 h-4" /> (228) 219-8338
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-white/80">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-gold" /> Licensed, Bonded & Insured</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-gold" /> Mobile County Building Standards</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-gold" /> 24/7 Free Estimates</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Grand Bay */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-label">Grand Bay Services</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy">
                Full-Service Contracting & Renovations in Grand Bay, AL
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Turnkey construction solutions tailored for residential acreage properties and local commercial buildings.
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
                    <h3 className="text-lg font-bold text-navy group-hover:text-red transition-colors">{s.t} in Grand Bay</h3>
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

        {/* Grand Bay Specific Insights */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="section-label">Southwest Alabama Craftsmen</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy">
                  Custom Construction & Additions for Grand Bay Homes
                </h2>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  From traditional rural homes on spacious lots along Highway 90 and Grand Bay Wilmer Road to modern suburban additions, our team ensures rugged durability and refined aesthetics.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-navy">Custom Home Additions & Sunrooms</h4>
                      <p className="text-xs text-muted-foreground">Expand your living space with master suite extensions, enclosed porches, and garage conversions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-navy">Modern Kitchen & Bath Makeovers</h4>
                      <p className="text-xs text-muted-foreground">Solid wood cabinets, quartz countertops, tile showers, and energy-efficient plumbing fixtures.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-navy">Exterior Painting & Siding Protection</h4>
                      <p className="text-xs text-muted-foreground">Weather-resistant coatings designed to safeguard Gulf Coast and Alabama homes from severe sun and storms.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-xl border border-border">
                <img src={whyImg} alt="Grand Bay AL Remodeling Contractors" className="w-full h-[400px] object-cover" />
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
                Grand Bay General Contracting FAQs
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
              <a href="/areas/theodore-al" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Theodore, AL</a>
              <a href="/areas/moss-point-ms" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Moss Point, MS</a>
              <a href="/areas/pascagoula-ms" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Pascagoula, MS</a>
              <a href="/areas/gautier-ms" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Gautier, MS</a>
              <a href="/service-areas" className="px-4 py-2 rounded-xl bg-navy text-white text-xs font-bold hover:bg-navy-dark transition-colors">All Service Areas →</a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-4xl font-bold">Start Your Grand Bay Remodel Today</h2>
            <p className="mt-3 text-white/80 text-sm sm:text-base">
              Call Blackwater USA LLC at (228) 219-8338 to speak with master contractor Richard Burns.
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
