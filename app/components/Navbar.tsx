"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TcesLogo } from "./Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-20 h-19 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center">
         <img src="/logo.png" alt="logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-slate-800 hover:text-[#FD7001] text-sm font-semibold transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-slate-800 hover:text-[#FD7001] text-sm font-semibold transition-colors"
          >
            About
          </Link>
          <Link
            href="#products"
            className="text-slate-800 hover:text-[#FD7001] text-sm font-semibold transition-colors"
          >
            Products
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-[#FD7001] hover:bg-[#D84315] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl animate-in fade-in">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-orange-50 hover:text-[#FD7001]"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-orange-50 hover:text-[#FD7001]"
          >
            About
          </Link>
          <Link
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-orange-50 hover:text-[#FD7001]"
          >
            Products
          </Link>
          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center bg-[#FD7001] hover:bg-[#D84315] text-white text-sm font-semibold px-6 py-3 rounded-full shadow"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
