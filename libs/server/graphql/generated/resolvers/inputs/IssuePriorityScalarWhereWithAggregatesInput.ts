import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("IssuePriorityScalarWhereWithAggregatesInput", {})
export class IssuePriorityScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [IssuePriorityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: IssuePriorityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssuePriorityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: IssuePriorityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssuePriorityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: IssuePriorityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  iconName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  order?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
