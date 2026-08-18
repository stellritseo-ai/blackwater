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
      { title: "General Contractor in Moss Point, MS | Blackwater USA LLC" },
      { name: "description", content: "Premier general contractor in Moss Point, Pascagoula & Gulf Coast MS. 43 years experience in kitchen/bath remodeling, commercial build-outs & 24/7 free estimates." },
      { property: "og:title", content: "General Contractor in Moss Point, MS | Blackwater USA LLC" },
      { property: "og:description", content: "Premier general contractor in Moss Point, Pascagoula & Gulf Coast MS. 43 years experience in remodeling, renovations & 24/7 free estimates." },
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
