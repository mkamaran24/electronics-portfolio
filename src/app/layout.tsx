import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Electronic Components Supplier | Erbil, Iraq",
  description: "Trusted supplier of electronic components including sensors, diodes, transistors, and ICs. Serving industrial and commercial clients in Erbil, Iraq.",
  keywords: ["electronic components supplier", "sensors and transistors", "electronic parts trading", "Erbil electronics company", "Iraq electronic components"],
  openGraph: {
    title: "Electronic Components Supplier | Erbil, Iraq",
    description: "Trusted supplier of electronic components including sensors, diodes, transistors, and ICs.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
