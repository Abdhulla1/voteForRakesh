import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { useLang } from "@/lib/LanguageContext";

  const countdownTranslations = {
  en: {
    title:
      "Decide today for a better future.",
    highlight: "Vote for the Whistle symbol!",
    date: "Voting Day — April 23, 2026",
    heading: "Time for Change",
    labels: ["Days", "Hours", "Minutes", "Seconds"],
  },
  ta: {
    title:
      "நல்ல எதிர்காலத்திற்காக இன்று முடிவு செய்யுங்கள்.",
    highlight: "விசில் சின்னத்திற்கு வாக்களியுங்கள்!",
    date: "வாக்குப்பதிவு நாள் — ஏப்ரல் 23, 2026",
    heading: "மாற்றத்தின் நேரம்",
    labels: ["நாட்கள்", "மணி", "நிமிடம்", "விநாடி"],
  },
};
export default function ElectionCountdown() {
  const { lang } = useLang();
const t = countdownTranslations[lang];

  return (
    <div className="text-center  p-3 max-w-7xl flex flex-col md:flex-row justify-between gap-6 items-center w-full mx-auto">
     
        <h2 className="text-xl md:text-2xl font-bold text-white max-w-2xl mx-auto ">
          {t.title}
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent ">
            {t.highlight}
          </span>
          <p className="text-white/90 text-sm">
            {t.date}
          </p>
        </h2>

        <div className="flex flex-col justify-center ">
          <p className="text-gold font-bold text-xs tracking-widest mb-2 text-center">
            {t.heading}
            <span className="block mx-auto mt-1 h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent"></span>
          </p>
          <FlipClockCountdown
            to={new Date("2026-04-23T00:00:00").getTime()}
            labels={t.labels}
            labelStyle={{
              fontSize: "12px",
              color: "#ffff",
              fontWeight: "bold",
            }}
            digitBlockStyle={{
              width: 35,
              height: 55,
              fontSize: 30,
              fontWeight: "bold",
              color: "#ffff",
           
            }}
            dividerStyle={{ color: "rgba(255, 215, 0, 0.5)" }}
            separatorStyle={{ color: "#FFD700" }}
            duration={0.6}
          />
        </div>
      
    </div>
  );
}
