import { GraphQLContext } from '../../context';
import { IssueModel, UserModel, ProjectModel, LabelModel } from '../../../models';

export const issueMutations = {
   // Issue mutations
   createIssue: async (_: any, { input }: { input: any }, context: GraphQLContext) => {
      try {
         const issueModel = new IssueModel(context.prisma);
         const issue = await issueModel.createIssue(input);

         return {
            ...issue,
            subissues: JSON.parse(issue.subissues || '[]'),
            teamIds: issue.assignee ? JSON.parse(issue.assignee.teamIds || '[]') : [],
         };
      } catch (error) {
         console.error('Error creating issue:', error);
         throw error;
      }
   },

   updateIssue: async (
      _: any,
      { id, input }: { id: string; input: any },
      context: GraphQLContext
   ) => {
      try {
         const issueModel = new IssueModel(context.prisma);
         const issue = await issueModel.updateIssue(id, input);

         if (!issue) {
            throw new Error(`Issue with ID ${id} not found`);
         }

         return {
            ...issue,
            subissues: JSON.parse(issue.subissues || '[]'),
            teamIds: issue.assignee ? JSON.parse(issue.assignee.teamIds || '[]') : [],
         };
      } catch (error) {
         console.error('Error updating issue:', error);
         throw error;
      }
   },

   deleteIssue: async (_: any, { id }: { id: string }, context: GraphQLContext) => {
      try {
         const issueModel = new IssueModel(context.prisma);
         return await issueModel.deleteIssue(id);
      } catch (error) {
         console.error('Error deleting issue:', error);
         throw error;
      }
   },

   assignIssue: async (
      _: any,
      { issueId, assigneeId }: { issueId: string; assigneeId: string },
      context: GraphQLContext
   ) => {
      try {
         const issueModel = new IssueModel(context.prisma);
         const issue = await issueModel.assignIssue(issueId, assigneeId);

         if (!issue) {
            throw new Error(`Issue with ID ${issueId} not found`);
         }

         return {
            ...issue,
            subissues: JSON.parse(issue.subissues || '[]'),
            teamIds: issue.assignee ? JSON.parse(issue.assignee.teamIds || '[]') : [],
         };
      } catch (error) {
         console.error('Error assigning issue:', error);
         throw error;
      }
   },

   updateIssueStatus: async (
      _: any,
      { issueId, status }: { issueId: string; status: string },
      context: GraphQLContext
   ) => {
      try {
         const issueModel = new IssueModel(context.prisma);
         const issue = await issueModel.updateIssueStatus(issueId, status);

         if (!issue) {
            throw new Error(`Issue with ID ${issueId} not found`);
         }

         return {
            ...issue,
            subissues: JSON.parse(issue.subissues || '[]'),
            teamIds: issue.assignee ? JSON.parse(issue.assignee.teamIds || '[]') : [],
         };
      } catch (error) {
         console.error('Error updating issue status:', error);
         throw error;
      }
   },

   // User mutations
   createUser: async (_: any, { input }: { input: any }, context: GraphQLContext) => {
      try {
         const userModel = new UserModel(context.prisma);
         const user = await userModel.createUser(input);

         return {
            ...user,
            teamIds: JSON.parse(user.teamIds || '[]'),
         };
      } catch (error) {
         console.error('Error creating user:', error);
         throw error;
      }
   },

   updateUser: async (
      _: any,
      { id, input }: { id: string; input: any },
      context: GraphQLContext
   ) => {
      try {
         const userModel = new UserModel(context.prisma);
         const user = await userModel.updateUser(id, input);

         if (!user) {
            throw new Error(`User with ID ${id} not found`);
         }

         return {
            ...user,
            teamIds: JSON.parse(user.teamIds || '[]'),
         };
      } catch (error) {
         console.error('Error updating user:', error);
         throw error;
      }
   },

   deleteUser: async (_: any, { id }: { id: string }, context: GraphQLContext) => {
      try {
         const userModel = new UserModel(context.prisma);
         return await userModel.deleteUser(id);
      } catch (error) {
         console.error('Error deleting user:', error);
         throw error;
      }
   },

   // Project mutations
   createProject: async (_: any, { input }: { input: any }, context: GraphQLContext) => {
      try {
         const projectModel = new ProjectModel(context.prisma);
         return await projectModel.createProject(input);
      } catch (error) {
         console.error('Error creating project:', error);
         throw error;
      }
   },

   updateProject: async (
      _: any,
      { id, input }: { id: string; input: any },
      context: GraphQLContext
   ) => {
      try {
         const projectModel = new ProjectModel(context.prisma);
         const project = await projectModel.updateProject(id, input);

         if (!project) {
            throw new Error(`Project with ID ${id} not found`);
         }

         return project;
      } catch (error) {
         console.error('Error updating project:', error);
         throw error;
      }
   },

   deleteProject: async (_: any, { id }: { id: string }, context: GraphQLContext) => {
      try {
         const projectModel = new ProjectModel(context.prisma);
         return await projectModel.deleteProject(id);
      } catch (error) {
         console.error('Error deleting project:', error);
         throw error;
      }
   },

   // Label mutations
   createLabel: async (_: any, { input }: { input: any }, context: GraphQLContext) => {
      try {
         const labelModel = new LabelModel(context.prisma);
         return await labelModel.createLabel(input);
      } catch (error) {
         console.error('Error creating label:', error);
         throw error;
      }
   },

   updateLabel: async (
      _: any,
      { id, input }: { id: string; input: any },
      context: GraphQLContext
   ) => {
      try {
         const labelModel = new LabelModel(context.prisma);
         const label = await labelModel.updateLabel(id, input);

         if (!label) {
            throw new Error(`Label with ID ${id} not found`);
         }

         return label;
      } catch (error) {
         console.error('Error updating label:', error);
         throw error;
      }
   },

   deleteLabel: async (_: any, { id }: { id: string }, context: GraphQLContext) => {
      try {
         const labelModel = new LabelModel(context.prisma);
         return await labelModel.deleteLabel(id);
      } catch (error) {
         console.error('Error deleting label:', error);
         throw error;
      }
   },
};
