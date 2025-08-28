// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

// 2. Define your main custom font
const customFont = localFont({
  src: "./fonts/Adrianna-Regular.ttf", // <-- Your existing font
  variable: "--font-sans", // This will be your main sans-serif font
  display: "swap",
});

// 3. Define the new Avenir-Medium font
const avenirFont = localFont({
  src: "./fonts/Avenir-Medium.ttf", // Path to your Avenir-Medium font file
  variable: "--font-avenir", // New CSS variable for Avenir
  display: "swap",
});

// We'll keep Geist_Mono for monospaced text
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Channel link",
  description: " ",
  icons: "/favicon.png",
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
