"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpCircleSolid } from "@bangalicon/react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="backToTop"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="
            fixed bottom-6 right-6
            flex items-center gap-2
            px-3 py-2.5 md:px-5
            rounded-full
            bg-black text-white
            shadow-lg shadow-black/30
            font-poppins text-sm
            z-[999] cursor-pointer
          "
        >
        <ArrowUpCircleSolid size={24} fill="currentColor" className="text-white" />

<span className="hidden md:inline">Back to Top</span>

        </motion.button>
      )}
    </AnimatePresence>
  );
}
