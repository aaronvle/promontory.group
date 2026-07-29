import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Promontory Group — RevOps & GTM Engineering",
  description:
    "RevOps and GTM engineering for early-stage B2B SaaS. GTM strategy, fractional RevOps, and signal-driven outbound systems.",
  openGraph: {
    title: "Promontory Group — RevOps & GTM Engineering",
    description:
      "RevOps and GTM engineering for early-stage B2B SaaS. We design the revenue system — then we build it.",
    type: "website",
    url: "https://promontory.group",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
