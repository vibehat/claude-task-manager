import { useEffect, useState } from 'react';
import { useDataStore } from '../stores';
// TODO: useAllUsers and useUserDetail are not implemented yet

export function useUsers() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  // const users = useAllUsers(); // TODO: Not implemented yet
  const users: any[] = []; // Temporary empty array
  const isInitialized = useDataStore((state) => state.isInitialized);
  const initialize = useDataStore((state) => state.initialize);

  useEffect(() => {
    if (!isInitialized) {
      initialize()
        .then(() => setLoading(false))
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [isInitialized]);

  return {
    data: users,
    loading,
    error,
  };
}

export function useUser(id: string | undefined) {
  // const user = useUserDetail(id || ''); // TODO: Not implemented yet
  const user = undefined; // Temporary

  return {
    data: id ? user : undefined,
    loading: false,
    error: undefined,
  };
}
