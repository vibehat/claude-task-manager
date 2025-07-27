import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SyncConflictMinAggregate", {})
export class SyncConflictMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  operationType!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  taskId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uiVersion!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cliVersion!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  resolved!: boolean | null;

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
    nullable: true
  })
  timestamp!: Date | null;
}
