import Teams from '@/features/teams/views/teams';
import Header from '@/components/layout/headers/teams/header';
import MainLayout from '@/components/layout/MainLayout';

export default function TeamsPage(): React.JSX.Element {
   return (
      <MainLayout header={<Header />}>
         <Teams />
      </MainLayout>
   );
}
