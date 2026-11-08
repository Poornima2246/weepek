// src/Context/ContactModalContext.jsx
import { createContext, useContext, useState, useCallback } from "react";

const ContactModalContext = createContext(null);

export function ContactModalProvider({ children }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // ✅ NEW — with debug logs
  const openContact = useCallback(() => {
    console.log("✅ openContact called");
    setIsContactOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    console.log("❌ closeContact called");
    setIsContactOpen(false);
  }, []);

  // log every state change
  console.log("🔵 Provider render — isContactOpen:", isContactOpen);

  return (
    <ContactModalContext.Provider
      value={{ isContactOpen, openContact, closeContact }}
    >
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used inside ContactModalProvider");
  }
  return ctx;
}