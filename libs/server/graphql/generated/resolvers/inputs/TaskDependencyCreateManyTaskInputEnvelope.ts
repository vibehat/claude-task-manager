import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskDependencyCreateManyTaskInput } from "../inputs/TaskDependencyCreateManyTaskInput";

@TypeGraphQL.InputType("TaskDependencyCreateManyTaskInputEnvelope", {})
export class TaskDependencyCreateManyTaskInputEnvelope {
  @TypeGraphQL.Field(_type => [TaskDependencyCreateManyTaskInput], {
    nullable: false
  })
  data!: TaskDependencyCreateManyTaskInput[];
}
