import Link from "next/link";
import { AppShell, MarkdownPreview, SectionHeader, Surface, TextArea, TextField } from "@/components";
import { getDocument, getProject } from "@/lib/mockData";
import {
  chip,
  editorPane,
  editorTitle,
  markdownGrid,
  markdownTextarea,
  previewPane,
} from "@/styles/app.css";

type DocumentEditProps = {
  projectId?: string;
  docId?: string;
};

export function DocumentEditPage({
  projectId = "aurora-hq",
  docId = "doc-editor-spec",
}: DocumentEditProps) {
  const project = getProject(projectId);
  const document = getDocument(docId);

  return (
    <AppShell
      projectId={project.id}
      currentPath={`/projects/${project.id}/docs`}
      eyebrow="문서 편집"
      title={`${document.title} 편집`}
      description="좌측에서 마크다운을 작성하고 우측에서 즉시 프리뷰를 확인하는 스플릿 뷰 편집 화면입니다."
      actions={
        <Link className={chip} href={`/projects/${project.id}/docs/${document.id}`}>
          상세로 돌아가기
        </Link>
      }
    >
      <Surface as="section">
        <SectionHeader
          title="수동 저장 기반 편집"
          titleAs="h3"
          description="자동 저장은 제공하지 않으며, 제목은 필수값입니다. 프로젝트 범위 밖 문서와는 연결하지 않습니다."
        />
        <TextField defaultValue={document.title} label="문서 제목" required />
      </Surface>

      <section className={markdownGrid}>
        <div className={editorPane}>
          <h3 className={editorTitle}>Markdown Editor</h3>
          <TextArea
            className={markdownTextarea}
            defaultValue={document.content}
            label="문서 본문"
          />
        </div>
        <div className={previewPane}>
          <h3 className={editorTitle}>Live Preview</h3>
          <MarkdownPreview content={document.content} />
        </div>
      </section>
    </AppShell>
  );
}

export default function DocumentEditRoute() {
  return <DocumentEditPage />;
}
