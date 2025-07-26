import { gql } from 'graphql-tag';

const extendedTypeDefs = gql`
   # Extended types for Issue tracking UI

   type Issue {
      id: ID!
      identifier: String!
      title: String!
      description: String!
      status: Status!
      assignee: User
      priority: Priority!
      labels: [Label!]!
      project: Project
      subissues: [ID!]!
      createdAt: DateTime!
      updatedAt: DateTime!
      dueDate: DateTime
      rank: String!
   }

   type User {
      id: ID!
      name: String!
      email: String!
      avatarUrl: String!
      status: UserStatus!
      role: UserRole!
      joinedDate: DateTime!
      teamIds: [ID!]!
      assignedIssues: [Issue!]!
   }

   enum UserStatus {
      ONLINE
      OFFLINE
      AWAY
   }

   enum UserRole {
      MEMBER
      ADMIN
      GUEST
   }

   type Project {
      id: ID!
      name: String!
      identifier: String!
      description: String
      icon: String
      color: String!
      status: Status!
      priority: Priority!
      lead: User
      members: [User!]!
      issues: [Issue!]!
      createdAt: DateTime!
      updatedAt: DateTime!
   }

   type Status {
      id: ID!
      name: String!
      color: String!
      icon: String
   }

   type Priority {
      id: ID!
      name: String!
      icon: String!
      color: String!
   }

   type Label {
      id: ID!
      name: String!
      color: String!
   }

   type Team {
      id: ID!
      name: String!
      identifier: String!
      description: String
      members: [User!]!
      projects: [Project!]!
      createdAt: DateTime!
   }

   # Input types for Issues
   input CreateIssueInput {
      title: String!
      description: String!
      projectId: ID!
      statusId: ID
      assigneeId: ID
      priorityId: ID!
      labelIds: [ID!] = []
      dueDate: DateTime
      rank: String
   }

   input UpdateIssueInput {
      title: String
      description: String
      statusId: ID
      assigneeId: ID
      priorityId: ID
      labelIds: [ID!]
      dueDate: DateTime
      rank: String
   }

   input CreateProjectInput {
      name: String!
      identifier: String!
      description: String
      color: String!
      leadId: ID
      memberIds: [ID!] = []
   }

   input UpdateProjectInput {
      name: String
      description: String
      color: String
      leadId: ID
      memberIds: [ID!]
   }

   input CreateUserInput {
      name: String!
      email: String!
      role: UserRole = MEMBER
      teamIds: [ID!] = []
   }

   input UpdateUserInput {
      name: String
      email: String
      role: UserRole
      status: UserStatus
      teamIds: [ID!]
   }

   # Subscription filters
   input IssueSubscriptionFilter {
      issueIds: [ID!]
      projectIds: [ID!]
      statusIds: [ID!]
      assigneeIds: [ID!]
      priorityIds: [ID!]
   }

   # Extended queries
   extend type Query {
      # Issue queries
      issues: [Issue!]!
      issue(id: ID!): Issue
      issuesByProject(projectId: ID!): [Issue!]!
      issuesByAssignee(assigneeId: ID!): [Issue!]!
      issuesByStatus(statusId: ID!): [Issue!]!

      # User queries
      users: [User!]!
      user(id: ID!): User
      currentUser: User

      # Project queries
      projects: [Project!]!
      project(id: ID!): Project

      # Configuration queries
      statuses: [Status!]!
      priorities: [Priority!]!
      labels: [Label!]!
      teams: [Team!]!
   }

   # Extended mutations
   extend type Mutation {
      # Issue mutations
      createIssue(input: CreateIssueInput!): Issue!
      updateIssue(id: ID!, input: UpdateIssueInput!): Issue!
      deleteIssue(id: ID!): Boolean!
      updateIssueStatus(id: ID!, statusId: ID!): Issue!
      assignIssue(id: ID!, assigneeId: ID!): Issue!
      updateIssuePriority(id: ID!, priorityId: ID!): Issue!
      addIssueLabel(id: ID!, labelId: ID!): Issue!
      removeIssueLabel(id: ID!, labelId: ID!): Issue!

      # Project mutations
      createProject(input: CreateProjectInput!): Project!
      updateProject(id: ID!, input: UpdateProjectInput!): Project!
      deleteProject(id: ID!): Boolean!
      addProjectMember(projectId: ID!, userId: ID!): Project!
      removeProjectMember(projectId: ID!, userId: ID!): Project!

      # User mutations
      createUser(input: CreateUserInput!): User!
      updateUser(id: ID!, input: UpdateUserInput!): User!
      deleteUser(id: ID!): Boolean!
      updateUserStatus(id: ID!, status: UserStatus!): User!
   }

   # Change types for subscriptions
   enum IssueChangeType {
      CREATED
      UPDATED
      DELETED
      STATUS_CHANGED
      ASSIGNED
      PRIORITY_CHANGED
      LABEL_ADDED
      LABEL_REMOVED
   }

   type IssueUpdatePayload {
      issue: Issue!
      changeType: IssueChangeType!
      timestamp: DateTime!
      source: String!
      previousState: JSON
   }

   # Extended subscriptions
   extend type Subscription {
      # Issue subscriptions
      issueUpdated(filter: IssueSubscriptionFilter): IssueUpdatePayload!

      # Project subscriptions
      projectUpdated(projectId: ID): Project!

      # User subscriptions
      userUpdated(userId: ID): User!
   }
`;

export default extendedTypeDefs;
