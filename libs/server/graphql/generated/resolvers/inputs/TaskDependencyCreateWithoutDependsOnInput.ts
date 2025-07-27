import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateNestedOneWithoutDependenciesInput } from "../inputs/TaskCreateNestedOneWithoutDependenciesInput";

@TypeGraphQL.InputType("TaskDependencyCreateWithoutDependsOnInput", {})
export class TaskDependencyCreateWithoutDependsOnInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutDependenciesInput, {
    nullable: false
  })
  task!: TaskCreateNestedOneWithoutDependenciesInput;
}
