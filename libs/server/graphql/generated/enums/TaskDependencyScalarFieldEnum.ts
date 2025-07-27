import * as TypeGraphQL from "type-graphql";

export enum TaskDependencyScalarFieldEnum {
  id = "id",
  taskId = "taskId",
  dependsOnId = "dependsOnId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(TaskDependencyScalarFieldEnum, {
  name: "TaskDependencyScalarFieldEnum",
  description: undefined,
});
