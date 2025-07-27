import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TeamProjectScalarWhereWithAggregatesInput", {})
export class TeamProjectScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TeamProjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TeamProjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TeamProjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TeamProjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  teamId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  projectId?: StringWithAggregatesFilter | undefined;
}
