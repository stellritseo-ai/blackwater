import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { WhyUs } from "@/components/home/WhyUs";
import { CTABanner } from "@/components/home/CTABanner";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { Footer } from "@/components/home/Footer";
import { About } from "@/components/home/About";
import { Reviews } from "@/components/home/Reviews";
import { Gallery } from "@/components/home/Gallery";
import { Contact } from "@/components/home/Contact";
import { FAQ } from "@/components/home/FAQ";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moss Point General Contractor | Commercial & Residential | Blackwater USA LLC" },
      { name: "description", content: "Expert general contractors in Moss Point, MS serving the Gulf Coast, Mississippi, Alabama, & Louisiana. Kitchen/bath remodeling, renovations, plumbing, electrical & insurance repairs. 24/7 Free Estimates." },
      { property: "og:title", content: "Moss Point General Contractor | Blackwater USA LLC" },
      { property: "og:description", content: "43 years of trusted craftsmanship. Commercial & residential contractors serving the Gulf Coast. Licensed, insured & bonded. Call (228) 219-8338." },
      { property: "og:url", content: "https://blackwaterusallc.com/" },
    ],
    links: [{ rel: "canonical", href: "https://blackwaterusallc.com/" }],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Nav />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <CTABanner />
      <Reviews />
      <Gallery />
      <Contact />
      <ServiceAreas />
      <FAQ />
      <Footer />
    </div>
  );
}
