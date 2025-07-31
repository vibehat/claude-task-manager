import React from 'react';
import { IndieLayout } from '@/components/layout/IndieLayout';
import { AllIssues } from '@/features/issues/views/all-issues';

export default function IndieTasksPage(): React.JSX.Element {
   return (
      <IndieLayout>
         <AllIssues />
      </IndieLayout>
   );
}
