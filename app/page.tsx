import HomePage from "@/components/HomePage";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export default function Home() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Home", url: "https://sammobadi.com/" }]}
      />
      <HomePage />
    </>
  );
}
