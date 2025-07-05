import "@/app/styles/themes.scss";
import "@/app/styles/globals.scss";

import { TitleBar, ActivityBar, Sidebar, Footer } from "./components";
import type { Metadata } from "next";
import { type ReactNode } from "react";
import localFont from "next/font/local";
import MainTabBar from "./components/MainTabBar";

export const metadata: Metadata = {
  title: "M3hdi Rostami | Frontend Developer Portfolio",
  description:
    "Discover the portfolio of Mehdi Rostami, a passionate Frontend Developer specializing in modern web technologies.",
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
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className="overflow-hidden"
      data-theme="default-dark"
    >
      <body className={`min-h-screen overflow-hidden ${UbuntuSans.className} antialiased`}>
        <TitleBar />
        <div className="flex h-[calc(100vh-3.5rem)]">
          <ActivityBar />
          <Sidebar />
          <div className="flex flex-col w-full h-full">
            <MainTabBar />
            <main className="flex-1 bg-[var(--main-bg)] overflow-y-hidden">
              {children}
            </main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
