import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskDependencyAvgAggregate } from "../outputs/TaskDependencyAvgAggregate";
import { TaskDependencyCountAggregate } from "../outputs/TaskDependencyCountAggregate";
import { TaskDependencyMaxAggregate } from "../outputs/TaskDependencyMaxAggregate";
import { TaskDependencyMinAggregate } from "../outputs/TaskDependencyMinAggregate";
import { TaskDependencySumAggregate } from "../outputs/TaskDependencySumAggregate";

@TypeGraphQL.ObjectType("TaskDependencyGroupBy", {})
export class TaskDependencyGroupBy {
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

  @TypeGraphQL.Field(_type => TaskDependencyCountAggregate, {
    nullable: true
  })
  _count!: TaskDependencyCountAggregate | null;

  @TypeGraphQL.Field(_type => TaskDependencyAvgAggregate, {
    nullable: true
  })
  _avg!: TaskDependencyAvgAggregate | null;

  @TypeGraphQL.Field(_type => TaskDependencySumAggregate, {
    nullable: true
  })
  _sum!: TaskDependencySumAggregate | null;

  @TypeGraphQL.Field(_type => TaskDependencyMinAggregate, {
    nullable: true
  })
  _min!: TaskDependencyMinAggregate | null;

  @TypeGraphQL.Field(_type => TaskDependencyMaxAggregate, {
    nullable: true
  })
  _max!: TaskDependencyMaxAggregate | null;
}
