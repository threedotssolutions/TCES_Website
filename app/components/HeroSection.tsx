import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#D94F04] via-[#DE5B0B] to-[#122A53] min-h-[580px] lg:min-h-[618px] flex  text-white"
          style={{backgroundImage: "url('/HeroImg.png')", backgroundSize: "100% 100%", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}

    >
      {/* Background Graphic: Sunset Sky, Ocean Waves & Spice Cargo Ship */}
     

      {/* Hero Left Content Overlay */}
      <div className=" w-full h-full px-20 py-8">
        <div className="max-w-2xl">
          {/* Pill Badge */}
          <div className="font-poppins inline-flex items-center gap-2 bg-white/95 text-[#FD7001] text-xs font-semibold px-4 py-1.5 rounded-l-full shadow-sm mb-6 backdrop-blur-sm">
           # From Farmers to the World
          </div>

          {/* Main Headline */}
          <h1 className="font-fahkwang text-3xl sm:text-4xl lg:text-[46px] font-bold text-white leading-[1.18] tracking-tight mb-6 drop-shadow-sm">
            Premium Indian Spices,
            <br />
            Sourced with Care,
            <br />
            Delivered Worldwide.
          </h1>

          {/* Descriptive Copy */}
          <div className="space-y-3 text-white/95 text-xs sm:text-sm lg:text-[14px] leading-relaxed max-w-xl font-normal drop-shadow-sm pr-30">
            <p className="font-poppins">
From the farms and growing regions of India to buyers across international markets, TCES Exports connects businesses with carefully sourced Indian spices and agricultural products.            </p>
            <p className="font-poppins pr-10">
We focus on what matters to every buyer, consistent quality, clear communication, reliable supply and export-ready service.            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#products"
              className="font-poppins inline-flex items-center justify-center bg-[#001B47] hover:bg-black text-white text-xs sm:text-sm font-semibold px-7 py-3 rounded-full shadow-lg transition-all transform active:scale-95"
            >
              Request a Quote
            </Link>
            <Link
              href="#products"
              className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-[#07162C] text-xs sm:text-sm font-semibold px-7 py-3 rounded-full shadow-lg transition-all transform active:scale-95"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
