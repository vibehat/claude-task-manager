import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueOrderByRelationAggregateInput } from "../inputs/IssueOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SubtaskOrderByRelationAggregateInput } from "../inputs/SubtaskOrderByRelationAggregateInput";
import { TaskDependencyOrderByRelationAggregateInput } from "../inputs/TaskDependencyOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TaskOrderByWithRelationInput", {})
export class TaskOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

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
  details?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  testStrategy?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  priority?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  complexity?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SubtaskOrderByRelationAggregateInput, {
    nullable: true
  })
  subtasks?: SubtaskOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskDependencyOrderByRelationAggregateInput, {
    nullable: true
  })
  dependencies?: TaskDependencyOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskDependencyOrderByRelationAggregateInput, {
    nullable: true
  })
  dependents?: TaskDependencyOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssueOrderByRelationAggregateInput, {
    nullable: true
  })
  issues?: IssueOrderByRelationAggregateInput | undefined;
}
