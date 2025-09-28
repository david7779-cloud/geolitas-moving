// app/layout.tsx  (use .js if you’re not on TypeScript)
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Business Name | Tagline",
  description:
    "Update this description for your business.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
