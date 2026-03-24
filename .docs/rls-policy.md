# RLS 정책서

## 1. 문서 목적

본 문서는 Supabase PostgreSQL Row Level Security 기준으로 `mdhub` MVP의 데이터
접근 정책을 정의한다. 목표는 프로젝트 멤버십을 기준으로 데이터 접근 범위를 강제하고,
다른 프로젝트 데이터 노출을 차단하는 것이다.

## 2. 기본 원칙

- 모든 업무 데이터는 프로젝트 멤버십 기준으로 접근을 허용한다.
- 사용자는 자신이 속한 프로젝트 데이터만 조회할 수 있다.
- 생성, 수정, 연결, 해제도 동일하게 프로젝트 멤버십 조건을 만족해야 한다.
- 다른 프로젝트 데이터 존재 여부는 RLS 수준에서 차단하는 것을 기본으로 한다.

## 3. 전제 조건

- Supabase Auth의 `auth.uid()`를 사용할 수 있어야 한다.
- 앱의 `profiles.auth_user_id`는 `auth.users.id`와 매핑되어야 한다.
- 정책에서 현재 사용자 `profile_id`를 조회할 수 있는 보조 함수가 있으면 구현이 단순해진다.

권장 함수 예시:

```sql
create or replace function public.current_profile_id()
returns uuid
language sql
stable
as $$
  select p.id
  from public.profiles p
  where p.auth_user_id = auth.uid()
$$;
```

권장 멤버십 함수 예시:

```sql
create or replace function public.is_project_member(target_project_id uuid)
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from public.project_members pm
    where pm.project_id = target_project_id
      and pm.profile_id = public.current_profile_id()
  )
$$;
```

## 4. 테이블별 정책

### 4-1. `profiles`

목표:

- 사용자는 자신의 프로필만 조회 및 수정할 수 있어야 한다.

정책:

- `select`: `auth_user_id = auth.uid()`
- `insert`: 최초 프로필 생성 시 자신의 인증 사용자 기준으로만 허용
- `update`: 자신의 프로필만 허용
- `delete`: MVP에서는 비활성 또는 미지원 권장

권장 예시:

```sql
create policy "profiles_select_own"
on public.profiles
for select
using (auth_user_id = auth.uid());
```

### 4-2. `projects`

목표:

- 사용자는 자신이 멤버인 프로젝트만 조회할 수 있어야 한다.
- 프로젝트 생성은 로그인 사용자만 가능해야 한다.

정책:

- `select`: `is_project_member(id)`
- `insert`: 로그인 사용자만 가능, `created_by`와 `updated_by`는 현재 사용자여야 함
- `update`: 프로젝트 멤버만 가능
- `delete`: MVP 미지원

권장 방향:

- 생성 직후 `project_members`에 생성자 멤버십이 반드시 함께 들어가야 한다.
- 단일 트랜잭션 또는 RPC로 처리하는 편이 안전하다.

### 4-3. `project_members`

목표:

- 사용자는 자신이 속한 프로젝트의 멤버 정보만 볼 수 있어야 한다.

정책:

- `select`: `is_project_member(project_id)`
- `insert`: MVP에서는 프로젝트 생성 플로우 또는 서버 전용 로직에서만 처리 권장
- `update`: MVP 미지원
- `delete`: MVP 미지원

권장 방향:

- 일반 클라이언트가 직접 멤버십을 추가하지 않도록 한다.
- 초기에는 API 서버 또는 service role을 통한 제어가 안전하다.

### 4-4. `epics`

목표:

- 프로젝트 멤버만 해당 프로젝트 에픽을 조회/생성/수정할 수 있어야 한다.

정책:

- `select`: `is_project_member(project_id)`
- `insert`: `is_project_member(project_id)` 그리고 `created_by = current_profile_id()`
- `update`: `is_project_member(project_id)` 그리고 `updated_by = current_profile_id()`
- `delete`: MVP 미지원 또는 제한

권장 예시:

```sql
create policy "epics_select_member"
on public.epics
for select
using (public.is_project_member(project_id));
```

### 4-5. `tasks`

목표:

- 프로젝트 멤버만 태스크를 조회/생성/수정할 수 있어야 한다.
- `epic_id`는 같은 프로젝트 소속 에픽만 허용해야 한다.

정책:

- `select`: `is_project_member(project_id)`
- `insert`: `is_project_member(project_id)`
- `update`: `is_project_member(project_id)`
- `delete`: MVP 미지원 또는 제한

추가 검증:

- DB 제약 또는 트리거로 `epic_id`의 프로젝트 일치 여부를 강제한다.

### 4-6. `documents`

목표:

- 프로젝트 멤버만 문서를 조회/생성/수정할 수 있어야 한다.

정책:

- `select`: `is_project_member(project_id)`
- `insert`: `is_project_member(project_id)`
- `update`: `is_project_member(project_id)`
- `delete`: MVP 미지원

### 4-7. `task_documents`

목표:

- 프로젝트 멤버만 태스크-문서 연결을 조회/생성/해제할 수 있어야 한다.

정책:

- `select`: `is_project_member(project_id)`
- `insert`: `is_project_member(project_id)`
- `update`: `is_project_member(project_id)`
- `delete`: soft delete를 쓰지 않으면 `is_project_member(project_id)`

추가 검증:

- `task_id`, `document_id` 모두 같은 `project_id` 소속인지 강제
- 중복 활성 관계 금지

### 4-8. `document_links`

목표:

- 프로젝트 멤버만 문서-문서 연결을 조회/생성/해제할 수 있어야 한다.

정책:

- `select`: `is_project_member(project_id)`
- `insert`: `is_project_member(project_id)`
- `update`: `is_project_member(project_id)`
- `delete`: soft delete를 쓰지 않으면 `is_project_member(project_id)`

추가 검증:

- `source_document_id`, `target_document_id` 모두 같은 `project_id` 소속인지 강제
- 자기 자신 연결 금지
- 중복 활성 관계 금지

## 5. 작업 유형별 권장 전략

### 조회

- RLS로 직접 보호
- 클라이언트에서 필터를 실수하더라도 DB에서 차단

### 생성

- 단건 생성은 일반 insert 정책으로 처리 가능
- 프로젝트 생성처럼 연관 레코드가 함께 필요한 작업은 RPC 또는 API 트랜잭션 권장

### 수정

- `updated_by = current_profile_id()`를 애플리케이션에서 일관되게 설정
- 필요 시 trigger로 `updated_at` 자동 갱신

### 삭제 또는 해제

- 프로젝트와 문서는 물리 삭제 미지원
- 관계는 `is_active = false` 방식 권장
- soft delete 사용 시 `select` 정책에서 활성 관계만 노출하는 뷰 또는 조건 사용 검토

## 6. 권장 보조 제약

- `trim(title) <> ''`
- 상태값 `check constraint`
- 프로젝트 범위 교차 참조 방지 trigger
- `updated_at` 자동 갱신 trigger

## 7. 구현 순서

1. `profiles` 정책
2. `projects` 정책
3. `project_members` 정책
4. `epics`, `tasks`, `documents` 정책
5. `task_documents`, `document_links` 정책
6. 프로젝트 범위 교차 검증 trigger
7. soft delete 정책 또는 뷰 정리

## 8. 테스트 체크포인트

- 로그인 사용자가 자신의 프로필만 조회 가능한지 확인
- 프로젝트 멤버만 프로젝트 상세를 조회 가능한지 확인
- 멤버가 아닌 프로젝트의 에픽, 태스크, 문서가 조회되지 않는지 확인
- 다른 프로젝트 문서를 태스크에 연결할 수 없는지 확인
- 자기 자신 문서 연결이 차단되는지 확인
- 비활성화된 관계가 기본 조회에서 제외되는지 확인

## 9. 오픈 이슈

- 프로젝트 생성 시 `projects`와 `project_members`를 RPC로 묶을지 여부
- `project_members`를 클라이언트 직접 쓰기로 열지 여부
- soft delete 관계를 기본 테이블에서 직접 조회할지 활성 뷰를 둘지 여부
