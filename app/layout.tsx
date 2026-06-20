import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chinnasurya Prasad | Software Engineer",
  description: "Software engineer specializing in scalable web apps, cloud infrastructure, distributed systems, and applied AI. Ex-Optum (UnitedHealth Group), MS @ Northeastern.",
  metadataBase: new URL("https://chinnasuryaprasad.com"),

  // Basic metadata
  applicationName: "Chinnasurya Prasad Portfolio",
  authors: [{ name: "Chinnasurya Prasad" }],
  keywords: ["Software Engineer", "Full Stack", "Distributed Systems", "Cloud", "AWS", "AI", "Next.js", "React", "Java"],

  openGraph: {
    type: "website",
    url: "https://chinnasuryaprasad.com",
    title: "Chinnasurya Prasad | Software Engineer",
    description: "Software engineer — scalable web apps, cloud infrastructure, distributed systems, and applied AI.",
    siteName: "Chinnasurya Prasad",
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