import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskDependencyUpdateWithoutTaskInput } from "../inputs/TaskDependencyUpdateWithoutTaskInput";
import { TaskDependencyWhereUniqueInput } from "../inputs/TaskDependencyWhereUniqueInput";

@TypeGraphQL.InputType("TaskDependencyUpdateWithWhereUniqueWithoutTaskInput", {})
export class TaskDependencyUpdateWithWhereUniqueWithoutTaskInput {
  @TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput, {
    nullable: false
  })
  where!: TaskDependencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskDependencyUpdateWithoutTaskInput, {
    nullable: false
  })
  data!: TaskDependencyUpdateWithoutTaskInput;
}
