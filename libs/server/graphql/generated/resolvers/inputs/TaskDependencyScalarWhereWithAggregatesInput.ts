import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("TaskDependencyScalarWhereWithAggregatesInput", {})
export class TaskDependencyScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TaskDependencyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TaskDependencyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TaskDependencyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TaskDependencyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  taskId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  dependsOnId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
