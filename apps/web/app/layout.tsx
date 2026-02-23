import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { ThemeProvider } from "./components/ThemeProvider";
import { assetPath } from "./lib/assetPath";
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
  icons: {
    icon: [
      {
        url: assetPath("/favicon-16x16.png"),
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: assetPath("/favicon-32x32.png"),
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: assetPath("/apple-touch-icon.png"),
  },
  manifest: assetPath("/site.webmanifest"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            <SiteHeader />
            <div className="flex min-h-0 flex-1 flex-col">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
