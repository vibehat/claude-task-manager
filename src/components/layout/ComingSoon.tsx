'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight, type LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ComingSoonProps {
  title: string;
  description: string;
  icon: LucideIcon;
  plannedFeatures: string[];
  timeline?: string;
  alternativeLinks?: {
    title: string;
    description: string;
    url: string;
  }[];
}

export function ComingSoon({
  title,
  description,
  icon: Icon,
  plannedFeatures,
  timeline = 'Coming Soon',
  alternativeLinks = [],
}: ComingSoonProps): React.JSX.Element {
  return (
    <div className="flex items-center justify-center min-h-[60vh] p-6">
      <div className="w-full max-w-2xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
            <Icon className="w-8 h-8 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-muted-foreground text-lg">{description}</p>
            <Badge variant="secondary" className="gap-2">
              <Clock className="w-3 h-3" />
              {timeline}
            </Badge>
          </div>
        </div>

        {/* Planned Features */}
        <Card>
          <CardHeader>
            <CardTitle>What&apos;s Coming</CardTitle>
            <CardDescription>
              Features we&apos;re planning to include in this section
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {plannedFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Alternative Links */}
        {alternativeLinks.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Meanwhile, Try These</CardTitle>
              <CardDescription>
                Similar functionality that&apos;s available right now
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {alternativeLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-between h-auto p-4"
                  asChild
                >
                  <Link href={link.url}>
                    <div className="text-left">
                      <div className="font-medium">{link.title}</div>
                      <div className="text-sm text-muted-foreground">{link.description}</div>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Footer Note */}
        <div className="text-center text-sm text-muted-foreground">
          This feature is being designed following user-centered principles to ensure it meets your
          needs.
        </div>
      </div>
    </div>
  );
}
