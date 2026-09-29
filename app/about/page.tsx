import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "About | Sammobadi",
  alternates: {
    canonical: "https://sammobadi.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://sammobadi.com/" },
          { name: "About", url: "https://sammobadi.com/about" },
        ]}
      />
      <HomePage initialSection="about" />
    </>
  );
}
