import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/Providers/ThemeProvider";
import LayoutProviders from "@/Providers/LayoutProvider";

export const metadata: Metadata = {
  title: "Next App Mantine Tailwind Template",
  description: "Next App Mantine Tailwind Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased `}>
        <ThemeProvider>
          <LayoutProviders>{children}</LayoutProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
