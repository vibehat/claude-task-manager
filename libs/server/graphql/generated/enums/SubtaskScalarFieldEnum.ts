import * as TypeGraphQL from "type-graphql";

export enum SubtaskScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  details = "details",
  testStrategy = "testStrategy",
  status = "status",
  parentId = "parentId",
  dependencies = "dependencies",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(SubtaskScalarFieldEnum, {
  name: "SubtaskScalarFieldEnum",
  description: undefined,
});
