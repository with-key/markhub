import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    background: "#f3f6fb",
    surface: "#ffffff",
    surfaceRaised: "#f8fbff",
    foreground: "#102033",
    muted: "#5d6b7d",
    border: "rgba(98, 114, 140, 0.18)",
    surfaceLow: "#edf2f8",
    surfaceHigh: "#dde6f0",
    surfaceHighest: "#d2ddea",
    surfaceTint: "#0b65ff",
    primary: "#102033",
    primaryStrong: "#07111f",
    outline: "#728096",
    outlineVariant: "#c2cada",
    accent: "#0b65ff",
    accentStrong: "#0846b7",
    accentSoft: "rgba(11, 101, 255, 0.12)",
    success: "#087f5b",
    successSoft: "rgba(8, 127, 91, 0.12)",
    warning: "#b86a00",
    warningSoft: "rgba(184, 106, 0, 0.14)",
  },
  radius: {
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    pill: "999px",
  },
  shadow: {
    soft: "0 18px 48px rgba(19, 31, 56, 0.05)",
    elevated: "0 24px 80px rgba(19, 31, 56, 0.08)",
    emphasis: "0 18px 30px rgba(0, 0, 0, 0.12)",
  },
  space: {
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
  },
  font: {
    body: '"IBM Plex Sans", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif',
    display: '"Space Grotesk", "IBM Plex Sans", "Apple SD Gothic Neo", sans-serif',
    mono: '"IBM Plex Mono", "SFMono-Regular", Consolas, monospace',
  },
});

globalStyle(":root", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: {
        [vars.color.background]: "#0d1420",
        [vars.color.surface]: "#121b2a",
        [vars.color.surfaceRaised]: "#182335",
        [vars.color.foreground]: "#eff5ff",
        [vars.color.muted]: "#a8b6ca",
        [vars.color.border]: "rgba(168, 182, 202, 0.16)",
        [vars.color.surfaceLow]: "#152031",
        [vars.color.surfaceHigh]: "#203049",
        [vars.color.surfaceHighest]: "#29405f",
        [vars.color.surfaceTint]: "#7cb1ff",
        [vars.color.primary]: "#eff5ff",
        [vars.color.primaryStrong]: "#dbe7ff",
        [vars.color.outline]: "#8fa2bf",
        [vars.color.outlineVariant]: "rgba(194, 202, 218, 0.36)",
        [vars.color.accent]: "#7cb1ff",
        [vars.color.accentStrong]: "#9cc3ff",
        [vars.color.accentSoft]: "rgba(124, 177, 255, 0.14)",
        [vars.color.success]: "#67d3a8",
        [vars.color.successSoft]: "rgba(103, 211, 168, 0.14)",
        [vars.color.warning]: "#ffbf69",
        [vars.color.warningSoft]: "rgba(255, 191, 105, 0.16)",
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
  textDecorationColor: "currentColor",
  textUnderlineOffset: "0.14em",
});

globalStyle("code", {
  fontFamily: vars.font.mono,
});
