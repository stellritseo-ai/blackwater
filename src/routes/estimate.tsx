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
  Upload,
  Sparkles,
  PhoneCall,
  User,
  ShieldCheck,
  AlertCircle
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/estimate")({
  head: () => ({
    meta: [
      { title: "Get a Free Estimate | General Contractors in Moss Point, MS | Blackwater USA LLC" },
      { name: "description", content: "Get a free 24/7 estimate from Blackwater USA LLC. Expert remodeling, plumbing, electrical & insurance repair across the Gulf Coast. Serving MS, AL, and LA." },
      { property: "og:title", content: "Get a Free Estimate | Blackwater USA LLC" },
      { property: "og:description", content: "Get a free 24/7 estimate from Blackwater USA LLC. Expert remodeling, plumbing, electrical & insurance repair across the Gulf Coast. Serving MS, AL, and LA." },
      { property: "og:url", content: "https://blackwaterusallc.com/estimate" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/estimate" }],
  }),
  component: EstimatePage,
});

function EstimatePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyAddress: "",
    service: "Bathroom Remodeling",
    projectType: "Residential",
    isEmergency: "No",
    insuranceClaim: false,
    contactMethod: "Phone",
    estimateType: "In-Person Visit",
    dateTime: "",
    referredBy: "Google Search",
    message: ""
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...filesArray].slice(0, 5));
    }
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
          _subject: "New Estimate Request - Blackwater USA",
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

  const estimateTypes = [
    { type: "In-Person Estimate", desc: "We visit your home or business to assess the project in detail. Ideal for large remodels and structural work." },
    { type: "Virtual Estimate", desc: "Schedule a video call. We walk you through an assessment remotely — great for quick quotes and smaller projects." },
    { type: "Phone Estimate", desc: "For straightforward repairs or urgent issues, we can provide a rough estimate over the phone." },
    { type: "Insurance Claim Estimate", desc: "Specialized assessment for damage claims. We document everything and work directly with your adjuster." }
  ];

  const cityColumns = [
    ["Moss Point", "Pascagoula", "Gautier", "Hurley", "Alabama"],
    ["Ocean Springs", "D'Iberville", "Escatawpa", "Grand Bay (AL)", "Louisiana"],
    ["Biloxi", "St. Martin", "Vancleave", "Theodore (AL)", "Mississippi"]
  ];

  const faqs = [
    { q: "Is the estimate really free?", a: "Absolutely. There's no charge and no obligation to hire us. We want you to feel confident in your decision." },
    { q: "How long does it take to get an estimate?", a: "For simple repairs, we can often provide a quote within hours. For larger projects, we aim to deliver a detailed estimate within 24–48 hours after assessment." },
    { q: "Do you offer virtual estimates?", a: "Yes! We can conduct video walkthroughs via Zoom, FaceTime, or Google Meet." },
    { q: "Do you work with insurance companies?", a: "Yes. We handle all communication with your insurer and provide estimates specifically for claims." },
    { q: "Can I get an estimate for a small job?", a: "Of course. No job is too small — we're happy to quote anything from a single faucet repair to a full commercial renovation." },
    { q: "What if I decide not to hire you?", a: "No problem at all. The estimate is yours to keep, and we're always here if you change your mind." }
  ];

  const steps = [
    { title: "Step 1: We Connect", desc: "Within 24 hours (often sooner), we'll contact you to confirm your project details and schedule an assessment." },
    { title: "Step 2: Assessment", desc: "We'll visit your property or conduct a virtual walkthrough to evaluate the scope of work, take measurements, and note any specific needs." },
    { title: "Step 3: Written Estimate", desc: "You'll receive a detailed, written estimate with a clear breakdown of labor, materials, timeline, and total cost — completely free." },
    { title: "Step 4: Review & Decision", desc: "Review the estimate at your own pace. No pressure, no pushy sales tactics. We're here to answer any questions." },
    { title: "Step 5: Let's Get Started!", desc: "If you're happy with the estimate, we'll schedule the work and get started. If you need insurance claim assistance, we'll handle that too." }
  ];

  const values = [
    "43 Years of Experience – We've seen it all, so our estimates are accurate and realistic.",
    "Licensed, Insured & Bonded – Your property and investment are protected.",
    "No Hidden Fees – What we quote is what you pay. No surprises.",
    "Free 24/7 Estimates – Day or night, we're ready to help.",
    "Insurance Claim Experts – We estimate and manage repairs covered by insurance.",
    "Residential & Commercial – We handle projects of all sizes.",
    "Family-Owned Values – Honest, fair, and transparent."
  ];

  const insuranceGains = [
    "Detailed damage assessment and documentation",
    "Before-and-after photos for your claim file",
    "Comprehensive repair estimates aligned with insurance guidelines",
    "Direct communication with your claims adjuster",
    "Full repair management from start to finish"
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
            alt="Blackwater USA estimating" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/85 to-navy-dark/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_60%)]" />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <Reveal variant="reveal" className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold font-sans">Free Estimate</span>
            </Reveal>
            <Reveal variant="reveal" className="stagger-1">
              <h1 className="text-[34px] sm:text-[46px] lg:text-[56px] font-bold text-white leading-tight tracking-[-0.03em] font-display">
                Free Estimates 24/7 – <span className="text-gradient-gold">No Obligation</span>, No Pressure
              </h1>
            </Reveal>
            <Reveal variant="reveal" className="stagger-2">
              <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
                Get a free, no-obligation estimate from Blackwater USA LLC. Licensed, insured general contractor serving Moss Point, MS, and 35 miles around. Call (228) 219-8338 or fill out our form.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 1: Intro / Trust Banner */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Honest Pricing</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Transparent Quotes. <span className="text-gradient-gold">Zero Surprises.</span>
                </h2>
                
                <p className="mt-6 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  At Blackwater USA LLC, we believe in complete transparency from the very first conversation. That's why we offer free estimates 24 hours a day, 7 days a week — with no hidden fees, no pressure, and no obligation.
                </p>
                <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  Whether you're planning a kitchen remodel, need emergency electrical repairs, or want to discuss an insurance claim, Richard Burns and our team will assess your project, answer your questions, and provide a detailed, written estimate at no cost to you.
                </p>
              </div>
            </Reveal>

            {/* Bullets Card */}
            <Reveal variant="reveal-right">
              <div className="w-full bg-navy text-white rounded-3xl p-8 shadow-[var(--shadow-card)] relative overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl" />
                <h3 className="text-xl font-bold font-display text-white mb-6 border-b border-white/10 pb-4">
                  What you get with every estimate:
                </h3>
                <ul className="space-y-4 text-sm font-medium text-white/80">
                  {[
                    "On-site or virtual assessment (your choice)",
                    "Detailed breakdown of labor and materials",
                    "Clear timeline and project scope",
                    "Honest recommendations — no upsells",
                    "Insurance claim assistance if applicable"
                  ].map((item, i) => (
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

      {/* Section 2: Estimate Request Form */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border" id="estimate-form-section">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto bg-white rounded-[32px] p-8 sm:p-12 border border-border shadow-md">
            
            <div className="text-center mb-8">
              <span className="section-label justify-center">Estimate Form</span>
              <h2 className="mt-4 text-3xl font-bold text-navy font-display">Request Your Free Estimate Now</h2>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed font-medium">
                Fill out the form below, and we'll get back to you within hours — often sooner. Tell us about your project, and we'll provide a detailed, no-obligation estimate.
              </p>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-gold/10 border border-gold/30 rounded-2xl text-center space-y-4"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9 text-navy-dark animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-navy font-display">Estimate Request Sent!</h3>
                <p className="text-muted-foreground text-sm max-w-sm mx-auto font-medium">
                  Thanks, {formData.name}. Richard Burns and our estimating team will reach out to schedule your preferred estimate type soon.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn-primary py-3 px-8 text-sm"
                >
                  Submit New Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-medium animate-transition"
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
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-medium animate-transition"
                      placeholder="(228) 219-8338"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-medium animate-transition"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Property Address (Optional)</label>
                    <input 
                      type="text" 
                      name="propertyAddress" 
                      value={formData.propertyAddress}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-medium animate-transition"
                      placeholder="3600 Magnolia St, Moss Point, MS"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Service Needed</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-medium animate-transition"
                    >
                      {serviceOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Project Type</label>
                    <div className="flex gap-4 items-center h-[46px]">
                      {["Residential", "Commercial", "Both"].map(type => (
                        <label key={type} className="flex items-center gap-2 text-sm font-semibold text-navy cursor-pointer">
                          <input 
                            type="radio" 
                            name="projectType" 
                            value={type}
                            checked={formData.projectType === type}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-gold border-border focus:ring-gold"
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Is this an emergency?</label>
                    <div className="flex gap-6 items-center h-[46px]">
                      {["Yes", "No"].map(option => (
                        <label key={option} className="flex items-center gap-2 text-sm font-semibold text-navy cursor-pointer">
                          <input 
                            type="radio" 
                            name="isEmergency" 
                            value={option}
                            checked={formData.isEmergency === option}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-gold border-border focus:ring-gold"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-5">
                    <input 
                      type="checkbox" 
                      id="insuranceClaim" 
                      name="insuranceClaim"
                      checked={formData.insuranceClaim}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 rounded border-border text-gold focus:ring-gold cursor-pointer"
                    />
                    <label htmlFor="insuranceClaim" className="text-xs sm:text-sm font-bold text-navy cursor-pointer select-none">
                      Are you filing an insurance claim?
                    </label>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
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
                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Preferred Estimate Type</label>
                    <select 
                      name="estimateType"
                      value={formData.estimateType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-medium animate-transition"
                    >
                      {["In-Person Visit", "Virtual (Video Call)", "Phone Consultation"].map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
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
                      className="w-full px-4 py-3 border border-border rounded-xl bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-medium animate-transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">How did you hear about us?</label>
                    <select 
                      name="referredBy"
                      value={formData.referredBy}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-medium animate-transition"
                    >
                      {referralOptions.map(ref => (
                        <option key={ref} value={ref}>{ref}</option>
                      ))}
                    </select>
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
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-medium resize-none animate-transition"
                    placeholder="Describe your project — size, scope, materials, urgency, etc."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Upload Photos (Optional - Max 5)</label>
                  <div className="border-2 border-dashed border-border hover:border-gold rounded-2xl p-6 text-center cursor-pointer transition-all">
                    <input 
                      type="file" 
                      multiple 
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden" 
                      id="photos-upload"
                    />
                    <label htmlFor="photos-upload" className="cursor-pointer flex flex-col items-center gap-2 text-sm text-muted-foreground font-semibold">
                      <Upload className="w-8 h-8 text-gold animate-bounce" />
                      <span>Click to upload project photos</span>
                      <span className="text-xs text-muted-foreground/60">Upload up to 5 images of the area/project</span>
                    </label>
                  </div>
                  {uploadedFiles.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {uploadedFiles.map((f, i) => (
                        <span key={i} className="text-xs bg-secondary/80 text-navy font-semibold px-3 py-1 rounded-full border border-border flex items-center gap-2">
                          <Camera className="w-3.5 h-3.5 text-gold" />
                          {f.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="btn-primary w-full py-4 text-base font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  📋 GET MY FREE ESTIMATE
                </button>
                
                <p className="text-center text-xs text-muted-foreground/75 font-semibold flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  🔒 Your information is secure and will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Section 3: Process Works */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label justify-center">Process</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Here's How Our <span className="text-gradient-gold">Process Works</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Getting an estimate from Blackwater USA LLC is simple and stress-free. Here's what happens after you submit:
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {steps.map((st, i) => (
              <Reveal key={i} variant="reveal-scale" className={`stagger-${i+1}`}>
                <div className="h-full bg-secondary/25 border border-border rounded-2xl p-6 hover:border-gold hover:bg-gold/5 transition-all flex flex-col items-start relative">
                  <span className="w-8 h-8 rounded-full bg-gold/15 text-gold flex items-center justify-center text-xs font-bold mb-4">
                    0{i+1}
                  </span>
                  <h4 className="font-bold text-navy text-sm sm:text-base leading-tight font-display">{st.title}</h4>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-medium">
                    {st.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white relative w-full overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--color-gold-light)_0%,_transparent_40%)] opacity-5 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label text-gold before:bg-gold">Estimate Trust</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-tight font-display">
                  Why Blackwater USA LLC Estimates Are <span className="text-gradient-gold">Different</span>
                </h2>
                <p className="mt-6 text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                  We don't just give you a random number — we give you peace of mind and realistic timelines.
                </p>
                <div className="mt-8">
                  <a href="#estimate-form-section" className="btn-gold">
                    Request Quote Now
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal variant="reveal-right">
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-xs text-white/95 font-semibold leading-relaxed">{v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 5: Estimate Types */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Flexibility</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              We Adapt to <span className="text-gradient-gold">Your Needs</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              Every project is unique, so we offer flexible estimate options:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {estimateTypes.map((et, i) => (
              <Reveal key={i} variant="reveal-scale" className={`stagger-${i+1}`}>
                <div className="h-full bg-secondary/25 border border-border rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <h4 className="font-bold text-navy text-sm sm:text-base font-display">{et.type}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2.5 font-medium">{et.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Service Area */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Regions</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              We Come to You – <span className="text-gradient-gold">Free of Charge</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-medium text-sm sm:text-base">
              We provide free on-site estimates across a 35-mile radius of Moss Point, MS. If you're in any of these cities, we'll come to you at no cost:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {cityColumns.map((col, colIdx) => (
              <div key={colIdx} className="space-y-4">
                {col.map((city, idx) => (
                  <Reveal key={city} variant="reveal-scale" className={`stagger-${idx+1}`}>
                    <div className="flex items-center gap-3 p-4 bg-white border border-border rounded-2xl hover:border-gold hover:bg-gold/5 transition-all">
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

          <Reveal variant="reveal" className="mt-12 text-center text-xs sm:text-sm text-muted-foreground font-semibold max-w-2xl mx-auto bg-white border border-border p-4 rounded-2xl">
            Outside this radius? Call us anyway — we may still be able to accommodate you.
          </Reveal>
        </div>
      </section>

      {/* Section 7: Insurance Claim Estimates */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Insurance Claims</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Estimate Assistance for <span className="text-gradient-gold">Insurance Claims</span>
                </h2>
                <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium mb-6">
                  If your project involves an insurance claim, we offer specialized estimating services to help you get the coverage you deserve. We'll communicate directly with adjusters to verify damage details are documented correctly.
                </p>
                
                <div className="bg-gold/5 border border-gold/30 rounded-2xl p-5 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-navy font-bold leading-relaxed">
                    Need claim help? Check the insurance box in the estimate form above or call us directly.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* What we provide for claims list */}
            <Reveal variant="reveal-right">
              <div className="bg-navy text-white rounded-3xl p-8 border border-white/5 shadow-md">
                <h3 className="text-xl font-bold font-display text-white mb-6 border-b border-white/10 pb-4">
                  What we provide:
                </h3>
                <ul className="space-y-4 text-sm font-semibold text-white/80">
                  {insuranceGains.map((gain, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 text-gold" strokeWidth={3} />
                      </div>
                      <span>{gain}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 8: FAQs – Estimates */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/35 w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label justify-center">Estimating FAQ</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
              Frequently Asked Questions <span className="text-gradient-gold">About Our Estimates</span>
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

      {/* Section 9: Additional Contact Options */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Connect Directly</span>
                <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-navy leading-tight font-display">
                  Prefer to <span className="text-gradient-gold">Call or Visit?</span>
                </h2>
                <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium mb-6">
                  We know some clients prefer a more personal touch. Here's how else you can reach us for estimates:
                </p>

                <div className="space-y-4 text-sm font-semibold text-navy">
                  <div className="flex items-center gap-3">
                    <PhoneCall className="w-5 h-5 text-gold shrink-0" />
                    <span>Call 24/7: (228) 219-8338</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gold shrink-0" />
                    <span>Email: blackwaterusa.llc@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gold shrink-0" />
                    <span>Visit: 3600 Magnolia St, Moss Point, MS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold shrink-0" />
                    <span>Hours: Always Open (24/7, including holidays)</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Secondary CTA Button Column */}
            <Reveal variant="reveal-right">
              <div className="flex flex-col gap-4">
                <a href="tel:+12282198338" className="btn-primary w-full text-center py-4 text-base font-bold shadow-lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now for Free Estimate
                </a>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Section 10: Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal variant="reveal-scale">
            <div className="w-full rounded-[32px] bg-gradient-cta p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-[var(--shadow-luxe)]">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              
              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-20 items-center relative z-10">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-gold/30 bg-gold/10 text-gold-light">
                    Start Your Estimate
                  </span>
                  <h2 className="mt-4 text-[30px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-tight font-display">
                    Your Project Starts with a Free Estimate
                  </h2>
                  <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                    Don't wait — whether you're planning a dream renovation or need emergency repairs, Blackwater USA LLC is here to help. Contact us today for your free, no-obligation estimate. Your estimate is waiting. Let's get started.
                  </p>
                  
                  {/* Contact details */}
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
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:w-full">
                  <a href="#estimate-form-section" className="btn-gold w-full text-center py-4 text-base font-bold shadow-lg">
                    Request Your Estimate Above
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
