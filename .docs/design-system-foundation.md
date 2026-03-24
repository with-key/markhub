# Design System Foundation

이번 foundation 추출은 현재 코드베이스에서 반복 사용이 분명한 패턴만 공용 레이어로 올리는 데 집중했습니다.

## Added

- `Surface`
  - 위치: `src/components/ui/Surface.tsx`
  - 목적: 패널, 카드, 보조 표면을 하나의 공용 컨테이너 API로 통합
  - variants: `panel`, `card`, `subtle`
  - padding: `sm`, `md`, `lg`

- `SectionHeader`
  - 위치: `src/components/ui/SectionHeader.tsx`
  - 목적: 반복되던 섹션 제목 + 설명 패턴 통합
  - props: `title`, `description`, `actions`, `titleAs`

- `TextAreaField`
  - 위치: `src/components/ui/TextAreaField.tsx`
  - 목적: 기존 `TextField`와 동일한 필드 구조를 textarea에도 적용

## Added Tokens

- `vars.radius`
- `vars.shadow`
- `vars.space`

이 토큰들은 반복 빈도가 높고 의미가 분명한 값만 포함합니다.

## Migrated

- 메인 목록 화면 패널
- 프로젝트 상세/에픽/태스크/문서 화면의 섹션 헤더
- 프로젝트 생성 화면 입력 필드
- 문서 생성/편집 화면 입력 필드

## Usage Guidelines

- 콘텐츠를 감싸는 표면은 새로 스타일을 만들기 전에 `Surface`를 먼저 검토합니다.
- 제목과 설명이 함께 있는 블록은 `SectionHeader`를 우선 사용합니다.
- 텍스트 입력은 `TextField`, 긴 본문 입력은 `TextAreaField`를 우선 사용합니다.
- 새 radius, shadow, spacing 값이 필요해 보여도 즉시 토큰을 늘리지 말고, 최소 3회 이상 반복될 때 추가합니다.
