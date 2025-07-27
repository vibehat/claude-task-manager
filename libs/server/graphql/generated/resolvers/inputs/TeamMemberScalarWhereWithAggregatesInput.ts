import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TeamMemberScalarWhereWithAggregatesInput", {})
export class TeamMemberScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TeamMemberScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TeamMemberScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TeamMemberScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TeamMemberScalarWhereWithAggregatesInput[] | undefined;

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
  userId?: StringWithAggregatesFilter | undefined;
}
