import type { Metadata } from "next";
import { Poppins, Fahkwang } from "next/font/google";
import "./globals.css";

const fahkwang = Fahkwang({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fahkwang",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});



export const metadata: Metadata = {
  title: "TCES - Transcontinental Export Services | Premium Indian Spices",
  description: "Direct spice origin sourcing from India to global markets. Malabar Black Pepper, Alleppey Green Cardamom, Nizamabad Turmeric, Cloves, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fahkwang.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-white selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
