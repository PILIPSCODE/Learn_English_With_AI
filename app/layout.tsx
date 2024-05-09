import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthContext from "@/app/context/AuthContext";
import ToasterContext from "./context/ToasterContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn Speak English With Ai",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <AuthContext> */}
      {/* <ToasterContext/> */}
      <body className={inter.className}>{children}</body>
      {/* </AuthContext> */}
    </html>
  );
}
