import { Flex } from "@/components/utils/Flex";
import { Grid } from "@/components/utils/Grid";
import {
  authCard,
  authHeading,
  authHero,
  authHighlightCard,
  authHighlightLabel,
  authHighlightValue,
  authHighlights,
  authKicker,
  authPage,
  authPanel,
  authTitle,
  oauthButton,
  oauthLabel,
} from "@/styles/app.css";

export default function Login() {
  return (
    <Grid className={authPage} minHeight="screen">
      <section className={authHero} aria-label="서비스 소개">
        <Grid gap={6} maxWidth="prose">
          <p className={authKicker}>PRD 기반 협업 허브</p>
          <h1 className={authTitle}>
            에픽, 태스크,
            <br />
            문서를 같은 맥락으로
          </h1>
        </Grid>

        <Grid className={authHighlights} gap={4}>
          <Grid className={authHighlightCard} gap={2}>
            <p className={authHighlightLabel}>구조</p>
            <p className={authHighlightValue}>Epic · Task · Docs</p>
          </Grid>
          <Grid className={authHighlightCard} gap={2}>
            <p className={authHighlightLabel}>검색</p>
            <p className={authHighlightValue}>Project Scope</p>
          </Grid>
          <Grid className={authHighlightCard} gap={2}>
            <p className={authHighlightLabel}>편집</p>
            <p className={authHighlightValue}>Split Preview</p>
          </Grid>
        </Grid>
      </section>

      <section className={authPanel}>
        <Grid className={authCard}>
          <Grid gap={4}>
            <h2 className={authHeading}>소셜 계정으로 시작</h2>

            <Flex
              render={<button type="button" />}
              className={oauthButton}
              alignItems="center"
              justifyContent="space-between"
              aria-label="Continue with GitHub"
            >
              <span className={oauthLabel}>GitHub로 계속하기</span>
              <span>01</span>
            </Flex>

            <Flex
              render={<button type="button" />}
              className={oauthButton}
              alignItems="center"
              justifyContent="space-between"
              aria-label="Continue with Google"
            >
              <span className={oauthLabel}>Google로 계속하기</span>
              <span>02</span>
            </Flex>
          </Grid>
        </Grid>
      </section>
    </Grid>
  );
}
