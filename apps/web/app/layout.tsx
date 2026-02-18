import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { IntroAnimation } from "./components/introAnimation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arthur Toppenberg",
  description:
    "Personal website of Arthur Toppenberg — software engineer, builder, and creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <IntroAnimation />
        {children}
      </body>
    </html>
  );
}
