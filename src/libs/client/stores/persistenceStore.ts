import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { useDataStore } from './dataStore';

interface PersistenceState {
   // Settings
   enablePersistence: boolean;
   autoSave: boolean;
   autoSaveInterval: number; // in seconds

   // Actions
   togglePersistence: () => void;
   toggleAutoSave: () => void;
   setAutoSaveInterval: (seconds: number) => void;

   // Data operations
   saveToLocalStorage: () => void;
   loadFromLocalStorage: () => void;
   clearLocalStorage: () => void;

   // Import/Export
   exportData: () => string;
   importData: (jsonData: string) => boolean;
   downloadBackup: () => void;
}

const STORAGE_KEY = 'task-master-ui-data';

export const usePersistenceStore = create<PersistenceState>()(
   persist(
      (set, get) => ({
         // Initial state
         enablePersistence: true,
         autoSave: true,
         autoSaveInterval: 30, // 30 seconds

         // Actions
         togglePersistence: () => {
            set((state) => ({ enablePersistence: !state.enablePersistence }));
            if (!get().enablePersistence) {
               get().clearLocalStorage();
            }
         },

         toggleAutoSave: () => {
            set((state) => ({ autoSave: !state.autoSave }));
         },

         setAutoSaveInterval: (seconds) => {
            set({ autoSaveInterval: seconds });
         },

         // Save current data store to localStorage
         saveToLocalStorage: () => {
            if (!get().enablePersistence) return;

            const dataStore = useDataStore.getState();
            const dataToSave = {
               users: dataStore.users,
               projects: dataStore.projects,
               labels: dataStore.labels,
               statuses: dataStore.statuses,
               priorities: dataStore.priorities,
               tasks: dataStore.tasks,
               savedAt: new Date().toISOString(),
            };

            try {
               localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
               console.log('Data saved to localStorage');
            } catch (error) {
               console.error('Failed to save data to localStorage:', error);
            }
         },

         // Load data from localStorage
         loadFromLocalStorage: () => {
            if (!get().enablePersistence) return;

            try {
               const savedData = localStorage.getItem(STORAGE_KEY);
               if (savedData) {
                  const parsedData = JSON.parse(savedData);

                  // Convert date strings back to Date objects
                  const processedData = {
                     ...parsedData,
                     users: parsedData.users.map((user: any) => ({
                        ...user,
                        createdAt: new Date(user.createdAt),
                        updatedAt: new Date(user.updatedAt),
                     })),
                     projects: parsedData.projects.map((project: any) => ({
                        ...project,
                        createdAt: new Date(project.createdAt),
                        updatedAt: new Date(project.updatedAt),
                     })),
                     labels: parsedData.labels.map((label: any) => ({
                        ...label,
                        createdAt: new Date(label.createdAt),
                        updatedAt: new Date(label.updatedAt),
                     })),
                     statuses: parsedData.statuses.map((status: any) => ({
                        ...status,
                        createdAt: new Date(status.createdAt),
                        updatedAt: new Date(status.updatedAt),
                     })),
                     priorities: parsedData.priorities.map((priority: any) => ({
                        ...priority,
                        createdAt: new Date(priority.createdAt),
                        updatedAt: new Date(priority.updatedAt),
                     })),
                     tasks: parsedData.tasks
                        ? parsedData.tasks.map((task: any) => ({
                             ...task,
                             createdAt: new Date(task.createdAt),
                             updatedAt: new Date(task.updatedAt),
                          }))
                        : [],
                  };

                  // Update data store
                  useDataStore.setState({
                     users: processedData.users,
                     projects: processedData.projects,
                     labels: processedData.labels,
                     statuses: processedData.statuses,
                     priorities: processedData.priorities,
                     tasks: processedData.tasks,
                     isInitialized: true,
                  });

                  console.log('Data loaded from localStorage');
               }
            } catch (error) {
               console.error('Failed to load data from localStorage:', error);
            }
         },

         // Clear localStorage
         clearLocalStorage: () => {
            try {
               localStorage.removeItem(STORAGE_KEY);
               console.log('localStorage cleared');
            } catch (error) {
               console.error('Failed to clear localStorage:', error);
            }
         },

         // Export data as JSON string
         exportData: () => {
            const dataStore = useDataStore.getState();
            const dataToExport = {
               users: dataStore.users,
               projects: dataStore.projects,
               labels: dataStore.labels,
               statuses: dataStore.statuses,
               priorities: dataStore.priorities,
               tasks: dataStore.tasks,
               exportedAt: new Date().toISOString(),
               version: '1.0.0',
            };

            return JSON.stringify(dataToExport, null, 2);
         },

         // Import data from JSON string
         importData: (jsonData) => {
            try {
               const parsedData = JSON.parse(jsonData);

               // Validate the data structure
               if (!parsedData.users || !parsedData.tasks || !parsedData.statuses) {
                  throw new Error('Invalid data format');
               }

               // Process and load the data
               get().loadFromLocalStorage();
               return true;
            } catch (error) {
               console.error('Failed to import data:', error);
               return false;
            }
         },

         // Download data as JSON file
         downloadBackup: () => {
            const data = get().exportData();
            const blob = new Blob([data], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const filename = `task-master-backup-${timestamp}.json`;

            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
         },
      }),
      {
         name: 'persistence-settings',
         storage: createJSONStorage(() => localStorage),
         partialize: (state) => ({
            enablePersistence: state.enablePersistence,
            autoSave: state.autoSave,
            autoSaveInterval: state.autoSaveInterval,
         }),
      }
   )
);

// Auto-save functionality
if (typeof window !== 'undefined') {
   let autoSaveInterval: NodeJS.Timeout | null = null;

   // Subscribe to store changes
   usePersistenceStore.subscribe((state) => {
      // Clear existing interval
      if (autoSaveInterval) {
         clearInterval(autoSaveInterval);
         autoSaveInterval = null;
      }

      // Set up new interval if auto-save is enabled
      if (state.enablePersistence && state.autoSave) {
         autoSaveInterval = setInterval(() => {
            state.saveToLocalStorage();
         }, state.autoSaveInterval * 1000);
      }
   });

   // Save on page unload
   window.addEventListener('beforeunload', () => {
      const state = usePersistenceStore.getState();
      if (state.enablePersistence) {
         state.saveToLocalStorage();
      }
   });
}
