import * as TypeGraphQL from "type-graphql";

export enum TeamProjectScalarFieldEnum {
  id = "id",
  teamId = "teamId",
  projectId = "projectId"
}
TypeGraphQL.registerEnumType(TeamProjectScalarFieldEnum, {
  name: "TeamProjectScalarFieldEnum",
  description: undefined,
});
