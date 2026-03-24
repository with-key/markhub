import Link from "next/link";
import { AppShell, SectionHeader, Surface } from "@/components";
import { formatEpicStatus, formatTaskStatus } from "@/lib/format";
import { getEpic, getEpicTasks, getProject } from "@/lib/mockData";
import {
  chip,
  detailGrid,
  itemCard,
  itemHeader,
  itemMeta,
  itemText,
  itemTitleLink,
  relationItem,
  relationList,
  relationText,
  relationTitle,
} from "@/styles/app.css";

type EpicDetailProps = {
  projectId?: string;
  epicId?: string;
};

export function EpicDetailPage({
  projectId = "aurora-hq",
  epicId = "epic-foundation",
}: EpicDetailProps) {
  const project = getProject(projectId);
  const epic = getEpic(epicId);
  const epicTasks = getEpicTasks(epic.id);

  return (
    <AppShell
      projectId={project.id}
      currentPath={`/projects/${project.id}/epics`}
      eyebrow="에픽 상세"
      title={epic.title}
      description={epic.description}
    >
      <div className={detailGrid}>
        <Surface as="section">
          <SectionHeader
            title="에픽 개요"
            titleAs="h3"
            description="프로젝트 안에서 큰 단위의 목표를 관리하고, 하위 태스크와 연결해 실행합니다."
          />
          <div className={itemMeta}>
            <span className={chip}>{formatEpicStatus(epic.status)}</span>
            <span className={chip}>태스크 {epicTasks.length}개</span>
          </div>
          <div style={{ display: "grid", gap: "14px", marginTop: "20px" }}>
            {epicTasks.map((task) => (
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

        <Surface as="aside">
          <SectionHeader title="실행 메모" titleAs="h3" />
          <div className={relationList}>
            <div className={relationItem}>
              <p className={relationTitle}>상태 입력</p>
              <p className={relationText}>에픽 생성 시 제목, 설명, 상태를 함께 관리합니다.</p>
            </div>
            <div className={relationItem}>
              <p className={relationTitle}>프로젝트 단위 조회</p>
              <p className={relationText}>
                현재 프로젝트에 속한 에픽만 목록과 상세에 노출됩니다.
              </p>
            </div>
          </div>
        </Surface>
      </div>
    </AppShell>
  );
}

export default function EpicDetailRoute() {
  return <EpicDetailPage />;
}
