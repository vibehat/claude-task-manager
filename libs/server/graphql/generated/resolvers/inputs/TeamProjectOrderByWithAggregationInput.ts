import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamProjectCountOrderByAggregateInput } from "../inputs/TeamProjectCountOrderByAggregateInput";
import { TeamProjectMaxOrderByAggregateInput } from "../inputs/TeamProjectMaxOrderByAggregateInput";
import { TeamProjectMinOrderByAggregateInput } from "../inputs/TeamProjectMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TeamProjectOrderByWithAggregationInput", {})
export class TeamProjectOrderByWithAggregationInput {
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
  projectId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TeamProjectCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TeamProjectCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TeamProjectMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TeamProjectMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TeamProjectMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TeamProjectMinOrderByAggregateInput | undefined;
}
