import React from 'react';
import type { Metadata } from 'next';
import { IndieLayout } from '@/components/layout/IndieLayout';

export const metadata: Metadata = {
   title: 'Individual Mode | Circle',
   description: 'Individual project management mode for focused personal productivity',
};

interface IndieLayoutPageProps {
   children: React.ReactNode;
}

export default function IndieLayoutPage({ children }: IndieLayoutPageProps): React.JSX.Element {
   return children;
}
