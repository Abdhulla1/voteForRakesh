import candidate from "@/assets/candidate-rakesh-tvk.webp";
import { useLang } from "@/lib/LanguageContext";

const aboutTranslations = {
  en: {
    label: "Candidate Profile",
    namePrefix: "Mr.",
    name: "K. Rakesh",
    role: "M.Sc (Agri) • District Deputy Secretary",
    description:
      "A dedicated leader committed to the development of the people of Harur. Focused on improving education, employment, agriculture, and basic infrastructure.",
    serviceTitle: "Public Service",
    serviceDesc:
      "Approach focused on understanding and addressing people's needs directly.",
    integrityTitle: "Integrity",
    integrityDesc:
      "Transparent and honest governance.",
    cta: "Vote for the Whistle Symbol",
  },
  ta: {
    label: "வேட்பாளர் அறிமுகம்",
    namePrefix: "திரு.",
    name: "K. ராகேஷ்",
    role: "M.SC.(Agri) • மாவட்ட துணைச்செயலாளர்",
    description:
      "அரூர் மக்களின் முன்னேற்றத்திற்காக அர்ப்பணிப்புடன் செயல்படும் தலைவர். கல்வி, வேலைவாய்ப்பு, விவசாயம் மற்றும் அடிப்படை வசதிகளை மேம்படுத்த உறுதியாக செயல்படுபவர்.",
    serviceTitle: "மக்கள் சேவை",
    serviceDesc:
      "மக்களின் தேவைகளை நேரடியாக அறிந்து செயல்படும் அணுகுமுறை",
    integrityTitle: "நேர்மை",
    integrityDesc:
      "வெளிப்படையான மற்றும் நேர்மையான நிர்வாகம்",
    cta: "விசில் சின்னத்திற்கு வாக்களியுங்கள்",
  },
};
export default function AboutCandidate() {
  const { lang } = useLang();
const t = aboutTranslations[lang];
  return (
    <section id="#about" className="relative py-24 px-4 bg-[#1a0000] text-white overflow-hidden  scroll-m-18">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.08),transparent_60%)]"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="relative flex justify-center">
          <div className="absolute bottom-0 w-64 h-64 bg-gold/20 blur-3xl rounded-full"></div>

          <div className=" h-[480px] w-fit overflow-hidden">
            <img
              src={candidate}
              alt="Candidate Rakesh"
              className="object-cover w-full h-full  drop-shadow-[10px_10px_10px_rgba(0,0,0,0.5)]
    [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]"
            />
          </div>
        </div>

        <div >
          <p className="text-gold text-sm font-bold tracking-widest mb-3 text-start w-fit">
            {t.label}
            <span className="block mx-auto  mt-1 h-[2px] w-36 bg-gradient-to-r from-transparent via-gold to-transparent"></span>
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            {t.namePrefix}{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              {t.name}
            </span>
          </h2>

          <p className="text-white mb-6">{t.role}</p>

          <p className="text-white leading-relaxed mb-6">
            {t.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 border border-gold/20 rounded-lg p-2 md:p-4">
              <p className="text-gold font-semibold flex items-center gap-2">
                🤝 {t.serviceTitle}
              </p>
              <p className="text-xs text-white/70 mt-1">
                {t.serviceDesc}
              </p>
            </div>

            <div className="bg-white/5 border border-gold/20 rounded-lg p-2 md:p-4">
              <p className="text-gold font-semibold flex items-center gap-2">
                🛡️ {t.integrityTitle}
              </p>
              <p className="text-xs text-white/70 mt-1">
                {t.integrityDesc}
              </p>
            </div>
          </div>
          
          <button className="bg-gold text-black px-3 md:px-6 py-3 rounded-md font-semibold shadow hover:scale-105 transition">
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
