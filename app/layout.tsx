import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";

import { ComingSoonProvider } from "@/widgets/landing/components/coming-soon-modal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Orakly Market — on-chain prediction markets",
    template: "%s · Orakly Market",
  },
  description:
    "Trade live odds on crypto, macro, sports, and tech. Transparent rules, stablecoin rails, and verifiable on-chain settlement.",
  openGraph: {
    type: "website",
    siteName: "Orakly Market",
    title: "Orakly Market — on-chain prediction markets",
    description: "On-chain prediction markets. Trade live odds.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${sora.variable} font-sans`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ComingSoonProvider>{children}</ComingSoonProvider>
      </body>
    </html>
  );
}
