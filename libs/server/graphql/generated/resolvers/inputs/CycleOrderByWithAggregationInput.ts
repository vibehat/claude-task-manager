import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleAvgOrderByAggregateInput } from "../inputs/CycleAvgOrderByAggregateInput";
import { CycleCountOrderByAggregateInput } from "../inputs/CycleCountOrderByAggregateInput";
import { CycleMaxOrderByAggregateInput } from "../inputs/CycleMaxOrderByAggregateInput";
import { CycleMinOrderByAggregateInput } from "../inputs/CycleMinOrderByAggregateInput";
import { CycleSumOrderByAggregateInput } from "../inputs/CycleSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CycleOrderByWithAggregationInput", {})
export class CycleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  teamId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  startDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  endDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  progress?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CycleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CycleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CycleAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CycleAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CycleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CycleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CycleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CycleMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CycleSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CycleSumOrderByAggregateInput | undefined;
}
