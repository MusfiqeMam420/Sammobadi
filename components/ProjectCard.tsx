"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ project, tall = false }: { project: any; tall?: boolean }) {
  const isDisabled = !!project.comingSoon;

  return  (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onClick={() => {
        if (!project.comingSoon) window.open(project.link, "_blank");
      }}
      className={`
        relative group cursor-pointer rounded-3xl border-white
        shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300
        border-[6px] overflow-hidden
        ${tall ? "md:h-[420px]" : "md:h-[320px]"}
        ${project.comingSoon ? "opacity-90" : ""}
      `}
    >



      {/* Coming Soon Badge */}
      {project.comingSoon && (
        <span
          className="
            absolute bottom-3 right-4
            bg-red-600 text-white text-xs font-semibold
            px-4 py-2 rounded-full shadow-md z-30
          "
        >
          Coming soon
        </span>
      )}
{/* -------- FADED GRADIENT ONLY FOR TOP -------- */}
{!project.transparentGradient && (
  <div
    className="absolute left-0 top-0 w-full h-[160px] pointer-events-none"
    style={{
      background: project.gradient,
      maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
    }}
  />
)}

      {/* HEADER SECTION */}
      <div className="p-6 relative z-20">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-zinc-700 transition">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm">{project.subtitle}</p>
          </div>

          {project.logo && (
            <img src={project.logo} alt="" className="w-7 h-7 opacity-90" />
          )}
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags?.map((tag: any, i: number) => {
            const disabled = project.comingSoon;

            return (
              <a
                key={i}
                href={disabled ? undefined : tag.url ?? project.link}
                target="_blank"
                onClick={(e) => {
                  if (disabled) e.preventDefault(); // Disable click
                  e.stopPropagation();
                }}
                className={`
                  px-3 py-1 text-xs font-medium rounded-full border transition
                  ${
                    disabled
                      ? "bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed pointer-events-none"
                      : "bg-white/70 text-gray-800 border-gray-300 hover:bg-white cursor-pointer"
                  }
                `}
              >
                {tag.label}
              </a>
            );
          })}
        </div>
      </div>

     {/* ------------------------------
        BOTTOM PREVIEW IMAGE (only if bgCover = false)
      ------------------------------ */}
      {/* PROJECT IMAGE */}
{project.bgCover ? (
  // FULL COVER MODE
  <div className="absolute inset-0 z-0">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
    />
  </div>
) : (
  // NORMAL 60% PREVIEW MODE
  <div
    className={`relative w-full rounded-b-3xl overflow-hidden ${
      tall ? "h-[300px]" : "h-[280px]"
    }`}
  >
    <img
      src={project.image}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover"
    />
  </div>
)}

    </motion.div>
  );
}
