import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutDependentsInput } from "../inputs/TaskCreateWithoutDependentsInput";
import { TaskUpdateWithoutDependentsInput } from "../inputs/TaskUpdateWithoutDependentsInput";
import { TaskWhereInput } from "../inputs/TaskWhereInput";

@TypeGraphQL.InputType("TaskUpsertWithoutDependentsInput", {})
export class TaskUpsertWithoutDependentsInput {
  @TypeGraphQL.Field(_type => TaskUpdateWithoutDependentsInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutDependentsInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutDependentsInput, {
    nullable: false
  })
  create!: TaskCreateWithoutDependentsInput;

  @TypeGraphQL.Field(_type => TaskWhereInput, {
    nullable: true
  })
  where?: TaskWhereInput | undefined;
}
