import React from "react";
import { CertificationBadge } from "./Icons";

export default function CertificationsSection() {
  return (
    <section className="w-full bg-[#011849] py-10 sm:py-12 border-y border-[#011849] text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Section Heading */}
          <div className="text-center md:text-left">
            <h2 className="font-fahkwang text-2xl sm:text-3xl lg:text-[32px] font-semibold text-white tracking-tight">
              Certifications & Registrations
            </h2>
          </div>

          {/* Certification Badges List */}
          <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 lg:gap-8">
            <div className="flex flex-col items-center gap-1 group">
             <img src="/iec.png" width={103} height={103} alt="" />
            </div>

            <div className="flex flex-col items-center gap-1 group">
             <img src="/fassi.png" width={103} height={103} alt="" />
            </div>

 <div className="flex flex-col items-center gap-1 group">
             <img src="/goods.png" width={103} height={103} alt="" />
            </div>

            <div className="flex flex-col items-center gap-1 group">
             <img src="/spiceBoard.png" width={103} height={103} alt="" />
            </div>

           
          </div>

        </div>
      </div>
    </section>
  );
}
