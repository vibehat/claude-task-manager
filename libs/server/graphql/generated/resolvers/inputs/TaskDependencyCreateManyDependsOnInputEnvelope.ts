import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskDependencyCreateManyDependsOnInput } from "../inputs/TaskDependencyCreateManyDependsOnInput";

@TypeGraphQL.InputType("TaskDependencyCreateManyDependsOnInputEnvelope", {})
export class TaskDependencyCreateManyDependsOnInputEnvelope {
  @TypeGraphQL.Field(_type => [TaskDependencyCreateManyDependsOnInput], {
    nullable: false
  })
  data!: TaskDependencyCreateManyDependsOnInput[];
}
