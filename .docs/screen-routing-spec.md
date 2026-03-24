# 화면 및 라우팅 명세서

## 1. 문서 목적

본 문서는 Next.js Pages Router 기준으로 `mdhub` MVP의 화면 구조와 라우팅을
정의한다. 각 페이지의 책임, 주요 UI 구성, 진입 조건을 명확히 해서 구현 단위를
정리하는 것이 목적이다.

## 2. 라우팅 설계 원칙

- 프로젝트가 핵심 컨텍스트이므로 프로젝트 하위 라우트를 중심으로 설계한다.
- 인증이 필요한 화면과 공개 화면을 명확히 구분한다.
- 생성, 목록, 상세, 편집 흐름을 분리하되 URL 구조는 일관되게 유지한다.
- 검색과 연결은 현재 프로젝트 컨텍스트 내에서만 동작해야 한다.

## 3. 라우트 목록

### 공개 라우트

- `/`
- `/login`

### 보호 라우트

- `/projects`
- `/projects/new`
- `/projects/[projectId]`
- `/projects/[projectId]/epics`
- `/projects/[projectId]/epics/new`
- `/projects/[projectId]/epics/[epicId]`
- `/projects/[projectId]/tasks`
- `/projects/[projectId]/tasks/new`
- `/projects/[projectId]/tasks/[taskId]`
- `/projects/[projectId]/documents`
- `/projects/[projectId]/documents/new`
- `/projects/[projectId]/documents/[documentId]`
- `/projects/[projectId]/documents/[documentId]/edit`
- `/projects/[projectId]/search`

## 4. 페이지 상세

### 4-1. `/`

목적:

- 서비스 소개 또는 로그인 진입 페이지

주요 역할:

- 비로그인 사용자를 `/login`으로 유도
- 로그인 사용자는 `/projects`로 이동

### 4-2. `/login`

목적:

- GitHub, Google 로그인 제공

주요 UI:

- 서비스 설명
- GitHub 로그인 버튼
- Google 로그인 버튼
- 로그인 오류 메시지 영역

진입 조건:

- 비로그인 사용자

이탈 조건:

- 로그인 성공 시 `/projects`

### 4-3. `/projects`

목적:

- 사용자가 접근 가능한 프로젝트 목록 조회

주요 UI:

- 프로젝트 목록
- 프로젝트 생성 버튼
- 사용자 프로필 영역

주요 행동:

- 프로젝트 클릭 시 `/projects/[projectId]`
- 생성 버튼 클릭 시 `/projects/new`

### 4-4. `/projects/new`

목적:

- 프로젝트 2단계 생성 플로우 제공

주요 UI:

- 1단계: 프로젝트 이름, 설명 입력
- 2단계: 초기 참여자 또는 운영 정보 확인
- 이전, 다음, 생성 버튼

주요 행동:

- 생성 완료 시 `/projects/[projectId]`

### 4-5. `/projects/[projectId]`

목적:

- 프로젝트 홈 또는 요약 대시보드

주요 UI:

- 프로젝트 기본 정보
- 에픽, 태스크, 문서 진입 카드 또는 탭
- 최근 생성 또는 수정 항목 요약
- 프로젝트 내 검색 진입

주요 행동:

- 에픽 섹션 이동
- 태스크 섹션 이동
- 문서 섹션 이동
- 검색 화면 이동

진입 조건:

- 현재 사용자가 해당 프로젝트 멤버여야 함

### 4-6. `/projects/[projectId]/epics`

목적:

- 프로젝트 에픽 목록 조회

주요 UI:

- 에픽 목록
- 상태 필터
- 에픽 생성 버튼

주요 행동:

- 생성 버튼 클릭 시 `/projects/[projectId]/epics/new`
- 아이템 클릭 시 `/projects/[projectId]/epics/[epicId]`

### 4-7. `/projects/[projectId]/epics/new`

목적:

- 에픽 생성

주요 UI:

- 제목 입력
- 설명 입력
- 상태 선택
- 저장 버튼

주요 행동:

- 저장 성공 시 생성된 에픽 상세 또는 에픽 목록 이동

### 4-8. `/projects/[projectId]/epics/[epicId]`

목적:

- 에픽 상세 조회

주요 UI:

- 제목, 설명, 상태
- 하위 태스크 요약 목록
- 태스크 생성 진입 버튼

주요 행동:

- 태스크 생성 시 현재 에픽이 기본 선택되도록 연계 가능

### 4-9. `/projects/[projectId]/tasks`

목적:

- 프로젝트 태스크 목록 조회

주요 UI:

- 태스크 목록
- 상태 필터
- 에픽 필터
- 태스크 생성 버튼

주요 행동:

- 생성 버튼 클릭 시 `/projects/[projectId]/tasks/new`
- 아이템 클릭 시 `/projects/[projectId]/tasks/[taskId]`

### 4-10. `/projects/[projectId]/tasks/new`

목적:

- 태스크 생성

주요 UI:

- 제목 입력
- 설명 입력
- 상태 선택
- 에픽 선택
- 저장 버튼

주요 행동:

- 저장 성공 시 태스크 상세 또는 목록 이동

### 4-11. `/projects/[projectId]/tasks/[taskId]`

목적:

- 태스크 상세 조회 및 관련 문서 연결 관리

주요 UI:

- 태스크 기본 정보
- 소속 에픽 정보
- 관련 문서 목록
- 관련 문서 연결 버튼
- 연결 해제 액션

주요 행동:

- 관련 문서 검색 및 연결
- 연결 해제
- 연결 문서 클릭 시 문서 상세 이동

### 4-12. `/projects/[projectId]/documents`

목적:

- 프로젝트 문서 목록 조회

주요 UI:

- 문서 목록
- 새 문서 생성 버튼
- 선택 검색 또는 빠른 필터

주요 행동:

- 생성 버튼 클릭 시 `/projects/[projectId]/documents/new`
- 아이템 클릭 시 `/projects/[projectId]/documents/[documentId]`

### 4-13. `/projects/[projectId]/documents/new`

목적:

- 문서 생성

주요 UI:

- 좌측 편집 영역
- 우측 미리보기 영역
- 제목 입력
- 본문 입력
- 저장 버튼

주요 행동:

- 저장 성공 시 문서 상세 또는 편집 상태 유지 후 이동

### 4-14. `/projects/[projectId]/documents/[documentId]`

목적:

- 문서 상세 조회 및 관련 문서 연결 관리

주요 UI:

- 문서 제목
- 렌더링된 본문
- 편집 버튼
- 관련 문서 목록
- 관련 문서 연결 버튼
- 연결 해제 액션

주요 행동:

- 편집 버튼 클릭 시 `/projects/[projectId]/documents/[documentId]/edit`
- 관련 문서 검색 및 연결
- 연결 문서 클릭 시 해당 문서 상세 이동

### 4-15. `/projects/[projectId]/documents/[documentId]/edit`

목적:

- 기존 문서 수정

주요 UI:

- 좌측 편집 영역
- 우측 미리보기 영역
- 제목 입력
- 본문 입력
- 저장 버튼

주요 행동:

- 저장 성공 시 문서 상세 이동

정책:

- 자동 저장 없음
- 제목 필수
- 본문 선택

### 4-16. `/projects/[projectId]/search`

목적:

- 현재 프로젝트 범위 통합 검색

주요 UI:

- 검색 입력창
- 타입 필터: 에픽, 태스크, 문서
- 검색 결과 섹션
- 빈 결과 상태

주요 행동:

- 결과 클릭 시 해당 상세 페이지 이동
- 연결 대상 검색 UI에도 동일한 프로젝트 범위 정책 재사용 가능

## 5. 공통 레이아웃 구조

### 보호 화면 공통 레이아웃

권장 구성:

- 상단 헤더
- 프로젝트 컨텍스트 표시
- 좌측 또는 상단 내비게이션
- 메인 콘텐츠 영역

공통 요소:

- 프로젝트 전환 또는 목록 복귀 링크
- 사용자 프로필 영역
- 현재 프로젝트 검색 진입점

### 문서 편집 화면 공통 레이아웃

권장 구성:

- 상단 제목 및 저장 액션 바
- 좌측 편집 패널
- 우측 프리뷰 패널

## 6. 접근 제어 규칙

- `/login`, `/`만 공개 접근 허용
- `/projects` 이하 모든 경로는 로그인 필요
- `/projects/[projectId]` 이하 모든 경로는 해당 프로젝트 멤버만 접근 가능
- 권한 없는 프로젝트 경로는 `404` 또는 접근 불가 화면으로 처리

## 7. 권장 파일 구조

Pages Router 기준 예시:

```text
src/pages/
  index.tsx
  login.tsx
  projects/
    index.tsx
    new.tsx
    [projectId]/
      index.tsx
      epics/
        index.tsx
        new.tsx
        [epicId].tsx
      tasks/
        index.tsx
        new.tsx
        [taskId].tsx
      documents/
        index.tsx
        new.tsx
        [documentId]/
          index.tsx
          edit.tsx
      search.tsx
```

## 8. 구현 우선순위

1. `/login`
2. `/projects`
3. `/projects/new`
4. `/projects/[projectId]`
5. `/projects/[projectId]/epics/*`
6. `/projects/[projectId]/tasks/*`
7. `/projects/[projectId]/documents/*`
8. 연결 UI가 포함된 상세 화면
9. `/projects/[projectId]/search`

## 9. 오픈 이슈

- 프로젝트 홈을 대시보드형으로 둘지 단순 진입 허브로 둘지 여부
- 문서 상세와 편집을 같은 화면에서 처리할지 분리 유지할지 여부
- 연결 검색 UI를 모달로 둘지 인라인 섹션으로 둘지 여부
