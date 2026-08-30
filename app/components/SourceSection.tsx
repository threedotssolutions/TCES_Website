import React from "react";
import Link from "next/link";

export default function SourceSection() {
  return (
    <section id="about" className="relative py-4 bg-white overflow-hidden pb-22">
      {/* Decorative Star Anise in Top Left Corner */}
      <div className="absolute top-0 left-0 sm:top-0 sm:left-0 opacity-80 pointer-events-none z-index-0">
        <img src="/SourceImg.png" alt="" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-5 font-poppins pr-20">
            <h2 className="font-fahkwang text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.2]">
              <span className="text-[#FD7001]">From the Source</span>,
              <br />
              <span className="text-[#0B1E3B]">Not Just From the Market</span>
            </h2>

            <p className="text-slate-800 text-xs sm:text-sm font-medium leading-relaxed">
Great spices begin with where they are grown and how they are handled.            </p>

         
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>At
                <span className="text-[#FD7001] font-semibold"> TCES Exports (Transcontinental Export Services)</span>
, we work with trusted farmers, producer groups and sourcing partners across India to bring authentic Indian spices to international buyers.              </p>
              <p>
From sourcing and selection to processing, packing and shipment, we pay attention to the details that make a difference when a product travels from India to another part of the world.              </p>
              <p>
We are based in Chennai, Tamil Nadu, with a simple approach to international trade:              </p>
            </div>

            <p className="text-[#FD7001] font-semibold text-xs sm:text-sm pt-1">
Source honestly. Check carefully. Communicate clearly. Deliver reliably.            </p>

            <div className="pt-3">
              <Link
                href="#about"
                className="inline-flex items-center justify-center bg-[#FD7001] hover:bg-[#D84315] text-white text-xs sm:text-sm font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Showcase of Assorted Indian Spices */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Top Right Circular Quality Seal Badge */}
            <div className="absolute -top-5 -right-3 sm:-top-12 sm:-right-3 z-20">
              <img src="/premium-certified-quality-stamp 1.png" alt="" />
            </div>

            {/* Main Spices Visual Container */}
            <div className="relative w-full  max-w-lg rounded overflow-hidden">
              <img src="/SourceSpices.png" className="rounded" alt="" />
            </div>

            {/* Floating Black Peppercorns at Bottom Right */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:right-2 flex flex-col items-center gap-1 pointer-events-none">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-900 shadow-md border border-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800 shadow-md border border-slate-700 translate-y-1" />
              </div>
              <div className="flex gap-1.5 translate-x-2">
                <span className="w-2 h-2 rounded-full bg-slate-950 shadow-md" />
                <span className="w-3.5 h-3.5 rounded-full bg-slate-900 shadow-md border border-slate-700" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
