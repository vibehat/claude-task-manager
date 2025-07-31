import { redirect } from 'next/navigation';
import { getDefaultRoute } from '@/libs/config/defaults';

export default function Home(): never {
   redirect(getDefaultRoute());
}
