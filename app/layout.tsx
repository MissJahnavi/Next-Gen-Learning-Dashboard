import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Learning Dashboard | NextGen Education",
  description: "Track your courses, streaks, and learning progress",
};

export const viewport: Viewport = {
  themeColor: "#080c14",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
   
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#080c14] text-[#f0f4ff] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
