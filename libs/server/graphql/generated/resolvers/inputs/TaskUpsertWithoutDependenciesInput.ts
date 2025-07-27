import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutDependenciesInput } from "../inputs/TaskCreateWithoutDependenciesInput";
import { TaskUpdateWithoutDependenciesInput } from "../inputs/TaskUpdateWithoutDependenciesInput";
import { TaskWhereInput } from "../inputs/TaskWhereInput";

@TypeGraphQL.InputType("TaskUpsertWithoutDependenciesInput", {})
export class TaskUpsertWithoutDependenciesInput {
  @TypeGraphQL.Field(_type => TaskUpdateWithoutDependenciesInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutDependenciesInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutDependenciesInput, {
    nullable: false
  })
  create!: TaskCreateWithoutDependenciesInput;

  @TypeGraphQL.Field(_type => TaskWhereInput, {
    nullable: true
  })
  where?: TaskWhereInput | undefined;
}
