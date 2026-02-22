import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const satoshi = Inter({
  variable: "--font-satoshi",
  subsets: ["latin"],
  display: "swap",
});

const clashDisplay = Space_Grotesk({
  variable: "--font-clash-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhaysophy | Wear Your Doubts",
  description:
    "Streetwear for the philosophically inclined. Abhay bhai is always right, sometimes. Premium tees, hoodies, and crops for overthinkers.",
  keywords: ["streetwear", "philosophy", "tees", "hoodies", "gen z", "india", "abhaysophy"],
  openGraph: {
    title: "Abhaysophy | Wear Your Doubts",
    description: "Streetwear for the philosophically inclined. Abhay bhai is always right, sometimes.",
    siteName: "Abhaysophy",
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
        className={`${satoshi.variable} ${clashDisplay.variable} ${playfair.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
