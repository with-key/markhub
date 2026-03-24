import Link from "next/link";
import { AppShell, SectionHeader, Surface } from "@/components";
import { formatDate, formatTaskStatus } from "@/lib/format";
import {
  getProject,
  getProjectDocuments,
  getProjectEpics,
  getProjectTasks,
  searchProjectContent,
} from "@/lib/mockData";
import {
  chip,
  chipAccent,
  chipMuted,
  itemCard,
  itemHeader,
  itemMeta,
  itemText,
  itemTitleLink,
  metricCard,
  metricGrid,
  metricLabel,
  metricValue,
  searchBox,
  splitGrid,
} from "@/styles/app.css";

type ProjectDashboardProps = {
  projectId?: string;
};

export function ProjectDashboard({ projectId = "aurora-hq" }: ProjectDashboardProps) {
  const project = getProject(projectId);
  const projectEpics = getProjectEpics(project.id);
  const projectTasks = getProjectTasks(project.id);
  const projectDocuments = getProjectDocuments(project.id);
  const searchResults = searchProjectContent(project.id, "문서");

  return (
    <AppShell
      projectId={project.id}
      currentPath={`/projects/${project.id}`}
      eyebrow="프로젝트 개요"
      title={`${project.name} 워크스페이스`}
      description="프로젝트 안에서 에픽, 태스크, 문서의 연결 관계를 한 화면에서 파악할 수 있도록 구성된 대시보드입니다."
      actions={
        <Link className={chip} href={`/projects/${project.id}/docs/new`}>
          새 문서
        </Link>
      }
    >
      <section className={metricGrid}>
        <article className={metricCard}>
          <p className={metricLabel}>에픽</p>
          <p className={metricValue}>{projectEpics.length}</p>
        </article>
        <article className={metricCard}>
          <p className={metricLabel}>태스크</p>
          <p className={metricValue}>{projectTasks.length}</p>
        </article>
        <article className={metricCard}>
          <p className={metricLabel}>문서</p>
          <p className={metricValue}>{projectDocuments.length}</p>
        </article>
        <article className={metricCard}>
          <p className={metricLabel}>최근 업데이트</p>
          <p className={metricValue} style={{ fontSize: "1.25rem" }}>
            {formatDate(project.updatedAt)}
          </p>
        </article>
      </section>

      <Surface as="section">
        <SectionHeader
          title="프로젝트 내부 검색"
          titleAs="h3"
          description="검색 범위는 현재 프로젝트 내부 데이터로만 제한됩니다. 다른 프로젝트의 문서, 태스크, 에픽은 노출되지 않습니다."
        />
        <input
          aria-label="프로젝트 내부 검색"
          className={searchBox}
          defaultValue="문서"
          placeholder="현재 프로젝트 안에서만 검색"
        />
        <div className={itemMeta} style={{ marginTop: "14px" }}>
          <span className={`${chip} ${chipAccent}`}>에픽 {searchResults.epics.length}</span>
          <span className={chip}>태스크 {searchResults.tasks.length}</span>
          <span className={`${chip} ${chipMuted}`}>문서 {searchResults.documents.length}</span>
        </div>
      </Surface>

      <div className={splitGrid}>
        <Surface as="section">
          <SectionHeader
            title="진행 중 태스크"
            titleAs="h3"
            description="에픽에 연결된 실행 항목을 확인하고 상세 화면에서 관련 문서를 연결합니다."
          />
          <div style={{ display: "grid", gap: "14px" }}>
            {projectTasks.map((task) => (
              <article key={task.id} className={itemCard}>
                <div className={itemHeader}>
                  <Link className={itemTitleLink} href={`/projects/${project.id}/tasks/${task.id}`}>
                    {task.title}
                  </Link>
                  <span className={chip}>{formatTaskStatus(task.status)}</span>
                </div>
                <p className={itemText}>{task.description}</p>
              </article>
            ))}
          </div>
        </Surface>

        <Surface as="section">
          <SectionHeader
            title="최근 문서"
            titleAs="h3"
            description="프로젝트 최신 기획 문서와 관련 관계를 빠르게 확인할 수 있습니다."
          />
          <div style={{ display: "grid", gap: "14px" }}>
            {projectDocuments.slice(0, 3).map((document) => (
              <article key={document.id} className={itemCard}>
                <div className={itemHeader}>
                  <Link className={itemTitleLink} href={`/projects/${project.id}/docs/${document.id}`}>
                    {document.title}
                  </Link>
                </div>
                <p className={itemText}>
                  연결 문서 {document.relatedDocumentIds.length}개 · 연결 태스크{" "}
                  {document.linkedTaskIds.length}개
                </p>
              </article>
            ))}
          </div>
        </Surface>
      </div>
    </AppShell>
  );
}

export default function ProjectDashboardPage() {
  return <ProjectDashboard />;
}
