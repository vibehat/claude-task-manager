'use client';

import React from 'react';
import type { SkipLinksProps } from '../../types';

export function SkipLinks({
  taskQueueHref = '#task-queue',
  taskDetailsHref = '#task-details',
}: SkipLinksProps): React.JSX.Element {
  return (
    <div className="sr-only focus-within:not-sr-only">
      <a
        href={taskQueueHref}
        className="absolute top-0 left-0 bg-blue-600 text-white px-4 py-2 rounded z-50 transform -translate-y-full focus:translate-y-0 transition-transform"
      >
        Skip to task queue
      </a>
      <a
        href={taskDetailsHref}
        className="absolute top-0 left-16 bg-blue-600 text-white px-4 py-2 rounded z-50 transform -translate-y-full focus:translate-y-0 transition-transform"
      >
        Skip to task details
      </a>
    </div>
  );
}

export default SkipLinks;
