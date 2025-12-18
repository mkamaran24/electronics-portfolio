import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dara Automation | Monitoring and Automation Services",
  description: "Dara Automation - Experienced in IOT and Industrial Automation and Monitoring Systems and Services. Located in Erbil, Iraq.",
  keywords: ["electronic components supplier", "sensors and transistors", "electronic parts trading", "Erbil electronics company", "Iraq electronic components"],
  openGraph: {
    title: "Dara Automation | Monitoring and Automation Services",
    description: "Expert in IOT and Industrial Automation and Monitoring Systems and Services.",
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
