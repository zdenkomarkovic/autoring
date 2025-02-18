import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
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
  title: "Minibus i kombi prevoz putnika Pozega",
  description:
    "Minibus prevoz putnika i kombi prevoz putnika u Požegi. Sigurna i udobna vožnja do svih destinacija. Rezervišite prevoz već danas!",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  keywords: [
    "minibus prevoz Požega",
    "kombi prevoz Požega",
    "prevoz putnika Požega",
    "kombi prevoz putnika Požega",
    "prevoz do Beograda iz Požege",
    "prevoz do aerodroma",
    "prevoz do aerodroma Požega",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
