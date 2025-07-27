import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SyncOperationMaxAggregate", {})
export class SyncOperationMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  source!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  timestamp!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  data!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rollbackData!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  metadata!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  retryCount!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  maxRetries!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  error!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  taskIds!: string | null;
}
