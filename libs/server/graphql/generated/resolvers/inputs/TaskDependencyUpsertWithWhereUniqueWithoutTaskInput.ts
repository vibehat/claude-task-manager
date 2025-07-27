import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskDependencyCreateWithoutTaskInput } from "../inputs/TaskDependencyCreateWithoutTaskInput";
import { TaskDependencyUpdateWithoutTaskInput } from "../inputs/TaskDependencyUpdateWithoutTaskInput";
import { TaskDependencyWhereUniqueInput } from "../inputs/TaskDependencyWhereUniqueInput";

@TypeGraphQL.InputType("TaskDependencyUpsertWithWhereUniqueWithoutTaskInput", {})
export class TaskDependencyUpsertWithWhereUniqueWithoutTaskInput {
  @TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput, {
    nullable: false
  })
  where!: TaskDependencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskDependencyUpdateWithoutTaskInput, {
    nullable: false
  })
  update!: TaskDependencyUpdateWithoutTaskInput;

  @TypeGraphQL.Field(_type => TaskDependencyCreateWithoutTaskInput, {
    nullable: false
  })
  create!: TaskDependencyCreateWithoutTaskInput;
}
