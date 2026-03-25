import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    background: "#fafafa",
    surface: "#ffffff",
    surfaceRaised: "#f6f6f7",
    foreground: "#09090b",
    muted: "#71717a",
    border: "rgba(9, 9, 11, 0.08)",
    surfaceLow: "#f4f4f5",
    surfaceHigh: "#e4e4e7",
    surfaceHighest: "#d4d4d8",
    surfaceTint: "#52525b",
    primary: "#18181b",
    primaryStrong: "#09090b",
    outline: "#a1a1aa",
    outlineVariant: "#e4e4e7",
    accent: "#18181b",
    accentStrong: "#09090b",
    accentSoft: "rgba(24, 24, 27, 0.08)",
    success: "#15803d",
    successSoft: "rgba(21, 128, 61, 0.12)",
    warning: "#b45309",
    warningSoft: "rgba(180, 83, 9, 0.12)",
  },
  radius: {
    sm: "8px",
    md: "10px",
    lg: "12px",
    xl: "14px",
    "2xl": "18px",
    pill: "999px",
  },
  shadow: {
    soft: "0 1px 2px rgba(9, 9, 11, 0.04), 0 8px 24px rgba(9, 9, 11, 0.03)",
    elevated:
      "0 1px 2px rgba(9, 9, 11, 0.06), 0 16px 40px rgba(9, 9, 11, 0.06)",
    emphasis:
      "0 0 0 1px rgba(9, 9, 11, 0.06), 0 12px 30px rgba(9, 9, 11, 0.08)",
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
    display:
      '"Space Grotesk", "IBM Plex Sans", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif',
    mono: '"IBM Plex Mono", "SFMono-Regular", Consolas, monospace',
  },
  text: {
    size: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.375rem",
      "2xl": "1.625rem",
      "3xl": "2rem",
      "4xl": "clamp(2.35rem, 5vw, 3.25rem)",
      hero: "clamp(2.5rem, 6vw, 4.5rem)",
    },
    lineHeight: {
      compact: "1.05",
      heading: "1.18",
      body: "1.6",
      relaxed: "1.7",
      prose: "1.8",
    },
    weight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    tracking: {
      tight: "-0.045em",
      snug: "-0.02em",
      normal: "0",
      wide: "0.08em",
      caps: "0.14em",
    },
  },
});

globalStyle(":root", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: {
        [vars.color.background]: "#09090b",
        [vars.color.surface]: "#111113",
        [vars.color.surfaceRaised]: "#18181b",
        [vars.color.foreground]: "#fafafa",
        [vars.color.muted]: "#a1a1aa",
        [vars.color.border]: "rgba(244, 244, 245, 0.1)",
        [vars.color.surfaceLow]: "#1f1f23",
        [vars.color.surfaceHigh]: "#27272a",
        [vars.color.surfaceHighest]: "#3f3f46",
        [vars.color.surfaceTint]: "#d4d4d8",
        [vars.color.primary]: "#fafafa",
        [vars.color.primaryStrong]: "#ffffff",
        [vars.color.outline]: "#71717a",
        [vars.color.outlineVariant]: "#27272a",
        [vars.color.accent]: "#fafafa",
        [vars.color.accentStrong]: "#ffffff",
        [vars.color.accentSoft]: "rgba(244, 244, 245, 0.12)",
        [vars.color.success]: "#4ade80",
        [vars.color.successSoft]: "rgba(74, 222, 128, 0.14)",
        [vars.color.warning]: "#fb923c",
        [vars.color.warningSoft]: "rgba(251, 146, 60, 0.16)",
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
  fontSize: vars.text.size.md,
  fontWeight: vars.text.weight.regular,
  lineHeight: vars.text.lineHeight.body,
  fontKerning: "normal",
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
