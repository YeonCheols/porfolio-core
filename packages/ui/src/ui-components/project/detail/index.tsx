import { ProjectLink } from '@/ui-components';
import { Markdown, Tooltip } from '@/ui-primitives';

type stackIconType = {
  [key: string]: JSX.Element;
};

interface ProjectDetailData {
  title: string;
  image: string;
  stacks: string;
  linkDemo: string;
  linkGithub: string;
  content: string;
}

interface ProjectDetailProps {
  data: ProjectDetailData;
  stackIcons: stackIconType;
}

export const ProjectDetail = ({ data, stackIcons }: ProjectDetailProps) => {
  const { title, image, stacks, linkDemo, linkGithub, content } = data;
  const stacksArray = JSON.parse(stacks);

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-start justify-between gap-5 sm:flex-row lg:flex-row lg:items-center">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mb-1 text-[15px] text-neutral-700 dark:text-neutral-300">Tech Stack :</span>
          <div className="flex flex-wrap items-center gap-3">
            {stacksArray?.map((stack: string, index: number) => (
              <div key={index}>
                <Tooltip title={stack}>{stackIcons[stack]}</Tooltip>
              </div>
            ))}
          </div>
        </div>
        <ProjectLink title={title} link_demo={linkDemo} link_github={linkGithub} />
      </div>
      {image.startsWith('https') && (
        <img src={image} width={800} height={400} alt={title} className="hover:scale-105" />
      )}
      {content && (
        <div className="mt-5 space-y-6 leading-[1.8] dark:text-neutral-300">
          <Markdown>{content}</Markdown>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
