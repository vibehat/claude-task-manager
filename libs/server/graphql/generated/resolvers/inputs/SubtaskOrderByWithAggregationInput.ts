import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SubtaskAvgOrderByAggregateInput } from "../inputs/SubtaskAvgOrderByAggregateInput";
import { SubtaskCountOrderByAggregateInput } from "../inputs/SubtaskCountOrderByAggregateInput";
import { SubtaskMaxOrderByAggregateInput } from "../inputs/SubtaskMaxOrderByAggregateInput";
import { SubtaskMinOrderByAggregateInput } from "../inputs/SubtaskMinOrderByAggregateInput";
import { SubtaskSumOrderByAggregateInput } from "../inputs/SubtaskSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SubtaskOrderByWithAggregationInput", {})
export class SubtaskOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  details?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  testStrategy?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  parentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dependencies?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SubtaskCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SubtaskCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SubtaskAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SubtaskMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SubtaskMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SubtaskSumOrderByAggregateInput | undefined;
}
