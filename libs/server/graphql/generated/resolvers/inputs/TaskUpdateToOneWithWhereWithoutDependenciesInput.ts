import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskUpdateWithoutDependenciesInput } from "../inputs/TaskUpdateWithoutDependenciesInput";
import { TaskWhereInput } from "../inputs/TaskWhereInput";

@TypeGraphQL.InputType("TaskUpdateToOneWithWhereWithoutDependenciesInput", {})
export class TaskUpdateToOneWithWhereWithoutDependenciesInput {
  @TypeGraphQL.Field(_type => TaskWhereInput, {
    nullable: true
  })
  where?: TaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutDependenciesInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutDependenciesInput;
}
