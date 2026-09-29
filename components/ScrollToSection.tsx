"use client";

import { useEffect } from "react";

export default function ScrollToSection({ id }: { id: string }) {
  useEffect(() => {
    const scrollToSection = () => {
      const section = document.getElementById(id);
      if (!section) return;
      section.scrollIntoView({ behavior: "auto", block: "start" });
    };

    scrollToSection();
    const frame = requestAnimationFrame(scrollToSection);
    return () => cancelAnimationFrame(frame);
  }, [id]);

  return null;
}
