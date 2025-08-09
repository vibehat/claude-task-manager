export interface NoteFileSummary {
  path: string;
  name: string;
  directory: string;
  size: number;
  lastModified: string;
  title?: string;
  snippet?: string;
  tags?: string[];
  category: {
    type: 'auto' | 'manual' | 'uncategorized';
    name?: string;
  };
}

export interface NotesListResponse {
  files: NoteFileSummary[];
  categories: string[];
}

export interface NoteContentResponse {
  path: string;
  size: number;
  lastModified: string;
  content: string;
}

export interface NotesCategoriesConfig {
  assignments: Record<string, string>;
  tags: Record<string, string[]>;
  categories: string[];
}
