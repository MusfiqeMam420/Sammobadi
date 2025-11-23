"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";

interface ServiceModalProps {
  activeService: any;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ activeService, onClose }) => {
  useEffect(() => {
    if (activeService) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeService]);

  if (!activeService) return null;

  return (
    <AnimatePresence>
      {activeService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md overflow-y-auto"
          onClick={onClose} // background click closes
        >
          {/* Fixed Close Button */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 z-[60] bg-white/70 backdrop-blur-md 
                       text-gray-800 hover:bg-white hover:text-blue-600 
                       transition rounded-full w-10 h-10 flex items-center 
                       justify-center font-bold text-xl"
          >
            ✕
          </button>

          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-white min-h-[100vh] rounded-t-3xl md:rounded-3xl 
                       shadow-2xl overflow-hidden w-[90%] max-w-[1400px] mx-auto my-20"
            onClick={(e) => e.stopPropagation()} // prevent close inside
          >
            {/* Sticky Video Header */}
            <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
              <video
                src={activeService.img}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain bg-gray-50 sticky top-0"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 -mt-10 bg-white rounded-t-3xl p-8 md:p-14">
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                {activeService.title}
              </h3>

              <p className="text-gray-600 text-lg max-w-4xl mb-14 leading-relaxed">
                {activeService.desc}
              </p>

              {/* Two-column layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                <div>
                  <h4 className="text-2xl font-semibold mb-3 text-gray-900">
                    Overview
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Our {activeService.title.toLowerCase()} process blends creativity,
                    strategy, and precision. We work closely with clients to turn
                    bold ideas into functional, emotional experiences.
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-3 text-gray-900">
                    Our Process
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    {activeService.details.map((step: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span> {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Highlight Block */}
              <div className="my-16">
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-12 shadow-sm">
                  <h4 className="text-2xl font-semibold mb-3 text-gray-900">
                    The Result
                  </h4>
                  <p className="text-gray-600 max-w-4xl leading-relaxed">
                    Every project is crafted to balance creativity and purpose — 
                    designed to perform, engage, and inspire across every touchpoint.
                  </p>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="border-t border-gray-200 pt-10 flex flex-col sm:flex-row 
                              justify-between items-start sm:items-center gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">
                    Let’s Create Together
                  </h4>
                  <p className="text-gray-600 text-sm max-w-sm">
                    Ready to bring your next big idea to life? Let’s collaborate
                    and make something extraordinary.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-10 py-4 
                             rounded-full font-semibold hover:bg-blue-500 transition"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
