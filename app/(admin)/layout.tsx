import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Courselly",
  description: "Admin panel for Courselly application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
