import React from 'react';
import MainLayout from '@/components/layout/main-layout';
import Header from '@/components/layout/headers/projects/header';
import Projects from '@/components/common/projects/projects';

export default function ProjectsPage(): React.JSX.Element {
   return (
      <MainLayout header={<Header />}>
         <Projects />
      </MainLayout>
   );
}
