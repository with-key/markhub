import Link from "next/link";
import { AppShell, SectionHeader, Surface } from "@/components";
import { getProject, getProjectDocuments } from "@/lib/mockData";
import {
  chip,
  itemCard,
  itemHeader,
  itemMeta,
  itemText,
  itemTitleLink,
} from "@/styles/app.css";

type ProjectDocsPageProps = {
  projectId?: string;
};

export function ProjectDocsPage({ projectId = "aurora-hq" }: ProjectDocsPageProps) {
  const project = getProject(projectId);
  const projectDocuments = getProjectDocuments(project.id);

  return (
    <AppShell
      projectId={project.id}
      currentPath={`/projects/${project.id}/docs`}
      eyebrow="문서"
      title="프로젝트 문서"
      description="문서는 프로젝트 안에서 작성, 조회, 수정되며 태스크 및 다른 문서와 연결할 수 있습니다."
      actions={
        <Link className={chip} href={`/projects/${project.id}/docs/new`}>
          새 문서
        </Link>
      }
    >
      <Surface as="section">
        <SectionHeader
          title="문서 목록"
          titleAs="h3"
          description="제목은 필수이며, 내용은 선택값입니다. 상세 화면에서 관련 문서와 연결 태스크를 함께 확인할 수 있습니다."
        />
        <div style={{ display: "grid", gap: "14px" }}>
          {projectDocuments.map((document) => (
            <article key={document.id} className={itemCard}>
              <div className={itemHeader}>
                <Link className={itemTitleLink} href={`/projects/${project.id}/docs/${document.id}`}>
                  {document.title}
                </Link>
                <span className={chip}>Markdown</span>
              </div>
              <p className={itemText}>
                관련 문서 {document.relatedDocumentIds.length}개 · 연결 태스크{" "}
                {document.linkedTaskIds.length}개
              </p>
              <div className={itemMeta}>
                <Link className={chip} href={`/projects/${project.id}/docs/${document.id}/edit`}>
                  편집 화면
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Surface>
    </AppShell>
  );
}

export default function ProjectDocsRoute() {
  return <ProjectDocsPage />;
}
