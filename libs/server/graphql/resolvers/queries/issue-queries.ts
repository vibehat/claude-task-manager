import type { GraphQLContext } from '../../context';
import { IssueModel, UserModel, ProjectModel, LabelModel } from '../../../models';
import {
   defaultResolverCache,
   generateCacheKey,
   CACHE_KEY_PATTERNS,
} from '../../../performance/field-cache';

export const issueQueries = {
   // Issue queries
   issues: async (
      _: any,
      {
         filter,
         orderBy,
         pagination,
      }: {
         filter?: any;
         orderBy?: any;
         pagination?: any;
      },
      context: GraphQLContext
   ) => {
      const queryParams = { filter, orderBy, pagination };
      const complexity = (filter?.search ? 3 : 1) + (orderBy ? 2 : 0);

      return defaultResolverCache.cacheTaskQuery(
         'issues_list',
         queryParams,
         async () => {
            try {
               const issueModel = new IssueModel(context.prisma);
               const issues = await issueModel.getIssues(filter, orderBy, pagination);

               // Return connection format
               return {
                  edges: issues.map((issue, index) => ({
                     node: {
                        ...issue,
                        subissues: JSON.parse(issue.subissues || '[]'),
                        teamIds: issue.assignee ? JSON.parse(issue.assignee.teamIds || '[]') : [],
                     },
                     cursor: Buffer.from(`${index}`).toString('base64'),
                  })),
                  nodes: issues.map((issue) => ({
                     ...issue,
                     subissues: JSON.parse(issue.subissues || '[]'),
                     teamIds: issue.assignee ? JSON.parse(issue.assignee.teamIds || '[]') : [],
                  })),
                  pageInfo: {
                     hasNextPage: issues.length === (pagination?.limit || pagination?.first || 50),
                     hasPreviousPage: false,
                     startCursor: issues.length > 0 ? Buffer.from('0').toString('base64') : null,
                     endCursor:
                        issues.length > 0
                           ? Buffer.from(`${issues.length - 1}`).toString('base64')
                           : null,
                  },
                  totalCount: issues.length,
               };
            } catch (error) {
               console.error('Error fetching issues:', error);
               return {
                  edges: [],
                  nodes: [],
                  pageInfo: {
                     hasNextPage: false,
                     hasPreviousPage: false,
                     startCursor: null,
                     endCursor: null,
                  },
                  totalCount: 0,
               };
            }
         },
         complexity
      );
   },

   issue: async (_: any, { id }: { id: string }, context: GraphQLContext) => {
      return defaultResolverCache.cacheTaskQuery(
         'issue_single',
         { id },
         async () => {
            try {
               const issueModel = new IssueModel(context.prisma);
               const issue = await issueModel.getIssueById(id);

               if (!issue) {
                  return null;
               }

               return {
                  ...issue,
                  subissues: JSON.parse(issue.subissues || '[]'),
                  teamIds: issue.assignee ? JSON.parse(issue.assignee.teamIds || '[]') : [],
               };
            } catch (error) {
               console.error('Error fetching issue:', error);
               return null;
            }
         },
         2
      );
   },

   searchIssues: async (
      _: any,
      {
         query,
         filter,
         orderBy,
         pagination,
      }: {
         query: string;
         filter?: any;
         orderBy?: any;
         pagination?: any;
      },
      context: GraphQLContext
   ) => {
      const queryParams = { query, filter, orderBy, pagination };

      return defaultResolverCache.cacheTaskQuery(
         'issues_search',
         queryParams,
         async () => {
            try {
               const issueModel = new IssueModel(context.prisma);
               const issues = await issueModel.searchIssues(query, filter, orderBy, pagination);

               return {
                  edges: issues.map((issue, index) => ({
                     node: {
                        ...issue,
                        subissues: JSON.parse(issue.subissues || '[]'),
                        teamIds: issue.assignee ? JSON.parse(issue.assignee.teamIds || '[]') : [],
                     },
                     cursor: Buffer.from(`${index}`).toString('base64'),
                  })),
                  nodes: issues.map((issue) => ({
                     ...issue,
                     subissues: JSON.parse(issue.subissues || '[]'),
                     teamIds: issue.assignee ? JSON.parse(issue.assignee.teamIds || '[]') : [],
                  })),
                  pageInfo: {
                     hasNextPage: issues.length === (pagination?.limit || pagination?.first || 50),
                     hasPreviousPage: false,
                     startCursor: issues.length > 0 ? Buffer.from('0').toString('base64') : null,
                     endCursor:
                        issues.length > 0
                           ? Buffer.from(`${issues.length - 1}`).toString('base64')
                           : null,
                  },
                  totalCount: issues.length,
               };
            } catch (error) {
               console.error('Error searching issues:', error);
               return {
                  edges: [],
                  nodes: [],
                  pageInfo: {
                     hasNextPage: false,
                     hasPreviousPage: false,
                     startCursor: null,
                     endCursor: null,
                  },
                  totalCount: 0,
               };
            }
         },
         4 // Search queries have higher complexity
      );
   },

   issuesByProject: async (
      _: any,
      {
         projectId,
         filter,
         orderBy,
         pagination,
      }: {
         projectId: string;
         filter?: any;
         orderBy?: any;
         pagination?: any;
      },
      context: GraphQLContext
   ) => {
      const queryParams = { projectId, filter, orderBy, pagination };

      return defaultResolverCache.cacheTaskQuery(
         'issues_by_project',
         queryParams,
         async () => {
            try {
               const issueModel = new IssueModel(context.prisma);
               const issues = await issueModel.getIssuesByProject(
                  projectId,
                  filter,
                  orderBy,
                  pagination
               );

               return {
                  edges: issues.map((issue, index) => ({
                     node: {
                        ...issue,
                        subissues: JSON.parse(issue.subissues || '[]'),
                        teamIds: issue.assignee ? JSON.parse(issue.assignee.teamIds || '[]') : [],
                     },
                     cursor: Buffer.from(`${index}`).toString('base64'),
                  })),
                  nodes: issues.map((issue) => ({
                     ...issue,
                     subissues: JSON.parse(issue.subissues || '[]'),
                     teamIds: issue.assignee ? JSON.parse(issue.assignee.teamIds || '[]') : [],
                  })),
                  pageInfo: {
                     hasNextPage: issues.length === (pagination?.limit || pagination?.first || 50),
                     hasPreviousPage: false,
                     startCursor: issues.length > 0 ? Buffer.from('0').toString('base64') : null,
                     endCursor:
                        issues.length > 0
                           ? Buffer.from(`${issues.length - 1}`).toString('base64')
                           : null,
                  },
                  totalCount: issues.length,
               };
            } catch (error) {
               console.error('Error fetching issues by project:', error);
               return {
                  edges: [],
                  nodes: [],
                  pageInfo: {
                     hasNextPage: false,
                     hasPreviousPage: false,
                     startCursor: null,
                     endCursor: null,
                  },
                  totalCount: 0,
               };
            }
         },
         3
      );
   },

   issuesByAssignee: async (
      _: any,
      {
         assigneeId,
         filter,
         orderBy,
         pagination,
      }: {
         assigneeId: string;
         filter?: any;
         orderBy?: any;
         pagination?: any;
      },
      context: GraphQLContext
   ) => {
      const queryParams = { assigneeId, filter, orderBy, pagination };

      return defaultResolverCache.cacheTaskQuery(
         'issues_by_assignee',
         queryParams,
         async () => {
            try {
               const issueModel = new IssueModel(context.prisma);
               const issues = await issueModel.getIssuesByAssignee(
                  assigneeId,
                  filter,
                  orderBy,
                  pagination
               );

               return {
                  edges: issues.map((issue, index) => ({
                     node: {
                        ...issue,
                        subissues: JSON.parse(issue.subissues || '[]'),
                        teamIds: issue.assignee ? JSON.parse(issue.assignee.teamIds || '[]') : [],
                     },
                     cursor: Buffer.from(`${index}`).toString('base64'),
                  })),
                  nodes: issues.map((issue) => ({
                     ...issue,
                     subissues: JSON.parse(issue.subissues || '[]'),
                     teamIds: issue.assignee ? JSON.parse(issue.assignee.teamIds || '[]') : [],
                  })),
                  pageInfo: {
                     hasNextPage: issues.length === (pagination?.limit || pagination?.first || 50),
                     hasPreviousPage: false,
                     startCursor: issues.length > 0 ? Buffer.from('0').toString('base64') : null,
                     endCursor:
                        issues.length > 0
                           ? Buffer.from(`${issues.length - 1}`).toString('base64')
                           : null,
                  },
                  totalCount: issues.length,
               };
            } catch (error) {
               console.error('Error fetching issues by assignee:', error);
               return {
                  edges: [],
                  nodes: [],
                  pageInfo: {
                     hasNextPage: false,
                     hasPreviousPage: false,
                     startCursor: null,
                     endCursor: null,
                  },
                  totalCount: 0,
               };
            }
         },
         3
      );
   },

   // User queries
   users: async (
      _: any,
      {
         filter,
         pagination,
      }: {
         filter?: any;
         pagination?: any;
      },
      context: GraphQLContext
   ) => {
      const queryParams = { filter, pagination };

      return defaultResolverCache.cacheTaskQuery(
         'users_list',
         queryParams,
         async () => {
            try {
               const userModel = new UserModel(context.prisma);
               const users = await userModel.getUsers(filter, pagination);

               return {
                  edges: users.map((user, index) => ({
                     node: {
                        ...user,
                        teamIds: JSON.parse(user.teamIds || '[]'),
                     },
                     cursor: Buffer.from(`${index}`).toString('base64'),
                  })),
                  nodes: users.map((user) => ({
                     ...user,
                     teamIds: JSON.parse(user.teamIds || '[]'),
                  })),
                  pageInfo: {
                     hasNextPage: users.length === (pagination?.limit || pagination?.first || 50),
                     hasPreviousPage: false,
                     startCursor: users.length > 0 ? Buffer.from('0').toString('base64') : null,
                     endCursor:
                        users.length > 0
                           ? Buffer.from(`${users.length - 1}`).toString('base64')
                           : null,
                  },
                  totalCount: users.length,
               };
            } catch (error) {
               console.error('Error fetching users:', error);
               return {
                  edges: [],
                  nodes: [],
                  pageInfo: {
                     hasNextPage: false,
                     hasPreviousPage: false,
                     startCursor: null,
                     endCursor: null,
                  },
                  totalCount: 0,
               };
            }
         },
         2
      );
   },

   user: async (_: any, { id }: { id: string }, context: GraphQLContext) => {
      return defaultResolverCache.cacheTaskQuery(
         'user_single',
         { id },
         async () => {
            try {
               const userModel = new UserModel(context.prisma);
               const user = await userModel.getUserById(id);

               if (!user) {
                  return null;
               }

               return {
                  ...user,
                  teamIds: JSON.parse(user.teamIds || '[]'),
               };
            } catch (error) {
               console.error('Error fetching user:', error);
               return null;
            }
         },
         1
      );
   },

   // Project queries
   projects: async (
      _: any,
      {
         filter,
         pagination,
      }: {
         filter?: any;
         pagination?: any;
      },
      context: GraphQLContext
   ) => {
      const queryParams = { filter, pagination };

      return defaultResolverCache.cacheTaskQuery(
         'projects_list',
         queryParams,
         async () => {
            try {
               const projectModel = new ProjectModel(context.prisma);
               const projects = await projectModel.getProjects(filter, pagination);

               return {
                  edges: projects.map((project, index) => ({
                     node: project,
                     cursor: Buffer.from(`${index}`).toString('base64'),
                  })),
                  nodes: projects,
                  pageInfo: {
                     hasNextPage:
                        projects.length === (pagination?.limit || pagination?.first || 50),
                     hasPreviousPage: false,
                     startCursor: projects.length > 0 ? Buffer.from('0').toString('base64') : null,
                     endCursor:
                        projects.length > 0
                           ? Buffer.from(`${projects.length - 1}`).toString('base64')
                           : null,
                  },
                  totalCount: projects.length,
               };
            } catch (error) {
               console.error('Error fetching projects:', error);
               return {
                  edges: [],
                  nodes: [],
                  pageInfo: {
                     hasNextPage: false,
                     hasPreviousPage: false,
                     startCursor: null,
                     endCursor: null,
                  },
                  totalCount: 0,
               };
            }
         },
         2
      );
   },

   project: async (_: any, { id }: { id: string }, context: GraphQLContext) => {
      return defaultResolverCache.cacheTaskQuery(
         'project_single',
         { id },
         async () => {
            try {
               const projectModel = new ProjectModel(context.prisma);
               return await projectModel.getProjectById(id);
            } catch (error) {
               console.error('Error fetching project:', error);
               return null;
            }
         },
         1
      );
   },

   // Label queries
   labels: async (
      _: any,
      {
         filter,
         pagination,
      }: {
         filter?: any;
         pagination?: any;
      },
      context: GraphQLContext
   ) => {
      const queryParams = { filter, pagination };

      return defaultResolverCache.cacheTaskQuery(
         'labels_list',
         queryParams,
         async () => {
            try {
               const labelModel = new LabelModel(context.prisma);
               const labels = await labelModel.getLabels(filter, pagination);

               return {
                  edges: labels.map((label, index) => ({
                     node: label,
                     cursor: Buffer.from(`${index}`).toString('base64'),
                  })),
                  nodes: labels,
                  pageInfo: {
                     hasNextPage: labels.length === (pagination?.limit || pagination?.first || 50),
                     hasPreviousPage: false,
                     startCursor: labels.length > 0 ? Buffer.from('0').toString('base64') : null,
                     endCursor:
                        labels.length > 0
                           ? Buffer.from(`${labels.length - 1}`).toString('base64')
                           : null,
                  },
                  totalCount: labels.length,
               };
            } catch (error) {
               console.error('Error fetching labels:', error);
               return {
                  edges: [],
                  nodes: [],
                  pageInfo: {
                     hasNextPage: false,
                     hasPreviousPage: false,
                     startCursor: null,
                     endCursor: null,
                  },
                  totalCount: 0,
               };
            }
         },
         2
      );
   },

   label: async (_: any, { id }: { id: string }, context: GraphQLContext) => {
      return defaultResolverCache.cacheTaskQuery(
         'label_single',
         { id },
         async () => {
            try {
               const labelModel = new LabelModel(context.prisma);
               return await labelModel.getLabelById(id);
            } catch (error) {
               console.error('Error fetching label:', error);
               return null;
            }
         },
         1
      );
   },
};
