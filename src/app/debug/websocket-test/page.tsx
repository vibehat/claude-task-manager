import { WebSocketDemo } from '@/components/WebSocketDemo';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function WebSocketTestPage() {
   return (
      <div className="min-h-screen bg-gray-50">
         <div className="container mx-auto py-4">
            <Link
               href="/debug/index"
               className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
            >
               <ArrowLeft className="h-4 w-4" />
               Back to Debug Tools
            </Link>
         </div>
         <WebSocketDemo />
      </div>
   );
}
