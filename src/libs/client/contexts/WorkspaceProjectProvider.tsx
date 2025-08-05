'use client';

import * as React from 'react';
import { useDataStore } from '../stores/dataStore';

interface WorkspaceProject {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface WorkspaceProjectContextValue {
  currentProject: WorkspaceProject | null;
  projects: WorkspaceProject[];
  isLoading: boolean;
  error: string | null;
  setCurrentProject: (project: WorkspaceProject | null) => void;
  addProject: (project: Omit<WorkspaceProject, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProject: (
    id: string,
    updates: Partial<Omit<WorkspaceProject, 'id' | 'createdAt' | 'updatedAt'>>
  ) => void;
  deleteProject: (id: string) => void;
  refreshProjects: () => Promise<void>;
}

const WorkspaceProjectContext = React.createContext<WorkspaceProjectContextValue | null>(null);

interface WorkspaceProjectProviderProps {
  children: React.ReactNode;
}

export function WorkspaceProjectProvider({ children }: WorkspaceProjectProviderProps) {
  const [currentProject, setCurrentProject] = React.useState<WorkspaceProject | null>(null);
  const [projects, setProjects] = React.useState<WorkspaceProject[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Initialize data store
  const initialize = useDataStore((state) => state.initialize);
  const isInitialized = useDataStore((state) => state.isInitialized);

  React.useEffect(() => {
    if (!isInitialized) {
      initialize();
    }
  }, [isInitialized]);

  const addProject = React.useCallback(
    (projectData: Omit<WorkspaceProject, 'id' | 'createdAt' | 'updatedAt'>) => {
      const newProject: WorkspaceProject = {
        ...projectData,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      setProjects((prev) => [...prev, newProject]);
      if (!currentProject) {
        setCurrentProject(newProject);
      }
    },
    [currentProject]
  );

  const updateProject = React.useCallback(
    (id: string, updates: Partial<Omit<WorkspaceProject, 'id' | 'createdAt' | 'updatedAt'>>) => {
      setProjects((prev) =>
        prev.map((project) =>
          project.id === id ? { ...project, ...updates, updatedAt: new Date() } : project
        )
      );

      if (currentProject?.id === id) {
        setCurrentProject((prev) => (prev ? { ...prev, ...updates, updatedAt: new Date() } : null));
      }
    },
    [currentProject]
  );

  const deleteProject = React.useCallback(
    (id: string) => {
      setProjects((prev) => prev.filter((project) => project.id !== id));
      if (currentProject?.id === id) {
        setCurrentProject(null);
      }
    },
    [currentProject]
  );

  const refreshProjects = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Implement actual API call when backend is ready
      // For now, we'll just simulate a refresh
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh projects');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value: WorkspaceProjectContextValue = {
    currentProject,
    projects,
    isLoading,
    error,
    setCurrentProject,
    addProject,
    updateProject,
    deleteProject,
    refreshProjects,
  };

  return (
    <WorkspaceProjectContext.Provider value={value}>{children}</WorkspaceProjectContext.Provider>
  );
}

export function useWorkspaceProject(): WorkspaceProjectContextValue {
  const context = React.useContext(WorkspaceProjectContext);
  if (!context) {
    throw new Error('useWorkspaceProject must be used within a WorkspaceProjectProvider');
  }
  return context;
}

export type { WorkspaceProject, WorkspaceProjectContextValue };
