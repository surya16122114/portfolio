import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chinnasurya Prasad | Full Stack Developer",
  description: "Full Stack Developer & Machine Learning Enthusiast with expertise in Next.js, React, and blockchain technologies.",
  metadataBase: new URL("https://chinnasuryaprasad.com"),
  
  // Basic metadata
  applicationName: "Chinnasurya Prasad Portfolio",
  authors: [{ name: "Chinnasurya Prasad" }],
  keywords: ["Full Stack Developer", "Web3", "Blockchain", "Next.js", "React", "Machine Learning"],
  
  openGraph: {
    type: "website",
    url: "https://chinnasuryaprasad.com",
    title: "Chinnasurya Prasad | Full Stack Developer",
    description: "Full Stack Developer & Blockchain and Machine Learning Enthusiast with expertise in Next.js, React, and blockchain technologies.",
    siteName: "Chinnassurya Prasad",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chinnasurya Prasad - Portfolio",
      },
    ],
  },
  
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  
  alternates: {
    canonical: "https://chinnasuryaprasad.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}