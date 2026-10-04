import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fermor — Make room for your future",
  description: "Understand your money, explore your possibilities, and plan your next chapter with Fermor.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
