import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/appheader";
import AppFooter from "@/components/appfooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kindwear",
  description: "Site institucional kindwear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AppHeader />
          {children}
        <AppFooter />
      </body>
    </html>
  );
}
