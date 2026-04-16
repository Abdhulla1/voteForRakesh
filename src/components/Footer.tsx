import tvk from "@/assets/tvk.png";
import { useLang } from "@/lib/LanguageContext";

const footerTranslations = {
  en: {
    quickLinks: "Quick Links",
    home: "Home",
    name: "Mr. K. Rakesh",
    about: "About",
    promises: "Promises",
    contact: "Contact",
    description:
      "A dedicated leader committed to the development of the people of Harur.",

    copyright:
      "© 2026 Abdhulla - TVK Harur Constituency | All rights reserved",
  },
  ta: {
    quickLinks: "விரைவு இணைப்புகள்",
    home: "முகப்பு",
    name: " திரு. K. ராகேஷ்",
    about: "அறிமுகம்",
    promises: "வாக்குறுதிகள்",
    contact: "தொடர்பு",
    description:
      "அரூர் மக்களின் முன்னேற்றத்திற்காக அர்ப்பணிப்புடன் செயல்படும் தலைவர்.",
   
    copyright:
      "© 2026 அப்துல்லா - TVK அரூர் சட்டமன்றத் தொகுதி | அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
  },
};
export default function Footer() {
   const { lang } = useLang();

  const t = footerTranslations[lang];

    const handleScroll = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
};
  return (
    <footer className="bg-[#0f0000] text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 ">
        <img src={tvk} alt="Tvk " className="h-[90px] w-fit" />

        <div className="flex justify-start flex-wrap md:flex-nowrap md:justify-center items-start gap-8">
          <div className="w-fit ">
            <h4 className="text-gold font-semibold mb-3 text-nowrap">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <button onClick={()=>handleScroll("#home")}  className="hover:text-gold">
                  {t.home}
                </button>
              </li>
              <li>
                <button onClick={()=>handleScroll("#about")}  className="hover:text-gold">
                  {t.about}
                </button>
              </li>
              <li>
                <button onClick={()=>handleScroll("#promises")}  className="hover:text-gold">
                  {t.promises}
                </button>
              </li>
              <li>
                <button onClick={()=>handleScroll("#contact")}  className="hover:text-gold">
                  {t.contact}
                </button>
              </li>
            </ul>
          </div>

          <div className="w-fit ">
            <h3 className="text-xl font-bold text-gold mb-3">
              {t.name}
            </h3>
            <p className="text-white/60 text-sm max-w-[300px]">
              {t.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gold/20 pt-6 text-center text-sm text-white/40">
        {t.copyright}
      </div>
    </footer>
  );
}
