'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Plus, X, Minus, Square, Maximize2 } from 'lucide-react';
import { cn } from '@/libs/client/utils';

interface TerminalWindow {
  id: string;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  title: string;
}

export function MultiTerminalTray() {
  const [terminals, setTerminals] = useState<TerminalWindow[]>([]);
  const [activeTerminalId, setActiveTerminalId] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<string | null>(null);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState<string | null>(null);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const createTerminal = () => {
    const id = `terminal-${Date.now()}`;
    const terminalNumber = terminals.length + 1;
    const offset = terminals.filter((t) => !t.isMinimized).length * 25;

    // Smart positioning - cascade windows
    const baseX = window.innerWidth - 600;
    const baseY = 100;

    setTerminals([
      ...terminals,
      {
        id,
        isMinimized: false,
        isMaximized: false,
        position: {
          x: Math.max(50, baseX - offset),
          y: baseY + offset,
        },
        size: { width: 550, height: 400 },
        title: `Terminal ${terminalNumber}`,
      },
    ]);
    setActiveTerminalId(id);
  };

  const closeTerminal = (id: string) => {
    setTerminals(terminals.filter((t) => t.id !== id));
    if (activeTerminalId === id) {
      const remaining = terminals.filter((t) => t.id !== id);
      setActiveTerminalId(remaining.length > 0 ? remaining[remaining.length - 1].id : null);
    }
  };

  const toggleMinimize = (id: string) => {
    setTerminals(
      terminals.map((t) =>
        t.id === id ? { ...t, isMinimized: !t.isMinimized, isMaximized: false } : t
      )
    );

    const terminal = terminals.find((t) => t.id === id);
    if (terminal?.isMinimized) {
      // If minimizing, activate next visible terminal
      const nextVisible = terminals.find((t) => t.id !== id && !t.isMinimized);
      if (nextVisible) setActiveTerminalId(nextVisible.id);
    } else {
      // If restoring, make it active
      setActiveTerminalId(id);
    }
  };

  const toggleMaximize = (id: string) => {
    setTerminals(
      terminals.map((t) =>
        t.id === id ? { ...t, isMaximized: !t.isMaximized, isMinimized: false } : t
      )
    );
    setActiveTerminalId(id);
  };

  const bringToFront = (id: string) => {
    setActiveTerminalId(id);
    // Also restore if minimized
    setTerminals(terminals.map((t) => (t.id === id ? { ...t, isMinimized: false } : t)));
  };

  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    if ((e.target as HTMLElement).closest('.terminal-controls')) return;
    if ((e.target as HTMLElement).closest('.resize-handle')) return;

    setIsDragging(id);
    const terminal = terminals.find((t) => t.id === id);
    if (terminal) {
      setDragStart({
        x: e.clientX - terminal.position.x,
        y: e.clientY - terminal.position.y,
      });
    }
    setActiveTerminalId(id);
  };

  const handleResizeStart = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setIsResizing(id);
    const terminal = terminals.find((t) => t.id === id);
    if (terminal) {
      setResizeStart({
        x: e.clientX,
        y: e.clientY,
        width: terminal.size.width,
        height: terminal.size.height,
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const terminal = terminals.find((t) => t.id === isDragging);
        if (terminal && !terminal.isMaximized) {
          setTerminals(
            terminals.map((t) =>
              t.id === isDragging
                ? {
                    ...t,
                    position: {
                      x: Math.max(0, Math.min(window.innerWidth - 200, e.clientX - dragStart.x)),
                      y: Math.max(0, Math.min(window.innerHeight - 100, e.clientY - dragStart.y)),
                    },
                  }
                : t
            )
          );
        }
      }

      if (isResizing) {
        const terminal = terminals.find((t) => t.id === isResizing);
        if (terminal && !terminal.isMaximized) {
          const deltaX = e.clientX - resizeStart.x;
          const deltaY = e.clientY - resizeStart.y;

          setTerminals(
            terminals.map((t) =>
              t.id === isResizing
                ? {
                    ...t,
                    size: {
                      width: Math.max(
                        300,
                        Math.min(window.innerWidth - 100, resizeStart.width + deltaX)
                      ),
                      height: Math.max(
                        200,
                        Math.min(window.innerHeight - 100, resizeStart.height + deltaY)
                      ),
                    },
                  }
                : t
            )
          );
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(null);
      setIsResizing(null);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragStart, resizeStart, terminals]);

  // Calculate z-index for proper layering
  const getZIndex = (terminal: TerminalWindow, index: number) => {
    if (terminal.isMaximized) return 9999;
    if (activeTerminalId === terminal.id) return 1000 + terminals.length;
    return 1000 + index;
  };

  return (
    <>
      {/* Terminal Windows */}
      {terminals.map((terminal, index) => (
        <div
          key={terminal.id}
          className={cn(
            'fixed bg-black rounded-lg shadow-2xl overflow-hidden transition-opacity duration-200',
            terminal.isMinimized && 'hidden',
            terminal.isMaximized && 'rounded-none',
            activeTerminalId === terminal.id ? 'opacity-100' : 'opacity-95',
            isDragging === terminal.id && 'transition-none',
            isResizing === terminal.id && 'transition-none'
          )}
          style={
            terminal.isMaximized
              ? {
                  inset: 0,
                  zIndex: getZIndex(terminal, index),
                }
              : {
                  left: `${terminal.position.x}px`,
                  top: `${terminal.position.y}px`,
                  width: `${terminal.size.width}px`,
                  height: `${terminal.size.height}px`,
                  zIndex: getZIndex(terminal, index),
                }
          }
          onMouseDown={() => !terminal.isMaximized && setActiveTerminalId(terminal.id)}
        >
          {/* Terminal Header - macOS style */}
          <div
            className={cn(
              'bg-gray-800 h-8 flex items-center justify-between select-none',
              'border-b border-gray-700',
              !terminal.isMaximized && 'cursor-move'
            )}
            onMouseDown={(e) => handleMouseDown(e, terminal.id)}
          >
            {/* Window Controls - macOS style */}
            <div className="flex items-center gap-2 px-3 terminal-controls">
              <button
                onClick={() => closeTerminal(terminal.id)}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                title="Close"
              />
              <button
                onClick={() => toggleMinimize(terminal.id)}
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
                title="Minimize"
              />
              <button
                onClick={() => toggleMaximize(terminal.id)}
                className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
                title={terminal.isMaximized ? 'Restore' : 'Maximize'}
              />
            </div>

            {/* Title */}
            <span className="text-gray-300 text-xs font-medium absolute left-1/2 transform -translate-x-1/2">
              {terminal.title}
            </span>

            {/* Empty space for balance */}
            <div className="w-20" />
          </div>

          {/* Terminal iframe */}
          <iframe
            src="/simple-terminal"
            className="w-full h-[calc(100%-32px)] border-0 bg-black"
            title={terminal.title}
          />

          {/* Resize handle */}
          {!terminal.isMaximized && (
            <div
              className="resize-handle absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
              onMouseDown={(e) => handleResizeStart(e, terminal.id)}
            >
              <svg className="w-4 h-4 text-gray-600" viewBox="0 0 16 16">
                <path
                  fill="currentColor"
                  d="M14 14L14 8M14 14L8 14M14 14L4 4"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                />
              </svg>
            </div>
          )}
        </div>
      ))}

      {/* Minimal Dock - Bottom Center */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[10000]">
        <div className="flex items-center gap-1 bg-gray-900/90 backdrop-blur-md rounded-full px-2 py-1.5 shadow-2xl border border-gray-700/50">
          {/* New Terminal Button */}
          <button
            onClick={createTerminal}
            className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            title="New Terminal (⌘T)"
          >
            <Plus className="h-5 w-5" />
          </button>

          {/* Separator */}
          {terminals.length > 0 && <div className="w-px h-8 bg-gray-700 mx-1" />}

          {/* Terminal Icons */}
          <div className="flex items-center gap-1">
            {terminals.map((terminal, index) => (
              <button
                key={terminal.id}
                onClick={() => bringToFront(terminal.id)}
                className={cn(
                  'relative group transition-all',
                  terminal.isMinimized && 'opacity-60'
                )}
              >
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-md',
                    'hover:scale-110',
                    activeTerminalId === terminal.id && !terminal.isMinimized
                      ? 'bg-gradient-to-br from-green-500 to-green-600 text-white'
                      : terminal.isMinimized
                        ? 'bg-gray-700 text-gray-400'
                        : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
                  )}
                >
                  <Terminal className="h-5 w-5" />
                </div>

                {/* Terminal number badge */}
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gray-800 text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-gray-600">
                  {index + 1}
                </span>

                {/* Active indicator */}
                {activeTerminalId === terminal.id && !terminal.isMinimized && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full" />
                )}

                {/* Tooltip */}
                <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {terminal.title}
                  {terminal.isMinimized && ' (Minimized)'}
                  {terminal.isMaximized && ' (Maximized)'}
                </div>

                {/* Close button on hover */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeTerminal(terminal.id);
                  }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-2.5 w-2.5 text-white" />
                </button>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
