import Link from "next/link";
import { AppShell, SectionHeader, Surface, TextArea, TextField } from "@/components";
import { getProject } from "@/lib/mockData";
import {
  actionRow,
  primaryButton,
} from "@/styles/app.css";

type NewDocumentProps = {
  projectId?: string;
};

export function NewDocumentPage({ projectId = "aurora-hq" }: NewDocumentProps) {
  const project = getProject(projectId);

  return (
    <AppShell
      projectId={project.id}
      currentPath={`/projects/${project.id}/docs`}
      eyebrow="문서 생성"
      title="새 마크다운 문서"
      description="프로젝트 내부 문서를 생성합니다. 제목은 필수이며, 내용은 선택값입니다."
    >
      <Surface as="section">
        <SectionHeader
          title="문서 기본 정보"
          titleAs="h3"
          description="저장은 수동으로만 처리하며 자동 저장은 지원하지 않습니다."
        />
        <TextField
          id="doc-title"
          defaultValue="새 협업 문서 초안"
          label="제목"
          placeholder="문서 제목"
          required
        />
        <div style={{ marginTop: "16px" }}>
          <TextArea
            id="doc-body"
            defaultValue="# 새 문서

## 목표
- 프로젝트 핵심 맥락 정리
- 관련 태스크 연결 준비"
            label="본문"
          />
        </div>
        <div className={actionRow} style={{ marginTop: "20px" }}>
          <Link className={primaryButton} href={`/projects/${project.id}/docs/doc-editor-spec/edit`}>
            편집 화면에서 계속 작성
          </Link>
        </div>
      </Surface>
    </AppShell>
  );
}

export default function NewDocumentRoute() {
  return <NewDocumentPage />;
}
