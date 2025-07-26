/**
 * Issues Mutation Helpers
 *
 * Handles creating, updating, and deleting issues with optimistic updates
 */

import { gql } from '@apollo/client';
import { useCreateIssue, useUpdateIssue, useDeleteIssue } from '../../graphql-client';
import type { Issue, LabelInterface, Priority, Project, Status, User } from './types';

/**
 * Hook for managing issue mutations with optimistic updates
 */
export function useIssueMutations() {
   const [createIssueMutation] = useCreateIssue();
   const [updateIssueMutation] = useUpdateIssue();
   const [deleteIssueMutation] = useDeleteIssue();

   const addIssue = async (issueData: Partial<Issue>) => {
      try {
         const result = await createIssueMutation({
            variables: { input: issueData },
            update: (cache, { data }) => {
               if (data?.createIssue) {
                  // Optimistically update the cache by modifying the existing query
                  cache.modify({
                     fields: {
                        issues(existingIssues = []) {
                           const newIssueRef = cache.writeFragment({
                              data: data.createIssue,
                              fragment: gql`
                                 fragment NewIssue on Issue {
                                    id
                                    identifier
                                    title
                                    description
                                    status {
                                       id
                                       name
                                       color
                                       icon
                                    }
                                    priority {
                                       id
                                       name
                                       color
                                       icon
                                    }
                                    assignee {
                                       id
                                       name
                                       email
                                       avatarUrl
                                    }
                                    labels {
                                       id
                                       name
                                       color
                                    }
                                    project {
                                       id
                                       name
                                       color
                                    }
                                 }
                              `,
                           });
                           return [...existingIssues, newIssueRef];
                        },
                     },
                  });
               }
            },
         });
         return result.data?.createIssue;
      } catch (error) {
         console.error('Error creating issue:', error);
         throw error;
      }
   };

   const updateIssue = async (id: string, updates: Partial<Issue>, currentIssue?: Issue) => {
      try {
         const result = await updateIssueMutation({
            variables: { id, input: updates },
            optimisticResponse: currentIssue
               ? {
                    updateIssue: {
                       __typename: 'Issue',
                       id,
                       ...currentIssue,
                       ...updates,
                    },
                 }
               : undefined,
            update: (cache, { data }) => {
               if (data?.updateIssue) {
                  // Update individual issue in cache
                  cache.writeFragment({
                     id: cache.identify(data.updateIssue),
                     fragment: gql`
                        fragment UpdatedIssue on Issue {
                           id
                           title
                           description
                           status {
                              id
                              name
                              color
                              icon
                           }
                           priority {
                              id
                              name
                              color
                              icon
                           }
                           assignee {
                              id
                              name
                              email
                              avatarUrl
                           }
                           labels {
                              id
                              name
                              color
                           }
                           project {
                              id
                              name
                              color
                           }
                        }
                     `,
                     data: data.updateIssue,
                  });
               }
            },
         });
         return result.data?.updateIssue;
      } catch (error) {
         console.error('Error updating issue:', error);
         throw error;
      }
   };

   const deleteIssue = async (id: string) => {
      try {
         await deleteIssueMutation({
            variables: { id },
            update: (cache) => {
               // Remove from cache
               cache.evict({ id: cache.identify({ __typename: 'Issue', id }) });
               cache.gc(); // Garbage collect
            },
         });
      } catch (error) {
         console.error('Error deleting issue:', error);
         throw error;
      }
   };

   return {
      addIssue,
      updateIssue,
      deleteIssue,
   };
}

/**
 * Hook for specific issue update operations
 */
export function useIssueUpdateHelpers(getIssueById: (id: string) => Issue | undefined) {
   const { updateIssue } = useIssueMutations();

   const updateIssueStatus = async (issueId: string, newStatus: Status) => {
      const currentIssue = getIssueById(issueId);
      return updateIssue(issueId, { status: newStatus }, currentIssue);
   };

   const updateIssuePriority = async (issueId: string, newPriority: Priority) => {
      const currentIssue = getIssueById(issueId);
      return updateIssue(issueId, { priority: newPriority }, currentIssue);
   };

   const updateIssueAssignee = async (issueId: string, newAssignee: User | null) => {
      const currentIssue = getIssueById(issueId);
      return updateIssue(issueId, { assignee: newAssignee }, currentIssue);
   };

   const addIssueLabel = async (issueId: string, label: LabelInterface) => {
      const issue = getIssueById(issueId);
      if (issue) {
         const updatedLabels = [...issue.labels, label];
         return updateIssue(issueId, { labels: updatedLabels }, issue);
      }
   };

   const removeIssueLabel = async (issueId: string, labelId: string) => {
      const issue = getIssueById(issueId);
      if (issue) {
         const updatedLabels = issue.labels.filter((label: LabelInterface) => label.id !== labelId);
         return updateIssue(issueId, { labels: updatedLabels }, issue);
      }
   };

   const updateIssueProject = async (issueId: string, newProject: Project | undefined) => {
      const currentIssue = getIssueById(issueId);
      return updateIssue(issueId, { project: newProject }, currentIssue);
   };

   return {
      updateIssueStatus,
      updateIssuePriority,
      updateIssueAssignee,
      addIssueLabel,
      removeIssueLabel,
      updateIssueProject,
   };
}

/**
 * Hook for single issue mutations
 */
export function useSingleIssueMutations(issueId: string, currentIssue?: Issue) {
   const { updateIssue, deleteIssue } = useIssueMutations();

   const updateCurrentIssue = async (updates: Partial<Issue>) => {
      if (!currentIssue) return;
      return updateIssue(issueId, updates, currentIssue);
   };

   const deleteCurrentIssue = async () => {
      return deleteIssue(issueId);
   };

   return {
      updateIssue: updateCurrentIssue,
      deleteIssue: deleteCurrentIssue,
   };
}
