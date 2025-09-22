'use client';

import { BsGithub as GithubIcon } from 'react-icons/bs';
import { FiExternalLink as LinkIcon } from 'react-icons/fi';
import { Link } from '@/ui-primitives';

export interface ProjectLinkProps {
  linkGithub?: string;
  linkDemo?: string;
  linkIconSize?: number;
  demoIconSize?: number;
}

function ProjectLink({ linkGithub, linkDemo, linkIconSize = 22 }: ProjectLinkProps) {
  return (
    <div className="flex gap-4">
      {linkGithub ? <Link url={linkGithub} text="Source Code" icon={<GithubIcon size={linkIconSize} />} /> : null}
      {linkGithub && linkDemo ? <span className="text-neutral-400 dark:text-neutral-600">|</span> : null}
      {linkDemo ? <Link url={linkDemo} text="Live Demo" icon={<LinkIcon size={linkIconSize} />} /> : null}
    </div>
  );
}

export default ProjectLink;
