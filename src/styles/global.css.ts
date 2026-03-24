import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    background: "#f7f9fb",
    surface: "#ffffff",
    foreground: "#191c1e",
    muted: "#57657a",
    border: "rgba(118, 119, 125, 0.18)",
    surfaceLow: "#f2f4f6",
    surfaceHigh: "#e6e8ea",
    surfaceHighest: "#e0e3e5",
    surfaceTint: "#0053db",
    primary: "#000000",
    primaryStrong: "#00174b",
    outline: "#76777d",
    outlineVariant: "#c6c6cd",
  },
  font: {
    body: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
    display: '"Manrope", "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
    mono: '"SFMono-Regular", "SF Mono", Consolas, "Liberation Mono", monospace',
  },
});

globalStyle(":root", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: {
        [vars.color.background]: "#111111",
        [vars.color.surface]: "#171717",
        [vars.color.foreground]: "#f3efe8",
        [vars.color.muted]: "#b7b0a6",
        [vars.color.border]: "rgba(243, 239, 232, 0.12)",
        [vars.color.surfaceLow]: "#1a1c1f",
        [vars.color.surfaceHigh]: "#23262a",
        [vars.color.surfaceHighest]: "#2a2d31",
        [vars.color.surfaceTint]: "#84a9ff",
        [vars.color.primary]: "#f3efe8",
        [vars.color.primaryStrong]: "#b4c5ff",
        [vars.color.outline]: "#999ba3",
        [vars.color.outlineVariant]: "rgba(198, 198, 205, 0.3)",
      },
    },
  },
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("html", {
  fontSize: "16px",
});

globalStyle("body", {
  margin: 0,
  background: vars.color.background,
  color: vars.color.foreground,
  fontFamily: vars.font.body,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("html, body, #__next", {
  minHeight: "100%",
});

globalStyle("a", {
  color: "inherit",
});

globalStyle("code", {
  fontFamily: vars.font.mono,
});
