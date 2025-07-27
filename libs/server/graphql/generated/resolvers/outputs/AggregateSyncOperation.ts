import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SyncOperationAvgAggregate } from "../outputs/SyncOperationAvgAggregate";
import { SyncOperationCountAggregate } from "../outputs/SyncOperationCountAggregate";
import { SyncOperationMaxAggregate } from "../outputs/SyncOperationMaxAggregate";
import { SyncOperationMinAggregate } from "../outputs/SyncOperationMinAggregate";
import { SyncOperationSumAggregate } from "../outputs/SyncOperationSumAggregate";

@TypeGraphQL.ObjectType("AggregateSyncOperation", {})
export class AggregateSyncOperation {
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
