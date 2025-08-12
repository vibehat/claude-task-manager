'use client';

import React from 'react';

export default function TestTerminalPage(): React.JSX.Element {
  return (
    <div className="h-screen w-screen bg-gray-100 p-4">
      <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-full">
          <iframe src="/simple-terminal" className="w-full h-full border-0" title="Test Terminal" />
        </div>
      </div>
    </div>
  );
}
