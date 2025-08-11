'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Search, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { fetchAgentsList, searchAgents, deleteAgent } from '../../services/agentClient';
import { useAgentsSidePanelStore } from '../../stores/agentsSidePanelStore';
import type { AgentFileSummary } from '../../types/agent.types';
import { AgentSidePanel } from './AgentSidePanel';

export function AgentBrowser(): React.JSX.Element {
  const [agents, setAgents] = useState<AgentFileSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<AgentFileSummary[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  // no add-to-stack state; uninstall is immediate

  const { openPanel } = useAgentsSidePanelStore();

  const loadAgents = async () => {
    try {
      setLoading(true);
      const response = await fetchAgentsList();
      setAgents(response.items);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load agents');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    try {
      setIsSearching(true);
      const response = await searchAgents(query);
      const searchResultAgents = response.results.map((result) => {
        const agent = agents.find((a) => a.path === result.path);
        return (
          agent || {
            path: result.path,
            name: result.title,
            lastModified: new Date().toISOString(),
          }
        );
      });
      setSearchResults(searchResultAgents);
    } catch (err) {
      console.error('Search failed:', err);
    } finally {
      setIsSearching(false);
    }
  };

  const handleCreateAgent = () => {
    const timestamp = Date.now();
    const newPath = `new-agent-${timestamp}.md`;
    openPanel(newPath, '');
  };

  const handleOpenAgent = (agent: AgentFileSummary) => {
    openPanel(agent.path);
  };

  useEffect(() => {
    loadAgents();
  }, []);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      handleSearch(searchQuery);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, agents]);

  const displayedAgents = searchQuery.trim() ? searchResults : agents;

  const getCategoryFromPath = (path: string): string => {
    const clean = path.replace(/^\/*/, '').replace(/\.md$/i, '');
    const [category] = clean.split('/');
    return toTitleCase(category?.replace(/[-_]/g, ' ') || 'Agents');
  };

  const getTitleFromAgent = (agent: AgentFileSummary): string => {
    if (agent.name) return agent.name;
    const file = agent.path.split('/').pop() || agent.path;
    const clean = file.replace(/\.md$/i, '');
    return toTitleCase(clean.replace(/[-_]/g, ' '));
  };

  const toTitleCase = (str: string): string =>
    str
      .split(' ')
      .map((s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s))
      .join(' ');

  const handleUninstallAgent = async (agent: AgentFileSummary) => {
    if (!confirm(`Uninstall and delete agent \"${agent.name || agent.path}\"?`)) return;
    try {
      await deleteAgent(agent.path);
      await loadAgents();
    } catch (err) {
      console.error('Uninstall failed:', err);
      alert('Failed to uninstall agent');
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          <h1 className="text-xl font-semibold">Agents</h1>
        </div>
        <Button onClick={handleCreateAgent} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          New Agent
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search agents..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Content Grid Section (style-aligned) */}
      <section className="content-grid" id="contentGrid">
        {/* Loading indicator */}
        {(loading || isSearching) && (
          <div className="loading-indicator rounded-md border bg-muted/20 p-6 mb-2">
            <div className="flex items-center gap-3">
              <div className="loading-spinner animate-spin h-5 w-5 rounded-full border-2 border-primary border-t-transparent" />
              <div className="loading-text">
                <h3 className="font-medium">Loading Components...</h3>
                <p className="text-sm text-muted-foreground">
                  Optimizing data for better performance on mobile devices
                </p>
                <div className="loading-progress h-2 mt-3 rounded bg-muted">
                  <div className="progress-bar h-2 w-1/3 rounded bg-primary animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-8">
            <div className="text-red-500 mb-2">Error loading agents</div>
            <div className="text-sm text-muted-foreground">{error}</div>
            <Button variant="outline" onClick={loadAgents} className="mt-4">
              Try Again
            </Button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && displayedAgents.length === 0 && (
          <div className="text-center py-12">
            <Bot className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">
              {searchQuery.trim() ? 'No agents found' : 'No agents yet'}
            </h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery.trim()
                ? 'Try adjusting your search query'
                : 'Create your first agent to get started'}
            </p>
            {!searchQuery.trim() && (
              <Button onClick={handleCreateAgent}>
                <Plus className="h-4 w-4 mr-2" />
                Create Agent
              </Button>
            )}
          </div>
        )}

        {/* Unified Grid */}
        {!loading && !error && displayedAgents.length > 0 && (
          <div className="unified-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Add New Agent card */}
            <div
              className="template-card add-template-card add-component-card group relative rounded-lg border bg-background shadow-sm transition-colors cursor-pointer"
              onClick={handleCreateAgent}
            >
              <div className="card-inner p-4 bg-background shadow-sm rounded-lg">
                <div className="card-front">
                  <div className="framework-logo text-[#ff6b6b]">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                    </svg>
                  </div>
                  <h3 className="template-title mt-3 font-medium">Add New Agent</h3>
                  <p className="template-description text-sm text-muted-foreground">
                    Create a new AI specialist agent
                  </p>
                </div>
              </div>
            </div>

            {/* Agent Cards */}
            {displayedAgents.map((agent) => {
              const category = getCategoryFromPath(agent.path);
              const title = getTitleFromAgent(agent);
              // const isAdded = addedStackPath === agent.path; // Removed

              return (
                <div
                  key={agent.path}
                  className="template-card relative rounded-lg border bg-background shadow-sm p-4 hover:shadow-md transition-shadow"
                >
                  <div className="text-xs mb-2 text-muted-foreground">{category}</div>
                  <div className="text-[#ff6b6b] text-2xl">🤖</div>
                  <h3 className="mt-3 font-medium line-clamp-1">{title}</h3>

                  {agent.description && (
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {agent.description}
                    </p>
                  )}

                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {agent.model && (
                      <Badge variant="secondary" className="text-xs">
                        {agent.model}
                      </Badge>
                    )}
                    {agent.role && (
                      <Badge variant="outline" className="text-xs">
                        {agent.role}
                      </Badge>
                    )}
                    {agent.tags?.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenAgent(agent);
                        }}
                        className="text-sm"
                      >
                        📁 View Details
                      </Button>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUninstallAgent(agent);
                        }}
                        className="text-sm"
                        variant="destructive"
                      >
                        Uninstall
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Side Panel */}
      <AgentSidePanel />
    </div>
  );
}
