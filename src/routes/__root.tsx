import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import faviconUrl from "../assets/blacklogo.png";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { FloatingChat } from "../components/ui/FloatingChat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "yV-DwzA4D80x3gSigNErFIVdzni91Y7vm5uorTQpDT4" },
      { title: "Blackwater USA LLC — General Contractors in Moss Point, MS" },
      { name: "description", content: "Family-owned general contractors with 43 years of experience. Kitchen & bath remodeling, renovations, painting, drywall, plumbing & electrical. Licensed, insured & bonded. Free 24/7 estimates." },
      { name: "author", content: "Blackwater USA LLC" },
      { property: "og:title", content: "Blackwater USA LLC — Premium Contractors in Moss Point" },
      { property: "og:description", content: "43 years of craftsmanship. Residential & commercial remodeling, renovations and insurance repairs across the Gulf Coast." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: faviconUrl, type: "image/png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "GeneralContractor", "HomeAndConstructionBusiness"],
        "@id": "https://blackwaterusallc.com/#business",
        "name": "Blackwater USA LLC",
        "alternateName": "Blackwater USA Construction & Remodeling",
        "url": "https://blackwaterusallc.com",
        "telephone": "+1-228-219-8338",
        "email": "blackwaterusa.llc@gmail.com",
        "image": "https://blackwaterusallc.com/assets/hero.jpg",
        "priceRange": "$$",
        "paymentAccepted": ["Cash", "Credit Card", "Check", "Insurance Claim Financing"],
        "currenciesAccepted": "USD",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3600 Magnolia St",
          "addressLocality": "Moss Point",
          "addressRegion": "MS",
          "postalCode": "39563",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 30.392666,
          "longitude": -88.544569
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "sameAs": [
          "https://www.bbb.org/us/ms/moss-point/profile/home-renovation/blackwater-usa-llc-0523-235906195"
        ],
        "founder": {
          "@type": "Person",
          "name": "Richard Burns",
          "jobTitle": "Owner & Master Builder"
        },
        "description": "Licensed, bonded, and insured general contractor in Moss Point, MS with 43 years of experience. Providing premier residential and commercial remodeling, renovations, kitchen & bath remodels, drywall, painting, plumbing, electrical, and insurance claim repairs across South Mississippi and Southwest Alabama.",
        "areaServed": [
          { "@type": "City", "name": "Moss Point", "sameAs": "https://en.wikipedia.org/wiki/Moss_Point,_Mississippi" },
          { "@type": "City", "name": "Pascagoula", "sameAs": "https://en.wikipedia.org/wiki/Pascagoula,_Mississippi" },
          { "@type": "City", "name": "Gautier", "sameAs": "https://en.wikipedia.org/wiki/Gautier,_Mississippi" },
          { "@type": "City", "name": "Ocean Springs", "sameAs": "https://en.wikipedia.org/wiki/Ocean_Springs,_Mississippi" },
          { "@type": "City", "name": "Biloxi", "sameAs": "https://en.wikipedia.org/wiki/Biloxi,_Mississippi" },
          { "@type": "City", "name": "D'Iberville", "sameAs": "https://en.wikipedia.org/wiki/D%27Iberville,_Mississippi" },
          { "@type": "City", "name": "Grand Bay", "sameAs": "https://en.wikipedia.org/wiki/Grand_Bay,_Alabama" },
          { "@type": "City", "name": "Theodore", "sameAs": "https://en.wikipedia.org/wiki/Theodore,_Alabama" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "General Contracting & Remodeling Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "General Contracting Services", "url": "https://blackwaterusallc.com/general-contracting" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Remodeling", "url": "https://blackwaterusallc.com/kitchen-remodeling" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Remodeling", "url": "https://blackwaterusallc.com/bathroom-remodeling" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Whole Home Renovation", "url": "https://blackwaterusallc.com/renovation-services" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Construction & Remodeling", "url": "https://blackwaterusallc.com/residential-services" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Contracting & Tenant Buildouts", "url": "https://blackwaterusallc.com/commercial-services" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior & Exterior Painting", "url": "https://blackwaterusallc.com/painting-services" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drywall Installation & Repair", "url": "https://blackwaterusallc.com/drywall-services" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plumbing Services & Repairs", "url": "https://blackwaterusallc.com/plumbing-services" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical Services & Upgrades", "url": "https://blackwaterusallc.com/electrical-services" } }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://blackwaterusallc.com/#website",
        "url": "https://blackwaterusallc.com",
        "name": "Blackwater USA LLC",
        "publisher": { "@id": "https://blackwaterusallc.com/#business" }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} 
        />
        {/* Google Analytics - Placeholder */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <FloatingChat />
    </QueryClientProvider>
  );
}
