/**
 * Issue Mutation Hooks
 *
 * Comprehensive mutation hooks for issues, users, projects, and labels
 */

import { useMutation, gql } from '@apollo/client';
import type { Issue, User, Project, LabelInterface, Priority, Status } from './types';

// Input type aliases (simplified for now)
type CreateIssueInput = Partial<Issue>;
type UpdateIssueInput = Partial<Issue>;
type CreateUserInput = Partial<User>;
type UpdateUserInput = Partial<User>;
type CreateProjectInput = Partial<Project>;
type UpdateProjectInput = Partial<Project>;
type CreateLabelInput = Partial<LabelInterface>;
type UpdateLabelInput = Partial<LabelInterface>;

// GraphQL Documents - defined locally until generated
const CreateIssueDocument = gql`
   mutation CreateIssue($input: CreateIssueInput!) {
      createIssue(input: $input) {
         id
         identifier
         title
         description
         status
         priority
         rank
         cycleId
         dueDate
         issueType
         taskId
         subtaskId
         subissues
         createdAt
         updatedAt
         assignee {
            id
            name
            email
            avatarUrl
            status
            role
         }
         project {
            id
            name
            description
            color
            identifier
         }
         labels {
            id
            name
            color
            description
         }
      }
   }
`;

const UpdateIssueDocument = gql`
   mutation UpdateIssue($id: ID!, $input: UpdateIssueInput!) {
      updateIssue(id: $id, input: $input) {
         id
         identifier
         title
         description
         status
         priority
         rank
         cycleId
         dueDate
         issueType
         taskId
         subtaskId
         subissues
         createdAt
         updatedAt
         assignee {
            id
            name
            email
            avatarUrl
            status
            role
         }
         project {
            id
            name
            description
            color
            identifier
         }
         labels {
            id
            name
            color
            description
         }
      }
   }
`;

const DeleteIssueDocument = gql`
   mutation DeleteIssue($id: ID!) {
      deleteIssue(id: $id)
   }
`;

const AssignIssueDocument = gql`
   mutation AssignIssue($issueId: ID!, $assigneeId: ID!) {
      assignIssue(issueId: $issueId, assigneeId: $assigneeId) {
         id
         identifier
         title
         description
         status
         priority
         rank
         cycleId
         dueDate
         issueType
         taskId
         subtaskId
         subissues
         createdAt
         updatedAt
         assignee {
            id
            name
            email
            avatarUrl
            status
            role
         }
         project {
            id
            name
            description
            color
            identifier
         }
         labels {
            id
            name
            color
            description
         }
      }
   }
`;

const UpdateIssueStatusDocument = gql`
   mutation UpdateIssueStatus($issueId: ID!, $status: String!) {
      updateIssueStatus(issueId: $issueId, status: $status) {
         id
         identifier
         title
         description
         status
         priority
         rank
         cycleId
         dueDate
         issueType
         taskId
         subtaskId
         subissues
         createdAt
         updatedAt
         assignee {
            id
            name
            email
            avatarUrl
            status
            role
         }
         project {
            id
            name
            description
            color
            identifier
         }
         labels {
            id
            name
            color
            description
         }
      }
   }
`;

const CreateUserDocument = gql`
   mutation CreateUser($input: CreateUserInput!) {
      createUser(input: $input) {
         id
         name
         email
         avatarUrl
         status
         role
         teamIds
         joinedDate
         createdAt
         updatedAt
      }
   }
`;

const UpdateUserDocument = gql`
   mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
      updateUser(id: $id, input: $input) {
         id
         name
         email
         avatarUrl
         status
         role
         teamIds
         joinedDate
         createdAt
         updatedAt
      }
   }
`;

const DeleteUserDocument = gql`
   mutation DeleteUser($id: ID!) {
      deleteUser(id: $id)
   }
`;

const CreateProjectDocument = gql`
   mutation CreateProject($input: CreateProjectInput!) {
      createProject(input: $input) {
         id
         name
         description
         color
         identifier
         createdAt
         updatedAt
      }
   }
`;

const UpdateProjectDocument = gql`
   mutation UpdateProject($id: ID!, $input: UpdateProjectInput!) {
      updateProject(id: $id, input: $input) {
         id
         name
         description
         color
         identifier
         createdAt
         updatedAt
      }
   }
`;

const DeleteProjectDocument = gql`
   mutation DeleteProject($id: ID!) {
      deleteProject(id: $id)
   }
`;

const CreateLabelDocument = gql`
   mutation CreateLabel($input: CreateLabelInput!) {
      createLabel(input: $input) {
         id
         name
         color
         description
         createdAt
         updatedAt
      }
   }
`;

const UpdateLabelDocument = gql`
   mutation UpdateLabel($id: ID!, $input: UpdateLabelInput!) {
      updateLabel(id: $id, input: $input) {
         id
         name
         color
         description
         createdAt
         updatedAt
      }
   }
`;

const DeleteLabelDocument = gql`
   mutation DeleteLabel($id: ID!) {
      deleteLabel(id: $id)
   }
`;

// Issue Mutation Hooks

export function useCreateIssue(options?: any) {
   return useMutation(CreateIssueDocument, {
      update: (cache, { data }) => {
         if (data?.createIssue) {
            // Optimistically update the cache by modifying the existing query
            cache.modify({
               fields: {
                  issues(existingIssues = { edges: [], nodes: [] }) {
                     const newIssueRef = cache.writeFragment({
                        data: data.createIssue,
                        fragment: gql`
                           fragment NewIssue on Issue {
                              id
                              identifier
                              title
                              description
                              status
                              priority
                              rank
                              cycleId
                              dueDate
                              issueType
                              taskId
                              subtaskId
                              subissues
                              createdAt
                              updatedAt
                              assignee {
                                 id
                                 name
                                 email
                                 avatarUrl
                                 status
                                 role
                              }
                              project {
                                 id
                                 name
                                 description
                                 color
                                 identifier
                              }
                              labels {
                                 id
                                 name
                                 color
                                 description
                              }
                           }
                        `,
                     });
                     return {
                        ...existingIssues,
                        nodes: [...existingIssues.nodes, newIssueRef],
                        edges: [...existingIssues.edges, { node: newIssueRef, cursor: '' }],
                     };
                  },
               },
            });
         }
      },
      ...options,
   });
}

export function useUpdateIssue(options?: any) {
   return useMutation(UpdateIssueDocument, {
      update: (cache, { data }) => {
         if (data?.updateIssue) {
            // Update individual issue in cache
            cache.writeFragment({
               id: cache.identify(data.updateIssue),
               fragment: gql`
                  fragment UpdatedIssue on Issue {
                     id
                     identifier
                     title
                     description
                     status
                     priority
                     rank
                     cycleId
                     dueDate
                     issueType
                     taskId
                     subtaskId
                     subissues
                     createdAt
                     updatedAt
                     assignee {
                        id
                        name
                        email
                        avatarUrl
                        status
                        role
                     }
                     project {
                        id
                        name
                        description
                        color
                        identifier
                     }
                     labels {
                        id
                        name
                        color
                        description
                     }
                  }
               `,
               data: data.updateIssue,
            });
         }
      },
      ...options,
   });
}

export function useDeleteIssue(options?: any) {
   return useMutation(DeleteIssueDocument, {
      update: (cache, { data }, { variables }) => {
         if (data?.deleteIssue && variables?.id) {
            // Remove from cache
            cache.evict({ id: cache.identify({ __typename: 'Issue', id: variables.id }) });
            cache.gc(); // Garbage collect
         }
      },
      ...options,
   });
}

export function useAssignIssue(options?: any) {
   return useMutation(AssignIssueDocument, options);
}

export function useUpdateIssueStatus(options?: any) {
   return useMutation(UpdateIssueStatusDocument, options);
}

// User Mutation Hooks

export function useCreateUser(options?: any) {
   return useMutation(CreateUserDocument, options);
}

export function useUpdateUser(options?: any) {
   return useMutation(UpdateUserDocument, options);
}

export function useDeleteUser(options?: any) {
   return useMutation(DeleteUserDocument, options);
}

// Project Mutation Hooks

export function useCreateProject(options?: any) {
   return useMutation(CreateProjectDocument, options);
}

export function useUpdateProject(options?: any) {
   return useMutation(UpdateProjectDocument, options);
}

export function useDeleteProject(options?: any) {
   return useMutation(DeleteProjectDocument, options);
}

// Label Mutation Hooks

export function useCreateLabel(options?: any) {
   return useMutation(CreateLabelDocument, options);
}

export function useUpdateLabel(options?: any) {
   return useMutation(UpdateLabelDocument, options);
}

export function useDeleteLabel(options?: any) {
   return useMutation(DeleteLabelDocument, options);
}

// Legacy hooks for backward compatibility

/**
 * Hook for managing issue mutations with optimistic updates
 * @deprecated Use individual mutation hooks instead
 */
export function useIssueMutations() {
   const [createIssueMutation] = useCreateIssue();
   const [updateIssueMutation] = useUpdateIssue();
   const [deleteIssueMutation] = useDeleteIssue();

   const addIssue = async (issueData: CreateIssueInput) => {
      try {
         const result = await createIssueMutation({
            variables: { input: issueData },
         });
         return result.data?.createIssue;
      } catch (error) {
         console.error('Error creating issue:', error);
         throw error;
      }
   };

   const updateIssue = async (id: string, updates: UpdateIssueInput) => {
      try {
         const result = await updateIssueMutation({
            variables: { id, input: updates },
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
   const [updateIssueStatusMutation] = useUpdateIssueStatus();
   const [assignIssueMutation] = useAssignIssue();
   const [updateIssueMutation] = useUpdateIssue();

   const updateIssueStatus = async (issueId: string, newStatus: Status) => {
      try {
         const result = await updateIssueStatusMutation({
            variables: { issueId, status: newStatus.id },
         });
         return result.data?.updateIssueStatus;
      } catch (error) {
         console.error('Error updating issue status:', error);
         throw error;
      }
   };

   const updateIssuePriority = async (issueId: string, newPriority: Priority) => {
      try {
         const result = await updateIssueMutation({
            variables: { id: issueId, input: { priority: newPriority.id } },
         });
         return result.data?.updateIssue;
      } catch (error) {
         console.error('Error updating issue priority:', error);
         throw error;
      }
   };

   const updateIssueAssignee = async (issueId: string, newAssignee: User | null) => {
      try {
         const result = await assignIssueMutation({
            variables: { issueId, assigneeId: newAssignee?.id || '' },
         });
         return result.data?.assignIssue;
      } catch (error) {
         console.error('Error assigning issue:', error);
         throw error;
      }
   };

   const addIssueLabel = async (issueId: string, label: LabelInterface) => {
      const issue = getIssueById(issueId);
      if (issue) {
         const currentLabelIds = issue.labels?.map((l) => l.id) || [];
         const updatedLabelIds = [...new Set([...currentLabelIds, label.id])];
         try {
            const result = await updateIssueMutation({
               variables: { id: issueId, input: { labelIds: updatedLabelIds } },
            });
            return result.data?.updateIssue;
         } catch (error) {
            console.error('Error adding issue label:', error);
            throw error;
         }
      }
   };

   const removeIssueLabel = async (issueId: string, labelId: string) => {
      const issue = getIssueById(issueId);
      if (issue) {
         const updatedLabelIds =
            issue.labels?.filter((label) => label.id !== labelId).map((l) => l.id) || [];
         try {
            const result = await updateIssueMutation({
               variables: { id: issueId, input: { labelIds: updatedLabelIds } },
            });
            return result.data?.updateIssue;
         } catch (error) {
            console.error('Error removing issue label:', error);
            throw error;
         }
      }
   };

   const updateIssueProject = async (issueId: string, newProject: Project | undefined) => {
      try {
         const result = await updateIssueMutation({
            variables: { id: issueId, input: { projectId: newProject?.id || null } },
         });
         return result.data?.updateIssue;
      } catch (error) {
         console.error('Error updating issue project:', error);
         throw error;
      }
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
export function useSingleIssueMutations(issueId: string) {
   const [updateIssueMutation] = useUpdateIssue();
   const [deleteIssueMutation] = useDeleteIssue();

   const updateCurrentIssue = async (updates: UpdateIssueInput) => {
      try {
         const result = await updateIssueMutation({
            variables: { id: issueId, input: updates },
         });
         return result.data?.updateIssue;
      } catch (error) {
         console.error('Error updating issue:', error);
         throw error;
      }
   };

   const deleteCurrentIssue = async () => {
      try {
         await deleteIssueMutation({
            variables: { id: issueId },
         });
      } catch (error) {
         console.error('Error deleting issue:', error);
         throw error;
      }
   };

   return {
      updateIssue: updateCurrentIssue,
      deleteIssue: deleteCurrentIssue,
   };
}
