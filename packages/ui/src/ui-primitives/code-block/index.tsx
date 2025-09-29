'use client';

import { useEffect, useState } from 'react';
import { HiCheckCircle as CheckIcon, HiOutlineClipboardCopy as CopyIcon } from 'react-icons/hi';
import { type CodeProps } from 'react-markdown/lib/ast-to-react';
import { useCopyToClipboard } from 'usehooks-ts';
import { cn } from '@/utils';

// 동적으로 SyntaxHighlighter 로드
const loadSyntaxHighlighter = async () => {
  const { PrismLight: SyntaxHighlighter } = await import('react-syntax-highlighter');
  const { default: css } = await import('react-syntax-highlighter/dist/cjs/languages/prism/css');
  const { default: diff } = await import('react-syntax-highlighter/dist/cjs/languages/prism/diff');
  const { default: javascript } = await import('react-syntax-highlighter/dist/cjs/languages/prism/javascript');
  const { default: tsx } = await import('react-syntax-highlighter/dist/cjs/languages/prism/tsx');
  const { default: typescript } = await import('react-syntax-highlighter/dist/cjs/languages/prism/typescript');
  const { default: a11yDark } = await import('react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark');

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

  return { SyntaxHighlighter, themeColor: a11yDark };
};

function CodeBlock({ className = '', children, inline, ...props }: CodeProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [syntaxHighlighter, setSyntaxHighlighter] = useState<any>(null);
  const [, copy] = useCopyToClipboard();
  const match = /language-(?<language>\w+)/.exec(className || '');

  useEffect(() => {
    if (!inline) {
      void loadSyntaxHighlighter().then(({ SyntaxHighlighter, themeColor }) => {
        setSyntaxHighlighter({ SyntaxHighlighter, themeColor });
      });
    }
  }, [inline]);

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

  if (inline) {
    return (
      <code className="rounded-md bg-neutral-200 px-2 py-1 text-[14px] font-light text-sky-600 dark:bg-neutral-700 dark:text-sky-300">
        {children}
      </code>
    );
  }

  if (!syntaxHighlighter) {
    return <div className="mt-12 mb-12 h-36 w-full" />;
  }

  const { SyntaxHighlighter, themeColor } = syntaxHighlighter;

  return (
    <div className={cn('relative', className)}>
      <button
        className="absolute top-3 right-3 rounded-lg border border-neutral-700 p-2 hover:bg-neutral-800"
        type="button"
        aria-label="Copy to Clipboard"
        onClick={() => handleCopy(children.toString())}
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
        style={themeColor}
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
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
