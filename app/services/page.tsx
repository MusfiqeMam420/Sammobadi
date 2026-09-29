import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Services | Sammobadi",
  alternates: {
    canonical: "https://sammobadi.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://sammobadi.com/" },
          { name: "Services", url: "https://sammobadi.com/services" },
        ]}
      />
      <HomePage initialSection="services" />
    </>
  );
}
