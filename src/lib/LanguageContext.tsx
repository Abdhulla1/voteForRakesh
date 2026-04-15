import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";


export type Lang = "en" | "ta";

// ✅ Context type
interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
 
}
const LanguageContext = createContext<LanguageContextType>({ lang: "ta", toggleLang: () => {} });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLangState] = useState<Lang>("ta");



   const toggleLang = () => {
    const newLang: Lang = lang === "en" ? "ta" : "en";
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };
  
  return <LanguageContext.Provider value={{ lang, toggleLang }}>{children}</LanguageContext.Provider>;
};

export const useLang = () => useContext(LanguageContext);
