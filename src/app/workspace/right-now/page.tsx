import React from 'react';
import Link from 'next/link';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function RightNowPage(): React.JSX.Element {
  return (
    <WorkspaceLayout>
      <div className="p-6 max-w-xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Right Now</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm">Recommended: Start Task 28.2</div>
            <Button asChild>
              <Link href="/workspace/working-on">Go to Working On</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </WorkspaceLayout>
  );
}
