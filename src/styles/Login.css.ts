import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./global.css";

export const page = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  background: vars.color.background,
});

export const main = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  "@media": {
    "screen and (min-width: 900px)": {
      flexDirection: "row",
    },
  },
});

export const heroPanel = style({
  display: "none",
  position: "relative",
  overflow: "hidden",
  background: vars.color.surfaceLow,
  padding: "48px",
  "@media": {
    "screen and (min-width: 900px)": {
      width: "60%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
});

export const brand = style({
  position: "relative",
  zIndex: 1,
  margin: 0,
  color: vars.color.foreground,
  fontFamily: vars.font.display,
  fontSize: "1.1rem",
  fontWeight: 800,
  letterSpacing: "0.28em",
  textTransform: "uppercase",
});

export const heroContent = style({
  position: "relative",
  zIndex: 1,
  maxWidth: "32rem",
  display: "grid",
  gap: "24px",
});

export const heroTitle = style({
  margin: 0,
  fontFamily: vars.font.display,
  fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
  fontWeight: 800,
  lineHeight: 1,
  letterSpacing: "-0.05em",
});

export const heroDescription = style({
  margin: 0,
  color: vars.color.muted,
  fontSize: "1.05rem",
  lineHeight: 1.8,
});

export const heroFootnote = style({
  position: "relative",
  zIndex: 1,
  margin: 0,
  color: vars.color.outline,
  fontFamily: vars.font.display,
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
});

export const heroGlow = style({
  position: "absolute",
  right: "-10%",
  bottom: "-10%",
  width: "80%",
  height: "80%",
  borderRadius: "999px",
  opacity: 0.45,
  background: "radial-gradient(circle, rgba(118, 119, 125, 0.24) 0%, rgba(242, 244, 246, 0) 70%)",
  filter: "blur(42px)",
});

export const loginSection = style({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "32px 24px",
  background: vars.color.surface,
  "@media": {
    "screen and (min-width: 900px)": {
      padding: "48px 80px",
      background: vars.color.background,
    },
  },
});

export const loginShell = style({
  width: "100%",
  maxWidth: "420px",
});

export const mobileBrand = style({
  margin: "0 0 48px",
  color: vars.color.foreground,
  fontFamily: vars.font.display,
  fontSize: "1rem",
  fontWeight: 800,
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  "@media": {
    "screen and (min-width: 900px)": {
      display: "none",
    },
  },
});

export const card = style({
  background: vars.color.surface,
  borderRadius: "16px",
  padding: "32px 24px",
  boxShadow: "0 20px 40px -10px rgba(25, 28, 30, 0.06)",
  "@media": {
    "screen and (min-width: 900px)": {
      padding: "48px",
    },
  },
});

export const intro = style({
  marginBottom: "40px",
});

export const heading = style({
  margin: "0 0 8px",
  fontFamily: vars.font.display,
  fontSize: "2rem",
  fontWeight: 700,
  letterSpacing: "-0.04em",
});

export const subheading = style({
  margin: 0,
  color: vars.color.muted,
  fontSize: "0.95rem",
  lineHeight: 1.6,
});

export const form = style({
  display: "grid",
  gap: "24px",
});

export const field = style({
  display: "grid",
  gap: "8px",
});

export const fieldHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
});

export const label = style({
  color: "#45464d",
  fontSize: "0.95rem",
  fontWeight: 500,
});

export const auxiliaryLink = style({
  color: vars.color.muted,
  fontSize: "0.78rem",
  fontWeight: 700,
  textDecoration: "none",
  transition: "color 180ms ease",
  selectors: {
    "&:hover": {
      color: vars.color.surfaceTint,
    },
  },
});

export const input = style({
  width: "100%",
  padding: "14px 16px",
  border: 0,
  borderBottom: "2px solid transparent",
  borderRadius: "8px",
  background: vars.color.surfaceHighest,
  color: vars.color.foreground,
  font: "inherit",
  outline: "none",
  transition: "background-color 180ms ease, border-color 180ms ease",
  selectors: {
    "&::placeholder": {
      color: "rgba(118, 119, 125, 0.7)",
    },
    "&:focus": {
      background: vars.color.surface,
      borderBottomColor: vars.color.surfaceTint,
    },
  },
});

export const submitButton = style({
  width: "100%",
  padding: "16px",
  border: 0,
  borderRadius: "8px",
  background: `linear-gradient(180deg, ${vars.color.primary} 0%, ${vars.color.primaryStrong} 100%)`,
  color: "#ffffff",
  fontFamily: vars.font.display,
  fontSize: "0.95rem",
  fontWeight: 800,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "transform 180ms ease, filter 180ms ease",
  selectors: {
    "&:hover": {
      filter: "brightness(1.08)",
      transform: "translateY(-1px)",
    },
  },
});

export const divider = style({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  margin: "40px 0",
  color: vars.color.outline,
  fontSize: "0.65rem",
  fontWeight: 800,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
});

export const dividerLine = style({
  flex: 1,
  height: "1px",
  background: "rgba(198, 198, 205, 0.3)",
});

export const socialGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "16px",
});

export const socialButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  padding: "14px 16px",
  border: 0,
  borderRadius: "8px",
  background: vars.color.surfaceHigh,
  color: vars.color.foreground,
  font: "inherit",
  fontSize: "0.92rem",
  fontWeight: 700,
  cursor: "pointer",
  transition: "background-color 180ms ease, transform 180ms ease",
  selectors: {
    "&:hover": {
      background: "#eceef0",
      transform: "translateY(-1px)",
    },
  },
});

export const socialIcon = style({
  width: "20px",
  height: "20px",
  flexShrink: 0,
});

export const signUp = style({
  margin: "48px 0 0",
  color: vars.color.muted,
  fontSize: "0.8rem",
  lineHeight: 1.6,
  textAlign: "center",
});

export const signUpLink = style({
  marginLeft: "6px",
  color: vars.color.foreground,
  fontWeight: 800,
  textDecoration: "underline",
  textDecorationColor: vars.color.outlineVariant,
  textUnderlineOffset: "4px",
  transition: "color 180ms ease",
  selectors: {
    "&:hover": {
      color: vars.color.surfaceTint,
    },
  },
});

export const footer = style({
  width: "100%",
  padding: "20px 24px 40px",
  "@media": {
    "screen and (min-width: 900px)": {
      padding: "0 48px 40px",
    },
  },
});

export const footerInner = style({
  width: "100%",
  maxWidth: "1280px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "24px",
  opacity: 0.65,
  color: vars.color.foreground,
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  "@media": {
    "screen and (min-width: 900px)": {
      flexDirection: "row",
    },
  },
});

export const footerCopy = style({
  margin: 0,
});

export const footerNav = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "24px",
});

export const footerLink = style({
  color: vars.color.muted,
  textDecoration: "none",
  transition: "color 180ms ease",
  selectors: {
    "&:hover": {
      color: vars.color.foreground,
    },
  },
});

globalStyle(`${input}:-webkit-autofill`, {
  WebkitBoxShadow: `0 0 0 100px ${vars.color.surfaceHighest} inset`,
  WebkitTextFillColor: vars.color.foreground,
});
