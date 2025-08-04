import { Badge } from '@/components/ui/badge';

interface LabelBadgeProps {
  labels: Array<{
    id: string;
    label: {
      id: string;
      name: string;
      color: string;
    };
  }>;
}

export function LabelBadge({ labels }: LabelBadgeProps): React.JSX.Element {
  return (
    <>
      {labels.map((issueLabel) => (
        <Badge
          key={issueLabel.id}
          variant="outline"
          className="gap-1 rounded-full text-xs text-muted-foreground bg-background px-2 py-0.5 whitespace-nowrap"
        >
          <span
            className="size-1.5 rounded-full shrink-0"
            style={{ backgroundColor: issueLabel.label.color }}
            aria-hidden="true"
          ></span>
          <span className="truncate max-w-[100px]">{issueLabel.label.name}</span>
        </Badge>
      ))}
    </>
  );
}

export default LabelBadge;
