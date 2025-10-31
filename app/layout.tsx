import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simon Emmanuel | Software Engineer",
  description:
    "Personal professional portfolio website for a skilled Software Engineer, built with Next.js, React, and Tailwind CSS.",
  keywords:
    "Portfolio, Next.js, React, Node.js, Tailwind CSS, Software Engineer, Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
