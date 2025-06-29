import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import Footer from "@/components/footer/Footer";
import ClientWrapper from "@/components/navbar/ClientWrapper";

// English Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Bengali Font
const notoBengali = Noto_Sans_Bengali({
  variable: "--font-bangla",
  subsets: ["bengali"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ওয়েবসাইট",
  description: "বাংলা ও ইংরেজি",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoBengali.variable} antialiased`}
      >
        <ThemeProvider>
          <ClientWrapper />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
