import * as TypeGraphQL from "type-graphql";

export enum LabelScalarFieldEnum {
  id = "id",
  name = "name",
  color = "color",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(LabelScalarFieldEnum, {
  name: "LabelScalarFieldEnum",
  description: undefined,
});
