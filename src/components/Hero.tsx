import React from "react";
import TvkFamily from "@/assets/crowd.webp";
import Whistle from "@/assets/tvk-whistle.webp";
import leaders from "@/assets/leaders.png";
import candidate from "@/assets/candidate-rakesh.png";
import Vijay from "@/assets/tvk-chief-vijay.png";
import { useLang } from "@/lib/LanguageContext";
import { ChevronDownCircle } from "lucide-react";
const heroTranslations = {
  en: {
    slogan: "All lives are equal by birth!",
    election: "Legislative Election 2026",
    constituency: "Harur Constituency",
    title1: "Our",
    highlight: "Time",
    title2: "is Coming!",
    tagline:
      "Join the journey towards a prosperous Tamil Nadu, healthy people, and a secure future. Vote for the Whistle symbol.",
    candidateLabel: "Our Winning Candidate",
    candidate: "Mr. K. Rakesh Kalaivanan",
    role: "District Deputy Secretary",
    cta: "View Our Promises",
  },
  ta: {
    slogan: "பிறப்பொக்கும் எல்லா உயிர்க்கும்!",
    election: "சட்டமன்றத் தேர்தல் 2026",
    constituency: "அரூர் சட்டமன்றத் தொகுதி",
    title1: "நம்",
    highlight: "காலம்",
    title2: "வருகிறது!",
    tagline:
      " வளமான தமிழகம், நலமான மக்கள், பாதுகாப்பான எதிர்காலம் என்ற பயணத்தில் பங்கேற்று, விசில் சின்னத்திற்கு வாக்களியுங்கள்.",
    candidateLabel: "நமது வெற்றி வேட்பாளர்",
    candidate: "திரு. K. ராகேஷ் கலைவாணன்",
    role: "மாவட்ட துணைச்செயலாளர்",
    cta: "எங்கள் வாக்குறுதிகளை பார்க்க",
  },
};
export default function Hero() {
  const { lang } = useLang();
  const t = heroTranslations[lang];
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div
      id="#home"
      className="relative w-full min-h-[45rem] flex flex-col items-center justify-start text-gold overflow-hidden pt-28 pb-5 px-4"
      // style={{
      //   backgroundImage: `
      //     radial-gradient(circle at 70% 40%, rgba(255,0,0,0.5) 0%, rgba(120,0,0,0.9) 60%, rgba(40,0,0,1) 100%),
      //     url(${TvkFamily})
      //   `,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* ✅ Background image (separate layer) */}
      <div className="absolute inset-0 z-0">
        <img
          src={TvkFamily}
          alt="Crowd"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ✅ Gradient overlay (separate layer) */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_70%_40%,rgba(255,0,0,0.5)_0%,rgba(120,0,0,0.9)_60%,rgba(40,0,0,1)_100%)]" />

      <div className="relative w-full z-20  flex flex-col items-center">
        <div className="flex flex-col justify-center items-center mb-10">
          <span className="text-[10px] leading-none text-white font-bold mb-2">
            {t.slogan}
          </span>
          <img src={leaders} alt="Political Leaders" className="h-14  " />
        </div>

        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1 mb-4">
              <div className="size-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-gold text-sm font-semibold">
                {t.election}
              </span>
            </div>

            {/* Constituency */}
            <div className="text-white text-sm font-semibold  tracking-widest">
              {t.constituency}
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
              {t.title1}{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent   ">
                {t.highlight}
              </span>
            </h1>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
              {t.title2}
            </h1>

            {/* Tagline */}
            <p className="text-white font-semibold mt-4 max-w-md leading-relaxed d">
              {t.tagline}
            </p>
            <button
              onClick={() => handleScroll("#promises")}
              className="px-6 py-3 mx-auto md:mx-0 mt-3 rounded-md border-2 flex justify-center items-center gap-2 border-gold text-gold font-semibold 
  hover:bg-gold hover:text-primary transition duration-300 hover:shadow-[4px_4px_10px_rgba(255,215,0,0.3)]"
            >
              <ChevronDownCircle size={18} /> {t.cta}
            </button>
          </div>

          <div className="flex-col items-center flex justify-center relative">
            <div className=" h-[460px] w-fit overflow-hidden">
              <img
                src={candidate}
                alt="Candidate Rakesh"
                className="object-cover w-full h-full  drop-shadow-[10px_10px_10px_rgba(0,0,0,0.5)]
    [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
              />
            </div>
            <img
              src={Vijay}
              alt="Candidate Rakesh"
              className="absolute bottom-20 right-0 object-cover w-44 h-48  drop-shadow-[10px_10px_10px_rgba(0,0,0,0.5)]
  "
            />
            <div className="absolute w-full h-24 rounded-sm flex flex-col justify-center items-center bottom-0">
              <div className="relative bg-primary shadow-[10px_10px_10px_rgba(0,0,0,0.5)] w-full h-24  p-4 flex flex-col justify-center items-center">
                <div className=" absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 w-fit h-fit px-3 py-1 mx-auto -top-3 rounded-xl shadow-[10px_10px_10px_rgba(0,0,0,0.5)] text-primary font-extrabold text-center text-sm">
                  {t.candidateLabel}
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  {t.candidate}
                </h3>
                <p className="text-sm font-bold text-white mt-1">
                  {/* மாவட்ட துணைச்செயலாளர் */}
                  {t.role}
                </p>

                <div className="absolute bottom-1 h-[2px] bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600  w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
