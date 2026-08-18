import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { PHONE, PHONE_LINK, ADDRESS, EMAIL, services } from "@/components/home/Constants";
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
  ChevronDown,
  Star,
  Check
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import whyImg from "@/assets/why.jpg";
import g1Img from "@/assets/g1.jpg";
import g3Img from "@/assets/g3.jpg";

export const Route = createFileRoute("/areas/moss-point-ms")({
  head: () => ({
    meta: [
      { title: "General Contractor in Moss Point, MS | Remodeling & Construction | Blackwater USA LLC" },
      { name: "description", content: "Blackwater USA LLC is Moss Point's trusted general contractor with 43 years experience. Kitchen & bath remodeling, home renovations, plumbing, electrical & 24/7 estimates." },
      { property: "og:title", content: "General Contractor in Moss Point, MS | Blackwater USA LLC" },
      { property: "og:description", content: "Headquartered at 3600 Magnolia St in Moss Point. Family-owned, licensed, bonded & insured residential & commercial remodeling experts." },
      { property: "og:url", content: "https://blackwaterusallc.com/areas/moss-point-ms" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/areas/moss-point-ms" }],
  }),
  component: MossPointLocationPage,
});

export function MossPointLocationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const localFaqs = [
    {
      q: "Where is Blackwater USA LLC located in Moss Point?",
      a: "Our primary workshop and headquarters is located at 3600 Magnolia St, Moss Point, MS 39563. We are proudly family-owned and locally operated right here in Jackson County."
    },
    {
      q: "What contracting services do you provide in Moss Point?",
      a: "We provide comprehensive residential and commercial general contracting, including kitchen remodeling, bathroom renovations, whole-home additions, drywall repairs, interior/exterior painting, plumbing, electrical upgrades, and insurance storm damage repairs."
    },
    {
      q: "Do you handle city building permits in Moss Point?",
      a: "Yes. As a fully licensed and bonded general contractor, we manage all necessary building permits, inspections, and code compliance through the City of Moss Point Building Department."
    },
    {
      q: "How fast can you respond for emergency storm damage in Moss Point?",
      a: "Because our headquarters is right here in Moss Point, our team provides 24/7 rapid response for emergency tarping, structural stabilization, water intrusion repairs, and insurance claim documentation."
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
        "name": "Moss Point, MS",
        "item": "https://blackwaterusallc.com/areas/moss-point-ms"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    "name": "Blackwater USA LLC - Moss Point General Contractor",
    "url": "https://blackwaterusallc.com/areas/moss-point-ms",
    "telephone": "+1-228-219-8338",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3600 Magnolia St",
      "addressLocality": "Moss Point",
      "addressRegion": "MS",
      "postalCode": "39563",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.392666,
      "longitude": -88.544569
    },
    "areaServed": "Moss Point, MS"
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
            <img src={heroImg} alt="Moss Point MS General Contracting" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy-dark/80" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60">
              <a href="/" className="hover:text-gold transition-colors">Home</a>
              <span>/</span>
              <a href="/service-areas" className="hover:text-gold transition-colors">Service Areas</a>
              <span>/</span>
              <span className="text-gold font-medium">Moss Point, MS</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 bg-white/5 text-xs font-semibold uppercase tracking-wider text-gold mb-4">
                  <MapPin className="w-3.5 h-3.5" /> Company Headquarters • Moss Point, MS
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  Premier General Contractor in <span className="text-gradient-gold">Moss Point, MS</span>
                </h1>
                <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-2xl">
                  Blackwater USA LLC is a homegrown, licensed, bonded, and insured general contractor headquartered right here on Magnolia Street in Moss Point. Guided by 43 years of field-tested building experience, we specialize in high-end kitchen and bath remodeling, residential additions, commercial renovations, and insurance claim repairs.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/estimate" className="btn-primary">Request Free Moss Point Estimate</a>
                  <a href={PHONE_LINK} className="btn-outline flex items-center gap-2">
                    <Phone className="w-4 h-4" /> (228) 219-8338
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-white/80">
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-gold" /> Jackson County Local</span>
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-gold" /> Licensed & Insured</span>
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-gold" /> 24/7 Emergency Repairs</span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h2 className="text-lg font-bold text-white mb-4">Moss Point Office Info</h2>
                <div className="space-y-3 text-xs sm:text-sm text-white/90">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>3600 Magnolia St, Moss Point, MS 39563</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gold shrink-0" />
                    <span>(228) 219-8338 (24/7 Call Center)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold shrink-0" />
                    <span>Mon - Sun: Open 24 Hours</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-gold shrink-0" />
                    <span>MS Licensed, Bonded & Insured</span>
                  </p>
                </div>
                <a href="/contact" className="mt-6 w-full btn-primary block text-center text-xs py-3">
                  Contact Moss Point Office
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Local Services Overview */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-label">Tailored Services</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy">
                General Contracting Services in Moss Point, MS
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Whether you need a complete kitchen transformation or structural hurricane repairs, our seasoned team handles every stage with pride.
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
                    <h3 className="text-lg font-bold text-navy group-hover:text-red transition-colors">{s.t} in Moss Point</h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-bold text-navy group-hover:text-red">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Local Expertise & Jackson County Info */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="section-label">Local Building Experts</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy">
                  Why Moss Point Homeowners & Businesses Trust Richard Burns & Team
                </h2>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Building along the Escatawpa and Pascagoula River systems in Jackson County demands specialized knowledge of local soil conditions, humidity control, flood mitigation, and wind-load resistance.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-navy">River & Coastal Moisture Protection</h4>
                      <p className="text-xs text-muted-foreground">We use moisture-resistant drywall, mold-inhibiting primers, and marine-grade fasteners suitable for Moss Point's humid climate.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-navy">Insurance Claim Specialists</h4>
                      <p className="text-xs text-muted-foreground">Experienced in providing line-item Xactimate estimates for tornado, tropical storm, or plumbing water damage claims.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-navy">Full Code Compliance & Permitting</h4>
                      <p className="text-xs text-muted-foreground">We pull all required permits with the Jackson County and City of Moss Point inspections office.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-xl border border-border">
                <img src={whyImg} alt="Quality craftsmanship in Moss Point MS" className="w-full h-[400px] object-cover" />
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
                Moss Point General Contracting FAQs
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

        {/* Nearby Service Areas Linking */}
        <section className="py-12 bg-secondary/40 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-navy mb-4">Nearby Communities We Also Serve:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/areas/pascagoula-ms" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Pascagoula, MS</a>
              <a href="/areas/gautier-ms" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Gautier, MS</a>
              <a href="/areas/ocean-springs-ms" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Ocean Springs, MS</a>
              <a href="/areas/biloxi-ms" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Biloxi, MS</a>
              <a href="/areas/grand-bay-al" className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-navy hover:text-red hover:border-gold transition-colors">Grand Bay, AL</a>
              <a href="/service-areas" className="px-4 py-2 rounded-xl bg-navy text-white text-xs font-bold hover:bg-navy-dark transition-colors">All Service Areas →</a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-4xl font-bold">Schedule Your Free Moss Point Estimate Today</h2>
            <p className="mt-3 text-white/80 text-sm sm:text-base">
              Call our Moss Point headquarters at (228) 219-8338 for reliable residential and commercial contracting.
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
