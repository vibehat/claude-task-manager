import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TaskUpdateOneRequiredWithoutDependentsNestedInput } from "../inputs/TaskUpdateOneRequiredWithoutDependentsNestedInput";

@TypeGraphQL.InputType("TaskDependencyUpdateWithoutTaskInput", {})
export class TaskDependencyUpdateWithoutTaskInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateOneRequiredWithoutDependentsNestedInput, {
    nullable: true
  })
  dependsOn?: TaskUpdateOneRequiredWithoutDependentsNestedInput | undefined;
}
