"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export const projects = [
  {
    id: 1,
    title: "Bangalicon",
    subtitle: "Icons for Designers & Developers",
    gradient: "linear-gradient(to bottom, #FFE8E8, #FEF2F2, white)",
    logo: "/projects/ban/logo.svg",
    image: "/projects/ban/bg.svg",
    link: "https://bangalicon.sammobadi.com/",
    transparentGradient: false,
    bgCover: false,

    tags: [
      { label: "Website", url: "https://bangalicon.sammobadi.com/" },
      { label: "Figma Plugin", url: "https://www.figma.com/community/plugin/1509149406843135161/bangalicon" },
      // { label: "CDN", url: "https://cdn.bangalicon.com" },
    ],
  },

{
  id: 2,
  title: "Rongin",
  subtitle: "Color Tool Suite",
  logo: "/projects/rg/logo-new.svg",
  image: "/projects/rg/bg-2.png",
  link: "https://rongin.com",
  gradient: "linear-gradient(to bottom, rgba(0,0,0,0) , rgba(0,0,0,0) , white)",
  comingSoon: true,
  transparentGradient: true,
  bgCover: true,

  tags: [
    { label: "Website", url: "" },
    { label: "Figma Plugin", url: "" },
    { label: "Extension", url: "" },
  ],
},


  {
    id: 3,
    title: "Illugie",
    subtitle: "Illustration for Designers & Developers",
    gradient: "linear-gradient(to bottom, #EBFFF2, #F5FFF8, white)",
    logo: "/projects/ig/logo.svg",
    image: "/projects/ig/bg.svg",
    link: "https://illugie.com",    
    comingSoon: true,
    bgCover: false,

    tags: [
      { label: "Website", url: "https://illugie.com" },
      { label: "Figma Plugin", url: "https://www.figma.com/community/plugin/xxxxx" },
    ],
  },

  {
    id: 4,
    title: "Respieck",
    subtitle: "Responsive Checker for Developers",
    gradient: "linear-gradient(to bottom, #E8ECFF, #EEF2FF, white)",
    logo: "/projects/rs/logo.svg",
    image: "/projects/rs/bg.png",
    link: "https://respieck.com",
    comingSoon: true,
    bgCover: false,

    tags: [
      { label: "Chrome Extension", url: "https://chromewebstore.google.com/detail/xxxxx" },
      { label: "Mozilla Extension", url: "https://addons.mozilla.org/en-US/firefox/addon/xxxxx" },
    ],
  },
];



export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-0 md:py-24  text-gray-900">
      <div className="max-w-6xl mx-auto px-6 font-poppins">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold font-host text-center md:text-4xl host-extrabold mb-4"
        >
          Our Creations
        </motion.h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Tools crafted for designers & developers — icons, illustrations, color tools, and browser utilities.
        </p>

        {/* GRID Layout (exact Behance-style) */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Row 1 */}
  <ProjectCard project={projects[0]} tall={false} />
  <ProjectCard project={projects[1]} tall={false} />

  {/* Row 2 – Tall full-width card */}
  <div className="md:col-span-2">
    <ProjectCard project={projects[2]} tall={true} />
  </div>

  {/* Row 3 – Short full-width card */}
  <div className="md:col-span-2">
    <ProjectCard project={projects[3]} tall={false} />
  </div>

</div>

      </div>
    </section>
  );
}
