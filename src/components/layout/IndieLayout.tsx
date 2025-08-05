'use client';

import * as React from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/SidebarProvider';
import {
  CreateTaskModalProvider,
  UpdateTaskModalProvider,
  TaskSidePanelProvider,
} from '@/features/tasks';
import { useTaskSidePanelStore } from '@/store/taskSidePanelStore';
import { IndieProjectProvider } from '@/libs/client/contexts/IndieProjectProvider';
import { IndieSidebar } from '@/components/layout/sidebar/IndieSidebar';
import { cn } from '@/libs/client/utils';
import IndieHeader from '@/components/layout/headers/indie/IndieHeader';
import { TerminalToggle, MultiTerminalManager } from '@/features/terminal';

interface IndieLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  headerActions?: React.ReactNode;
  showSearch?: boolean;
  filterOptions?: React.ReactNode;
  headersNumber?: 1 | 2;
  className?: string;
}

export function IndieLayout({
  children,
  header,
  headerActions,
  showSearch = false,
  filterOptions,
  headersNumber = 2,
  className,
}: IndieLayoutProps): React.JSX.Element {
  const { isOpen, panelWidth } = useTaskSidePanelStore();

  const height = {
    1: 'h-[calc(100svh-40px)] lg:h-[calc(100svh-56px)]',
    2: 'h-[calc(100svh-80px)] lg:h-[calc(100svh-96px)]',
  };

  // Default actions include terminal toggle
  const defaultActions = (
    <>
      <TerminalToggle />
      {headerActions}
    </>
  );

  // Use provided header or create default shared header
  const headerElement = header || (
    <IndieHeader actions={defaultActions} showSearch={showSearch} filterOptions={filterOptions} />
  );

  return (
    <IndieProjectProvider>
      <SidebarProvider>
        <CreateTaskModalProvider />
        <UpdateTaskModalProvider />
        <TaskSidePanelProvider />
        <IndieSidebar />
        <SidebarInset
          style={{
            marginRight: isOpen ? `${panelWidth}px` : '0',
            transition: 'margin-right 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <div className={cn('h-svh overflow-hidden lg:p-2 w-full', className)}>
            <div className="lg:border lg:rounded-md overflow-hidden flex flex-col items-center justify-start bg-container h-full w-full relative">
              {headerElement}
              <div className={cn('overflow-auto w-full', height[headersNumber])}>{children}</div>
            </div>
          </div>
        </SidebarInset>

        {/* Multi-Terminal Manager */}
        <MultiTerminalManager />
      </SidebarProvider>
    </IndieProjectProvider>
  );
}

export default IndieLayout;
