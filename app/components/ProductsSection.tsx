import React from "react";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  type: "black_pepper" | "cardamom" | "turmeric" | "cloves";
}

function ProductCard({ title, type }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100/80 flex flex-col">
      {/* Product Image Showcase Container */}
      <div className="relative aspect-square w-full  overflow-hidden">
        {type === "black_pepper" && (
         <img src="/black_pepper.png" alt="" />
        )}

        {type === "cardamom" && (
         <img src="/cardamom.png" alt="" />
        )}

        {type === "turmeric" && (
        <img src="/turmeric.png" alt="" />
        )}

        {type === "cloves" && (
         <img src="/cloves.png" alt="" />
        )}
      </div>

      {/* Product Title Bar */}
      <div className="py-4 px-3 text-center bg-white border-t border-slate-100 flex items-center justify-center">
        <h3 className="font-poppins text-slate-900 font-bold text-sm sm:text-base tracking-tight group-hover:text-[#FD7001] transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="relative px-20 py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] spice-bg-pattern overflow-hidden"
    
    style={{
      backgroundImage: "url('/productsBg.png')",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    >
      {/* Decorative Spice Watermarks in Background */}
      <div className="max-w-7xl mx-auto  relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h2 className="font-fahkwang text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="text-[#0B1E3B]">Our </span>
            <span className="text-[#FD7001]">Products</span>
          </h2>
          <p className="font-poppins text-[#011849] text-slate-800 text-sm sm:text-base mt-2">
            The Flavours of India, Ready for the World
          </p>
          <p className="font-poppins text-[#011849] text-xs sm:text-sm mt-1">
India's spices are known around the world for their aroma, colour and character.          </p>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          <ProductCard title="Black Pepper" type="black_pepper" />
          <ProductCard title="Green Cardamom" type="cardamom" />
          <ProductCard title="Dried Turmeric" type="turmeric" />
          <ProductCard title="Cloves" type="cloves" />
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="#products"
            className="font-poppins inline-flex items-center justify-center bg-[#FD7001] hover:bg-[#D84315] text-white text-xs  tracking-wider uppercase px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
}
