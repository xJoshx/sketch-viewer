import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "rgba(255, 255, 255, 1)",
    black: "rgba(0,0,0)",
    lightGrey: "rgba(0,0,0,0.1)",
    grey: "rgba(0,0,0,0.4)",
    darkGrey: "rgba(0,0,0,0.65)",
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
    6: "24px",
    7: "32px",
    8: "48px",
    9: "64px",
    10: "80px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { Theme };
