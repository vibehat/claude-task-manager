'use client';

import * as React from 'react';
import { useDataStore } from '../stores/dataStore';

interface IndieProject {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IndieProjectContextValue {
  currentProject: IndieProject | null;
  projects: IndieProject[];
  isLoading: boolean;
  error: string | null;
  setCurrentProject: (project: IndieProject | null) => void;
  addProject: (project: Omit<IndieProject, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProject: (
    id: string,
    updates: Partial<Omit<IndieProject, 'id' | 'createdAt' | 'updatedAt'>>
  ) => void;
  deleteProject: (id: string) => void;
  refreshProjects: () => Promise<void>;
}

const IndieProjectContext = React.createContext<IndieProjectContextValue | null>(null);

interface IndieProjectProviderProps {
  children: React.ReactNode;
}

export function IndieProjectProvider({ children }: IndieProjectProviderProps) {
  const [currentProject, setCurrentProject] = React.useState<IndieProject | null>(null);
  const [projects, setProjects] = React.useState<IndieProject[]>([]);
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
    (projectData: Omit<IndieProject, 'id' | 'createdAt' | 'updatedAt'>) => {
      const newProject: IndieProject = {
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
    (id: string, updates: Partial<Omit<IndieProject, 'id' | 'createdAt' | 'updatedAt'>>) => {
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

  const value: IndieProjectContextValue = {
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

  return <IndieProjectContext.Provider value={value}>{children}</IndieProjectContext.Provider>;
}

export function useIndieProject(): IndieProjectContextValue {
  const context = React.useContext(IndieProjectContext);
  if (!context) {
    throw new Error('useIndieProject must be used within an IndieProjectProvider');
  }
  return context;
}

export type { IndieProject, IndieProjectContextValue };
