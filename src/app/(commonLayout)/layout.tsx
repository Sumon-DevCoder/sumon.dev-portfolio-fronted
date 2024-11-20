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
    <div className="max-w-screen-xl m-auto">
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
}
