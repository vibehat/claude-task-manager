import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskDependencyAvgOrderByAggregateInput } from "../inputs/TaskDependencyAvgOrderByAggregateInput";
import { TaskDependencyCountOrderByAggregateInput } from "../inputs/TaskDependencyCountOrderByAggregateInput";
import { TaskDependencyMaxOrderByAggregateInput } from "../inputs/TaskDependencyMaxOrderByAggregateInput";
import { TaskDependencyMinOrderByAggregateInput } from "../inputs/TaskDependencyMinOrderByAggregateInput";
import { TaskDependencySumOrderByAggregateInput } from "../inputs/TaskDependencySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TaskDependencyOrderByWithAggregationInput", {})
export class TaskDependencyOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  taskId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dependsOnId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TaskDependencyCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TaskDependencyCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskDependencyAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TaskDependencyAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskDependencyMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TaskDependencyMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskDependencyMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TaskDependencyMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskDependencySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TaskDependencySumOrderByAggregateInput | undefined;
}
