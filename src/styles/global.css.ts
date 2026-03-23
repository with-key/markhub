import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    background: "#f4f1ea",
    surface: "#fffdfa",
    foreground: "#171717",
    muted: "#5f5a52",
    border: "rgba(23, 23, 23, 0.08)",
  },
  font: {
    body: '"Helvetica Neue", Helvetica, Arial, sans-serif',
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

globalStyle("a", {
  color: "inherit",
});

globalStyle("code", {
  fontFamily: vars.font.mono,
});
