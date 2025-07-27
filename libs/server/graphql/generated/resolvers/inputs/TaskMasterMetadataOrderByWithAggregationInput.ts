import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskMasterMetadataAvgOrderByAggregateInput } from "../inputs/TaskMasterMetadataAvgOrderByAggregateInput";
import { TaskMasterMetadataCountOrderByAggregateInput } from "../inputs/TaskMasterMetadataCountOrderByAggregateInput";
import { TaskMasterMetadataMaxOrderByAggregateInput } from "../inputs/TaskMasterMetadataMaxOrderByAggregateInput";
import { TaskMasterMetadataMinOrderByAggregateInput } from "../inputs/TaskMasterMetadataMinOrderByAggregateInput";
import { TaskMasterMetadataSumOrderByAggregateInput } from "../inputs/TaskMasterMetadataSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TaskMasterMetadataOrderByWithAggregationInput", {})
export class TaskMasterMetadataOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TaskMasterMetadataCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TaskMasterMetadataCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskMasterMetadataAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TaskMasterMetadataAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskMasterMetadataMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TaskMasterMetadataMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskMasterMetadataMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TaskMasterMetadataMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskMasterMetadataSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TaskMasterMetadataSumOrderByAggregateInput | undefined;
}
