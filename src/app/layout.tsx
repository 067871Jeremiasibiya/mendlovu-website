import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mendlovu Panelbeating | Expert Auto Body Repair in Boksburg",
  description: "Mendlovu Panelbeating (PTY) LTD - Over 14 years of expertise in automotive repair. Professional panel beating, spray painting, and accident repairs in Boksburg.",
  keywords: "panel beating, panelbeating, auto body repair, spray painting, accident repairs, Boksburg, Mapleton, car repair",
  openGraph: {
    title: "Mendlovu Panelbeating | Expert Auto Body Repair",
    description: "Over 14 years of expertise in automotive repair. Professional panel beating services in Boksburg.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
