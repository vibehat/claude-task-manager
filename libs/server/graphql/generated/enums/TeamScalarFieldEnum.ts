import * as TypeGraphQL from "type-graphql";

export enum TeamScalarFieldEnum {
  id = "id",
  name = "name",
  icon = "icon",
  joined = "joined",
  color = "color",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(TeamScalarFieldEnum, {
  name: "TeamScalarFieldEnum",
  description: undefined,
});
