# Portfolio Core library

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
  - 패키지명: @yeoncheols/portfolio-core-ui
  - TailwindCSS 활용

- **packages/esconfig**  
  프로젝트 전반에 적용되는 ESLint 등 코드 품질/스타일 설정을 제공합니다.
  - 패키지명: `@yeoncheols/portfolio-core-esconfig`

- **packages/tsconfig**  
  TypeScript 공통 설정을 제공합니다.
  - 패키지명: `@yeoncheols/portfolio-core-tsconfig`

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

## TailwindCSS 사용 안내

이 프로젝트의 스타일은 TailwindCSS 기반으로 제공됩니다.

- **정적 Tailwind 클래스**는 `@yeoncheols/portfolio-core-ui/ui-tailwind.min.css` 파일로 제공됩니다.
- **동적 Tailwind 클래스**(예: 조건부 className)는 CSS가 포함되어 있지 않으므로, 직접 CSS를 생성해 사용해야 합니다.
- **권장사항**: 메인 페이지에 아래와 같이 CSS를 import 해주세요.
  ```js
  import "@yeoncheols/portfolio-core-ui/ui-tailwind.min.css";
  ```
- 외부 프로젝트에서 이미 TailwindCSS를 사용 중이라면 별도 import가 필요 없습니다.

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

## 주요 기능

- **UI 컴포넌트**
  - `StackIcon`: 다양한 기술 스택(React 등)의 아이콘을 표시하는 컴포넌트. 색상, 크기, 이름 등 props로 제어 가능.
  - `StackTag`: 아이콘과 함께 기술 스택 이름을 태그 형태로 보여주는 컴포넌트. showName, color, size 등 props 지원.
- **Hooks/유틸리티**
  - hooks/lib/common.ts: 공통적으로 사용할 수 있는 커스텀 훅 제공(상세 내용은 추후 확장 가능).
  - utils: 아이콘 관련 유틸리티, 객체 병합(merge) 등 다양한 함수 제공.
- **상수/타입**
  - icon, loading 등 다양한 타입과 상수 제공.

---

## 사용 예시

```tsx
// StackIcon 사용 예시
import { StackIcon } from "@yeoncheols/portfolio-core-ui";

<StackIcon icon="SiReact" name="React" color="text-sky-500" size={24} />;

// StackTag 사용 예시
import { StackTag } from "@yeoncheols/portfolio-core-ui";

<StackTag
  icon="SiReact"
  name="React"
  color="text-sky-500"
  size={20}
  showName
/>;
```

---

## Storybook 문서화 안내

- 모든 컴포넌트는 `apps/docs/stories`에 Storybook 스토리로 문서화되어 있습니다.
- Storybook에서 실제 동작 및 props 조작 예시를 확인할 수 있습니다.
