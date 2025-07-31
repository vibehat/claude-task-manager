import React from 'react';
import Members from '@/features/members/views/members';
import Header from '@/components/layout/headers/members/header';
import MainLayout from '@/components/layout/MainLayout';

export default function MembersPage(): React.JSX.Element {
   return (
      <MainLayout header={<Header />}>
         <Members />
      </MainLayout>
   );
}
