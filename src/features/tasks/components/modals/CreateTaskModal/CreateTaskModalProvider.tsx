'use client';

import { CreateNewTask } from '@/features/tasks/views/create-new-task';

export function CreateTaskModalProvider(): React.JSX.Element {
   return (
      <div className="hidden">
         <CreateNewTask />
      </div>
   );
}

export default CreateTaskModalProvider;
