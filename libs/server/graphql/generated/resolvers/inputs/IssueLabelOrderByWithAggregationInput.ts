import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCountOrderByAggregateInput } from "../inputs/IssueLabelCountOrderByAggregateInput";
import { IssueLabelMaxOrderByAggregateInput } from "../inputs/IssueLabelMaxOrderByAggregateInput";
import { IssueLabelMinOrderByAggregateInput } from "../inputs/IssueLabelMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IssueLabelOrderByWithAggregationInput", {})
export class IssueLabelOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  issueId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  labelId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IssueLabelCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IssueLabelCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssueLabelMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IssueLabelMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssueLabelMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IssueLabelMinOrderByAggregateInput | undefined;
}
