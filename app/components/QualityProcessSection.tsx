import React from "react";

export default function QualityProcessSection() {
  const steps = [
    { title: "Quality", color: "peach" },
    { title: "Specifications", color: "blue" },
    { title: "Packing", color: "peach" },
    { title: "Documentation", color: "blue" },
    { title: "Shipment", color: "peach" },
  ];

  return (
    <section className="px-20 bg-white overflow-hidden pb-10">
      <div className="max-w-7xl mx-auto  ">
        {/* Section Header */}
        <div className="text-center flex flex-col gap-3  mb-12 sm:mb-16">
          <h2 className="font-fahkwang text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="text-[#FD7001]">Quality </span>
            <span className="text-[#0B1E3B]">That Travels With </span>
            <span className="text-[#FD7001]">Every Shipment</span>
          </h2>
          <p className="font-poppins text-[#011849] text-sm sm:text-base mt-2  max-w-xl mx-auto">
Before a Shipment Leaves India, We Check What Matters.
Consistency is important when you are buying from another country.          </p>
          <p className="text-[#011849] text-xs sm:text-sm mt-1 max-w-4xl mx-auto">
Every shipment goes through quality checks before dispatch, with the aim of supplying products according to the agreed specifications and applicable international export requirements.          </p>
        </div>

        {/* 5-Step Process Chevron Flow */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Chevron Bar */}
        <div className="hidden md:flex items-center w-full">
       <img src="/Framerec.png" alt="" />
</div>

          {/* Mobile Stacked Chevrons */}
          <div className="md:hidden flex flex-col gap-3">
            {steps.map((step, idx) => {
              const isPeach = step.color === "peach";
              return (
                <div
                  key={idx}
                  className={`py-3 px-5 rounded-xl font-bold text-sm flex items-center justify-between shadow-sm ${isPeach
                      ? "bg-[#FFE8DC] text-[#C2410C] border border-[#FFD2BC]"
                      : "bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]"
                    }`}
                >
                  <span>Step {idx + 1}: {step.title}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
