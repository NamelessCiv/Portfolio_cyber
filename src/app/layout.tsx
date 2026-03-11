import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnimationLoader from "@/components/AnimationLoader";
import SecurityWrapper from "@/components/SecurityWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Analyste SOC | Jean Yves ISSIOLOU",
  description: "Protecteur de l’Espace Numérique. Spécialiste en détection de menaces et réponse aux incidents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen`}
      >
        <SecurityWrapper>
          <AnimationLoader />
          <Navbar />
          {children}
        </SecurityWrapper>
      </body>
    </html>
  );
}
