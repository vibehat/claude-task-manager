import { Badge } from '@/components/ui/badge';
import type { Tag } from '@/libs/client/types';
import Link from 'next/link';
import { TagIcon } from 'lucide-react';

export function TagBadge({ tag }: { tag: Tag }): React.JSX.Element {
  return (
    <Link href={`/lndev-ui/tags/all`} className="flex items-center justify-center gap-.5">
      <Badge variant="outline" className="gap-1.5 rounded-full text-muted-foreground bg-background">
        <TagIcon size={16} />
        {tag.name}
      </Badge>
    </Link>
  );
}

export default TagBadge;
