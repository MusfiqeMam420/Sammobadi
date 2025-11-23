"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ServiceModal from "./ServiceModal";

export const services = [
  {
    id: 1,
    img: "/service-animation/service-1.gif",
    title: "Branding",
    desc: "Building visual identities that define and elevate your brand.",
    details: [
      "Brand Strategy & Positioning",
      "Logo & Visual Identity Design",
      "Style Guides & Brand Assets",
      "Rebranding & Naming Systems",
    ],
  },
  {
    id: 2,
    img: "/service-animation/service-2.gif",
    title: "UI/UX Design",
    desc: "Designing seamless, human-centered digital experiences.",
    details: [
      "Wireframing & Prototyping",
      "User Journey Mapping",
      "Web & Mobile UI Design",
      "Design Systems & Guidelines",
    ],
  },
  {
    id: 3,
    img: "/service-animation/service-3.gif",
    title: "Animation",
    desc: "Bringing stories to life through motion and movement.",
    details: [
      "2D/3D Animation",
      "Explainer Videos",
      "Product Motion Design",
      "Illustration Animation",
    ],
  },
  {
    id: 4,
    img: "/service-animation/service-4.gif",
    title: "Development",
    desc: "Building fast, modern, and scalable digital platforms.",
    details: [
      "Frontend & Backend Development",
      "React, Next.js, and Node.js etc",
      "API Integrations",
      "Performance Optimization",
    ],
  },
  {
    id: 5,
    img: "/service-animation/service-5.gif",
    title: "Graphics & Illustration",
    desc: "Crafting visuals that tell stories and evoke emotion.",
    details: [
      "Illustration & Icon Design",
      "Posters & Social Media Graphics",
      "Brand Visuals",
      "Editorial Design",
    ],
  },
  {
    id: 6,
    img: "/service-animation/service-6.gif",
    title: "Video & Content",
    desc: "Editing, color-grading, and creating engaging stories.",
    details: [
      "Video Editing & Motion Titles",
      "Color Correction & Grading",
      "Promo & Shortform Videos",
      "Audio Sync & Sound Design",
    ],
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<any>(null);

  return (
    <section className="relative py- bg-white text-gray-900 overflow-hidden" id="services">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-host md:text-4xl  host-extrabold mb-4"
        >
          What We Do
        </motion.h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16 font-poppins">
          We blend creativity, design, and technology to craft experiences that move people.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => setActiveService(service)}
              className="cursor-pointer flex flex-col items-center text-center p-6 group  transition"
            >
           <div className="relative w-34 h-34 md:w-38 md:h-38 flex items-center justify-center overflow-hidden ">
  <img
    src={service.img.replace(".mov", ".gif")}
    alt={service.title}
    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
    style={{
      WebkitBackfaceVisibility: "hidden",
      WebkitTransformStyle: "preserve-3d",
      imageRendering: "auto",
    }}
  />
</div>


              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#2D6BDF] transition font-poppins">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-sm font-poppins w-50">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Import the Popup */}
      {/* <ServiceModal
        activeService={activeService}
        onClose={() => setActiveService(null)}
      /> */}
    </section>
  );
}
