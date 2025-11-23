"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroPageProps {
  title: string;
}

export default function HeroPage({ title }: HeroPageProps) {
  return (
    <section className="w-full">

      {/* Header background */}
      <div className="w-full bg-[#111] py-12 sm:py-14 md:py-16">

        {/* Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col">

          {/* Top Row */}
          <div className="
            flex flex-col sm:flex-row 
            items-start sm:items-center 
            justify-between 
            gap-6 sm:gap-0 
            mb-8 md:mb-10
          ">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/logo/sammobadi-white.svg"
                alt="Sammobadi"
                width={22}
                height={22}
                className="object-contain sm:w-6 sm:h-6"
              />
              <span className="text-white text-xl sm:text-2xl font-host font-semibold">
                Sammobadi
              </span>
            </div>

            {/* Breadcrumb */}
            <div className="
              bg-white text-black rounded-full 
              px-3 sm:px-4 py-1.5 sm:py-2
              text-xs sm:text-sm 
              font-medium 
              flex items-center gap-2 shadow-sm
            ">
              <Link href="/" className="opacity-70 hover:opacity-100">
                Home
              </Link>
              <span className="opacity-40">›</span>
              <span className="opacity-90 truncate max-w-[120px] sm:max-w-none">
                {title}
              </span>
            </div>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-left md:text-center text-white font-host font-bold 
              text-2xl sm:text-3xl md:text-4xl 
              leading-tight 
              pb-6 sm:pb-8 md:pb-10
            "
          >
            {title}
          </motion.h1>

        </div>
      </div>
    </section>
  );
}
