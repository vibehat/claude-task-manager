import React, { useMemo, useState, useEffect } from 'react';
import { useNotesData } from '../../hooks/useNotesData';
import { NoteTabs } from './NoteTabs';
import { BrowseTab } from './BrowseTab';
import { NotesOverviewTab } from './NotesOverviewTab';
import { CreateNoteTab } from './CreateNoteTab';
import { TemplatesTab } from './TemplatesTab';
import { SettingsTab } from './SettingsTab';
import { NoteSidePanel } from './NoteSidePanel';
import { useNotesSidePanelStore } from '../../stores/notesSidePanelStore';
import type { CreateNoteState } from '../CreateNote/CreateNote';

interface NoteBrowserProps {
  defaultTab?: 'Notes' | 'Browse' | 'Create' | 'Templates' | 'Settings';
}

export function NoteBrowser({ defaultTab = 'Browse' }: NoteBrowserProps): React.JSX.Element {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All');
  const { files, categories, loading, error } = useNotesData({ category, query });
  const { openPanel } = useNotesSidePanelStore();

  // Use the provided default tab
  const [activeTab, setActiveTab] = useState<
    'Notes' | 'Browse' | 'Create' | 'Templates' | 'Settings'
  >(defaultTab);

  const allCategories = useMemo(() => ['All', ...categories], [categories]);

  async function openDoc(path: string) {
    openPanel(path);
  }

  // Wireframe-inspired source/location values
  const sources = ['All Sources', 'docs', 'src', 'scripts', 'root'];
  const locations = ['All Locations', '/docs', '/src', '/scripts', '/'];
  const [filters, setFilters] = useState({
    source: 'All Sources',
    category: 'All',
    location: 'All Locations',
  });

  const grouped = useMemo(() => {
    const groups: Record<string, typeof files> = {
      'Documentation': [],
      'Implementation Notes': [],
      'Configuration': [],
      'Uncategorized': [],
    };
    for (const f of files) {
      const name =
        f.category.name ??
        (f.category.type === 'uncategorized' ? 'Uncategorized' : 'Uncategorized');
      const key = ['Documentation', 'Implementation Notes', 'Configuration'].includes(String(name))
        ? String(name)
        : 'Uncategorized';
      // simple source filter
      if (filters.source !== 'All Sources') {
        const srcOk = f.path.startsWith(filters.source === 'root' ? '' : filters.source + '/');
        if (!srcOk) continue;
      }
      if (filters.location !== 'All Locations') {
        if (!('/' + f.path).startsWith(filters.location)) continue;
      }
      if (filters.category !== 'All' && key !== filters.category) continue;
      groups[key].push(f);
    }
    return groups;
  }, [files, filters]);

  const handleScanCodebase = () => {
    // Trigger a refresh of the notes data
    window.location.reload();
  };

  const handleManageCategories = () => {
    // Navigate to categories management (placeholder)
    setActiveTab('Settings');
  };

  const handleNewNote = () => {
    // Navigate to note creation (placeholder)
    setActiveTab('Create');
  };

  return (
    <div className="space-y-3" data-color-mode="dark">
      <NoteTabs active={activeTab} onChange={setActiveTab} />

      {activeTab === 'Browse' && (
        <BrowseTab
          query={query}
          onQuery={setQuery}
          sources={sources}
          categories={allCategories}
          locations={locations}
          filters={filters}
          onFiltersChange={(v) => {
            setFilters(v);
            setCategory(v.category);
          }}
          grouped={grouped}
          loading={loading}
          error={error}
          files={files}
          onOpenDoc={openDoc}
          onScanCodebase={handleScanCodebase}
          onNewNote={handleNewNote}
          onManageCategories={handleManageCategories}
        />
      )}

      {activeTab === 'Create' && (
        <CreateNoteTab
          onSave={(note: CreateNoteState) => {
            console.log('Saving draft:', note);
            // TODO: Implement save functionality
          }}
          onPublish={(note: CreateNoteState) => {
            console.log('Publishing note:', note);
            // TODO: Implement publish functionality
            setActiveTab('Browse'); // Navigate back to browse after publish
          }}
          onCancel={() => {
            setActiveTab('Browse'); // Navigate back to browse
          }}
        />
      )}

      {activeTab === 'Templates' && <TemplatesTab />}

      {activeTab === 'Settings' && <SettingsTab />}

      {activeTab === 'Notes' && <NotesOverviewTab />}

      {/* New sidebar panel */}
      <NoteSidePanel />
    </div>
  );
}
