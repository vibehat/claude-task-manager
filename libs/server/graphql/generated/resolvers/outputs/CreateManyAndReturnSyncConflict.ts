import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CreateManyAndReturnSyncConflict", {})
export class CreateManyAndReturnSyncConflict {
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
}
