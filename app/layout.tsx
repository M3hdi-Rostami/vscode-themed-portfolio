import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Portfolio | M3hdi Rostami",
  description: "Portfolio as mehdi rostami",
};

export default function RootLayout({
  children,
}: Readonly<{ children?: ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`min-h-screen antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
