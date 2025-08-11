import React, { useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNotesData } from '../../hooks/useNotesData';

export function NotesOverview(): React.JSX.Element {
  const { files, categories, loading, error } = useNotesData();

  const notesData = useMemo(() => {
    if (!files.length) {
      return {
        allNotes: [],
        needsAttention: 0,
        totalCount: 0,
      };
    }

    const sortedNotes = [...files].sort(
      (a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime()
    );

    const needsAttention = files.filter((f) => f.category.type === 'uncategorized').length;

    return {
      allNotes: sortedNotes,
      needsAttention,
      totalCount: files.length,
    };
  }, [files]);

  const formatTimeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-muted-foreground">Loading your notes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-red-500">Error loading notes: {error}</div>
      </div>
    );
  }

  if (notesData.totalCount === 0) {
    return (
      <div className="flex items-center justify-center py-16">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mb-4 text-6xl opacity-40">📝</div>
            <CardTitle className="text-xl">Start Your Knowledge Base</CardTitle>
            <CardDescription>
              Create your first note or scan your codebase to discover existing documentation.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-3">
            <Button className="w-full">Create First Note</Button>
            <Button variant="outline" className="w-full">
              Scan Codebase
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Main Content - Notes List (8/12 columns) */}
      <div className="lg:col-span-8 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Your Notes</h1>
            <p className="text-muted-foreground mt-1">
              {notesData.totalCount} notes in your knowledge base
            </p>
          </div>
          <Button>New Note</Button>
        </div>

        <div className="space-y-3">
          {notesData.allNotes.map((note) => (
            <Card
              key={note.path}
              className="hover:shadow-sm transition-shadow cursor-pointer group"
            >
              <CardContent className="pt-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-foreground group-hover:text-blue-600 transition-colors truncate">
                        {note.title || note.name}
                      </h3>
                      {note.category.name && (
                        <Badge
                          variant={
                            note.category.type === 'uncategorized' ? 'destructive' : 'secondary'
                          }
                          className="shrink-0"
                        >
                          {note.category.name}
                        </Badge>
                      )}
                    </div>

                    {note.snippet && (
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {note.snippet}
                      </p>
                    )}

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>📁 {note.path}</span>
                      <span>•</span>
                      <span>{formatTimeAgo(note.lastModified)}</span>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Open
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Sidebar - Context & Actions (4/12 columns) */}
      <div className="lg:col-span-4 space-y-4">
        {/* Quick Stats */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Quick Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Total Notes</span>
              <span className="font-semibold">{notesData.totalCount}</span>
            </div>
            {notesData.needsAttention > 0 && (
              <div className="flex items-center justify-between text-orange-600">
                <span className="text-sm">Need Review</span>
                <Badge variant="outline" className="text-orange-600 border-orange-200">
                  {notesData.needsAttention}
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start">
              📝 Create Note
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              🔄 Scan Codebase
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              🔍 Search Notes
            </Button>
            {notesData.needsAttention > 0 && (
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-orange-600 hover:text-orange-700"
              >
                🎯 Review Uncategorized
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Categories Preview */}
        {categories.length > 0 && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.slice(0, 5).map((category) => (
                  <div key={category} className="flex items-center justify-between text-sm">
                    <span className="truncate">{category}</span>
                    <span className="text-xs text-muted-foreground">
                      {notesData.allNotes.filter((n) => n.category.name === category).length}
                    </span>
                  </div>
                ))}
                {categories.length > 5 && (
                  <Button variant="ghost" size="sm" className="w-full text-xs">
                    View all categories
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
