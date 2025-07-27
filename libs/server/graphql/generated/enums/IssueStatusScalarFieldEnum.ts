import * as TypeGraphQL from "type-graphql";

export enum IssueStatusScalarFieldEnum {
  id = "id",
  name = "name",
  color = "color",
  iconName = "iconName",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(IssueStatusScalarFieldEnum, {
  name: "IssueStatusScalarFieldEnum",
  description: undefined,
});
