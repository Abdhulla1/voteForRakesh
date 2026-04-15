import React,{useEffect} from "react";

export default function Loader() {
  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = "hidden";

    return () => {
      // Enable scroll when loader unmounts
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center 
    bg-black/40 backdrop-blur-md">

      {/* Glass card */}
      <div className="flex flex-col items-center gap-6 
      px-8 py-6
     ">

        {/* Spinner */}
        <div className="relative w-38 h-38 p-2">
          <div className="absolute inset-0 rounded-full border-4 border-yellow-400/30"></div>
<img src="/favicon.png" alt="Logo" className=" w-full h-full" />
          <div className="absolute inset-0 rounded-full border-4 border-t-yellow-400 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        </div>       
      </div>
    </div>
  );
}