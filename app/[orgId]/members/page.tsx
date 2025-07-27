import Members from '@/components/common/members/members';
import Header from '@/components/layout/headers/members/header';
import MainLayout from '@/components/layout/main-layout';

export default function MembersPage(): JSX.Element {
   return (
      <MainLayout header={<Header />}>
         <Members />
      </MainLayout>
   );
}
