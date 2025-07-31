import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/headers/projects/header';
import Projects from '@/features/projects/views/projects';

export default function ProjectsPage(): React.JSX.Element {
   return (
      <MainLayout header={<Header />}>
         <Projects />
      </MainLayout>
   );
}
