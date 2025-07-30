'use client';

import * as React from 'react';
import type { ThemeProviderProps } from 'next-themes';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps): React.JSX.Element {
   return (
      <NextThemesProvider {...props} enableSystem enableColorScheme disableTransitionOnChange>
         {children}
      </NextThemesProvider>
   );
}
