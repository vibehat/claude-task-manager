import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("IssueStatusScalarWhereWithAggregatesInput", {})
export class IssueStatusScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [IssueStatusScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: IssueStatusScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueStatusScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: IssueStatusScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueStatusScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: IssueStatusScalarWhereWithAggregatesInput[] | undefined;

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
  color?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  iconName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
