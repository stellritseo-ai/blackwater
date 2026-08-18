import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  Award, 
  Clock, 
  Shield, 
  Check, 
  FileText, 
  CheckCircle2, 
  Play, 
  ArrowRight, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  ThumbsUp,
  MapPin,
  Phone,
  Mail,
  Camera,
  X,
  Sparkles,
  Download,
  Image as ImageIcon,
  Compass
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import whyImg from "@/assets/why.jpg";
import aboutImg from "@/assets/about.jpg";
import aboutClean from "@/assets/about_clean.png";
import g1Img from "@/assets/g1.jpg";
import g2Img from "@/assets/g2.jpg";
import g3Img from "@/assets/g3.jpg";
import g4Img from "@/assets/g4.jpg";
import g5Img from "@/assets/g5.jpg";
import g6Img from "@/assets/g6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Project Gallery | Remodeling & Renovations Moss Point, MS" },
      { name: "description", content: "View our gallery of kitchen remodeling, bathroom renovations, painting & general contracting projects across Moss Point, Pascagoula & Gulf Coast MS." },
      { property: "og:title", content: "Project Gallery | Remodeling & Renovations Moss Point, MS" },
      { property: "og:description", content: "View our gallery of kitchen remodeling, bathroom renovations, painting & general contracting projects across Moss Point, Pascagoula & Gulf Coast MS." },
      { property: "og:url", content: "https://blackwaterusallc.com/gallery" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/gallery" }],
  }),
  component: GalleryPage,
});

interface GalleryItem {
  id: number;
  title: string;
  location: string;
  category: string;
  img: string;
}

function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { label: "All Projects", filter: "All" },
    { label: "Kitchen Remodels", filter: "Kitchen" },
    { label: "Bathroom Renovations", filter: "Bathroom" },
    { label: "Painting (Int & Ext)", filter: "Painting" },
    { label: "Drywall & Repairs", filter: "Drywall" },
    { label: "Plumbing & Electrical", filter: "Mechanical" },
    { label: "Commercial Projects", filter: "Commercial" },
    { label: "Insurance Claim Repairs", filter: "Insurance" }
  ];

  const galleryItems: GalleryItem[] = [
    { id: 1, title: "Modern Kitchen Remodel", location: "Pascagoula, MS", category: "Kitchen", img: g1Img },
    { id: 2, title: "Spa Bathroom Renovation", location: "Ocean Springs, MS", category: "Bathroom", img: g2Img },
    { id: 3, title: "Full Exterior Repaint", location: "Moss Point, MS", category: "Painting", img: whyImg },
    { id: 4, title: "Electrical Panel Upgrade", location: "Gautier, MS", category: "Mechanical", img: heroImg },
    { id: 5, title: "Commercial Office Painting", location: "Biloxi, MS", category: "Commercial", img: g5Img },
    { id: 6, title: "Water Damage Drywall Repair", location: "Moss Point, MS", category: "Drywall", img: g6Img },
    { id: 7, title: "Farmhouse-Style Kitchen", location: "D'Iberville, MS", category: "Kitchen", img: g3Img },
    { id: 8, title: "Walk-In Shower Installation", location: "Vancleave, MS", category: "Bathroom", img: g4Img },
    { id: 9, title: "Emergency Pipe Repair", location: "Pascagoula, MS", category: "Mechanical", img: aboutClean },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "Kitchen Remodel",
      location: "Pascagoula, MS",
      type: "Full Kitchen Renovation",
      scope: "Custom cabinetry, granite countertops, tile backsplash, new plumbing fixtures, LED lighting, and premium appliances.",
      beforeImg: g3Img, // Grayscale representation
      afterImg: g1Img,
      client: "Amanda T.",
      quote: "Blackwater USA turned our outdated kitchen into a dream space. The attention to detail was incredible, and Richard helped us stay within budget without compromising quality."
    },
    {
      id: 2,
      title: "Spa Bathroom Renovation",
      location: "Ocean Springs, MS",
      type: "Full Bathroom Remodel",
      scope: "Custom walk-in shower with glass enclosure, dual vanities, new tile flooring, modern lighting, and plumbing upgrades.",
      beforeImg: aboutImg,
      afterImg: g2Img,
      client: "Tom & Beth W.",
      quote: "Our bathroom looks like a spa retreat! Richard and his team worked efficiently and kept the space clean throughout. We couldn't be happier."
    },
    {
      id: 3,
      title: "Commercial Office Painting",
      location: "Biloxi, MS",
      type: "Commercial Interior & Exterior Painting",
      scope: "5,000 sq. ft. office building — interior walls, ceilings, trim, and exterior facade.",
      beforeImg: whyImg,
      afterImg: g5Img,
      client: "David R.",
      quote: "Blackwater USA painted our entire office building in just three days. The quality is flawless, and they worked around our business hours. Highly recommend."
    },
    {
      id: 4,
      title: "Electrical Panel Upgrade",
      location: "Gautier, MS",
      type: "Emergency Electrical Repair",
      scope: "Replace old breaker panel, install new wiring, bring system up to code, and coordinate with insurance.",
      beforeImg: g6Img,
      afterImg: heroImg,
      client: "Jessica L.",
      quote: "Our panel caught fire at night, and Richard came out within an hour. He fixed everything, handled the insurance, and made our home safe again."
    }
  ];

  const videos = [
    { title: "Kitchen Remodel Tour", location: "Pascagoula", duration: "1:45", img: g1Img },
    { title: "Bathroom Renovation Walkthrough", location: "Ocean Springs", duration: "2:10", img: g2Img },
    { title: "Commercial Painting Time-Lapse", location: "Biloxi", duration: "0:58", img: g5Img }
  ];

  const insuranceProjects = [
    { title: "Water Damage Restoration", location: "Moss Point, MS", img: g6Img },
    { title: "Storm-Damaged Roof Repair", location: "Pascagoula, MS", img: whyImg },
    { title: "Fire Damage Rebuild", location: "Gautier, MS", img: heroImg }
  ];

  const behindScenes = [
    { title: "Richard Burns measuring and planning", img: whyImg },
    { title: "Team installing drywall", img: g6Img },
    { title: "Electrical wiring in progress", img: heroImg },
    { title: "Painting prep and masking", img: aboutImg },
    { title: "Plumbing installation", img: aboutClean },
    { title: "Final walkthrough with client", img: g1Img }
  ];

  const filteredItems = activeTab === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab || (activeTab === "Insurance" && item.category === "Drywall"));

  const handleDownloadPortfolio = () => {
    // Alert download simulation
    alert("Downloading Blackwater USA LLC Project Portfolio PDF...");
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
        "name": "Gallery",
        "item": "https://blackwaterusallc.com/gallery"
      }
    ]
  };

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Blackwater USA LLC Construction & Remodeling Gallery",
    "description": "Portfolio of custom kitchen remodels, bathroom renovations, commercial buildouts, and storm damage repairs in Moss Point, MS and the Mississippi Gulf Coast.",
    "provider": {
      "@type": "GeneralContractor",
      "name": "Blackwater USA LLC",
      "telephone": "+1-228-219-8338",
      "url": "https://blackwaterusallc.com"
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />

      <TopBar />
      <Nav />

      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden w-full isolate">
        {/* Background Image and Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Contractor Project Gallery Moss Point MS - Blackwater USA LLC" 
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
            <span className="text-gold font-medium">Gallery</span>
          </nav>

          <div className="max-w-3xl">
            <Reveal variant="reveal" className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold font-sans">Our Portfolio</span>
            </Reveal>
            <Reveal variant="reveal" className="stagger-1">
              <h1 className="text-[32px] sm:text-[44px] lg:text-[54px] font-bold text-white leading-tight tracking-[-0.03em] font-display">
                Contractor Project Gallery – <span className="text-gradient-gold">Moss Point & Gulf Coast, MS</span>
              </h1>
            </Reveal>
            <Reveal variant="reveal" className="stagger-2">
              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
                Explore real kitchen remodels, bathroom renovations, painting, drywall, and commercial projects by Blackwater USA LLC.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 1: Intro / Trust Banner */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Completed Works</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  See the Quality We Bring to <span className="text-gradient-gold">Every Project</span>
                </h2>
                
                <div className="mt-6 space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  <p>
                    A picture is worth a thousand words — and at Blackwater USA LLC, our work speaks for itself. With 43 years of experience, we've transformed hundreds of homes and businesses across the Gulf Coast. Browse our gallery below to see real projects completed by Richard Burns and our team.
                  </p>
                  <p>
                    From stunning kitchen makeovers to full bathroom renovations, commercial painting, electrical upgrades, and insurance claim repairs — every project reflects our commitment to quality, craftsmanship, and attention to detail.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Quick Consultation Call Box */}
            <Reveal variant="reveal-right">
              <div className="w-full bg-navy text-white rounded-3xl p-8 shadow-[var(--shadow-card)] relative overflow-hidden border border-white/5 text-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl" />
                <h3 className="text-xl font-bold font-display text-white mb-3">Inspired by what you see?</h3>
                <p className="text-xs text-white/70 font-semibold mb-6">Let's discuss how we can transform your space next.</p>
                <a href="tel:+12282198338" className="btn-gold w-full justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (228) 219-8338
                </a>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 2: Gallery Tabs & Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label justify-center">Project Filter</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy font-display">
              Browse by <span className="text-gradient-gold">Project Type</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Use the tabs below to filter projects by category. Click any image to enlarge and view project details.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-5xl mx-auto">
            {filterTabs.map(tab => (
              <button
                key={tab.filter}
                onClick={() => setActiveTab(tab.filter)}
                className={`px-4.5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                  activeTab === tab.filter
                    ? "bg-gold border-gold text-navy-dark shadow-md"
                    : "bg-white border-border text-navy hover:border-gold hover:text-gold"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  onClick={() => setLightboxImg(item)}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all cursor-pointer aspect-[4/3]"
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-gold text-[10px] font-bold uppercase tracking-widest bg-gold/10 px-2 py-0.5 rounded border border-gold/10 w-fit mb-2">
                      {item.category === "Mechanical" ? "Plumbing & Electrical" : item.category}
                    </span>
                    <h4 className="text-white font-bold text-base sm:text-lg font-display">{item.title}</h4>
                    <p className="text-xs text-white/80 mt-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                      {item.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Section 4: Detailed Project Showcases */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label justify-center">Featured Work</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Featured Projects – <span className="text-gradient-gold">Before & After</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Here's a closer look at some of our favorite transformations. Click each project to view more photos and read the full story.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {featuredProjects.map((proj, idx) => (
              <Reveal key={proj.id} variant="reveal" className="border-b border-border/50 pb-16 last:border-0 last:pb-0">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
                  
                  {/* Before & After Images side-by-side */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Before Frame */}
                      <div className="relative rounded-2xl overflow-hidden border border-border aspect-[4/3] bg-secondary/25">
                        <img 
                          src={proj.beforeImg} 
                          alt="Before renovation" 
                          className="w-full h-full object-cover filter sepia hue-rotate-15 contrast-75 brightness-95" 
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-red text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-sm z-10">
                          Before Outdated
                        </div>
                      </div>
                      
                      {/* After Frame */}
                      <div className="relative rounded-2xl overflow-hidden border border-border aspect-[4/3] shadow-md">
                        <img 
                          src={proj.afterImg} 
                          alt="After renovation" 
                          className="w-full h-full object-cover" 
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-gold text-navy-dark text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-sm z-10">
                          After Completed
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details and Testimonial */}
                  <div className="flex flex-col justify-center h-full">
                    <span className="text-xs font-bold text-gold uppercase tracking-[0.15em]">
                      {proj.location}
                    </span>
                    <h3 className="text-2xl font-bold text-navy font-display mt-2">
                      Featured Project: {proj.title}
                    </h3>
                    
                    <div className="mt-4 space-y-3 font-semibold text-navy text-sm">
                      <p className="flex items-center gap-2">
                        <span className="text-muted-foreground font-normal">Project Type:</span>
                        {proj.type}
                      </p>
                      <p className="leading-relaxed">
                        <span className="text-muted-foreground font-normal block mb-1">Scope:</span>
                        <span className="text-navy/90 text-xs font-medium block bg-secondary/35 p-3 rounded-lg border border-border font-sans">
                          {proj.scope}
                        </span>
                      </p>
                    </div>

                    {/* Testimonial Quote */}
                    <div className="mt-6 border-l-2 border-gold pl-4 py-1.5 bg-gold/5 rounded-r-lg italic text-muted-foreground text-xs sm:text-sm font-medium">
                      “{proj.quote}”
                      <span className="block mt-2 font-bold text-navy not-italic text-xs">— {proj.client}, {proj.location.split(",")[0]}</span>
                    </div>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Section 5: Video Walkthroughs */}
      <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white relative w-full overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold-light)_0%,_transparent_60%)] opacity-5 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label text-gold before:bg-gold justify-center">Videos</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-tight font-display">
              Walkthrough Videos – <span className="text-gradient-gold">See Projects in Motion</span>
            </h2>
            <p className="mt-4 text-white/80 font-medium text-sm sm:text-base">
              Sometimes photos aren't enough. Watch our video walkthroughs to see the full scope of our work — from empty rooms to completed transformations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {videos.map((vid, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${idx+1}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-md group border border-white/10 bg-black aspect-video">
                  <img 
                    src={vid.img} 
                    alt={vid.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-4 z-10">
                    <span className="bg-navy-dark/80 backdrop-blur-sm border border-white/10 text-white text-[10px] font-semibold px-2 py-0.5 rounded w-fit">
                      {vid.duration}
                    </span>
                    <a href="tel:+12282198338" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                      <Play className="w-5 h-5 fill-current ml-0.5 text-navy-dark" />
                    </a>
                    <div className="bg-navy-dark/85 border border-white/5 backdrop-blur-sm p-3 rounded-lg text-xs leading-none">
                      <p className="font-bold text-white leading-snug">{vid.title}</p>
                      <p className="text-[10px] text-white/70 mt-1">{vid.location}, MS</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Section 6: Insurance Claim Repair Projects */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Restoration</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Insurance Claim Repairs – <span className="text-gradient-gold">Restoring Homes & Peace of Mind</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We specialize in restoring properties damaged by water, fire, storms, and more. Here are some projects where we managed the full insurance claim process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {insuranceProjects.map((item, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${idx+1}`}>
                <div className="group relative rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all cursor-pointer aspect-[4/3]" onClick={() => setLightboxImg({ id: 20 + idx, title: item.title, location: item.location, category: "Insurance", img: item.img })}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-transparent opacity-90 p-5 flex flex-col justify-end">
                    <h4 className="text-white font-bold text-sm sm:text-base font-display">{item.title}</h4>
                    <p className="text-[10px] text-white/80 mt-1 flex items-center gap-1 font-semibold uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                      {item.location}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Section 7: Behind the Scenes */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">On the Job</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Behind the Scenes – <span className="text-gradient-gold">Our Team at Work</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We take pride in our professionalism and craftsmanship. Here's a glimpse of our team on the job — from planning to execution.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {behindScenes.map((item, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${(idx % 3) + 1}`}>
                <div className="group relative rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md cursor-pointer aspect-square" onClick={() => setLightboxImg({ id: 50 + idx, title: item.title, location: "On Site", category: "Behind the Scenes", img: item.img })}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-center">
                    <p className="text-white text-xs font-semibold leading-relaxed">{item.title}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Section 8: Request Your Own Project Feature */}
      <section className="py-16 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal variant="reveal-scale">
            <div className="max-w-5xl mx-auto rounded-[32px] bg-gradient-cta p-8 sm:p-12 text-white relative overflow-hidden shadow-[var(--shadow-luxe)]">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              
              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-center relative z-10">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-gold/30 bg-gold/10 text-gold-light font-sans">
                    Transform Your Space
                  </span>
                  <h2 className="mt-4 text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white leading-tight font-display">
                    Want to See Your Project Here?
                  </h2>
                  <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xl font-medium font-sans">
                    Every project we complete is a source of pride. If you're ready to transform your home or business, we'd love to feature your project in our gallery next. Reach out for a free quote!
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
                  <button 
                    onClick={handleDownloadPortfolio}
                    className="btn-outline w-full text-center py-4 text-base font-bold border-white/20 hover:border-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Portfolio (PDF)
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 10: Gallery Trust Badges */}
      <section className="py-16 bg-navy text-white w-full border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-3xl">
          <span className="section-label text-gold before:bg-gold justify-center">Quality Assurance</span>
          <h2 className="mt-4 text-[26px] sm:text-[34px] font-bold text-white leading-tight font-display">
            Crafted with 43 Years of Experience
          </h2>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-6 text-xs text-white/80 font-bold uppercase tracking-wider">
            {[
              "Licensed, Insured & Bonded",
              "Attention to Detail",
              "On-Time, On-Budget",
              "Insurance Claim Experts",
              "Residential & Commercial"
            ].map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-gold/30 transition-all">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-gold" strokeWidth={3} />
                </div>
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button 
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-full flex items-center justify-center transition-all cursor-pointer z-50"
              onClick={() => setLightboxImg(null)}
            >
              <X className="w-5 h-5" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl bg-navy-dark border border-white/10 shadow-2xl flex flex-col justify-end"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={lightboxImg.img} 
                alt={lightboxImg.title} 
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
              <div className="p-5 bg-navy-dark text-white border-t border-white/10">
                <span className="text-[10px] text-gold uppercase font-bold tracking-widest leading-none bg-gold/10 px-2 py-0.5 rounded border border-gold/10 w-fit block mb-2">{lightboxImg.category}</span>
                <h4 className="font-bold text-lg sm:text-xl font-display">{lightboxImg.title}</h4>
                <p className="text-xs text-white/70 mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                  {lightboxImg.location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
