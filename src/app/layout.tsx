import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  JetBrains_Mono,
  Merriweather,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/context/DarkModeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["100", "200", "400", "600", "800"],
});
const merri = Merriweather({
  variable: "--font-merri",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});
const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ANOUAR",
  description: "Anouar Faraji's personal website",
  icons: {
    icon: "/logo.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${mono.variable} ${merri.variable} ${space.variable}`}
    >
      <head>
        
      </head>
      <body className="min-h-screen flex flex-col bg-[url('./assets/nightDay2.png')] dark:bg-[url('./assets/nightNight2.png')] bg-fixed antialiased">
        <DarkModeProvider>
          <Header />{" "}
          <main className="flex-grow bg-transparent dark:bg-transparent py-12 font-space">
            {children}
          </main>
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
