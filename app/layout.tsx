import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "@/app/globals.css";

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
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`min-h-screen ${UbuntuSans.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
