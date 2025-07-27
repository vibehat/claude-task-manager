import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskDependencyScalarWhereInput } from "../inputs/TaskDependencyScalarWhereInput";
import { TaskDependencyUpdateManyMutationInput } from "../inputs/TaskDependencyUpdateManyMutationInput";

@TypeGraphQL.InputType("TaskDependencyUpdateManyWithWhereWithoutDependsOnInput", {})
export class TaskDependencyUpdateManyWithWhereWithoutDependsOnInput {
  @TypeGraphQL.Field(_type => TaskDependencyScalarWhereInput, {
    nullable: false
  })
  where!: TaskDependencyScalarWhereInput;

  @TypeGraphQL.Field(_type => TaskDependencyUpdateManyMutationInput, {
    nullable: false
  })
  data!: TaskDependencyUpdateManyMutationInput;
}
