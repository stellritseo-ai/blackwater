import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Shield, 
  Award, 
  MessageSquare, 
  Calendar, 
  AlertCircle, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Star,
  Check,
  User,
  MessageSquareText,
  FileText,
  PhoneCall
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Blackwater USA LLC | Moss Point, MS General Contractor" },
      { name: "description", content: "Contact Blackwater USA LLC for 24/7 general contracting, remodeling, repairs & free estimates in Moss Point, MS and the Gulf Coast. Call (228) 219-8338." },
      { property: "og:title", content: "Contact Blackwater USA LLC | Moss Point, MS General Contractor" },
      { property: "og:description", content: "Contact Blackwater USA LLC for 24/7 general contracting, remodeling, repairs & free estimates in Moss Point, MS and the Gulf Coast. Call (228) 219-8338." },
      { property: "og:url", content: "https://blackwaterusallc.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Bathroom Remodeling",
    contactMethod: "Phone",
    dateTime: "",
    address: "",
    message: "",
    insuranceClaim: false,
    referredBy: "Google Search"
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formsubmit.co/ajax/eva@stellrit.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _cc: "blackwaterusa.llc@gmail.com",
          _subject: "New Contact Request - Blackwater USA",
        }),
      });
      
      const result = await response.json();
      console.log("FormSubmit response:", result);
      
      if (!response.ok) {
        console.error("FormSubmit returned an error:", result);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const serviceOptions = [
    "Bathroom Remodeling",
    "Kitchen Remodeling",
    "Painting",
    "Drywall",
    "Plumbing",
    "Electrical",
    "General Contracting",
    "Insurance Claim Repair",
    "Other"
  ];

  const referralOptions = [
    "Google Search",
    "Facebook",
    "Referral",
    "Walk-in",
    "Other"
  ];

  const cityColumns = [
    ["Moss Point", "Pascagoula", "Gautier", "Hurley", "Alabama"],
    ["Ocean Springs", "D'Iberville", "Escatawpa", "Grand Bay (AL)", "Louisiana"],
    ["Biloxi", "St. Martin", "Vancleave", "Theodore (AL)", "Mississippi"]
  ];

  const contactOptions = [
    { method: "Phone", details: "(228) 219-8338", desc: "Available 24/7. Speak directly with Richard or our team.", icon: PhoneCall },
    { method: "Email", details: "blackwaterusa.llc@gmail.com", desc: "We reply within hours.", icon: Mail },
    { method: "In-Person", details: "3600 Magnolia St, Moss Point, MS", desc: "Walk-ins welcome during business hours (on-call 24/7!).", icon: MapPin },
    { method: "Text", details: "(228) 219-8338", desc: "Send photos of your project for a quick assessment.", icon: MessageSquareText },
  ];

  const insuranceSteps = [
    "Assess damage and provide detailed estimates for your insurer",
    "Document everything with photos and reports",
    "Communicate directly with your claims adjuster",
    "Complete repairs to code and to your satisfaction",
    "Submit final documentation for claim closure"
  ];

  const faqs = [
    { q: "Do you charge for estimates?", a: "No — we provide free estimates 24/7. No obligation, no pressure." },
    { q: "How quickly can you start my project?", a: "We often start within 24–48 hours. For emergencies, we can be there the same night." },
    { q: "Do you work with insurance companies directly?", a: "Yes. We handle all communication with your insurer for damage-related claims." },
    { q: "What payment methods do you accept?", a: "We accept cash, check, credit/debit cards, and insurance payouts." },
    { q: "Are you licensed and insured?", a: "Absolutely. We're licensed, bonded, and fully insured for your protection." }
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
        "name": "Contact",
        "item": "https://blackwaterusallc.com/contact"
      }
    ]
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "GeneralContractor",
      "name": "Blackwater USA LLC",
      "telephone": "+1-228-219-8338",
      "email": "blackwaterusa.llc@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3600 Magnolia St",
        "addressLocality": "Moss Point",
        "addressRegion": "MS",
        "postalCode": "39563",
        "addressCountry": "US"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      <TopBar />
      <Nav />

      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden w-full isolate">
        {/* Background Image and Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Contact Blackwater USA LLC General Contractor in Moss Point MS" 
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
            <span className="text-gold font-medium">Contact</span>
          </nav>

          <div className="max-w-3xl">
            <Reveal variant="reveal" className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold font-sans">Get In Touch</span>
            </Reveal>
            <Reveal variant="reveal" className="stagger-1">
              <h1 className="text-[32px] sm:text-[44px] lg:text-[54px] font-bold text-white leading-tight tracking-[-0.03em] font-display">
                Contact Blackwater USA – <span className="text-gradient-gold">24/7 Contracting Services</span> in Moss Point, MS
              </h1>
            </Reveal>
            <Reveal variant="reveal" className="stagger-2">
              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
                Schedule a consultation, request an emergency repair, or get a free estimate. We're on call 24 hours a day, 7 days a week across South Mississippi.
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
                <span className="section-label">Availability</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  We're Here to Help – <span className="text-gradient-gold">Day or Night</span>
                </h2>
                
                <p className="mt-6 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  Whether you need a quick repair, a full renovation, or help navigating an insurance claim, Blackwater USA LLC is ready to serve you. We're available 24 hours a day, 7 days a week — because emergencies don't wait for business hours.
                </p>
                <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  Reach out to Richard Burns and our team for a free, no-obligation estimate. We respond quickly and always provide honest, transparent pricing.
                </p>
              </div>
            </Reveal>

            {/* Quick Contact Box */}
            <Reveal variant="reveal-right">
              <div className="w-full bg-navy text-white rounded-3xl p-8 shadow-[var(--shadow-card)] relative overflow-hidden border border-white/5 space-y-6">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl" />
                <h3 className="text-xl font-bold font-display text-white border-b border-white/10 pb-4">
                  Quick Connection
                </h3>
                
                <a href="tel:+12282198338" className="flex items-center gap-4 group text-white">
                  <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-navy-dark" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold block leading-none">Call Us 24/7</span>
                    <span className="text-white font-extrabold text-base sm:text-lg mt-1 block group-hover:text-gold transition-colors">(228) 219-8338</span>
                  </div>
                </a>

                <a href="mailto:blackwaterusa.llc@gmail.com" className="flex items-center gap-4 group text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold block leading-none">Email Us</span>
                    <span className="text-white/90 font-bold text-sm sm:text-base mt-1 block group-hover:text-gold transition-colors break-all">blackwaterusa.llc@gmail.com</span>
                  </div>
                </a>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 2: Contact Form & Map */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border" id="contact-form-section">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Form */}
            <Reveal variant="reveal-left">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-sm">
                <h3 className="text-2xl font-bold text-navy font-display">Schedule a Free Quote</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed mb-8 font-medium">
                  Fill out the form below, and we'll get back to you within hours — often sooner. Tell us about your project, and we'll provide a detailed estimate at no charge.
                </p>

                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-gold/10 border border-gold/30 rounded-2xl text-center space-y-4"
                  >
                    <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8 text-navy-dark animate-bounce" />
                    </div>
                    <h4 className="text-xl font-bold text-navy font-display">Estimate Request Received!</h4>
                    <p className="text-muted-foreground text-sm max-w-sm mx-auto font-medium">
                      Thank you, {formData.name}. Richard or a team member will review your request and reach out to you shortly.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="btn-primary py-2.5 px-6 text-sm"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          name="name" 
                          required 
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-medium"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Phone Number *</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          required 
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-medium"
                          placeholder="(228) 219-8338"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-medium"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Service Needed</label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-border rounded-xl bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-medium"
                        >
                          {serviceOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Preferred Contact Method</label>
                        <div className="flex gap-4 items-center h-[46px]">
                          {["Phone", "Email", "Text"].map(method => (
                            <label key={method} className="flex items-center gap-2 text-sm font-semibold text-navy cursor-pointer">
                              <input 
                                type="radio" 
                                name="contactMethod" 
                                value={method}
                                checked={formData.contactMethod === method}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-gold border-border focus:ring-gold"
                              />
                              {method}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Preferred Date & Time</label>
                        <input 
                          type="datetime-local" 
                          name="dateTime"
                          value={formData.dateTime}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-border rounded-xl bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Project Address (Optional)</label>
                        <input 
                          type="text" 
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-medium"
                          placeholder="123 Main St, Moss Point"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Message / Project Details</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        required
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-medium resize-none"
                        placeholder="Please describe your project, including size, scope, and any specific needs."
                      />
                    </div>

                    <div className="flex items-center gap-3 py-2 border-b border-border/60">
                      <input 
                        type="checkbox" 
                        id="insuranceClaim" 
                        name="insuranceClaim"
                        checked={formData.insuranceClaim}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 rounded border-border text-gold focus:ring-gold cursor-pointer"
                      />
                      <label htmlFor="insuranceClaim" className="text-xs sm:text-sm font-bold text-navy cursor-pointer select-none">
                        Yes, I need assistance with an insurance claim.
                      </label>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">How did you hear about us?</label>
                      <select 
                        name="referredBy"
                        value={formData.referredBy}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-xl bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-medium"
                      >
                        {referralOptions.map(ref => (
                          <option key={ref} value={ref}>{ref}</option>
                        ))}
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      className="btn-primary w-full py-4 text-base font-bold shadow-md hover:shadow-lg transition-all"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Get My Free Estimate
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Right Column: Office Location & Map */}
            <Reveal variant="reveal-right" className="lg:sticky lg:top-[120px]">
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
                  <h3 className="text-2xl font-bold text-navy font-display">Visit Our Office</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed mb-6 font-medium">
                    We're centrally located in Moss Point, MS, and serve a 35-mile radius. Stop by or give us a call — we're always here.
                  </p>

                  <div className="space-y-4 text-sm font-semibold text-navy">
                    <div className="flex items-start gap-3.5">
                      <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider leading-none">Address</span>
                        <p className="mt-1">3600 Magnolia St, Moss Point, MS 39563</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3.5">
                      <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider leading-none">Office Hours</span>
                        <p className="mt-1">24 Hours a Day • 7 Days a Week • Including Holidays</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="w-full h-[320px] rounded-3xl overflow-hidden border border-border bg-white shadow-sm">
                  <iframe
                    title="Blackwater USA LLC Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.5312428606917!2d-88.54456892433181!3d30.392666074750128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889be923561906ad%3A0x154ed2bdb0253958!2s3600%20Magnolia%20St%2C%20Moss%20Point%2C%20MS%2039563%2C%20USA!5e0!3m2!1sen!2snp!4v1781641775606!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 3: Service Area - Cities We Cover */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Regions Covered</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Serving a <span className="text-gradient-gold">35-Mile Radius</span> of Moss Point, MS
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We proudly serve homeowners and businesses across the Gulf Coast. If you're in any of these cities, we're just a call away — and we'll be there fast.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {cityColumns.map((col, cIdx) => (
              <div key={cIdx} className="space-y-4">
                {col.map((city, idx) => (
                  <Reveal key={city} variant="reveal-scale" className={`stagger-${idx+1}`}>
                    <div className="flex items-center gap-3 p-4 bg-secondary/35 border border-border rounded-2xl hover:border-gold hover:bg-gold/5 transition-all">
                      <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-gold" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-semibold text-navy">{city}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            ))}
          </div>

          <Reveal variant="reveal" className="mt-12 text-center text-xs sm:text-sm text-muted-foreground font-semibold max-w-2xl mx-auto bg-secondary/20 border border-border p-4 rounded-2xl">
            Don't see your city? Call us anyway — we may still be able to help. We're flexible and always willing to go the extra mile.
          </Reveal>
        </div>
      </section>

      {/* Section 4: Contact Options – Quick Reference */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Quick Reference</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Ways to <span className="text-gradient-gold">Reach Us</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Choose the method that works best for you. We're responsive across all channels.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((opt, idx) => (
              <Reveal key={opt.method} variant="reveal-scale" className={`stagger-${idx+1}`}>
                <div className="bg-white rounded-2xl border border-border p-6 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mb-4">
                      <opt.icon className="w-5 h-5 text-gold" />
                    </div>
                    <h4 className="font-bold text-navy text-base font-display">{opt.method}</h4>
                    <p className="text-sm font-bold text-navy mt-1.5 break-all">{opt.details}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2 font-medium">{opt.desc}</p>
                  </div>
                  
                  {opt.method === "Phone" && (
                    <a href="tel:+12282198338" className="flex items-center gap-1.5 text-xs font-bold text-gold uppercase mt-6 group">
                      Call Direct
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                  {opt.method === "Email" && (
                    <a href="mailto:blackwaterusa.llc@gmail.com" className="flex items-center gap-1.5 text-xs font-bold text-gold uppercase mt-6 group">
                      Send Email
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                  {opt.method === "In-Person" && (
                    <a href="#contact-form-section" className="flex items-center gap-1.5 text-xs font-bold text-gold uppercase mt-6 group">
                      Get Directions
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                  {opt.method === "Text" && (
                    <a href="sms:+12282198338" className="flex items-center gap-1.5 text-xs font-bold text-gold uppercase mt-6 group">
                      Send Text
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Emergency & After-Hours Support */}
      <section className="py-16 bg-red text-white w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--color-navy)_0%,_transparent_55%)] opacity-30 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <span className="section-label text-gold before:bg-gold">After-Hours Assistance</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[45px] font-bold text-white leading-tight font-display tracking-tight">
              24/7 Emergency Service – We're Always On
            </h2>
            <p className="mt-5 text-white/90 text-sm sm:text-base leading-relaxed font-medium">
              Plumbing leaks, electrical failures, storm damage — emergencies don't wait, and neither do we. Blackwater USA LLC offers round-the-clock support for urgent repairs. Call us anytime, and we'll dispatch a team immediately.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a 
                href="tel:+12282198338" 
                className="btn-gold flex items-center justify-center !bg-white !text-red hover:!bg-gold/10 hover:!text-white border border-white/10 w-full sm:w-auto py-4 px-8 text-base font-bold shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                Emergency Line: (228) 219-8338
              </a>
              <span className="text-white/60 text-xs sm:text-sm font-semibold self-center">
                For non-urgent inquiries: Use the form above or email us.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Insurance Claim Assistance */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Insurance Expert</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Need Help with an <span className="text-gradient-gold">Insurance Claim?</span>
                </h2>
                <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium mb-6">
                  We specialize in handling repairs related to insurance damage claims. From initial documentation to working directly with your adjuster, we manage the entire process so you don't have to.
                </p>
                <div className="bg-secondary/40 border border-border rounded-2xl p-5 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-navy font-semibold leading-relaxed">
                    Don't sign claims adjustments before talking to us. We make sure insurance adjusters properly cover framing, wiring, drywall, and structural components.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Steps Column */}
            <Reveal variant="reveal-right">
              <div className="bg-navy text-white rounded-3xl p-8 border border-white/5 shadow-md">
                <h3 className="text-xl font-bold font-display text-white mb-6 border-b border-white/10 pb-4">
                  What we do for you:
                </h3>
                <ol className="space-y-4">
                  {insuranceSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-sm font-semibold text-white/80">
                      <div className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center shrink-0 text-gold text-xs">
                        {idx + 1}
                      </div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 7: FAQs – Contact & Service */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Support FAQ</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Quick Questions? <span className="text-gradient-gold">We Have Answers.</span>
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

      {/* Section 8: Call to Action – Final Prompt */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal variant="reveal-scale">
            <div className="w-full rounded-[32px] bg-gradient-cta p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-[var(--shadow-luxe)]">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              
              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-20 items-center relative z-10">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-gold/30 bg-gold/10 text-gold-light">
                    Start Your Project
                  </span>
                  <h2 className="mt-4 text-[30px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-tight font-display">
                    Ready to Get Started?
                  </h2>
                  <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                    Don't wait — whether it's a remodel, repair, or emergency, Blackwater USA LLC is here to help. Contact us today and experience the difference that 43 years of expertise makes.
                  </p>
                  
                  {/* Contact details */}
                  <div className="mt-8 grid sm:grid-cols-2 gap-4">
                    <a href="tel:+12282198338" className="flex items-center gap-3 text-white hover:text-gold transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase text-white/50 font-bold tracking-wider leading-none">Call Now</p>
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
                        <p className="text-[10px] uppercase text-white/50 font-bold tracking-wider leading-none">Office</p>
                        <p className="font-semibold mt-0.5 text-sm sm:text-base">3600 Magnolia St, Moss Point, MS</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:w-full">
                  <a href="#contact-form-section" className="btn-gold w-full text-center py-4 text-base font-bold shadow-lg">
                    Get Your Free Estimate Now
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
