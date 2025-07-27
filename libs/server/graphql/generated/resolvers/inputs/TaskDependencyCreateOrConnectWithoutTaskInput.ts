import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskDependencyCreateWithoutTaskInput } from "../inputs/TaskDependencyCreateWithoutTaskInput";
import { TaskDependencyWhereUniqueInput } from "../inputs/TaskDependencyWhereUniqueInput";

@TypeGraphQL.InputType("TaskDependencyCreateOrConnectWithoutTaskInput", {})
export class TaskDependencyCreateOrConnectWithoutTaskInput {
  @TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput, {
    nullable: false
  })
  where!: TaskDependencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskDependencyCreateWithoutTaskInput, {
    nullable: false
  })
  create!: TaskDependencyCreateWithoutTaskInput;
}
