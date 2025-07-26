import { redirect } from 'next/navigation';
import { getDefaultOrgRoute } from '@/lib/config/defaults';

interface OrgIdPageProps {
   params: { orgId: string };
}

export default function OrgIdPage({ params }: OrgIdPageProps) {
   redirect(getDefaultOrgRoute(params.orgId));
}
