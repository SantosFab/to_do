"use client";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import GlobalStyles from "@/styles/globals";
import { theme } from "@/styles/themes/theme";

interface ThemeClientProps {
  children: ReactNode;
}

export function ThemeClient({ children }: ThemeClientProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
