import MainLayout from '@/components/layout/main-layout';
import Settings from '@/components/common/settings/settings';
import Header from '@/components/layout/headers/settings/header';

export default function SettingsPage(): JSX.Element {
   return (
      <MainLayout header={<Header />} headersNumber={1}>
         <Settings />
      </MainLayout>
   );
}
