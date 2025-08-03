import React from 'react';
import { IndieLayout } from '@/components/layout/IndieLayout';
import { AllTasks } from '@/features/tasks/views/all-tasks';
import Header from '@/features/tasks/layout/header/header';

export default function IndieTasksPage(): React.JSX.Element {
   return (
      <IndieLayout header={<Header />}>
         <AllTasks />
      </IndieLayout>
   );
}
