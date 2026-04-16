
import { useState,useEffect } from "react";
import Flowers from "@/assets/flowers.png";
import ElectionCountdown from "./components/ElectionCountdown";
import PromisesSection from "./components/PromisesSection";
import AboutCandidate from "./components/AboutCandidate";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import { ChevronsUp } from "lucide-react";
import EvmVoteSection from "./components/EvmVoteSection";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 800) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
    {showScroll && (
    <div className="bg-gold text-primary size-12 rounded-full flex justify-center items-center p-2 fixed bottom-4 right-4 md:right-10 cursor-pointer z-50 shadow-md shadow-amber-300  transition animate-bounce" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>
      <ChevronsUp size={19}/>
    </div>)}
     <Hero/>
      {/* Countdown */}
      <div
        className="bg-secondry "
        style={{
          backgroundImage: `
      linear-gradient(135deg, #8b0000 0%, #3b0000 100%),
      url(${Flowers})
    `,
          backgroundBlendMode: "overlay",
        }}
      >
        <span className="block mx-auto  h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent"></span>

        <ElectionCountdown />
        <span className="block mx-auto  h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent"></span>
      </div>
        <EvmVoteSection/>
        <PromisesSection/>
        <AboutCandidate/>
        <ContactSection/>
    </>
  );
}
