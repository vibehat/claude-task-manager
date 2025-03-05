import { Badge } from '@/components/ui/badge';
import { LabelInterface } from '@/lib/mock-data/labels';

export function LabelBadge({ label }: { label: LabelInterface[] }) {
   return (
      <div className="flex items-center justify-center gap-0.5">
         {label.map((l) => (
            <Badge
               key={l.id}
               variant="outline"
               className="gap-1.5 rounded-full text-muted-foreground bg-background"
            >
               <span
                  className="size-1.5 rounded-full"
                  style={{ backgroundColor: l.color }}
                  aria-hidden="true"
               ></span>
               {l.name}
            </Badge>
         ))}
      </div>
   );
}
