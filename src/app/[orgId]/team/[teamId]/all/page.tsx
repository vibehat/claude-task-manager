import React from 'react';
import AllTasks from '@/features/tasks/views/all-tasks';
import TasksHeader from '@/features/tasks/components/headers/header';
import MainLayout from '@/components/layout/MainLayout';

export default function AllTasksPage(): React.JSX.Element {
   return (
      <MainLayout header={<TasksHeader />}>
         <AllTasks />
      </MainLayout>
   );
}
