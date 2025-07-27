import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskDependencyCreateWithoutDependsOnInput } from "../inputs/TaskDependencyCreateWithoutDependsOnInput";
import { TaskDependencyWhereUniqueInput } from "../inputs/TaskDependencyWhereUniqueInput";

@TypeGraphQL.InputType("TaskDependencyCreateOrConnectWithoutDependsOnInput", {})
export class TaskDependencyCreateOrConnectWithoutDependsOnInput {
  @TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput, {
    nullable: false
  })
  where!: TaskDependencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskDependencyCreateWithoutDependsOnInput, {
    nullable: false
  })
  create!: TaskDependencyCreateWithoutDependsOnInput;
}
