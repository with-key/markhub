import Link from "next/link";
import { SectionHeader, Surface, TextAreaField, TextField } from "@/components";
import {
  actionRow,
  dashboardPage,
  pageDescription,
  pageEyebrow,
  pageIntro,
  pageTitle,
  primaryButton,
  secondaryButton,
  smallText,
  stepActive,
  stepGrid,
  stepLabel,
  stepRail,
  stepText,
  stepTitle,
} from "@/styles/app.css";

export default function NewProjectPage() {
  return (
    <div className={dashboardPage}>
      <main className={stepGrid} style={{ padding: "32px" }}>
        <aside className={stepRail}>
          <Surface as="div" className={stepActive} padding="sm" variant="card">
            <p className={stepLabel}>Step 1</p>
            <p className={stepTitle}>기본 정보 입력</p>
            <p className={stepText}>프로젝트 이름과 설명을 정의합니다.</p>
          </Surface>
          <Surface as="div" padding="sm" variant="card">
            <p className={stepLabel}>Step 2</p>
            <p className={stepTitle}>참여/구조 설정</p>
            <p className={stepText}>초기 참여자와 운영 기준을 확인합니다.</p>
          </Surface>
        </aside>

        <Surface as="section">
          <div className={pageIntro}>
            <p className={pageEyebrow}>2단계 생성 플로우</p>
            <h1 className={pageTitle}>새 프로젝트 만들기</h1>
            <p className={pageDescription}>
              PRD 기준의 프로젝트 생성 흐름입니다. 사용자는 반드시 프로젝트에 소속되며,
              기본 정보 입력 이후 협업 구조를 확인하는 2단계를 거칩니다.
            </p>
          </div>

          <div style={{ marginTop: "24px" }}>
            <TextField
              id="project-name"
              defaultValue="Aurora HQ"
              label="프로젝트 이름"
              placeholder="프로젝트 이름을 입력하세요"
              required
            />
          </div>

          <div style={{ marginTop: "16px" }}>
            <TextAreaField
              id="project-description"
              defaultValue="신규 협업 허브의 문서, 에픽, 태스크를 연결해 운영하기 위한 프로젝트입니다."
              label="프로젝트 설명"
            />
          </div>

          <Surface as="div" style={{ marginTop: "24px" }} variant="panel">
            <SectionHeader title="참여/운영 설정 확인" titleAs="h2" />
            <p className={stepLabel}>다음 단계 미리보기</p>
            <p className={smallText} style={{ marginTop: "8px" }}>
              초기 참여자 초대, 프로젝트 운영 메모, 기본 워크스페이스 구조를 최종 생성 전에
              한 번 더 검토합니다.
            </p>
          </Surface>

          <div className={actionRow} style={{ marginTop: "24px" }}>
            <Link className={primaryButton} href="/projects/aurora-hq">
              다음 단계로 이동
            </Link>
            <Link className={secondaryButton} href="/">
              목록으로 돌아가기
            </Link>
          </div>
        </Surface>
      </main>
    </div>
  );
}
