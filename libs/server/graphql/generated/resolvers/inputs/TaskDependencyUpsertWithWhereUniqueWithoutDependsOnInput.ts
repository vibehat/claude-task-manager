import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskDependencyCreateWithoutDependsOnInput } from "../inputs/TaskDependencyCreateWithoutDependsOnInput";
import { TaskDependencyUpdateWithoutDependsOnInput } from "../inputs/TaskDependencyUpdateWithoutDependsOnInput";
import { TaskDependencyWhereUniqueInput } from "../inputs/TaskDependencyWhereUniqueInput";

@TypeGraphQL.InputType("TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput", {})
export class TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput {
  @TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput, {
    nullable: false
  })
  where!: TaskDependencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskDependencyUpdateWithoutDependsOnInput, {
    nullable: false
  })
  update!: TaskDependencyUpdateWithoutDependsOnInput;

  @TypeGraphQL.Field(_type => TaskDependencyCreateWithoutDependsOnInput, {
    nullable: false
  })
  create!: TaskDependencyCreateWithoutDependsOnInput;
}
