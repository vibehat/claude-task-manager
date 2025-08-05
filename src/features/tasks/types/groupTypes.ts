import type { FC } from 'react';

export interface GroupItem {
  key: string;
  label: string;
  icon?: FC<React.SVGProps<SVGSVGElement>>;
}
