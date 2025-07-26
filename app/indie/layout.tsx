import type { Metadata } from 'next';
import { IndieLayout } from '@/components/layout/indie-layout';

export const metadata: Metadata = {
   title: 'Individual Mode | Circle',
   description: 'Individual project management mode for focused personal productivity',
};

interface IndieLayoutPageProps {
   children: React.ReactNode;
}

export default function IndieLayoutPage({ children }: IndieLayoutPageProps) {
   return <IndieLayout>{children}</IndieLayout>;
}
