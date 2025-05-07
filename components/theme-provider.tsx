'use client';

import * as React from 'react';
import { Suspense } from 'react';
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <Suspense fallback={<div>Loading theme...</div>}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </Suspense>
  );
}
