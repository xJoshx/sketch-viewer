import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "rgba(255, 255, 255, 1)",
    whiteSmoke: "rgba(249, 249,249, 1)",
    black: "rgba(0,0,0)",
    lightGrey: "rgba(0,0,0,0.1)",
    grey: "rgba(0,0,0,0.4)",
    darkGrey: "rgba(0,0,0,0.65)",
  },

  fonts: [
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue"',
  ],
  fontSizes: {
    body: "14px",
    title: "16px",
    navigation: "16px",
  },
  space: [
    "4px",
    "8px",
    "12px",
    "16px",
    "20px",
    "24px",
    "32px",
    "48px",
    "64px",
    "80px",
  ],
  boxShadow: ["0 1px 2px 0 rgba(0, 0, 0, 0.1)"],
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { Theme };
