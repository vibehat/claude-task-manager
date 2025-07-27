'use client';

import { CreateNewIssue } from '@/components/layout/sidebar/create-new-issue';

export function CreateIssueModalProvider(): React.JSX.Element {
   return (
      <div className="hidden">
         <CreateNewIssue />
      </div>
   );
}
