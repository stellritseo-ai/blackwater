import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const gallery = [
  { src: g1, cat: "Kitchen", alt: "Luxury kitchen remodel", span: "row-span-2" },
  { src: g2, cat: "Bathroom", alt: "Modern bathroom renovation", span: "" },
  { src: g3, cat: "Painting", alt: "Interior painting project", span: "" },
  { src: g5, cat: "Commercial", alt: "Commercial renovation", span: "row-span-2" },
  { src: g4, cat: "Drywall", alt: "Drywall finishing work", span: "" },
  { src: g6, cat: "Residential", alt: "Residential remodeling", span: "" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const cats = ["Kitchen Remodeling", "Bathroom Remodeling", "Renovations", "Painting Projects", "Drywall Work", "Residential Projects", "Commercial Projects", "Insurance Repairs"];
  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-label">Our Work</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-navy">Explore Our <span className="text-gradient-gold">Recent Projects</span></h2>
          <p className="mt-5 text-muted-foreground">Browse our portfolio of completed projects showcasing the quality, precision, and dedication that define Blackwater USA LLC.</p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <span key={c} className="px-4 py-2 rounded-full bg-white border border-border text-xs font-semibold text-navy hover:bg-navy hover:text-white hover:border-navy transition cursor-pointer">{c}</span>
          ))}
        </div>
        <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] gap-3 sm:gap-4">
          {gallery.map((g, i) => (
            <button key={i} onClick={() => setOpen(i)} className={`relative ${g.span} group overflow-hidden rounded-2xl shadow-[var(--shadow-card)] cursor-zoom-in`}>
              <motion.img 
                layoutId={`gallery-img-${i}`}
                src={g.src} 
                alt={g.alt} 
                loading="lazy" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent opacity-70 group-hover:opacity-90 transition pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-4 text-left text-white pointer-events-none">
                <div className="text-[10px] tracking-widest uppercase text-gold font-bold">{g.cat}</div>
                <div className="font-display font-semibold text-lg">{g.alt}</div>
              </div>
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 grid place-items-center opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-navy"><path d="M7 17L17 7M17 7H8M17 7v9" /></svg>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {open !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-dark/95 backdrop-blur-md grid place-items-center p-6" 
            onClick={() => setOpen(null)}
          >
            <button 
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center z-50 text-xl font-bold transition-all hover:scale-110" 
              onClick={(e) => { e.stopPropagation(); setOpen(null); }}
            >
              ✕
            </button>
            <div className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl shadow-2xl bg-navy-dark flex flex-col" onClick={(e) => e.stopPropagation()}>
              <motion.img 
                layoutId={`gallery-img-${open}`}
                src={gallery[open].src} 
                alt={gallery[open].alt} 
                className="max-h-[70vh] max-w-[90vw] object-contain rounded-t-2xl" 
              />
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.15 }}
                className="p-5 bg-navy border-t border-white/10 text-center text-white"
              >
                <span className="text-xs uppercase tracking-widest text-gold font-bold">{gallery[open].cat}</span>
                <h4 className="font-display font-semibold text-lg mt-1">{gallery[open].alt}</h4>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
