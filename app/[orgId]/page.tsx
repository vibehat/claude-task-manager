import { redirect } from 'next/navigation';
import { getDefaultOrgRoute } from '@/libs/config/defaults';

interface OrgIdPageProps {
   params: Promise<{ orgId: string }>;
}

export default async function OrgIdPage({ params }: OrgIdPageProps) {
   const { orgId } = await params;
   redirect(getDefaultOrgRoute(orgId));
}
