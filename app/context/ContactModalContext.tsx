"use client";

import { createContext, useContext, useState } from "react";
import ContactModal from "@/components/ContactModal";

interface ContactModalContextValue {
  openContact: () => void;
  closeContact: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContact = () => setIsOpen(true);
  const closeContact = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ openContact, closeContact }}>
      {children}
      {isOpen && <ContactModal onClose={closeContact} />}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used inside ContactModalProvider");
  return ctx;
}
