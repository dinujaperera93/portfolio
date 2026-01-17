'use client';

import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export const Card = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('rounded-2xl border border-gray-200 bg-white text-gray-900 shadow-sm dark:border-gray-800 dark:bg-slate-900 dark:text-gray-100', className)} {...props} />
);
Card.displayName = 'Card';

export const CardHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pb-0', className)} {...props} />
);
CardHeader.displayName = 'CardHeader';

export const CardContent = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pt-4', className)} {...props} />
);
CardContent.displayName = 'CardContent';

export const CardFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pt-0', className)} {...props} />
);
CardFooter.displayName = 'CardFooter';

export const CardTitle = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn('text-lg font-semibold leading-tight tracking-tight', className)} {...props} />
);
CardTitle.displayName = 'CardTitle';
