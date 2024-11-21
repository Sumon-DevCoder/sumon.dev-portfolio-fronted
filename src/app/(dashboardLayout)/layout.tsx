import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Portfolio",
  description: "Sumon.DevCoder",
};

export default function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
