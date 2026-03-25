import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./global.css";
import {
  bodyMd,
  bodySm,
  eyebrow,
  heroTitle,
  labelMd,
  labelSm,
  labelXs,
  titleLg,
  titleMd,
  titleSm,
} from "./typography.css";

export const authPage = style({
  minHeight: "100vh",
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(360px, 440px)",
  background: vars.color.background,
  "@media": {
    "screen and (max-width: 980px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const authHero = style({
  position: "relative",
  padding: "56px 56px 48px",
  display: "grid",
  alignContent: "space-between",
  gap: vars.space[6],
  borderRight: `1px solid ${vars.color.outlineVariant}`,
  background:
    "radial-gradient(circle at top left, color-mix(in srgb, var(--surfaceHigh) 58%, transparent) 0%, transparent 42%)",
  "@media": {
    "screen and (max-width: 980px)": {
      padding: "32px 24px 20px",
      borderRight: 0,
      borderBottom: `1px solid ${vars.color.outlineVariant}`,
    },
  },
});

export const authKicker = style([eyebrow, {
  margin: 0,
  color: vars.color.muted,
}]);

export const authHeroBody = style({
  maxWidth: "34rem",
  display: "grid",
  gap: "24px",
});

export const authTitle = style([heroTitle, {
  margin: 0,
}]);

export const authDescription = style([bodyMd, {
  margin: 0,
  maxWidth: "28rem",
  color: vars.color.muted,
}]);

export const authHighlights = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: vars.space[3],
  "@media": {
    "screen and (max-width: 820px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const authHighlightCard = style({
  padding: vars.space[4],
  border: `1px solid ${vars.color.outlineVariant}`,
  borderRadius: vars.radius.lg,
  background: vars.color.surface,
});

export const authHighlightLabel = style([labelXs, {
  margin: 0,
  color: vars.color.muted,
}]);

export const authHighlightValue = style([labelMd, {
  margin: 0,
  fontFamily: vars.font.display,
  letterSpacing: vars.text.tracking.snug,
}]);

export const authPanel = style({
  display: "grid",
  alignItems: "center",
  padding: "32px",
  "@media": {
    "screen and (max-width: 980px)": {
      padding: "24px",
    },
  },
});

export const authCard = style({
  width: "100%",
  maxWidth: "400px",
  justifySelf: "center",
  padding: vars.space[6],
  borderRadius: vars.radius.xl,
  border: `1px solid ${vars.color.outlineVariant}`,
  background: vars.color.surface,
  boxShadow: vars.shadow.soft,
});

export const authStack = style({
  display: "grid",
  gap: "16px",
});

export const authHeading = style([titleMd, {
  margin: 0,
}]);

export const authSubheading = style([bodyMd, {
  margin: 0,
  color: vars.color.muted,
  lineHeight: vars.text.lineHeight.relaxed,
}]);

export const oauthButton = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  minHeight: "48px",
  padding: "0 16px",
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.outlineVariant}`,
  background: vars.color.surface,
  color: vars.color.foreground,
  font: "inherit",
  fontWeight: 600,
  cursor: "pointer",
  transition: "background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease",
  selectors: {
    "&:hover": {
      background: vars.color.surfaceLow,
      borderColor: vars.color.foreground,
    },
    "&:focus-visible": {
      outline: "none",
      borderColor: vars.color.foreground,
      boxShadow: `0 0 0 4px color-mix(in srgb, ${vars.color.surfaceTint} 14%, transparent)`,
    },
  },
});

export const oauthMeta = style({
  display: "grid",
  gap: "4px",
  textAlign: "left",
});

export const oauthLabel = style({
  fontSize: vars.text.size.md,
});

export const oauthCaption = style({
  color: vars.color.muted,
  fontSize: vars.text.size.sm,
  fontWeight: vars.text.weight.medium,
});

export const authFootnote = style([bodySm, {
  margin: 0,
  color: vars.color.muted,
}]);

export const dashboardPage = style({
  minHeight: "100vh",
  background:
    "linear-gradient(180deg, color-mix(in srgb, var(--background) 90%, #eef5ff 10%) 0%, var(--background) 100%)",
});

export const dashboardMain = style({
  padding: "24px",
  display: "grid",
  gap: "16px",
  "@media": {
    "screen and (max-width: 720px)": {
      padding: "16px",
      gap: "12px",
    },
  },
});

export const homeHeroSurface = style({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.45fr) auto",
  alignItems: "end",
  gap: "16px",
  "@media": {
    "screen and (max-width: 900px)": {
      gridTemplateColumns: "1fr",
      alignItems: "start",
    },
  },
});

export const homeIntro = style({
  display: "grid",
  gap: "8px",
  maxWidth: "46rem",
});

export const homeEyebrow = style([eyebrow, {
  margin: 0,
  color: vars.color.muted,
}]);

export const homeTitle = style([titleLg, {
  margin: 0,
  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
  lineHeight: vars.text.lineHeight.compact,
}]);

export const homeDescription = style([bodySm, {
  margin: 0,
  maxWidth: "42rem",
  color: vars.color.muted,
}]);

export const homeActionRow = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  "@media": {
    "screen and (max-width: 900px)": {
      justifyContent: "flex-start",
    },
  },
});

export const homeSectionSurface = style({
  display: "grid",
  gap: "14px",
});

export const homeSectionHeader = style({
  gap: "6px",
});

export const homeProjectList = style({
  display: "grid",
  gap: "10px",
});

export const homeProjectCard = style({
  display: "grid",
  gap: "10px",
  padding: "14px",
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
});

export const homeProjectHeader = style({
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  gap: "10px",
});

export const homeProjectTitleLink = style([labelMd, {
  color: vars.color.foreground,
  textDecoration: "none",
  lineHeight: 1.35,
}]);

export const homeProjectText = style([bodySm, {
  margin: 0,
  color: vars.color.muted,
}]);

export const homeProjectMeta = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
});

export const compactChip = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  minHeight: "26px",
  padding: "0 9px",
  borderRadius: vars.radius.sm,
  background: vars.color.surfaceRaised,
  fontSize: vars.text.size.xs,
  fontWeight: vars.text.weight.bold,
  letterSpacing: "-0.01em",
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

export const brandEyebrow = style([eyebrow, {
  margin: 0,
  color: vars.color.accentStrong,
  letterSpacing: "0.18em",
}]);

export const brandTitle = style([titleLg, {
  margin: 0,
  fontSize: vars.text.size["2xl"],
}]);

export const brandDescription = style([bodySm, {
  margin: 0,
  color: vars.color.muted,
}]);

export const projectBadge = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 12px",
  borderRadius: vars.radius.pill,
  background: vars.color.surfaceRaised,
  color: vars.color.foreground,
  fontSize: vars.text.size.sm,
  fontWeight: vars.text.weight.semibold,
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

export const sidebarMetaLabel = style([labelXs, {
  margin: "0 0 6px",
  color: vars.color.muted,
}]);

export const sidebarMetaValue = style([labelMd, {
  margin: 0,
  lineHeight: 1.5,
}]);

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

export const pageEyebrow = style([eyebrow, {
  margin: 0,
  color: vars.color.muted,
  letterSpacing: "0.12em",
}]);

export const pageTitle = style([heroTitle, {
  margin: 0,
  lineHeight: 1.02,
  fontSize: "clamp(2rem, 4vw, 3rem)",
}]);

export const pageDescription = style([bodyMd, {
  margin: 0,
  maxWidth: "48rem",
  color: vars.color.muted,
  lineHeight: vars.text.lineHeight.relaxed,
}]);

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

export const metricLabel = style([labelSm, {
  margin: "0 0 8px",
  color: vars.color.muted,
}]);

export const metricValue = style([titleLg, {
  margin: 0,
  fontSize: "2rem",
  fontVariantNumeric: "tabular-nums",
}]);

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

export const itemTitleLink = style([labelMd, {
  color: vars.color.foreground,
  textDecoration: "none",
}]);

export const itemText = style([bodyMd, {
  margin: 0,
  color: vars.color.muted,
  lineHeight: vars.text.lineHeight.relaxed,
}]);

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
  fontSize: vars.text.size.xs,
  fontWeight: vars.text.weight.bold,
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

export const stepLabel = style([labelXs, {
  margin: "0 0 6px",
  color: vars.color.muted,
}]);

export const stepTitle = style({
  margin: 0,
  fontWeight: vars.text.weight.bold,
});

export const stepText = style([bodySm, {
  margin: "8px 0 0",
  color: vars.color.muted,
}]);

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
  lineHeight: vars.text.lineHeight.prose,
});

globalStyle(`${prose} h1, ${prose} h2, ${prose} h3`, {
  marginTop: "1.4em",
  marginBottom: "0.5em",
  fontFamily: vars.font.display,
  letterSpacing: "-0.03em",
});

globalStyle(`${prose} h1`, {
  fontSize: vars.text.size["3xl"],
});

globalStyle(`${prose} h2`, {
  fontSize: vars.text.size.xl,
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

export const relationText = style([bodySm, {
  margin: 0,
  color: vars.color.muted,
}]);

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

export const editorTitle = style([titleSm, {
  margin: "0 0 12px",
}]);

export const markdownTextarea = style({
  width: "100%",
  minHeight: "460px",
  padding: "18px",
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surfaceRaised,
  color: vars.color.foreground,
  fontFamily: vars.font.mono,
  fontSize: vars.text.size.md,
  lineHeight: vars.text.lineHeight.relaxed,
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
  lineHeight: vars.text.lineHeight.relaxed,
  background: vars.color.surfaceRaised,
});

export const smallText = style([bodySm, {
  margin: 0,
  color: vars.color.muted,
}]);
