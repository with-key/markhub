import Link from "next/link";
import { AppShell, SectionHeader, Surface } from "@/components";
import { formatTaskStatus } from "@/lib/format";
import {
  getAvailableTaskDocuments,
  getProject,
  getTask,
  getTaskRelatedDocuments,
} from "@/lib/mockData";
import {
  chip,
  detailGrid,
  itemMeta,
  relationItem,
  relationList,
  relationText,
  relationTitle,
  smallText,
} from "@/styles/app.css";

type TaskDetailProps = {
  projectId?: string;
  taskId?: string;
};

export function TaskDetailPage({
  projectId = "aurora-hq",
  taskId = "task-project-create",
}: TaskDetailProps) {
  const project = getProject(projectId);
  const task = getTask(taskId);
  const linkedDocuments = getTaskRelatedDocuments(task.id);
  const candidateDocuments = getAvailableTaskDocuments(task.id);

  return (
    <AppShell
      projectId={project.id}
      currentPath={`/projects/${project.id}/tasks`}
      eyebrow="태스크 상세"
      title={task.title}
      description={task.description}
      actions={
        <Link className={chip} href={`/projects/${project.id}/docs/new`}>
          문서 생성
        </Link>
      }
    >
      <div className={detailGrid}>
        <Surface as="section">
          <SectionHeader
            title="태스크 정보"
            titleAs="h3"
            description="태스크는 에픽 하위에서 관리되며, 관련 문서를 여러 개 연결할 수 있습니다."
          />
          <div className={itemMeta}>
            <span className={chip}>{formatTaskStatus(task.status)}</span>
            <span className={chip}>연결 문서 {linkedDocuments.length}개</span>
          </div>

          <div style={{ marginTop: "22px" }}>
            <SectionHeader title="연결된 문서" titleAs="h4" />
            <div className={relationList}>
              {linkedDocuments.map((document) => (
                <div key={document.id} className={relationItem}>
                  <p className={relationTitle}>{document.title}</p>
                  <p className={relationText}>
                    현재 프로젝트 범위에서 연결된 문서입니다.{" "}
                    <Link href={`/projects/${project.id}/docs/${document.id}`}>상세 보기</Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Surface>

        <Surface as="aside">
          <SectionHeader
            title="관련 문서 추가"
            titleAs="h3"
            description="검색 대상은 현재 프로젝트 문서로만 제한됩니다. 다른 프로젝트 문서는 결과에 나타나지 않습니다."
          />
          <div className={relationList}>
            {candidateDocuments.map((document) => (
              <div key={document.id} className={relationItem}>
                <p className={relationTitle}>{document.title}</p>
                <p className={relationText}>프로젝트 내부 연결 후보 문서</p>
              </div>
            ))}
          </div>
          <p className={smallText} style={{ marginTop: "14px" }}>
            연결 해제도 같은 프로젝트 범위 안에서만 처리합니다.
          </p>
        </Surface>
      </div>
    </AppShell>
  );
}

export default function TaskDetailRoute() {
  return <TaskDetailPage />;
}
