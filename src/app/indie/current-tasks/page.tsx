import React from 'react';
import { IndieLayout } from '@/components/layout/IndieLayout';
import { CurrentTasks } from '@/features/tasks/views/current-tasks';
import Header from '@/features/tasks/layout/header/header';

export default function IndieCurrentTasksPage(): React.JSX.Element {
   return (
      <IndieLayout header={<Header />}>
         <CurrentTasks />
      </IndieLayout>
   );
}
