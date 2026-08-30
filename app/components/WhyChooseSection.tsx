import React from "react";
import { FeatureIcon } from "./Icons";

export default function WhyChooseSection() {
  const features = [
    {
      type: "sourcing" as const,
      title: "Direct Sourcing",
      description:
"We work with trusted farmers, producer groups and sourcing partners across India."    },
    {
      type: "quality" as const,
      title: "Quality-Focused Selection",
      description:
"Products are checked against agreed specifications before supply."    },
    {
      type: "custom" as const,
      title: "Buyer-Specific Requirements",
      description:
"We can work with buyer requirements for specifications, quantities and packing"    },
    {
      type: "export" as const,
      title: "Export Support",
      description:
"We support documentation and shipment requirements, including FOB and CIF options."    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden ">
      <div className="max-w-7xl mx-auto  relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col gap-3">
          <h2 className="font-fahkwang text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="text-[#0B1E3B]">Why Buyers </span>
            <span className="text-[#FD7001]">Choose TCES</span>
          </h2>
          <p className="font-poppins text-[#011849] text-sm sm:text-base mt-2">
A Supplier Relationship Built on More Than a Price          </p>
          <p className="text-[#011849] text-xs sm:text-sm mt-1 max-w-2xl mx-auto">
International buyers need more than a product catalogue.
They need to know where the product comes from, how it is handled, what they are receiving and whether the supplier will communicate when it matters.          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 bg-[linear-gradient(to_bottom,transparent_0%,transparent_50%,#FD7001_50%,#FD7001_100%)] px-4 sm:px-6 lg:px-8 pb-15">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded p-6 sm:p-7 shadow-[0px_0px_76.2px_0px_#FFE1CA] transition-all duration-300 border border-slate-100 flex flex-col items-start text-left group hover:-translate-y-1"
            >
              <div className="mb-5 group-hover:scale-110 transition-transform">
                <FeatureIcon type={feature.type} />
              </div>
              <h3 className="text-[#011849] font-bold text-base sm:text-lg mb-2 group-hover:text-[#FD7001] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#011849] text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Vibrant Orange Glow Banner Underneath Cards */}
      
    </section>
  );
}
