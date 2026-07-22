import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { PHONE, PHONE_LINK } from "./Constants";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    { icon: Phone, title: "Phone", value: PHONE, href: PHONE_LINK },
    { icon: Mail, title: "Email", value: "blackwaterusa.llc@gmail.com", href: "mailto:blackwaterusa.llc@gmail.com" },
    { icon: MapPin, title: "Address", value: "3600 Magnolia St, Moss Point, MS" },
    { icon: Clock, title: "Hours", value: "Available 24/7 — 35 Mile Service Area" }
  ];

  const inputCls = "w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all";

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-x-clip">
      {/* Background circle decoration */}
      <div className="absolute top-0 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl" style={{ background: "var(--gradient-cta)" }} />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">

          {/* Left Column: Contact Details */}
          <div className="lg:sticky lg:top-[120px] h-fit">
            <Reveal variant="reveal-left">
              <div>
                <span className="section-label">Get In Touch</span>

                <h2 className="mt-4 text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-navy leading-tight tracking-[-0.02em]">
                  Request Your <span className="text-red">Free Estimate</span> Today
                </h2>

                <p className="mt-5 text-muted-foreground text-sm leading-relaxed max-w-[480px]">
                  Tell us about your project, and our team will contact you promptly to discuss your needs and provide a free estimate.
                </p>

                <div className="mt-10 space-y-6">
                  {contactInfo.map(({ icon: Icon, title, value, href }) => {
                    const Container = href ? "a" : "div";
                    return (
                      <Container
                        key={title}
                        href={href}
                        className={`flex items-start gap-4 ${href ? 'group' : ''}`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-navy shadow-sm flex items-center justify-center shrink-0 border border-border">
                          <Icon className="w-5 h-5 text-gold" strokeWidth={2} />
                        </div>
                        <div className="pt-0.5">
                          <div className="text-xs uppercase tracking-widest text-red font-bold">{title}</div>
                          {href ? (
                            <div className="text-base font-semibold text-navy group-hover:text-gold transition-colors mt-1">
                              {value}
                            </div>
                          ) : (
                            <div className="text-base font-semibold text-navy mt-1">
                              {value}
                            </div>
                          )}
                        </div>
                      </Container>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Form */}
          <Reveal variant="reveal-right">
            <form
              onSubmit={async (e) => { 
                e.preventDefault(); 
                const formData = new FormData(e.currentTarget);
                formData.append("_cc", "blackwaterusa.llc@gmail.com");
                formData.append("_subject", "New Request - Blackwater USA");
                
                try {
                  await fetch("https://formsubmit.co/ajax/eva@stellrit.com", {
                    method: "POST",
                    body: formData,
                  });
                } catch (error) {
                  console.error(error);
                }
                setSubmitted(true); 
              }}
              className="bg-white rounded-3xl border border-border p-6 md:p-8 shadow-[var(--shadow-luxe)] relative"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-navy">Thank you!</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    We've received your request and will reach out within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-red font-bold text-sm hover:text-red-dark transition-colors"
                  >
                    Send another request &rarr;
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-navy">Full Name <span className="text-red">*</span></label>
                      <input name="name" required className={inputCls + " mt-1.5"} placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-navy">Phone Number <span className="text-red">*</span></label>
                      <input type="tel" name="phone" required className={inputCls + " mt-1.5"} placeholder="(228) 219-8338" />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label className="text-xs font-semibold uppercase tracking-wider text-navy">Email Address <span className="text-red">*</span></label>
                    <input type="email" name="email" required className={inputCls + " mt-1.5"} placeholder="john@example.com" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-navy">Service Needed</label>
                      <select name="service" className={inputCls + " mt-1.5 bg-white"}>
                        {["Kitchen Remodeling", "Bathroom Remodeling", "General Contracting", "Renovation", "Painting", "Drywall", "Plumbing", "Electrical", "Insurance Repair", "Other"].map(s => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-navy">Property Type</label>
                      <select name="propertyType" className={inputCls + " mt-1.5 bg-white"}>
                        {["Residential", "Commercial"].map(p => (
                          <option key={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="text-xs font-semibold uppercase tracking-wider text-navy">Project Details</label>
                    <textarea name="details" rows={4} className={inputCls + " mt-1.5 resize-none"} placeholder="Tell us about your project, square footage, timeline..." />
                  </div>

                  <div className="mt-4">
                    <label className="text-xs font-semibold uppercase tracking-wider text-navy">Preferred Contact Method</label>
                    <select name="contactMethod" className={inputCls + " mt-1.5 bg-white"}>
                      {["Phone", "Email", "Text Message"].map(c => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[13px] text-muted-foreground">
                      We respect your privacy.
                    </p>
                    <button
                      type="submit"
                      className="btn-primary w-full sm:w-auto text-[15px] font-bold py-3.5 px-8"
                    >
                      Submit Request →
                    </button>
                  </div>
                </>
              )}
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
