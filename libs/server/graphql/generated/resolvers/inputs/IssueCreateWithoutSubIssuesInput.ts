import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleCreateNestedOneWithoutIssuesInput } from "../inputs/CycleCreateNestedOneWithoutIssuesInput";
import { IssueCreateNestedOneWithoutSubIssuesInput } from "../inputs/IssueCreateNestedOneWithoutSubIssuesInput";
import { IssueLabelCreateNestedManyWithoutIssueInput } from "../inputs/IssueLabelCreateNestedManyWithoutIssueInput";
import { IssuePriorityCreateNestedOneWithoutIssuesInput } from "../inputs/IssuePriorityCreateNestedOneWithoutIssuesInput";
import { IssueStatusCreateNestedOneWithoutIssuesInput } from "../inputs/IssueStatusCreateNestedOneWithoutIssuesInput";
import { ProjectCreateNestedOneWithoutIssuesInput } from "../inputs/ProjectCreateNestedOneWithoutIssuesInput";
import { SubtaskCreateNestedOneWithoutIssuesInput } from "../inputs/SubtaskCreateNestedOneWithoutIssuesInput";
import { TaskCreateNestedOneWithoutIssuesInput } from "../inputs/TaskCreateNestedOneWithoutIssuesInput";
import { UserCreateNestedOneWithoutAssignedIssuesInput } from "../inputs/UserCreateNestedOneWithoutAssignedIssuesInput";

@TypeGraphQL.InputType("IssueCreateWithoutSubIssuesInput", {})
export class IssueCreateWithoutSubIssuesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  rank!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dueDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  issueType!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAssignedIssuesInput, {
    nullable: true
  })
  assignee?: UserCreateNestedOneWithoutAssignedIssuesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutIssuesInput, {
    nullable: true
  })
  project?: ProjectCreateNestedOneWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => CycleCreateNestedOneWithoutIssuesInput, {
    nullable: true
  })
  cycle?: CycleCreateNestedOneWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutIssuesInput, {
    nullable: true
  })
  task?: TaskCreateNestedOneWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskCreateNestedOneWithoutIssuesInput, {
    nullable: true
  })
  subtask?: SubtaskCreateNestedOneWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssueStatusCreateNestedOneWithoutIssuesInput, {
    nullable: true
  })
  issueStatus?: IssueStatusCreateNestedOneWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityCreateNestedOneWithoutIssuesInput, {
    nullable: true
  })
  issuePriority?: IssuePriorityCreateNestedOneWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssueLabelCreateNestedManyWithoutIssueInput, {
    nullable: true
  })
  labels?: IssueLabelCreateNestedManyWithoutIssueInput | undefined;

  @TypeGraphQL.Field(_type => IssueCreateNestedOneWithoutSubIssuesInput, {
    nullable: true
  })
  parentIssue?: IssueCreateNestedOneWithoutSubIssuesInput | undefined;
}
