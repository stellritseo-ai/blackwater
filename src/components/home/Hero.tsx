import React from "react";
import heroImg from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero.mp4";
import { PHONE, PHONE_LINK } from "./Constants";
import { PhoneIcon, CheckIcon } from "./Icons";

export function Hero() {
  return (
    <section className="relative -mt-20 pt-20 min-h-[100svh] flex items-center overflow-hidden isolate">
      <div className="absolute inset-0 z-0">
        <video
          src={heroVideo}
          poster={heroImg}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(11,29,52,0.92) 0%, rgba(11,29,52,0.72) 45%, rgba(178,34,34,0.35) 100%)" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.25),transparent_55%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 grid lg:grid-cols-12 gap-10 items-center w-full">
        <div className="lg:col-span-7 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-gold/40 bg-white/5 backdrop-blur-md text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Family-Owned • 43 Years of Experience
          </div>
          <h1 className="mt-5 sm:mt-6 font-bold text-[28px] sm:text-[34px] md:text-[40px] leading-[1.2]">
            Trusted General Contractors Delivering <span className="text-gradient-gold">Quality Craftsmanship</span> Since Day One
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl leading-relaxed">
            Blackwater USA LLC proudly provides residential and commercial remodeling and construction
            services throughout the Moss Point area. Licensed, insured, and bonded — with free estimates 24/7
            and expert assistance with insurance damage repairs.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <a href="#contact" className="btn-primary text-center">Get Your Free Estimate →</a>
            <a href={PHONE_LINK} className="btn-outline text-center"><PhoneIcon className="w-4 h-4" /> Call Now: {PHONE}</a>
          </div>
          <div className="mt-6 sm:mt-10 flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 text-xs sm:text-sm text-white/85">
            {["Licensed", "Insured", "Bonded", "Insurance Claim Assistance", "Available 24/7"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 sm:gap-2"><CheckIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />{t}</span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[420px] hidden lg:block">
          <FloatingCard className="absolute top-0 left-0 w-64 animate-float" icon="🍳" title="Kitchen Remodeling" subtitle="From $18k" tone="white" />
          <FloatingCard className="absolute top-24 right-0 w-60 animate-float-delayed" icon="🛁" title="Bathroom Renovation" subtitle="Spa-grade finish" tone="navy" />
          <FloatingCard className="absolute bottom-12 left-8 w-60 animate-float-delayed" icon="🎨" title="Interior Painting" subtitle="Premium coatings" tone="gold" />
          <FloatingCard className="absolute bottom-0 right-4 w-64 animate-float" icon="🚨" title="Emergency Repairs" subtitle="24/7 response" tone="white" />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="w-px h-8 bg-white/40" />
      </div>
    </section>
  );
}

function FloatingCard({ className, icon, title, subtitle, tone }: { className?: string; icon: string; title: string; subtitle: string; tone: "white" | "navy" | "gold" }) {
  const styles = {
    white: "bg-white/90 text-navy-dark border-white/60",
    navy: "bg-navy/90 text-white border-white/10",
    gold: "text-navy-dark border-gold/60",
  }[tone];
  const goldStyle = tone === "gold" ? { background: "var(--gradient-gold)" } : undefined;
  return (
    <div className={`${className} ${styles} backdrop-blur-xl rounded-2xl border p-4 shadow-2xl`} style={goldStyle}>
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-white/30 grid place-items-center text-xl">{icon}</div>
        <div>
          <div className="font-semibold text-sm">{title}</div>
          <div className="text-xs opacity-75">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}
