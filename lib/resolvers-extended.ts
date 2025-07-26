import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import { TaskMasterFileOperations } from './core';
import { pubsub, eventEmitter, SUBSCRIPTION_EVENTS } from './websocket-server';

// Import mock data for bridging
import { issues as mockIssues, Issue as MockIssue } from '../mock-data/issues';
import { users as mockUsers, User as MockUser } from '../mock-data/users';
import { projects as mockProjects, Project as MockProject } from '../mock-data/projects';
import { status as mockStatuses } from '../mock-data/status';
import { priorities as mockPriorities } from '../mock-data/priorities';
import { labels as mockLabels } from '../mock-data/labels';
import { teams as mockTeams } from '../mock-data/teams';

// Transform functions to convert mock data to GraphQL format
const transformIssue = (mockIssue: MockIssue) => ({
   id: mockIssue.id,
   identifier: mockIssue.identifier,
   title: mockIssue.title,
   description: mockIssue.description,
   status: mockIssue.status,
   assignee: mockIssue.assignee,
   priority: mockIssue.priority,
   labels: mockIssue.labels,
   project: mockIssue.project,
   subissues: mockIssue.subissues || [],
   createdAt: mockIssue.createdAt,
   updatedAt: mockIssue.createdAt, // Mock data doesn't have updatedAt
   dueDate: mockIssue.dueDate || null,
   rank: mockIssue.rank,
});

const transformUser = (mockUser: MockUser) => ({
   id: mockUser.id,
   name: mockUser.name,
   email: mockUser.email,
   avatarUrl: mockUser.avatarUrl,
   status: mockUser.status.toUpperCase(),
   role: mockUser.role.toUpperCase(),
   joinedDate: mockUser.joinedDate,
   teamIds: mockUser.teamIds,
   assignedIssues: mockIssues
      .filter((issue) => issue.assignee?.id === mockUser.id)
      .map(transformIssue),
});

const transformProject = (mockProject: MockProject) => ({
   id: mockProject.id,
   name: mockProject.name,
   identifier: mockProject.identifier,
   description: mockProject.description,
   icon: mockProject.icon,
   color: mockProject.color,
   status: mockProject.status || mockStatuses[0],
   priority: mockProject.priority || mockPriorities[0],
   lead: mockProject.lead,
   members: mockProject.members,
   issues: mockIssues.filter((issue) => issue.project?.id === mockProject.id).map(transformIssue),
   createdAt: mockProject.createdAt,
   updatedAt: mockProject.updatedAt,
});

// Extended resolvers for Issue tracking
const extendedResolvers = {
   Query: {
      // Issue queries
      issues: () => mockIssues.map(transformIssue),
      issue: (_: any, { id }: { id: string }) => {
         const issue = mockIssues.find((i) => i.id === id);
         return issue ? transformIssue(issue) : null;
      },
      issuesByProject: (_: any, { projectId }: { projectId: string }) => {
         return mockIssues.filter((issue) => issue.project?.id === projectId).map(transformIssue);
      },
      issuesByAssignee: (_: any, { assigneeId }: { assigneeId: string }) => {
         return mockIssues.filter((issue) => issue.assignee?.id === assigneeId).map(transformIssue);
      },
      issuesByStatus: (_: any, { statusId }: { statusId: string }) => {
         return mockIssues.filter((issue) => issue.status.id === statusId).map(transformIssue);
      },

      // User queries
      users: () => mockUsers.map(transformUser),
      user: (_: any, { id }: { id: string }) => {
         const user = mockUsers.find((u) => u.id === id);
         return user ? transformUser(user) : null;
      },
      currentUser: () => {
         // Return first user as current user for demo
         return mockUsers.length > 0 ? transformUser(mockUsers[0]) : null;
      },

      // Project queries
      projects: () => mockProjects.map(transformProject),
      project: (_: any, { id }: { id: string }) => {
         const project = mockProjects.find((p) => p.id === id);
         return project ? transformProject(project) : null;
      },

      // Configuration queries
      statuses: () => mockStatuses,
      priorities: () => mockPriorities,
      labels: () => mockLabels,
      teams: () => mockTeams,
   },

   Mutation: {
      // Issue mutations - for now, just return mock data
      // In a real implementation, these would update a database
      createIssue: async (_: any, { input }: { input: any }) => {
         const newIssue = {
            id: String(mockIssues.length + 1),
            identifier: `DEMO-${mockIssues.length + 1}`,
            title: input.title,
            description: input.description,
            status: mockStatuses.find((s) => s.id === input.statusId) || mockStatuses[0],
            assignee: input.assigneeId ? mockUsers.find((u) => u.id === input.assigneeId) : null,
            priority: mockPriorities.find((p) => p.id === input.priorityId) || mockPriorities[0],
            labels: input.labelIds ? mockLabels.filter((l) => input.labelIds.includes(l.id)) : [],
            project: mockProjects.find((p) => p.id === input.projectId),
            subissues: [],
            createdAt: new Date().toISOString(),
            dueDate: input.dueDate,
            rank: input.rank || `rank_${Date.now()}`,
         };

         mockIssues.push(newIssue);

         // Publish subscription update
         pubsub.publish(SUBSCRIPTION_EVENTS.ISSUE_UPDATED, {
            issueUpdated: {
               issue: transformIssue(newIssue),
               changeType: 'CREATED',
               timestamp: new Date().toISOString(),
               source: 'ui',
               previousState: null,
            },
         });

         return transformIssue(newIssue);
      },

      updateIssue: async (_: any, { id, input }: { id: string; input: any }) => {
         const issueIndex = mockIssues.findIndex((i) => i.id === id);
         if (issueIndex === -1) {
            throw new Error(`Issue with id ${id} not found`);
         }

         const previousState = { ...mockIssues[issueIndex] };
         const updatedIssue = { ...mockIssues[issueIndex] };

         // Update fields if provided
         if (input.title !== undefined) updatedIssue.title = input.title;
         if (input.description !== undefined) updatedIssue.description = input.description;
         if (input.statusId)
            updatedIssue.status =
               mockStatuses.find((s) => s.id === input.statusId) || updatedIssue.status;
         if (input.assigneeId)
            updatedIssue.assignee =
               mockUsers.find((u) => u.id === input.assigneeId) || updatedIssue.assignee;
         if (input.priorityId)
            updatedIssue.priority =
               mockPriorities.find((p) => p.id === input.priorityId) || updatedIssue.priority;
         if (input.labelIds)
            updatedIssue.labels = mockLabels.filter((l) => input.labelIds.includes(l.id));
         if (input.dueDate !== undefined) updatedIssue.dueDate = input.dueDate;
         if (input.rank !== undefined) updatedIssue.rank = input.rank;

         mockIssues[issueIndex] = updatedIssue;

         // Publish subscription update
         pubsub.publish(SUBSCRIPTION_EVENTS.ISSUE_UPDATED, {
            issueUpdated: {
               issue: transformIssue(updatedIssue),
               changeType: 'UPDATED',
               timestamp: new Date().toISOString(),
               source: 'ui',
               previousState: previousState,
            },
         });

         return transformIssue(updatedIssue);
      },

      deleteIssue: async (_: any, { id }: { id: string }) => {
         const issueIndex = mockIssues.findIndex((i) => i.id === id);
         if (issueIndex === -1) {
            return false;
         }

         const deletedIssue = mockIssues[issueIndex];
         mockIssues.splice(issueIndex, 1);

         // Publish subscription update
         pubsub.publish(SUBSCRIPTION_EVENTS.ISSUE_UPDATED, {
            issueUpdated: {
               issue: transformIssue(deletedIssue),
               changeType: 'DELETED',
               timestamp: new Date().toISOString(),
               source: 'ui',
               previousState: deletedIssue,
            },
         });

         return true;
      },

      updateIssueStatus: async (_: any, { id, statusId }: { id: string; statusId: string }) => {
         const issueIndex = mockIssues.findIndex((i) => i.id === id);
         if (issueIndex === -1) {
            throw new Error(`Issue with id ${id} not found`);
         }

         const previousState = { ...mockIssues[issueIndex] };
         const newStatus = mockStatuses.find((s) => s.id === statusId);
         if (!newStatus) {
            throw new Error(`Status with id ${statusId} not found`);
         }

         mockIssues[issueIndex].status = newStatus;

         // Publish subscription update
         pubsub.publish(SUBSCRIPTION_EVENTS.ISSUE_UPDATED, {
            issueUpdated: {
               issue: transformIssue(mockIssues[issueIndex]),
               changeType: 'STATUS_CHANGED',
               timestamp: new Date().toISOString(),
               source: 'ui',
               previousState: previousState,
            },
         });

         return transformIssue(mockIssues[issueIndex]);
      },

      assignIssue: async (_: any, { id, assigneeId }: { id: string; assigneeId: string }) => {
         const issueIndex = mockIssues.findIndex((i) => i.id === id);
         if (issueIndex === -1) {
            throw new Error(`Issue with id ${id} not found`);
         }

         const previousState = { ...mockIssues[issueIndex] };
         const assignee = mockUsers.find((u) => u.id === assigneeId);
         if (!assignee) {
            throw new Error(`User with id ${assigneeId} not found`);
         }

         mockIssues[issueIndex].assignee = assignee;

         // Publish subscription update
         pubsub.publish(SUBSCRIPTION_EVENTS.ISSUE_UPDATED, {
            issueUpdated: {
               issue: transformIssue(mockIssues[issueIndex]),
               changeType: 'ASSIGNED',
               timestamp: new Date().toISOString(),
               source: 'ui',
               previousState: previousState,
            },
         });

         return transformIssue(mockIssues[issueIndex]);
      },

      updateIssuePriority: async (
         _: any,
         { id, priorityId }: { id: string; priorityId: string }
      ) => {
         const issueIndex = mockIssues.findIndex((i) => i.id === id);
         if (issueIndex === -1) {
            throw new Error(`Issue with id ${id} not found`);
         }

         const previousState = { ...mockIssues[issueIndex] };
         const priority = mockPriorities.find((p) => p.id === priorityId);
         if (!priority) {
            throw new Error(`Priority with id ${priorityId} not found`);
         }

         mockIssues[issueIndex].priority = priority;

         // Publish subscription update
         pubsub.publish(SUBSCRIPTION_EVENTS.ISSUE_UPDATED, {
            issueUpdated: {
               issue: transformIssue(mockIssues[issueIndex]),
               changeType: 'PRIORITY_CHANGED',
               timestamp: new Date().toISOString(),
               source: 'ui',
               previousState: previousState,
            },
         });

         return transformIssue(mockIssues[issueIndex]);
      },

      // Placeholder implementations for other mutations
      createProject: () => {
         throw new Error('Not implemented yet');
      },
      updateProject: () => {
         throw new Error('Not implemented yet');
      },
      deleteProject: () => {
         throw new Error('Not implemented yet');
      },
      createUser: () => {
         throw new Error('Not implemented yet');
      },
      updateUser: () => {
         throw new Error('Not implemented yet');
      },
      deleteUser: () => {
         throw new Error('Not implemented yet');
      },
      updateUserStatus: () => {
         throw new Error('Not implemented yet');
      },
      addProjectMember: () => {
         throw new Error('Not implemented yet');
      },
      removeProjectMember: () => {
         throw new Error('Not implemented yet');
      },
      addIssueLabel: () => {
         throw new Error('Not implemented yet');
      },
      removeIssueLabel: () => {
         throw new Error('Not implemented yet');
      },
   },

   Subscription: {
      issueUpdated: {
         subscribe: (_: any, { filter }: { filter?: any }) => {
            // In a real implementation, you'd filter based on the filter parameter
            return pubsub.asyncIterator([SUBSCRIPTION_EVENTS.ISSUE_UPDATED]);
         },
      },

      projectUpdated: {
         subscribe: (_: any, { projectId }: { projectId?: string }) => {
            // Filter by project if provided
            return pubsub.asyncIterator([SUBSCRIPTION_EVENTS.PROJECT_UPDATED]);
         },
      },

      userUpdated: {
         subscribe: (_: any, { userId }: { userId?: string }) => {
            // Filter by user if provided
            return pubsub.asyncIterator([SUBSCRIPTION_EVENTS.USER_UPDATED]);
         },
      },
   },

   // Enum resolvers
   UserStatus: {
      ONLINE: 'online',
      OFFLINE: 'offline',
      AWAY: 'away',
   },

   UserRole: {
      MEMBER: 'Member',
      ADMIN: 'Admin',
      GUEST: 'Guest',
   },

   IssueChangeType: {
      CREATED: 'CREATED',
      UPDATED: 'UPDATED',
      DELETED: 'DELETED',
      STATUS_CHANGED: 'STATUS_CHANGED',
      ASSIGNED: 'ASSIGNED',
      PRIORITY_CHANGED: 'PRIORITY_CHANGED',
      LABEL_ADDED: 'LABEL_ADDED',
      LABEL_REMOVED: 'LABEL_REMOVED',
   },
};

export default extendedResolvers;
