'use client';

import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import CodeBlock from '../code-block';
import Table from '../table';
import type { MarkdownProps } from '@/types';
import { cn } from '@/utils';

const components = {
  a: (props: React.ComponentPropsWithoutRef<'a'>) => (
    <a className={cn('cursor-pointer text-teal-500 hover:text-teal-400 hover:underline')} {...props}>
      {props.children}
    </a>
  ),
  p: (props: any) => <p {...props} />,
  h1: (props: React.ComponentPropsWithoutRef<'h1'>) => (
    <h1 className={cn('text-3xl line-g font-medium pb-3 dark:text-neutral-300')} {...props}>
      {props.children}
    </h1>
  ),
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2 className={cn('text-2xl font-medium dark:text-neutral-300')} {...props}>
      {props.children}
    </h2>
  ),
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => (
    <h3 className={cn('text-xl leading-snug font-medium dark:text-neutral-300')} {...props}>
      {props.children}
    </h3>
  ),
  ul: ({ ordered: _ordered, ...props }: any) => <ul className={cn('list-disc space-y-3 pb-2 pl-10')} {...props} />,
  ol: ({ ordered: _ordered, ...props }: any) => <ol className={cn('list-decimal space-y-3 pb-2 pl-10')} {...props} />,
  code: (props: any) => <CodeBlock {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className={cn(
        'rounded-br-2xl border-l-[5px] border-neutral-700 border-l-cyan-500',
        'bg-neutral-200 py-3 pl-6 text-lg font-medium text-cyan-800',
        'dark:bg-neutral-800 dark:text-cyan-200',
      )}
      {...props}
    />
  ),
  table: (props: any) => <Table {...props} />,
  th: ({ isHeader: _isHeader, ...props }: React.ComponentPropsWithoutRef<'th'> & { isHeader?: boolean }) => (
    <th className={cn('border px-3 py-1 text-left dark:border-neutral-600')} {...props}>
      {props.children}
    </th>
  ),
  td: ({ isHeader: _isHeader, ...props }: React.ComponentPropsWithoutRef<'td'> & { isHeader?: boolean }) => (
    <td className={cn('border px-3 py-1 dark:border-neutral-600')} {...props}>
      {props.children}
    </td>
  ),
};

function Markdown({ children }: MarkdownProps) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]} components={components}>
      {children}
    </ReactMarkdown>
  );
}

export default Markdown;
