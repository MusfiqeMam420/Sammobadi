"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import UniversalButton from "@/components/UniversalButton";

import { useContactModal } from "@/app/context/ContactModalContext";


export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

       const { openContact } = useContactModal();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headline = "We Are Sammobadi";
  const tagline = (
    <>
      Designers <span className="text-zinc-400">·</span> Developers{" "}
      <span className="text-zinc-400">·</span> Storytellers
    </>
  );

  const subtext =
    "We craft digital experiences that resonate, combining thoughtful design, purposeful storytelling, and modern development to create meaningful interactions that connect ideas with emotion.";

  const wordAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
<img
  src="/hero/cloud_bg.png"
  alt="Cloud Background"
  className="
    absolute inset-0 
    w-full h-full 
    object-cover 
    object-top 
    opacity-90 
    pointer-events-none
  "
/>


  {/* 🎏 Kite illustration */}
<video
  className="absolute top-[10%] left-[1%] rotate-30 sm:rotate-10 md:rotate-5 md:top-[6%] md:left-[0%] lg:rotate-0 lg:left-[20%] w-[160px] sm:w-[200px] md:w-[260px] lg:w-[300px] object-contain pointer-events-none z-10"
  autoPlay
  loop
  muted
  playsInline
  preload="none"          // ← Faster initial load
  poster="/hero/kite.png"          // ← Browsers can lazy load video
>
  <source src="/hero/kite-480.webm" type="video/webm" media="(max-width: 600px)" />
  <source src="/hero/kite-720.webm" type="video/webm" media="(max-width: 1200px)" />
  <source src="/hero/kite.webm" type="video/webm" />
</video>


      {/* 👦 Boy illustration */}
      <video
        className="absolute bottom-0 right-[0%] md:right-[12%] w-[250px] sm:w-[250px] md:w-[320px] lg:w-[400px] object-contain pointer-events-none"
        src={isMobile ? "/hero/boy-2.webm" : "/hero/boy.webm"}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={isMobile ? "/hero/boy-2.png" : "/hero/boy.png"}
      />

      {/* 🌟 Center Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
     {/* Small Hello Badge */}
<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
  className="mx-auto mb-4 md:mb-1 w-fit px-4 py-1.5 rounded-full font-host  bg-[#A9CCFF] font-medium text-md flex items-center gap-2"
>
 <motion.img
  src="/hero/waving_hand.svg"
  alt="wave"
  className="w-5 h-5"
  style={{ transformOrigin: "bottom right" }} // anchor for the wave
  animate={{
    rotate: [0, 15, -10, 12, -6, 0],
    scale: [1, 1, 1, 1, 1, 1], // prevents size change
  }}
  transition={{
    duration: 1.4,
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay: 3,
  }}
/>

  <span>Hello there !</span>
</motion.div>




        {/* Headline (Animated words) */}
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-zinc-800 text-center leading-[1.05] sm:leading-tight">
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="block sm:inline"
  >
    We Are
  </motion.span>

  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="block sm:inline sm:ml-2"
  >
    Sammobadi
  </motion.span>
</h1>


        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-4 text-sm sm:text-lg md:text-xl text-gray-600 tracking-wide font-poppins"
        >
          {tagline}
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-5 text-sm sm:text-base md:text-lg font-poppins text-gray-500 max-w-2xl mx-auto leading-relaxed px-2"
        >
          {subtext}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="mt-8"
        >
          <div className="text-center">
           <UniversalButton text="Explore" href="#services" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


