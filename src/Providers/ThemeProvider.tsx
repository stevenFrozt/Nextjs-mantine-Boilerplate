import React, { ReactNode } from "react";
import localFont from "next/font/local";
import {
  ColorSchemeScript,
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
  mergeMantineTheme,
} from "@mantine/core";
import Head from "next/head";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = mergeMantineTheme(
    DEFAULT_THEME,
    createTheme({
      fontFamily: geistSans.style.fontFamily,
      fontFamilyMonospace: geistMono.style.fontFamily,
    }),
  );

  return (
    <>
      <Head>
        <ColorSchemeScript />
      </Head>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </>
  );
}
