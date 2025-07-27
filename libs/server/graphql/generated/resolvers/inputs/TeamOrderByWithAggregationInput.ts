import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCountOrderByAggregateInput } from "../inputs/TeamCountOrderByAggregateInput";
import { TeamMaxOrderByAggregateInput } from "../inputs/TeamMaxOrderByAggregateInput";
import { TeamMinOrderByAggregateInput } from "../inputs/TeamMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TeamOrderByWithAggregationInput", {})
export class TeamOrderByWithAggregationInput {
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
  icon?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  joined?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  color?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TeamCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TeamCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TeamMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TeamMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TeamMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TeamMinOrderByAggregateInput | undefined;
}
