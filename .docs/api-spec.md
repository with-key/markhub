# API 명세 초안

## 1. 문서 목적

본 문서는 `mdhub` MVP 구현을 위한 API 초안이다. Next.js Pages Router의
`src/pages/api` 기준으로 작성하며, 프로젝트 범위 제한과 멤버십 검증을 공통 규칙으로
사용한다.

## 2. 공통 규칙

### 인증

- 모든 보호 API는 로그인 세션이 필요하다.
- 인증 실패 시 `401 Unauthorized`를 반환한다.

### 권한

- 프로젝트 범위 API는 현재 사용자가 해당 프로젝트 멤버인지 검증해야 한다.
- 멤버가 아닐 경우 `403 Forbidden` 또는 존재 숨김 전략으로 `404 Not Found`를 반환한다.
- MVP에서는 데이터 존재 숨김을 위해 `404` 전략을 우선 고려할 수 있다.

### 응답 형식

성공 응답 예시:

```json
{
  "data": {},
  "error": null
}
```

실패 응답 예시:

```json
{
  "data": null,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "title is required"
  }
}
```

### 공통 에러 코드

- `UNAUTHORIZED`
- `FORBIDDEN`
- `NOT_FOUND`
- `VALIDATION_ERROR`
- `CONFLICT`
- `INTERNAL_ERROR`

## 3. 인증 및 사용자

### `GET /api/me`

목적:

- 현재 로그인 사용자 프로필 조회

응답 데이터:

- `id`
- `displayName`
- `email`
- `avatarUrl`

### `POST /api/auth/callback`

목적:

- OAuth 이후 내부 사용자 프로필 생성 또는 갱신 처리

비고:

- Supabase Auth 기본 흐름을 사용한다면 별도 API 없이 서버 액션 또는 auth hook으로
  대체 가능하다.

## 4. 프로젝트

### `GET /api/projects`

목적:

- 내가 생성했거나 참여 중인 프로젝트 목록 조회

응답 데이터:

- 프로젝트 목록
- 각 프로젝트의 `id`, `name`, `description`, `createdAt`

### `POST /api/projects`

목적:

- 프로젝트 생성

요청 본문:

```json
{
  "name": "프로젝트 이름",
  "description": "설명",
  "memberIds": []
}
```

검증:

- `name` 필수
- `name.trim()` 빈 문자열 금지

처리:

- 프로젝트 생성
- 생성자 멤버십 자동 생성
- 선택 참여자 추가

### `GET /api/projects/:projectId`

목적:

- 프로젝트 상세 기본 정보 조회

검증:

- 현재 사용자가 프로젝트 멤버여야 한다.

## 5. 에픽

### `GET /api/projects/:projectId/epics`

목적:

- 프로젝트 에픽 목록 조회

쿼리:

- `status` 선택 필터 가능

### `POST /api/projects/:projectId/epics`

목적:

- 에픽 생성

요청 본문:

```json
{
  "title": "에픽 제목",
  "description": "에픽 설명",
  "status": "draft"
}
```

검증:

- `title` 필수
- `status` 허용값 검증

### `GET /api/projects/:projectId/epics/:epicId`

목적:

- 에픽 상세 조회

응답 데이터:

- 에픽 기본 정보
- 선택적으로 하위 태스크 요약 목록

## 6. 태스크

### `GET /api/projects/:projectId/tasks`

목적:

- 프로젝트 태스크 목록 조회

쿼리:

- `status`
- `epicId`

### `POST /api/projects/:projectId/tasks`

목적:

- 태스크 생성

요청 본문:

```json
{
  "title": "태스크 제목",
  "description": "태스크 설명",
  "status": "todo",
  "epicId": "uuid-or-null"
}
```

검증:

- `title` 필수
- `status`는 `backlog`, `todo`, `in progress`, `done`만 허용
- `epicId`가 존재하면 같은 프로젝트 소속 에픽인지 검증

### `GET /api/projects/:projectId/tasks/:taskId`

목적:

- 태스크 상세 조회

응답 데이터:

- 태스크 기본 정보
- 소속 에픽 정보
- 연결된 문서 목록

### `PATCH /api/projects/:projectId/tasks/:taskId`

목적:

- 태스크 수정

수정 가능 항목:

- `title`
- `description`
- `status`
- `epicId`

## 7. 문서

### `GET /api/projects/:projectId/documents`

목적:

- 프로젝트 문서 목록 조회

쿼리:

- `q` 선택 검색

### `POST /api/projects/:projectId/documents`

목적:

- 문서 생성

요청 본문:

```json
{
  "title": "문서 제목",
  "content": "# markdown"
}
```

검증:

- `title` 필수
- `content`는 선택

### `GET /api/projects/:projectId/documents/:documentId`

목적:

- 문서 상세 조회

응답 데이터:

- 문서 기본 정보
- 관련 문서 목록

### `PATCH /api/projects/:projectId/documents/:documentId`

목적:

- 문서 수정

수정 가능 항목:

- `title`
- `content`

## 8. 태스크-문서 연결

### `GET /api/projects/:projectId/tasks/:taskId/documents`

목적:

- 태스크에 연결된 문서 목록 조회

### `POST /api/projects/:projectId/tasks/:taskId/documents`

목적:

- 태스크에 문서 연결

요청 본문:

```json
{
  "documentId": "uuid"
}
```

검증:

- `documentId` 필수
- 대상 문서는 같은 프로젝트 소속이어야 한다.
- 이미 활성 연결이 존재하면 `409 Conflict`

### `DELETE /api/projects/:projectId/tasks/:taskId/documents/:documentId`

목적:

- 태스크-문서 연결 해제

처리:

- 관계를 제거하거나 비활성화한다.
- 원본 태스크와 문서는 유지한다.

## 9. 문서-문서 연결

### `GET /api/projects/:projectId/documents/:documentId/links`

목적:

- 문서에 연결된 관련 문서 목록 조회

### `POST /api/projects/:projectId/documents/:documentId/links`

목적:

- 문서-문서 연결 생성

요청 본문:

```json
{
  "targetDocumentId": "uuid"
}
```

검증:

- `targetDocumentId` 필수
- 자기 자신 연결 금지
- 대상 문서는 같은 프로젝트 소속이어야 한다.
- 이미 활성 연결이 존재하면 `409 Conflict`

### `DELETE /api/projects/:projectId/documents/:documentId/links/:targetDocumentId`

목적:

- 문서-문서 연결 해제

처리:

- 관계를 제거하거나 비활성화한다.
- 원본 문서는 유지한다.

## 10. 검색

### `GET /api/projects/:projectId/search`

목적:

- 현재 프로젝트 범위 내 통합 검색

쿼리:

- `q` 필수
- `types` 선택, 예: `epic,task,document`

응답 데이터:

```json
{
  "data": {
    "epics": [],
    "tasks": [],
    "documents": []
  },
  "error": null
}
```

검증:

- `q`가 비어 있으면 빈 결과 또는 `VALIDATION_ERROR`
- 다른 프로젝트 데이터는 절대 포함하지 않는다.

## 11. 권장 구현 순서

1. `GET /api/me`
2. `GET /api/projects`
3. `POST /api/projects`
4. 에픽 CRUD 중 생성/목록/상세
5. 태스크 CRUD 중 생성/목록/상세/수정
6. 문서 CRUD 중 생성/목록/상세/수정
7. 태스크-문서 연결 API
8. 문서-문서 연결 API
9. 프로젝트 내부 검색 API

## 12. 오픈 이슈

- 프로젝트 참여자 추가를 생성 시점에만 지원할지 별도 초대 API를 둘지 여부
- 에픽 상태 허용값 확정 여부
- 관계 해제를 soft delete로 통일할지 여부
- 검색 API를 통합 API 하나로 둘지 기능별 API로 분리할지 여부
