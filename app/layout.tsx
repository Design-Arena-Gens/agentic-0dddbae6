import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Octopus Facts Script",
  description: "One-minute YouTube script highlighting fascinating octopus facts."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
