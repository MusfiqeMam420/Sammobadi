"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import UniversalButton from "@/components/UniversalButton";
import { useContactModal } from "@/app/context/ContactModalContext";


const links = [
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Workflow", href: "#workflow" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openContact } = useContactModal();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur" : "transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 md:py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/logo/sammobadi.svg"
            alt="Sammobadi Logo"
            width={24}
            height={24}
            className="object-contain"
            priority
          />
          <span className="text-2xl font-host host-semibold text-gray-900 tracking-wide">
            Sammobadi
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-poppins">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 opacity-70 hover:opacity-100 transition-opacity"
            >
              {link.name}
            </Link>
          ))}

          {/* Desktop Contact */}
          <UniversalButton  variant="light" text="Start a project" onClick={openContact} />
        </div>

        {/* Mobile Menu Button */}
        {!menuOpen && (
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-gray-900 z-[60] text-3xl"
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
  <path fillRule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>

          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 
              h-screen w-screen 
              bg-white 
              z-[9999] 
              flex flex-col justify-center items-center 
              overflow-y-auto
              pt-20 pb-20
            "
          >
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-gray-900"
            >
              <X size={30} />
            </button>

            {/* Menu Items */}
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              className="flex flex-col items-center gap-8"
            >
              {links.map((link) => (
                <motion.li
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* MOBILE CONTACT BUTTON */}
            <div className="mt-10 md:hidden">
              <UniversalButton  variant="dark" text="Start a project" onClick={openContact}  />
            </div>

           {/* Footer Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-10 text-gray-500 text-sm"
            >
              © {new Date().getFullYear()} Sammobadi. All rights reserved.
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
