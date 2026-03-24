import Link from "next/link";
import { Flex } from "@/components/utils/Flex";
import { Grid } from "@/components/utils/Grid";
import {
  authCard,
  authDescription,
  authFootnote,
  authHeading,
  authHero,
  authHighlightCard,
  authHighlightLabel,
  authHighlightValue,
  authHighlights,
  authKicker,
  authPage,
  authPanel,
  authSubheading,
  authTitle,
  oauthButton,
  oauthCaption,
  oauthLabel,
  oauthMeta,
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
          <p className={authDescription}>
            mdhub는 프로젝트 단위로 기획 문서와 실행 업무를 연결해주는 협업 서비스입니다.
            로그인 후 내가 생성했거나 속한 프로젝트 목록으로 바로 진입합니다.
          </p>
        </Grid>

        <Grid className={authHighlights} gap={4}>
          <Grid className={authHighlightCard} gap={2}>
            <p className={authHighlightLabel}>프로젝트 기반</p>
            <p className={authHighlightValue}>Epic · Task · Docs</p>
          </Grid>
          <Grid className={authHighlightCard} gap={2}>
            <p className={authHighlightLabel}>검색 제한</p>
            <p className={authHighlightValue}>현재 프로젝트 내부만</p>
          </Grid>
          <Grid className={authHighlightCard} gap={2}>
            <p className={authHighlightLabel}>문서 편집</p>
            <p className={authHighlightValue}>Split View Preview</p>
          </Grid>
        </Grid>
      </section>

      <section className={authPanel}>
        <Grid className={authCard}>
          <Grid gap={4}>
            <Grid gap={4}>
              <h2 className={authHeading}>소셜 계정으로 시작</h2>
              <p className={authSubheading}>
                GitHub 또는 Google 계정으로 로그인하고 프로젝트 협업 공간으로
                이동합니다.
              </p>
            </Grid>

            <Flex
              render={<button type="button" />}
              className={oauthButton}
              alignItems="center"
              justifyContent="space-between"
              aria-label="Continue with GitHub"
            >
              <Grid className={oauthMeta} gap={0}>
                <span className={oauthLabel}>GitHub로 계속하기</span>
                <span className={oauthCaption}>개발 협업 흐름과 연결된 팀에 적합</span>
              </Grid>
              <span>01</span>
            </Flex>

            <Flex
              render={<button type="button" />}
              className={oauthButton}
              alignItems="center"
              justifyContent="space-between"
              aria-label="Continue with Google"
            >
              <Grid className={oauthMeta} gap={0}>
                <span className={oauthLabel}>Google로 계속하기</span>
                <span className={oauthCaption}>문서 협업 중심의 팀에 적합</span>
              </Grid>
              <span>02</span>
            </Flex>

            <p className={authFootnote}>
              최초 로그인 시 프로필을 생성하고, 이후 내가 소속된 프로젝트 목록으로
              이동합니다. 데모 화면은 <Link href="/">프로젝트 목록</Link>에서 확인할 수
              있습니다.
            </p>
          </Grid>
        </Grid>
      </section>
    </Grid>
  );
}
