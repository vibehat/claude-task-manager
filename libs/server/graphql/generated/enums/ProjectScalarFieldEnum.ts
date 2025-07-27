import * as TypeGraphQL from "type-graphql";

export enum ProjectScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  color = "color",
  identifier = "identifier",
  icon = "icon",
  percentComplete = "percentComplete",
  startDate = "startDate",
  health = "health",
  leadId = "leadId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ProjectScalarFieldEnum, {
  name: "ProjectScalarFieldEnum",
  description: undefined,
});
