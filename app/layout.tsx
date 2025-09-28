// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Geolitas Moving | Affordable, careful local movers – Waltham & Greater Boston",
  description:
    "Geolitas Moving provides stress-free apartment and house moves, packing, and labor-only help across Waltham & Greater Boston. Transparent pricing. Same-day availability.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
