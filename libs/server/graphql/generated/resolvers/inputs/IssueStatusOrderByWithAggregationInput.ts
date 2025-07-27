import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueStatusCountOrderByAggregateInput } from "../inputs/IssueStatusCountOrderByAggregateInput";
import { IssueStatusMaxOrderByAggregateInput } from "../inputs/IssueStatusMaxOrderByAggregateInput";
import { IssueStatusMinOrderByAggregateInput } from "../inputs/IssueStatusMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IssueStatusOrderByWithAggregationInput", {})
export class IssueStatusOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  iconName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IssueStatusCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IssueStatusCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssueStatusMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IssueStatusMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssueStatusMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IssueStatusMinOrderByAggregateInput | undefined;
}
