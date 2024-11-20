import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import TopLoader from "./components/TopLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumon.DevCoder",
  description: "The Professional Web Application Expert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-semiDark pb-8`}>
        <TopLoader />
        {children}
      </body>
    </html>
  );
}
