import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./global.css";

export const authPage = style({
  minHeight: "100vh",
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.15fr) minmax(360px, 460px)",
  background:
    "linear-gradient(135deg, color-mix(in srgb, var(--background) 74%, #edf6ff 26%) 0%, color-mix(in srgb, var(--background) 86%, #fff4df 14%) 100%)",
  "@media": {
    "screen and (max-width: 980px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const authHero = style({
  position: "relative",
  overflow: "hidden",
  padding: "72px 64px",
  display: "grid",
  alignContent: "space-between",
  gap: "40px",
  background:
    "radial-gradient(circle at top left, rgba(11, 101, 255, 0.16), transparent 38%), radial-gradient(circle at bottom right, rgba(255, 169, 77, 0.18), transparent 32%)",
  "@media": {
    "screen and (max-width: 980px)": {
      padding: "40px 24px 24px",
    },
  },
});

export const authKicker = style({
  margin: 0,
  color: vars.color.accentStrong,
  fontFamily: vars.font.display,
  fontSize: "0.82rem",
  fontWeight: 700,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
});

export const authHeroBody = style({
  maxWidth: "34rem",
  display: "grid",
  gap: "24px",
});

export const authTitle = style({
  margin: 0,
  fontFamily: vars.font.display,
  fontSize: "clamp(3rem, 7vw, 5.75rem)",
  lineHeight: 0.95,
  letterSpacing: "-0.06em",
});

export const authDescription = style({
  margin: 0,
  maxWidth: "32rem",
  color: vars.color.muted,
  fontSize: "1.05rem",
  lineHeight: 1.8,
});

export const authHighlights = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "16px",
  "@media": {
    "screen and (max-width: 680px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const authHighlightCard = style({
  padding: vars.space[5],
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  background: "color-mix(in srgb, var(--surface) 84%, transparent)",
  backdropFilter: "blur(12px)",
});

export const authHighlightLabel = style({
  margin: "0 0 8px",
  color: vars.color.muted,
  fontSize: "0.82rem",
  fontWeight: 600,
});

export const authHighlightValue = style({
  margin: 0,
  fontFamily: vars.font.display,
  fontSize: "1.35rem",
  fontWeight: 700,
});

export const authPanel = style({
  display: "grid",
  alignItems: "center",
  padding: "40px",
  "@media": {
    "screen and (max-width: 980px)": {
      padding: "24px 24px 40px",
    },
  },
});

export const authCard = style({
  width: "100%",
  maxWidth: "440px",
  justifySelf: "center",
  padding: "36px",
  borderRadius: vars.radius["2xl"],
  border: `1px solid ${vars.color.border}`,
  background: "color-mix(in srgb, var(--surface) 94%, transparent)",
  boxShadow: vars.shadow.elevated,
});

export const authStack = style({
  display: "grid",
  gap: "16px",
});

export const authHeading = style({
  margin: 0,
  fontFamily: vars.font.display,
  fontSize: "2rem",
  letterSpacing: "-0.04em",
});

export const authSubheading = style({
  margin: 0,
  color: vars.color.muted,
  lineHeight: 1.7,
});

export const oauthButton = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  padding: "16px 18px",
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  color: vars.color.foreground,
  font: "inherit",
  fontWeight: 600,
  cursor: "pointer",
  transition: "transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease",
  selectors: {
    "&:hover": {
      transform: "translateY(-1px)",
      borderColor: vars.color.accent,
      boxShadow: "0 14px 32px rgba(11, 101, 255, 0.1)",
    },
  },
});

export const oauthMeta = style({
  display: "grid",
  gap: "4px",
  textAlign: "left",
});

export const oauthLabel = style({
  fontSize: "1rem",
});

export const oauthCaption = style({
  color: vars.color.muted,
  fontSize: "0.86rem",
  fontWeight: 500,
});

export const authFootnote = style({
  margin: 0,
  color: vars.color.muted,
  fontSize: "0.86rem",
  lineHeight: 1.6,
});

export const dashboardPage = style({
  minHeight: "100vh",
  background:
    "linear-gradient(180deg, color-mix(in srgb, var(--background) 90%, #eef5ff 10%) 0%, var(--background) 100%)",
});

export const shell = style({
  minHeight: "100vh",
  display: "grid",
  gridTemplateColumns: "280px minmax(0, 1fr)",
  "@media": {
    "screen and (max-width: 980px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const sidebar = style({
  borderRight: `1px solid ${vars.color.border}`,
  background: "color-mix(in srgb, var(--surface) 92%, transparent)",
  padding: "28px 24px",
  display: "grid",
  alignContent: "start",
  gap: "28px",
  "@media": {
    "screen and (max-width: 980px)": {
      borderRight: 0,
      borderBottom: `1px solid ${vars.color.border}`,
      position: "sticky",
      top: 0,
      zIndex: 10,
      backdropFilter: "blur(12px)",
    },
  },
});

export const brandBlock = style({
  display: "grid",
  gap: "8px",
});

export const brandEyebrow = style({
  margin: 0,
  color: vars.color.accentStrong,
  fontFamily: vars.font.display,
  fontSize: "0.8rem",
  fontWeight: 700,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
});

export const brandTitle = style({
  margin: 0,
  fontFamily: vars.font.display,
  fontSize: "1.65rem",
  fontWeight: 700,
  letterSpacing: "-0.04em",
});

export const brandDescription = style({
  margin: 0,
  color: vars.color.muted,
  fontSize: "0.92rem",
  lineHeight: 1.6,
});

export const projectBadge = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 12px",
  borderRadius: vars.radius.pill,
  background: vars.color.surfaceRaised,
  color: vars.color.foreground,
  fontSize: "0.88rem",
  fontWeight: 600,
});

export const navList = style({
  display: "grid",
  gap: "10px",
});

export const navLink = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  padding: "13px 14px",
  borderRadius: vars.radius.md,
  color: vars.color.muted,
  textDecoration: "none",
  fontWeight: 600,
  transition: "background-color 160ms ease, color 160ms ease, transform 160ms ease",
  selectors: {
    "&:hover": {
      background: vars.color.surfaceRaised,
      color: vars.color.foreground,
      transform: "translateX(2px)",
    },
  },
});

export const navLinkActive = style({
  background: vars.color.foreground,
  color: vars.color.background,
});

export const sidebarMeta = style({
  display: "grid",
  gap: "12px",
});

export const sidebarMetaCard = style({
  padding: vars.space[4],
  borderRadius: vars.radius.lg,
  background: vars.color.surfaceRaised,
  border: `1px solid ${vars.color.border}`,
});

export const sidebarMetaLabel = style({
  margin: "0 0 6px",
  color: vars.color.muted,
  fontSize: "0.78rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
});

export const sidebarMetaValue = style({
  margin: 0,
  fontSize: "0.95rem",
  fontWeight: 600,
  lineHeight: 1.5,
});

export const content = style({
  padding: "32px",
  display: "grid",
  gap: "24px",
  "@media": {
    "screen and (max-width: 980px)": {
      padding: "24px",
    },
  },
});

export const topbar = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexWrap: "wrap",
});

export const pageIntro = style({
  display: "grid",
  gap: "10px",
});

export const pageEyebrow = style({
  margin: 0,
  color: vars.color.muted,
  fontSize: "0.82rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
});

export const pageTitle = style({
  margin: 0,
  fontFamily: vars.font.display,
  fontSize: "clamp(2rem, 4vw, 3rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.05em",
});

export const pageDescription = style({
  margin: 0,
  maxWidth: "48rem",
  color: vars.color.muted,
  lineHeight: 1.7,
});

export const actionRow = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  flexWrap: "wrap",
});

export const primaryButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 16px",
  borderRadius: vars.radius.sm,
  border: 0,
  background: vars.color.foreground,
  color: vars.color.background,
  textDecoration: "none",
  fontWeight: 700,
});

export const secondaryButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 16px",
  borderRadius: vars.radius.sm,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  color: vars.color.foreground,
  textDecoration: "none",
  fontWeight: 700,
});

export const grid = style({
  display: "grid",
  gap: "20px",
});

export const metricGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "16px",
  "@media": {
    "screen and (max-width: 1100px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    "screen and (max-width: 640px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const metricCard = style({
  padding: vars.space[5],
  borderRadius: vars.radius.xl,
  background: vars.color.surfaceRaised,
  border: `1px solid ${vars.color.border}`,
});

export const metricLabel = style({
  margin: "0 0 8px",
  color: vars.color.muted,
  fontSize: "0.86rem",
  fontWeight: 600,
});

export const metricValue = style({
  margin: 0,
  fontFamily: vars.font.display,
  fontSize: "2rem",
  fontWeight: 700,
  letterSpacing: "-0.04em",
});

export const splitGrid = style({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.3fr) minmax(280px, 0.7fr)",
  gap: "20px",
  "@media": {
    "screen and (max-width: 1100px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const list = style({
  display: "grid",
  gap: "14px",
});

export const itemCard = style({
  display: "grid",
  gap: "12px",
  padding: "18px",
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
});

export const itemHeader = style({
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  gap: "12px",
});

export const itemTitleLink = style({
  color: vars.color.foreground,
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: 700,
});

export const itemText = style({
  margin: 0,
  color: vars.color.muted,
  lineHeight: 1.7,
});

export const itemMeta = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
});

export const chip = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  padding: "6px 10px",
  borderRadius: vars.radius.pill,
  background: vars.color.surfaceRaised,
  fontSize: "0.8rem",
  fontWeight: 700,
});

export const chipMuted = style({
  color: vars.color.muted,
});

export const chipAccent = style({
  background: vars.color.accentSoft,
  color: vars.color.accentStrong,
});

export const chipSuccess = style({
  background: vars.color.successSoft,
  color: vars.color.success,
});

export const chipWarning = style({
  background: vars.color.warningSoft,
  color: vars.color.warning,
});

export const chipNeutral = style({
  background: vars.color.surfaceRaised,
  color: vars.color.foreground,
});

export const searchBox = style({
  width: "100%",
  padding: "14px 16px",
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  color: vars.color.foreground,
  font: "inherit",
});

export const inlineFields = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "16px",
  "@media": {
    "screen and (max-width: 720px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const stepGrid = style({
  display: "grid",
  gridTemplateColumns: "220px minmax(0, 1fr)",
  gap: "20px",
  "@media": {
    "screen and (max-width: 900px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const stepRail = style({
  display: "grid",
  gap: "12px",
  alignContent: "start",
});

export const stepActive = style({
  borderColor: vars.color.accent,
  background: vars.color.accentSoft,
});

export const stepLabel = style({
  margin: "0 0 6px",
  color: vars.color.muted,
  fontSize: "0.8rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
});

export const stepTitle = style({
  margin: 0,
  fontWeight: 700,
});

export const stepText = style({
  margin: "8px 0 0",
  color: vars.color.muted,
  fontSize: "0.88rem",
  lineHeight: 1.6,
});

export const detailGrid = style({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.35fr) minmax(280px, 0.65fr)",
  gap: "20px",
  "@media": {
    "screen and (max-width: 1100px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const prose = style({
  color: vars.color.foreground,
  lineHeight: 1.8,
});

globalStyle(`${prose} h1, ${prose} h2, ${prose} h3`, {
  marginTop: "1.4em",
  marginBottom: "0.5em",
  fontFamily: vars.font.display,
  letterSpacing: "-0.03em",
});

globalStyle(`${prose} h1`, {
  fontSize: "1.8rem",
});

globalStyle(`${prose} h2`, {
  fontSize: "1.35rem",
});

globalStyle(`${prose} p, ${prose} ul, ${prose} ol`, {
  marginTop: 0,
  marginBottom: "1em",
});

globalStyle(`${prose} ul, ${prose} ol`, {
  paddingLeft: "1.2rem",
});

export const relationList = style({
  display: "grid",
  gap: "12px",
});

export const relationItem = style({
  padding: "14px 16px",
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
});

export const relationTitle = style({
  margin: "0 0 6px",
  fontWeight: 700,
});

export const relationText = style({
  margin: 0,
  color: vars.color.muted,
  fontSize: "0.92rem",
  lineHeight: 1.6,
});

export const markdownGrid = style({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
  gap: "20px",
  "@media": {
    "screen and (max-width: 980px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const editorPane = style({
  padding: vars.space[5],
  borderRadius: vars.radius.xl,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
});

export const editorTitle = style({
  margin: "0 0 12px",
  fontFamily: vars.font.display,
  fontSize: "1.15rem",
  fontWeight: 700,
});

export const markdownTextarea = style({
  width: "100%",
  minHeight: "460px",
  padding: "18px",
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surfaceRaised,
  color: vars.color.foreground,
  fontFamily: vars.font.mono,
  fontSize: "0.95rem",
  lineHeight: 1.7,
  resize: "vertical",
});

export const previewPane = style({
  minHeight: "100%",
  padding: vars.space[5],
  borderRadius: vars.radius.xl,
  border: `1px solid ${vars.color.border}`,
  background: "linear-gradient(180deg, color-mix(in srgb, var(--surface) 92%, #fbfdff 8%) 0%, var(--surface) 100%)",
});

export const emptyState = style({
  padding: vars.space[6],
  borderRadius: vars.radius.xl,
  border: `1px dashed ${vars.color.border}`,
  color: vars.color.muted,
  lineHeight: 1.7,
  background: vars.color.surfaceRaised,
});

export const smallText = style({
  margin: 0,
  color: vars.color.muted,
  fontSize: "0.88rem",
  lineHeight: 1.6,
});
