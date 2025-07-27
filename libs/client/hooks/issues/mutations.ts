/**
 * Issue Mutation Hooks
 *
 * Comprehensive mutation hooks for issues, users, projects, and labels
 */

import { useMutation, UseMutationOptions, UseMutationResult, gql } from '@apollo/client';
import type {
   Issue,
   User,
   Project,
   Label,
   CreateIssueInput,
   UpdateIssueInput,
   CreateUserInput,
   UpdateUserInput,
   CreateProjectInput,
   UpdateProjectInput,
   CreateLabelInput,
   UpdateLabelInput,
   LabelInterface,
   Priority,
   Status,
} from './types';

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

export function useCreateIssue(
   options?: UseMutationOptions<{ createIssue: Issue }, { input: CreateIssueInput }>
): UseMutationResult<{ createIssue: Issue }, { input: CreateIssueInput }> {
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

export function useUpdateIssue(
   options?: UseMutationOptions<{ updateIssue: Issue }, { id: string; input: UpdateIssueInput }>
): UseMutationResult<{ updateIssue: Issue }, { id: string; input: UpdateIssueInput }> {
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

export function useDeleteIssue(
   options?: UseMutationOptions<{ deleteIssue: boolean }, { id: string }>
): UseMutationResult<{ deleteIssue: boolean }, { id: string }> {
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

export function useAssignIssue(
   options?: UseMutationOptions<{ assignIssue: Issue }, { issueId: string; assigneeId: string }>
): UseMutationResult<{ assignIssue: Issue }, { issueId: string; assigneeId: string }> {
   return useMutation(AssignIssueDocument, options);
}

export function useUpdateIssueStatus(
   options?: UseMutationOptions<{ updateIssueStatus: Issue }, { issueId: string; status: string }>
): UseMutationResult<{ updateIssueStatus: Issue }, { issueId: string; status: string }> {
   return useMutation(UpdateIssueStatusDocument, options);
}

// User Mutation Hooks

export function useCreateUser(
   options?: UseMutationOptions<{ createUser: User }, { input: CreateUserInput }>
): UseMutationResult<{ createUser: User }, { input: CreateUserInput }> {
   return useMutation(CreateUserDocument, options);
}

export function useUpdateUser(
   options?: UseMutationOptions<{ updateUser: User }, { id: string; input: UpdateUserInput }>
): UseMutationResult<{ updateUser: User }, { id: string; input: UpdateUserInput }> {
   return useMutation(UpdateUserDocument, options);
}

export function useDeleteUser(
   options?: UseMutationOptions<{ deleteUser: boolean }, { id: string }>
): UseMutationResult<{ deleteUser: boolean }, { id: string }> {
   return useMutation(DeleteUserDocument, options);
}

// Project Mutation Hooks

export function useCreateProject(
   options?: UseMutationOptions<{ createProject: Project }, { input: CreateProjectInput }>
): UseMutationResult<{ createProject: Project }, { input: CreateProjectInput }> {
   return useMutation(CreateProjectDocument, options);
}

export function useUpdateProject(
   options?: UseMutationOptions<
      { updateProject: Project },
      { id: string; input: UpdateProjectInput }
   >
): UseMutationResult<{ updateProject: Project }, { id: string; input: UpdateProjectInput }> {
   return useMutation(UpdateProjectDocument, options);
}

export function useDeleteProject(
   options?: UseMutationOptions<{ deleteProject: boolean }, { id: string }>
): UseMutationResult<{ deleteProject: boolean }, { id: string }> {
   return useMutation(DeleteProjectDocument, options);
}

// Label Mutation Hooks

export function useCreateLabel(
   options?: UseMutationOptions<{ createLabel: Label }, { input: CreateLabelInput }>
): UseMutationResult<{ createLabel: Label }, { input: CreateLabelInput }> {
   return useMutation(CreateLabelDocument, options);
}

export function useUpdateLabel(
   options?: UseMutationOptions<{ updateLabel: Label }, { id: string; input: UpdateLabelInput }>
): UseMutationResult<{ updateLabel: Label }, { id: string; input: UpdateLabelInput }> {
   return useMutation(UpdateLabelDocument, options);
}

export function useDeleteLabel(
   options?: UseMutationOptions<{ deleteLabel: boolean }, { id: string }>
): UseMutationResult<{ deleteLabel: boolean }, { id: string }> {
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

   const updateIssueStatus = async (issueId: string, status: string) => {
      try {
         const result = await updateIssueStatusMutation({
            variables: { issueId, status },
         });
         return result.data?.updateIssueStatus;
      } catch (error) {
         console.error('Error updating issue status:', error);
         throw error;
      }
   };

   const updateIssuePriority = async (issueId: string, priority: string) => {
      try {
         const result = await updateIssueMutation({
            variables: { id: issueId, input: { priority } },
         });
         return result.data?.updateIssue;
      } catch (error) {
         console.error('Error updating issue priority:', error);
         throw error;
      }
   };

   const updateIssueAssignee = async (issueId: string, assigneeId: string) => {
      try {
         const result = await assignIssueMutation({
            variables: { issueId, assigneeId },
         });
         return result.data?.assignIssue;
      } catch (error) {
         console.error('Error assigning issue:', error);
         throw error;
      }
   };

   const addIssueLabel = async (issueId: string, labelIds: string[]) => {
      const issue = getIssueById(issueId);
      if (issue) {
         const currentLabelIds = issue.labels?.map((l) => l.id) || [];
         const updatedLabelIds = [...new Set([...currentLabelIds, ...labelIds])];
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

   const updateIssueProject = async (issueId: string, projectId: string | null) => {
      try {
         const result = await updateIssueMutation({
            variables: { id: issueId, input: { projectId } },
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
