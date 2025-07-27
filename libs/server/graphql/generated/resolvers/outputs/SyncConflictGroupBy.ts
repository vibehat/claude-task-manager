import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SyncConflictCountAggregate } from "../outputs/SyncConflictCountAggregate";
import { SyncConflictMaxAggregate } from "../outputs/SyncConflictMaxAggregate";
import { SyncConflictMinAggregate } from "../outputs/SyncConflictMinAggregate";

@TypeGraphQL.ObjectType("SyncConflictGroupBy", {})
export class SyncConflictGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  operationType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  taskId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  uiVersion!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cliVersion!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  resolved!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resolution!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  resolvedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resolvedBy!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  timestamp!: Date;

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
