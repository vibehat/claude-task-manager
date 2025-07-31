'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Package } from 'lucide-react';

export function EmptySubIssues() {
   return (
      <Card className="border-dashed">
         <CardContent className="flex flex-col items-center justify-center py-8 text-center">
            {/* <Package className="h-8 w-8 text-muted-foreground mb-3" /> */}
            <h3 className="font-medium text-sm mb-1">No sub-issues yet</h3>
            <p className="text-xs text-muted-foreground">
               Break down this issue into smaller tasks
            </p>
         </CardContent>
      </Card>
   );
}
