import React, { useState } from "react";
import TvkWhistle from "@/assets/tvk-whistle.webp";
import { Moon, Sun, Globe } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const NavBar = React.memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLang();

  const navTranslations = {
    en: {
      home: "Home",
      promises: "Promises",
      about: "About",
      contact: "Contact",
      join: "Join",
    },
    ta: {
      home: "முகப்பு",
      promises: "வாக்குறுதிகள்",
      about: "எங்களை பற்றி",
      contact: "தொடர்பு",
      join: "சேருங்கள்",
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
    <>
      <nav className="px-6 md:px-24 p-3 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b-4 border-gold  font-sans">
        <div className="container  mx-auto px-4 flex items-center justify-between h-16">
          <button
            onClick={() => handleScroll("#home")}
            className="flex items-center gap-2"
          >
            <img src={TvkWhistle} alt="TVK Whislet Logo" className="h-14" />
          </button>

          <div className="hidden text-slate-50 md:flex items-center gap-6">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleScroll(l.href)}
                className="text-md font-bold text-foreground/70 active:text-gold hover:text-gold transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="flex text-gold items-center gap-1 px-3 py-1.5 rounded-full bg-white/20 border border-gray-200  text-xs font-semibold active:scale-95 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === "ta" ? "EN" : "தமிழ்"}
            </button>
            <a
              href="https://tvk.family/"
              className="px-4 py-1 rounded-full shadow-xl shadow-gold/30  bg-gradient-to-r from-yellow-300 to-yellow-600 
    text-black text-sm font-bold shadow-md active:scale-95 transition"
            >
              {t.join}
            </a>

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
                    stroke="white"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    stroke="white"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden z-50  fixed top-16 right-4 h-fit w-fit px-5 py-3 pb-4 border border-gold/40 rounded-2xl bg-primary/60 backdrop-blur-lg ">
          {" "}
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => {
                handleScroll(l.href);
                setMenuOpen(false);
              }}
              className="block py-2 text-sm text-gold  font-bold transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
});
export default NavBar;
