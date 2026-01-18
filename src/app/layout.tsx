import type { Metadata } from "next";
import "./globals.css";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: "italic",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Likith Raj — Creative Developer",
  description: "Crafting digital experiences with precision and purpose. Minimal, intentional, considered.",
  keywords: ["creative developer", "portfolio", "web design", "UI/UX", "minimal design"],
  authors: [{ name: "Likith Raj" }],
  openGraph: {
    title: "Likith Raj — Creative Developer",
    description: "Crafting digital experiences with precision and purpose.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning className={instrumentSerif.variable}>
        {children}
      </body>
    </html>
  );
}
