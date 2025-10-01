'use client';

import { useEffect, useState } from 'react';
import { HiCheckCircle as CheckIcon, HiOutlineClipboardCopy as CopyIcon } from 'react-icons/hi';
import { type CodeProps } from 'react-markdown/lib/ast-to-react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css.js';
// @ts-ignore
import diff from 'react-syntax-highlighter/dist/esm/languages/prism/diff.js';
// @ts-ignore
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript.js';
// @ts-ignore
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx.js';
// @ts-ignore
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript.js';
// @ts-ignore
import a11yDark from 'react-syntax-highlighter/dist/esm/styles/prism/a11y-dark.js';
import { useCopyToClipboard } from 'usehooks-ts';
import { cn } from '@/utils';

// children을 안전하게 문자열로 변환하는 함수
const safeStringify = (value: any): string => {
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }
  if (value && typeof value === 'object') {
    try {
      return JSON.stringify(value);
    } catch {
      return '[Object]';
    }
  }
  return String(value);
};

const languages = {
  javascript: 'javascript',
  typescript: 'typescript',
  diff: 'diff',
  tsx: 'tsx',
  css: 'css',
};

SyntaxHighlighter.registerLanguage(languages.javascript, javascript);
SyntaxHighlighter.registerLanguage(languages.typescript, typescript);
SyntaxHighlighter.registerLanguage(languages.diff, diff);
SyntaxHighlighter.registerLanguage(languages.tsx, tsx);
SyntaxHighlighter.registerLanguage(languages.css, css);

function CodeBlock({ className = '', children, inline, ...props }: CodeProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [, copy] = useCopyToClipboard();
  const match = /language-(?<language>\w+)/.exec(className || '');

  const handleCopy = (code: string) => {
    void copy(code);
    setIsCopied(true);
  };

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  return (
    <>
      {!inline ? (
        <div className={cn('relative', className)}>
          <button
            className="absolute top-3 right-3 rounded-lg border border-neutral-700 p-2 hover:bg-neutral-800"
            type="button"
            aria-label="Copy to Clipboard"
            onClick={() => handleCopy(safeStringify(children))}
            data-umami-event="Click Copy Code"
          >
            {!isCopied ? (
              <CopyIcon size={18} className="text-neutral-400" />
            ) : (
              <CheckIcon size={18} className="text-green-600" />
            )}
          </button>

          <SyntaxHighlighter
            {...props}
            style={a11yDark}
            customStyle={{
              padding: '20px',
              fontSize: '14px',
              borderRadius: '8px',
              paddingRight: '50px',
            }}
            PreTag="div"
            language={match?.groups?.language ?? 'javascript'}
            wrapLongLines
          >
            {safeStringify(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code className="rounded-md bg-neutral-200 px-2 py-1 text-[14px] font-light text-sky-600 dark:bg-neutral-700 dark:text-sky-300">
          {children}
        </code>
      )}
    </>
  );
}

export default CodeBlock;
