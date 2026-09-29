import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Workflow | Sammobadi",
  alternates: {
    canonical: "https://sammobadi.com/workflow",
  },
};

export default function WorkflowPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://sammobadi.com/" },
          { name: "Workflow", url: "https://sammobadi.com/workflow" },
        ]}
      />
      <HomePage initialSection="workflow" />
    </>
  );
}
