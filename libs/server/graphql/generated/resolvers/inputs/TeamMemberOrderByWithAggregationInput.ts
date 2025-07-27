import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamMemberCountOrderByAggregateInput } from "../inputs/TeamMemberCountOrderByAggregateInput";
import { TeamMemberMaxOrderByAggregateInput } from "../inputs/TeamMemberMaxOrderByAggregateInput";
import { TeamMemberMinOrderByAggregateInput } from "../inputs/TeamMemberMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TeamMemberOrderByWithAggregationInput", {})
export class TeamMemberOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  teamId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TeamMemberCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TeamMemberCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TeamMemberMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TeamMemberMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TeamMemberMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TeamMemberMinOrderByAggregateInput | undefined;
}
