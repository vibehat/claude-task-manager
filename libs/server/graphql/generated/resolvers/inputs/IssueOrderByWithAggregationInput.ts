import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueAvgOrderByAggregateInput } from "../inputs/IssueAvgOrderByAggregateInput";
import { IssueCountOrderByAggregateInput } from "../inputs/IssueCountOrderByAggregateInput";
import { IssueMaxOrderByAggregateInput } from "../inputs/IssueMaxOrderByAggregateInput";
import { IssueMinOrderByAggregateInput } from "../inputs/IssueMinOrderByAggregateInput";
import { IssueSumOrderByAggregateInput } from "../inputs/IssueSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IssueOrderByWithAggregationInput", {})
export class IssueOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

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
  statusId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  priorityId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  status?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  priority?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rank?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  cycleId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  dueDate?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  taskId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  subtaskId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  issueType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  parentIssueId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  assigneeId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  projectId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IssueCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IssueCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssueAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: IssueAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssueMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IssueMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssueMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IssueMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssueSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: IssueSumOrderByAggregateInput | undefined;
}
