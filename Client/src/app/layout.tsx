import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import GlobalError from "./global-error";
import React from "react";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Universal Mart",
  description: "A one stop solution for your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
