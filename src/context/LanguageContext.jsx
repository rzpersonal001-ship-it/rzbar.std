import { createContext, useContext, useEffect, useState } from "react";
import i18n from "../i18n/index.js";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(i18n.language || "en");

  useEffect(() => {
    const handleLanguageChange = (lng) => setLang(lng);
    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  const toggleLanguage = (nextLang) => {
    const language = nextLang || (lang === "en" ? "id" : "en");
    i18n.changeLanguage(language);
    setLang(language);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
