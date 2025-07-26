/**
 * Example Component Using GraphQL Issues Hooks
 *
 * Demonstrates how to use the new GraphQL-based issues management hooks
 * instead of the old Zustand store.
 */

'use client';

import React, { useState } from 'react';
import {
   useIssuesManagement,
   useIssueManagement,
   useFilteredIssues,
   useIssueSearch,
   useIssuesByStatus,
} from '@/libs/client/hooks/use-issues-graphql';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

/**
 * Main Issues Management Example
 */
export function IssuesManagementExample() {
   const { issues, loading, error, addIssue, updateIssue, deleteIssue, fromCache } =
      useIssuesManagement();

   const [newIssueTitle, setNewIssueTitle] = useState('');

   const handleAddIssue = async () => {
      if (!newIssueTitle.trim()) return;

      try {
         await addIssue({
            title: newIssueTitle,
            description: `New issue: ${newIssueTitle}`,
            identifier: `ISSUE-${Date.now()}`,
            status: { id: 'open', name: 'Open', color: '#3b82f6', icon: 'circle' },
            priority: { id: 'medium', name: 'Medium', color: '#f59e0b', icon: 'arrow-up' },
            labels: [],
            assignee: null,
            project: null,
            rank: String(Date.now()),
         });
         setNewIssueTitle('');
      } catch (error) {
         console.error('Failed to create issue:', error);
      }
   };

   const handleUpdateIssue = async (issueId: string, updates: any) => {
      try {
         await updateIssue(issueId, updates);
      } catch (error) {
         console.error('Failed to update issue:', error);
      }
   };

   const handleDeleteIssue = async (issueId: string) => {
      try {
         await deleteIssue(issueId);
      } catch (error) {
         console.error('Failed to delete issue:', error);
      }
   };

   if (loading && !fromCache) {
      return (
         <div className="flex items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin" />
            <span className="ml-2">Loading issues...</span>
         </div>
      );
   }

   if (error) {
      return <div className="text-red-600 p-4">Error loading issues: {error.message}</div>;
   }

   return (
      <Card>
         <CardHeader>
            <CardTitle className="flex items-center gap-2">
               Issues Management
               {fromCache && <Badge variant="secondary">Cached</Badge>}
            </CardTitle>
         </CardHeader>
         <CardContent>
            {/* Add New Issue */}
            <div className="flex gap-2 mb-6">
               <Input
                  placeholder="Enter issue title..."
                  value={newIssueTitle}
                  onChange={(e) => setNewIssueTitle(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddIssue()}
               />
               <Button onClick={handleAddIssue} disabled={!newIssueTitle.trim()}>
                  Add Issue
               </Button>
            </div>

            {/* Issues List */}
            <div className="space-y-2">
               {issues.map((issue) => (
                  <IssueCard
                     key={issue.id}
                     issue={issue}
                     onUpdate={(updates) => handleUpdateIssue(issue.id, updates)}
                     onDelete={() => handleDeleteIssue(issue.id)}
                  />
               ))}
            </div>

            {issues.length === 0 && (
               <p className="text-gray-500 text-center py-8">No issues found. Create one above!</p>
            )}
         </CardContent>
      </Card>
   );
}

/**
 * Single Issue Management Example
 */
function IssueCard({
   issue,
   onUpdate,
   onDelete,
}: {
   issue: any;
   onUpdate: (updates: any) => void;
   onDelete: () => void;
}) {
   const [isEditing, setIsEditing] = useState(false);
   const [title, setTitle] = useState(issue.title);

   const handleSave = () => {
      if (title !== issue.title) {
         onUpdate({ title });
      }
      setIsEditing(false);
   };

   const handleCancel = () => {
      setTitle(issue.title);
      setIsEditing(false);
   };

   return (
      <div className="flex items-center gap-2 p-3 border rounded-lg">
         <Badge variant="outline" style={{ backgroundColor: issue.status.color, color: 'white' }}>
            {issue.status.name}
         </Badge>

         {isEditing ? (
            <>
               <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="flex-1"
                  onKeyPress={(e) => e.key === 'Enter' && handleSave()}
               />
               <Button size="sm" onClick={handleSave}>
                  Save
               </Button>
               <Button size="sm" variant="outline" onClick={handleCancel}>
                  Cancel
               </Button>
            </>
         ) : (
            <>
               <span className="flex-1">{issue.title}</span>
               <Badge variant="secondary">{issue.identifier}</Badge>
               <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
                  Edit
               </Button>
               <Button size="sm" variant="destructive" onClick={onDelete}>
                  Delete
               </Button>
            </>
         )}
      </div>
   );
}

/**
 * Filtered Issues Example
 */
export function FilteredIssuesExample() {
   const [filters, setFilters] = useState({
      status: ['open'],
      priority: [],
      assignee: [],
      labels: [],
      project: [],
   });

   const { issues, groupedIssues, loading, count } = useFilteredIssues(filters);

   const toggleStatusFilter = (statusId: string) => {
      setFilters((prev) => ({
         ...prev,
         status: prev.status.includes(statusId)
            ? prev.status.filter((s) => s !== statusId)
            : [...prev.status, statusId],
      }));
   };

   return (
      <Card>
         <CardHeader>
            <CardTitle>Filtered Issues ({count})</CardTitle>
         </CardHeader>
         <CardContent>
            {/* Filter Controls */}
            <div className="mb-4">
               <h4 className="font-medium mb-2">Status Filters:</h4>
               <div className="flex gap-2">
                  {['open', 'in-progress', 'closed'].map((status) => (
                     <Button
                        key={status}
                        size="sm"
                        variant={filters.status.includes(status) ? 'default' : 'outline'}
                        onClick={() => toggleStatusFilter(status)}
                     >
                        {status}
                     </Button>
                  ))}
               </div>
            </div>

            {/* Grouped Results */}
            {loading ? (
               <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Filtering issues...</span>
               </div>
            ) : (
               <div className="space-y-4">
                  {Object.entries(groupedIssues).map(([status, statusIssues]) => (
                     <div key={status}>
                        <h5 className="font-medium mb-2">
                           {status} ({statusIssues.length})
                        </h5>
                        <div className="space-y-1">
                           {statusIssues.map((issue: any) => (
                              <div key={issue.id} className="p-2 border rounded">
                                 {issue.title}
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </CardContent>
      </Card>
   );
}

/**
 * Issue Search Example
 */
export function IssueSearchExample() {
   const [query, setQuery] = useState('');
   const { results, loading, count, hasQuery } = useIssueSearch(query);

   return (
      <Card>
         <CardHeader>
            <CardTitle>Issue Search</CardTitle>
         </CardHeader>
         <CardContent>
            <Input
               placeholder="Search issues by title or identifier..."
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               className="mb-4"
            />

            {loading && hasQuery && (
               <div className="flex items-center gap-2 mb-4">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Searching...</span>
               </div>
            )}

            {hasQuery && !loading && (
               <p className="text-sm text-gray-600 mb-4">
                  Found {count} issue{count !== 1 ? 's' : ''} matching "{query}"
               </p>
            )}

            <div className="space-y-2">
               {results.map((issue) => (
                  <div key={issue.id} className="p-3 border rounded-lg">
                     <div className="flex items-center gap-2">
                        <Badge variant="outline">{issue.identifier}</Badge>
                        <span className="font-medium">{issue.title}</span>
                        <Badge style={{ backgroundColor: issue.status.color, color: 'white' }}>
                           {issue.status.name}
                        </Badge>
                     </div>
                     {issue.description && (
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                           {issue.description}
                        </p>
                     )}
                  </div>
               ))}
            </div>

            {hasQuery && !loading && count === 0 && (
               <p className="text-center text-gray-500 py-8">
                  No issues found matching your search.
               </p>
            )}
         </CardContent>
      </Card>
   );
}

/**
 * Issues by Status Example
 */
export function IssuesByStatusExample() {
   const [selectedStatus, setSelectedStatus] = useState<string>('open');
   const { issues, loading, count } = useIssuesByStatus(selectedStatus);

   const statuses = [
      { id: 'open', name: 'Open', color: '#3b82f6' },
      { id: 'in-progress', name: 'In Progress', color: '#f59e0b' },
      { id: 'closed', name: 'Closed', color: '#10b981' },
   ];

   return (
      <Card>
         <CardHeader>
            <CardTitle>Issues by Status</CardTitle>
         </CardHeader>
         <CardContent>
            {/* Status Tabs */}
            <div className="flex gap-1 mb-4">
               {statuses.map((status) => (
                  <Button
                     key={status.id}
                     size="sm"
                     variant={selectedStatus === status.id ? 'default' : 'outline'}
                     onClick={() => setSelectedStatus(status.id)}
                     style={
                        selectedStatus === status.id
                           ? {
                                backgroundColor: status.color,
                                borderColor: status.color,
                             }
                           : {}
                     }
                  >
                     {status.name}
                  </Button>
               ))}
            </div>

            {/* Issues List */}
            {loading ? (
               <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Loading {selectedStatus} issues...</span>
               </div>
            ) : (
               <>
                  <p className="text-sm text-gray-600 mb-4">
                     {count} issue{count !== 1 ? 's' : ''} with status "{selectedStatus}"
                  </p>

                  <div className="space-y-2">
                     {issues.map((issue: any) => (
                        <div key={issue.id} className="p-2 border rounded flex items-center gap-2">
                           <Badge variant="outline">{issue.identifier}</Badge>
                           <span className="flex-1">{issue.title}</span>
                           {issue.assignee && (
                              <Badge variant="secondary">{issue.assignee.name}</Badge>
                           )}
                        </div>
                     ))}
                  </div>

                  {count === 0 && (
                     <p className="text-center text-gray-500 py-8">
                        No issues with status "{selectedStatus}".
                     </p>
                  )}
               </>
            )}
         </CardContent>
      </Card>
   );
}

/**
 * Complete Example Page
 */
export function IssuesGraphQLExamplesPage() {
   return (
      <div className="p-6 space-y-6">
         <h1 className="text-3xl font-bold">GraphQL Issues Management Examples</h1>
         <p className="text-gray-600">
            Examples of using the new GraphQL-based issues hooks with Apollo Client caching.
         </p>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <IssuesManagementExample />
            <FilteredIssuesExample />
            <IssueSearchExample />
            <IssuesByStatusExample />
         </div>
      </div>
   );
}
