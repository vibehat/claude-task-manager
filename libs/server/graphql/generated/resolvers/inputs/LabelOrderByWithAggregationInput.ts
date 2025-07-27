import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCountOrderByAggregateInput } from "../inputs/LabelCountOrderByAggregateInput";
import { LabelMaxOrderByAggregateInput } from "../inputs/LabelMaxOrderByAggregateInput";
import { LabelMinOrderByAggregateInput } from "../inputs/LabelMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LabelOrderByWithAggregationInput", {})
export class LabelOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  color?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LabelCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LabelCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LabelMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LabelMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LabelMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LabelMinOrderByAggregateInput | undefined;
}
