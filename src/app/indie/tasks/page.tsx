import React from 'react';
import { IndieLayout } from '@/components/layout/IndieLayout';
import { AllTasks } from '@/features/tasks/views/all-tasks';

export default function IndieTasksPage(): React.JSX.Element {
   return (
      <IndieLayout>
         <AllTasks />
      </IndieLayout>
   );
}
