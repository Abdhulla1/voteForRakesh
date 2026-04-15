import React, { useState, useEffect } from "react";
import TvkWhistle from "@/assets/tvk-whistle.webp";
import { Moon, Sun, Globe } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const NavBar = React.memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
const { lang, toggleLang } = useLang();
  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

 const navTranslations = {
    en: {
      home: "Home",
      promises: "Promises",
      about: "About",
      contact: "Contact",
    },
    ta: {
      home: "முகப்பு",
      promises: "வாக்குறுதிகள்",
      about: "எங்களை பற்றி",
      contact: "தொடர்பு",
    },
  };
  const t = navTranslations[lang];
  console.log("Current language:", lang);
  const links = [
    { href: "#home", label: t.home },
    { href: "#promises", label: t.promises },
    { href: "#about", label: t.about },
    { href: "#contact", label: t.contact },
  ];
  const handleScroll = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
};

  return (
    <nav className="px-6 md:px-24 p-3 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b-4 border-gold  font-sans">
      <div className="container  mx-auto px-4 flex items-center justify-between h-16">
        <button onClick={()=> handleScroll('#home')} className="flex items-center gap-2">
          <img src={TvkWhistle} alt="TVK Whislet Logo" className="h-14" />
        </button>

        {/* Desktop links */}
        <div className="hidden text-slate-50 md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={()=> handleScroll(l.href)}
              className="text-md font-bold text-foreground/70 active:text-gold hover:text-gold transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gold  text-xs font-semibold transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "ta" ? "EN" : "தமிழ்"}
          </button>
          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary text-gold transition-colors"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button> */}

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  stroke='white'
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  stroke='white'
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
<div className="md:hidden absolute right-5 px-4 pb-4 border border-gold/20 rounded-2xl bg-white/10 backdrop-blur-lg">          {links.map((l) => (
            <button
              key={l.href}
               onClick={()=>{ handleScroll(l.href);setMenuOpen(false)}}

              className="block py-2 text-sm font-medium text-white hover:text-gold font-bold transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
});
export default NavBar;
