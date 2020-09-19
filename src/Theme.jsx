import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "rgba(0,0,0)",
    grey: "rgba(0,0,0,0.4)",
  },
  fonts: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  fontSizes: {
    body: "14px",
    title: "16px",
    navigation: "16px",
  },
  space: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "32px",
    7: "48px",
    8: "64px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { Theme };
