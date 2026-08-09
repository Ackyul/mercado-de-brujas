import type { Metadata } from "next";
import { Cinzel, Outfit } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mercado de Brujas | Artículos Místicos, Pociones & Artefactos Esotéricos",
  description: "Descubre el mercado místico de brujas: talismanes, pociones alquímicas, hierbas sagradas, cristales energéticos y grimorios.",
  keywords: ["mercado de brujas", "pociones", "talismanes", "esotérico", "magia", "cristales"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cinzel.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
