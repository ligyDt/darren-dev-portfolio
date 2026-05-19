import { createElement, type ReactNode } from 'react';

export interface LazyLoadOptions {
  height: number;
  offset: number;
  placeholder: ReactNode;
}

export const useLazyLoad = (height = 240): LazyLoadOptions => ({
  height,
  offset: 120,
  placeholder: createElement('div', {
    'aria-hidden': 'true',
    className:
      'h-full min-h-[220px] w-full animate-pulse rounded-lg bg-zinc-900',
  }),
});
