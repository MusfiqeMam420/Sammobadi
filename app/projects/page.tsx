import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Projects | Sammobadi",
  alternates: {
    canonical: "https://sammobadi.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://sammobadi.com/" },
          { name: "Projects", url: "https://sammobadi.com/projects" },
        ]}
      />
      <HomePage initialSection="projects" />
    </>
  );
}
