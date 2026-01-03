import type { Metadata } from "next";
import { Montserrat, Oswald } from "next/font/google";
import { ViewTransition } from 'react'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const font = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Garitma",
  description: "Poemas de Garitma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransition>
      <html lang="es" className="max-w-[100vw] overflow-x-hidden">
        <body className={`${font.className} ${oswald.variable}`}>
          <main className="page-pancake relative">
            <Header />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ViewTransition>
  );
}
