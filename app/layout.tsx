import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Game Codes",
  description: "Game Codes",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Game Codes",
    description: "Game Codes",
    url: "https://vinahut.io.vn",
    siteName: "Game Codes",
    images: [
      {
        url: "https://vinahut.io.vn/preview.png",
        width: 1200,
        height: 630,
      },
    ],
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
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
