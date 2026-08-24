import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhinav | Full-Stack Developer & AI Developer",
  description:
    "Personal portfolio of Abhinav, a Computer Engineering student building full-stack and AI-powered applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}