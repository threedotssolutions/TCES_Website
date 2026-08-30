import React from "react";

export function TcesLogo({ className = "h-10", textDark = true }: { className?: string; textDark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Emblem */}
      <div className="relative flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#0B2545] to-[#041224] p-0.5 shadow-md flex items-center justify-center border border-[#133E6D]/40">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          {/* Outer circle with tick marks */}
          <circle cx="50" cy="50" r="45" stroke="#FD7001" strokeWidth="2.5" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="38" stroke="#38BDF8" strokeWidth="1.5" opacity="0.6" />

          {/* Globe latitude / longitude lines */}
          <ellipse cx="50" cy="50" rx="36" ry="18" stroke="#38BDF8" strokeWidth="1.2" opacity="0.4" />
          <ellipse cx="50" cy="50" rx="18" ry="36" stroke="#38BDF8" strokeWidth="1.2" opacity="0.4" />
          <line x1="50" y1="14" x2="50" y2="86" stroke="#38BDF8" strokeWidth="1" opacity="0.4" />
          <line x1="14" y1="50" x2="86" y2="50" stroke="#38BDF8" strokeWidth="1" opacity="0.4" />

          {/* Bold Central 'T' and compass pointer */}
          <path d="M30 33 H70 V42 H56 V72 H44 V42 H30 Z" fill="#FFFFFF" />
          <polygon points="50,16 55,26 50,23 45,26" fill="#FF5722" />
          <polygon points="50,84 55,74 50,77 45,74" fill="#FF5722" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col justify-center">
        <span className={`font-serif text-lg sm:text-xl font-black tracking-tight leading-none ${textDark ? "text-[#0B1E3B]" : "text-white"}`}>
          TRANSCONTINENTAL
        </span>
        <span className={`text-[9px] sm:text-[10px] font-bold tracking-[0.26em] uppercase mt-1 leading-none ${textDark ? "text-[#0B1E3B]/80" : "text-gray-300"}`}>
          EXPORT SERVICES
        </span>
      </div>
    </div>
  );
}

export function StarAniseIcon({ className = "w-6 h-6 text-[#FD7001]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* 8-pointed star anise spice silhouette */}
      <g transform="translate(50,50)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle})`}>
            <path
              d="M 0,-5 C 5,-20 12,-35 0,-44 C -12,-35 -5,-20 0,-5 Z"
              fill="currentColor"
              opacity="0.9"
            />
            <ellipse cx="0" cy="-28" rx="3.5" ry="5.5" fill="#5D2E0C" />
          </g>
        ))}
        <circle cx="0" cy="0" r="8" fill="#8D4925" />
      </g>
    </svg>
  );
}

export function GreenQualitySeal({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        {/* Serrated gear badge outline */}
        <path
          d="M50 0 L58 10 L70 5 L75 18 L88 18 L89 31 L100 36 L96 48 L100 60 L90 68 L90 81 L77 83 L71 95 L59 91 L50 100 L41 91 L29 95 L23 83 L10 81 L10 68 L0 60 L4 48 L0 36 L11 31 L12 18 L25 18 L30 5 L42 10 Z"
          fill="#15803D"
        />
        <circle cx="50" cy="50" r="38" fill="#166534" stroke="#86EFAC" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="34" fill="none" stroke="#BBF7D0" strokeWidth="1" strokeDasharray="3 2" />

        {/* Stars */}
        <text x="50" y="28" fill="#FACC15" fontSize="7" textAnchor="middle" fontWeight="bold">★ ★ ★ ★ ★</text>

        {/* Quality text */}
        <text x="50" y="44" fill="#FFFFFF" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="0.05em">
          QUALITY
        </text>
        <text x="50" y="56" fill="#86EFAC" fontSize="7" fontWeight="800" textAnchor="middle" letterSpacing="0.1em">
          GUARANTEED
        </text>
        <text x="50" y="68" fill="#FEF08A" fontSize="6.5" fontWeight="bold" textAnchor="middle">
          100% PURE
        </text>
      </svg>
    </div>
  );
}

export function CertificationBadge({
  type,
  label,
}: {
  type: "iec" | "fssai" | "spices_board" | "apeda";
  label: string;
}) {
  if (type === "iec") {
    return (
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0369A1] p-1 shadow-lg flex flex-col items-center justify-center border-2 border-white/40 text-center select-none">
        <div className="w-full h-full rounded-full border border-white/30 flex flex-col items-center justify-center px-1">
          <span className="text-[7px] text-sky-100 font-bold uppercase tracking-tighter leading-tight">DGFT</span>
          <span className="text-white text-base sm:text-lg font-black tracking-wider leading-none my-0.5">IEC</span>
          <span className="text-[6.5px] text-sky-200 uppercase tracking-tighter leading-tight">Govt. India</span>
        </div>
      </div>
    );
  }

  if (type === "fssai") {
    return (
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white p-1 shadow-lg flex flex-col items-center justify-center border-2 border-orange-400 text-center select-none">
        <div className="w-full h-full rounded-full border border-slate-100 flex flex-col items-center justify-center px-1">
          <span className="text-[#0B1E3B] text-sm sm:text-base font-black tracking-tight leading-none italic font-serif">
            <span className="text-[#0B1E3B]">f</span>
            <span className="text-[#FD7001]">ss</span>
            <span className="text-[#16A34A]">ai</span>
          </span>
          <span className="text-[6.5px] text-slate-600 font-semibold uppercase tracking-tighter mt-1">Food Safety</span>
          <span className="text-[5.5px] text-slate-400 font-medium">Lic. Registered</span>
        </div>
      </div>
    );
  }

  if (type === "spices_board") {
    return (
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white p-1 shadow-lg flex flex-col items-center justify-center border-2 border-slate-300 text-center select-none">
        <div className="w-full h-full rounded-full border border-slate-200 flex flex-col items-center justify-center px-1">
          <div className="w-4 h-4 flex items-center justify-center mb-0.5">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#0B1E3B]" fill="currentColor">
              <path d="M12 2L9 7H15L12 2Z M7 9L4 14H10L7 9Z M17 9L14 14H20L17 9Z M12 14L9 19H15L12 14Z M6 20H18V22H6V20Z" />
            </svg>
          </div>
          <span className="text-[6.5px] text-[#0B1E3B] font-extrabold uppercase tracking-tighter leading-tight">
            SPICES BOARD
          </span>
          <span className="text-[5.5px] text-slate-500 font-medium tracking-tighter">Govt. of India</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] p-1 shadow-lg flex flex-col items-center justify-center border-2 border-amber-400 text-center select-none">
      <div className="w-full h-full rounded-full border border-amber-400/40 flex flex-col items-center justify-center px-1">
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-amber-400 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
        <span className="text-[6.5px] text-amber-300 font-bold uppercase tracking-tighter leading-tight">
          EXPORT
        </span>
        <span className="text-[5.5px] text-slate-300 uppercase tracking-tighter">Registration</span>
      </div>
    </div>
  );
}

export function FeatureIcon({ type }: { type: "sourcing" | "quality" | "custom" | "export" }) {
  if (type === "sourcing") {
    return (
      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FD7001]">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
          <path d="M12 8c-2 2-2 6 0 8" />
        </svg>
      </div>
    );
  }

  if (type === "quality") {
    return (
      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FD7001]">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </div>
    );
  }

  if (type === "custom") {
    return (
      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FD7001]">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="9" y1="15" x2="15" y2="15" />
          <line x1="9" y1="11" x2="15" y2="11" />
          <line x1="9" y1="19" x2="13" y2="19" />
        </svg>
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FD7001]">
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.18" />
        <path d="M12 2v8" />
        <path d="m4.93 10.93 1.41 1.41" />
        <path d="m19.07 10.93-1.41 1.41" />
      </svg>
    </div>
  );
}
