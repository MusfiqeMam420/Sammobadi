"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UniversalButton from "@/components/UniversalButton";

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // animations
  const [closing, setClosing] = useState(false);

  // toast
  const [toast, setToast] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  // progress bar
  const [loading, setLoading] = useState(false);

  // form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    services: [] as string[],
    budget: "",
  });

  const [sent, setSent] = useState(false);

  // disable submit until required fields filled
  const isValid =
    formData.firstName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "" &&
    formData.budget.trim() !== "" &&
    formData.services.length > 0;

  // handle fade-out close
  const triggerClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 300);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      triggerClose();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData((prev) => ({ ...prev, budget }));
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!isValid) return;

  setLoading(true);

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

    setLoading(false);

    if (res.ok) {
      setSent(true);
      setToast({ type: "success", msg: "Message sent!" });

      setTimeout(() => triggerClose(), 1000);
    } else {
      setToast({ type: "error", msg: "Something went wrong. Try again." });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999]"
        initial={{ opacity: 0 }}
        animate={closing ? { opacity: 0 } : { opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleOverlayClick}
      >
        <motion.div
          key="modal"
          ref={modalRef}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={
            closing
              ? { opacity: 0, y: 20, scale: 0.96 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
            w-full max-w-2xl bg-white rounded-[24px] shadow-xl p-6 md:p-10 
            border border-gray-200 
            max-h-[90vh] overflow-hidden 
          "
        >
          {/* Close Button */}
          <button
            onClick={triggerClose}
            className="absolute right-4 top-4 text-zinc-600 hover:text-black text-3xl transition cursor-pointer"
          >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
</svg>

          </button>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-host">
            Tell us about your project
          </h2>

          {/* Scrollable FORM AREA */}
          <div className="overflow-y-auto max-h-[70vh] pr-2 pb-4 ">
            <form onSubmit={handleSubmit} id="contact-form" className="space-y-4 font-poppins">

              {/* Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full border border-gray-200 px-4 py-3 rounded-xl mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full border border-gray-200 px-4 py-3 rounded-xl mt-1"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="youremail@gmail.com"
                  className="w-full border border-gray-200 px-4 py-3 rounded-xl mt-1"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium">Project details</label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write a few words about your project..."
                  className="w-full border border-gray-200 px-4 py-3 rounded-xl mt-1"
                ></textarea>
              </div>

              {/* Services */}
              <div>
                <label className="text-sm font-medium">Services</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                  {[
                    "Branding",
                    "UI/UX Design",
                    "Animation",
                    "Development",
                    "Graphics & Illustration",
                    "Video & Content",
                    "Other",
                  ].map((service) => (
                    <button
                      type="button"
                      key={service}
                      onClick={() => toggleService(service)}
                      className={`px-3 py-2 rounded-lg text-sm border cursor-pointer ${
                        formData.services.includes(service)
                          ? "bg-[#171616] text-white"
                          : "border-gray-200"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="text-sm font-medium">Project Budget</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                  {[
                    "Less than $5K",
                    "$5K - $10K",
                    "$10K - $20K",
                    "$20K - $50K",
                    "More than $50K",
                  ].map((range) => (
                    <button
                      type="button"
                      key={range}
                      onClick={() => handleBudgetSelect(range)}
                      className={`px-3 py-2 rounded-lg text-sm border cursor-pointer ${
                        formData.budget === range
                          ? "bg-[#171616] text-white"
                          : "border-gray-200"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>

          {/* Submit button (UniversalButton) */}
          <div className="mt-6 relative">
            {loading && (
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2 }}
                className="absolute top-0 left-0 h-[3px] bg-blue-500 rounded-full mb-20"
              />
            )}
            <UniversalButton
              text={sent ? "Message Sent!" : "Send Message"}
              href="#"
              onClick={(e: any) => {
                e.preventDefault();
                document.getElementById("contact-form")?.dispatchEvent(
                  new Event("submit", { cancelable: true, bubbles: true })
                );
              }}
              variant="dark"
              animate
              disabled={!isValid || loading}
              className="mt-3"
            />
          </div>

          {/* Grass */}
          <video
  src="/contact/grass.webm"  // <-- your custom animation video
  autoPlay
  loop
  muted
  playsInline
  className="
    absolute bottom-0 right-0 
    w-32 
    opacity-95 
    pointer-events-none 
    select-none 
    object-contain
  "
/>

          {/* Toast */}
          
        </motion.div>
        <AnimatePresence>
            {toast && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className={`fixed top-10 left-1/2 -translate-x-1/2 px-4 py-3 rounded-xl text-white text-sm md:text-md shadow-xm font-host ${
                  toast.type === "success" ? "bg-zinc-800" : "bg-red-600"
                }`}
              >
                {toast.msg}
              </motion.div>
            )}
          </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}



