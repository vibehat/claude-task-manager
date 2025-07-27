import * as TypeGraphQL from "type-graphql";

export enum CycleScalarFieldEnum {
  id = "id",
  number = "number",
  name = "name",
  teamId = "teamId",
  startDate = "startDate",
  endDate = "endDate",
  progress = "progress",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(CycleScalarFieldEnum, {
  name: "CycleScalarFieldEnum",
  description: undefined,
});
