import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Settings from '@/features/settings/views/settings';
import Header from '@/components/layout/headers/settings/header';

export default function SettingsPage(): React.JSX.Element {
   return (
      <MainLayout header={<Header />} headersNumber={1}>
         <Settings />
      </MainLayout>
   );
}
