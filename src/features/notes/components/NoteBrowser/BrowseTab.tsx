import React from 'react';
import { Button } from '@/components/ui/button';
import type { NoteFileSummary } from '../../types/note.types';
import { FilterBar } from './FilterBar';
import { CategorySection } from './CategorySection';

interface BrowseTabProps {
  query: string;
  onQuery: (value: string) => void;
  sources: string[];
  categories: string[];
  locations: string[];
  filters: { source: string; category: string; location: string };
  onFiltersChange: (filters: { source: string; category: string; location: string }) => void;
  grouped: Record<string, NoteFileSummary[]>;
  loading: boolean;
  error: string | null;
  files: NoteFileSummary[];
  onOpenDoc: (path: string) => void;
  onScanCodebase: () => void;
  onNewNote: () => void;
  onManageCategories: () => void;
}

export function BrowseTab({
  query,
  onQuery,
  sources,
  categories,
  locations,
  filters,
  onFiltersChange,
  grouped,
  loading,
  error,
  files,
  onOpenDoc,
  onScanCodebase,
  onNewNote,
  onManageCategories,
}: BrowseTabProps): React.JSX.Element {
  return (
    <>
      <FilterBar
        query={query}
        onQuery={onQuery}
        sources={sources}
        categories={categories}
        locations={locations}
        value={filters}
        onChange={onFiltersChange}
        onScan={onScanCodebase}
      />

      {loading ? (
        <div className="flex items-center justify-center py-8">
          <div className="text-sm text-muted-foreground">Loading notes...</div>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center py-8">
          <div className="text-sm text-red-500">Error: {error}</div>
        </div>
      ) : files.length === 0 ? (
        <div className="flex items-center justify-center py-8">
          <div className="text-sm text-muted-foreground">
            No notes found. Try scanning the codebase.
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <CategorySection
            title="Documentation"
            autoDetected
            items={grouped['Documentation']}
            onOpen={onOpenDoc}
          />
          <CategorySection
            title="Implementation Notes"
            items={grouped['Implementation Notes']}
            onOpen={onOpenDoc}
          />
          <CategorySection
            title="Configuration"
            autoDetected
            items={grouped['Configuration']}
            onOpen={onOpenDoc}
          />
          <CategorySection
            title="Uncategorized"
            needsAttention
            items={grouped['Uncategorized']}
            onOpen={onOpenDoc}
          />

          {/* Action Bar */}
          <div className="flex items-center gap-2 pt-4 border-t">
            <Button variant="outline" size="sm" onClick={onNewNote}>
              + New Note
            </Button>
            <Button variant="outline" size="sm" onClick={onScanCodebase}>
              🔄 Scan Codebase
            </Button>
            <Button variant="outline" size="sm" onClick={onManageCategories}>
              ⚙️ Manage Categories
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
