'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { IframeTerminal } from '@/features/terminal/components/IframeTerminal';

export default function IframeTerminalPage(): React.JSX.Element {
  const params = useParams();
  const terminalId = params?.terminalId as string;

  return (
    <div className="h-screen w-screen bg-black">
      <IframeTerminal
        terminalId={terminalId}
        showHeader={true}
        className="h-full w-full"
        theme="dark"
        onConnect={() => {
          console.log(`Iframe terminal ${terminalId} connected`);
        }}
        onDisconnect={() => {
          console.log(`Iframe terminal ${terminalId} disconnected`);
        }}
        onError={(error) => {
          console.error(`Iframe terminal ${terminalId} error:`, error);
        }}
      />
    </div>
  );
}
