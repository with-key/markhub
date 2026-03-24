import Link from "next/link";
import { AppShell, SectionHeader, Surface } from "@/components";
import { formatTaskStatus } from "@/lib/format";
import { getProject, getProjectTasks } from "@/lib/mockData";
import {
  chip,
  itemCard,
  itemHeader,
  itemMeta,
  itemText,
  itemTitleLink,
} from "@/styles/app.css";

type ProjectTasksPageProps = {
  projectId?: string;
};

export function ProjectTasksPage({ projectId = "aurora-hq" }: ProjectTasksPageProps) {
  const project = getProject(projectId);
  const projectTasks = getProjectTasks(project.id);

  return (
    <AppShell
      projectId={project.id}
      currentPath={`/projects/${project.id}/tasks`}
      eyebrow="태스크"
      title="프로젝트 태스크"
      description="태스크는 특정 에픽에 속하며, 상세 화면에서 관련 문서를 연결해 실행 맥락을 유지합니다."
    >
      <Surface as="section">
        <SectionHeader
          title="태스크 목록"
          titleAs="h3"
          description="상태는 backlog, todo, in progress, done 네 단계만 사용합니다."
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
              <div className={itemMeta}>
                <span className={chip}>관련 문서 {task.relatedDocumentIds.length}개</span>
              </div>
            </article>
          ))}
        </div>
      </Surface>
    </AppShell>
  );
}

export default function ProjectTasksRoute() {
  return <ProjectTasksPage />;
}
