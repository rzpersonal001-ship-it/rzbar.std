import { createContext, useContext, useState } from "react";

// Buat context
const LanguageContext = createContext();

// Provider (membungkus semua komponen agar bisa akses bahasa)
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLanguage = () => setLang((prev) => (prev === "en" ? "id" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook agar mudah digunakan
export const useLanguage = () => useContext(LanguageContext);
