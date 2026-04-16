import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaXTwitter,FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useLang } from "@/lib/LanguageContext";
const contactTranslations = {
  en: {
    label: "Contact",
    title1: "Get in",
    titleHighlight: "Touch",
    description:
      "Share your thoughts, questions, and support through our social media channels.",
    phone: "Call",
    instagram: "Instagram",
    twitter: "X (Twitter)",
    footer: "Your support means everything to us",
  },
  ta: {
    label: "தொடர்புக்கு",
    title1: "எங்களை",
    titleHighlight: "தொடர்புகொள்ளுங்கள்",
    description:
      "உங்கள் கருத்துகள், கேள்விகள் மற்றும் ஆதரவுகளை சமூக ஊடகங்கள் மூலம் பகிரலாம்.",
    phone: "அழைக்கவும்",
    instagram: "Instagram",
    twitter: "X (Twitter)",
    footer: "உங்கள் ஆதரவு எங்களுக்கு மிகவும் முக்கியம்",
  },
};
export default function ContactSection() {
  const { lang } = useLang();
  const t = contactTranslations[lang];

  return (
    <section id="#contact" className="py-20 px-4 bg-[#1a0000] text-white text-center  scroll-m-18">
      {/* Title */}
      <p className="text-gold text-sm font-bold tracking-widest mb-3">
        {t.label}
         <span className="block mx-auto  mt-1 h-[2px] w-20 bg-gradient-to-r from-transparent via-gold to-transparent"></span>
      </p>

      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        {t.title1}{" "}
        <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
          {t.titleHighlight}
        </span>
      </h2>

      {/* Description */}
      <p className="text-white/90 max-w-xl mx-auto mb-2">
        {t.description}
      </p>


   
  
{/* <div className="flex justify-center mt-6 mb-6">
  <a
    href="tel:+919876543210"
    className="flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600 
    text-black font-bold shadow-lg hover:scale-105 transition 
    shadow-[0_0_15px_rgba(255,215,0,0.5)]"
  >
    <FaPhoneAlt size={18} />
    {t.phone}
  </a>
</div> */}
<div className="flex justify-center mt-6 mb-6">
  <a
    href="https://whatsapp.com/channel/YOUR_CHANNEL_LINK"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600 
    text-black font-bold shadow-lg active:scale-95 transition 
    shadow-[0_0_15px_rgba(255,215,0,0.5)]"
  >
    <FaWhatsapp size={18} />
    Join Channel for Updates
  </a>
</div>

{/* 🌐 Social Icons (SECONDARY) */}
<div className="flex justify-center gap-4 flex-wrap">

  <a
    href="https://www.instagram.com/tvk_rk_harur/"
    target="_blank"
    className="group p-3 rounded-full bg-white/5 border border-gold/20 text-gold 
    hover:bg-gold hover:text-black transition"
  >
     <FaEnvelope size={18} />
    
  </a>
  <a
    href="https://www.instagram.com/tvk_rk_harur/"
    target="_blank"
    className="group p-3 rounded-full bg-white/5 border border-gold/20 text-gold 
    hover:bg-gold hover:text-black transition"
  >
    <FaInstagram size={18} className="group-hover:scale-110 transition" />
  </a>

  <a
    href="https://x.com/Tvk_rk_harur"
    target="_blank"
    className="group p-3 rounded-full bg-white/5 border border-gold/20 text-gold 
    hover:bg-gold hover:text-black transition"
  >
    <FaXTwitter size={18} className="group-hover:scale-110 transition" />
  </a>

  <a
    href="https://www.facebook.com/share/1Snzgb7Hc1/"
    className="group p-3 rounded-full bg-white/5 border border-gold/20 text-gold 
    hover:bg-gold hover:text-black transition"
  >
    <FaFacebook size={18} className="group-hover:scale-110 transition" />
  </a>

  <a
    href="https://chat.whatsapp.com/Gt2V8G73yHaFyWhYiHYrQt?mode=gi_t"
    target="_blank"
    className="group p-3 rounded-full bg-white/5 border border-gold/20 text-gold 
    hover:bg-green-500 hover:text-white transition"
  >
    <FaWhatsapp size={18} className="group-hover:scale-110 transition" />
  </a>

</div>

      <div className="flex items-center justify-center gap-2 mt-8">
        <span className="h-[1px] w-6 bg-white/50"></span>

        <span className="text-xs">★</span>

        <p className="text-white/80 text-nowrap text-xs font-bold tracking-widest">
          {t.footer}
        </p>

        <span className="text-white text-xs">★</span>

        <span className="h-[1px] w-6 bg-white/50"></span>
      </div>
    </section>
  );
}
