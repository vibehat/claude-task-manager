import { redirect } from 'next/navigation';
import { getDefaultRoute } from '@/lib/config/defaults';

export default function Home() {
   redirect(getDefaultRoute());
}
