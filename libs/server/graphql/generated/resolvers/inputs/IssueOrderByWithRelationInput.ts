import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleOrderByWithRelationInput } from "../inputs/CycleOrderByWithRelationInput";
import { IssueLabelOrderByRelationAggregateInput } from "../inputs/IssueLabelOrderByRelationAggregateInput";
import { IssueOrderByRelationAggregateInput } from "../inputs/IssueOrderByRelationAggregateInput";
import { IssuePriorityOrderByWithRelationInput } from "../inputs/IssuePriorityOrderByWithRelationInput";
import { IssueStatusOrderByWithRelationInput } from "../inputs/IssueStatusOrderByWithRelationInput";
import { ProjectOrderByWithRelationInput } from "../inputs/ProjectOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SubtaskOrderByWithRelationInput } from "../inputs/SubtaskOrderByWithRelationInput";
import { TaskOrderByWithRelationInput } from "../inputs/TaskOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IssueOrderByWithRelationInput", {})
export class IssueOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  assignee?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ProjectOrderByWithRelationInput, {
    nullable: true
  })
  project?: ProjectOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => CycleOrderByWithRelationInput, {
    nullable: true
  })
  cycle?: CycleOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TaskOrderByWithRelationInput, {
    nullable: true
  })
  task?: TaskOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskOrderByWithRelationInput, {
    nullable: true
  })
  subtask?: SubtaskOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => IssueStatusOrderByWithRelationInput, {
    nullable: true
  })
  issueStatus?: IssueStatusOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityOrderByWithRelationInput, {
    nullable: true
  })
  issuePriority?: IssuePriorityOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => IssueLabelOrderByRelationAggregateInput, {
    nullable: true
  })
  labels?: IssueLabelOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssueOrderByWithRelationInput, {
    nullable: true
  })
  parentIssue?: IssueOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => IssueOrderByRelationAggregateInput, {
    nullable: true
  })
  subIssues?: IssueOrderByRelationAggregateInput | undefined;
}
