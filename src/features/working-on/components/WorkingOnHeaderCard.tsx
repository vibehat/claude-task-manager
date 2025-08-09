import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface WorkingOnHeaderCardProps {
  title: string;
  status: string;
  phase?: string;
  subtasks?: Array<{ id: string; label: string; done: boolean }>;
}

export function WorkingOnHeaderCard({
  title,
  status,
  phase,
  subtasks = [],
}: WorkingOnHeaderCardProps): React.JSX.Element {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between text-base">
          <span>🎯 {title}</span>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Status: {status}</Badge>
            {phase && <Badge variant="outline">Phase: {phase}</Badge>}
          </div>
        </CardTitle>
      </CardHeader>
      {subtasks.length > 0 && (
        <CardContent className="pt-2">
          <div className="flex flex-wrap gap-3 text-sm">
            {subtasks.map((s) => (
              <label key={s.id} className="inline-flex items-center gap-2">
                <input type="checkbox" checked={s.done} readOnly className="accent-primary" />
                <span>{s.label}</span>
              </label>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
