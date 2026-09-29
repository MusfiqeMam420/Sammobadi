"use client";

import { motion } from "framer-motion";
import UniversalButton from "@/components/UniversalButton";
import LazyVideo from "@/components/LazyVideo";
import { useContactModal } from "@/app/context/ContactModalContext";

export default function CTAFooter() {
  const { openContact } = useContactModal();

  return (
    <section className="px-3 md:px-0 py-1 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          relative 
          bg-[#f3f3f6]
          rounded-[32px]
          overflow-hidden
          px-6 py-10 md:px-10 md:py-8
          flex flex-col md:flex-row
          items-center md:items-stretch
          justify-between
          w-full

        "
      >

        {/* ----------------------
            MOBILE LAYOUT
        ---------------------- */}
        <div className="md:hidden w-full flex flex-col items-center text-center">
          <h2 className="text-2xl font-host font-extrabold text-[#111] leading-tight mt-4">
            Ready to bring your idea to life?
          </h2>

          <p className="text-[#3A3A3A] font-poppins text-base mt-1 mb-3">
            Let’s build it together.
          </p>

          {/* Buttons */}
          <div className="flex flex-col w-full gap-3 mt-2 px-2">

            {/* No <a> wrapper — UniversalButton handles it */}
            <UniversalButton
              variant="dark"
              text="Get Started"
              onClick={openContact}
            />

            <UniversalButton
              variant="light"
              text="Let's Talk"
              href="mailto:hello@sammobadi.com"
            />

          </div>

          {/* Mobile Illustration */}
          <div className="w-full flex justify-center mt-0 pb-0">
            <div
              className="
                relative
                aspect-[19/14]
                w-[92%] sm:w-[86%]
                translate-y-[22%]
                pointer-events-none
              "
            >
              <LazyVideo
                src="/CTAFooter/ctafooter.webm"
                poster="/CTAFooter/catfooter.png"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* ----------------------
            DESKTOP LAYOUT
        ---------------------- */}
        <div className="hidden md:flex flex-col justify-center max-w-xl space-y-3 ">
          <h2 className="text-3xl md:text-4xl font-host font-extrabold text-[#111] leading-tight">
            Ready to bring your idea to life?
          </h2>

          <p className="text-[#3A3A3A] font-poppins text-lg">
            Let’s build it together.
          </p>

          <div className="flex items-center gap-4 pt-2">

            <UniversalButton
              variant="dark"
              text="Get Started"
              onClick={openContact}
            />

            <UniversalButton
              variant="light"
              text="Let's Talk"
              href="mailto:hello@sammobadi.com"
            />

          </div>
        </div>

        {/* Desktop Illustration */}
<div className="hidden md:flex w-[40%] justify-end items-end">
  <div className="relative aspect-[19/14] w-[330px] translate-y-[30%] pointer-events-none">
    <LazyVideo
      className="absolute inset-0 w-full h-full object-contain"
      src="/CTAFooter/ctafooter.webm"
      poster="/CTAFooter/catfooter.png"   // ⭐ add poster for instant load
    />
  </div>
</div>


      </motion.div>
    </section>
  );
}

