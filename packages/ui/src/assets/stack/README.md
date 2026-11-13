# 프로젝트 브랜드 아이콘

- Zustand: 공식 저장소의 docs/favicon.ico를 원본 바이트 그대로 zustand.png로 저장했습니다. 원본 응답은 128×128 PNG입니다. 출처: https://github.com/pmndrs/zustand/blob/main/docs/favicon.ico
- VisActor: 기존 ADMIN의 public/visactor.svg에 사용 중인 VisActor 심볼을 재사용하고 독립 SVG 이미지로 읽을 수 있도록 XML 네임스페이스를 명시했습니다. 공식 로고 출처: https://github.com/VisActor/.github/blob/main/profile/logo_500_200_light.svg

색상과 비율을 유지하며 패키지 빌드에서 data URL로 포함합니다. 런타임에 외부 이미지 서버를 호출하지 않습니다. PfZustand·PfVisactor는 기존 iconLibraries와 getIconComponent를 통해 선택·렌더링합니다. 기존 SiReact·SiTailwindcss·SiSupabase·SiSwr·SiReacthookform은 원래 라이브러리 아이콘을 사용합니다.

## 운영 적용 순서

1. 공통 UI 0.5.0을 배포하고 사용자 웹과 ADMIN이 해당 버전을 소비하도록 갱신합니다.
2. 관리자 태그 메타데이터를 아래 실제 아이콘으로 설정합니다. 태그 이름·프로젝트 관계는 변경하지 않습니다.
   - React: SiReact
   - Tailwind CSS: SiTailwindcss
   - Supabase: SiSupabase
   - SWR: SiSwr
   - React Hook Form: SiReacthookform
   - Zustand: PfZustand
   - VisActor: PfVisactor
3. Next.js의 SiNextdotjs와 TypeScript의 SiTypescript는 기존 설정을 유지합니다. 프로젝트 카드·상세와 ADMIN에서 실제 아이콘을 확인합니다.

기존 0.4.0 이하 버전은 Pf 라이브러리를 알지 못하므로 패키지 소비자 갱신 전에 PfZustand·PfVisactor를 운영 태그에 지정하지 않습니다. 아이콘을 대체 텍스트나 임의의 다른 그림으로 표시하는 처리는 추가하지 않았습니다.
