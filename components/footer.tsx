"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FacebookBrand, InstagramBrand } from "@bangalicon/react";
import LazyVideo from "@/components/LazyVideo";
import { goToSectionRoute } from "@/components/sectionNavigation";

export default function Footer() {
  return (
    <footer className="relative w-full pt-16 pb-8 bg-white text-zinc-700">

      {/* Soft top divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND + DESCRIPTION */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="flex flex-col gap-3 relative"
>
  {/* Logo + Title */}
  <div className="flex items-center gap-2">
    <Image
      src="/logo/sammobadi.svg"
      width={20}
      height={20}
      unoptimized
      className="w-5 h-5"
      alt="logo"
      loading="lazy"
    />
    <span className=" text-zinc-800 text-lg font-host host-semibold">Sammobadi</span>
  </div>

  {/* Paragraph */}
  <p className="font-poppins text-sm max-w-xs leading-relaxed text-zinc-600">
    A digital studio building modern tools, thoughtful products,
    and meaningful software experiences.
  </p>

  {/* ⭐ MOBILE ABSOLUTE VIDEO IN RED GAP */}
  <div className="absolute right-0 top-[120px] w-24 sm:hidden pointer-events-none select-none">
    <LazyVideo
      src="/footer/cat-2.webm"
      className="w-full h-full object-contain"
    />
  </div>

  {/* ⭐ DESKTOP VERSION — NORMAL POSITION (NOT ABSOLUTE) */}
  <div className="hidden sm:flex justify-end mt-4 pointer-events-none select-none">
    <div className="w-28">
      <LazyVideo
        src="/footer/cat-2.webm"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</motion.div>


          {/* LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold  text-zinc-800 text-lg mb-3 font-host">Links</h3>
            <ul className="space-y-2 font-poppins text-sm">
              {[
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "About", href: "/about" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Use", href: "/terms" },
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    className="group relative inline-block"
                    href={item.href}
                    onClick={(e) => {
                      if (goToSectionRoute(item.href)) e.preventDefault();
                    }}
                  >
                    <span className="text-gray-800 opacity-70 hover:opacity-100 transition-opacity">
                      {item.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

         {/* CONTACT SECTION — Minimal Clean Style */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
 
>
 <h3 className="font-semibold text-zinc-800 text-lg mb-1 font-host">
              Contact
            </h3>
            <div  className="space-y-3">
 {/* Address */}
  <div>
    
            
    <p className="text-[11px] uppercase tracking-wide text-zinc-500 mb-0 font-poppins">
      Office
    </p>

    <p className="text-sm text-zinc-600 font-medium opacity-70 hover:opacity-100 transition-opacity font-poppins cursor-pointer">
      Alal Market , Gafargaon, <br />
      Mymensingh, Bangladesh.
    </p>
  </div>

  {/* Phone */}
  <div>
    <p className="text-[11px] uppercase tracking-wide text-zinc-500 mb-0 font-poppins">
      Call
    </p>

    <a
      href="tel:+8801622244057"
      className="text-sm text-zinc-600 font-medium opacity-70 hover:opacity-100 transition-opacity font-poppins"
    >
      +880 16222 44 057
    </a>
  </div>

  {/* Email */}
  <div>
    <p className="text-[11px] uppercase tracking-wide text-zinc-500 mb-0 font-poppins">
      Email
    </p>
    <a
      href="mailto:hello@sammobadi.com"
      className="text-sm text-zinc-600  opacity-70 hover:opacity-100 transition-opacity font-poppins"
    >
      hello@sammobadi.com
    </a><br />
     <a
      href="mailto:support@sammobadi.com"
      className="text-sm text-zinc-600  opacity-70 hover:opacity-100 transition-opacity font-poppins"
    >
      support@sammobadi.com
    </a>
  </div>
            </div>
 

</motion.div>


          {/* SOCIAL MEDIA + ILLUSTRATION VIDEO */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold text-zinc-800 text-lg mb-3 font-host">
              Follow Us
            </h3>

        <div className="flex gap-4 text-zinc-500">

  <a href="https://www.facebook.com/Sammobadiit/" target="_blank" rel="noopener noreferrer">
    <FacebookBrand
      size={28}
      fill="currentColor"
      className="text-zinc-500 hover:text-zinc-800 transition"
    />
  </a>

  <a href="https://www.instagram.com/sammo_badi/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800 transition">
    <InstagramBrand
      size={28}
      fill="currentColor"
      className="text-zinc-500 hover:text-black transition"
    />
  </a>

</div>


            {/* Illustration Right */}
            <div className="mt-4 ml-auto w-36 pointer-events-none select-none">
              <LazyVideo
                src="/footer/cat-1.webm"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="mt-12 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent"></div>

        {/* Copyright */}
        <motion.p
          className="text-center text-xs text-zinc-500 mt-6 font-poppins"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          © {new Date().getFullYear()} Sammobadi. All rights reserved.
        </motion.p>

      </div>
    </footer>
  );
}
