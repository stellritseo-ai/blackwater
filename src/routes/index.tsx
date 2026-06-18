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
      { title: "Blackwater USA LLC — General Contractor in Moss Point, MS" },
      { name: "description", content: "Family-owned general contractors with 43 years of experience serving Moss Point and the Gulf Coast. Kitchen & bath remodeling, renovations, painting, drywall, plumbing, electrical and insurance repairs. Free 24/7 estimates." },
      { property: "og:title", content: "Blackwater USA LLC — Premium Contractors in Moss Point" },
      { property: "og:description", content: "43 years of trusted craftsmanship. Licensed, insured & bonded. Call (228) 219-8338." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
