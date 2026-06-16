import React, { useEffect, useRef, useState } from "react";
import { Award, CheckCircle, Users, Compass } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  const items = [
    { n: 43, suffix: "+", l: "Years of Experience", icon: Award },
    { n: 1200, suffix: "+", l: "Completed Projects", icon: CheckCircle },
    { n: 950, suffix: "+", l: "Happy Clients", icon: Users },
    { n: 35, suffix: "+", l: "Miles Service Area", icon: Compass },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary/40 relative overflow-hidden">
      {/* Subtle background glow decorator */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-5 blur-3xl pointer-events-none" style={{ background: "var(--gradient-gold)" }} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header Block */}
        <Reveal variant="reveal" className="text-center max-w-3xl mx-auto">
          <span className="section-label">By The Numbers</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-navy leading-tight tracking-[-0.02em]">
            Numbers That Reflect <span className="text-red">Our Commitment</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-sm md:text-base leading-relaxed max-w-[600px] mx-auto">
            Over the decades, we've built a solid reputation for excellence, reliability, and precision on the Gulf Coast. Here are the milestones that define our journey.
          </p>
        </Reveal>

        {/* Stats Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <Reveal key={it.l} variant="reveal-scale" className={`stagger-${idx + 1} h-full`}>
              <Counter target={it.n} suffix={it.suffix} label={it.l} Icon={it.icon} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function Counter({ target, suffix, label, Icon }: { target: number; suffix: string; label: string; Icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver((ents) => {
      ents.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1800;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3); // Cubic ease-out
            setVal(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });

    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="relative p-10 rounded-[32px] bg-white border border-border shadow-[var(--shadow-card)] text-center overflow-hidden group hover:shadow-[var(--shadow-gold)] hover:-translate-y-2 transition-all duration-500 cursor-default h-full flex flex-col justify-center items-center"
    >
      {/* Subtle top indicator line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 style-top-line" style={{ background: "var(--gradient-gold)" }} />

      {/* Hover background gradient highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Styled Icon Badge */}
      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 border border-gold/20 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300 relative z-10">
        <Icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
      </div>

      {/* Counter Number */}
      <div className="font-display text-5xl md:text-6xl font-extrabold text-navy tracking-tight leading-none relative z-10 select-none">
        {val.toLocaleString()}
        <span className="text-gold group-hover:text-red transition-colors duration-300 ml-0.5">{suffix}</span>
      </div>

      {/* Stat Label */}
      <div className="mt-4 text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-navy transition-colors duration-300 relative z-10">
        {label}
      </div>
    </div>
  );
}
