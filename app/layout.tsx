import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "0xMazout Portfolio",
  description: "Portfolio of 0xMazout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <div className="pointer-events-none fixed transition duration-300 inset-0 z-30 lg:absolute ">
        <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
          {children}
        </body>
      </div>
    </html>
  );
}
