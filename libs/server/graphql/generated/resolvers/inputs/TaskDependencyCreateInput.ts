import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateNestedOneWithoutDependenciesInput } from "../inputs/TaskCreateNestedOneWithoutDependenciesInput";
import { TaskCreateNestedOneWithoutDependentsInput } from "../inputs/TaskCreateNestedOneWithoutDependentsInput";

@TypeGraphQL.InputType("TaskDependencyCreateInput", {})
export class TaskDependencyCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutDependenciesInput, {
    nullable: false
  })
  task!: TaskCreateNestedOneWithoutDependenciesInput;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutDependentsInput, {
    nullable: false
  })
  dependsOn!: TaskCreateNestedOneWithoutDependentsInput;
}
