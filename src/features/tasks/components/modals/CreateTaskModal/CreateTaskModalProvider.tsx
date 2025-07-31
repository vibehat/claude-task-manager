'use client';

import { CreateNewIssue } from '@/components/layout/sidebar/create-new-issue';

export function CreateTaskModalProvider(): React.JSX.Element {
   return (
      <div className="hidden">
         <CreateNewIssue />
      </div>
   );
}

export default CreateTaskModalProvider;
