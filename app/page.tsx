"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/ServicesSection";
import Projects from "@/components/ProjectsSection";
import About from "@/components/AboutSection";
import Process from "@/components/ProcessSection";
import Footer from "@/components/footer";
import CTAFooter from "@/components/CtaFooter";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Page Sections */}
      <main className="flex flex-col gap-24">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Process />
        <CTAFooter/> 
        <BackToTop />
        <Footer />
      </main>
    </div>
  );
}
