import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./global.css";

export const page = style({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "32px",
  background:
    "radial-gradient(circle at top left, rgba(199, 167, 117, 0.18), transparent 34%), linear-gradient(180deg, var(--background), color-mix(in srgb, var(--background) 82%, #d7c3a1 18%))",
  "@media": {
    "screen and (max-width: 720px)": {
      padding: "16px",
    },
  },
});

export const main = style({
  width: "min(100%, 768px)",
  minHeight: "calc(100vh - 64px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "32px",
  padding: "72px 64px",
  border: `1px solid ${vars.color.border}`,
  background: "color-mix(in srgb, var(--surface) 94%, transparent)",
  boxShadow: "0 24px 80px rgba(0, 0, 0, 0.08)",
  "@media": {
    "screen and (max-width: 720px)": {
      minHeight: "auto",
      padding: "48px 24px",
    },
  },
});

export const hero = style({
  display: "grid",
  gap: "16px",
});

export const kicker = style({
  margin: 0,
  color: vars.color.muted,
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.24em",
  textTransform: "uppercase",
});

export const title = style({
  margin: 0,
  maxWidth: "12ch",
  fontSize: "clamp(2.75rem, 6vw, 4rem)",
  lineHeight: 0.95,
  letterSpacing: "-0.04em",
});

export const description = style({
  margin: 0,
  maxWidth: "40rem",
  color: vars.color.muted,
  fontSize: "1.1rem",
  lineHeight: 1.8,
});

export const notes = style({
  display: "grid",
  gap: "12px",
  color: vars.color.muted,
  fontSize: "0.95rem",
});

globalStyle(`${description} code`, {
  padding: "0.16rem 0.4rem",
  borderRadius: "999px",
  background: "rgba(127, 127, 127, 0.12)",
  fontSize: "0.92em",
});

globalStyle(`${notes} code`, {
  padding: "0.16rem 0.4rem",
  borderRadius: "999px",
  background: "rgba(127, 127, 127, 0.12)",
  fontSize: "0.92em",
});

globalStyle(`${notes} p`, {
  margin: 0,
});
