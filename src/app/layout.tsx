import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";

import { GSAPProvider } from "@/components/animations/GsapProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/custom-cursor";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://weldbrosindia.com"),

  title: {
    default: "WBRS Industries | Transformer Tanks & Power Solutions",
    template: "%s | WBRS Industries",
  },

  description:
    "WBRS Industries manufactures transformer tanks and fabricated components for power and industrial applications.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    url: "https://weldbrosindia.com",
    siteName: "WBRS Industries",
    title: "WBRS Industries | Transformer Tanks & Power Solutions",
    description:
      "WBRS Industries manufactures transformer tanks and fabricated components for power and industrial applications.",
    locale: "en_IN",
    images: [
      {
        url: "/images/products/powerTransformer.png",
        width: 1200,
        height: 630,
        alt: "WBRS Industries | Transformer Tanks & Power Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WBRS Industries | Transformer Tanks & Power Solutions",
    description:
      "WBRS Industries manufactures transformer tanks and fabricated components for power and industrial applications.",
    images: ["/images/products/powerTransformer.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WBRS Industries",
  url: "https://weldbrosindia.com",
  logo: "https://weldbrosindia.com/images/brand/lastLogo.png",
  description:
    "WBRS Industries manufactures transformer tanks and fabricated components for power and industrial applications.",
  email: "weldbrosindia@gmail.com",
  telephone: "+91 8955182334",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Harmada, Sikar Road Near Vishwakarma Industrial Area (VKI Area)",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302013",
    addressCountry: "IN",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WBRS Industries",
  url: "https://weldbrosindia.com",
  image: "https://weldbrosindia.com/images/products/powerTransformer.png",
  email: "weldbrosindia@gmail.com",
  telephone: "+91 8955182334",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Harmada, Sikar Road Near Vishwakarma Industrial Area (VKI Area)",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302013",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.0054367,
    longitude: 75.7908437,
  },
  areaServed: {
    "@type": "City",
    name: "Jaipur",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WBRS Industries",
  url: "https://weldbrosindia.com",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />

        <CustomCursor />
        <GSAPProvider />

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}