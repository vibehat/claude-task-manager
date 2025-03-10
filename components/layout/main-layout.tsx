import { AppSidebar } from '@/components/layout/sidebar/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { CreateIssueModalProvider } from '@/components/common/issues/create-issue-modal-provider';

interface MainLayoutProps {
   children: React.ReactNode;
   header: React.ReactNode;
}

export default function MainLayout({ children, header }: MainLayoutProps) {
   return (
      <SidebarProvider>
         <CreateIssueModalProvider />
         <AppSidebar />
         <div className="h-svh overflow-hidden lg:p-2 w-full">
            <div className="lg:border lg:rounded-md overflow-hidden flex flex-col items-center justify-start bg-container h-full w-full">
               {header}
               <div className="overflow-auto h-[calc(100svh-80px)] lg:h-[calc(100svh-96px)] w-full">
                  {children}
               </div>
            </div>
         </div>
      </SidebarProvider>
   );
}
