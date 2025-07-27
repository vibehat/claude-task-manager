import * as TypeGraphQL from "type-graphql";

export enum IssueScalarFieldEnum {
  id = "id",
  identifier = "identifier",
  title = "title",
  description = "description",
  statusId = "statusId",
  priorityId = "priorityId",
  status = "status",
  priority = "priority",
  rank = "rank",
  cycleId = "cycleId",
  dueDate = "dueDate",
  taskId = "taskId",
  subtaskId = "subtaskId",
  issueType = "issueType",
  parentIssueId = "parentIssueId",
  assigneeId = "assigneeId",
  projectId = "projectId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(IssueScalarFieldEnum, {
  name: "IssueScalarFieldEnum",
  description: undefined,
});
