'use client';

import { BsGithub as GithubIcon } from 'react-icons/bs';
import { FiExternalLink as LinkIcon } from 'react-icons/fi';
import { Link } from '@/ui-primitives';

export interface ProjectLinkProps {
  title?: string;
  linkGithub?: string;
  linkDemo?: string;
}

function ProjectLink({ linkGithub, linkDemo }: ProjectLinkProps) {
  return (
    <div className="flex gap-4">
      {linkGithub ? <Link url={linkGithub} text="Source Code" icon={<GithubIcon size={22} />} /> : null}
      {linkGithub && linkDemo ? <span className="text-neutral-400 dark:text-neutral-600">|</span> : null}
      {linkDemo ? <Link url={linkDemo} text="Live Demo" icon={<LinkIcon size={22} />} /> : null}
    </div>
  );
}

export default ProjectLink;
