# Portfolio Core Monorepo

이 프로젝트는 Turborepo와 pnpm workspace를 기반으로 한 디자인 시스템/컴포넌트 라이브러리 모노레포입니다.

## 주요 기술 스택

- **Monorepo 관리**: Turborepo, pnpm
- **UI 라이브러리**: React, MUI, TailwindCSS, Zustand
- **문서화**: Storybook, Vite
- **빌드/번들링**: Tsup, TypeScript
- **품질 관리**: ESLint, Prettier, Changesets

---

## 프로젝트 구조

```
porfolio-core/
  apps/
    docs/                # Storybook 기반 문서/프리뷰 사이트
  packages/
    ui/                  # 디자인 시스템(React UI 컴포넌트)
    esconfig/            # ESLint 등 코드 스타일/품질 설정
    tsconfig/            # TypeScript 설정
```

### 각 패키지 설명

- **apps/docs**  
  Storybook 기반의 UI 컴포넌트 문서 및 프리뷰 사이트입니다.

- **packages/ui**  
  실제로 사용할 React 기반 UI 컴포넌트(디자인 시스템) 라이브러리입니다.
  - 패키지명: `@YeonCheols/portfolio-core/ui`
  - MUI, TailwindCSS, Zustand 등 활용

- **packages/esconfig**  
  프로젝트 전반에 적용되는 ESLint 등 코드 품질/스타일 설정을 제공합니다.
  - 패키지명: `@YeonCheols/portfolio-core/esconfig`

- **packages/tsconfig**  
  TypeScript 공통 설정을 제공합니다.
  - 패키지명: `@YeonCheols/portfolio-core/tsconfig`

---

## 주요 명령어

- `pnpm build` - 모든 패키지 빌드
- `pnpm dev` - Storybook 개발 서버 실행
- `pnpm lint` - 전체 패키지 린트
- `pnpm changeset` - 변경점(changeset) 생성
- `pnpm clean` - node_modules, dist 등 정리

---

## 개발 및 문서화

- **컴포넌트 개발**: `packages/ui/src/components`에 추가
- **문서 작성**: `apps/docs/stories`에 Storybook 스토리 추가
- **빌드**: `pnpm build` 실행 시 각 패키지별 빌드 스크립트 실행

---

## 배포 및 버전 관리

- Changesets를 통한 버전 관리 및 changelog 자동화
- master push 시에 GitHub Actions를 통한 자동 배포

---

## 커밋 컨벤션

- 이 프로젝트는 [Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0/) 규칙을 **권장**합니다.
  - 예시: `feat: 새로운 버튼 컴포넌트 추가`, `fix: 로딩 스피너 버그 수정`
- master 브랜치에 push 시, release-tag.yml 워크플로우에 의해 자동으로 태그 및 릴리스가 생성됩니다.

| 타입     | 설명                          | 예시                              |
| -------- | ----------------------------- | --------------------------------- |
| feat     | 새로운 기능 추가              | feat: 로그인 버튼 추가            |
| fix      | 버그 수정                     | fix: 로딩 스피너 동작 오류 수정   |
| docs     | 문서 수정                     | docs: README 오타 수정            |
| style    | 코드 포맷팅(기능/로직 무관)   | style: prettier 적용              |
| refactor | 코드 리팩토링(기능 변화 없음) | refactor: 버튼 컴포넌트 구조 개선 |
| test     | 테스트 추가/수정              | test: button 테스트 코드 추가     |
| chore    | 빌드/배포/설정 등 기타        | chore: 패키지 의존성 업데이트     |

---

## 라이선스

MIT

---

> 자세한 사용법 및 기여 방법은 각 패키지의 README.md를 참고하세요.
