import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Task } from "../../models/Task";

@TypeGraphQL.ObjectType("CreateManyAndReturnTaskDependency", {})
export class CreateManyAndReturnTaskDependency {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  taskId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  dependsOnId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Task, {
    nullable: false
  })
  task!: Task;

  @TypeGraphQL.Field(_type => Task, {
    nullable: false
  })
  dependsOn!: Task;
}
