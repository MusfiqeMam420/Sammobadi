import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { ContactModalProvider } from "@/app/context/ContactModalContext";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sammobadi.com/#organization",
      "name": "Sammobadi",
      "url": "https://sammobadi.com/",
      "logo": "https://sammobadi.com/favicon/favicon_192.png",
      "image": "https://sammobadi.com/og-image.png",
      "sameAs": [
        "https://x.com/sammobadi",
        "https://www.facebook.com/Sammobadiit/",
        "https://www.instagram.com/sammo_badi/"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+8801622244057",
          "contactType": "customer support",
          "areaServed": "BD"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://sammobadi.com/#website",
      "name": "Sammobadi",
      "url": "https://sammobadi.com/",
      "publisher": {
        "@id": "https://sammobadi.com/#organization"
      }
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "https://sammobadi.com/#site-navigation",
      "name": [
        "Services",
        "Projects",
        "About",
        "Workflow",
        "Privacy Policy",
        "Terms & Conditions"
      ],
      "url": [
        "https://sammobadi.com/services",
        "https://sammobadi.com/projects",
        "https://sammobadi.com/about",
        "https://sammobadi.com/workflow",
        "https://sammobadi.com/privacy",
        "https://sammobadi.com/terms"
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Sammobadi",
   description:
    "Sammobadi is a creative digital agency specializing in UI/UX design, website development, branding, animation, graphics design, and video editing services. We build fast, modern, and user-focused digital experiences that help businesses grow online.",
  keywords: [
    "UI/UX design services",
    "website development",
    "branding agency",
    "animation services",
    "graphics design",
    "video editing services",
    "creative digital agency",
    "web design company",
    "brand identity design"
  ],
  // -----------------------------------------
  // ✅ Canonical URL (IMPORTANT FOR SEO)
  // -----------------------------------------
  alternates: {
    canonical: "https://sammobadi.com/",
  },

  // -----------------------------------------
  // ✅ Favicon System (Light + Dark)
  // -----------------------------------------
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },

      // Light
      { url: "/favicon/favicon_32.png", sizes: "32x32", media: "(prefers-color-scheme: light)" },
      { url: "/favicon/favicon_48.png", sizes: "48x48", media: "(prefers-color-scheme: light)" },
      { url: "/favicon/favicon_64.png", sizes: "64x64", media: "(prefers-color-scheme: light)" },
      { url: "/favicon/favicon_128.png", sizes: "128x128", media: "(prefers-color-scheme: light)" },

      // Dark
      { url: "/favicon/favicon_white_32.png", sizes: "32x32", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon/favicon_white_48.png", sizes: "48x48", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon/favicon_white_64.png", sizes: "64x64", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon/favicon_white_128.png", sizes: "128x128", media: "(prefers-color-scheme: dark)" },
    ],

    apple: [
      { url: "/favicon/favicon_180.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon/favicon_white_180.png", media: "(prefers-color-scheme: dark)" },
    ],
  },

  // -----------------------------------------
  // OpenGraph SEO
  // -----------------------------------------
  openGraph: {
    title: "Sammobadi",
    description: "Crafting digital experiences that move people.",
    url: "https://sammobadi.com/",
    siteName: "Sammobadi",
    type: "website",
    images: [
      { url: "https://sammobadi.com/og-image.png", width: 1200, height: 630 },
    ],
  },

  // -----------------------------------------
  // Twitter SEO
  // -----------------------------------------
  twitter: {
    card: "summary_large_image",
    title: "Sammobadi",
    description: "Crafting digital experiences that move people.",
    images: ["https://sammobadi.com/og-image.png"],
  },

};

export const viewport: Viewport = {
  themeColor: [
    { color: "#ffffff", media: "(prefers-color-scheme: light)" },
    { color: "#000000", media: "(prefers-color-scheme: dark)" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          {/* Google Tag Manager */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-NCDN851NKM"
    strategy="lazyOnload"
  />
  <Script id="google-analytics" strategy="lazyOnload">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-NCDN851NKM');
    `}
  </Script>
        {/* -----------------------------------------
            ✅ JSON-LD Structured Data (SEO BOOST)
           ----------------------------------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>

      <body>
        <ContactModalProvider>{children}</ContactModalProvider>
      </body>
    </html>
  );
}
