import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskUpdateWithoutSubtasksInput } from "../inputs/TaskUpdateWithoutSubtasksInput";
import { TaskWhereInput } from "../inputs/TaskWhereInput";

@TypeGraphQL.InputType("TaskUpdateToOneWithWhereWithoutSubtasksInput", {})
export class TaskUpdateToOneWithWhereWithoutSubtasksInput {
  @TypeGraphQL.Field(_type => TaskWhereInput, {
    nullable: true
  })
  where?: TaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutSubtasksInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutSubtasksInput;
}
