import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { 
  Check, 
  ArrowRight, 
  Award, 
  FileText, 
  Clock, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  Star, 
  CheckCircle2, 
  HelpCircle, 
  Hammer,
  Zap,
  Droplet,
  Paintbrush
} from "lucide-react";

import aboutImg from "@/assets/about_clean.png";
import g1Img from "@/assets/g1.jpg";
import g2Img from "@/assets/g2.jpg";
import whyImg from "@/assets/why.jpg";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Licensed General Contractor Moss Point MS | Blackwater USA LLC" },
      { name: "description", content: "Learn about Blackwater USA LLC, licensed & insured general contractor in Moss Point, MS. 43 years of Gulf Coast construction experience & 24/7 free estimates." },
      { property: "og:title", content: "About Us | Licensed General Contractor Moss Point MS | Blackwater USA LLC" },
      { property: "og:description", content: "Learn about Blackwater USA LLC, licensed & insured general contractor in Moss Point, MS. 43 years of Gulf Coast construction experience & 24/7 free estimates." },
      { property: "og:url", content: "https://blackwaterusallc.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    {
      title: "Excellence",
      desc: "We don't cut corners. Ever. Quality craftsmanship is our standard.",
      icon: Award,
    },
    {
      title: "Transparency",
      desc: "Free estimates, clear pricing, and no surprises along the way.",
      icon: FileText,
    },
    {
      title: "Availability",
      desc: "24 hours a day, 7 days a week — because construction and repair emergencies don't wait.",
      icon: Clock,
    },
    {
      title: "Community",
      desc: "We're neighbors serving neighbors, and we're proud of the community we build.",
      icon: Users,
    },
  ];

  const credentials = [
    {
      title: "Licensed General Contractor",
      desc: "State-certified and fully compliant with Mississippi regulations.",
    },
    {
      title: "Fully Insured & Bonded",
      desc: "Your property and your investment are protected at every phase.",
    },
    {
      title: "Insurance Claim Specialists",
      desc: "We work directly with your provider to handle all damage-related repairs, from photos to final checks.",
    },
    {
      title: "Free Estimates 24/7",
      desc: "Day or night, we'll assess your project at no charge.",
    },
  ];

  const servicesList = [
    { name: "Kitchen & Bathroom Remodeling", icon: Hammer },
    { name: "Home Renovations & Additions", icon: Shield },
    { name: "Interior & Exterior Painting", icon: Paintbrush },
    { name: "Drywall Installation & Repair", icon: Hammer },
    { name: "Plumbing (fixtures, pipes, water heaters)", icon: Droplet },
    { name: "Electrical (wiring, panels, lighting, outlets)", icon: Zap },
    { name: "General Contracting for New Builds & Commercial Spaces", icon: Award },
  ];

  const stats = [
    { value: "43", label: "Years of Experience", suffix: "" },
    { value: "1,280", label: "Completed Projects", suffix: "+" },
    { value: "970", label: "Satisfied Clients", suffix: "+" },
    { value: "35", label: "Service Radius", suffix: " Mile" },
    { value: "24/7", label: "Availability", suffix: "" },
    { value: "100", label: "Insurance Assistance", suffix: "%" },
  ];

  const testimonials = [
    {
      quote: "Richard saved us after Hurricane Zeta damaged our roof and electrical panel. He handled the insurance claim and made the whole process painless. A true professional.",
      author: "Mark & Dana S.",
      location: "Ocean Springs",
    },
    {
      quote: "We hired Blackwater USA for a complete kitchen remodel. They finished on time, on budget, and the quality is stunning. We're already planning our bathroom renovation with them.",
      author: "Patricia L.",
      location: "Pascagoula",
    },
    {
      quote: "As a property manager, I need reliable contractors. Blackwater USA is my go-to for plumbing, painting, and electrical. They're fast, clean, and fair.",
      author: "James R.",
      location: "Biloxi",
    },
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
        "name": "About Us",
        "item": "https://blackwaterusallc.com/about"
      }
    ]
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "GeneralContractor",
      "name": "Blackwater USA LLC",
      "founder": {
        "@type": "Person",
        "name": "Richard Burns",
        "jobTitle": "Owner & Master Builder"
      },
      "description": "Licensed and insured general contractor in Moss Point, MS with over 43 years of experience specializing in residential and commercial remodeling, renovations, and insurance claim recovery.",
      "telephone": "+1-228-219-8338",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3600 Magnolia St",
        "addressLocality": "Moss Point",
        "addressRegion": "MS",
        "postalCode": "39563",
        "addressCountry": "US"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      <TopBar />
      <Nav />

      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden w-full isolate">
        {/* Background Image and Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Licensed General Contractor Moss Point MS - Blackwater USA LLC" 
            className="w-full h-full object-cover"
          />
          {/* Main dark overlay to match the premium theme and guarantee text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/85 to-navy-dark/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_60%)]" />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* In-page Breadcrumb bar */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60">
            <a href="/" className="hover:text-gold transition-colors">Home</a>
            <span>/</span>
            <span className="text-gold font-medium">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <Reveal variant="reveal" className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold font-sans">Our Company</span>
            </Reveal>
            <Reveal variant="reveal" className="stagger-1">
              <h1 className="text-[32px] sm:text-[44px] lg:text-[54px] font-bold text-white leading-tight tracking-[-0.03em] font-display">
                About Blackwater USA – <span className="text-gradient-gold">Licensed General Contractor</span> in Moss Point, MS
              </h1>
            </Reveal>
            <Reveal variant="reveal" className="stagger-2">
              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
                Rooted in Jackson County with 43 years of craftsmanship. Delivering licensed, insured, and 24/7 contracting services across South Mississippi and Southwest Alabama.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 1: Our Story */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
            
            {/* Left: Text */}
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Our Story</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Rooted in Moss Point.<br />Built on <span className="text-gradient-gold">Trust</span>.
                </h2>
                <div className="mt-6 space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  <p>
                    Blackwater USA LLC isn't just a construction company — it's a family legacy. Founded and operated by Richard Burns, our journey began over four decades ago with a simple mission: deliver honest, high-quality craftsmanship that stands the test of time.
                  </p>
                  <p>
                    Today, we serve homeowners and businesses across a 35-mile radius of Moss Point, Mississippi, offering everything from emergency electrical repairs to full kitchen and bathroom remodels. We're proud to be the contractor your neighbors trust — and the one your insurance company recommends.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right: Floating Images Collage */}
            <Reveal variant="reveal-right">
              <div className="relative w-full max-w-[380px] sm:max-w-[440px] mx-auto mt-6 lg:mt-0">
                <div className="absolute -inset-4 bg-navy/5 rounded-3xl -z-10 translate-x-4 translate-y-4" />
                <div className="absolute -inset-4 border border-navy/10 rounded-3xl -z-10 -translate-x-3 -translate-y-3" />
                
                <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)] z-10 border border-border bg-white">
                  <img 
                    src={aboutImg} 
                    alt="Blackwater USA Construction Project" 
                    className="w-full h-auto aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" 
                    loading="lazy" 
                  />
                </div>
                
                {/* Overlay Experience Badge */}
                <div className="absolute -bottom-6 -right-6 bg-navy text-white p-5 rounded-2xl shadow-xl border border-white/10 flex items-center gap-4 z-20">
                  <div className="text-gold font-display text-4xl font-bold">43+</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] leading-tight text-white/80">
                    Years of<br /><span className="text-gold">Service</span>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 2: Meet the Owner */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
            
            {/* Left Image Collage */}
            <Reveal variant="reveal-left" className="order-2 lg:order-1">
              <div className="relative max-w-[360px] mx-auto">
                <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
                  <img 
                    src={whyImg} 
                    alt="Richard Burns working on site" 
                    className="w-full aspect-[4/5] object-cover" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase tracking-widest text-gold font-bold">Founder & On-Site Director</p>
                    <h4 className="text-xl font-bold mt-1">Richard Burns</h4>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Text */}
            <Reveal variant="reveal-right" className="order-1 lg:order-2">
              <div>
                <span className="section-label">Meet The Founder</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Richard Burns – 43 Years of <span className="text-gradient-gold">Hands-On Excellence</span>
                </h2>
                
                <div className="mt-6 space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  <p>
                    Richard Burns isn't behind a desk — he's on-site, measuring, advising, and ensuring every project meets his personal standard of perfection. With 43 years in the trades, Richard has mastered every facet of construction: framing, plumbing, electrical, drywall, painting, and finish carpentry.
                  </p>
                  
                  <blockquote className="border-l-4 border-gold pl-4 py-1.5 my-6 bg-gold/5 rounded-r-lg">
                    <p className="font-semibold text-navy italic text-base">
                      “Treat every home like your own, and every client like family.”
                    </p>
                  </blockquote>

                  <p>
                    That's why Blackwater USA LLC remains a family-operated business — because trust and reputation matter more than profit.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 3: Our Mission & Values */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label justify-center">Mission & Values</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Our Mission: Quality, Integrity, and <span className="text-gradient-gold">24/7 Readiness</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We believe that great construction starts with great communication. Our mission is to provide stress-free renovations and repairs — whether it's a scheduled remodel or an emergency call at 2 AM.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} variant="reveal-scale" className={`stagger-${i+1}`}>
                <div className="h-full bg-white hover:bg-navy hover:text-white group border border-border hover:border-navy transition-all duration-300 rounded-2xl p-6 sm:p-8 flex flex-col items-start shadow-sm hover:shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 group-hover:bg-gold flex items-center justify-center shrink-0 mb-6 transition-all duration-300">
                    <v.icon className="w-6 h-6 text-gold group-hover:text-navy-dark transition-all duration-300" />
                  </div>
                  <h3 className="text-navy group-hover:text-white text-lg font-bold transition-all duration-300">{v.title}</h3>
                  <p className="mt-3 text-muted-foreground group-hover:text-white/80 text-sm leading-relaxed font-medium transition-all duration-300">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why We're Different (Trust Builders) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white relative w-full overflow-hidden">
        {/* Background glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--color-gold-light)_0%,_transparent_40%)] opacity-5 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label text-gold before:bg-gold">Why We're Different</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-tight font-display">
                  Licensed. Insured. Bonded.<br />And <span className="text-gradient-gold">Insurance Claim Experts</span>.
                </h2>
                <p className="mt-6 text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                  Not all contractors are created equal. Blackwater USA LLC holds all the credentials that give you peace of mind.
                </p>
                <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                  We also handle all the paperwork for insurance claims, so you don't have to fight with adjusters — we do it for you.
                </p>
                
                <div className="mt-8">
                  <a href="#contact" className="btn-gold">
                    Free Consultation
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal variant="reveal-right">
              <div className="grid sm:grid-cols-2 gap-5">
                {credentials.map((c, idx) => (
                  <div key={c.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                      <h4 className="text-[15px] font-bold text-white leading-tight">{c.title}</h4>
                    </div>
                    <p className="text-xs text-white/75 leading-relaxed font-medium">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 5: Our Expertise - Residential & Commercial */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Services list */}
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Our Expertise</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Serving Homes and <span className="text-gradient-gold">Businesses Alike</span>
                </h2>
                <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 font-medium">
                  Whether you're a homeowner dreaming of a spa-like bathroom, a landlord upgrading rental units, or a business owner needing commercial painting and electrical work — we have the skills and crew to deliver.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {servicesList.map((service, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-secondary/25">
                      <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                        <service.icon className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-navy leading-snug">{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right Column: Commitment to Community */}
            <Reveal variant="reveal-right">
              <div className="bg-secondary/40 rounded-3xl p-8 sm:p-10 border border-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl" />
                <span className="section-label">Community First</span>
                <h3 className="mt-4 text-2xl font-bold text-navy font-display">
                  Proudly Serving Moss Point and Beyond
                </h3>
                <div className="mt-5 space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  <p>
                    We're not a faceless corporation — we're your friends, neighbors, and fellow community members. From Pascagoula to Ocean Springs, Biloxi to Gautier, we've left our mark on hundreds of homes and businesses.
                  </p>
                  <p>
                    We're also committed to supporting local suppliers, hiring local talent, and giving back to the Gulf Coast that has supported us for 43 years.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 7: Stats That Speak for Themselves */}
      <section className="py-16 bg-navy-dark text-white w-full relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 text-center">
            {stats.map((s, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${(idx % 3) + 1}`}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300">
                  <div className="text-[32px] sm:text-[40px] lg:text-[48px] font-black text-gold leading-none tracking-tight font-display">
                    {s.value}<span className="text-gold-light font-bold text-2xl sm:text-3xl">{s.suffix}</span>
                  </div>
                  <div className="mt-3 text-xs sm:text-sm font-semibold text-white/70 uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Testimonial Spotlight */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Testimonials</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              What Our Clients Say <span className="text-gradient-gold">About Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${idx+1}`}>
                <div className="h-full bg-secondary/20 border border-border p-8 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed italic font-medium">
                      “{t.quote}”
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-5 border-t border-border/60">
                    <p className="font-bold text-navy text-sm sm:text-base">{t.author}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.location}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Call to Action */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal variant="reveal-scale">
            <div className="w-full rounded-[32px] bg-gradient-cta p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-[var(--shadow-luxe)]">
              {/* Decorative circles */}
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              
              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-20 items-center relative z-10">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-gold/30 bg-gold/10 text-gold-light">
                    Get In Touch
                  </span>
                  <h2 className="mt-4 text-[30px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-tight font-display">
                    Ready to Start Your Project?
                  </h2>
                  <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                    Whether you need a quick repair, a full renovation, or help navigating an insurance claim — we're here for you. No job is too small, and no project is too big. Get your free estimate today — we're available around the clock.
                  </p>
                  
                  {/* Contact Info details */}
                  <div className="mt-8 grid sm:grid-cols-2 gap-4">
                    <a href="tel:+12282198338" className="flex items-center gap-3 text-white hover:text-gold transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase text-white/50 font-bold tracking-wider leading-none">Call us 24/7</p>
                        <p className="font-semibold mt-0.5 text-sm sm:text-base">(228) 219-8338</p>
                      </div>
                    </a>
                    
                    <a href="mailto:blackwaterusa.llc@gmail.com" className="flex items-center gap-3 text-white hover:text-gold transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase text-white/50 font-bold tracking-wider leading-none">Email Us</p>
                        <p className="font-semibold mt-0.5 text-sm sm:text-base break-all">blackwaterusa.llc@gmail.com</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 text-white sm:col-span-2">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase text-white/50 font-bold tracking-wider leading-none">Visit Us</p>
                        <p className="font-semibold mt-0.5 text-sm sm:text-base">3600 Magnolia St, Moss Point, MS</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:w-full">
                  <a href="tel:+12282198338" className="btn-gold w-full text-center py-4 text-base font-bold shadow-lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call (228) 219-8338
                  </a>
                  <a href="mailto:blackwaterusa.llc@gmail.com" className="btn-outline w-full text-center py-4 text-base font-bold border-white/20 hover:border-white">
                    <Mail className="w-4 h-4 mr-2" />
                    Send an Email
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
