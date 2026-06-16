import React from "react";
import {
  HardHat,
  Bath,
  Utensils,
  Wrench,
  Paintbrush,
  Layers,
  ShowerHead,
  Zap,
  Home,
  Building2,
  ArrowRight
} from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Reveal } from "@/components/ui/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

import sContracting from "@/assets/s_contracting.png";
import sBathroom from "@/assets/s_bathroom.png";
import sKitchen from "@/assets/s_kitchen.png";
import sRenovation from "@/assets/s_renovation.png";
import sPainting from "@/assets/s_painting.png";
import sDrywall from "@/assets/s_drywall.png";
import sPlumbing from "@/assets/s_plumbing.png";
import sElectrical from "@/assets/s_electrical.png";
import sResidential from "@/assets/s_residential.png";
import sCommercial from "@/assets/s_commercial.png";

export function Services() {
  const items = [
    {
      icon: HardHat,
      title: "General Contracting",
      desc: "Professional project management and expert construction solutions from start to finish.",
      tags: ["Project Management", "Construction", "New Build"],
      img: sContracting,
    },
    {
      icon: Bath,
      title: "Bathroom Remodeling",
      desc: "Create a beautiful and functional bathroom customized to your style and needs.",
      tags: ["Showers & Tubs", "Custom Vanities", "Tile Accents"],
      img: sBathroom,
    },
    {
      icon: Utensils,
      title: "Kitchen Remodeling",
      desc: "Transform your kitchen into the centerpiece of your home with modern finishes and layouts.",
      tags: ["Cabinets", "Countertops", "Backsplash"],
      img: sKitchen,
    },
    {
      icon: Wrench,
      title: "Renovation Services",
      desc: "Upgrade and enhance existing spaces with quality craftsmanship.",
      tags: ["Home Upgrades", "Remodeling", "Restorations"],
      img: sRenovation,
    },
    {
      icon: Paintbrush,
      title: "Interior & Exterior Painting",
      desc: "Refresh and protect your property with premium painting services.",
      tags: ["Int/Ext Paint", "Staining", "Premium Finishes"],
      img: sPainting,
    },
    {
      icon: Layers,
      title: "Drywall Services",
      desc: "Professional drywall installation, repairs, patching, and finishing.",
      tags: ["Sheetrock", "Taping", "Texturing"],
      img: sDrywall,
    },
    {
      icon: ShowerHead,
      title: "Plumbing Services",
      desc: "Reliable plumbing installations, repairs, and upgrades.",
      tags: ["Leaking Pipes", "Fixtures", "Water Heaters"],
      img: sPlumbing,
    },
    {
      icon: Zap,
      title: "Electrical Services",
      desc: "Safe and efficient electrical solutions performed by experienced professionals.",
      tags: ["Wiring", "Lighting", "Panel Upgrades"],
      img: sElectrical,
    },
    {
      icon: Home,
      title: "Residential Services",
      desc: "Customized solutions designed specifically for homeowners.",
      tags: ["Home Maintenance", "Upgrades", "Additions"],
      img: sResidential,
    },
    {
      icon: Building2,
      title: "Commercial Services",
      desc: "Dependable contracting services tailored to businesses and commercial properties.",
      tags: ["Office Remodels", "Tenant Improvements", "Retail Spaces"],
      img: sCommercial,
    },
  ];

  // First 3 items for the top row grid
  const topItems = items.slice(0, 3);
  // Remaining 7 items for the second row slider
  const slideItems = items.slice(3);

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-secondary/40 relative overflow-hidden">
      {/* Background circle decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full -translate-y-1/2 translate-x-1/2" style={{ background: "var(--gradient-gold)", opacity: 0.08, filter: "blur(80px)" }} />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center relative">

        {/* Top Row Grid: Left Text Column + 3 Right Image Cards */}
        <div className="grid lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 items-center">

          {/* Left Text Block */}
          <Reveal className="flex flex-col justify-center h-full">
            <div className="pr-2 mb-6 lg:mb-0">
              <span className="section-label">Our Services</span>
              <h2 className="mt-4 text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-navy leading-tight">
                Comprehensive Contracting Solutions for <span className="text-red">Every Project</span>
              </h2>
              <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
                From minor upgrades to complete transformations, our experienced team delivers reliable construction and remodeling services designed to improve both the beauty and functionality of your property.
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="btn-primary"
                >
                  Get a Free Estimate
                </a>
              </div>
            </div>
          </Reveal>

          {/* Top 3 Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {topItems.map((s, i) => (
              <Reveal key={s.title} variant="reveal-scale" className={`stagger-${i + 1} h-full`}>
                <div className="group relative rounded-3xl overflow-hidden shadow-lg bg-navy-dark h-[280px] sm:h-[340px] xl:h-[380px] border border-border/20 cursor-pointer">
                  {/* Floating Icon Badge at top left */}
                  <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-xl bg-navy/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-md">
                    <s.icon className="w-5 h-5 text-gold" />
                  </div>

                  {/* Background image */}
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/40 to-transparent group-hover:from-navy-dark/95 group-hover:via-navy-dark/90 group-hover:to-navy-dark/85 transition-all duration-500" />

                  {/* Card Content */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end z-10 h-full text-center">
                    <div className="flex flex-col gap-1 transition-all duration-500 group-hover:-translate-y-2">
                      <h3 className="font-display text-lg xl:text-xl font-bold text-white leading-tight">
                        {s.title}
                      </h3>

                      {/* Hover detail drawer */}
                      <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[160px] group-hover:opacity-100 transition-all duration-500 ease-out space-y-2 text-center flex flex-col items-center">
                        <p className="text-[12px] text-white/80 leading-snug mt-1.5 line-clamp-2 max-w-[90%]">
                          {s.desc}
                        </p>
                        {s.tags && (
                          <div className="flex flex-wrap gap-1 justify-center max-w-[90%]">
                            {s.tags.slice(0, 3).map(t => (
                              <span key={t} className="text-[8px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-gold/10 text-gold-light border border-gold/20 uppercase">
                                {t}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="pt-1">
                          <span className="relative inline-flex items-center gap-1 text-red font-bold text-[10px] uppercase tracking-widest pb-0.5">
                            <span>Learn More</span>
                            <ArrowRight className="w-3 h-3 animate-pulse" />
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-red" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Second Row Grid: Slider / Carousel */}
        <div className="mt-8 relative px-2 pb-8">
          <Reveal>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 1,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full relative"
            >
              <CarouselContent className="-ml-5">
                {slideItems.map((s, i) => (
                  <CarouselItem key={s.title} className="pl-5 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <div className="group relative rounded-3xl overflow-hidden shadow-lg bg-navy-dark h-[280px] sm:h-[340px] xl:h-[380px] border border-border/20 cursor-pointer">
                      {/* Floating Icon Badge at top left */}
                      <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-xl bg-navy/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-md">
                        <s.icon className="w-5 h-5 text-gold" />
                      </div>

                      {/* Background image */}
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />

                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/40 to-transparent group-hover:from-navy-dark/95 group-hover:via-navy-dark/90 group-hover:to-navy-dark/85 transition-all duration-500" />

                      {/* Card Content */}
                      <div className="absolute inset-0 p-5 flex flex-col justify-end z-10 h-full text-center">
                        <div className="flex flex-col gap-1 transition-all duration-500 group-hover:-translate-y-2">
                          <h3 className="font-display text-lg xl:text-xl font-bold text-white leading-tight">
                            {s.title}
                          </h3>

                          {/* Hover detail drawer */}
                          <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[160px] group-hover:opacity-100 transition-all duration-500 ease-out space-y-2 text-center flex flex-col items-center">
                            <p className="text-[12px] text-white/80 leading-snug mt-1.5 line-clamp-2 max-w-[90%]">
                              {s.desc}
                            </p>
                            {s.tags && (
                              <div className="flex flex-wrap gap-1 justify-center max-w-[90%]">
                                {s.tags.slice(0, 3).map(t => (
                                  <span key={t} className="text-[8px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-gold/10 text-gold-light border border-gold/20 uppercase">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            )}

                            <div className="pt-1">
                              <span className="relative inline-flex items-center gap-1 text-red font-bold text-[10px] uppercase tracking-widest pb-0.5">
                                <span>Learn More</span>
                                <ArrowRight className="w-3 h-3 animate-pulse" />
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-red" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Carousel navigation arrows */}
              <CarouselPrevious className="-left-4 lg:-left-12 bg-white/95 hover:bg-white text-navy hover:text-red border border-border/60 shadow-md h-10 w-10 transition-all rounded-full flex items-center justify-center" />
              <CarouselNext className="-right-4 lg:-right-12 bg-white/95 hover:bg-white text-navy hover:text-red border border-border/60 shadow-md h-10 w-10 transition-all rounded-full flex items-center justify-center" />
            </Carousel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
