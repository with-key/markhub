import Link from "next/link";
import { AppShell, SectionHeader, Surface } from "@/components";
import { formatEpicStatus } from "@/lib/format";
import { getProject, getProjectEpics } from "@/lib/mockData";
import {
  chip,
  itemCard,
  itemHeader,
  itemMeta,
  itemText,
  itemTitleLink,
} from "@/styles/app.css";

type ProjectEpicsPageProps = {
  projectId?: string;
};

export function ProjectEpicsPage({ projectId = "aurora-hq" }: ProjectEpicsPageProps) {
  const project = getProject(projectId);
  const projectEpics = getProjectEpics(project.id);

  return (
    <AppShell
      projectId={project.id}
      currentPath={`/projects/${project.id}/epics`}
      eyebrow="에픽"
      title="프로젝트 에픽"
      description="프로젝트 단위로 정의된 큰 단위의 목표를 확인하고, 각 에픽 상세에서 소속 태스크를 이어서 탐색할 수 있습니다."
    >
      <Surface as="section">
        <SectionHeader
          title="에픽 목록"
          titleAs="h3"
          description="제목, 설명, 상태를 기준으로 프로젝트 에픽을 관리합니다."
        />
        <div style={{ display: "grid", gap: "14px" }}>
          {projectEpics.map((epic) => (
            <article key={epic.id} className={itemCard}>
              <div className={itemHeader}>
                <Link className={itemTitleLink} href={`/projects/${project.id}/epics/${epic.id}`}>
                  {epic.title}
                </Link>
                <span className={chip}>{formatEpicStatus(epic.status)}</span>
              </div>
              <p className={itemText}>{epic.description}</p>
              <div className={itemMeta}>
                <span className={chip}>프로젝트 범위 내 조회</span>
              </div>
            </article>
          ))}
        </div>
      </Surface>
    </AppShell>
  );
}

export default function ProjectEpicsRoute() {
  return <ProjectEpicsPage />;
}
