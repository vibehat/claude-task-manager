import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskMasterMetadataAvgAggregate } from "../outputs/TaskMasterMetadataAvgAggregate";
import { TaskMasterMetadataCountAggregate } from "../outputs/TaskMasterMetadataCountAggregate";
import { TaskMasterMetadataMaxAggregate } from "../outputs/TaskMasterMetadataMaxAggregate";
import { TaskMasterMetadataMinAggregate } from "../outputs/TaskMasterMetadataMinAggregate";
import { TaskMasterMetadataSumAggregate } from "../outputs/TaskMasterMetadataSumAggregate";

@TypeGraphQL.ObjectType("TaskMasterMetadataGroupBy", {})
export class TaskMasterMetadataGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => TaskMasterMetadataCountAggregate, {
    nullable: true
  })
  _count!: TaskMasterMetadataCountAggregate | null;

  @TypeGraphQL.Field(_type => TaskMasterMetadataAvgAggregate, {
    nullable: true
  })
  _avg!: TaskMasterMetadataAvgAggregate | null;

  @TypeGraphQL.Field(_type => TaskMasterMetadataSumAggregate, {
    nullable: true
  })
  _sum!: TaskMasterMetadataSumAggregate | null;

  @TypeGraphQL.Field(_type => TaskMasterMetadataMinAggregate, {
    nullable: true
  })
  _min!: TaskMasterMetadataMinAggregate | null;

  @TypeGraphQL.Field(_type => TaskMasterMetadataMaxAggregate, {
    nullable: true
  })
  _max!: TaskMasterMetadataMaxAggregate | null;
}
