import { AppSidebar } from '@/components/layout/sidebar/app-sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import {
   CreateIssueModalProvider,
   UpdateIssueModalProvider,
   IssueSidePanelProvider,
} from '@/features/issues';
import { useIssueSidePanelStore } from '@/store/issue-side-panel-store';
import { cn } from '@/libs/client/utils';

interface MainLayoutProps {
   children: React.ReactNode;
   header: React.ReactNode;
   headersNumber?: 1 | 2;
}

export default function MainLayout({
   children,
   header,
   headersNumber = 2,
}: MainLayoutProps): React.JSX.Element {
   const { isOpen, panelWidth } = useIssueSidePanelStore();
   const height = {
      1: 'h-[calc(100svh-40px)] lg:h-[calc(100svh-56px)]',
      2: 'h-[calc(100svh-80px)] lg:h-[calc(100svh-96px)]',
   };

   return (
      <SidebarProvider>
         <CreateIssueModalProvider />
         <UpdateIssueModalProvider />
         <IssueSidePanelProvider />
         <AppSidebar />
         <SidebarInset
            style={{
               marginRight: isOpen ? `${panelWidth}px` : '0',
               transition: 'margin-right 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
         >
            <div className="h-svh overflow-hidden lg:p-2 w-full">
               <div className="lg:border lg:rounded-md overflow-hidden flex flex-col items-center justify-start bg-container h-full w-full">
                  {header}
                  <div className={cn('overflow-auto w-full', height[headersNumber])}>
                     {children}
                  </div>
               </div>
            </div>
         </SidebarInset>
      </SidebarProvider>
   );
}
