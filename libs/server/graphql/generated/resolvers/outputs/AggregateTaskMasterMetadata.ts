import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskMasterMetadataAvgAggregate } from "../outputs/TaskMasterMetadataAvgAggregate";
import { TaskMasterMetadataCountAggregate } from "../outputs/TaskMasterMetadataCountAggregate";
import { TaskMasterMetadataMaxAggregate } from "../outputs/TaskMasterMetadataMaxAggregate";
import { TaskMasterMetadataMinAggregate } from "../outputs/TaskMasterMetadataMinAggregate";
import { TaskMasterMetadataSumAggregate } from "../outputs/TaskMasterMetadataSumAggregate";

@TypeGraphQL.ObjectType("AggregateTaskMasterMetadata", {})
export class AggregateTaskMasterMetadata {
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
