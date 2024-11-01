import React, { ReactNode } from "react";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import {
  ColorSchemeScript,
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
  MantineThemeOverride,
  mergeMantineTheme,
} from "@mantine/core";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const themeOptions: MantineThemeOverride = {
  fontFamily: poppins.style.fontFamily,
  fontFamilyMonospace: geistMono.style.fontFamily,
  autoContrast: true,
  primaryColor: "customGreen",
  colors: {
    ...DEFAULT_THEME.colors,
    customGreen: [
      // ChatGpt generated color from #3ea53c
      "#eafbe5", // lightest shade
      "#cef5c3",
      "#b1eea1",
      "#94e77f",
      "#78e15d",
      "#5cd93b", // main shade closest to #3ea53c
      "#4aa02d",
      "#387a21",
      "#265315",
      "#132a0a", // darkest shade
    ],
  },
};

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = mergeMantineTheme(DEFAULT_THEME, createTheme(themeOptions));

  return (
    <>
      <ColorSchemeScript defaultColorScheme="light" />
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </>
  );
}
