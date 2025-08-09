'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import dynamic from 'next/dynamic';
import { X, Edit, Save, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAgentsSidePanelStore } from '../../stores/agentsSidePanelStore';
import { fetchAgentContent, saveAgentContent, createAgent } from '../../services/agentClient';

const MDEditor = dynamic(() => import('@uiw/react-md-editor').then((m) => m.default), {
  ssr: false,
});

export function AgentSidePanel(): React.JSX.Element {
  const { isOpen, agentPath, agentContent, panelWidth, closePanel, setAgentContent } =
    useAgentsSidePanelStore();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState('');
  const [isNewAgent, setIsNewAgent] = useState(false);

  // Load agent content when panel opens
  useEffect(() => {
    if (isOpen && agentPath) {
      // Check if this is a new agent (by checking if it has new-agent prefix)
      if (agentPath.startsWith('new-agent-') && !agentContent) {
        setIsNewAgent(true);
        setIsEditing(true);
        const defaultContent = `---
name: New Agent
description: A helpful AI assistant for specific tasks
model: claude-3-5-sonnet-20241022
role: system
temperature: 0.7
tools: []
memory:
  scope: project
  paths: []
tags: []
visibility: team
version: 1
---

# New Agent

## Purpose
Describe what this agent is designed to help with.

## Guidelines
- Be helpful and accurate
- Follow best practices
- Ask clarifying questions when needed

## Examples
Provide examples of how to interact with this agent.
`;
        setAgentContent(defaultContent);
        setEditContent(defaultContent);
      } else if (!agentContent) {
        loadAgentContent();
      }
    }
  }, [isOpen, agentPath, agentContent]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === 'Escape') {
        closePanel();
      }

      if ((event.metaKey || event.ctrlKey) && event.key === 's') {
        event.preventDefault();
        if (isEditing) {
          handleSave();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isEditing, closePanel]);

  const loadAgentContent = async () => {
    if (!agentPath) return;

    setLoading(true);
    setError(null);

    try {
      const result = await fetchAgentContent(agentPath);
      setAgentContent(result.content);
      setIsNewAgent(false);
    } catch (err) {
      setError('Failed to load agent content');
      console.error('Error loading agent content:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditContent(agentContent);
  };

  const handleSave = async () => {
    if (!agentPath) return;

    setLoading(true);
    setError(null);

    try {
      if (isNewAgent) {
        // Create new agent
        await createAgent(agentPath, editContent);
        setIsNewAgent(false);
      } else {
        // Update existing agent
        await saveAgentContent(agentPath, editContent);
      }

      setAgentContent(editContent);
      setIsEditing(false);
    } catch (err) {
      setError(isNewAgent ? 'Failed to create agent' : 'Failed to save agent');
      console.error('Error saving agent:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (isNewAgent) {
      closePanel();
    } else {
      setIsEditing(false);
      setEditContent('');
    }
  };

  const getFileName = (path: string): string => {
    return path.split('/').pop() || path;
  };

  // Frontmatter parsing removed for simplified full markdown view

  if (!isOpen || !agentPath) {
    return <></>;
  }

  const fileName = getFileName(agentPath);
  // Parse frontmatter if needed in the future
  // const agentInfo = parseAgentInfo(agentContent);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: panelWidth }}
        animate={{ x: 0 }}
        exit={{ x: panelWidth }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className={`fixed top-0 h-full bg-background shadow-lg z-50 overflow-hidden right-0 border-l`}
        style={{ width: panelWidth }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium truncate">{fileName}</span>
            {isNewAgent && (
              <Badge variant="secondary" className="text-xs">
                New
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-1">
            {!isEditing && !isNewAgent && (
              <Button variant="ghost" size="sm" onClick={handleEdit}>
                <Edit className="h-4 w-4" />
              </Button>
            )}
            {isEditing && (
              <>
                <Button variant="ghost" size="sm" onClick={handleSave} disabled={loading}>
                  <Save className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={handleCancel}>
                  <X className="h-4 w-4" />
                </Button>
              </>
            )}
            <Button variant="ghost" size="sm" onClick={closePanel}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Single full markdown view */}
        <div className="p-6 h-full flex flex-col">
          <div className="flex-1 overflow-y-auto">
            {loading ? (
              <div className="flex items-center justify-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
              </div>
            ) : error ? (
              <div className="text-center text-red-500 p-4">{error}</div>
            ) : isEditing ? (
              <div data-color-mode="dark">
                <MDEditor
                  value={editContent}
                  onChange={(val) => setEditContent(val || '')}
                  preview="edit"
                  visibleDragbar={false}
                  height={600}
                />
              </div>
            ) : (
              <div className="h-[600px] overflow-auto rounded border bg-muted/20">
                <pre className="m-0 p-4 overflow-auto text-sm leading-relaxed">
                  <code className="language-markdown whitespace-pre">{agentContent}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
