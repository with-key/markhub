export type Project = {
  id: string;
  name: string;
  description: string;
  ownerName: string;
  memberCount: number;
  isOwned: boolean;
  updatedAt: string;
  roleLabel: string;
};

export type EpicStatus = "planned" | "active" | "completed";
export type TaskStatus = "backlog" | "todo" | "in progress" | "done";

export type Epic = {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: EpicStatus;
};

export type Task = {
  id: string;
  projectId: string;
  epicId: string;
  title: string;
  description: string;
  status: TaskStatus;
  relatedDocumentIds: string[];
};

export type Document = {
  id: string;
  projectId: string;
  title: string;
  content: string;
  relatedDocumentIds: string[];
  linkedTaskIds: string[];
};

export const projects: Project[] = [
  {
    id: "aurora-hq",
    name: "Aurora HQ",
    description: "신규 협업 허브를 위한 MVP 기획과 운영 구조를 정리하는 메인 프로젝트",
    ownerName: "김도윤",
    memberCount: 7,
    isOwned: true,
    updatedAt: "2026-03-22",
    roleLabel: "Owner",
  },
  {
    id: "pulse-mobile",
    name: "Pulse Mobile",
    description: "모바일 서비스 리뉴얼을 위한 문서와 실행 태스크를 함께 관리하는 워크스페이스",
    ownerName: "박서윤",
    memberCount: 5,
    isOwned: false,
    updatedAt: "2026-03-19",
    roleLabel: "Member",
  },
];

export const epics: Epic[] = [
  {
    id: "epic-foundation",
    projectId: "aurora-hq",
    title: "프로젝트 운영 기반 설계",
    description: "프로젝트, 참여자, 접근 흐름을 정의하고 대시보드 구조를 세운다.",
    status: "active",
  },
  {
    id: "epic-docs",
    projectId: "aurora-hq",
    title: "문서 편집 경험 구축",
    description: "스플릿 뷰 편집기와 관련 문서 연결 UX를 설계한다.",
    status: "planned",
  },
  {
    id: "epic-launch",
    projectId: "pulse-mobile",
    title: "출시 체크리스트 정비",
    description: "런칭 이전 남은 태스크와 QA 기준 문서를 정리한다.",
    status: "active",
  },
];

export const tasks: Task[] = [
  {
    id: "task-auth-entry",
    projectId: "aurora-hq",
    epicId: "epic-foundation",
    title: "로그인 이후 프로젝트 목록 진입 정리",
    description: "GitHub / Google 로그인 이후 내가 속한 프로젝트 목록으로 진입하는 흐름을 정의한다.",
    status: "done",
    relatedDocumentIds: ["doc-auth-flow", "doc-information-architecture"],
  },
  {
    id: "task-project-create",
    projectId: "aurora-hq",
    epicId: "epic-foundation",
    title: "2단계 프로젝트 생성 UX 설계",
    description: "기본 정보 입력과 참여/운영 확인 단계로 프로젝트 생성 플로우를 분리한다.",
    status: "in progress",
    relatedDocumentIds: ["doc-project-setup", "doc-information-architecture"],
  },
  {
    id: "task-doc-relations",
    projectId: "aurora-hq",
    epicId: "epic-docs",
    title: "문서-문서 연결 패널 정의",
    description: "문서 상세 화면에서 현재 프로젝트 범위로만 관련 문서를 검색하고 연결한다.",
    status: "todo",
    relatedDocumentIds: ["doc-doc-linking", "doc-editor-spec"],
  },
  {
    id: "task-release-qc",
    projectId: "pulse-mobile",
    epicId: "epic-launch",
    title: "출시 전 QA 체크리스트 검수",
    description: "모바일 리뉴얼 QA 기준과 오픈 이슈를 점검한다.",
    status: "backlog",
    relatedDocumentIds: ["doc-release-checklist"],
  },
];

export const documents: Document[] = [
  {
    id: "doc-auth-flow",
    projectId: "aurora-hq",
    title: "로그인 진입 플로우",
    content: `# 로그인 진입 플로우

## 목표
- GitHub OAuth와 Google OAuth 두 가지 진입 경로를 제공한다.
- 로그인 완료 후 사용자가 속한 프로젝트 목록으로 이동한다.

## 고려 사항
1. 최초 로그인 시 프로필을 생성한다.
2. 프로젝트가 없는 경우 생성 플로우로 자연스럽게 유도한다.`,
    relatedDocumentIds: ["doc-information-architecture"],
    linkedTaskIds: ["task-auth-entry"],
  },
  {
    id: "doc-project-setup",
    projectId: "aurora-hq",
    title: "프로젝트 생성 플로우",
    content: `# 프로젝트 생성 플로우

## Step 1. 기본 정보
- 프로젝트 이름
- 프로젝트 설명

## Step 2. 참여/운영 설정
- 초기 참여자 확인
- 기본 운영 규칙 안내

자동 저장은 지원하지 않고, 최종 생성 시점에만 저장한다.`,
    relatedDocumentIds: ["doc-information-architecture", "doc-editor-spec"],
    linkedTaskIds: ["task-project-create"],
  },
  {
    id: "doc-information-architecture",
    projectId: "aurora-hq",
    title: "정보 구조 초안",
    content: `# 정보 구조 초안

## 핵심 섹션
- 프로젝트 개요
- 에픽
- 태스크
- 문서

## 검색 원칙
- 모든 검색은 현재 프로젝트 범위 안에서만 동작한다.
- 연결 대상도 현재 프로젝트 내부에서만 노출한다.`,
    relatedDocumentIds: ["doc-auth-flow", "doc-project-setup", "doc-doc-linking"],
    linkedTaskIds: ["task-auth-entry", "task-project-create"],
  },
  {
    id: "doc-editor-spec",
    projectId: "aurora-hq",
    title: "문서 편집기 스펙",
    content: `# 문서 편집기 스펙

## 레이아웃
- 좌측: 마크다운 입력
- 우측: 실시간 프리뷰

## 제약
- 제목은 필수값
- 본문은 선택값
- 자동 저장은 제공하지 않는다`,
    relatedDocumentIds: ["doc-project-setup", "doc-doc-linking"],
    linkedTaskIds: [],
  },
  {
    id: "doc-doc-linking",
    projectId: "aurora-hq",
    title: "관련 문서 연결 정책",
    content: `# 관련 문서 연결 정책

## 태스크 -> 문서
- 태스크 상세에서 여러 문서를 연결할 수 있다.

## 문서 -> 문서
- 문서 상세에서 관련 문서를 검색 후 연결한다.
- 현재 프로젝트 외부 문서는 결과에 포함하지 않는다.`,
    relatedDocumentIds: ["doc-information-architecture", "doc-editor-spec"],
    linkedTaskIds: ["task-doc-relations"],
  },
  {
    id: "doc-release-checklist",
    projectId: "pulse-mobile",
    title: "출시 QA 체크리스트",
    content: `# 출시 QA 체크리스트

- 로그인 이슈 재현 확인
- 푸시 알림 동작 점검
- 결제 플로우 회귀 테스트`,
    relatedDocumentIds: [],
    linkedTaskIds: ["task-release-qc"],
  },
];

export const navigationItems = [
  { href: "", label: "개요" },
  { href: "/epics", label: "에픽" },
  { href: "/tasks", label: "태스크" },
  { href: "/docs", label: "문서" },
] as const;

export function getProjects() {
  return projects;
}

export function getProject(projectId: string) {
  return projects.find((project) => project.id === projectId) ?? projects[0];
}

export function getProjectEpics(projectId: string) {
  return epics.filter((epic) => epic.projectId === projectId);
}

export function getProjectTasks(projectId: string) {
  return tasks.filter((task) => task.projectId === projectId);
}

export function getProjectDocuments(projectId: string) {
  return documents.filter((document) => document.projectId === projectId);
}

export function getEpic(epicId: string) {
  return epics.find((epic) => epic.id === epicId) ?? epics[0];
}

export function getTask(taskId: string) {
  return tasks.find((task) => task.id === taskId) ?? tasks[0];
}

export function getDocument(documentId: string) {
  return documents.find((document) => document.id === documentId) ?? documents[0];
}

export function getTaskRelatedDocuments(taskId: string) {
  const task = getTask(taskId);

  return getProjectDocuments(task.projectId).filter((document) =>
    task.relatedDocumentIds.includes(document.id),
  );
}

export function getDocumentRelations(documentId: string) {
  const document = getDocument(documentId);

  return getProjectDocuments(document.projectId).filter((item) =>
    document.relatedDocumentIds.includes(item.id),
  );
}

export function getDocumentLinkedTasks(documentId: string) {
  const document = getDocument(documentId);

  return getProjectTasks(document.projectId).filter((task) => document.linkedTaskIds.includes(task.id));
}

export function getEpicTasks(epicId: string) {
  return tasks.filter((task) => task.epicId === epicId);
}

export function searchProjectContent(projectId: string, query: string) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return {
      epics: getProjectEpics(projectId),
      tasks: getProjectTasks(projectId),
      documents: getProjectDocuments(projectId),
    };
  }

  const includes = (value: string) => value.toLowerCase().includes(normalized);

  return {
    epics: getProjectEpics(projectId).filter(
      (item) => includes(item.title) || includes(item.description),
    ),
    tasks: getProjectTasks(projectId).filter(
      (item) => includes(item.title) || includes(item.description),
    ),
    documents: getProjectDocuments(projectId).filter(
      (item) => includes(item.title) || includes(item.content),
    ),
  };
}

export function getAvailableTaskDocuments(taskId: string) {
  const task = getTask(taskId);

  return getProjectDocuments(task.projectId).filter(
    (document) => !task.relatedDocumentIds.includes(document.id),
  );
}

export function getAvailableDocumentRelations(documentId: string) {
  const document = getDocument(documentId);

  return getProjectDocuments(document.projectId).filter(
    (item) => item.id !== document.id && !document.relatedDocumentIds.includes(item.id),
  );
}
