import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SourceSection from "./components/SourceSection";
import CertificationsSection from "./components/CertificationsSection";
import ProductsSection from "./components/ProductsSection";
import WhyChooseSection from "./components/WhyChooseSection";
import QualityProcessSection from "./components/QualityProcessSection";
import CtaInquirySection from "./components/CtaInquirySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <SourceSection />
        <CertificationsSection />
        <ProductsSection />
        <WhyChooseSection />
        <QualityProcessSection />
        <CtaInquirySection />
      </main>
    </div>
  );
}
