import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SyncConflictCountOrderByAggregateInput } from "../inputs/SyncConflictCountOrderByAggregateInput";
import { SyncConflictMaxOrderByAggregateInput } from "../inputs/SyncConflictMaxOrderByAggregateInput";
import { SyncConflictMinOrderByAggregateInput } from "../inputs/SyncConflictMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SyncConflictOrderByWithAggregationInput", {})
export class SyncConflictOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  operationType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  taskId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  uiVersion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cliVersion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  resolved?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  resolution?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  resolvedAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  resolvedBy?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timestamp?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SyncConflictCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SyncConflictCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SyncConflictMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SyncConflictMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SyncConflictMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SyncConflictMinOrderByAggregateInput | undefined;
}
