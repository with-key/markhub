# DB 스키마 초안

## 1. 문서 목적

본 문서는 `mdhub` MVP 구현을 위한 데이터베이스 스키마 초안이다. Supabase
PostgreSQL 기준으로 작성하며, 프로젝트 범위 제한과 관계 무결성을 우선한다.

## 2. 설계 원칙

- 모든 핵심 데이터는 DB를 원본으로 관리한다.
- 에픽, 태스크, 문서, 관계 데이터는 모두 프로젝트에 귀속된다.
- 교차 프로젝트 연결은 허용하지 않는다.
- 삭제보다 관계 해제를 우선한다.
- 생성자, 수정자, 생성 시각, 수정 시각 추적을 기본으로 한다.

## 3. 주요 엔터티

- 사용자 프로필
- 프로젝트
- 프로젝트 멤버
- 에픽
- 태스크
- 문서
- 태스크-문서 연결
- 문서-문서 연결

## 4. 테이블 정의

### 4-1. `profiles`

사용자 프로필 테이블. 인증 원본은 `auth.users`를 사용하고, 앱 내 사용자 정보는
별도 프로필로 관리한다.

주요 컬럼:

- `id uuid primary key`
- `auth_user_id uuid not null unique`
- `provider text not null`
- `provider_user_id text not null`
- `email text null`
- `display_name text not null`
- `avatar_url text null`
- `created_at timestamptz not null default now()`
- `updated_at timestamptz not null default now()`

제약:

- `auth_user_id`는 고유해야 한다.
- `provider`, `provider_user_id` 조합은 고유해야 한다.

인덱스:

- `unique (auth_user_id)`
- `unique (provider, provider_user_id)`

### 4-2. `projects`

프로젝트 최상위 엔터티.

주요 컬럼:

- `id uuid primary key`
- `name text not null`
- `description text null`
- `created_by uuid not null`
- `updated_by uuid not null`
- `created_at timestamptz not null default now()`
- `updated_at timestamptz not null default now()`

제약:

- `trim(name) <> ''`
- `created_by`, `updated_by`는 `profiles.id` 참조

인덱스:

- `index (created_by)`
- `index (created_at desc)`

### 4-3. `project_members`

프로젝트 멤버십 테이블.

주요 컬럼:

- `id uuid primary key`
- `project_id uuid not null`
- `profile_id uuid not null`
- `joined_at timestamptz not null default now()`
- `invited_by uuid null`

제약:

- `project_id`, `profile_id` 조합은 고유해야 한다.

인덱스:

- `unique (project_id, profile_id)`
- `index (profile_id, joined_at desc)`

### 4-4. `epics`

프로젝트 내 에픽 테이블.

주요 컬럼:

- `id uuid primary key`
- `project_id uuid not null`
- `title text not null`
- `description text null`
- `status text not null`
- `created_by uuid not null`
- `updated_by uuid not null`
- `created_at timestamptz not null default now()`
- `updated_at timestamptz not null default now()`

제약:

- `trim(title) <> ''`
- `status`는 허용값 집합으로 제한

권장 허용값:

- `draft`
- `active`
- `done`

인덱스:

- `index (project_id, created_at desc)`
- `index (project_id, status)`

### 4-5. `tasks`

프로젝트 내 태스크 테이블.

주요 컬럼:

- `id uuid primary key`
- `project_id uuid not null`
- `epic_id uuid null`
- `title text not null`
- `description text null`
- `status text not null`
- `created_by uuid not null`
- `updated_by uuid not null`
- `created_at timestamptz not null default now()`
- `updated_at timestamptz not null default now()`

제약:

- `trim(title) <> ''`
- `status in ('backlog', 'todo', 'in progress', 'done')`
- `epic_id`가 존재할 경우 같은 `project_id`의 에픽이어야 한다.

인덱스:

- `index (project_id, created_at desc)`
- `index (project_id, status)`
- `index (epic_id)`

### 4-6. `documents`

프로젝트 내 마크다운 문서 테이블.

주요 컬럼:

- `id uuid primary key`
- `project_id uuid not null`
- `title text not null`
- `content text null`
- `created_by uuid not null`
- `updated_by uuid not null`
- `created_at timestamptz not null default now()`
- `updated_at timestamptz not null default now()`

제약:

- `trim(title) <> ''`

인덱스:

- `index (project_id, created_at desc)`
- `index (project_id, updated_at desc)`

### 4-7. `task_documents`

태스크-문서 다대다 관계 테이블.

주요 컬럼:

- `id uuid primary key`
- `project_id uuid not null`
- `task_id uuid not null`
- `document_id uuid not null`
- `is_active boolean not null default true`
- `created_by uuid not null`
- `created_at timestamptz not null default now()`
- `deactivated_by uuid null`
- `deactivated_at timestamptz null`

제약:

- 활성 관계 기준으로 동일 `task_id`, `document_id` 중복 금지
- `task_id`, `document_id` 모두 같은 `project_id` 소속이어야 한다.

인덱스:

- `unique (task_id, document_id)` 또는 활성 관계 기준 partial unique index
- `index (project_id, task_id)`
- `index (project_id, document_id)`

비고:

- 관계 해제 이력을 보존하려면 `is_active` 기반 비활성화 모델을 사용한다.
- 단순 구현이 우선이면 물리 삭제도 가능하지만, 정책상 비활성화를 권장한다.

### 4-8. `document_links`

문서-문서 자기참조 관계 테이블.

주요 컬럼:

- `id uuid primary key`
- `project_id uuid not null`
- `source_document_id uuid not null`
- `target_document_id uuid not null`
- `is_active boolean not null default true`
- `created_by uuid not null`
- `created_at timestamptz not null default now()`
- `deactivated_by uuid null`
- `deactivated_at timestamptz null`

제약:

- `source_document_id <> target_document_id`
- 활성 관계 기준 동일 문서 쌍 중복 금지
- 양쪽 문서는 같은 `project_id` 소속이어야 한다.

인덱스:

- `unique (source_document_id, target_document_id)` 또는 활성 관계 기준 partial unique index
- `index (project_id, source_document_id)`
- `index (project_id, target_document_id)`

## 5. 관계도 요약

- `profiles 1:N projects`
- `profiles N:M projects` via `project_members`
- `projects 1:N epics`
- `projects 1:N tasks`
- `projects 1:N documents`
- `epics 1:N tasks`
- `tasks N:M documents` via `task_documents`
- `documents N:M documents` via `document_links`

## 6. 권한 및 RLS 초안

Supabase RLS 기준 권장 정책:

- `projects`: 현재 사용자가 멤버인 프로젝트만 조회 가능
- `project_members`: 현재 사용자가 속한 프로젝트의 멤버 정보만 조회 가능
- `epics`, `tasks`, `documents`: 현재 사용자가 멤버인 프로젝트 데이터만 조회/생성/수정 가능
- `task_documents`, `document_links`: 현재 사용자가 멤버인 프로젝트 범위 내에서만 생성/조회/해제 가능

공통 조건 예시:

- `exists (select 1 from project_members pm where pm.project_id = <row>.project_id and pm.profile_id = auth_profile_id())`

## 7. 검색 설계 초안

MVP에서는 단순 ILIKE 기반 검색으로 시작할 수 있다.

검색 대상 컬럼:

- `epics.title`, `epics.description`
- `tasks.title`, `tasks.description`
- `documents.title`, `documents.content`

권장 인덱스:

- MVP 초기에는 프로젝트별 일반 인덱스로 시작
- 추후 필요 시 `pg_trgm` 또는 full text search 확장 검토

## 8. 마이그레이션 권장 순서

1. `profiles`
2. `projects`
3. `project_members`
4. `epics`
5. `tasks`
6. `documents`
7. `task_documents`
8. `document_links`
9. 인덱스 및 RLS 정책

## 9. 오픈 이슈

- 에픽 상태 허용값을 별도 확정할지 여부
- 관계 해제를 물리 삭제로 할지 비활성화 모델로 할지 여부
- 프로젝트 참여를 초대 기반으로 확장할지 여부
- 검색을 SQL 단순 검색으로 시작할지 별도 검색 인프라를 붙일지 여부
