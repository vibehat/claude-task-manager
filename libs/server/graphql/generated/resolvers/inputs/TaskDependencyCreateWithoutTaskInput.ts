import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateNestedOneWithoutDependentsInput } from "../inputs/TaskCreateNestedOneWithoutDependentsInput";

@TypeGraphQL.InputType("TaskDependencyCreateWithoutTaskInput", {})
export class TaskDependencyCreateWithoutTaskInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutDependentsInput, {
    nullable: false
  })
  dependsOn!: TaskCreateNestedOneWithoutDependentsInput;
}
