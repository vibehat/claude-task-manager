import { Badge } from '@/components/ui/badge';
import type { Project } from '@/mock-data/projects';
import Link from 'next/link';

export function ProjectBadge({ project }: { project: Project }): React.JSX.Element {
   return (
      <Link href={`/lndev-ui/projects/all`} className="flex items-center justify-center gap-.5">
         <Badge
            variant="outline"
            className="gap-1.5 rounded-full text-muted-foreground bg-background"
         >
            <project.icon size={16} />
            {project.name}
         </Badge>
      </Link>
   );
}
