'use client';

import { useDataStore } from '@/libs/client/stores';
import { useEffect, useState } from 'react';

export default function TestIntegrationPage() {
   const [status, setStatus] = useState('Loading...');
   const [stateData, setStateData] = useState(null);

   const isInitialized = useDataStore((state) => state.isInitialized);
   const taskMasterState = useDataStore((state) => state.taskMasterState);
   const getCurrentTag = useDataStore((state) => state.getCurrentTag);

   useEffect(() => {
      const runTest = async () => {
         try {
            // Step 1: Test direct API
            setStatus('Testing API endpoints...');
            const apiRes = await fetch('/api/taskmaster/state');
            const apiData = await apiRes.json();

            if (!apiData || apiData.error) {
               setStatus('❌ API test failed');
               return;
            }

            setStatus('✅ API working, testing store...');

            // Step 2: Force initialize store
            const store = useDataStore.getState();
            if (!store.isInitialized) {
               setStatus('🔄 Initializing store...');
               await store.initialize();
            }

            // Step 3: Check if state is available
            const finalState = useDataStore.getState();
            if (finalState.taskMasterState) {
               setStatus('✅ Integration working!');
               setStateData(finalState.taskMasterState);
            } else {
               setStatus('❌ Store initialized but no state data');
            }
         } catch (error) {
            setStatus(`❌ Error: ${error.message}`);
         }
      };

      runTest();
   }, []);

   return (
      <div className="p-8 max-w-2xl mx-auto">
         <h1 className="text-2xl font-bold mb-4">TaskMaster State Integration Test</h1>

         <div className="space-y-4">
            <div className="p-4 border rounded">
               <div className="text-lg font-semibold mb-2">Status: {status}</div>
               <div className="text-sm text-gray-600">
                  Store Initialized: {String(isInitialized)} | Has State:{' '}
                  {String(!!taskMasterState)}
               </div>
            </div>

            {stateData && (
               <div className="p-4 border rounded bg-green-50">
                  <h3 className="font-semibold mb-2">✅ TaskMaster State Data:</h3>
                  <div className="space-y-1 text-sm">
                     <div>
                        <strong>Current Tag:</strong> {getCurrentTag()}
                     </div>
                     <div>
                        <strong>Last Switched:</strong> {stateData.lastSwitched}
                     </div>
                     <div>
                        <strong>Migration Notice:</strong> {String(stateData.migrationNoticeShown)}
                     </div>
                  </div>
                  <details className="mt-3">
                     <summary className="cursor-pointer text-sm text-gray-600">
                        View Raw Data
                     </summary>
                     <pre className="bg-white p-2 mt-2 rounded text-xs overflow-auto">
                        {JSON.stringify(stateData, null, 2)}
                     </pre>
                  </details>
               </div>
            )}
         </div>
      </div>
   );
}
