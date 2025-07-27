import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectAvgOrderByAggregateInput } from "../inputs/ProjectAvgOrderByAggregateInput";
import { ProjectCountOrderByAggregateInput } from "../inputs/ProjectCountOrderByAggregateInput";
import { ProjectMaxOrderByAggregateInput } from "../inputs/ProjectMaxOrderByAggregateInput";
import { ProjectMinOrderByAggregateInput } from "../inputs/ProjectMinOrderByAggregateInput";
import { ProjectSumOrderByAggregateInput } from "../inputs/ProjectSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProjectOrderByWithAggregationInput", {})
export class ProjectOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  color?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  identifier?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  icon?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  percentComplete?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  startDate?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  health?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  leadId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProjectCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProjectCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ProjectAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProjectMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProjectMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ProjectSumOrderByAggregateInput | undefined;
}
