import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surprez - Start Selling Handmade Gifts",
  description:
    "Empower your craft and start selling on Surprez. Join thousands of creators reaching gift-sellers worldwide with ease and security. Turn your passion into a thriving business.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
