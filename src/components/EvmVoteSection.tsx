import { motion } from "framer-motion";
import Whistle from "@/assets/Whistle.png";
import candiatePassportImg from "@/assets/candiatePassportImg.jpeg";
import whisteWithThalapathy from "@/assets/whisteWithThalapathy.png";
import { useLang } from "@/lib/LanguageContext";
const voteTranslations = {
  en: {
    label: "Your Vote, Your Power",
    title: "The Moment That Decides Harur’s Future!",
    highlight: "Vote for the Whistle Symbol",
    desc: `
This election is a crucial moment for the future of Harur. 
Your single vote has the power to create real change. 
Choose the Whistle symbol on Row No. 9 and support 
a vision of growth, transparency, and development.
  `,
    punch: "This time, choose the right future!",
    row: "Press Button on Row No. 9",
  },
  ta: {
    label: "உங்கள் வாக்கு உங்கள் சக்தி",
    title: "அரூரின் எதிர்காலத்தை தீர்மானிக்கும் தருணம்!",
    highlight: "விசில் சின்னத்திற்கு வாக்களியுங்கள்",
    desc: `
அரூரின் முன்னேற்றத்திற்கான இந்த தேர்தல் ஒரு முக்கியமான தருணம். 
உங்கள் ஒரு வாக்கு மாற்றத்தை உருவாக்கும் சக்தி கொண்டது. 
9-ஆம் எண்ணில் உள்ள விசில் சின்னத்தை தேர்வு செய்து, 
நல்ல நிர்வாகத்திற்கும் வளர்ச்சிக்கும் உங்கள் ஆதரவை பதிவு செய்யுங்கள்.
  `,
    punch: "இந்த முறை சரியான தேர்வு செய்யுங்கள்!",
    row: "9-ஆம் எண்ணில் உள்ள பொத்தானை அழுத்துங்கள்",
  },
};
export default function EvmVoteSection() {
  const { lang } = useLang();
  const t = voteTranslations[lang];
  const candidates = [
    "வேட்பாளர் 1",
    "வேட்பாளர் 2",
    "வேட்பாளர் 3",
    "வேட்பாளர் 4",
    "வேட்பாளர் 5",
    "வேட்பாளர் 6",
    "வேட்பாளர் 7",
    "வேட்பாளர் 8",
    "ராகேஷ். க ", 
    "வேட்பாளர் 10",
    "வேட்பாளர் 11",
    "வேட்பாளர் 12",
  ];

  return (
    <section
      className="relative py-2 px-4 bg-gradient-to-b from-[#1a0000] to-[#2b0000] text-white overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 70% 40%, rgba(255,0,0,0.5) 0%, rgba(120,0,0,) 0%, rgba(40,0,0,1) 100%)
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* leftside */}
        <div className=" relative max-w-md  flex justify-center items-center">
          <div className="bg-white border-2 shadow-2xl shadow-white/40 border-blue-600  shadow-inner w-full p-4 rounded-lg mx-auto mb-12 scale-78">
            {candidates.map((name, index) => {
              const isActive = index === 8; // row 9

              return (
                <div
                  key={index}
                  className={`flex items-center mx-auto w-full text-primary justify-between px-3 py-1 mb-2 rounded-lg border ${
                    isActive
                      ? "bg-white border-gold border-2 shadow-lg shadow-yellow-400/50"
                      : "bg-white  border-gray-300 blur-[1.5px]"
                  }`}
                  // initial={{ opacity: 0, x: -30 }}
                  // whileInView={{ opacity: 1, x: 0 }}
                  // transition={{ delay: index * 0.05 }}
                >
                  <div className="flex justify-between items-center gap-4">
                    {/* Number */}
                    <div className="font-bold w-6">{index + 1}</div>

                    {/* Candidate Name */}
                    <div className=" text-left font-semibold text-xs w-fit">
                      {name}
                    </div>
                  </div>

                  <div className=" flex justify-start gap-2 items-center">
                    {isActive ? (
                      <img
                        src={candiatePassportImg}
                        alt="Whistle"
                        className="h-15 w-fit"
                      />
                    ) : (
                      <div className="h-10 w-12 bg-gray-200" />
                    )}
                    {/* Symbol */}
                    <div className="w-10 flex justify-center">
                      {isActive ? (
                        <img
                          src={Whistle}
                          alt="Whistle"
                          className="h-13 w-28 object-contain scale-x-125"
                        />
                      ) : (
                        <div className="h-8 w-28 bg-gray-200 rounded-md" />
                      )}
                    </div>

                    {/* Light */}
                    <div className="w-6 flex justify-center">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          isActive ? "bg-green-500 animate-pulse" : "bg-red-400"
                        }`}
                      />
                    </div>
                    {/* Button */}
                    {isActive ? (
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                        animate={{
                          boxShadow: [
                            "0 0 5px #3b82f6",
                            "0 0 20px #3b82f6",
                            "0 0 5px #3b82f6",
                          ],
                        }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-12 h-6 bg-blue-600 rounded-full cursor-pointer"
                      />
                    ) : (
                      <div
                        className={`w-12 h-6 rounded-full ${
                          isActive ? "bg-blue-600" : "bg-blue-400"
                        }`}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <img
            src={whisteWithThalapathy}
            className=" absolute bottom-4 left-1/2 transform h-86 -translate-x-1/6"
          />
        </div>

        <div className="text-center md:text-left">
          <p className="text-gold mx-auto md:mx-0 text-sm font-bold tracking-widest mb-3 w-fit">
            {t.label}
            <span className="block  mx-auto mt-1 h-[2px] w-40 bg-gradient-to-r from-transparent via-gold to-transparent"></span>
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            {t.title}
          </h2>

          <div className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-black font-bold px-6 py-3 rounded-lg inline-block mb-6 shadow-lg">
            {t.row}
          </div>

          <p className="text-gray-200 mx-auto md:mx-0  text-sm mb-6 leading-relaxed max-w-md">
            {t.desc}
          </p>

          <div className="relative pl-6 w-fit mx-auto md:mx-0 ">
            <span className="absolute left-0 top-0 text-3xl text-gold leading-none">
              “
            </span>
            <p className="text-white font-semibold text-sm italic">
              {t.punch}
              <span className="absolute -right-5 top-0 text-3xl text-gold leading-none">
                ”
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
