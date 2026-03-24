# Repository Guidelines

## 프로젝트 구조

- `src/pages`: Next.js Pages Router 진입점과 화면 파일을 둡니다. API 핸들러는 `src/pages/api`에 둡니다.
- `src/styles`: `Vanilla Extract` 기반 스타일 파일을 둡니다. 화면별 스타일은 기능과 가까운 위치에 두되, 현재는 공용 스타일이 이 폴더에 있습니다.
- `src/__tests__`: 화면 및 UI 테스트를 둡니다.
- `public`: 정적 에셋을 둡니다.
- `.docs`: PRD 등 제품 문서를 관리합니다.

## 빌드, 테스트, 개발 명령어

- `pnpm dev`: 로컬 개발 서버를 실행합니다.
- `pnpm build`: 프로덕션 빌드를 생성합니다.
- `pnpm start`: 빌드 결과를 로컬에서 실행합니다.
- `pnpm test`: Jest 테스트를 실행합니다.
- `pnpm lint`: ESLint로 코드 스타일과 잠재 오류를 점검합니다.

기본 패키지 매니저는 `pnpm`을 사용합니다.

## 코딩 스타일 및 네이밍 규칙

- 언어는 `TypeScript`를 기본으로 사용합니다.
- 들여쓰기는 기존 파일 스타일에 맞춰 공백 2칸을 유지합니다.
- React 컴포넌트와 페이지 파일은 `PascalCase` 또는 Next 관례에 맞는 파일명을 사용합니다. 예: `index.tsx`, `_app.tsx`
- 함수와 변수는 `camelCase`, 타입과 인터페이스는 `PascalCase`를 사용합니다.
- 스타일 파일은 `*.css.ts` 패턴을 따릅니다.
- 린트는 `ESLint`, 스타일 시스템은 `Vanilla Extract`를 기준으로 맞춥니다.

## 테스트 가이드

- 테스트 프레임워크는 `Jest`와 `@testing-library/react`를 사용합니다.
- 테스트 파일은 `src/__tests__` 아래에 두고 `*.test.tsx` 형식을 사용합니다.
- 새 화면이나 주요 상호작용을 추가하면 최소 1개 이상의 렌더링 또는 동작 테스트를 함께 작성합니다.
- 실행 예시: `pnpm test`

## 커밋 및 PR 가이드

- 커밋 메시지는 컨벤셔널 커밋을 사용합니다. 예: `feat: initialize project scaffold and PRD`
- 한 커밋에는 하나의 주제만 담고, 문서 수정과 기능 추가가 섞이면 분리합니다.
- PR에는 변경 목적, 주요 변경점, 테스트 결과를 포함합니다.
- UI 변경이 있다면 스크린샷 또는 짧은 설명을 첨부합니다.

## 설정 및 문서 관리

- 환경 변수나 인증 키는 커밋하지 않습니다.
- 제품 요구사항 변경 시 `.docs/prd.md`를 먼저 갱신한 뒤 구현을 진행합니다.
