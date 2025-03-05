import { AppSidebar } from '@/components/layout/sidebar/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import Header from './header';

interface MainLayoutProps {
   children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
   return (
      <SidebarProvider>
         <AppSidebar />
         <div className="h-screen overflow-hidden lg:p-2 w-full">
            <div className="lg:border lg:rounded-md overflow-hidden flex flex-col items-center justify-start bg-container h-full w-full">
               <Header />
               <div className="overflow-auto h-[calc(100%-40px)] w-full">{children}</div>
            </div>
         </div>
      </SidebarProvider>
   );
}
