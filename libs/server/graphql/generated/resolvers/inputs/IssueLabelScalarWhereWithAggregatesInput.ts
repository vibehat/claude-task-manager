import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("IssueLabelScalarWhereWithAggregatesInput", {})
export class IssueLabelScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [IssueLabelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: IssueLabelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: IssueLabelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: IssueLabelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  issueId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  labelId?: StringWithAggregatesFilter | undefined;
}
