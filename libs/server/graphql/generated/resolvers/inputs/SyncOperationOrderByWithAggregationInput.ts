import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SyncOperationAvgOrderByAggregateInput } from "../inputs/SyncOperationAvgOrderByAggregateInput";
import { SyncOperationCountOrderByAggregateInput } from "../inputs/SyncOperationCountOrderByAggregateInput";
import { SyncOperationMaxOrderByAggregateInput } from "../inputs/SyncOperationMaxOrderByAggregateInput";
import { SyncOperationMinOrderByAggregateInput } from "../inputs/SyncOperationMinOrderByAggregateInput";
import { SyncOperationSumOrderByAggregateInput } from "../inputs/SyncOperationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SyncOperationOrderByWithAggregationInput", {})
export class SyncOperationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  source?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timestamp?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  completedAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  data?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  rollbackData?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  metadata?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  retryCount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  maxRetries?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  error?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  taskIds?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SyncOperationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SyncOperationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SyncOperationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SyncOperationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SyncOperationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SyncOperationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SyncOperationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SyncOperationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SyncOperationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SyncOperationSumOrderByAggregateInput | undefined;
}
