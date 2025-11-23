"use client";

import { motion } from "framer-motion";

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
    <img src="/logo/sammobadi.svg" className="w-5 h-5" alt="logo" />
    <span className="font-semibold text-zinc-800 text-lg">Sammobadi</span>
  </div>

  {/* Paragraph */}
  <p className="font-poppins text-sm max-w-xs leading-relaxed text-zinc-600">
    A digital studio building modern tools, thoughtful products,
    and meaningful software experiences.
  </p>

  {/* ⭐ MOBILE ABSOLUTE VIDEO IN RED GAP */}
  <div className="absolute right-0 top-[120px] w-24 sm:hidden pointer-events-none select-none">
    <video
      src="/footer/cat-2.webm"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-contain"
    />
  </div>

  {/* ⭐ DESKTOP VERSION — NORMAL POSITION (NOT ABSOLUTE) */}
  <div className="hidden sm:flex justify-end mt-4 pointer-events-none select-none">
    <div className="w-28">
      <video
        src="/footer/cat-2.webm"
        autoPlay
        loop
        muted
        playsInline
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
                { label: "Services", href: "#services" },
                { label: "Projects", href: "#projects" },
                { label: "About", href: "#about" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Use", href: "/terms" },
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a className="group relative inline-block" href={item.href}>
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

    <p className="text-sm text-zinc-600  leading-relaxed font-poppins">
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
      className="text-sm text-zinc-600font-medium opacity-70 hover:opacity-100 transition-opacity font-poppins"
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
      Support@sammobadi.com
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

  <a href="https://www.facebook.com/Sammobadiit/" target="_">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="28"
  height="28"
  className="text-zinc-500 hover:text-zinc-800 transition"
  viewBox="0 0 24 24"
>
  <path
    fill="currentColor"
    d="M12 2.06c-5.5 0-10 4.5-10 10 0 4.94 3.61 9.06 8.33 9.89l.06-.05h-.06v-7.06h-2.5v-2.78h2.5V9.84c0-2.5 1.61-3.89 3.89-3.89.72 0 1.5.11 2.22.22v2.56h-1.28c-1.22 0-1.5.61-1.5 1.39v1.94h2.67l-.44 2.78h-2.22v7.06h-.06l.06.05c4.72-.83 8.33-4.94 8.33-9.89 0-5.5-4.5-10-10-10"
  ></path>
</svg>

  </a>

  <a href="https://www.instagram.com/sammo_badi/" className="hover:text-zinc-800 transition">
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="28"
  height="28"
  viewBox="0 0 24 24"
  fill="currentColor"           // ← Tailwind color now works
  className="text-zinc-500 hover:text-black transition"
>
  {/* Boxicons v3.0.4 */}
  <path d="M20.947 8.305a6.5 6.5 0 0 0-.419-2.216 4.6 4.6 0 0 0-2.633-2.633 6.6 6.6 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.6 6.6 0 0 0-2.185.42 4.6 4.6 0 0 0-2.633 2.633 6.6 6.6 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632 6.6 6.6 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.6 6.6 0 0 0 2.186-.419 4.62 4.62 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709m-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246m4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078"></path>
  <path d="M11.994 8.976a3.003 3.003 0 1 0 0 6.006 3.003 3.003 0 1 0 0-6.006"></path>
</svg>

  </a>

  {/* <a href="#" className="hover:text-zinc-800 transition">
    <ion-icon name="logo-twitter" className="text-[22px]"></ion-icon>
  </a>

  <a href="#" className="hover:text-zinc-800 transition">
    <ion-icon name="logo-linkedin" className="text-[22px]"></ion-icon>
  </a> */}

</div>


            {/* Illustration Right */}
            <div className="mt-4 ml-auto w-36 pointer-events-none select-none">
              <video
                src="/footer/cat-1.webm"
                autoPlay
                loop
                muted
                playsInline
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
