import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Mumbai Software — Software Development Firm",
  description: "We build exceptional software that helps people and companies grow. Based in Mumbai, working globally.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
