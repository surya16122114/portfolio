"use client";

import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { SmoothScrollProvider } from "@/components/shared/smooth-scroll-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = localFont({
  src: [
    { path: "../public/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
});

export function ClientLayout({ children }: { children: React.ReactNode }) {
  // Every route now ships the self-contained "surya.sys" chrome (nav, footer, background):
  // the homepage renders its own, inner routes get it from app/(routes)/layout.tsx.
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <div className="relative flex min-h-screen flex-col">
              <main className="flex-1">{children}</main>
            </div>
            <ScrollProgress />
            <SpeedInsights />
            <Analytics />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
