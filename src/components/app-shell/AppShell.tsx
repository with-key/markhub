import Link from "next/link";
import type { PropsWithChildren, ReactNode } from "react";

import { formatDate } from "@/lib/format";
import { getProject, navigationItems } from "@/lib/mockData";
import {
  actionRow,
  brandBlock,
  brandDescription,
  brandEyebrow,
  brandTitle,
  chip,
  content,
  dashboardPage,
  navLink,
  navLinkActive,
  navList,
  pageDescription,
  pageEyebrow,
  pageIntro,
  pageTitle,
  projectBadge,
  secondaryButton,
  shell,
  sidebar,
  sidebarMeta,
  sidebarMetaCard,
  sidebarMetaLabel,
  sidebarMetaValue,
  topbar,
} from "@/styles/app.css";

type AppShellProps = PropsWithChildren<{
  actions?: ReactNode;
  currentPath?: string;
  description: string;
  eyebrow?: string;
  projectId?: string;
  title: string;
}>;

export function AppShell({
  projectId,
  currentPath,
  title,
  description,
  eyebrow = "mdhub",
  actions,
  children,
}: AppShellProps) {
  const currentProjectId = projectId ?? "aurora-hq";
  const project = getProject(currentProjectId);
  const resolvedPath = currentPath ?? `/projects/${project.id}`;

  return (
    <div className={dashboardPage}>
      <div className={shell}>
        <aside className={sidebar}>
          <div className={brandBlock}>
            <p className={brandEyebrow}>Product Planning Hub</p>
            <h1 className={brandTitle}>mdhub</h1>
            <p className={brandDescription}>
              에픽, 태스크, 문서를 한 맥락으로 묶는 팀 협업용 기획 워크스페이스
            </p>
          </div>

          <div className={projectBadge}>
            <span>{project.name}</span>
            <span className={chip}>{project.roleLabel}</span>
          </div>

          <nav className={navList} aria-label="프로젝트 내비게이션">
            {navigationItems.map((item) => {
              const href = `/projects/${project.id}${item.href}`;
              const isActive = resolvedPath === href;

              return (
                <Link
                  key={href}
                  className={`${navLink} ${isActive ? navLinkActive : ""}`}
                  href={href}
                >
                  <span>{item.label}</span>
                  <span>
                    {item.label === "개요"
                      ? "01"
                      : item.label === "에픽"
                        ? "02"
                        : item.label === "태스크"
                          ? "03"
                          : "04"}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className={sidebarMeta}>
            <div className={sidebarMetaCard}>
              <p className={sidebarMetaLabel}>프로젝트 설명</p>
              <p className={sidebarMetaValue}>{project.description}</p>
            </div>
            <div className={sidebarMetaCard}>
              <p className={sidebarMetaLabel}>마지막 업데이트</p>
              <p className={sidebarMetaValue}>{formatDate(project.updatedAt)}</p>
            </div>
            <div className={sidebarMetaCard}>
              <p className={sidebarMetaLabel}>참여 인원</p>
              <p className={sidebarMetaValue}>{project.memberCount}명 협업 중</p>
            </div>
          </div>
        </aside>

        <main className={content}>
          <div className={topbar}>
            <div className={pageIntro}>
              <p className={pageEyebrow}>{eyebrow}</p>
              <h2 className={pageTitle}>{title}</h2>
              <p className={pageDescription}>{description}</p>
            </div>
            <div className={actionRow}>
              {actions}
              <Link className={secondaryButton} href="/">
                프로젝트 홈
              </Link>
            </div>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
