'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { type TooltipProps } from '@/types';
import { cn } from '@/utils';

function Tooltip({ title, children }: TooltipProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  const tooltipVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const tooltipClasses = cn(
    'absolute bottom-full mb-2 hidden w-max max-w-xs rounded',
    'bg-neutral-500 px-2 py-1 text-xs font-medium text-neutral-100',
    'lg:block dark:bg-neutral-100 dark:text-neutral-700',
  );

  return (
    <div className="relative inline-block">
      <div className="tooltip-container relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {isTooltipVisible ? (
        <motion.div className={tooltipClasses} variants={tooltipVariants} initial="hidden" animate="visible">
          {title}
        </motion.div>
      ) : null}
    </div>
  );
}

export default Tooltip;
