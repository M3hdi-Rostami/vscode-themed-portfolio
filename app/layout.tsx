import "@/app/globals.css";

import ActivityBar from "./components/ActivityBar";
import MenuBar from "./components/TitleBar";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Sidebar from "./components/Sidebar";
import localFont from "next/font/local";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Portfolio | M3hdi Rostami",
  description: "Portfolio as mehdi rostami",
};

const UbuntuSans = localFont({
  src: [
    {
      path: "./fonts/UbuntuSans/UbuntuSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/UbuntuSans/UbuntuSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ubuntu-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children?: ReactNode }>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`min-h-screen ${UbuntuSans.className} antialiased`}>
        <MenuBar />
        <div className="flex h-[calc(100vh-3.5rem)]">
          <ActivityBar />
          <Sidebar />
          <main className="flex-1 p-4 bg-[#1E1E1E] relative">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
