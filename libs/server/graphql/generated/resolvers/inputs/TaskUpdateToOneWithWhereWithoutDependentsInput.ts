import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskUpdateWithoutDependentsInput } from "../inputs/TaskUpdateWithoutDependentsInput";
import { TaskWhereInput } from "../inputs/TaskWhereInput";

@TypeGraphQL.InputType("TaskUpdateToOneWithWhereWithoutDependentsInput", {})
export class TaskUpdateToOneWithWhereWithoutDependentsInput {
  @TypeGraphQL.Field(_type => TaskWhereInput, {
    nullable: true
  })
  where?: TaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutDependentsInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutDependentsInput;
}
