'use client';

import React from 'react';
import { TerminalProvider } from './TerminalContext';
import { useTheme } from 'next-themes';

interface TerminalProviderWrapperProps {
   children: React.ReactNode;
}

export function TerminalProviderWrapper({
   children,
}: TerminalProviderWrapperProps): React.JSX.Element {
   const { theme } = useTheme();

   return (
      <TerminalProvider theme={theme as 'light' | 'dark' | 'auto'}>{children}</TerminalProvider>
   );
}
