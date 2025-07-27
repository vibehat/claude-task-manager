import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TaskMasterMetadataScalarWhereWithAggregatesInput", {})
export class TaskMasterMetadataScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TaskMasterMetadataScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TaskMasterMetadataScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskMasterMetadataScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TaskMasterMetadataScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskMasterMetadataScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TaskMasterMetadataScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updated?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;
}
