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

export default async function RootLayout({ children }) {
  return (
    <html lang="no">
      <head>
        <link rel="alternate" hrefLang="en" href="https://mimelek.com/en/" />
        <link rel="alternate" hrefLang="no" href="https://mimelek.com/no/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourGummy.variable} min-h-screen h-screen antialiased`}
      >
        {children}
      </body>
      <Analytics />
    </html>
  );
}
