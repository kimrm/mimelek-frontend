import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono, Sour_Gummy } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"]
});

export const metadata = {
  title: "Mimelek.com",
  description:
    "Mimelek - ordgenerator for mimelek. Star en mimelek økt med fine venner og en god dose humor.",
  lang: "no"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourGummy.variable} min-h-screen h-screen antialiased`}
      >
        {children}
      </body>
      <Analytics />
    </html>
  );
}
