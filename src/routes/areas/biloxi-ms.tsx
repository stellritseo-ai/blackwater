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

export const Route = createFileRoute("/areas/biloxi-ms")({
  head: () => ({
    meta: [
      { title: "General Contractor in Biloxi, MS | Remodeling & Construction | Blackwater USA LLC" },
      { name: "description", content: "Top general contractor in Biloxi, MS. 43 years experience in commercial & residential remodeling, kitchen & bath renovations, storm repair & 24/7 estimates." },
      { property: "og:title", content: "General Contractor in Biloxi, MS | Blackwater USA LLC" },
      { property: "og:description", content: "Licensed, bonded & insured general contractors serving Biloxi homeowners and commercial properties with master craftsmanship." },
      { property: "og:url", content: "https://blackwaterusallc.com/areas/biloxi-ms" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/areas/biloxi-ms" }],
  }),
  component: BiloxiLocationPage,
});

export function BiloxiLocationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const localFaqs = [
    {
      q: "What residential and commercial contracting services do you provide in Biloxi?",
      a: "We provide complete general contracting services in Biloxi, MS, including high-end kitchen remodeling, luxury bathroom conversions, commercial tenant build-outs, drywall finishing, interior/exterior painting, and 24/7 storm restoration."
    },
    {
      q: "Do you have experience managing storm damage insurance repairs in Biloxi?",
      a: "Yes. With 43 years of experience on the Mississippi Gulf Coast, we are seasoned in hurricane, wind, and water damage remediation, providing comprehensive damage reports and working alongside insurance adjusters."
    },
    {
      q: "Are you licensed and insured for commercial build-outs in Biloxi?",
      a: "Yes. Blackwater USA LLC is fully licensed, bonded, and insured for both residential and commercial general contracting throughout Harrison County and the City of Biloxi."
    },
    {
      q: "How fast can you start a project in Biloxi?",
      a: "After an initial consultation and estimate review, we promptly establish material ordering and project schedules, often mobilizing crews within days for emergency repairs or scheduled start dates for major renovations."
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
        "name": "Biloxi, MS",
        "item": "https://blackwaterusallc.com/areas/biloxi-ms"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    "name": "Blackwater USA LLC - Biloxi General Contractor",
    "url": "https://blackwaterusallc.com/areas/biloxi-ms",
    "telephone": "+1-228-219-8338",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3600 Magnolia St",
      "addressLocality": "Moss Point",
      "addressRegion": "MS",
      "postalCode": "39563",
      "addressCountry": "US"
    },
    "areaServed": "Biloxi, MS"
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
            <img src={heroImg} alt="General Contractor Biloxi MS" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy-dark/80" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60">
              <a href="/" className="hover:text-gold transition-colors">Home</a>
              <span>/</span>
              <a href="/service-areas" className="hover:text-gold transition-colors">Service Areas</a>
              <span>/</span>
              <span className="text-gold font-medium">Biloxi, MS</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 bg-white/5 text-xs font-semibold uppercase tracking-wider text-gold mb-4">
                <MapPin className="w-3.5 h-3.5" /> Biloxi, MS Service Area
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                General Contractor & Commercial Builder in <span className="text-gradient-gold">Biloxi, MS</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed font-normal">
                Trust Blackwater USA LLC for premier general contracting, home remodeling, and commercial build-outs in Biloxi. Backed by 43 years of Gulf Coast building leadership, we handle everything from full kitchen and bath makeovers to structural insurance restoration and commercial property overhauls.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/estimate" className="btn-primary">Request Free Biloxi Estimate</a>
                <a href={PHONE_LINK} className="btn-outline flex items-center gap-2">
                  <Phone className="w-4 h-4" /> (228) 219-8338
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-white/80">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-gold" /> Licensed, Bonded & Insured</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-gold" /> Harrison County Compliance</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-gold" /> 24/7 Emergency Repairs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Biloxi */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-label">Biloxi Contracting</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy">
                Residential & Commercial Construction in Biloxi, MS
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                High-performance remodeling engineered for Biloxi's vibrant coastal properties and commercial hubs.
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
                    <h3 className="text-lg font-bold text-navy group-hover:text-red transition-colors">{s.t} in Biloxi</h3>
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

        {/* Biloxi Specific Building Insights */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="section-label">Harrison County Leadership</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy">
                  Commercial & Residential Construction Strength in Biloxi
                </h2>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  As one of the most dynamic cities on the Mississippi Gulf Coast, Biloxi requires builders who understand both high-traffic commercial spaces and coastal home preservation.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-navy">Commercial Build-Outs & Hospitality Upgrades</h4>
                      <p className="text-xs text-muted-foreground">Expert execution of retail fit-outs, restaurant updates, and commercial drywall/painting.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-navy">Luxury Kitchen & Bath Renovation</h4>
                      <p className="text-xs text-muted-foreground">Custom cabinetry, quartz countertops, walk-in tile showers, and energy-efficient lighting.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-navy">Storm Damage & Windstorm Restoration</h4>
                      <p className="text-xs text-muted-foreground">24/7 rapid response for water extraction, framing repair, and insurance adjuster assistance.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-xl border border-border">
                <img src={whyImg} alt="Biloxi MS General Contracting" className="w-full h-[400px] object-cover" />
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
                Biloxi General Contracting FAQs
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
            <h3 className="text-sm font-bold uppercase tracking-wider text-navy mb-4">Nearby Communities Served:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/areas/diberville-ms" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">D'Iberville, MS</a>
              <a href="/areas/ocean-springs-ms" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Ocean Springs, MS</a>
              <a href="/areas/gautier-ms" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Gautier, MS</a>
              <a href="/areas/pascagoula-ms" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Pascagoula, MS</a>
              <a href="/areas/moss-point-ms" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Moss Point, MS</a>
              <a href="/service-areas" className="px-4 py-2 rounded-xl bg-navy text-white text-xs font-bold hover:bg-navy-dark transition-colors">All Service Areas →</a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-4xl font-bold">Start Your Biloxi Construction Project</h2>
            <p className="mt-3 text-white/80 text-sm sm:text-base">
              Contact Blackwater USA LLC at (228) 219-8338 for reliable craftsmanship and free estimates.
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
