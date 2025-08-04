'use client';

import React, { useState } from 'react';
import { useFuzzySearch } from '@/hooks/useFuzzySearch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, RefreshCw, Database } from 'lucide-react';

export default function FuzzySearchDemoPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const {
    query,
    isSearching,
    results,
    setQuery,
    search,
    clearSearch,
    indexStats,
    rebuildIndex,
    syncIndex,
  } = useFuzzySearch({
    threshold: 0.3,
    maxResults: 10,
    debounceMs: 300,
    autoSearch: true,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    search(searchQuery);
  };

  const handleManualSearch = () => {
    search(searchQuery);
  };

  const handleRebuildIndex = async () => {
    try {
      await rebuildIndex();
      console.log('Index rebuilt successfully');
    } catch (error) {
      console.error('Failed to rebuild index:', error);
    }
  };

  const handleSyncIndex = async () => {
    try {
      await syncIndex();
      console.log('Index synced successfully');
    } catch (error) {
      console.error('Failed to sync index:', error);
    }
  };

  const totalResults = Object.values(results).reduce((sum, arr) => sum + arr.length, 0);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Fuzzy Search Demo</h1>
        <p className="text-muted-foreground">
          Test the fuzzy search functionality across tasks, tags, users, and more
        </p>
      </div>

      {/* Search Interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Interface
          </CardTitle>
          <CardDescription>Search across all data types with fuzzy matching</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              placeholder="Type to search tasks, tags, users, etc..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setQuery(e.target.value);
              }}
              className="flex-1"
            />
            <Button type="submit" disabled={isSearching}>
              {isSearching ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
            </Button>
          </form>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={clearSearch}>
              Clear
            </Button>
            <Button variant="outline" size="sm" onClick={handleManualSearch}>
              Manual Search
            </Button>
          </div>

          {query && (
            <div className="text-sm text-muted-foreground">
              Current query: &quot;{query}&quot; • {totalResults} results found
            </div>
          )}
        </CardContent>
      </Card>

      {/* Index Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Search Index Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center p-3 border rounded-lg">
              <div className="text-2xl font-bold">{indexStats.tasks}</div>
              <div className="text-sm text-muted-foreground">Tasks</div>
            </div>
            <div className="text-center p-3 border rounded-lg">
              <div className="text-2xl font-bold">{indexStats.tags}</div>
              <div className="text-sm text-muted-foreground">Tags</div>
            </div>
            <div className="text-center p-3 border rounded-lg">
              <div className="text-2xl font-bold">{indexStats.users}</div>
              <div className="text-sm text-muted-foreground">Users</div>
            </div>
            <div className="text-center p-3 border rounded-lg">
              <div className="text-2xl font-bold">{indexStats.labels}</div>
              <div className="text-sm text-muted-foreground">Labels</div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleRebuildIndex}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Rebuild Index
            </Button>
            <Button variant="outline" size="sm" onClick={handleSyncIndex}>
              <Database className="h-4 w-4 mr-2" />
              Sync Index
            </Button>
          </div>

          <div className="text-xs text-muted-foreground mt-2">
            Last updated:{' '}
            {indexStats.lastUpdate ? new Date(indexStats.lastUpdate).toLocaleString() : 'Never'}
          </div>
        </CardContent>
      </Card>

      {/* Search Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Tasks Results */}
        {results.tasks.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tasks ({results.tasks.length})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {results.tasks.map((result, index) => (
                <div key={index} className="p-2 border rounded-lg">
                  <div className="font-medium text-sm">{result.item.title}</div>
                  <div className="text-xs text-muted-foreground line-clamp-2">
                    {result.item.description}
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {result.item.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Score: {(result.score || 0).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Tags Results */}
        {results.tags.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tags ({results.tags.length})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {results.tags.map((result, index) => (
                <div key={index} className="p-2 border rounded-lg">
                  <div className="font-medium text-sm">{result.item.name}</div>
                  {result.item.description && (
                    <div className="text-xs text-muted-foreground">{result.item.description}</div>
                  )}
                  <div className="flex justify-between items-center mt-2">
                    <Badge style={{ backgroundColor: result.item.color }} className="text-xs">
                      {result.item.name}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Score: {(result.score || 0).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Users Results */}
        {results.users.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Users ({results.users.length})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {results.users.map((result, index) => (
                <div key={index} className="p-2 border rounded-lg">
                  <div className="font-medium text-sm">{result.item.name}</div>
                  <div className="text-xs text-muted-foreground">{result.item.email}</div>
                  <div className="flex justify-between items-center mt-2">
                    <Badge variant="outline" className="text-xs">
                      User
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Score: {(result.score || 0).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Other Results */}
        {(results.statuses.length > 0 ||
          results.priorities.length > 0 ||
          results.labels.length > 0) && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Other</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {results.statuses.map((result, index) => (
                <div key={`status-${index}`} className="p-2 border rounded-lg">
                  <div className="font-medium text-sm">{result.item.name}</div>
                  <Badge variant="secondary" className="text-xs">
                    Status
                  </Badge>
                </div>
              ))}
              {results.priorities.map((result, index) => (
                <div key={`priority-${index}`} className="p-2 border rounded-lg">
                  <div className="font-medium text-sm">{result.item.name}</div>
                  <Badge variant="secondary" className="text-xs">
                    Priority
                  </Badge>
                </div>
              ))}
              {results.labels.map((result, index) => (
                <div key={`label-${index}`} className="p-2 border rounded-lg">
                  <div className="font-medium text-sm">{result.item.name}</div>
                  <Badge variant="secondary" className="text-xs">
                    Label
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Empty State */}
      {query && totalResults === 0 && !isSearching && (
        <Card>
          <CardContent className="text-center py-8">
            <div className="text-muted-foreground">No results found for &quot;{query}&quot;</div>
            <Button variant="outline" className="mt-2" onClick={clearSearch}>
              Clear Search
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Initial State */}
      {!query && (
        <Card>
          <CardContent className="text-center py-8">
            <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <div className="text-muted-foreground">
              Start typing to search across tasks, tags, users, and more
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
