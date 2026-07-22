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
  Camera
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import whyImg from "@/assets/why.jpg";
import g1Img from "@/assets/g1.jpg";
import g2Img from "@/assets/g2.jpg";
import g3Img from "@/assets/g3.jpg";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews | Top-Rated Contractor in Moss Point, MS" },
      { name: "description", content: "Read 5-star reviews from satisfied customers of Blackwater USA LLC. Trusted across the Gulf Coast for remodeling, electrical, plumbing, and general contracting." },
      { property: "og:title", content: "Client Reviews | Blackwater USA LLC" },
      { property: "og:description", content: "Read 5-star reviews from satisfied customers of Blackwater USA LLC. Trusted across the Gulf Coast for remodeling, electrical, plumbing, and general contracting." },
      { property: "og:url", content: "https://blackwaterusallc.com/reviews" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const featuredReviews = [
    {
      title: "Kitchen Remodel & Insurance Claim",
      client: "Amanda T.",
      location: "Pascagoula, MS",
      project: "Full Kitchen Remodel after Water Damage",
      quote: "When a pipe burst in our kitchen, we were devastated. Our insurance company recommended Blackwater USA, and Richard came out the same night. He handled everything — from the initial assessment to dealing with the adjuster and coordinating the rebuild. The new kitchen is more beautiful than we ever imagined. Richard and his team were professional, clean, and respectful of our home. We can't thank them enough.",
    },
    {
      title: "Commercial Painting & Bathroom Renovation",
      client: "David R.",
      location: "Moss Point, MS",
      project: "Office Painting + Rental Property Bathroom Remodels",
      quote: "I manage several rental properties and a commercial office space. Finding one contractor who can do it all — painting, plumbing, electrical, and drywall — is rare. Blackwater USA handles everything. They painted our entire office building in three days and remodeled three bathrooms in our rental units within a week. Fair pricing, punctual, and the quality is top-notch. They're my go-to team now.",
    },
    {
      title: "Emergency Electrical & 24/7 Service",
      client: "Jessica L.",
      location: "Gautier, MS",
      project: "Emergency Breaker Panel Replacement",
      quote: "Our breaker panel caught fire at 10 PM on a Saturday night. We called Blackwater USA and Richard answered on the first ring. He was at our house within 45 minutes, assessed the damage, and had a temporary fix in place by midnight. He returned Monday morning with a new panel and had everything up to code by lunchtime. His 24/7 promise is real — and he even helped us file the insurance claim. Absolute lifesaver.",
    },
  ];

  const reviewHighlights = [
    { name: "Mark & Dana S.", location: "Ocean Springs", snippet: "Handled our hurricane damage and insurance claim flawlessly. Stress-free experience." },
    { name: "Patricia L.", location: "Pascagoula", snippet: "Kitchen remodel finished on time and under budget. Stunning work!" },
    { name: "James R.", location: "Biloxi", snippet: "My go-to property maintenance contractor. Fast, clean, and always fair." },
    { name: "Linda K.", location: "Moss Point", snippet: "Richard repainted our entire home exterior. Looks brand new. Highly recommend." },
    { name: "Tom & Beth W.", location: "D'Iberville", snippet: "Bathroom remodel exceeded our expectations. Attention to detail was incredible." },
    { name: "Steve M.", location: "Gautier", snippet: "Emergency plumbing repair at midnight. Fixed it fast and reasonably priced." },
  ];

  const valueProps = [
    { title: "43 Years Experience", desc: "No job surprises us. Over four decades in the trade means we have seen and solved it all." },
    { title: "Licensed, Insured & Bonded", desc: "Your property and your investment are protected at every phase of construction." },
    { title: "24/7 Availability", desc: "Emergencies don't wait, and neither do we. Day or night, we're ready to assist." },
    { title: "Insurance Claim Experts", desc: "We handle the paperwork and adjusters so you can focus on getting back to normal." },
    { title: "Free Estimates", desc: "Transparent pricing from the start. No surprises, no hidden fees." },
    { title: "Family-Owned Values", desc: "We treat your home like our own, because trust and reputation matter." },
    { title: "Residential & Commercial", desc: "Skilled crew equipped to deliver premium quality for both sectors." },
  ];

  const platforms = [
    { name: "Google Reviews", rating: "4.9 / 5.0 Stars", cta: "Leave Google Review" },
    { name: "Facebook Reviews", rating: "5.0 / 5.0 Stars", cta: "Leave Facebook Review" },
    { name: "Angi / HomeAdvisor", rating: "Top Rated", cta: "Leave Angi Review" },
    { name: "Better Business Bureau", rating: "A+ Accredited", cta: "View BBB Profile" },
  ];

  const badges = [
    { value: "4.9/5", label: "Average Rating", icon: Star },
    { value: "970+", label: "Happy Clients", icon: ThumbsUp },
    { value: "43", label: "Years Experience", icon: Award },
    { value: "100%", label: "Licensed & Insured", icon: Shield },
  ];

  const faqs = [
    {
      q: "Are these reviews verified?",
      a: "Yes — all reviews are from real clients across Moss Point, Pascagoula, Biloxi, Gautier, and surrounding areas. We take great pride in our authentic reputation.",
    },
    {
      q: "Do you have references I can contact?",
      a: "Absolutely. We are happy to provide recent client references upon request, detailing work similar to your planned project.",
    },
    {
      q: "What if I had an issue after my project?",
      a: "We stand behind our work. Contact us anytime — we'll make it right. That's our 43-year promise to our neighbors on the Gulf Coast.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col w-full">
      <TopBar />
      <Nav />

      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden w-full isolate">
        {/* Background Image and Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Blackwater USA contracting reviews" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/85 to-navy-dark/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_60%)]" />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <Reveal variant="reveal" className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold font-sans">Reviews & Trust</span>
            </Reveal>
            <Reveal variant="reveal" className="stagger-1">
              <h1 className="text-[34px] sm:text-[46px] lg:text-[56px] font-bold text-white leading-tight tracking-[-0.03em] font-display">
                What Our Clients Say – <span className="text-gradient-gold">Real Reviews</span> from the Gulf Coast
              </h1>
            </Reveal>
            <Reveal variant="reveal" className="stagger-2">
              <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
                Read authentic reviews from homeowners and businesses across Moss Point, Pascagoula, Biloxi, and beyond. Blackwater USA LLC is rated 4.9 stars for quality, reliability, and 24/7 service.
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
                <span className="section-label">Our Reputation</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Trusted by <span className="text-gradient-gold">970+ Happy Clients</span> Across Mississippi
                </h2>
                
                <p className="mt-6 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  At Blackwater USA LLC, our reputation is built one project at a time. With 43 years of experience, we've completed over 1,280 jobs — from kitchen remodels to emergency electrical repairs. But don't just take our word for it. Hear what our neighbors, clients, and commercial partners have to say about working with Richard Burns and our team.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-1.5 bg-gold/10 px-4 py-2.5 rounded-full border border-gold/30">
                    <span className="text-navy font-bold text-sm sm:text-base">⭐ Average Rating:</span>
                    <span className="text-navy font-extrabold text-sm sm:text-base bg-white/60 px-2.5 py-0.5 rounded-full shadow-sm">4.9 / 5.0</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 bg-secondary px-4 py-2.5 rounded-full border border-border">
                    <span className="text-navy font-bold text-sm sm:text-base">📋 Total Reviews:</span>
                    <span className="text-navy font-extrabold text-sm sm:text-base bg-white/80 px-2.5 py-0.5 rounded-full shadow-sm">970+ Customers</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Accolades Card */}
            <Reveal variant="reveal-right">
              <div className="w-full bg-navy text-white rounded-3xl p-8 shadow-[var(--shadow-card)] relative overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl" />
                <h3 className="text-xl font-bold font-display text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                  <Award className="w-5 h-5 text-gold" />
                  Accredited & Certified
                </h3>
                <ul className="space-y-4 text-sm font-medium text-white/80">
                  {["State Licensed General Contractor", "Fully Insured up to $2M & Bonded", "Insurance Claim Assessment Specialists", "43 Years of Continuous Operation"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 text-gold" strokeWidth={3} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 2: Featured Reviews */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label justify-center">Featured Testimonials</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Real Stories from <span className="text-gradient-gold">Real Customers</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredReviews.map((r, i) => (
              <Reveal key={i} variant="reveal-scale" className={`stagger-${i+1}`}>
                <div className="h-full bg-white rounded-2xl border border-border p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-gold" />
                  
                  <div>
                    {/* Stars and Title */}
                    <div className="flex items-center gap-1 text-gold mb-3">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4.5 h-4.5 fill-gold text-gold" />
                      ))}
                    </div>
                    
                    <h3 className="text-navy text-lg font-bold font-display leading-tight">{r.title}</h3>
                    
                    <span className="inline-block mt-2 px-2.5 py-1 rounded bg-secondary text-[11px] font-semibold text-muted-foreground">
                      Project: {r.project}
                    </span>
                    
                    <p className="mt-5 text-muted-foreground text-sm leading-relaxed italic font-medium">
                      “{r.quote}”
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                    <div>
                      <span className="font-bold text-navy text-sm sm:text-base block">{r.client}</span>
                      <span className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gold" />
                        {r.location}
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-gold" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Review Highlights */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Client Highlights</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              More Feedback from <span className="text-gradient-gold">the Gulf Coast</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewHighlights.map((rh, idx) => (
              <Reveal key={idx} variant="reveal-scale" className={`stagger-${(idx % 3) + 1}`}>
                <div className="p-6 rounded-2xl bg-secondary/25 border border-border flex flex-col justify-between">
                  <div>
                    <div className="flex gap-0.5 mb-3.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed italic font-medium">
                      “{rh.snippet}”
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-semibold">
                    <span className="text-navy">{rh.name}</span>
                    <span className="text-muted-foreground text-[10px]">{rh.location}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Video / Photo Placeholder */}
      <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold-light)_0%,_transparent_60%)] opacity-5 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label text-gold before:bg-gold">See Our Quality</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-tight font-display">
                  See Our Work — And Hear From <span className="text-gradient-gold">Our Clients</span>
                </h2>
                <p className="mt-6 text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                  We're proud to let our work speak for itself. Browse our gallery for before-and-after transformations, or check out video walkthroughs of our recent projects.
                </p>
                
                <div className="mt-8 flex gap-4">
                  <a href="/#gallery" className="btn-gold">
                    View Project Gallery
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Interactive Video Overlay Mockup */}
            <Reveal variant="reveal-right">
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[var(--shadow-luxe)] group border border-white/10 bg-black">
                <img 
                  src={whyImg} 
                  alt="Recent remodeling project walkthrough preview" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Visual Video Play Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                  <div className="flex justify-between items-start">
                    <span className="bg-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md animate-pulse">
                      Featured Project Video
                    </span>
                    <span className="bg-navy-dark/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/10">
                      Walkthrough (2:14)
                    </span>
                  </div>
                  
                  {/* Center Play Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <a href="tel:+12282198338" className="w-16 h-16 sm:w-20 sm:h-20 bg-gold hover:bg-gold-light text-navy-dark rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 group">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1" />
                    </a>
                  </div>

                  <div className="text-white bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                    <h4 className="font-bold text-sm sm:text-base leading-tight">Gulf Coast Home Renovation Walkthrough</h4>
                    <p className="text-xs text-white/80 mt-1">Completing high-end finishes, framing, electrical and plumbing work.</p>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 5: Why We Have 5-Star Reviews */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
            
            {/* Left Image Side */}
            <Reveal variant="reveal-left">
              <div className="relative max-w-[380px] mx-auto">
                <div className="absolute -inset-4 bg-navy/5 rounded-3xl -z-10 translate-x-3 translate-y-3" />
                <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)] border border-border">
                  <img 
                    src={g1Img} 
                    alt="Premium bathroom renovation" 
                    className="w-full aspect-[4/5] object-cover" 
                    loading="lazy" 
                  />
                </div>
              </div>
            </Reveal>

            {/* Right List Side */}
            <Reveal variant="reveal-right">
              <div>
                <span className="section-label">Our Service Standards</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  What Makes Blackwater USA LLC <span className="text-gradient-gold">Different?</span>
                </h2>
                
                <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium mb-8">
                  Our clients consistently praise us for the same reasons: our transparent operations, master level expertise, and quick, professional response.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {valueProps.map((p, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-border bg-secondary/25 hover:border-gold/30 hover:bg-gold/5 transition-all">
                      <div className="flex items-center gap-2 mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        <h4 className="font-bold text-navy text-xs sm:text-sm">{p.title}</h4>
                      </div>
                      <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed font-medium">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 6: Leave Us a Review */}
      <section className="py-16 sm:py-20 bg-secondary/35 w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Accolades Badges */}
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Leave Us a Review</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-navy leading-tight font-display">
                  Share Your Experience
                </h2>
                <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium mb-8">
                  We'd love to hear from you! If you've worked with us, please take a moment to share your feedback.
                </p>

                {/* Trust Badges Visual */}
                <div className="grid grid-cols-2 gap-4">
                  {badges.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                        <b.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-navy leading-none font-display">{b.value}</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1">{b.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right: Review Platforms links */}
            <Reveal variant="reveal-right">
              <div className="space-y-4">
                {platforms.map((p, idx) => (
                  <a 
                    key={idx}
                    href="https://www.bbb.org/us/ms/moss-point/profile/home-renovation/blackwater-usa-llc-0523-235906195" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 bg-white border border-border hover:border-gold rounded-2xl shadow-sm hover:shadow-md transition-all group"
                  >
                    <div>
                      <h4 className="font-bold text-navy text-sm sm:text-base group-hover:text-gold transition-colors">{p.name}</h4>
                      <p className="text-xs text-muted-foreground font-semibold mt-1">{p.rating}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-gold uppercase tracking-wider bg-gold/10 px-3 py-1.5 rounded-full border border-gold/10 group-hover:bg-gold group-hover:text-navy group-hover:border-gold transition-all">
                      {p.cta}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 7: Call to Action - Share Your Experience */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal variant="reveal-scale">
            <div className="w-full rounded-[32px] bg-gradient-cta p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-[var(--shadow-luxe)]">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              
              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-20 items-center relative z-10">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-gold/30 bg-gold/10 text-gold-light">
                    Share Your Feedback
                  </span>
                  <h2 className="mt-4 text-[30px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-tight font-display">
                    Had a Great Experience? Let Us Know!
                  </h2>
                  <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                    Your feedback helps us improve and helps other families make informed decisions. Share your review, or send us photos of your completed projects to showcase.
                  </p>
                  
                  {/* Contact Info details */}
                  <div className="mt-8 grid sm:grid-cols-2 gap-4">
                    <a href="tel:+12282198338" className="flex items-center gap-3 text-white hover:text-gold transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase text-white/50 font-bold tracking-wider leading-none">Call Us</p>
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
                  <a 
                    href="https://www.bbb.org/us/ms/moss-point/profile/home-renovation/blackwater-usa-llc-0523-235906195" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-gold w-full text-center py-4 text-base font-bold shadow-lg"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Write a Review
                  </a>
                  <a 
                    href="mailto:blackwaterusa.llc@gmail.com?subject=Project%20Photo%20Share"
                    className="btn-outline w-full text-center py-4 text-base font-bold border-white/20 hover:border-white"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Share Project Photos
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center font-sans">FAQ</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Questions About <span className="text-gradient-gold">Our Reputation?</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} variant="reveal" className={`stagger-${idx+1}`}>
                <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 font-bold text-navy text-sm sm:text-base text-left hover:bg-gold/5 focus:outline-none transition-colors duration-300"
                  >
                    <span>{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 ml-4 group-hover:bg-gold/20 transition-all duration-300">
                      {openFaq === idx ? (
                        <ChevronUp className="w-4 h-4 text-navy" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-navy" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-border/40 text-muted-foreground text-xs sm:text-sm leading-relaxed font-medium">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
