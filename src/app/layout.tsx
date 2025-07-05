import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Octarise Software Solutions",
  icons: {
    icon: "D:/OCTARISE/octarise/public/favicon.ico",
  },
  description: "Building elegant websites & vibrant events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0F2C] text-white`}>
        <Navbar />
        <main className="min-h-[80vh]">{children}</main>
        <footer className="p-6 text-center text-[#B2BEC3] bg-[#0A0F2C] border-t border-[#6C5CE7]/30">
          © 2025 Octarise Software Solutions. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
