import type { Metadata } from "next";
import { connection } from "next/server";
import { Archivo, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Jean Yves Issiolou — Analyste SOC",
  description: "Analyste SOC. Détection des menaces, réponse aux incidents et investigation : surveiller, détecter, contenir.",
  referrer: "strict-origin-when-cross-origin",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rendu à la requête : nécessaire pour appliquer le nonce CSP (voir src/proxy.ts)
  await connection();

  return (
    <html lang="fr">
      <body
        className={`${archivo.variable} ${jetbrains.variable} ${instrument.variable} font-sans antialiased min-h-screen`}
      >
        <div className="grid-guides" aria-hidden="true">
          <div className="frame">
            <div className="cols">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className={i >= 4 ? "hidden md:block" : ""} />
              ))}
            </div>
          </div>
        </div>
        <Navbar />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
