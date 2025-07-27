import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SyncConflictCountAggregate } from "../outputs/SyncConflictCountAggregate";
import { SyncConflictMaxAggregate } from "../outputs/SyncConflictMaxAggregate";
import { SyncConflictMinAggregate } from "../outputs/SyncConflictMinAggregate";

@TypeGraphQL.ObjectType("AggregateSyncConflict", {})
export class AggregateSyncConflict {
  @TypeGraphQL.Field(_type => SyncConflictCountAggregate, {
    nullable: true
  })
  _count!: SyncConflictCountAggregate | null;

  @TypeGraphQL.Field(_type => SyncConflictMinAggregate, {
    nullable: true
  })
  _min!: SyncConflictMinAggregate | null;

  @TypeGraphQL.Field(_type => SyncConflictMaxAggregate, {
    nullable: true
  })
  _max!: SyncConflictMaxAggregate | null;
}
