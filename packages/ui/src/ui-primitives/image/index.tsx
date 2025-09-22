'use client';

import { clsx } from 'clsx';
import { useState } from 'react';
import { type ImageProps } from '@/types';
import { cn } from '@/utils/merge';

function Image({ alt, src, className, rounded, width, height, loading, ...rest }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={clsx('overflow-hidden', isLoading ? 'animate-pulse' : '', rounded)}>
      <img
        className={cn(
          'duration-700 ease-in-out',
          isLoading ? 'scale-[1.02] blur-xl grayscale' : 'scale-100 blur-0 grayscale-0',
          rounded,
          className,
        )}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onLoad={() => setIsLoading(false)}
        {...rest}
      />
    </div>
  );
}

export default Image;
