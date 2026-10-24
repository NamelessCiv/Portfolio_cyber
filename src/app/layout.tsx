import type { Metadata } from "next";
import { Archivo, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SecurityWrapper from "@/components/SecurityWrapper";

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
  title: "Jean Yves Issiolou — Analyste SOC & designer graphique",
  description: "Analyste SOC. Détection, réponse aux incidents et design graphique : sécuriser des systèmes et composer des images avec la même rigueur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${archivo.variable} ${jetbrains.variable} ${instrument.variable} font-sans antialiased min-h-screen`}
      >
        <SecurityWrapper>
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
        </SecurityWrapper>
      </body>
    </html>
  );
}
