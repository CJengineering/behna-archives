import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ibm_plex_mono, ibm_plex_sans } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Behna Digital Archives",
  description: "A collaboration between Wekalet Behna, Community Jameel and ARCHiVe, which is a collaboration between Factum Foundation and Fondazione Giorgio Cini, the Behna Digital Archive is a digitisation project which has led to the launch of an online platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibm_plex_mono.variable} ${ibm_plex_sans.variable}`}>   <Navbar></Navbar><div className="min-h-[100vh]">
      {children}
        </div><Footer/></body>
    </html>
  );
}
