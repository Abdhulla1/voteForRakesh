import React, { useState } from "react";
import { Briefcase, Droplet, Road, Heart } from "lucide-react";

import { useLang } from "@/lib/LanguageContext";
const titleTranslations = {
  en: {
  title: "2026 Election Promises",
 headingTitle: "Key Promises",
  headingHighlight: "for the People of Harur Constituency",
},
ta: {
  title: "2026 தேர்தல் உறுதிமொழிகள்",
  headingTitle: "அரூர் சட்டமன்றத் தொகுதி மக்களுக்கான",
  headingHighlight: "முக்கிய வாக்குறுதிகள்",
}
  
  ,
};

// const promises = [
//   {
//     emoji: "🚆",
//     title: "போக்குவரத்து & ரயில் வசதி",
//     content:
//       "மொரப்பூர் ரயில் நிலையத்தில் சரக்கு ரயில்கள் நிற்கும் வசதி ஏற்படுத்தி, வேளாண்மை பொருட்கள் பிற மாநிலங்களுக்கு எளிதாக ஏற்றுமதி செய்யப்படும்.",
//   },
//   {
//     emoji: "🛣️",
//     title: "மலைப்பகுதி சாலை வசதி",
//     content:
//       "அரூர் தொகுதியில் உள்ள அனைத்து மலை கிராமங்களுக்கும் தரமான சாலை வசதிகள் அமைக்கப்படும்.",
//   },
//   {
//     emoji: "💼",
//     title: "வேலைவாய்ப்பு",
//     content:
//       "இளைஞர்களுக்கு உள்ளூரிலேயே வேலைவாய்ப்பு உருவாக்க சிறு தொழிற்சாலைகள் மற்றும் தொழிற்பயிற்சி மையங்கள் அமைக்கப்படும்.",
//   },
//   {
//     emoji: "💧",
//     title: "நீர் மேலாண்மை",
//     content:
//       "காவிரி நீரை பயன்படுத்தி ஏரிகள், குளங்கள் மற்றும் நீர்நிலைகள் நிரப்பப்பட்டு நீர்ப்பாசன வசதிகள் மேம்படுத்தப்படும்.",
//   },
// //   {
// //     emoji: "🏗️",
// //     title: "அணைகள் & நீர்ப்பாசனம்",
// //     content:
// //       "தென்பெண்ணையாறு மற்றும் பிற ஆறுகளில் தடுப்பணைகள் அமைத்து நீர்ப்பாசன வசதிகள் உறுதி செய்யப்படும்.",
// //   },
//   {
//     emoji: "🎓",
//     title: "கல்வி & பொருளாதாரம்",
//     content:
//       "கல்விக் கடன் சுமை குறைக்கப்படும் மற்றும் எரிபொருள் விலை குறைக்கும் நடவடிக்கைகள் மேற்கொள்ளப்படும்.",
//   },
//   {
//     emoji: "🏥",
//     title: "மருத்துவ வசதி",
//     content:
//       "அரூர் அரசு மருத்துவமனை சூப்பர் ஸ்பெஷாலிட்டி மருத்துவமனையாக மேம்படுத்தப்படும்.",
//   },
//   {
//     emoji: "🌾",
//     title: "வேளாண்மை & தொழில்",
//     content:
//       "விவசாய பொருட்கள் மதிப்பூட்டப்பட்ட பொருட்களாக மாற்றப்பட்டு ஏற்றுமதி செய்ய தொழிற்சாலைகள் உருவாக்கப்படும்.",
//   },
//   {
//     emoji: "⚖️",
//     title: "நீதிமன்றம்",
//     content:
//       "அரூரில் கூடுதல் மாவட்ட அமர்வு நீதிமன்றம் மற்றும் மகளிர் நீதிமன்றம் நிறுவப்படும்.",
//   },
//   {
//     emoji: "🏞️",
//     title: "சுற்றுலா மேம்பாடு",
//     content:
//       "தீர்த்தமலை மற்றும் சுற்றியுள்ள பகுதிகள் சுற்றுலா தலங்களாக மேம்படுத்தப்படும்.",
//   },
//   {
//     emoji: "🏡",
//     title: "அடிப்படை வசதிகள்",
//     content:
//       "சாலை வசதி இல்லாத பகுதிகளில் புதிய சாலைகள் அமைத்து அடிப்படை வசதிகள் உறுதி செய்யப்படும்.",
//   },
// ];



const promisesTranslations = {
  en: [
    {
      emoji: "🚆",
      title: "Transport & Rail",
      content:
        "Freight train facilities will be introduced at Morappur railway station to enable easy export of agricultural products.",
    },
    {
      emoji: "🛣️",
      title: "Hill Area Roads",
      content:
        "Quality road infrastructure will be developed for all hill villages in Harur constituency.",
    },
    {
      emoji: "💼",
      title: "Employment",
      content:
        "Local job opportunities will be created through small industries and skill training centers.",
    },
    {
      emoji: "💧",
      title: "Water Management",
      content:
        "Cauvery water will be utilized to fill lakes, ponds, and improve irrigation facilities.",
    },
    {
      emoji: "🎓",
      title: "Education & Economy",
      content:
        "Measures will be taken to reduce education loan burden and fuel prices.",
    },
    {
      emoji: "🏥",
      title: "Healthcare",
      content:
        "Harur Government Hospital will be upgraded into a super specialty hospital.",
    },
    {
      emoji: "🌾",
      title: "Agriculture & Industry",
      content:
        "Agricultural products will be processed into value-added goods and exported.",
    },
    {
      emoji: "⚖️",
      title: "Judiciary",
      content:
        "Additional district and women's courts will be established in Harur.",
    },
    {
      emoji: "🏞️",
      title: "Tourism",
      content:
        "Theerthamalai and surrounding areas will be developed as tourist destinations.",
    },
    {
      emoji: "🏡",
      title: "Basic Infrastructure",
      content:
        "New roads and essential infrastructure will be developed in underserved areas.",
    },
  ],

  ta: [
    {
      emoji: "🚆",
      title: "போக்குவரத்து & ரயில் வசதி",
      content:
        "மொரப்பூர் ரயில் நிலையத்தில் சரக்கு ரயில்கள் நிற்கும் வசதி ஏற்படுத்தி, வேளாண்மை பொருட்கள் பிற மாநிலங்களுக்கு எளிதாக ஏற்றுமதி செய்யப்படும்.",
    },
    {
      emoji: "🛣️",
      title: "மலைப்பகுதி சாலை வசதி",
      content:
        "அரூர் தொகுதியில் உள்ள அனைத்து மலை கிராமங்களுக்கும் தரமான சாலை வசதிகள் அமைக்கப்படும்.",
    },
    {
      emoji: "💼",
      title: "வேலைவாய்ப்பு",
      content:
        "இளைஞர்களுக்கு உள்ளூரிலேயே வேலைவாய்ப்பு உருவாக்க சிறு தொழிற்சாலைகள் மற்றும் தொழிற்பயிற்சி மையங்கள் அமைக்கப்படும்.",
    },
    {
      emoji: "💧",
      title: "நீர் மேலாண்மை",
      content:
        "காவிரி நீரை பயன்படுத்தி ஏரிகள், குளங்கள் மற்றும் நீர்நிலைகள் நிரப்பப்பட்டு நீர்ப்பாசன வசதிகள் மேம்படுத்தப்படும்.",
    },
    {
      emoji: "🎓",
      title: "கல்வி & பொருளாதாரம்",
      content:
        "கல்விக் கடன் சுமை குறைக்கப்படும் மற்றும் எரிபொருள் விலை குறைக்கும் நடவடிக்கைகள் மேற்கொள்ளப்படும்.",
    },
    {
      emoji: "🏥",
      title: "மருத்துவ வசதி",
      content:
        "அரூர் அரசு மருத்துவமனை சூப்பர் ஸ்பெஷாலிட்டி மருத்துவமனையாக மேம்படுத்தப்படும்.",
    },
    {
      emoji: "🌾",
      title: "வேளாண்மை & தொழில்",
      content:
        "விவசாய பொருட்கள் மதிப்பூட்டப்பட்ட பொருட்களாக மாற்றப்பட்டு ஏற்றுமதி செய்ய தொழிற்சாலைகள் உருவாக்கப்படும்.",
    },
    {
      emoji: "⚖️",
      title: "நீதிமன்றம்",
      content:
        "அரூரில் கூடுதல் மாவட்ட அமர்வு நீதிமன்றம் மற்றும் மகளிர் நீதிமன்றம் நிறுவப்படும்.",
    },
    {
      emoji: "🏞️",
      title: "சுற்றுலா மேம்பாடு",
      content:
        "தீர்த்தமலை மற்றும் சுற்றியுள்ள பகுதிகள் சுற்றுலா தலங்களாக மேம்படுத்தப்படும்.",
    },
    {
      emoji: "🏡",
      title: "அடிப்படை வசதிகள்",
      content:
        "சாலை வசதி இல்லாத பகுதிகளில் புதிய சாலைகள் அமைத்து அடிப்படை வசதிகள் உறுதி செய்யப்படும்.",
    },
  ],
};

export default function PromisesCards() {
  const { lang } = useLang();
const title = titleTranslations[lang];
const promises = promisesTranslations[lang];
  return (
    <section id="#promises" className="py-10 px-4 bg-primary text-white scroll-m-18">
      {/* Title */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-[1px] w-6 bg-gold/50"></span>

          <span className="text-gold text-xs">★</span>

          <p className="text-gold text-sm font-bold tracking-widest">
            {title.title}
          </p>

          <span className="text-gold text-xs">★</span>

          <span className="h-[1px] w-6 bg-gold/50"></span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold">
          {title.headingTitle}{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
            {title.headingHighlight}
          </span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {promises.map((item, i) => (
          <div
            key={i}
            className="group relative p-6 rounded-xl bg-white/5 backdrop-blur border border-gold/20 hover:border-gold transition duration-300 hover:-translate-y-2"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-gold/10 to-transparent rounded-xl transition"></div>

            {/* Emoji */}
            <div className="text-3xl mb-4">{item.emoji}</div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-2 text-gold">{item.title}</h3>

            {/* Content */}
            <p className="text-white/70 text-sm leading-relaxed">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
