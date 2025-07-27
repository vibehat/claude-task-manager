import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutSubtasksInput } from "../inputs/TaskCreateWithoutSubtasksInput";
import { TaskUpdateWithoutSubtasksInput } from "../inputs/TaskUpdateWithoutSubtasksInput";
import { TaskWhereInput } from "../inputs/TaskWhereInput";

@TypeGraphQL.InputType("TaskUpsertWithoutSubtasksInput", {})
export class TaskUpsertWithoutSubtasksInput {
  @TypeGraphQL.Field(_type => TaskUpdateWithoutSubtasksInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutSubtasksInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutSubtasksInput, {
    nullable: false
  })
  create!: TaskCreateWithoutSubtasksInput;

  @TypeGraphQL.Field(_type => TaskWhereInput, {
    nullable: true
  })
  where?: TaskWhereInput | undefined;
}
