import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TaskUpdateOneRequiredWithoutDependenciesNestedInput } from "../inputs/TaskUpdateOneRequiredWithoutDependenciesNestedInput";

@TypeGraphQL.InputType("TaskDependencyUpdateWithoutDependsOnInput", {})
export class TaskDependencyUpdateWithoutDependsOnInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateOneRequiredWithoutDependenciesNestedInput, {
    nullable: true
  })
  task?: TaskUpdateOneRequiredWithoutDependenciesNestedInput | undefined;
}
