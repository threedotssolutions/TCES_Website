"use client";

import Link from "next/link";
import React from "react";

export default function CtaInquirySection() {
  return (
    <section
      id="contact"
      className="relative text-white overflow-visible w-full min-h-[750px] lg:min-h-[860px] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-between"
      style={{
        backgroundImage: "url('/Footer15Liftblue.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Banner Content */}
        <div className="text-center max-w-3xl mx-auto pt-6 sm:pt-10">
          <h2 className="font-fahkwang text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white">
            Looking for <span className="text-[#FD7001]">Indian Spices</span> for Your Market?
          </h2>
          <p className="font-poppins text-slate-300 text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Tell us what you need and we will provide detailed specifications, pricing, and samples for your evaluation.
          </p>

          <div className="mt-7">
            <Link
              href="#contact"
              className="font-poppins inline-flex items-center justify-center bg-[#FD7001] hover:bg-[#D84315] text-white text-xs sm:text-sm font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-orange-600/30 transition-all transform active:scale-95"
            >
              Send Your Requirement
            </Link>
          </div>
        </div>

        {/* Floating Quick Links Card */}
        <div className="max-w-5xl mx-auto mt-14 sm:mt-18">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 sm:p-10 lg:p-12 text-slate-800">
            {/* Top Navigation Row */}
            <div className="flex items-center justify-between">
              <nav className="flex items-center gap-8 sm:gap-14">
                <Link
                  href="#about"
                  className="font-poppins text-[#011849] hover:text-[#FD7001] font-medium text-sm sm:text-base transition-colors"
                >
                  About us
                </Link>
                <Link
                  href="#products"
                  className="font-poppins text-[#011849] hover:text-[#FD7001] font-medium text-sm sm:text-base transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="#contact"
                  className="font-poppins text-[#011849] hover:text-[#FD7001] font-medium text-sm sm:text-base transition-colors"
                >
                  Contact
                </Link>
              </nav>

              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 sm:w-10 sm:h-10  flex items-center justify-center "
              >
                <img src="/mingcute_instagram-fill.png" width={100} height={100} alt="instagram" className="" />
              </a>
            </div>

            {/* Separator Line */}
            <div className="w-full h-px bg-slate-200/80 my-6 sm:my-8" />

            {/* Bottom Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-500 font-poppins gap-3 text-center sm:text-left">
              <span>© 2026 TCES. All rights reserved.</span>
              <span>Designed and Developed by Three Dots.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Center Logo */}
      <div className="flex justify-center items-center mt-12 pb-6">
        <Link href="/" className="group flex items-center">
          <img src="/logo.png" alt="logo" className="h-10 sm:h-12 w-auto object-contain" />
        </Link>
      </div>
    </section>
  );
}
