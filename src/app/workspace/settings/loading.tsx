import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

export default function SettingsLoading(): React.JSX.Element {
  return (
    <div className="p-6 space-y-6 max-w-4xl">
      {/* Header Skeleton */}
      <div>
        <Skeleton className="h-9 w-32" />
        <Skeleton className="h-4 w-64 mt-2" />
      </div>

      {/* Settings Cards Skeleton */}
      {Array.from({ length: 4 }).map((_, cardIndex) => (
        <Card key={cardIndex}>
          <CardHeader>
            <div className="flex items-center">
              <Skeleton className="h-5 w-5 mr-2" />
              <Skeleton className="h-6 w-24" />
            </div>
            <Skeleton className="h-4 w-48" />
          </CardHeader>
          <CardContent className="space-y-4">
            {cardIndex === 0 && (
              // Profile form skeleton
              <>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-24 w-full" />
                </div>
                <Skeleton className="h-10 w-24" />
              </>
            )}

            {cardIndex === 1 && (
              // Notification toggles skeleton
              <>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-3 w-48" />
                      </div>
                      <Skeleton className="h-6 w-11 rounded-full" />
                    </div>
                    {i < 3 && <Separator className="my-4" />}
                  </div>
                ))}
                <Skeleton className="h-10 w-48" />
              </>
            )}

            {cardIndex === 2 && (
              // Preferences dropdowns skeleton
              <>
                <div className="grid gap-4 md:grid-cols-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                  ))}
                </div>
                <Skeleton className="h-10 w-32" />
              </>
            )}

            {cardIndex === 3 && (
              // Data management skeleton
              <>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-56" />
                  </div>
                  <Skeleton className="h-10 w-20" />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-3 w-64" />
                  </div>
                  <Skeleton className="h-10 w-32" />
                </div>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
