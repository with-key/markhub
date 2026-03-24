import Link from "next/link";
import { AppShell, MarkdownPreview, SectionHeader, Surface } from "@/components";
import {
  getAvailableDocumentRelations,
  getDocument,
  getDocumentLinkedTasks,
  getDocumentRelations,
  getProject,
} from "@/lib/mockData";
import {
  chip,
  detailGrid,
  relationItem,
  relationList,
  relationText,
  relationTitle,
} from "@/styles/app.css";

type DocumentDetailProps = {
  projectId?: string;
  docId?: string;
};

export function DocumentDetailPage({
  projectId = "aurora-hq",
  docId = "doc-project-setup",
}: DocumentDetailProps) {
  const project = getProject(projectId);
  const document = getDocument(docId);
  const relations = getDocumentRelations(document.id);
  const candidateRelations = getAvailableDocumentRelations(document.id);
  const linkedTasks = getDocumentLinkedTasks(document.id);

  return (
    <AppShell
      projectId={project.id}
      currentPath={`/projects/${project.id}/docs`}
      eyebrow="문서 상세"
      title={document.title}
      description="문서 상세에서는 본문, 연결된 태스크, 관련 문서 관계를 함께 관리합니다."
      actions={
        <Link className={chip} href={`/projects/${project.id}/docs/${document.id}/edit`}>
          편집
        </Link>
      }
    >
      <div className={detailGrid}>
        <Surface as="section">
          <SectionHeader
            title="문서 본문"
            titleAs="h3"
            description="문서 본문은 마크다운으로 저장되며, 프로젝트 범위 안에서 상세와 편집 화면을 오갈 수 있습니다."
          />
          <MarkdownPreview content={document.content} />
        </Surface>

        <Surface as="aside">
          <SectionHeader title="연결 정보" titleAs="h3" />
          <div className={relationList}>
            <div className={relationItem}>
              <p className={relationTitle}>연결된 태스크</p>
              <p className={relationText}>{linkedTasks.map((task) => task.title).join(", ")}</p>
            </div>
            <div className={relationItem}>
              <p className={relationTitle}>관련 문서</p>
              <p className={relationText}>{relations.map((item) => item.title).join(", ")}</p>
            </div>
          </div>

          <div style={{ marginTop: "22px" }}>
            <SectionHeader
              title="관련 문서 검색 및 연결"
              titleAs="h4"
              description="검색 결과는 현재 프로젝트 내부 문서만 보여줍니다."
            />
          </div>
          <div className={relationList}>
            {candidateRelations.map((item) => (
              <div key={item.id} className={relationItem}>
                <p className={relationTitle}>{item.title}</p>
                <p className={relationText}>현재 프로젝트 내 연결 후보 문서</p>
              </div>
            ))}
          </div>
        </Surface>
      </div>
    </AppShell>
  );
}

export default function DocumentDetailRoute() {
  return <DocumentDetailPage />;
}
