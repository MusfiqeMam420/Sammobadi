"use client";

import React from "react";
import { motion } from "framer-motion";


// Define your GIF / PNG images here (replace with your own files)
const steps = [
  {
    id: "discover",
    title: "Discover",
    subtitle: "Understand & define",
    description:
      "We begin by understanding your goals, audience, and challenges. Through research, conversations, and clarity sessions, we define the path forward with confidence.",
    img: "/process/process-bird.gif",
  },
  {
    id: "design",
    title: "Design",
    subtitle: "Shape the experience",
    description:
      "Ideas become visuals — from sketches to high-fidelity designs. We craft intuitive interfaces and delightful interactions that make the experience feel natural and human.",
    img: "/process/process-khata.gif",
  },
  {
    id: "build",
    title: "Build",
    subtitle: "Ship with craft",
    description:
      "Our engineering brings the design to life with clean, scalable code. We prioritize speed, accessibility, and performance so everything works beautifully across devices.",
    img: "/process/process-cheni.gif",
  },
  {
    id: "deliver",
    title: "Deliver",
    subtitle: "Refine & grow",
    description:
      "Launch is just the beginning. We monitor, refine, and improve based on real user insights — ensuring your product grows stronger with every iteration.",
    img: "/process/process-box.gif",
  },
];

export default function ProcessSection() {
  return (
    <section className="max-w-7xl mx-auto px-6  md:pt-25" id="workflow">
       {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-host md:text-4xl  host-extrabold mb-4 text-center"
        >
          How We Bring Ideas to Life
        </motion.h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16 font-poppins">
          From first sketch to final build — every step is intentional, thoughtful, and human-focused.
        </p>

      {/* Steps Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
        {steps.map((step, idx) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center px-4"
          >
            {/* ICON */}
            <img
              src={step.img}
              alt={step.title}
              className="w-25 h-25 object-contain mb-4"
            />

            {/* TITLE */}
            <h4 className="text-xl font-host font-semibold text-gray-900">{step.title}</h4>

            {/* SUBTITLE */}
            <p className="text-xs font-poppins text-gray-500 mt-1">{step.subtitle}</p>

            {/* DASHED LINE */}
            <div className="w-20 border-t border-dashed border-gray-300 my-4"></div>

            {/* DESCRIPTION */}
            <p className="text-sm font-poppins text-gray-600 leading-relaxed max-w-xs">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
