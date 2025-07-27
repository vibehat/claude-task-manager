import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskDependencyUpdateWithoutDependsOnInput } from "../inputs/TaskDependencyUpdateWithoutDependsOnInput";
import { TaskDependencyWhereUniqueInput } from "../inputs/TaskDependencyWhereUniqueInput";

@TypeGraphQL.InputType("TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput", {})
export class TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput {
  @TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput, {
    nullable: false
  })
  where!: TaskDependencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskDependencyUpdateWithoutDependsOnInput, {
    nullable: false
  })
  data!: TaskDependencyUpdateWithoutDependsOnInput;
}
