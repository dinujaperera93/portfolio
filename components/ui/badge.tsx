'use client';

import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'secondary' | 'outline';

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-blue-600 text-white',
  secondary: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200',
  outline: 'border border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-200 bg-transparent',
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export const Badge = ({ className, variant = 'default', ...props }: BadgeProps) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full border border-transparent px-3 py-1 text-xs font-semibold uppercase tracking-wide',
      variantStyles[variant],
      className,
    )}
    {...props}
  />
);

Badge.displayName = 'Badge';
