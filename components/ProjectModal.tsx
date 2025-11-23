"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({
  activeProject,
  onClose,
}: {
  activeProject: any;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {activeProject && (
        <>
          {/* Background Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Container */}
          <motion.div
            className="fixed top-1/2 left-1/2 w-[92%] md:w-[850px] max-h-[85vh] overflow-hidden 
            bg-white rounded-3xl shadow-2xl z-50 flex flex-col"
            initial={{ opacity: 0, scale: 0.9, y: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, y: "-50%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Header */}
            <div className="p-6 border-b flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {activeProject.title}
                </h2>
                <p className="text-gray-500 mt-1">{activeProject.subtitle}</p>

                {/* Tags */}
                <div className="flex gap-2 mt-3 flex-wrap">
                  {activeProject.tags?.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-700 border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Body Content */}
            <div className="overflow-y-auto p-6 space-y-4">
              {/* Video Preview */}
              {activeProject.video && (
                <video
                  src={activeProject.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-xl shadow"
                />
              )}

              {/* Description */}
              {activeProject.desc && (
                <p className="text-gray-700 leading-relaxed">
                  {activeProject.desc}
                </p>
              )}

              {/* Visit Website Button */}
              {activeProject.link && (
                <a
                  href={activeProject.link}
                  target="_blank"
                  className="inline-block px-6 py-3 mt-3 rounded-full bg-blue-600 text-white font-medium shadow
                  hover:bg-blue-500 transition"
                >
                  Visit Website →
                </a>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
