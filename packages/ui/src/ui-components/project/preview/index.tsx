import { ProjectLink } from '@/ui-components';
import { Markdown, Tooltip, Image } from '@/ui-primitives';

type StackIconType = Record<string, JSX.Element>;

export interface ProjectDataProps {
  title: string;
  image: string;
  stacks: string;
  linkDemo: string;
  linkGithub: string;
  content: string;
}

export interface ProjectPreviewProps {
  data: ProjectDataProps;
  stackIcons: StackIconType;
}

export function ProjectPreview({ data, stackIcons }: ProjectPreviewProps) {
  if (typeof data === 'undefined') return null;

  const { title, image, stacks, linkDemo, linkGithub, content } = data;
  const stacksArray = JSON.parse(stacks) as string[];

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-start justify-between gap-5 sm:flex-row lg:flex-row lg:items-center">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mb-1 text-[15px] text-neutral-700 dark:text-neutral-300">Tech Stack :</span>
          <div className="flex flex-wrap items-center gap-3">
            {stacksArray.map((stack: string) => (
              <div key={stack}>
                <Tooltip title={stack}>{stackIcons[stack]}</Tooltip>
              </div>
            ))}
          </div>
        </div>
        <ProjectLink title={title} linkDemo={linkDemo} linkGithub={linkGithub} />
      </div>
      {image.startsWith('https') && (
        <Image src={image} width={800} height={400} alt={title} className="hover:scale-105" />
      )}
      {content ? (
        <div className="mt-5 space-y-6 leading-[1.8] dark:text-neutral-300 text-neutral-700">
          <Markdown>{content}</Markdown>
        </div>
      ) : null}
    </div>
  );
}

export default ProjectPreview;
