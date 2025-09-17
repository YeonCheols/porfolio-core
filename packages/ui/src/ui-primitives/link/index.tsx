'use client';

import NextLink from 'next/link';
import { type LinkProps } from '@/types/link';

const Link = ({ url, text, icon }: LinkProps) => {
  return (
    <NextLink href={url} target="_blank" passHref>
      <div className="flex items-center gap-2 font-medium text-neutral-700 dark:text-neutral-300 ">
        {icon}
        <span className="text-[15px] transition-all duration-300 dark:text-teal-500 hover:dark:text-teal-400">
          {text}
        </span>
      </div>
    </NextLink>
  );
};

export default Link;
