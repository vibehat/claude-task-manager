import * as TypeGraphQL from "type-graphql";

export enum TeamMemberScalarFieldEnum {
  id = "id",
  teamId = "teamId",
  userId = "userId"
}
TypeGraphQL.registerEnumType(TeamMemberScalarFieldEnum, {
  name: "TeamMemberScalarFieldEnum",
  description: undefined,
});
