import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssuePriorityAvgOrderByAggregateInput } from "../inputs/IssuePriorityAvgOrderByAggregateInput";
import { IssuePriorityCountOrderByAggregateInput } from "../inputs/IssuePriorityCountOrderByAggregateInput";
import { IssuePriorityMaxOrderByAggregateInput } from "../inputs/IssuePriorityMaxOrderByAggregateInput";
import { IssuePriorityMinOrderByAggregateInput } from "../inputs/IssuePriorityMinOrderByAggregateInput";
import { IssuePrioritySumOrderByAggregateInput } from "../inputs/IssuePrioritySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IssuePriorityOrderByWithAggregationInput", {})
export class IssuePriorityOrderByWithAggregationInput {
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
  iconName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IssuePriorityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: IssuePriorityAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IssuePriorityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IssuePriorityMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssuePrioritySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: IssuePrioritySumOrderByAggregateInput | undefined;
}
