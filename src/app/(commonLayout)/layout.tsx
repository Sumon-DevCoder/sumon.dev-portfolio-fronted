import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sumon.Dev | Portfolio",
  description: "MERN Stack Developer",
};

export default async function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
}
