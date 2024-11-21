import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google"; // Import Poppins font
import TopLoader from "./components/TopLoader";

// Load the Poppins font with the subsets you need
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

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
      <body className={`${poppins.className}  bg-[#0a0a0a]`}>
        <TopLoader />
        {children}
      </body>
    </html>
  );
}
