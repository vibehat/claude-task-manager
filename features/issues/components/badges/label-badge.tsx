import { Badge } from '@/components/ui/badge';
import type { IssueLabel } from '@/libs/client/graphql-client/generated';

export function LabelBadge({ labels }: { labels: IssueLabel[] }): React.JSX.Element {
   return (
      <>
         {labels.map((issueLabel) => (
            <Badge
               key={issueLabel.id}
               variant="outline"
               className="gap-1.5 rounded-full text-muted-foreground bg-background"
            >
               <span
                  className="size-1.5 rounded-full"
                  style={{ backgroundColor: issueLabel.label.color }}
                  aria-hidden="true"
               ></span>
               {issueLabel.label.name}
            </Badge>
         ))}
      </>
   );
}

export default LabelBadge;
