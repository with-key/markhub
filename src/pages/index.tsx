import Link from "next/link";
import { SectionHeader, Surface } from "@/components";
import { formatDate } from "@/lib/format";
import { getProjects } from "@/lib/mockData";
import {
  actionRow,
  chip,
  chipAccent,
  chipMuted,
  dashboardPage,
  grid,
  itemCard,
  itemHeader,
  itemMeta,
  itemText,
  itemTitleLink,
  pageDescription,
  pageEyebrow,
  pageIntro,
  pageTitle,
  primaryButton,
  secondaryButton,
  splitGrid,
} from "@/styles/app.css";

export default function Home() {
  const ownedProjects = getProjects().filter((project) => project.isOwned);
  const memberProjects = getProjects().filter((project) => !project.isOwned);

  return (
    <div className={dashboardPage}>
      <main className={grid} style={{ padding: "32px" }}>
        <Surface as="section">
          <div className={pageIntro}>
            <p className={pageEyebrow}>로그인 후 진입</p>
            <h1 className={pageTitle}>내가 생성했거나 참여 중인 프로젝트</h1>
            <p className={pageDescription}>
              PRD 기준으로 프로젝트 단위의 협업 허브를 구성했습니다. 소속 프로젝트를 한
              화면에서 확인하고, 새 프로젝트 생성이나 상세 워크스페이스 진입으로 이어질 수
              있습니다.
            </p>
          </div>
          <div className={actionRow} style={{ marginTop: "20px" }}>
            <Link className={primaryButton} href="/projects/new">
              새 프로젝트 만들기
            </Link>
            <Link className={secondaryButton} href="/login">
              로그인 화면 보기
            </Link>
          </div>
        </Surface>

        <div className={splitGrid}>
          <Surface as="section">
            <SectionHeader
              title="내가 생성한 프로젝트"
              description="오너 권한을 가진 프로젝트입니다. 프로젝트 구조와 참여자 기준을 직접 관리합니다."
            />
            <div className={grid}>
              {ownedProjects.map((project) => (
                <article key={project.id} className={itemCard}>
                  <div className={itemHeader}>
                    <div>
                      <Link className={itemTitleLink} href={`/projects/${project.id}`}>
                        {project.name}
                      </Link>
                    </div>
                    <span className={`${chip} ${chipAccent}`}>{project.roleLabel}</span>
                  </div>
                  <p className={itemText}>{project.description}</p>
                  <div className={itemMeta}>
                    <span className={chip}>{project.memberCount}명 참여</span>
                    <span className={`${chip} ${chipMuted}`}>
                      업데이트 {formatDate(project.updatedAt)}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </Surface>

          <Surface as="section">
            <SectionHeader
              title="참여 중인 프로젝트"
              description="내가 속한 협업 프로젝트입니다. 최신 문서와 업무 흐름을 프로젝트 안에서만 탐색할 수 있습니다."
            />
            <div className={grid}>
              {memberProjects.map((project) => (
                <article key={project.id} className={itemCard}>
                  <div className={itemHeader}>
                    <div>
                      <Link className={itemTitleLink} href={`/projects/${project.id}`}>
                        {project.name}
                      </Link>
                    </div>
                    <span className={chip}>{project.roleLabel}</span>
                  </div>
                  <p className={itemText}>{project.description}</p>
                  <div className={itemMeta}>
                    <span className={chip}>{project.ownerName}</span>
                    <span className={`${chip} ${chipMuted}`}>
                      업데이트 {formatDate(project.updatedAt)}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </Surface>
        </div>
      </main>
    </div>
  );
}
