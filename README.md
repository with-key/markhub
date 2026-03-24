# mdhub

`mdhub`는 프로젝트 단위로 에픽, 태스크, 마크다운 문서를 관리하고, 각 업무와
문서를 서로 연결할 수 있도록 설계된 팀 협업용 기획 서비스입니다.

이 프로젝트의 목표는 기획 산출물과 실행 업무를 한 맥락 안에서 관리하는 것입니다.
문서는 프로젝트에 속하며, 태스크와 문서, 문서와 문서 간의 연결 관계를 통해
관련 정보를 추적할 수 있습니다.

## 핵심 기능

- GitHub / Google 로그인
- 프로젝트 생성 및 참여 기반 접근
- 에픽, 태스크, 마크다운 문서 관리
- 태스크-문서 연결
- 문서-문서 연결
- 프로젝트 내부 검색

## 기술 스택

- Next.js (Pages Router)
- React
- TypeScript
- Vanilla Extract
- TanStack Query
- Jest / Testing Library

## 개발 실행

```bash
pnpm dev
```

브라우저에서 `http://localhost:3000`으로 접속할 수 있습니다.

## 문서

- 제품 요구사항 문서: `.docs/prd.md`
- 기여 가이드: `AGENTS.md`
