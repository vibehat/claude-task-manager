import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SyncOperationAvgAggregate } from "../outputs/SyncOperationAvgAggregate";
import { SyncOperationCountAggregate } from "../outputs/SyncOperationCountAggregate";
import { SyncOperationMaxAggregate } from "../outputs/SyncOperationMaxAggregate";
import { SyncOperationMinAggregate } from "../outputs/SyncOperationMinAggregate";
import { SyncOperationSumAggregate } from "../outputs/SyncOperationSumAggregate";

@TypeGraphQL.ObjectType("SyncOperationGroupBy", {})
export class SyncOperationGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  source!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  timestamp!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  data!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rollbackData!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  metadata!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  retryCount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  maxRetries!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  error!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  taskIds!: string;

  @TypeGraphQL.Field(_type => SyncOperationCountAggregate, {
    nullable: true
  })
  _count!: SyncOperationCountAggregate | null;

  @TypeGraphQL.Field(_type => SyncOperationAvgAggregate, {
    nullable: true
  })
  _avg!: SyncOperationAvgAggregate | null;

  @TypeGraphQL.Field(_type => SyncOperationSumAggregate, {
    nullable: true
  })
  _sum!: SyncOperationSumAggregate | null;

  @TypeGraphQL.Field(_type => SyncOperationMinAggregate, {
    nullable: true
  })
  _min!: SyncOperationMinAggregate | null;

  @TypeGraphQL.Field(_type => SyncOperationMaxAggregate, {
    nullable: true
  })
  _max!: SyncOperationMaxAggregate | null;
}
