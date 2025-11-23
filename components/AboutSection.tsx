"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


/* -------------------------------
   Animated Counter Component
-------------------------------- */
const Counter = ({ value, duration = 1200 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = 16; // ~60fps
    const increment = value / (duration / step);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        start = value;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, step);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <>{count}</>;
};

/* -------------------------------
   Stat Card Component
-------------------------------- */
export const StatCard = ({
  num,
  label,
  showPlus = true,   //  NEW PROP
  className = "",
}: {
  num: number;
  label: string;
  showPlus?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`bg-[#EFF3FF] p-2 md:p-6 rounded-xl flex flex-col justify-center ${className}`}
    >
      <h3 className="text-3xl font-bold text-gray-800">
        <Counter value={num} />
        {showPlus && "+"}   {/*  Only show plus when true */}
      </h3>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
};

/* -------------------------------
   MAIN SECTION
-------------------------------- */
export default function AboutSection() {
  return (
    <section className="relative py-6 md:py-10 bg-white text-gray-900 overflow-hidden" id="about">

      {/* Background */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70"></div>
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: "url('/textures/noise.png')",
            backgroundSize: "400px",
            backgroundRepeat: "repeat",
          }}
        />
      </div> */}
          <div className="max-w-5xl mx-auto px-6 text-center">
              {/* Section Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-3xl font-host md:text-4xl  host-extrabold mb-4"
              >
                Crafted From Vision
              </motion.h2>
      
              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16 font-poppins">
                An evolving journey of ideas, artistry, and the relentless pursuit of impactful digital experiences.
              </p>
            </div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto px-6 py-5 flex flex-col lg:flex-row items-center gap-16 lg:gap-20 font-poppins">
        

        {/* LEFT COLUMN — TEXT + STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ">
           <span className="leading-tight"> We are <span className="text-blue-600">Sammobadi</span></span>
            <br />
            <span className="text-xl sm:text-2xl md:text-4xl font-semibold leading-none">
              a team of creative builders shaping bold digital experiences.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0">
         We’re a small studio blending design and technology to craft tools, brands, and experiences that inspire. From icons to color systems, from plugins to full platforms — every creation reflects our belief in clarity, emotion, and craft.
          </p>

{/* ---- RESPONSIVE STATS LAYOUT ---- */}
{/* Desktop Layout (EXACT like your design) */}
{/* ---- RESPONSIVE STATS LAYOUT ---- */}
{/* Desktop Layout (EXACT like your design) */}
<div className="hidden md:flex flex-col gap-3">

  {/* Row 1 */}
  <div className="flex gap-3">
    <StatCard
      num={81}
      label="Project numbers"
      className="w-[330px] h-[90px]"
    />
    <StatCard
      num={6}
      label="Years of Experience"
      className="w-[200px] h-[90px]"
    />
  </div>

  {/* Row 2 */}
  <div className="flex gap-3">
    <StatCard
      num={4}
      label="Core Products"
      className="w-[200px] h-[90px]"
      showPlus={false} 
    />
    <StatCard
      num={37}
      label="Clients & collaborations"
      className="w-[330px] h-[90px]"
    />
  </div>

</div>


{/* Mobile Layout (2 equal columns) */}
<div className="grid grid-cols-2 gap-4 md:hidden">

  <StatCard num={81} label="Project numbers" />
  <StatCard num={6} label="Years of Experience" />
  <StatCard num={4} label="Core Products" />
  <StatCard num={37} label="Clients & collaborations" />

</div>


        </motion.div>

        {/* RIGHT COLUMN — VIDEO */}
       <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
  className="flex-1 w-full flex justify-center"
>
  <div className="relative w-full max-w-sm sm:max-w-md overflow-hidden">
    <video
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="none"          // 🚀 prevents heavy load on page start
      poster="/about/about.png"  // ⭐ add your poster image
    >
      {/* 👇 Responsive sources for faster loading */}
      <source src="/about/about-480.webm" type="video/webm" media="(max-width: 600px)" />
      <source src="/about/about-720.webm" type="video/webm" media="(max-width: 1200px)" />
      <source src="/about/about.webm" type="video/webm" />
    </video>
  </div>
</motion.div>


      </div>

      {/* Faded BACKGROUND TEXT */}
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] 
        font-black tracking-tight text-gray-900/10 bottom-4 right-4 select-none leading-none"
      >
        ABOUT
      </motion.h1>
    </section>
  );
}
