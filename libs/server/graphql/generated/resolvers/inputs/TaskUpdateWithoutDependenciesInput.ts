import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { IssueUpdateManyWithoutTaskNestedInput } from "../inputs/IssueUpdateManyWithoutTaskNestedInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SubtaskUpdateManyWithoutParentTaskNestedInput } from "../inputs/SubtaskUpdateManyWithoutParentTaskNestedInput";
import { TaskDependencyUpdateManyWithoutDependsOnNestedInput } from "../inputs/TaskDependencyUpdateManyWithoutDependsOnNestedInput";

@TypeGraphQL.InputType("TaskUpdateWithoutDependenciesInput", {})
export class TaskUpdateWithoutDependenciesInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

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
  details?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  testStrategy?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  priority?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  complexity?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskUpdateManyWithoutParentTaskNestedInput, {
    nullable: true
  })
  subtasks?: SubtaskUpdateManyWithoutParentTaskNestedInput | undefined;

  @TypeGraphQL.Field(_type => TaskDependencyUpdateManyWithoutDependsOnNestedInput, {
    nullable: true
  })
  dependents?: TaskDependencyUpdateManyWithoutDependsOnNestedInput | undefined;

  @TypeGraphQL.Field(_type => IssueUpdateManyWithoutTaskNestedInput, {
    nullable: true
  })
  issues?: IssueUpdateManyWithoutTaskNestedInput | undefined;
}
