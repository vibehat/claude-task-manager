import { redirect } from 'next/navigation';

export default function NotFound(): never {
  redirect('/');
}
