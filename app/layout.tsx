import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Respisleep — Respiratory Care",
  description:
    "Philips CPAP, BiPAP, Oxygen Concentrators and respiratory accessories.",
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