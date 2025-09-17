'use client';

import { BsGithub as GithubIcon } from 'react-icons/bs';
import { FiExternalLink as LinkIcon } from 'react-icons/fi';
import { Link } from '@/ui-primitives';

interface ProjectLinkProps {
  title?: string;
  link_github?: string;
  link_demo?: string;
}

const ProjectLink = ({ link_github, link_demo }: ProjectLinkProps) => {
  return (
    <div className="flex gap-4">
      {link_github && <Link url={link_github} text="Source Code" icon={<GithubIcon size={22} />} />}
      {link_github && link_demo && <span className="text-neutral-400 dark:text-neutral-600">|</span>}
      {link_demo && <Link url={link_demo} text="Live Demo" icon={<LinkIcon size={22} />} />}
    </div>
  );
};

export default ProjectLink;
