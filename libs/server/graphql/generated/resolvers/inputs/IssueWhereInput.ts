import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleNullableRelationFilter } from "../inputs/CycleNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { IssueLabelListRelationFilter } from "../inputs/IssueLabelListRelationFilter";
import { IssueListRelationFilter } from "../inputs/IssueListRelationFilter";
import { IssueNullableRelationFilter } from "../inputs/IssueNullableRelationFilter";
import { IssuePriorityNullableRelationFilter } from "../inputs/IssuePriorityNullableRelationFilter";
import { IssueStatusNullableRelationFilter } from "../inputs/IssueStatusNullableRelationFilter";
import { ProjectNullableRelationFilter } from "../inputs/ProjectNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { SubtaskNullableRelationFilter } from "../inputs/SubtaskNullableRelationFilter";
import { TaskNullableRelationFilter } from "../inputs/TaskNullableRelationFilter";
import { UserNullableRelationFilter } from "../inputs/UserNullableRelationFilter";

@TypeGraphQL.InputType("IssueWhereInput", {})
export class IssueWhereInput {
  @TypeGraphQL.Field(_type => [IssueWhereInput], {
    nullable: true
  })
  AND?: IssueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereInput], {
    nullable: true
  })
  OR?: IssueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereInput], {
    nullable: true
  })
  NOT?: IssueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  statusId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  priorityId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  status?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  priority?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  rank?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  cycleId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  dueDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  taskId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  subtaskId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  issueType?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  parentIssueId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  assigneeId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  projectId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserNullableRelationFilter, {
    nullable: true
  })
  assignee?: UserNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectNullableRelationFilter, {
    nullable: true
  })
  project?: ProjectNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CycleNullableRelationFilter, {
    nullable: true
  })
  cycle?: CycleNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TaskNullableRelationFilter, {
    nullable: true
  })
  task?: TaskNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SubtaskNullableRelationFilter, {
    nullable: true
  })
  subtask?: SubtaskNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IssueStatusNullableRelationFilter, {
    nullable: true
  })
  issueStatus?: IssueStatusNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityNullableRelationFilter, {
    nullable: true
  })
  issuePriority?: IssuePriorityNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IssueLabelListRelationFilter, {
    nullable: true
  })
  labels?: IssueLabelListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IssueNullableRelationFilter, {
    nullable: true
  })
  parentIssue?: IssueNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IssueListRelationFilter, {
    nullable: true
  })
  subIssues?: IssueListRelationFilter | undefined;
}
