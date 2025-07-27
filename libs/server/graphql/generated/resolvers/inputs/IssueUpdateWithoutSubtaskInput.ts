import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleUpdateOneWithoutIssuesNestedInput } from "../inputs/CycleUpdateOneWithoutIssuesNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IssueLabelUpdateManyWithoutIssueNestedInput } from "../inputs/IssueLabelUpdateManyWithoutIssueNestedInput";
import { IssuePriorityUpdateOneWithoutIssuesNestedInput } from "../inputs/IssuePriorityUpdateOneWithoutIssuesNestedInput";
import { IssueStatusUpdateOneWithoutIssuesNestedInput } from "../inputs/IssueStatusUpdateOneWithoutIssuesNestedInput";
import { IssueUpdateManyWithoutParentIssueNestedInput } from "../inputs/IssueUpdateManyWithoutParentIssueNestedInput";
import { IssueUpdateOneWithoutSubIssuesNestedInput } from "../inputs/IssueUpdateOneWithoutSubIssuesNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectUpdateOneWithoutIssuesNestedInput } from "../inputs/ProjectUpdateOneWithoutIssuesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateOneWithoutIssuesNestedInput } from "../inputs/TaskUpdateOneWithoutIssuesNestedInput";
import { UserUpdateOneWithoutAssignedIssuesNestedInput } from "../inputs/UserUpdateOneWithoutAssignedIssuesNestedInput";

@TypeGraphQL.InputType("IssueUpdateWithoutSubtaskInput", {})
export class IssueUpdateWithoutSubtaskInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  priority?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  rank?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  dueDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  issueType?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutAssignedIssuesNestedInput, {
    nullable: true
  })
  assignee?: UserUpdateOneWithoutAssignedIssuesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateOneWithoutIssuesNestedInput, {
    nullable: true
  })
  project?: ProjectUpdateOneWithoutIssuesNestedInput | undefined;

  @TypeGraphQL.Field(_type => CycleUpdateOneWithoutIssuesNestedInput, {
    nullable: true
  })
  cycle?: CycleUpdateOneWithoutIssuesNestedInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateOneWithoutIssuesNestedInput, {
    nullable: true
  })
  task?: TaskUpdateOneWithoutIssuesNestedInput | undefined;

  @TypeGraphQL.Field(_type => IssueStatusUpdateOneWithoutIssuesNestedInput, {
    nullable: true
  })
  issueStatus?: IssueStatusUpdateOneWithoutIssuesNestedInput | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityUpdateOneWithoutIssuesNestedInput, {
    nullable: true
  })
  issuePriority?: IssuePriorityUpdateOneWithoutIssuesNestedInput | undefined;

  @TypeGraphQL.Field(_type => IssueLabelUpdateManyWithoutIssueNestedInput, {
    nullable: true
  })
  labels?: IssueLabelUpdateManyWithoutIssueNestedInput | undefined;

  @TypeGraphQL.Field(_type => IssueUpdateOneWithoutSubIssuesNestedInput, {
    nullable: true
  })
  parentIssue?: IssueUpdateOneWithoutSubIssuesNestedInput | undefined;

  @TypeGraphQL.Field(_type => IssueUpdateManyWithoutParentIssueNestedInput, {
    nullable: true
  })
  subIssues?: IssueUpdateManyWithoutParentIssueNestedInput | undefined;
}
