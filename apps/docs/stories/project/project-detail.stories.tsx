import type { Meta, StoryObj } from "@storybook/react";
import { ProjectDetail, StackIcon, type ProjectDetailProps } from "@ui";

const iconSize = 20;

const meta = {
  component: ProjectDetail,
  argTypes: {},
} satisfies Meta<typeof ProjectDetail>;

export default meta;

type Story = StoryObj<ProjectDetailProps>;

export const Primary: Story = {
  render: (props: ProjectDetailProps) => (
    <div className="mt-10">
      <ProjectDetail {...props} />
    </div>
  ),
  name: "ProjectDetail",
  args: {
    data: {
      title: "포트폴리오 프로젝트",
      image:
        "https://ywlmykjlvcpfabodffof.supabase.co/storage/v1/object/public/portfolio-img/main/portfolio.webp",
      linkDemo: "https://www.ycseng.com",
      linkGithub: "https://github.com/YeonCheols/portfolio2",
      stacks:
        '["Next.js","React.js","TypeScript","TailwindCSS","Node.js","JavaScript"]',
      content:
        "# 연철s 포트폴리오 어드민\n\n개인 포트폴리오 웹사이트를 관리하기 위한 관리자 대시보드입니다. Next.js와 VisActor를 활용하여 현대적이고 직관적인 인터페이스를 제공합니다.\n\n## 기능\n\n- 📊 **포트폴리오 관리** - 프로젝트, 기술 스택, 경력 등 포트폴리오 콘텐츠 관리\n- 📝 **콘텐츠 에디터** - 마크다운 기반의 풍부한 텍스트 에디터\n- 🌗 **다크 모드** - 시스템 환경설정을 지원하는 다크/라이트 모드\n- 📱 **반응형 디자인** - 모든 디바이스에서 사용 가능\n- 🔒 **인증 시스템** - 관리자 로그인\n- 📈 **데이터 시각화** - 포트폴리오 방문자 통계 및 분석\n\n## 기술 스택\n\n- [Next.js 15.0.1](https://nextjs.org/) - React 프레임워크\n- [React 19.0.0-rc](https://react.dev/) - UI 라이브러리\n- [TypeScript 5.5.4](https://www.typescriptlang.org/) - 타입 안정성\n- [Tailwind CSS 3.4.1](https://tailwindcss.com/) - 스타일링\n- [VisActor 1.12.10](https://visactor.io/) - 데이터 시각화\n- [Supabase 2.49.4](https://supabase.com/) - 백엔드 및 데이터베이스\n- [AWS S3 SDK 3.812.0](https://aws.amazon.com/s3/) - 파일 스토리지\n- [React Hook Form 7.56.4](https://react-hook-form.com/) - 폼 관리\n- [SWR 2.3.3](https://swr.vercel.app/) - 데이터 페칭\n- [Jotai 2.10.1](https://jotai.org/) - 상태 관리\n- [React Markdown 10.1.0](https://github.com/remarkjs/react-markdown) - 마크다운 렌더링\n- [Next Themes 0.3.0](https://github.com/pacocoursey/next-themes) - 테마 관리\n- [React Hot Toast 2.5.2](https://react-hot-toast.com/) - 토스트 알림\n- [Radix UI 2.1.1](https://www.radix-ui.com/) - 접근성 컴포넌트\n- [Lucide React 0.436.0](https://lucide.dev/) - 아이콘\n- [Date-fns 3.6.0](https://date-fns.org/) - 날짜 유틸리티\n\n## 시작하기\n\n1. 저장소를 클론합니다\n\n```bash\ngit clone https://github.com/your-username/portfolio-admin.git\ncd portfolio-admin\n```\n\n2. 의존성을 설치합니다\n\n```bash\npnpm install\n```\n\n3. 환경 변수를 설정합니다\n\n```bash\ncp .env.example .env.local\n```\n\n4. 개발 서버를 실행합니다\n\n```bash\npnpm dev\n```\n\n5. 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.\n\n## 프로젝트 구조\n\n```bash\nsrc/\n├── app/                    # Next.js 앱 라우터\n│   ├── (auth)/            # 인증 관련 페이지\n│   ├── (dashboard)/       # 대시보드 페이지\n│   └── api/               # API 라우트\n├── components/            # React 컴포넌트\n│   ├── dashboard/        # 대시보드 컴포넌트\n│   ├── editor/          # 에디터 컴포넌트\n│   ├── forms/           # 폼 컴포넌트\n│   └── ui/              # UI 컴포넌트\n├── lib/                  # 유틸리티 함수\n├── styles/              # 전역 스타일\n└── types/               # TypeScript 타입\n```\n\n## 주요 기능 상세\n\n### 포트폴리오 관리\n\n- 프로젝트 CRUD 작업\n- 마크다운 콘텐츠 미리보기\n- 프로젝트 상태 관리\n- 프로젝트 이미지 업로드\n- 기술 스택 관리\n\n### 콘텐츠 에디터\n\n- 마크다운 지원\n- 이미지 업로드\n- 코드 하이라이팅\n- 실시간 미리보기\n\n### 데이터 시각화\n\n- 방문자 통계\n- 페이지별 조회수\n- 사용자 행동 분석\n- 트래픽 소스 분석\n\n## 라이선스\n\n이 프로젝트는 MIT 라이선스 하에 있습니다 - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.\n",
    },
    stackIcons: {
      "React.js": (
        <StackIcon
          name="React"
          icon="SiReact"
          color="text-sky-500"
          size={iconSize}
        />
      ),
      "Next.js": (
        <StackIcon name="Next.js" icon="SiNextdotjs" size={iconSize} />
      ),
      "Node.js": (
        <StackIcon
          name="Node.js"
          icon="SiNodedotjs"
          color="text-green-600"
          size={iconSize}
        />
      ),
      TypeScript: (
        <StackIcon
          name="TypeScript"
          icon="SiTypescript"
          color="text-blue-400"
          size={iconSize}
        />
      ),
      TailwindCSS: (
        <StackIcon
          name="Tailwind"
          icon="SiTailwindcss"
          color="text-cyan-300"
          size={iconSize}
        />
      ),
      JavaScript: (
        <StackIcon
          name="JavaScript"
          icon="SiJavascript"
          color="text-yellow-400"
          size={iconSize}
        />
      ),
    },
  },
};
