import type { Metadata } from "next";
import { Instrument_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["italic"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "CardForge AI - Corporate Greeting Card Generator",
  description:
    "Create branded employee celebration cards with AI-assisted portrait placement, approved templates, and fast social-ready exports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
