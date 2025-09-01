// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

// 2. Define your main custom font
const customFont = localFont({
  src: "./fonts/Adrianna-Regular.ttf",
  variable: "--font-sans",
  display: "swap",
});

// 3. Define the new Avenir-Medium font
const avenirFont = localFont({
  src: "./fonts/Avenir-Medium.ttf",
  variable: "--font-avenir",
  display: "swap",
});

// We'll keep Geist_Mono for monospaced text
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Channel Link",
  description: " ",
  // icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // 4. Use all font variables in the body class
        className={`${customFont.variable} ${geistMono.variable} ${avenirFont.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
